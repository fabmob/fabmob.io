const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	resolve: {
		alias: {
			Components: path.resolve('components/'),
			Pages: path.resolve('pages/'),
			Images: path.resolve('images/'),
		},
		fallback: {
			path: 'path-browserify',
			buffer: 'buffer',
		},
	},
	module: {
		rules: [
			{
				test: /node_modules\/vfile\/core\.js/,
				use: [
					{
						loader: 'imports-loader',
						options: {
							type: 'commonjs',
							imports: ['single process/browser process'],
						},
					},
				],
			},
			{
				test: /\.md$/i,
				use: 'raw-loader',
			},
			{
				test: /\.ya?ml$/,
				type: 'json', // Required by Webpack v4
				use: 'yaml-loader',
			},
			{
				test: /\.(jpe?g|png|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'images/[name].[ext]',
					},
				},
			},

			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: require.resolve('babel-loader'),
						options: {
							presets: [
								'@babel/preset-env',
								[
									'@babel/preset-react',
									{
										runtime: 'automatic',
									},
								],
							],
							plugins: [
								'babel-plugin-styled-components',
								isDevelopment && require.resolve('react-refresh/babel'),
							].filter(Boolean),
						},
					},
				],
			},
		],
	},

	entry: {
		index: './index.js',
	},

	output: {
		path: path.join(__dirname, 'dist'),
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
	},

	plugins: [
		isDevelopment && new ReactRefreshWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'FabMob',
			template: 'index.html',
		}),
		,
		new CopyPlugin({
			patterns: [{ from: 'articles/*/images/*' }],
		}),
	].filter(Boolean),
}
