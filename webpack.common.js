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
  },
  externals: [
    'library/one',
    'library/two',
    // Everything that starts with "library/"
    /^library\/.+$/
  ]
}
module.exports = config
