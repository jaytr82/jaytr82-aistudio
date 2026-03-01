export function ReadinessPanel({ checklist }) {
  return (
    <aside className="readiness-panel" aria-labelledby="readiness-title">
      <p className="panel-kicker">Launch baseline</p>
      <h2 id="readiness-title">What this starter should guarantee</h2>
      <ul className="checklist">
        {checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}
