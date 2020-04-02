const WebpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const { devServer } = require('../config');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer
};

module.exports = WebpackMerge(baseConfig, devConfig);
