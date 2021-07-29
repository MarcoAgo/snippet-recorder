const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const esLintOptions = {
	fix: false,
	failOnError: true,
	failOnWarning: false,
}

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer: {
		hot: true,
		open: true,
		port: '3000',
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
			'process.env.name': JSON.stringify('MisterLookDev')
		}),
		new ReactRefreshWebpackPlugin(),
		new ESLintPlugin(esLintOptions),
	],
}
