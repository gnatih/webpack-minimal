const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoader = require('vue-loader/lib/plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {
  return {
    mode: env.mode,

    entry: './src/scripts/index.js',

    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, '../www')
    },

    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      },

      extensions: ['.js', '.vue']
    },

    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          loader: [
            env.mode !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },

        {
          test: /\.js$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src'),
          loader: [
            'cache-loader',
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env']
              }
            }
          ]
        },

        {
          test: /\.s(a|c)ss$/,
          loader: [
            env.mode !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  fiber: require('fibers')
                }
              }
            }
          ]
        },

        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },

        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        },

        {
          test: /\.(png|jpg|gif|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin(),
      new VueLoader(),
      new VuetifyLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.ejs',
        env: env.mode,
        minify:
          env.mode !== 'production'
            ? false
            : {
                collapseWhitespace: true,
                removeComments: true,
                sortAttributes: true,
                removeAttributeQuotes: true
              }
      })
    ],

    stats: {
      colors: true,
      children: false,
      modules: false,
      entrypoints: false,
      env: false
    }
  }
}
