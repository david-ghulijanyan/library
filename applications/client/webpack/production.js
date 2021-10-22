/* eslint-disable import/no-extraneous-dependencies */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const baseConfig = require("./base");

module.exports = merge(baseConfig, {
	mode: "production",
	devtool: false,
	output: {
		path: path.resolve(__dirname, "../build"),
		publicPath: "/",
		filename: "js/[name].[contenthash].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 2,
							sourceMap: false,
							modules: false,
						},
					},
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "styles/[name].[contenthash].css",
			chunkFilename: "[id].css",
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
		runtimeChunk: {
			name: "runtime",
		},
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
});
