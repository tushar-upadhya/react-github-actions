import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../App";

describe("App Component", () => {
  test("renders home text", () => {
    render(<App />);
    expect(screen.getAllByText("home").length).toBeGreaterThan(0);
  });

  test("renders feature 1 text", () => {
    render(<App />);
    expect(screen.getByText("feature 1")).toBeInTheDocument();
  });

  test("renders home text twice", () => {
    render(<App />);
    expect(screen.getAllByText("home")).toHaveLength(2);
  });
});
