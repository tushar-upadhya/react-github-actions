import { describe, expect, test } from "vitest";

import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App Component", () => {
  test("renders home text", () => {
    render(<App />);

    expect(screen.getByText("home")).toBeInTheDocument();
  });

  test("renders feature 1 text", () => {
    render(<App />);

    expect(screen.getByText("feature 1")).toBeInTheDocument();
  });

  test("renders span home text", () => {
    render(<App />);

    expect(screen.getAllByText("home")).toHaveLength(2);
  });
});
