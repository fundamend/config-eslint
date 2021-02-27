module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'plugin:jest/recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['jest'],
	rules: { strict: ['error', 'global'], 'no-console': 2 },
};
