/* webpack 配置相关的工具函数 */

const path = require('path')
const fs = require('fs')
const os = require('os')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

// 处理路径
const resolve = (...src) => path.resolve(__dirname, ...src)

// 获取本地 IP 地址
const getLocalIpAddress = () => {
  const interfaces = os.networkInterfaces()
  let localIpAddress = ''

  for (const addressObj of Object.values(interfaces)) {
    const temp = addressObj.some(item => {
      const { address, family, internal } = item
      if (family === 'IPv4' && !internal) {
        localIpAddress = address
        return true
      }
      return false
    })
    if (temp) break
  }

  return localIpAddress
}

// 读取目录中的文件
const readDir = (dirPath, topDirPath) => {
  topDirPath = topDirPath || dirPath
  let result = []
  let files = fs.readdirSync(dirPath)

  files.forEach(file => {
    // 获取文件的路径
    let path = resolve(`${dirPath}/${file}`)

    // 判断文件的类型（文件/文件夹）
    let stats = fs.statSync(path)
    let isFile = stats.isFile()
    let isDirectory = stats.isDirectory()

    if (isFile) {
      // 获取文件路径
      let filePath = path.slice(topDirPath.length)

      // 如果文件路径以 \ 开头，则去掉
      if (filePath[0] === '\\') filePath = filePath.slice(1)

      // 将文件路径中的 \ 替换为 /
      result.push(filePath.replace(/\\/g, '/'))
    } else if (isDirectory) {
      result.push(...readDir(path, topDirPath))
    }
  })

  return result
}

// 生成 HtmlWebpackPlugins
const genHtmlWebpackPlugins = ({ dirPath, htmlObj }) => {
  let pagePaths = readDir(resolve(dirPath))

  return pagePaths.reduce((prev, cur) => {
    if (htmlObj[cur]) {
      prev.push(new HtmlWebpackPlugin({
        filename: `views/${cur.replace(/ejs$/, 'html')}`,
        template: resolve(dirPath, cur),
        chunks: htmlObj[cur],
        favicon: resolve('../src/images/favicon.ico'),
        minify: !devMode && {
          removeAttributeQuotes: true, // 是否删除属性的双引号
          minifyCSS: true, // 是否压缩css
          removeComments: true, // 是否删除注释
          collapseWhitespace: true // 是否折叠空白
        }
      }))
    }
    return prev
  }, [])
}

// 生成 DefinePlugin
const genDefinePlugin = options => {
  let temp = { ...options }

  for (let key in temp) {
    if (temp.hasOwnProperty(key)) {
      temp[key] = JSON.stringify(temp[key])
    }
  }

  return new webpack.DefinePlugin({ ...temp })
}

module.exports = {
  resolve,
  getLocalIpAddress,
  genHtmlWebpackPlugins,
  genDefinePlugin
}
