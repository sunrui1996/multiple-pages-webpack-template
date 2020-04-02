/* 统一导出 webpack 配置 */

const entry = require('./entry')
const plugins = require('./plugins')
const devServer = require('./devServer')

module.exports = { entry, plugins, devServer }
