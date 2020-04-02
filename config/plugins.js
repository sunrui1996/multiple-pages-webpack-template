/* webpack 插件 */

const { genHtmlWebpackPlugins, genDefinePlugin } = require('./utils');
const globalVariables = require('./globalVariables');

const htmlWebpackPlugins = genHtmlWebpackPlugins({
  dirPath: '../src/views',
  htmlObj: {
    'index.ejs': ['vendors', 'common', 'index'],
    'subPages/pageA.ejs': ['vendors', 'common', 'pageA'],
    'subPages/pageB.ejs': ['vendors', 'common', 'pageB']
  }
});

const definePlugin = genDefinePlugin(globalVariables);

module.exports = [...htmlWebpackPlugins, definePlugin];
