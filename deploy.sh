#!/usr/bin/env sh

npm run build
cd docs/.vuepress/dist
git init
git add .
git commit -m 'deploy'
git push -f git@github.com:boringpig/problem-report.git master:gh-pages