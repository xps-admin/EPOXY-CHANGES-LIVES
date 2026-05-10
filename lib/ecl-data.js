export const eclBrand = {
  name: 'Epoxy Changes Lives',
  storefront: 'EpoxyChangesLives.com',
  mission: 'Traffic → Education → Free Tools → Lead → Product Path → Training Path → AI Tools → Repeat Engagement',
  rule: 'Workflow first. Shopify is public storefront. Vercel is automation/control layer. Supabase is backend state. Apps Script is Drive/Sheets bridge.',
};

export const navItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Workflow', href: '/workflow', primary: true },
  { label: 'Vault', href: '/vault' },
  { label: 'Automation', href: '/automation' },
  { label: 'Settings', href: '/settings' },
];

export const workflowPhases = [
  { id: 'intake', title: 'Intake', description: 'Capture source, asset, request, command, or opportunity.' },
  { id: 'discovery', title: 'Discovery', description: 'Research, classify, source-check, and choose template path.' },
  { id: 'approval_scan', title: 'Approval Scan', description: 'Claims, safety, price, product, policy, and publish risk scan.' },
  { id: 'build_draft', title: 'Build Draft', description: 'Create draft packets, pages, posts, tools, assets, and automations.' },
  { id: 'publish_gate', title: 'Publish Gate', description: 'Human approval before Shopify live, posts, email, paid ads, or claims.' },
  { id: 'optimize', title: 'Optimize', description: 'Measure, repurpose, revise, improve, and schedule next action.' },
  { id: 'audit_rollback', title: 'Audit / Rollback', description: 'Log, snapshot, quarantine, rollback, and preserve evidence.' },
];

export const workflowCards = [
  {
    id: 'ECL-SHOP-001', type: 'Shopify', title: 'Homepage + Start Here Build Packet', phase: 'build_draft', step: 'Draft page packet', owner: 'GPT + Operator', source: '00 - SHOPIFY WORKFLOW Command Center', approvalRequired: true, risk: 'Medium', status: 'In Progress', target: 'Shopify draft', due: 'Today', links: ['https://admin.shopify.com/'], audit: 'pending', tags: ['shopify', 'page', 'homepage'],
  },
  {
    id: 'ECL-CONTENT-001', type: 'Content', title: '30-Day Social + Blog Repurpose Queue', phase: 'discovery', step: 'Template match', owner: 'GPT', source: 'SWF Universal AutoBuild Workbook OS Content Media Integrated', approvalRequired: true, risk: 'Medium', status: 'Ready to map', target: 'Facebook / YouTube / Blog', due: 'Today', links: ['https://business.facebook.com/'], audit: 'pending', tags: ['content', 'social', 'blog'],
  },
  {
    id: 'ECL-ASSET-001', type: 'Drive Asset', title: 'Digital Asset Manifest + Shopify Placement Map', phase: 'intake', step: 'Asset capture', owner: 'GPT + Drive Bridge', source: 'Universal Digital Asset Workbook OS', approvalRequired: false, risk: 'Low', status: 'Ready', target: 'Drive + Supabase asset ledger', due: 'Today', links: ['https://drive.google.com/'], audit: 'pending', tags: ['assets', 'manifest', 'shopify'],
  },
  {
    id: 'ECL-TOOLS-001', type: 'Free Tool', title: 'Garage Floor Calculator Lead Magnet', phase: 'approval_scan', step: 'Formula verify', owner: 'Operator + GPT', source: 'Free Tools Library / ECL command files', approvalRequired: true, risk: 'High', status: 'Blocked until formulas verified', target: 'Shopify page + Vercel tool', due: 'Next', links: ['https://drive.google.com/'], audit: 'quarantine', tags: ['calculator', 'lead-capture', 'free-tool'],
  },
  {
    id: 'ECL-AUTO-001', type: 'Automation', title: 'Apps Script ↔ Supabase Workflow Sync', phase: 'build_draft', step: 'Bridge route', owner: 'GPT + Apps Script', source: 'Epoxy Changes Lives - Command Center Automation', approvalRequired: true, risk: 'High', status: 'Design ready', target: 'Drive/Sheets + Supabase', due: 'Today', links: ['https://script.google.com/'], audit: 'pending', tags: ['apps-script', 'supabase', 'sync'],
  },
  {
    id: 'ECL-LEAD-001', type: 'Lead Gen', title: 'Benchmark + Lead Capture Route', phase: 'discovery', step: 'Offer route', owner: 'GPT', source: 'SWF LeadGen Benchmark Integrated', approvalRequired: true, risk: 'Medium', status: 'Ready to convert', target: 'Shopify form + Sheets/Supabase CRM', due: 'Next', links: ['https://docs.google.com/spreadsheets/'], audit: 'pending', tags: ['leadgen', 'benchmark', 'crm'],
  },
  {
    id: 'ECL-SYSTEM-001', type: 'AI Tool', title: 'Capability-Based Stack Router', phase: 'approval_scan', step: 'Stack score', owner: 'GPT/Architect', source: 'SMA System Capability Library', approvalRequired: false, risk: 'Low', status: 'Ready', target: 'Workflow rules engine', due: 'Next', links: ['https://drive.google.com/'], audit: 'pending', tags: ['capability', 'routing', 'stack'],
  },
  {
    id: 'ECL-BUILD-001', type: 'Automation', title: 'One-and-Done Project AutoBuild Sequence', phase: 'build_draft', step: 'Stage map import', owner: 'GPT + Operator', source: 'SMA One-and-Done AutoBuild Template System', approvalRequired: true, risk: 'Medium', status: 'Ready to adapt to ECL', target: 'Workflow cards + scheduled runs', due: 'Next', links: ['https://drive.google.com/'], audit: 'pending', tags: ['autobuild', 'template', 'repeatable'],
  },
  {
    id: 'ECL-PRODUCT-001', type: 'Product Path', title: 'XPS Product Draft Queue', phase: 'approval_scan', step: 'TDS/SDS/spec gate', owner: 'Jeremy / XPS', source: 'ECL product staging', approvalRequired: true, risk: 'High', status: 'Blocked', target: 'Shopify draft product path', due: 'Blocked', links: ['https://admin.shopify.com/'], audit: 'quarantine', tags: ['xps', 'products', 'safety'],
  },
];

export const kpis = [
  { label: 'Active Cards', value: String(workflowCards.length), tone: 'blue' },
  { label: 'Approval Required', value: String(workflowCards.filter((card) => card.approvalRequired).length), tone: 'yellow' },
  { label: 'Quarantine / Blocked', value: String(workflowCards.filter((card) => card.audit === 'quarantine' || card.status.toLowerCase().includes('blocked')).length), tone: 'red' },
  { label: 'Ready / In Progress', value: String(workflowCards.filter((card) => ['Ready', 'In Progress', 'Ready to map', 'Design ready', 'Ready to convert', 'Ready to adapt to ECL'].includes(card.status)).length), tone: 'green' },
];

export const quickLinks = [
  { label: 'Shopify', type: 'Storefront / Admin', href: 'https://admin.shopify.com/' },
  { label: 'GitHub', type: 'Repo', href: 'https://github.com/Strategic-Minds/EPOXY-CHANGES-LIVES' },
  { label: 'Vercel', type: 'Automation Deploy', href: 'https://vercel.com/' },
  { label: 'Supabase', type: 'Backend State', href: 'https://supabase.com/dashboard' },
  { label: 'Drive', type: 'Vault', href: 'https://drive.google.com/' },
  { label: 'Sheets', type: 'Command Center', href: 'https://docs.google.com/spreadsheets/' },
  { label: 'Calendar', type: 'Execution Rhythm', href: 'https://calendar.google.com/' },
  { label: 'Gmail', type: 'Draft Comms', href: 'https://mail.google.com/' },
  { label: 'Facebook', type: 'Social Queue', href: 'https://business.facebook.com/' },
  { label: 'YouTube', type: 'Video Queue', href: 'https://studio.youtube.com/' },
  { label: 'GPT', type: 'Execution Engine', href: 'https://chatgpt.com/' },
];

export const automationRuns = [
  { id: 'AUTO-001', name: 'Drive Asset Manifest Sync', cadence: 'Hourly', source: 'Apps Script', target: 'ecl_drive_assets', status: 'Design Ready', lastRun: 'Not connected', risk: 'Low' },
  { id: 'AUTO-002', name: 'Workflow Workbook Sync', cadence: 'Every 30 minutes', source: 'Apps Script', target: 'ecl_workflow_cards', status: 'Design Ready', lastRun: 'Not connected', risk: 'Medium' },
  { id: 'AUTO-003', name: 'Shopify Draft Queue Check', cadence: 'Daily', source: 'Vercel Cron', target: 'Shopify drafts', status: 'Needs token', lastRun: 'Not connected', risk: 'High' },
  { id: 'AUTO-004', name: 'Content Queue Generator', cadence: 'Daily', source: 'Vercel Cron + GPT route', target: 'Content workflow cards', status: 'Needs approval gate', lastRun: 'Not connected', risk: 'Medium' },
  { id: 'AUTO-005', name: 'Audit + Quarantine Sweep', cadence: 'Hourly', source: 'Vercel Cron', target: 'audit logs / quarantine', status: 'Ready to implement', lastRun: 'Not connected', risk: 'Low' },
];

export const vaultReferences = [
  { name: '00 - SHOPIFY WORKFLOW Command Center', type: 'Sheet', role: 'Workflow inspiration and command pattern', status: 'Active' },
  { name: 'Epoxy Changes Lives - Master Operating Dashboard', type: 'Sheet', role: 'ECL operating source of truth', status: 'Active' },
  { name: 'Epoxy Changes Lives - Command Center Automation', type: 'Apps Script', role: 'Drive/Sheets automation bridge', status: 'Integrate, do not replace' },
  { name: 'SWF Universal AutoBuild Workbook OS Content Media Integrated', type: 'Workbook', role: 'Content/media automation source', status: 'Imported to workflow model' },
  { name: 'Universal Digital Asset Workbook OS', type: 'Workbook', role: 'Asset manifest and Shopify/social placement model', status: 'Imported to workflow model' },
  { name: 'SMA One-and-Done AutoBuild Template System', type: 'Workbook', role: 'Repeatable build stage map', status: 'Adapt to ECL only' },
];

export const settings = [
  { key: 'SHOPIFY_LIVE_PUBLISH', value: 'Disabled by default', gate: 'Human approval required' },
  { key: 'DRIVE_DELETE_MODE', value: 'Never auto-delete', gate: 'Archive/quarantine only' },
  { key: 'GPT_ROUTE', value: 'Server-side only', gate: 'No browser-exposed API keys' },
  { key: 'SUPABASE_SERVICE_ROLE', value: 'Server env only', gate: 'Do not expose in client bundle' },
  { key: 'CONTENT_POSTING', value: 'Draft/queue first', gate: 'Approval before posting or replying' },
];
