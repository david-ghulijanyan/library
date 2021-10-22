/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

require("dotenv-safe").config({
	path: ".env",
	example: ".env.example",
});

module.exports = {
	entry: path.resolve(__dirname, "..", "./src/index.js"),
	output: {
		path: path.resolve(__dirname, "../build"),
		publicPath: "/",
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{ test: /\.(?:png|jpg|jpeg)$/i, type: "asset/resource" },
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			favicon: path.resolve(__dirname, "../public/favicon.ico"),
			template: path.resolve(__dirname, "../public/index.html"),
			title: "Library",
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
			"process.env.API_BASE": JSON.stringify(process.env.API_BASE),
		}),
	],
};
