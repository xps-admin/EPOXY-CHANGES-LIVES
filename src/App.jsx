import React from 'react';

const brand = {
  name: 'Epoxy Changes Lives',
  mission: 'Traffic → Education → Free Tools → Lead → Product Path → Training Path → AI Tools → Repeat Engagement',
};

const kpis = [
  ['Draft Assets', '42', 'yellow'],
  ['Ready', '6', 'green'],
  ['Approval Holds', '9', 'red'],
  ['Platforms', '9', 'blue'],
];

const workflowPhases = [
  { id: 'P01', title: 'Intake', stack: 'Drive / Gmail / Calendar', status: 'Active', steps: ['Source read', 'Asset capture', 'Request log'], href: 'https://drive.google.com/' },
  { id: 'P02', title: 'Discovery', stack: 'GPT / GitHub / Drive', status: 'Active', steps: ['Research', 'Repo check', 'Template match'], href: 'https://github.com/xps-admin/EPOXY-CHANGES-LIVES' },
  { id: 'P03', title: 'Approval Scan', stack: 'Sheets / Operator', status: 'Required', steps: ['Claims', 'Specs', 'Publish gate'], href: 'https://docs.google.com/spreadsheets/' },
  { id: 'P04', title: 'Build', stack: 'GitHub / Vercel / Shopify', status: 'In Progress', steps: ['Draft', 'Code', 'Preview'], href: 'https://vercel.com/strategic-minds-advisory' },
  { id: 'P05', title: 'Publish Gate', stack: 'Shopify / Facebook / YouTube', status: 'Hold', steps: ['QA', 'Approve', 'Schedule'], href: 'https://admin.shopify.com/' },
  { id: 'P06', title: 'Optimize', stack: 'Analytics / GPT / Sheets', status: 'Upcoming', steps: ['Report', 'Repurpose', 'Next batch'], href: 'https://chatgpt.com/' },
];

const projectCards = [
  { id: 'ECL-001', name: 'Admin Control Plane MVP', phase: 'P04', step: 'Code', owner: 'GPT + GitHub', tone: 'green' },
  { id: 'ECL-002', name: 'Dream It Dashboard Section', phase: 'P04', step: 'Preview', owner: 'GPT', tone: 'yellow' },
  { id: 'ECL-003', name: 'Social Queue', phase: 'P03', step: 'Claims', owner: 'Operator', tone: 'red' },
  { id: 'ECL-004', name: 'Free Tools Library', phase: 'P02', step: 'Template match', owner: 'GPT', tone: 'yellow' },
  { id: 'ECL-005', name: 'Product Path', phase: 'P03', step: 'Specs', owner: 'Jeremy / XPS', tone: 'red' },
];

const toolButtons = [
  ['Docs', 'Google', 'https://docs.google.com/document/u/0/', '#4285F4'],
  ['Sheets', 'Google', 'https://docs.google.com/spreadsheets/u/0/', '#0F9D58'],
  ['Calendar', 'Google', 'https://calendar.google.com/', '#4285F4'],
  ['Keep', 'Google', 'https://keep.google.com/', '#F4B400'],
  ['Tasks', 'Google', 'https://tasks.google.com/', '#4285F4'],
  ['Gmail', 'Google', 'https://mail.google.com/', '#EA4335'],
  ['GPT', 'AI', 'https://chatgpt.com/', '#10A37F'],
];

const platformButtons = [
  ['GitHub', 'Repo', 'https://github.com/xps-admin/EPOXY-CHANGES-LIVES', '#fff'],
  ['Vercel', 'Deploy', 'https://vercel.com/strategic-minds-advisory', '#fff'],
  ['GPT', 'Engine', 'https://chatgpt.com/', '#10A37F'],
  ['Supabase', 'DB', 'https://supabase.com/dashboard', '#3ECF8E'],
  ['Shopify', 'Store', 'https://admin.shopify.com/', '#95BF47'],
  ['Google', 'Search', 'https://www.google.com/', '#4285F4'],
  ['Workspace', 'Suite', 'https://workspace.google.com/dashboard', '#4285F4'],
  ['Google Cloud', 'Cloud', 'https://console.cloud.google.com/', '#F4B400'],
];

const operationalTools = [
  { title: 'Content Command Center', tag: 'Dashboard', href: 'https://docs.google.com/spreadsheets/d/15aD3xhLz8l6VsnxOwiclyxvLlNQf7wAkRLtb83Cc3fw/edit', text: 'Operator intake, GPT drafts, approval status, platform routing, and KPI loop.', actions: ['New idea', 'Draft post', 'Route asset'] },
  { title: 'Social Media Engine', tag: 'Facebook + YouTube', href: 'https://business.facebook.com/', text: 'Turn one approved asset into posts, shorts, captions, thumbnails, CTAs, and scheduled rows.', actions: ['Create variants', 'Queue approval', 'Schedule'] },
  { title: 'Shopify Page Builder', tag: 'Draft mode', href: 'https://admin.shopify.com/', text: 'Build homepage, Start Here, Free Tools, Product Path, Training Path, and AI pages safely.', actions: ['Draft page', 'Attach asset', 'QA'] },
  { title: 'Free Tools Library', tag: 'Lead capture', href: 'https://drive.google.com/', text: 'Garage calculator, flake calculator, prep checklist, moisture checklist, and tracker downloads.', actions: ['Build tool', 'Gate lead', 'Track clicks'] },
  { title: 'XPS Command Bridge', tag: 'AI tools', href: 'https://github.com/xps-admin/EPOXY-CHANGES-LIVES', text: 'Connect estimating, proposal, content, lead, and operating agents into the dashboard layer.', actions: ['Map tools', 'Create route', 'Log output'] },
  { title: 'Approval Firewall', tag: 'Protection', href: 'https://docs.google.com/spreadsheets/', text: 'Hold product specs, pricing, safety, warranty, training, certification, and income claims.', actions: ['Approve', 'Revise', 'Could not verify'] },
];

const calendarEvents = [
  ['Sun', 'May 10', '7:00 AM', 'Morning Launch Sprint', 'green'],
  ['Sun', 'May 10', '12:30 PM', 'Midday Execution Checkpoint', 'yellow'],
  ['Sun', 'May 10', '4:00 PM', 'Digital Asset Review', 'blue'],
  ['Sun', 'May 10', '7:00 PM', 'End-of-Day Review', 'red'],
  ['Mon', 'May 11', '7:00 AM', 'Morning Launch Sprint', 'green'],
  ['Mon', 'May 11', '12:30 PM', 'Midday Execution Checkpoint', 'yellow'],
  ['Mon', 'May 11', '4:00 PM', 'Digital Asset Review', 'blue'],
  ['Mon', 'May 11', '7:00 PM', 'End-of-Day Review', 'red'],
  ['Tue', 'May 12', '7:00 AM', 'Morning Launch Sprint', 'green'],
  ['Tue', 'May 12', '12:30 PM', 'Midday Execution Checkpoint', 'yellow'],
  ['Tue', 'May 12', '7:00 PM', 'End-of-Day Review', 'red'],
];

const queueRows = [
  ['ECL-001', 'Hero image campaign', 'Shopify / Facebook / YouTube', 'Ready for draft', 'No claims'],
  ['ECL-002', 'Dream it. Build it. Live it.', 'Banner / Shorts / Header', 'Ready for draft', 'Safe'],
  ['ECL-003', 'Garage floor calculator', 'Free Tool', 'Needs QA', 'Formula verify'],
  ['ECL-004', 'XPS product path', 'Shopify', 'Blocked', 'Specs/TDS/SDS'],
];

function toneClass(tone) {
  const map = {
    green: 'border-green-400/30 bg-green-400/10 text-green-300',
    yellow: 'border-yellow-400/30 bg-yellow-400/10 text-yellow-300',
    red: 'border-red-400/30 bg-red-400/10 text-red-300',
    blue: 'border-sky-400/30 bg-sky-400/10 text-sky-300',
  };
  return map[tone] || 'border-zinc-400/20 bg-zinc-400/10 text-zinc-300';
}

function Pill({ tone = 'yellow', children }) {
  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-wide ${toneClass(tone)}`}>{children}</span>;
}

function Arrow() {
  return <span aria-hidden="true" className="ml-2">→</span>;
}

function Panel({ title, kicker, children }) {
  return (
    <section className="rounded-3xl border border-yellow-500/20 bg-zinc-950/90 p-5 shadow-2xl shadow-black/30">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">{kicker}</p>
      <h2 className="mt-1 text-xl md:text-2xl font-black tracking-tight text-white">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function SmallButton({ item }) {
  const [label, type, href, color] = item;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex min-h-[118px] flex-col items-center justify-center rounded-2xl border border-yellow-400/35 bg-black/55 p-3 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_0_18px_rgba(234,179,8,0.06)] transition hover:border-yellow-300 hover:bg-yellow-400/10 hover:shadow-[0_0_24px_rgba(234,179,8,0.18)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl font-black" style={{ color }}>{label.slice(0, 1)}</div>
      <div className="mt-3 text-[10px] font-black uppercase tracking-widest text-yellow-400/80">{type}</div>
      <div className="mt-1 text-sm font-black text-white">{label}</div>
    </a>
  );
}

export default function App() {
  const days = Array.from(new Set(calendarEvents.map(([day, date]) => `${day} ${date}`)));

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <style>{`.workflow-scroll{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.08) rgba(0,0,0,.25)}.workflow-scroll::-webkit-scrollbar{height:6px}.workflow-scroll::-webkit-scrollbar-track{background:rgba(0,0,0,.2)}.workflow-scroll::-webkit-scrollbar-thumb{background:rgba(255,255,255,.08);border-radius:999px}.workflow-scroll::-webkit-scrollbar-thumb:hover{background:rgba(250,204,21,.25)}`}</style>

      <section className="relative min-h-[86vh] flex items-center border-b border-yellow-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(250,204,21,0.18),transparent_30%),linear-gradient(90deg,#000_0%,rgba(0,0,0,0.94)_44%,rgba(0,0,0,0.55)_100%)]" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300 mb-6">✓ Operator dashboard + content engine + platform bridge</div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] uppercase">Learn the trade.<br /><span className="text-yellow-400">Run the system.</span></h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-zinc-200 leading-relaxed">A clean internal control plane for content creation, Shopify drafts, Facebook and YouTube queues, free tools, XPS Command, approvals, and weekly growth loops.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://docs.google.com/spreadsheets/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-7 py-4 text-sm md:text-base font-black uppercase tracking-wide text-black hover:bg-yellow-300">Open Content Queue <Arrow /></a>
              <a href="https://chatgpt.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-yellow-400/50 bg-black/40 px-7 py-4 text-sm md:text-base font-black uppercase tracking-wide text-white hover:bg-yellow-400/10">Generate Next Batch</a>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 text-sm font-bold text-zinc-100 sm:grid-cols-4">{['Content', 'Shopify', 'Social', 'AI Tools'].map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">{item}</div>)}</div>
          </div>
          <div className="rounded-[2rem] border border-yellow-500/20 bg-black/55 p-4 shadow-2xl shadow-yellow-500/10 backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-2">{kpis.map(([label, value, tone]) => <div key={label} className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4"><div className="flex items-center justify-between gap-3"><p className="text-xs font-black uppercase tracking-wide text-zinc-400">{label}</p><Pill tone={tone}>{tone}</Pill></div><div className="mt-4 text-4xl font-black text-white">{value}</div></div>)}</div>
            <div className="mt-3 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-4"><p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-300">Control rule</p><p className="mt-2 text-sm font-semibold text-yellow-50">GPT can draft, classify, route, and log. Publishing stays behind approval gates.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-10 border-b border-yellow-500/20"><div className="mx-auto max-w-7xl px-5"><div className="min-h-[220px] rounded-3xl border border-yellow-500/30 bg-[linear-gradient(135deg,#070707,#191100,#070707)] flex items-center justify-center text-center px-6 shadow-2xl shadow-yellow-500/10"><div><div className="text-4xl md:text-6xl font-black uppercase text-white">Dream it. <span className="text-yellow-400">Build it.</span> Live it.</div><div className="mt-4 text-zinc-300 font-semibold">Learn | Tools | Products | Training | AI | Grow</div></div></div></div></section>

      <section className="bg-black py-16 md:py-20 border-b border-yellow-500/20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">Horizontal workflow tracker</p><h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">Epoxy Changes Lives workflow board.</h2><p className="mt-4 text-lg text-zinc-300">A clean GitHub Projects-style board: phases run left to right, project cards stack vertically under the current workflow step.</p></div><a href="https://github.com/users/xps-admin/projects/2" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-yellow-400/50 bg-yellow-400 px-5 py-4 text-sm font-black uppercase tracking-wide text-black hover:bg-yellow-300">Open GitHub Project <Arrow /></a></div>
          <div className="workflow-scroll overflow-x-auto pb-3"><div className="grid min-w-[1180px] grid-cols-6 gap-4">{workflowPhases.map((phase) => <div key={phase.id} className="rounded-3xl border border-yellow-500/20 bg-zinc-950/90 p-4 shadow-xl shadow-black/30"><div className="flex items-start justify-between gap-2"><div><div className="text-xs font-black uppercase tracking-widest text-yellow-400">{phase.id}</div><h3 className="mt-1 text-xl font-black text-white">{phase.title}</h3></div><Pill tone={phase.status === 'Active' ? 'green' : phase.status === 'In Progress' ? 'blue' : phase.status === 'Required' || phase.status === 'Hold' ? 'red' : 'yellow'}>{phase.status}</Pill></div><div className="mt-3 rounded-xl border border-white/10 bg-black/45 px-3 py-2 text-xs font-bold text-zinc-300">{phase.stack}</div><div className="mt-4 grid gap-2">{phase.steps.map((step) => <a key={step} href={phase.href} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-black/35 px-3 py-2 text-xs font-black uppercase tracking-wide text-white transition hover:border-yellow-400/60 hover:bg-yellow-400/10">{step}</a>)}</div><div className="mt-4 grid gap-2">{projectCards.filter((card) => card.phase === phase.id).map((card) => <button key={card.id} type="button" className="w-full rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-3 text-left transition hover:bg-yellow-500/20"><div className="flex items-start justify-between gap-2"><div className="text-xs font-black text-yellow-300">{card.id}</div><Pill tone={card.tone}>{card.step}</Pill></div><div className="mt-2 text-sm font-black text-white">{card.name}</div><div className="mt-1 text-xs font-semibold text-zinc-400">Owner: {card.owner}</div></button>)}</div></div>)}</div></div>
        </div>
      </section>

      <section className="bg-zinc-950 py-14 border-b border-yellow-500/20"><div className="mx-auto grid max-w-7xl gap-5 px-5 xl:grid-cols-2"><Panel title="Tool Buttons" kicker="Direct action links"><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">{toolButtons.map((tool) => <SmallButton key={tool[0]} item={tool} />)}</div></Panel><Panel title="Stack Buttons" kicker="System accounts"><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{platformButtons.map((tool) => <SmallButton key={tool[0]} item={tool} />)}</div></Panel></div></section>

      <section className="bg-black py-14 border-b border-yellow-500/20"><div className="mx-auto max-w-7xl px-5"><Panel title="Google Calendar" kicker="Execution rhythm"><div className="workflow-scroll overflow-x-auto pb-2"><div className="grid min-w-[1120px] grid-cols-3 gap-4">{days.map((dayLabel) => { const dayEvents = calendarEvents.filter(([day, date]) => `${day} ${date}` === dayLabel); return <div key={dayLabel} className="rounded-3xl border border-yellow-500/20 bg-black/55 p-4"><div className="mb-4 flex items-center justify-between gap-3"><div><div className="text-xs font-black uppercase tracking-widest text-yellow-400">{dayLabel.split(' ')[0]}</div><div className="text-xl font-black text-white">{dayLabel.replace(' ', ' — ')}</div></div><a href="https://calendar.google.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-yellow-400/40 px-3 py-2 text-xs font-black uppercase text-yellow-300 hover:bg-yellow-400/10">Open</a></div><div className="grid gap-3">{dayEvents.map(([day, date, time, title, tone]) => <a key={`${day}-${date}-${time}-${title}`} href="https://calendar.google.com/" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-zinc-950/90 p-4 transition hover:border-yellow-400/50 hover:bg-yellow-400/10"><div className="flex items-center justify-between gap-3"><span className="text-sm font-black text-yellow-300">{time}</span><Pill tone={tone}>{tone}</Pill></div><div className="mt-2 text-sm font-black text-white">{title}</div></a>)}</div></div>; })}</div></div></Panel></div></section>

      <section className="bg-black py-16 md:py-20"><div className="mx-auto max-w-7xl px-5"><div className="mb-10 max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">Operational tool routes</p><h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight">Open the system from one screen.</h2><p className="mt-4 text-lg text-zinc-300">These cards route directly to the working tools behind the admin control plane.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{operationalTools.map((tool) => <a key={tool.title} href={tool.href} target="_blank" rel="noreferrer" className="rounded-3xl border border-yellow-500/20 bg-zinc-950/90 p-5 shadow-2xl shadow-black/30 transition hover:border-yellow-400/60 hover:bg-yellow-400/10"><p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">{tool.tag}</p><h2 className="mt-1 text-xl md:text-2xl font-black tracking-tight text-white">{tool.title}</h2><p className="mt-5 text-sm leading-relaxed text-zinc-300">{tool.text}</p><div className="mt-5 grid gap-2">{tool.actions.map((action) => <div key={action} className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm font-semibold text-zinc-200">✓ {action}</div>)}</div><div className="mt-5 inline-flex items-center text-sm font-black uppercase tracking-wide text-yellow-300">Open tool <Arrow /></div></a>)}</div></div></section>

      <section className="border-y border-yellow-500/20 bg-[linear-gradient(180deg,#080808,#111)] py-20"><div className="mx-auto grid max-w-7xl gap-8 px-5 xl:grid-cols-[0.82fr_1.18fr]"><Panel title="Conversion Path" kicker="Business purpose"><p className="text-sm font-semibold leading-relaxed text-zinc-300">{brand.mission}</p><div className="mt-5 grid gap-3">{paths.map((path) => <div key={path.title} className="flex gap-3 rounded-2xl border border-white/10 bg-black/45 p-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black font-black">{path.title[0]}</div><div><div className="font-black text-white">{path.title}</div><p className="mt-1 text-sm text-zinc-300">{path.text}</p></div></div>)}</div></Panel><Panel title="Live Work Queue" kicker="Operator ↔ GPT ↔ Platform"><div className="overflow-hidden rounded-2xl border border-white/10"><table className="w-full text-left text-sm"><thead className="bg-yellow-400 text-black"><tr>{['ID', 'Item', 'Platform', 'Status', 'Gate'].map((h) => <th key={h} className="px-3 py-3 font-black">{h}</th>)}</tr></thead><tbody className="divide-y divide-white/10 bg-black/40">{queueRows.map(([id, item, platform, status, gate]) => <tr key={id}><td className="px-3 py-3 font-black text-yellow-300">{id}</td><td className="px-3 py-3 font-black text-white">{item}</td><td className="px-3 py-3 text-zinc-300">{platform}</td><td className="px-3 py-3"><Pill tone={status.includes('Ready') ? 'green' : status.includes('Blocked') ? 'red' : 'yellow'}>{status}</Pill></td><td className="px-3 py-3 text-zinc-300">{gate}</td></tr>)}</tbody></table></div><div className="mt-4 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm font-semibold text-yellow-100">Next working automation: idea intake → GPT draft → approval queue → platform draft.</div></Panel></div></section>
    </main>
  );
}
