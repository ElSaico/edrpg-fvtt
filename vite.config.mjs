import { terserConfig } from "@typhonjs-fvtt/runtime/rollup";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";
import resolve from "@rollup/plugin-node-resolve";

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import postcssPrefix from "postcss-prefix-selector";
import cssnano from "cssnano";

const s_PACKAGE_ID = "systems/edrpg";

const s_COMPRESS = false; // Set to true to compress the system bundle.
const s_SOURCEMAPS = true; // Generate sourcemaps for the bundle (recommended).

// Used in bundling particularly during development. If you npm-link packages to your project add them here.
const s_RESOLVE_CONFIG = {
   browser: true,
   dedupe: ["svelte"],
};

export default () => {
   /** @type {import('vite').UserConfig} */
   return {
      root: "src/", // Source location / esbuild root.
      base: `/${s_PACKAGE_ID}/`, // Base system path that 30001 / served dev directory.
      publicDir: false, // No public resources to copy.
      cacheDir: "../.vite-cache", // Relative from root directory.

      resolve: { conditions: ["import", "browser"] },

      esbuild: {
         target: ["es2022"],
      },

      css: {
         /** @type {import('postcss').postcssConfig} */
         postcss: {
            inject: false,
            compress: s_COMPRESS,
            sourceMap: s_SOURCEMAPS,
            plugins: [tailwindcss, autoprefixer, postcssPrefix({ prefix: ".edrpg-sheet" }), postcssPresetEnv, cssnano],
         },
      },

      // About server options:
      // - Set to `open` to boolean `false` to not open a browser window automatically. This is useful if you set up a
      // debugger instance in your IDE and launch it with the URL: 'http://localhost:30001/game'.
      //
      // - The top proxy entry redirects requests under the system path for `style.css` and following standard static
      // directories: `assets`, `lang`, and `packs` and will pull those resources from the main Foundry / 30000 server.
      // This is necessary to reference the dev resources as the root is `/src` and there is no public / static
      // resources served with this particular Vite configuration. Modify the proxy rule as necessary for your
      // static resources / project.
      server: {
         port: 30001,
         open: "/game",
         proxy: {
            // Serves static files from main Foundry server.
            [`^(/${s_PACKAGE_ID}/(assets|lang|packs|style.css))`]: "http://localhost:30000",

            // All other paths besides package ID path are served from main Foundry server.
            [`^(?!/${s_PACKAGE_ID}/)`]: "http://localhost:30000",

            // Enable socket.io from main Foundry server.
            "/socket.io": { target: "ws://localhost:30000", ws: true },
         },
      },

      build: {
         outDir: __dirname,
         emptyOutDir: false,
         sourcemap: s_SOURCEMAPS,
         brotliSize: true,
         minify: s_COMPRESS ? "terser" : false,
         target: ["es2022"],
         terserOptions: s_COMPRESS ? { ...terserConfig(), ecma: 2022 } : void 0,
         lib: {
            entry: "./index.js",
            formats: ["es"],
            fileName: "index",
         },
      },

      // Necessary when using the dev server for top-level await usage inside TRL.
      optimizeDeps: {
         esbuildOptions: {
            target: "es2022",
         },
      },

      plugins: [
         svelte({
            preprocess: preprocess(),
         }),
         resolve(s_RESOLVE_CONFIG), // Necessary when bundling npm-linked packages.
      ],
   };
};
