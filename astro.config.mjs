import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  outDir: "./site",
  site: "https://www.kaixiao.ca",
  build: {
    format: "directory",
  },
});
