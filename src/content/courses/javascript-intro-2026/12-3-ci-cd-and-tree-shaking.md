---
description: (Pro) 邁向工業化開發。理解 Tree Shaking、Minification 優化原理，並學習如何使用 GitHub Actions 建立自動化部署流程。
duration: 25:00
level: intermediate
tags:
- CI/CD
- Deployment
- Optimization
tier: pro
title: "12-3 (付費) 工程化之路：CI/CD 與品質優化"
youtubeId: 
---

# 12-3 (付費) 工程化之路：CI/CD 與品質優化

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "在公司上班，你不能手動上傳檔案到伺服器。那太危險也太不專業。
 我們要建立一條『自動傳送帶』。
 
 當你點下 `git push` 的那一刻，電腦會自動幫你跑測試、檢查格式、
 打包壓縮、最後部署到網路上。
 同時，我們也會教你打包工具是怎麼透過『搖樹 (Tree Shaking)』來幫你的程式碼減肥的。"
</div>

## 1. Tree Shaking (搖樹優化)

這就像搖一棵枯樹，把沒用的葉子搖下來。
- **前置條件**：必須使用 ES Modules (`import/export`)。
- **原理**：打包工具追蹤你的依賴鏈。沒被引用的變數或函數，通通不包含在最後的 `dist` 檔案中。

## 2. CI/CD：自動化流水線

### 什麼是 CI/CD？
- **CI (Continuous Integration)**：持續集成（自動跑測試、Lint）。
- **CD (Continuous Deployment)**：持續部署（自動推送到 Cloudflare/Vercel）。

**GitHub Actions 範例 (.github/workflows/deploy.yml):**
```yaml
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: bun install
      - run: bun run build  # 打包
      - run: npx wrangler pages deploy dist # 部署
```

## 3. Minification & Mangling (混淆與壓縮)

- **Minification**：刪除空格、換行。
- **Mangling**：把變數名 `isUserLogged` 變成 `a`。
目的是**減少檔案體積**並提升載入速度。

<div class="interactive-lab">
 🧪 <strong>Lab 30: 打包成品分析</strong>
 執行 <code>npm run build</code>，然後去 <code>dist</code>(或 <code>.astro</code>) 資料夾。
 看看產生的 JS 檔案，你會發現它變得面目全非。試著找出你的程式碼躲在哪裡。
</div>

---

<div class="next-step-teaser">
 🎓 <strong>本章總結</strong>
 你現在擁有了一個專業工程師的開發視野。
 
 下一章，我們要聊聊 JavaScript 最大的語法變革：<strong>類別與物件導向 (Classes & OOP)</strong>。
 我們要學習如何在大專案中組織複雜的邏輯實體。
</div>
