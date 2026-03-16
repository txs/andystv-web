---
description: 學習如何組織大型代碼庫。理解 ES Modules (ESM) 的匯入與匯出，並解析它與 CommonJS 的歷史淵源。
duration: 15:00
level: beginner
tags:
- ES Modules
- ESM
- Project Structure
tier: free
title: "12-1 代碼的拼圖：Modules 與 ESM 規範"
youtubeId: 
---

# 12-1 代碼的拼圖：Modules 與 ESM 規範

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "早期寫 JS，大家都是把所有代碼塞在一個 5000 行的 `index.js` 裡，
 或是用 20 個 `<script>` 標籤排排站。這簡直是災難。
 
 在 2026 年，我們有原生支援的 **ES Modules**。
 它讓你的代碼像樂高積木一樣，可以拆開、組合、重複使用。
 好的模組化，是專案能維護 10 年的唯一保證。"
</div>

## 1. 導出 (Export)

你有兩種方式把功能分享出去：

### 選項 A：命名導出 (Named Export) - 推薦！
一個檔案可以有很多個。
```javascript
// math.js
export const add = (a, b) => a + b;
export const PI = 3.14159;
```

### 選項 B：默認導出 (Default Export)
一個檔案只能有一個。
```javascript
// user.js
export default function login() { ... }
```

## 2. 導入 (Import)

```javascript
import login from "./user.js"; // 導入預設
import { add, PI } from "./math.js"; // 導入命名
```

## 3. 2026 時代的 ESM 優勢

- **靜態分析**：IDE (VS Code) 能直接知道你用了什麼，提供完美的自動補全。
- **Tree Shaking**：如果你的模組有 100 個函數但你只用了 1 個，打包工具會自動把剩下 99 個丟掉。

### 動態導入 (Dynamic Import)
想要按需載入嗎？
```javascript
if (userNeedsChart) {
  const chartModule = await import("./charts.js");
  chartModule.render();
}
```

<div class="interactive-lab">
 🧪 <strong>Lab 28: 模組拆分</strong>
 請建立兩個檔案：<code>utils.js</code> (放一個格式化日期的函數) 
 和 <code>main.js</code>。嘗試將函數匯出並在 <code>main.js</code> 中使用。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 有了模組，接下來我們需要一台「處理器」來處理它們。
 下一節，我們要探索 2026 年最火紅的工具：<strong>Bun 與 Vite</strong>。
 我們要學習如何打造飛快地開發環境。
</div>
