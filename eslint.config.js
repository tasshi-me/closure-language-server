import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import packageJson from "eslint-plugin-package-json";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: ["dist/", "node_modules/"],
  },
  eslint.configs.recommended,
  {
    files: ["**/*.ts"],
    extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  packageJson.configs.recommended,
  eslintConfigPrettier,
]);
