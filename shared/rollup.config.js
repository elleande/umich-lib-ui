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
		'react-dom'
	],
	globals: {
		'react': 'React',
		'react-dom': 'ReactDom'
	},
	input: 'src/index.js',
	output: [
    {
      file: 'dist/bundle.js',
			format: 'iife'
		}
		/*
		{
      file: 'dist/esm.js',
			format: 'esm'
    },
		{
      file: 'dist/cjs.js',
			format: 'cjs'
		}
		*/
	],
  plugins: [
		resolve(),
    babel({
			"plugins": [
				"transform-react-remove-prop-types",
				"@babel/proposal-class-properties",
				"@babel/proposal-object-rest-spread"
			],
			"presets":  [
				"@babel/react",
				["@babel/env", {
					"modules": false
				}]
			],
		}),
		commonjs({
			include: 'node_modules/**'
		})
	]
};