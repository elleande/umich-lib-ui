import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

/*
TODO:
- Access the package.json file to use infomration from
  that file for: 1) where to distribute module, main, and browser.
*/

export default {
	external: [
		'react',
		'react-dom',
		'prop-types'
	],
	input: 'src/index.js',
	output: [
    {
      file: 'dist/umd.js',
			format: 'umd',
			globals: {
				'react': 'React',
				'react-dom': 'ReactDom'
			}
		},
		{
      file: 'dist/esm.js',
			format: 'esm'
    }
	],
  plugins: [
		resolve(),
    babel({
			exclude: 'node_modules/**',
			plugins: [
				"@babel/proposal-class-properties",
				"@babel/proposal-object-rest-spread"
			],
			presets:  [
				"@babel/react",
				["@babel/env", {
					"modules": false
				}]
			],
		}),
		commonjs()
	]
};