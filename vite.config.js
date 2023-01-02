import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import preprocess from "svelte-preprocess";
import seqPreprocessor from "svelte-sequential-preprocessor";
import { preprocessThrelte } from "@threlte/preprocess";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/threlte-srp/",
  plugins: [
    svelte({
      preprocess: seqPreprocessor([preprocess(), preprocessThrelte()]),
    }),
  ],
  resolve: {
    alias: {
      $assets: path.resolve("./src/assets"),
      $lib: path.resolve("./src/lib"),
      $data: path.resolve("./src/data"),
      $scripts: path.resolve("./src/scripts"),
      $store: path.resolve("./src/store.js"),
    },
  },
  build: {
    outDir: "./docs",
  },
});
