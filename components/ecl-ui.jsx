import Link from 'next/link';
import { navItems, eclBrand } from '../lib/ecl-data';

export function Shell({ children }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link className="brand-lockup" href="/dashboard">
          <div className="brand-mark">E</div>
          <div>
            <div className="brand-title">{eclBrand.name}</div>
            <div className="brand-subtitle">Workflow-first automation system</div>
          </div>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={item.primary ? 'primary' : ''}>{item.label}</Link>
          ))}
        </nav>
      </header>
      <main className="main">{children}</main>
    </div>
  );
}

export function Pill({ tone = 'yellow', children }) {
  return <span className={`pill ${tone}`}>{children}</span>;
}

export function Panel({ title, kicker, children, action }) {
  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          {kicker ? <p className="kicker">{kicker}</p> : null}
          <h2>{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function QuickLink({ item }) {
  return (
    <a className="quick-link" href={item.href} target="_blank" rel="noreferrer">
      <div>
        <div className="kicker">{item.type}</div>
        <h3>{item.label}</h3>
      </div>
      <span className="muted small">Open →</span>
    </a>
  );
}

export function KpiGrid({ items }) {
  return (
    <div className="kpi-grid">
      {items.map((item) => (
        <div className="kpi" key={item.label}>
          <div className="label">{item.label}</div>
          <div className="value">{item.value}</div>
          <Pill tone={item.tone}>{item.tone}</Pill>
        </div>
      ))}
    </div>
  );
}

export function WorkflowBoard({ phases, cards }) {
  return (
    <div className="board-scroll">
      <div className="board">
        {phases.map((phase) => {
          const phaseCards = cards.filter((card) => card.phase === phase.id);
          return (
            <section className="phase" key={phase.id}>
              <div className="phase-title">
                <div>
                  <p className="kicker">{phase.id.replace('_', ' ')}</p>
                  <h3>{phase.title}</h3>
                </div>
                <Pill tone={phaseCards.length ? 'blue' : 'yellow'}>{phaseCards.length}</Pill>
              </div>
              <p className="phase-desc">{phase.description}</p>
              {phaseCards.map((card) => <WorkflowCard card={card} key={card.id} />)}
            </section>
          );
        })}
      </div>
    </div>
  );
}

export function WorkflowCard({ card }) {
  const riskTone = card.risk === 'High' ? 'red' : card.risk === 'Medium' ? 'yellow' : 'green';
  return (
    <article className="card">
      <div className="card-id">{card.id} · {card.type}</div>
      <div className="card-title">{card.title}</div>
      <div className="card-meta">
        <div><strong>Step:</strong> {card.step}</div>
        <div><strong>Status:</strong> {card.status}</div>
        <div><strong>Owner:</strong> {card.owner}</div>
        <div><strong>Target:</strong> {card.target}</div>
      </div>
      <div className="tag-row">
        <Pill tone={riskTone}>{card.risk}</Pill>
        {card.approvalRequired ? <Pill tone="red">Approval</Pill> : <Pill tone="green">Auto-safe</Pill>}
        {card.audit === 'quarantine' ? <Pill tone="red">Quarantine</Pill> : <Pill tone="blue">Audit</Pill>}
      </div>
      <div className="tag-row">
        {card.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
    </article>
  );
}

export function DataTable({ headers, rows }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
