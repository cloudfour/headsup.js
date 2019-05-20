import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './src',
  output: {
    file: 'dist/headsup.js',
    format: 'esm'
  },
  plugins: [resolve()]
};
