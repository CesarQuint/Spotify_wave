import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
      "no-const-assign": "error",
      "no-dupe-keys": "error",
      "no-duplicate-imports": "error",
    },
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: {
        ...globals.browser, // for browser globals
        ...globals.node, // add Node.js globals, including 'process'
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
