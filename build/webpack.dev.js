const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = env => {
  return merge(common(env), {
    devServer: {
      host: '0.0.0.0',
      port: 9000,
      hot: true,
      compress: true,
      contentBase: path.resolve(__dirname, '../www')
    }
  })
}
