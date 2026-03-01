import { useDeferredValue, useState } from "react";
import { FeatureList } from "./components/FeatureList.jsx";
import { ReadinessPanel } from "./components/ReadinessPanel.jsx";
import { readinessChecklist, starterFeatures } from "./data/features.js";
import { filterFeatures } from "./lib/filter-features.js";
import "./styles.css";

export default function App() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const visibleFeatures = filterFeatures(starterFeatures, deferredQuery);

  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">AI Engineering Studio</p>
          <h1>React starter with real extension points</h1>
          <p className="lede">
            Use this baseline when you want a frontend scaffold that already has
            testing, linting, reusable modules, and a clear visual system.
          </p>
        </div>
        <label className="search-field" htmlFor="feature-search">
          <span>Filter starter capabilities</span>
          <input
            id="feature-search"
            name="feature-search"
            type="search"
            placeholder="Search templates, governance, delivery..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </section>

      <section className="content-grid">
        <FeatureList features={visibleFeatures} />
        <ReadinessPanel checklist={readinessChecklist} />
      </section>
    </main>
  );
}
