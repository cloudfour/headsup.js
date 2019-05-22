import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/headsup.js',
  output: {
    file: 'dist/headsup.js',
    format: 'esm'
  },
  plugins: [resolve()]
};
