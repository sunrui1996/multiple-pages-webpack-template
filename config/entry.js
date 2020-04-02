/* 入口文件 */

const { resolve } = require('./utils');

module.exports = {
  common: resolve('../src/js/common.js'),
  index: resolve('../src/js/index.js'),
  pageA: resolve('../src/js/pageA.js'),
  pageB: resolve('../src/js/pageB.js')
};
