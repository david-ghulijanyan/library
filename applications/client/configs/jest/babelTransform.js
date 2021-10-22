/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const babelJest = require("babel-jest");

module.exports = babelJest.default.createTransformer({
	presets: [
		[
			// ES features necessary for user's Node version
			require("@babel/preset-env").default,
			{
				targets: {
					// node: "current",
					esmodules: true,
				},
			},
		],
		[
			require("@babel/preset-react").default,
			{
				// Adds component stack to warning messages
				// Adds __self attribute to JSX which React will use for some warnings
				development: true,
				// Will use the native built-in instead of trying to polyfill
				// behavior for any plugins that require one.
				runtime: "automatic",
				importSource: "react",
			},
		],
	],
	plugins: [
		require("babel-plugin-macros"),
		[
			require("@babel/plugin-proposal-class-properties").default,
			{
				loose: true,
			},
		],
		[
			require("@babel/plugin-transform-runtime").default,
			{
				corejs: false,
				helpers: false,
				// By default, babel assumes babel/runtime version 7.0.0-beta.0,
				// explicitly resolving to match the provided helper functions.
				// https://github.com/babel/babel/issues/10261
				version: require("@babel/runtime/package.json").version,
				regenerator: true,
				// https://babeljs.io/docs/en/babel-plugin-transform-runtime#useesmodules
				// We should turn this on once the lowest version of Node LTS
				// supports ES Modules.
				useESModules: false,
				// Undocumented option that lets us encapsulate our runtime, ensuring
				// the correct version is used
				// https://github.com/babel/babel/blob/090c364a90fe73d36a30707fc612ce037bdbbb24/packages/babel-plugin-transform-runtime/src/index.js#L35-L42
				absoluteRuntime: false,
			},
		],
		require("@babel/plugin-proposal-nullish-coalescing-operator").default,
	],
	babelrc: false,
	configFile: false,
});
