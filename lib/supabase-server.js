import { createClient } from '@supabase/supabase-js';

export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function writeAuditLog({ action, status = 'queued', source = 'vercel', target = 'workflow', details = {} }) {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return { ok: false, skipped: true, reason: 'Supabase server env vars not configured' };
  }

  const { error } = await supabase.from('ecl_audit_logs').insert({
    action,
    status,
    source,
    target,
    details,
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
