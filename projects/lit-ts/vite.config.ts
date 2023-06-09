import { join, resolve } from "path";

import { defineConfig } from "vite";
export default defineConfig({
  resolve: {
    alias: {
      vue: resolve(__dirname, "node_modules/vue/dist/vue.esm-browser.js"),
    },
  },
  server: {
    host: "127.0.0.1",
    port: 3000,
    cors: true,
  },
});
