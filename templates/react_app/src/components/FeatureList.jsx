export function FeatureList({ features }) {
  return (
    <section className="feature-panel" aria-labelledby="feature-list-title">
      <div className="panel-header">
        <p className="panel-kicker">Starter modules</p>
        <h2 id="feature-list-title">Structure with room to grow</h2>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <p className="feature-category">{feature.category}</p>
            <h3>{feature.title}</h3>
            <p>{feature.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
