const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { entry, plugins, devServer: { host, port } } = require('../config')

const devMode = process.env.NODE_ENV !== 'production'
const { BASE_URL } = require('../config/globalVariables')

const resolve = src => path.resolve(__dirname, '../', src)

const baseConfig = {
  // 入口配置
  entry,

  // 出口配置
  output: {
    filename: !devMode ?
      'js/[name].[contenthash:8].js' :
      'js/[name].js',
    chunkFilename: 'js/[name].[contenthash:8].js',
    path: resolve('dist'),
    publicPath: '/'
  },

  // 模块配置
  module: {
    // 模块规则（配置 loader、解析器）
    rules: [
      // 解析 js
      {
        test: /\.js$/,
        include: resolve('src'),
        exclude: resolve('src/js/bot.js'),
        use: [
          'cache-loader',
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true }
          },
          'eslint-loader'
        ]
      },
      // 解析样式
      {
        test: /\.(css|scss)$/,
        include: resolve('src'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      // 解析图片及字体
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        include: resolve('src'),
        use: [
          {
            loader: 'url-loader',
            options: {
              name: devMode ?
                '[path][name].[ext]' :
                '[path][name].[contenthash:8].[ext]',
              limit: 1024 * 8, // 将小于 8kb 的文件转换成 base64
              context: resolve('src'),
              esModule: false,
              publicPath: devMode ? `http://${host}:${port}` : BASE_URL
            }
          }
        ]
      }
    ]
  },

  // 模块解析配置
  resolve: {
    // 解析模块时应该搜索的目录
    modules: [resolve('src'), 'node_modules'],
    // 模块别名
    alias: { '@': resolve('src') }
  },

  // 插件
  plugins: [
    // 在打包前先清空打包文件夹
    new CleanWebpackPlugin(),
    // 分割 css 代码
    new MiniCssExtractPlugin({
      filename: devMode ?
        'css/[name].css' :
        'css/[name].[contenthash:8].css'
    }),

    // 配置全局变量
    new webpack.ProvidePlugin({ $: 'jquery' }),
    ...plugins
  ],

  // 统计信息
  stats: { children: false }
}
module.exports = baseConfig
