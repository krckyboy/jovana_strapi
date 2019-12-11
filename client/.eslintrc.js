module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	parser: 'babel-eslint',
	rules: {
		indent: ['off'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
	},
}
