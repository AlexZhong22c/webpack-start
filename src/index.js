import _ from 'lodash'
// import Print from './print'
import numRef from './ref.json'
// 跟lodash的情况一样，我们调用多个lib，但是不想把它们打包进 bundle 中：
// 不同的是，无法像lodash那样通过在 externals 中指定 library 目录的方式，将它们从 bundle 中排除。
// 此时，你需要在externals中逐个排除它们，或者使用正则表达式排除：详见于webpack.config文件。
import A from 'dependency/one'
import B from 'dependency/two'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

export function numToWord (num) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum
  }, '')
}

export function wordToNum (word) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum
  }, -1)
}
