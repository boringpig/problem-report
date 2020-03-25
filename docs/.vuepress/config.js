const path = require('path')
const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
  title: '功能回報處理紀錄',
  base: '/problem-report',
  // permalink: "/:year/:month/:day/:slug",
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' }
    ],
    sidebar: [
      ['/', '首頁']
    ]
  }
}