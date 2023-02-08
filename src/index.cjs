module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true
	},
	extends: ['eslint:recommended', 'prettier', 'plugin:astro/recommended'],
	overrides: [
		{ files: ['**/*.svelte'], processor: 'svelte3/svelte3' },
		{ files: ['**/*.astro'], parser: 'astro-eslint-parser' }
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['svelte3'],
	rules: { strict: ['error', 'global'], 'no-console': 2 }
};
