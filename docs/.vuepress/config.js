const path = require('path')
const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
  title: '功能回報處理紀錄',
  base: '/problem-report',
  // permalink: "/:year/:month/:day/:slug",
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '全家物流', link: '/family-mart' }
    ],
    sidebar: [
      ['/', '首頁'],
      ['/family-mart', '全家回檔問題']
    ]
  }
}