const path = require('path')
const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
  title: '功能回報處理紀錄',
  base: '/problem-report',
  // permalink: "/:year/:month/:day/:slug",
  themeConfig: {
    sidebar: [
      {
        title: '全家物流問題',
        path: '/familyMart/全家回檔找不到檔案',
        collapsable: true,
        sidebarDepth: 0,
        children: [
          ['/familyMart/全家回檔找不到檔案', '全家回檔找不到檔案'],
          ['/familyMart/全家重複收款問題Queue', '全家重複收款問題(Queue)'],
          ['/familyMart/全家重複收款問題信用卡公司', '全家重複收款問題(信用卡公司)'],
        ]
      }, {
        title: '加工區問題',
        path: '/produce/Sku轉換錯誤',
        collapsable: true,
        sidebarDepth: 0,
        children: [
          ['/produce/Sku轉換錯誤', 'Sku轉換錯誤']
        ]
      }
    ]
  }
}