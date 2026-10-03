import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    globals: true, // optional, but handy with jest-dom
    fileParallelism: false, // replaces singleThread: true
  },
});
