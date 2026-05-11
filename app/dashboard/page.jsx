import Link from 'next/link';
import { KpiGrid, Panel, QuickLink, Pill } from '../../components/ecl-ui';
import { eclBrand, kpis, quickLinks, workflowCards, automationRuns } from '../../lib/ecl-data';

export default function DashboardPage() {
  const urgent = workflowCards.filter((card) => card.approvalRequired || card.audit === 'quarantine').slice(0, 5);
  return (
    <>
      <section className="hero">
        <div className="hero-card">
          <p className="kicker">Epoxy Changes Lives only</p>
          <h1>Today starts in <span className="highlight">workflow.</span></h1>
          <p className="lede">{eclBrand.rule}</p>
          <div className="button-row">
            <Link className="btn primary" href="/workflow">Open Primary Workflow →</Link>
            <Link className="btn" href="/automation">Check Automation Health</Link>
          </div>
        </div>
        <div className="hero-card"><KpiGrid items={kpis} /></div>
      </section>

      <section className="grid two">
        <Panel title="Today’s Focus" kicker="Execution priority">
          <p className="small muted">Keep attention on the cards blocking Shopify drafts, content queues, social posting, free tools, and Drive/Supabase sync.</p>
          <div className="tag-row" style={{ marginTop: 16 }}>
            <Pill tone="yellow">Workflow first</Pill>
            <Pill tone="red">Approval gates</Pill>
            <Pill tone="blue">Draft only</Pill>
          </div>
        </Panel>
        <Panel title="Urgent Approval / Quarantine" kicker="Do not bypass">
          <div className="grid">
            {urgent.map((card) => (
              <Link className="card" href="/workflow" key={card.id}>
                <div className="card-id">{card.id} · {card.type}</div>
                <div className="card-title">{card.title}</div>
                <div className="card-meta">{card.status} · {card.risk} risk · {card.step}</div>
              </Link>
            ))}
          </div>
        </Panel>
      </section>

      <Panel title="Fast Access" kicker="Accounts and tools">
        <div className="grid four">
          {quickLinks.slice(0, 8).map((item) => <QuickLink key={item.label} item={item} />)}
        </div>
      </Panel>

      <Panel title="Automation Pulse" kicker="Persistent work system">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Run</th><th>Cadence</th><th>Source</th><th>Target</th><th>Status</th></tr></thead>
            <tbody>
              {automationRuns.map((run) => <tr key={run.id}><td>{run.name}</td><td>{run.cadence}</td><td>{run.source}</td><td>{run.target}</td><td>{run.status}</td></tr>)}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  );
}
