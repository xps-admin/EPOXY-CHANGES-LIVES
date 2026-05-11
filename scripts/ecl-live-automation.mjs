import fs from 'node:fs';

const COMMAND_PATH = '.gpt/ecl-automation-command.json';
const APPROVAL_PHRASE = 'ECL APPROVE LIVE AUTOMATION';

function readCommand() {
  if (!fs.existsSync(COMMAND_PATH)) {
    throw new Error(`${COMMAND_PATH} not found`);
  }
  return JSON.parse(fs.readFileSync(COMMAND_PATH, 'utf8'));
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required secret/env: ${name}`);
  return value;
}

function assertLiveApproval(command) {
  if (command.dry_run !== false) {
    return { live: false, reason: 'dry_run is true or omitted' };
  }
  if (command.approval_phrase !== APPROVAL_PHRASE) {
    throw new Error(`Live execution blocked. approval_phrase must equal: ${APPROVAL_PHRASE}`);
  }
  if (!command.approval_ticket || String(command.approval_ticket).trim().length < 4) {
    throw new Error('Live execution blocked. approval_ticket is required.');
  }
  return { live: true, reason: command.approval_ticket };
}

async function writeSupabaseAudit({ operation, status, details }) {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { skipped: true, reason: 'Supabase env not configured' };

  const response = await fetch(`${url}/rest/v1/ecl_audit_logs`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      action: operation,
      status,
      source: 'github_actions_live_bridge',
      target: 'ecl_automation',
      details,
    }),
  });

  if (!response.ok) return { ok: false, status: response.status, body: await response.text() };
  return { ok: true };
}

async function publishShopify(payload, live) {
  const shopDomain = requireEnv('SHOPIFY_SHOP_DOMAIN');
  const token = requireEnv('SHOPIFY_ADMIN_ACCESS_TOKEN');
  const apiVersion = process.env.SHOPIFY_API_VERSION || '2025-01';
  const resources = payload?.shopify_resources || [];

  if (!resources.length) {
    return { ok: true, message: 'No Shopify resources supplied', live, results: [] };
  }

  const results = [];
  for (const resource of resources) {
    const type = resource.type || 'product';
    const id = resource.id;
    if (!id) throw new Error('Shopify resource id is required');

    if (!live) {
      results.push({ type, id, dry_run: true, action: 'would publish' });
      continue;
    }

    if (type === 'product') {
      const mutation = `mutation PublishablePublish($id: ID!, $input: [PublicationInput!]!) { publishablePublish(id: $id, input: $input) { publishable { ... on Product { id title status } } userErrors { field message } } }`;
      const publicationId = resource.publicationId || process.env.SHOPIFY_PUBLICATION_ID;
      if (!publicationId) throw new Error('SHOPIFY_PUBLICATION_ID or resource.publicationId is required to publish a product');
      const response = await fetch(`https://${shopDomain}/admin/api/${apiVersion}/graphql.json`, {
        method: 'POST',
        headers: {
          'X-Shopify-Access-Token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: mutation, variables: { id, input: [{ publicationId }] } }),
      });
      const data = await response.json();
      results.push({ type, id, status: response.status, data });
      continue;
    }

    if (type === 'page') {
      const numericId = id.replace('gid://shopify/Page/', '');
      const response = await fetch(`https://${shopDomain}/admin/api/${apiVersion}/pages/${numericId}.json`, {
        method: 'PUT',
        headers: {
          'X-Shopify-Access-Token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ page: { id: Number(numericId), published: true } }),
      });
      const data = await response.json();
      results.push({ type, id, status: response.status, data });
      continue;
    }

    throw new Error(`Unsupported Shopify publish type: ${type}`);
  }

  return { ok: true, live, results };
}

async function callAppsScriptBridge(payload, live, operation) {
  const url = requireEnv('ECL_APPS_SCRIPT_WEBAPP_URL');
  const secret = requireEnv('ECL_APPS_SCRIPT_SECRET');
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ operation, live, secret, payload }),
  });
  const text = await response.text();
  let body;
  try { body = JSON.parse(text); } catch { body = text; }
  if (!response.ok) throw new Error(`Apps Script bridge failed: ${response.status} ${text}`);
  return { ok: true, status: response.status, body };
}

async function postSocialContent(payload, live) {
  const posts = payload?.social_posts || [];
  if (!posts.length) return { ok: true, message: 'No social posts supplied', live, results: [] };

  const results = [];
  for (const post of posts) {
    const platform = post.platform;
    if (!live) {
      results.push({ platform, dry_run: true, action: 'would post', title: post.title || post.message?.slice(0, 40) });
      continue;
    }

    if (platform === 'facebook') {
      const pageId = post.page_id || process.env.FACEBOOK_PAGE_ID;
      const token = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
      if (!pageId || !token) throw new Error('FACEBOOK_PAGE_ID and FACEBOOK_PAGE_ACCESS_TOKEN are required');
      const body = new URLSearchParams({ message: post.message || '', access_token: token });
      const response = await fetch(`https://graph.facebook.com/v20.0/${pageId}/feed`, { method: 'POST', body });
      const data = await response.json();
      results.push({ platform, status: response.status, data });
      continue;
    }

    if (platform === 'youtube') {
      results.push({ platform, blocked: true, reason: 'YouTube upload requires OAuth upload flow. Use Apps Script/Google OAuth bridge or queue only.' });
      continue;
    }

    throw new Error(`Unsupported social platform: ${platform}`);
  }
  return { ok: true, live, results };
}

async function sendEmailSms(payload, live) {
  const messages = payload?.messages || [];
  if (!messages.length) return { ok: true, message: 'No messages supplied', live, results: [] };
  if (!live) return { ok: true, live, results: messages.map((message) => ({ dry_run: true, channel: message.channel, to: message.to, subject: message.subject })) };
  return callAppsScriptBridge({ messages }, true, 'send_email_sms');
}

async function deleteDriveFiles(payload, live) {
  const fileIds = payload?.drive_file_ids || [];
  if (!fileIds.length) return { ok: true, message: 'No Drive file IDs supplied', live, results: [] };
  if (!live) return { ok: true, live, results: fileIds.map((id) => ({ dry_run: true, id, action: 'would delete or trash via Apps Script bridge' })) };
  return callAppsScriptBridge({ drive_file_ids: fileIds }, true, 'delete_drive_files');
}

async function main() {
  const command = readCommand();
  const operation = command.operation || 'status';
  const { live, reason } = assertLiveApproval(command);

  const allowed = new Set(command.allowed_operations || []);
  if (!allowed.has(operation)) throw new Error(`Operation not allowed by command file: ${operation}`);

  const context = {
    mission: 'Epoxy Changes Lives only',
    operation,
    live,
    approval_ticket: reason,
    dry_run: !live,
    rule: 'Workflow primary. Shopify public storefront. Vercel ECL automation/control. Supabase backend. Apps Script Drive/Sheets bridge.',
  };

  console.log(JSON.stringify({ event: 'start', ...context }, null, 2));
  await writeSupabaseAudit({ operation, status: live ? 'live_started' : 'dry_run_started', details: context });

  const payload = command.payload || {};
  const results = [];

  if (operation === 'status') {
    results.push({ ok: true, status: 'bridge ready', live });
  }
  if (operation === 'publish_shopify' || operation === 'full_live_automation') results.push({ publish_shopify: await publishShopify(payload, live) });
  if (operation === 'delete_drive_files' || operation === 'full_live_automation') results.push({ delete_drive_files: await deleteDriveFiles(payload, live) });
  if (operation === 'post_social_content' || operation === 'full_live_automation') results.push({ post_social_content: await postSocialContent(payload, live) });
  if (operation === 'send_email_sms' || operation === 'full_live_automation') results.push({ send_email_sms: await sendEmailSms(payload, live) });

  console.log(JSON.stringify({ event: 'complete', ...context, results }, null, 2));
  await writeSupabaseAudit({ operation, status: live ? 'live_completed' : 'dry_run_completed', details: { ...context, results } });
}

main().catch(async (error) => {
  console.error(error);
  await writeSupabaseAudit({ operation: 'live_automation_error', status: 'error', details: { message: error.message, stack: error.stack } });
  process.exit(1);
});
