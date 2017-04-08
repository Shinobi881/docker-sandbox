const { resolve } = require('path');

module.exports = {
  context: resolve(__dirname, 'src/'),
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist/'),
    filename: 'bundle.js'
  }
};