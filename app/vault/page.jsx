import { Panel, Pill } from '../../components/ecl-ui';
import { vaultReferences, settings } from '../../lib/ecl-data';

export default function VaultPage() {
  return (
    <>
      <section className="hero-card" style={{ marginBottom: 18 }}>
        <p className="kicker">Source vault</p>
        <h1>References, not <span className="highlight">raw secrets.</span></h1>
        <p className="lede">This page tracks Drive folders, Sheets, Apps Script, asset manifests, template workbooks, and secure vault references. API keys and passwords must stay in Vercel env, Supabase vault, or provider OAuth flows.</p>
      </section>

      <Panel title="ECL Source References" kicker="Drive / workbook / Apps Script">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Name</th><th>Type</th><th>Role</th><th>Status</th></tr></thead>
            <tbody>
              {vaultReferences.map((item) => (
                <tr key={item.name}><td>{item.name}</td><td>{item.type}</td><td>{item.role}</td><td>{item.status}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <Panel title="Vault Safety Rules" kicker="Production firewall">
        <div className="grid three">
          {settings.map((item) => (
            <article className="card" key={item.key}>
              <div className="card-id">{item.key}</div>
              <div className="card-title">{item.value}</div>
              <div className="card-meta">Gate: {item.gate}</div>
              <div className="tag-row"><Pill tone="yellow">secure reference</Pill></div>
            </article>
          ))}
        </div>
      </Panel>
    </>
  );
}
