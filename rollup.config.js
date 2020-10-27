import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'node_modules/stream-http/index.js',
  output: {
    file: 'bundle.js',
    format: 'es'
  },
  plugins: [ resolve(), commonjs() ]
};