import { resolve } from 'path'
import { Configuration } from 'webpack'

const config: Configuration = {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts']
	},
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'public')
	},
	mode: 'production'
}

export default config
