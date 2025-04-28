import path from "node:path"
import { fileURLToPath } from "node:url"

import globals from "globals"
import js from "@eslint/js"
import svelte3 from "eslint-plugin-svelte3"
import tsParser from "@typescript-eslint/parser"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import { FlatCompat } from "@eslint/eslintrc"
import { defineConfig, globalIgnores } from "eslint/config"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default defineConfig([
	globalIgnores([
		"!**/.env.example",
		"**/*.cjs",
		"**/.DS_Store",
		"**/.env",
		"**/.env.*",
		"**/node_modules",
		"**/package-lock.json",
		"**/pnpm-lock.yaml",
		"**/yarn.lock",
		".svelte-kit",
		"build",
		"package",
	]),
	{
		extends: compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"),
		plugins: {
			svelte3,
			"@typescript-eslint": typescriptEslint,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			parser: tsParser,
			ecmaVersion: 2020,
			sourceType: "module",
		},
		settings: {
			"svelte3/typescript": "typescript",
		},
	},
	{
		files: ["**/*.svelte"],
		processor: "svelte3/svelte3",
	}
])
