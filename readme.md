# 功能回報處理紀錄

用 Vuepress 產生靜態頁面，並將其透過 Travis 自動化部署放在 GitHub Page 當作靜態檔案的伺服器

## GitHub 環境
建立新專案，可以勾選允許 travis 存取

![](https://i.imgur.com/Tqr4PfX.png)

## 本地 Travis 環境
詳細內容可查看 [travis 官網](https://docs.travis-ci.com/)

- 安裝 travis cli
```
gem install travis
```

- 登入 travis
```
travis login
```

- 加密環境變數
```
travis encrypt 'GITHUB_TOKEN=<YOUR_GITHUB_TOKEN>' --add
```

> travis-ci.com 不會吃到 travis.yml 的 env 要在 setting 自己新增

