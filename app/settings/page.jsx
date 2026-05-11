import { Panel, Pill } from '../../components/ecl-ui';
import { settings, quickLinks } from '../../lib/ecl-data';

export default function SettingsPage() {
  return (
    <>
      <section className="hero-card" style={{ marginBottom: 18 }}>
        <p className="kicker">Configuration only</p>
        <h1>Settings control <span className="highlight">risk.</span></h1>
        <p className="lede">Accounts, connectors, permissions, safety gates, publish defaults, and environment status live here. Work execution stays in /workflow.</p>
      </section>

      <section className="grid two">
        <Panel title="Safety Gate Defaults" kicker="Approval firewall">
          <div className="grid">
            {settings.map((item) => (
              <article className="card" key={item.key}>
                <div className="card-id">{item.key}</div>
                <div className="card-title">{item.value}</div>
                <div className="card-meta">{item.gate}</div>
                <div className="tag-row"><Pill tone="yellow">default</Pill></div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel title="Connector Status Targets" kicker="Accounts">
          <div className="table-wrap">
            <table>
              <thead><tr><th>Connector</th><th>Purpose</th><th>Status Rule</th></tr></thead>
              <tbody>
                {quickLinks.map((item) => <tr key={item.label}><td>{item.label}</td><td>{item.type}</td><td>Use OAuth/provider env; no raw browser secrets</td></tr>)}
              </tbody>
            </table>
          </div>
        </Panel>
      </section>
    </>
  );
}
