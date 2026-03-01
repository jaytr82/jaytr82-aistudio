import { describe, expect, it } from "vitest";
import { starterFeatures } from "../data/features.js";
import { filterFeatures } from "./filter-features.js";

describe("filterFeatures", () => {
  it("returns all features for an empty query", () => {
    expect(filterFeatures(starterFeatures, "")).toHaveLength(
      starterFeatures.length,
    );
  });

  it("filters by title, summary, or category", () => {
    const result = filterFeatures(starterFeatures, "governance");

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: "Skill registry" }),
        expect.objectContaining({ title: "Standards layer" }),
      ]),
    );
  });
});
