const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // path: __dirname + '/dist'
    path: path.resolve(__dirname, 'dist')
  }
}
module.exports = config
