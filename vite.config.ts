import { defineConfig } from "vite";
import { unstable_vitePlugin as remix } from "@remix-run/dev";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [remix()],
  resolve: {
    alias: {
      "~": `${__dirname}/src/`,
      "styled-system": `${__dirname}/styled-system/`,
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
