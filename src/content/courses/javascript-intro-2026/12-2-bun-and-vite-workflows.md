---
description: 掌握當代最強建置組合。深入學習 Bun 的執行效率與 Vite 的開發體驗，並理解為何現代開發不再需要 Webpack。
duration: 20:00
level: beginner
tags:
- Bun
- Vite
- Tooling
tier: free
title: "12-2 極速工作流：Bun 與 Vite 的開發實踐"
youtubeId: 
---

# 12-2 極速工作流：Bun 與 Vite 的開發實踐

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "以前我們啟動一個專案要等 30 秒。
 在 2026 年，我們要求點下按鈕的『瞬間』，環境就要架好。
 
 這就是為什麼我們選用了 **Bun** 這款全能 Runtime，
 加上 **Vite** 這款地表最強開發伺服器。
 這套組合會讓你感覺不是在『開發』，而是在『創作』。"
</div>

## 1. Vite 的魔法：No-Bundle

傳統工具 (如 Webpack) 會先把所有 JS 檔案打包成一大包才跑。
Vite 不打包。它直接利用瀏覽器的 **ESM 支援**，要用哪個檔案才傳哪個。
這就是為什麼它啟動速度是毫秒級的。

## 2. Bun 的現代化替代

- **代替 npm/yarn**：`bun install` 快了 10~100 倍。
- **代替 node**：`bun index.ts` 直接執行 TypeScript。
- **代替 Jest**：`bun test` 內建超快測試器。

## 3. 專案配置最佳實務 (astro.config.mjs 範例)

在本專案中，我們使用的是 Astro，它底層就是 Vite。
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  // Vite 配置隱藏在這裡面
});
```

<div class="interactive-lab">
 🧪 <strong>Lab 29: 熱重載 (HMR) 體驗</strong>
 啟動你的 <code>npm run dev</code>，試著修改 CSS 裡的一個顏色。
 觀察瀏覽器，你會發現它<strong>沒有重新整理網頁</strong>，但顏色變了。
 這就是 HMR (Hot Module Replacement)。
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：從開發到生產</strong>
 寫完 code 之後，怎麼交給客戶？
 在付費單元，我們要學習 <strong>CI/CD 自動化部署</strong>，
 以及如何透過 <strong>Tree Shaking</strong> 把你的檔案體積壓縮到極限。
</div>
