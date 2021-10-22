// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,

	extends: ["airbnb", "prettier"],
	plugins: ["prettier"],

	rules: {
		quotes: ["error", "double"],
		indent: ["error", "tab"],
		semi: ["error", "always"],
	},
};
