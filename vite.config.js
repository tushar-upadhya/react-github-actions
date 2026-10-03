import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  test: {
    environment: "happy-dom", // lighter than jsdom 30, avoids the memory blowup
    setupFiles: "./src/test/setup.js",
    globals: true,
    fileParallelism: false,
    testTimeout: 10000,
  },
});
