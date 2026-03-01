import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App.jsx";

describe("App", () => {
  it("renders the starter heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /react starter with real extension points/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the starter capability filter", () => {
    render(<App />);

    expect(
      screen.getByRole("searchbox", {
        name: /filter starter capabilities/i,
      }),
    ).toBeInTheDocument();
  });
});
