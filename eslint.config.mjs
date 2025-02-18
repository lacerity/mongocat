import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/dist/**/*", "**/node_modules/**/*"],
}, ...compat.extends("eslint:recommended", "plugin:react/recommended", "prettier").map(config => ({
    ...config,
    files: ["**/*.js", "**/*.jsx"],
})), {
    files: ["**/*.js", "**/*.jsx"],

    plugins: {
        react,
        prettier,
    },

    rules: {},
}, ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
).map(config => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx"],
})), {
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
        react,
        "@typescript-eslint": typescriptEslint,
        prettier,
    },

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "./client/tsconfig.json",
        },
    },

    rules: {},
}, ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier").map(config => ({
    ...config,
    files: ["server/**/*.ts"],
})), {
    files: ["server/**/*.ts"],

    plugins: {
        "@typescript-eslint": typescriptEslint,
        prettier,
    },

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "./server/tsconfig.json",
        },
    },

    rules: {},
}];