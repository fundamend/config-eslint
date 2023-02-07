module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		sourceType: 'module'
	},
	rules: { strict: ['error', 'global'], 'no-console': 2 }
};
