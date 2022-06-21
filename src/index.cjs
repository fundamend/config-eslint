module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: { strict: ['error', 'global'], 'no-console': 2 }
};
