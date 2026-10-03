import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../App";

test("App renders", () => {
  render(<App />);

  expect(screen.getAllByText("home")).toHaveLength(2);
  expect(screen.getByText("feature 1")).toBeInTheDocument();
});
