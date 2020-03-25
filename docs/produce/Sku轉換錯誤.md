# Sku 轉換錯誤

## 問題描述

Laravel 在搜尋 ID 會把 String 轉換成 Integer，Request 中的 3PB0100126被轉成 3，造成搜尋錯誤的Lineitem取得的Sku有問題

## 處理方式

- Request 轉換前後的長度是否相同(strlen)，如果不同就直接 throw exception
