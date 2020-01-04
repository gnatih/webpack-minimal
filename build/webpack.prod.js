const merge = require('webpack-merge')
const common = require('./webpack.common')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = env => {
  return merge(common(env), {
    mode: env.mode,

    output: {
      filename: 'js/[name].[contentHash].js'
    },

    optimization: {
      minimizer: [
        new OptimizeCssAssetsPlugin(),
        new TerserWebpackPlugin({
          cache: true,
          parallel: true,
          extractComments: false
        })
      ]
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contentHash].css',
        chunkFilename: 'css/[id].[contentHash].css'
      })
    ]
  })
}
