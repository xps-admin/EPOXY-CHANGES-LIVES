import { Panel, WorkflowBoard, QuickLink, Pill } from '../../components/ecl-ui';
import { workflowPhases, workflowCards, quickLinks, automationRuns } from '../../lib/ecl-data';

const filters = ['All', 'Shopify', 'Content', 'Social', 'Free Tool', 'Drive Asset', 'Automation', 'Product Path', 'Training Path', 'AI Tool', 'Approval', 'Quarantine'];

export default function WorkflowPage() {
  const approvals = workflowCards.filter((card) => card.approvalRequired);
  const quarantined = workflowCards.filter((card) => card.audit === 'quarantine' || card.status.toLowerCase().includes('blocked'));

  return (
    <>
      <section className="hero-card" style={{ marginBottom: 18 }}>
        <p className="kicker">Primary operating page</p>
        <h1>Workflow is the <span className="highlight">main screen.</span></h1>
        <p className="lede">Shopify, content, social, free tools, Drive assets, approvals, quarantine, logs summary, accounts, social links, settings shortcuts, cron indicators, and GPT actions live here first.</p>
        <div className="filter-row">
          {filters.map((filter) => <button className="filter" key={filter}>{filter}</button>)}
        </div>
      </section>

      <Panel title="ECL Workflow Board" kicker="Intake → Discovery → Approval Scan → Build Draft → Publish Gate → Optimize → Audit / Rollback">
        <WorkflowBoard phases={workflowPhases} cards={workflowCards} />
      </Panel>

      <section className="grid two">
        <Panel title="Approval Gates" kicker="Human gate required">
          <div className="grid">
            {approvals.map((card) => (
              <article className="card" key={card.id}>
                <div className="card-id">{card.id} · {card.type}</div>
                <div className="card-title">{card.title}</div>
                <div className="card-meta">{card.step} · {card.target} · Source: {card.source}</div>
                <div className="tag-row"><Pill tone="red">approval</Pill><Pill tone={card.risk === 'High' ? 'red' : 'yellow'}>{card.risk}</Pill></div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel title="Quarantine / Blocked" kicker="Do not publish">
          <div className="grid">
            {quarantined.map((card) => (
              <article className="card" key={card.id}>
                <div className="card-id">{card.id} · {card.type}</div>
                <div className="card-title">{card.title}</div>
                <div className="card-meta">{card.status} · {card.step}</div>
                <div className="tag-row"><Pill tone="red">hold</Pill><Pill tone="yellow">operator review</Pill></div>
              </article>
            ))}
          </div>
        </Panel>
      </section>

      <section className="grid two">
        <Panel title="Accounts / Tools / Social Shortcuts" kicker="One-screen access">
          <div className="grid four">
            {quickLinks.map((item) => <QuickLink item={item} key={item.label} />)}
          </div>
        </Panel>

        <Panel title="Cron + Sync Indicators" kicker="Persistent automation">
          <div className="table-wrap">
            <table>
              <thead><tr><th>Automation</th><th>Cadence</th><th>Status</th><th>Risk</th></tr></thead>
              <tbody>
                {automationRuns.map((run) => <tr key={run.id}><td>{run.name}</td><td>{run.cadence}</td><td>{run.status}</td><td>{run.risk}</td></tr>)}
              </tbody>
            </table>
          </div>
        </Panel>
      </section>

      <Panel title="GPT Action Panel" kicker="Draft, do not publish">
        <div className="gpt-panel">
          <div className="command-box">
            <strong>Next GPT command:</strong><br />
            Read the selected workflow card, pull its source workbook row, produce a draft output, write the result to Supabase, and return it to quarantine if claims, pricing, safety, publishing, or product specs are involved.
          </div>
          <div className="command-box">
            <strong>Automation boundary:</strong><br />
            Auto-create drafts, rows, folders, cards, logs, and queue items. Do not auto-publish Shopify pages, products, social posts, replies, email blasts, paid ads, product specs, safety claims, training claims, or income claims.
          </div>
        </div>
      </Panel>
    </>
  );
}
