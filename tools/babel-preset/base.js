module.exports = function () {
	const ENV = process.env.NODE_ENV || "development";

	const IS_ENV_DEVELOPMENT = ENV === "development";
	const IS_ENV_PRODUCTION = ENV === "production";
	const IS_ENV_TEST = ENV === "test";

	// shared react preset
	const reactPreset = [
		require("@babel/preset-react").default,
		{
			// Adds component stack to warning messages
			// Adds __self attribute to JSX which React will use for some warnings
			development: IS_ENV_DEVELOPMENT || IS_ENV_TEST,
		},
	];

	// shared presets
	const sharedPresets = [
		IS_ENV_TEST && [
			// ES features necessary for user's Node version
			require("@babel/preset-env").default,
			{
				targets: {
					node: "current",
				},
			},
		],
		(IS_ENV_PRODUCTION || IS_ENV_DEVELOPMENT) && [
			// Latest stable ECMAScript features
			require("@babel/preset-env").default,
			{
				// Allow importing core-js in entrypoint and use browserlist to select polyfills
				useBuiltIns: "entry",
				// Set the corejs version we are using to avoid warnings in console
				corejs: 3,
				// Exclude transforms that make all code slower
				exclude: ["transform-typeof-symbol"],
			},
		],
		reactPreset,
	].filter(Boolean);

	// shared plugins
	const sharedPlugins = [
		// Polyfills the runtime needed for async/await, generators, and friends
		// https://babeljs.io/docs/en/babel-plugin-transform-runtime
		require("@babel/plugin-transform-runtime").default,
		IS_ENV_PRODUCTION && [
			// Remove PropTypes from production build
			require("babel-plugin-transform-react-remove-prop-types").default,
			{
				removeImport: true,
			},
		],
	].filter(Boolean);

	// shared configs
	const shared = {
		presets: sharedPresets,
		plugins: sharedPlugins,
	};

	return {
		...shared,
		env: {
			esm: shared,
			esmBundled: {
				...shared,
				presets: [
					[
						"@babel/preset-env",
						{
							targets: "> 0.25%, not dead",
						},
					],
					reactPreset,
				],
			},
			cjs: {
				...shared,
				presets: [
					[
						"@babel/preset-env",
						{
							modules: "commonjs",
						},
					],
					reactPreset,
				],
			},
		},
	};
};
