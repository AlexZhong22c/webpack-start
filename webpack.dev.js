const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  // 填写dev的配置
  // 注意，在环境特定的配置中使用 merge() 很容易地让common包含我们在 dev 和 prod 中的常见配置。
  // webpack-merge 工具提供了多种合并(merge)的高级功能，但是在我们的用例中，无需用到这些功能。
})
