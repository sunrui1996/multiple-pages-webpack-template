const WebpackMerge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.base.conf')

const analyze = process.env.ANALYZE === 'true'
const plugins = []
analyze && plugins.push(new BundleAnalyzerPlugin())

const prodConfig = {
  mode: 'production',
  optimization: {
    // 插件最小化
    minimizer: [
      // 压缩 js
      new TerserPlugin({
        terserOptions: { compress: { drop_console: true } },
        extractComments: false
      }),
      // 压缩 css
      new OptimizeCssAssetsPlugin()
    ],

    // 分隔 js 代码
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  plugins
}

module.exports = WebpackMerge(baseConfig, prodConfig)
