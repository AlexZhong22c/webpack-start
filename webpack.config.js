const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // path: __dirname + '/dist'
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配由.css结尾的文件
        use: [ // 使用到的npm包
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
module.exports = config
