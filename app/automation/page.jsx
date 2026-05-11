import { Panel, Pill } from '../../components/ecl-ui';
import { automationRuns, workflowCards } from '../../lib/ecl-data';

export default function AutomationPage() {
  const draftable = workflowCards.filter((card) => card.phase === 'build_draft' || card.phase === 'discovery');
  return (
    <>
      <section className="hero-card" style={{ marginBottom: 18 }}>
        <p className="kicker">24/7 automation control</p>
        <h1>Automate drafts. <span className="highlight">Gate publishing.</span></h1>
        <p className="lede">Vercel Cron, Supabase, Apps Script, Shopify draft queues, content generation, and audit/quarantine sweeps should run persistently. Anything risky is held for approval.</p>
      </section>

      <Panel title="Automation Runs" kicker="Cron + bridge status">
        <div className="table-wrap">
          <table>
            <thead><tr><th>ID</th><th>Name</th><th>Cadence</th><th>Source</th><th>Target</th><th>Status</th><th>Risk</th></tr></thead>
            <tbody>
              {automationRuns.map((run) => (
                <tr key={run.id}><td>{run.id}</td><td>{run.name}</td><td>{run.cadence}</td><td>{run.source}</td><td>{run.target}</td><td>{run.status}</td><td>{run.risk}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <section className="grid two">
        <Panel title="Draftable Automation Queue" kicker="Safe to generate">
          <div className="grid">
            {draftable.map((card) => (
              <article className="card" key={card.id}>
                <div className="card-id">{card.id} · {card.type}</div>
                <div className="card-title">{card.title}</div>
                <div className="card-meta">Generate draft packet, write audit row, then return to workflow.</div>
                <div className="tag-row"><Pill tone="blue">draft</Pill><Pill tone={card.approvalRequired ? 'yellow' : 'green'}>{card.approvalRequired ? 'approval after draft' : 'auto safe'}</Pill></div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel title="Bridge Contract" kicker="Apps Script ↔ Supabase ↔ Workflow">
          <div className="command-box">
            <strong>Required bridge loop:</strong><br />
            1. Read approved Google Sheet rows.<br />
            2. Convert rows into ecl_workflow_cards.<br />
            3. Create missing Drive folders only from approved folder map.<br />
            4. Sync asset manifest to Supabase.<br />
            5. Write audit rows back to Sheets.<br />
            6. Never auto-delete files; quarantine or mark deprecated.
          </div>
        </Panel>
      </section>
    </>
  );
}
