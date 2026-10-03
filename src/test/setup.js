import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Without this, renders from earlier tests stay in the DOM
// and queries like getByText find duplicates.
afterEach(() => {
  cleanup();
});
