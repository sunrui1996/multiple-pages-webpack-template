/* devServer */
const host = require('./utils').getLocalIpAddress()

module.exports = {
  host,
  port: 2333,
  open: true,
  openPage: 'views/index.html',
  overlay: true, // 是否在浏览器中显示编译器错误
  compress: true, // 是否启用gzip
  disableHostCheck: true // 是否不检查host
}
