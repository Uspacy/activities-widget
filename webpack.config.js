const deps = require('./package.json').dependencies;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';
const appName = 'UspacyActivitiesWidget';

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'static/js/[name].[contenthash:8].js',
		chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: NODE_ENV,
	devServer: {
		hot: true,
		open: true,
		port: 8080,
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
						},
					},
				],
			},
			{
				test: /\.d\.ts$/,
				loader: 'ignore-loader',
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: require.resolve('@svgr/webpack'),
						options: {
							prettier: false,
							svgo: false,
							svgoConfig: {
								plugins: [{ removeViewBox: false }],
							},
							titleProp: true,
							ref: true,
						},
					},
					{
						loader: require.resolve('file-loader'),
						options: {
							name: 'static/media/[name].[hash].[ext]',
						},
					},
				],
				issuer: {
					and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
				},
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.svg'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: appName,
			filename: 'remoteEntry.js',
			exposes: {
				'./app': './src/components/App',
				'./settings': './src/components/Settings',
			},
			shared: {
				...deps,
				react: {
					requiredVersion: deps.react,
					singleton: true,
				},
				'react-dom': {
					requiredVersion: deps['react-dom'],
					singleton: true,
				},
				'@mui/material': {
					requiredVersion: deps['@mui/material'],
					singleton: true,
				},
				'@emotion/react': {
					requiredVersion: deps['@emotion/react'],
					singleton: true,
				},
				'@emotion/styled': {
					requiredVersion: deps['@emotion/styled'],
					singleton: true,
				},
				'@uspacy/store': {
					requiredVersion: deps['@uspacy/store'],
					singleton: true,
				},
				'@uspacy/sdk': {
					requiredVersion: deps['@uspacy/sdk'],
					singleton: true,
				},
				'@reduxjs/toolkit': {
					requiredVersion: deps['@reduxjs/toolkit'],
					singleton: true,
				},
				'react-redux': {
					requiredVersion: deps['react-redux'],
					singleton: true,
				},
			},
		}),
		new Dotenv(),
		...(isDev
			? [
					new HtmlWebpackPlugin({
						template: './public/index.html',
						excludeChunks: [appName],
					}),
					new ESLintPlugin({
						files: ['./src'],
						extensions: ['tsx', 'ts', 'jsx', 'js'],
						overrideConfigFile: path.resolve(__dirname, '.eslintrc.js'),
					}),
			  ]
			: []),
	],
};
