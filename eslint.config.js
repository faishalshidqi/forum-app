import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from "eslint/config";


export default defineConfig([
  { ignores: ['dist'] },
  {
    extends: [
        js.configs.recommended,
        ...tseslint.configs.recommended,
    ],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {js, 'react-hooks': reactHooks, 'react-refresh': reactRefresh},
    rules: {
      ...reactHooks.configs.recommended.rules,
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      ecmaVersion: 2020
    }
  },
]);
