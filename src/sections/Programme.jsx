import { programme, partnerBenefits } from '../data/programme.js';
import Panel from '../components/ui/Panel.jsx';

export default function Programme() {
  return (
    <>
      <Panel tone="sand" title="Programme Structure">
        <p><strong>{programme.dates}</strong></p>
        <p>{programme.finale}</p>
        <dl className="days">
          {programme.days.map((d) => (
            <div key={d.day}>
              <dt>Day {d.day}</dt>
              <dd><strong>Morning sessions:</strong> {d.morning}</dd>
              <dd><strong>Afternoon sessions:</strong> {d.afternoon}</dd>
            </div>
          ))}
        </dl>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Day</th><th>Focus</th><th>Theme</th></tr></thead>
            <tbody>
              {programme.schedule.map((r) => (
                <tr key={r.date}><td>{r.date}</td><td>{r.focus}</td><td>{r.theme}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p><strong>Standing Daily:</strong> {programme.standingDaily}</p>
      </Panel>
      <Panel tone="cream" title="Benefits to Partners">
        <p><strong>Partners will receive:</strong></p>
        <ul className="benefits">
          {partnerBenefits.map(([t, d]) => (
            <li key={t}><strong>{t}</strong> — {d}</li>
          ))}
        </ul>
      </Panel>
    </>
  );
}
