import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'
import { Configuration } from 'webpack'
import { GenerateSW } from 'workbox-webpack-plugin'

const config: Configuration = {
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js', '.tsx']
	},
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'dist')
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			favicon: 'public/favicon.ico',
			template: 'public/index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),
		new GenerateSW({
			include: [/\.js$/, /\.html$/, 'favicon.ico'],
			clientsClaim: true,
			skipWaiting: true
		}),
		new CopyWebpackPlugin(
			['public/manifest.json', 'public/icon-192.png', 'public/icon-512.png'],
			{ copyUnmodified: true }
		)
	],
	mode: 'production'
}

export default config
