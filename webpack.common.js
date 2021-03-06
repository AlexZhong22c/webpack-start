const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    filename: 'webpack-numbers.js',
    library: 'webpackNumbers',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
}
module.exports = config
