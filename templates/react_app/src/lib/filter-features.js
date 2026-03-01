export function filterFeatures(features, query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return features;
  }

  return features.filter(({ title, summary, category }) => {
    const haystack = `${title} ${summary} ${category}`.toLowerCase();
    return haystack.includes(normalizedQuery);
  });
}
