/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require("webpack-merge");
// const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const path = require("path");
const baseConfig = require("./base");

module.exports = merge(baseConfig, {
	mode: "development",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "../build"),
		},
		historyApiFallback: true,
		open: true,
		compress: true,
		hot: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: { sourceMap: true, importLoaders: 1, modules: false },
					},
					{ loader: "postcss-loader", options: { sourceMap: true } },
					{ loader: "sass-loader", options: { sourceMap: true } },
				],
			},
		],
	},
	devtool: "cheap-module-source-map",

	// plugins: [new ErrorOverlayPlugin()],
});
