# 全家重複收款問題(Queue)

## 問題描述

Shopify 訂單當付款狀態(transaction)改變，分別會發 authorization、capture webhook 到後台的 Queue 執行但執行順序不一定會造成 Order 的 Financial Status 跟 Shopify 付款狀態不ㄧ樣

## 處理方式

- 後台晚上12點會有 order refresh 的排程去更新 order 為最新，但有時新訂單會在那時成立資料會有錯誤
- 早上 11 點與下午 3 點會執行檢查已產生全家訂單檔(IR1)與 Shopify 付款狀態是否一致的排程
