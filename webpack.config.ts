import { resolve } from 'path'
import { Configuration } from 'webpack'

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
		path: resolve(__dirname, 'public')
	},
	mode: 'production'
}

export default config
