// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = {
	extends: [require.resolve("@library/eslint-config")],
	rules: {
		"react/jsx-filename-extension": [0],
	},
	overrides: [
		{
			files: ["./applications/api/**/*.js"],
			rules: {
				"no-underscore-dangle": [0],
			},
		},
		{
			files: ["./applications/client/**/*.spec.js"],
			env: {
				jest: true,
			},
		},
	],
};
