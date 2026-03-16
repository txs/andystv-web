
# 2026 架構調整（重要）

> **2026 年重大技術趨勢校正**

1. **Lucia Auth 已不再推薦**：Lucia Auth 於 2025 年初轉型為教學資源與底層 Oslo 庫，主流社群已全面轉向 [Better Auth](https://github.com/betterauth/betterauth)（由前 Auth.js 核心貢獻者主導，支援 2FA、Passkey、多租戶，TypeScript 原生）。
2. **Remix 已併入 React Router v7**：2026 年不再有 Remix，請以 React Router v7 (Framework Mode) 替代。
3. **Astro 5 Server Islands**：Astro 5 推出 Server Islands，會員動態內容可在靜態頁面中以 server island 動態載入，無需複雜 hydration，首屏依然純靜態。

**本專案已依 2026 年趨勢調整：**
- 認證全面採用 Better Auth
- Astro 4 架構升級為 Astro 5 + Server Islands
- 架構選型與優劣勢請詳見 ARCHITECTURE.md 之 2026 修正版

# Andy's Pro - 個人網站專案

> 基於 Astro 4 的高效能部落格與課程平台

## ✨ 功能特色

- 🚀 **極致效能**：Astro Islands Architecture，公開內容靜態生成
- 📝 **Markdown 原生**：Content Collections 完美支援 AI 輔助寫作
- 🔐 **會員系統**：Better Auth 輕量認證（2FA, Passkey, 多租戶）
- 💳 **付費整合**：Stripe Checkout（待實作）
- 🎨 **現代設計**：Tailwind CSS + 自訂樣式
- 📱 **響應式**：完美支援手機、平板、桌面

## 🏗️ 技術棧

```
前端：Astro 4 + React + Tailwind CSS
認證：Better Auth (2026 社群主流)
資料庫：Astro DB (Turso/libSQL) - 待整合
付費：Stripe - 待整合
部署：Cloudflare Pages 或 Vercel
```

## 📦 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

開啟瀏覽器訪問：http://localhost:4321

### 3. 建置生產版本

```bash
npm run build
npm run preview
```

## 📁 目錄結構

```
andystv-web/
├── src/
│   ├── components/      # UI 元件
│   ├── layouts/         # 頁面佈局
│   ├── pages/           # 路由頁面
│   │   ├── index.astro  # 首頁
│   │   ├── blog/        # 部落格（靜態）
│   │   ├── courses/     # 課程（混合）
│   │   ├── auth/        # 登入/註冊
│   │   └── members/     # 會員中心（動態）
│   ├── content/         # Markdown 內容
│   │   ├── blog/        # 部落格文章
│   │   └── courses/     # 課程內容
│   ├── lib/             # 工具函數
│   └── middleware.ts    # 認證中介
├── public/              # 靜態資源
├── astro.config.mjs     # Astro 設定
└── package.json
```

## 🔧 待完成功能

### 高優先級
- [ ] **整合 Astro DB**：設定資料庫連線，建立 User/Session/Subscription 表格
- [ ] **完成認證系統**：實作註冊/登入邏輯（目前僅有 UI）
- [ ] **Stripe 整合**：建立付費方案、Checkout、Webhooks

### 中優先級
- [ ] **課程頁面**：動態渲染 `/courses/[slug].astro`，根據會員等級顯示內容
- [ ] **搜尋功能**：整合 Pagefind 或 Algolia
- [ ] **留言系統**：Giscus 或自建
- [ ] **分析工具**：Google Analytics 或 Plausible

### 低優先級
- [ ] **電子報**：整合 Mailchimp 或 ConvertKit
- [ ] **社群分享**：Open Graph、Twitter Cards
- [ ] **多語系**：i18n 支援

## 🚀 部署

### Cloudflare Pages（推薦）

1. 連接 GitHub 儲存庫
2. 設定建置指令：`npm run build`
3. 輸出目錄：`dist`
4. 環境變數：
   ```
   ASTRO_DB_REMOTE_URL=<你的 Astro DB URL>
   STRIPE_SECRET_KEY=<你的 Stripe Secret Key>
   ```

### Vercel

```bash
vercel --prod
```

## 📝 內容管理

### 撰寫部落格

1. 在 `src/content/blog/` 建立 `.md` 檔案
2. 加入 Frontmatter：

```markdown
---
title: "文章標題"
description: "文章描述"
pubDate: 2024-02-03
tags: ["React", "教學"]
---

# 文章內容
```

3. 儲存即自動更新

### AI 輔助寫作

使用 Cursor、Copilot 或 ChatGPT：

```
提示詞範例：
"請幫我寫一篇關於 Next.js 15 新功能的教學文章，
包含 Server Components、Actions 和 use() Hook"
```

## 🔐 認證系統設定（待完成）

### 1. 安裝 Astro DB

```bash
npx astro add db
```

### 2. 設定資料庫（`db/config.ts`）

已包含在專案中，請參考 `ARCHITECTURE.md`

### 3. 執行 Migration

```bash
npm run astro db push
```

### 4. 更新 `src/lib/auth.ts`

替換 SQLite adapter 為 Astro DB adapter

## 💳 Stripe 整合（待完成）

### 1. 建立產品

前往 [Stripe Dashboard](https://dashboard.stripe.com) 建立產品：
- Pro Plan: $29/月
- Premium Plan: $99/月

### 2. 設定 Webhooks

URL: `https://yourdomain.com/api/stripe-webhook`

監聽事件：
- `checkout.session.completed`
- `customer.subscription.updated`
- `customer.subscription.deleted`

### 3. 加入環境變數

```bash
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

## 🧪 測試

```bash
npm run test  # 待建立測試
```

## 📚 相關文件

- [完整架構設計](./ARCHITECTURE.md) - 技術方案比較與詳細設計
- [Astro 官方文件](https://docs.astro.build/)
- [Lucia Auth 文件](https://lucia-auth.com/)
- [Astro DB 文件](https://docs.astro.build/en/guides/astro-db/)

## 🤝 貢獻

這是個人專案，暫不開放外部貢獻。

## 📄 授權

MIT License - 由 Andy 建立

---

**下一步**：
1. 前往 `../andystv-web-backup/` 執行 Notion 備份
2. 完成 Astro DB 整合
3. 實作認證與付費功能

有問題？查看 `ARCHITECTURE.md` 或聯繫 Andy。
