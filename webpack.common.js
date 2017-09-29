const path = require('path')

const config = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
  ],
  output: {
    filename: 'webpack-numbers.js',
    path: path.resolve(__dirname, 'dist')
  }
}
module.exports = config
