import path from "node:path";

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import { configs } from "eslint-config-airbnb-extended/legacy";
import { rules as prettierConfigRules } from "eslint-config-prettier";
import nextPlugin from "@next/eslint-plugin-next";
import prettierPlugin from "eslint-plugin-prettier";

const gitignorePath = path.resolve(".", ".gitignore");

const jsConfig = [
  // ESLint Recommended Rules
  {
    name: "js/config",
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module", // For ES Modules (if applicable)
      globals: {
        // Define Node.js specific globals
        process: "readonly",
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
  },
];

const reactConfig = [
  // Airbnb React Recommended Config
  ...configs.react.recommended,
  // Airbnb React Hooks Config
  ...configs.react.hooks,
];

const typescriptConfig = [
  // Airbnb React TypeScript Config
  ...configs.react.typescript,
];

const nextConfig = [
  {
    name: "next/config",
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
    },
  },
];

const prettierConfig = [
  // Prettier Plugin
  {
    name: "prettier/plugin/config",
    plugins: {
      prettier: prettierPlugin,
    },
  },
  // Prettier Config
  {
    name: "prettier/config",
    rules: {
      ...prettierConfigRules,
      "prettier/prettier": "error",
    },
  },
];

export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  // Javascript Config
  ...jsConfig,
  // React Config
  ...reactConfig,
  // TypeScript Config
  ...typescriptConfig,
  // Next.js Config
  ...nextConfig,
  // Prettier Config
  ...prettierConfig,
];
