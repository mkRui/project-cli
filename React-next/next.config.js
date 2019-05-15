/* eslint-disable */
// const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

const withLessExcludeAntd = require("./next-less.config.js")
 
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}
 
module.exports = withLessExcludeAntd({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables
    }
})