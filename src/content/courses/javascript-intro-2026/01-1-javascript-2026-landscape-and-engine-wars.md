---
description: 探索 2026 年的 JavaScript 生態系，了解 Node.js、Deno 與 Bun 的瀏覽器大戰，並選擇最適合你的學習路徑。
duration: 15:00
level: beginner
tags:
- JavaScript
- Ecosystem
- "2026"
tier: free
title: "01-1 2026 的 JavaScript 版圖：引擎大戰"
youtubeId: 
---

# 01-1 2026 的 JavaScript 版圖：引擎大戰

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "哈囉大家好，歡迎來到 2026 年的 JavaScript 課程！
 在開始寫程式之前，我們必須先搞懂現在的戰場。
 
 以前學 JS 很簡單，瀏覽器打開就跑。但現在，我們有 Node.js、有 Deno、還有快得不可思議的 Bun。
 很多新手會問：『老師，我到底該選哪一個？』
 
 這一節課，我不只要告訴你『選什麼』，還要告訴你『為什麼』。
 我們會看到 JS 如何從一個簡單的網頁腳本，進化成統治伺服器、AI 甚至邊緣運算 (Edge Computing) 的霸主。
 準備好了嗎？我們來看這張地圖！"
</div>

## 1. JavaScript 的三大時代

JavaScript 不再只是網頁特效語言。在 2026 年，它的影響力分為三個階段：

1.  **瀏覽器時代 (The Browser Era)**: 
    *   JS 只能在 Chrome/Firefox 裡跑。
    *   代表工具：jQuery。
2.  **Node.js 時代 (The Node Era)**: 
    *   JS 走進後端，可以寫 API、讀寫檔案。
    *   但也帶來了複雜的工具鏈 (`node_modules` 黑洞)。
3.  **現代效能時代 (The Performance Era - 2024~2026)**:
    *   **Bun** 與 **Rust-based tooling** 崛起。
    *   追求極致速度，工具合一 (All-in-one)。

## 2. 三大 Runtime 對決：Node vs Deno vs Bun

這三者都是用來「執行」JavaScript 的環境，但個性完全不同。

| 特性 | Node.js (老大哥) | Deno (安全衛士) | Bun (速度惡魔) |
| :--- | :--- | :--- | :--- |
| **核心引擎** | V8 (Google) | V8 (Google) | JavaScriptCore (Apple) |
| **啟動速度** | 慢 🐢 | 中等 🚶 | 極快 ⚡️ |
| **相容性** | 完美 (業界標準) | 獨特 (URL import) | 極高 (相容 Node) |
| **工具箱** | 需額外安裝 (npm) | 內建 (Lint/Fmt) | 內建 (Test/Run/Bundle) |
| **適合對象** | 企業 legacy 專案 | 安全性要求高的 API | **新手、Side Project、追求開發體驗** |

<div class="interactive-lab">
 🧪 <strong>知識點小測驗</strong>
 Q: 為什麼 2026 年很多新專案喜歡用 Bun？
 A: 因為它啟動快，原本需要安裝 5 個工具 (Webpack, Jest, Nodemon...)，現在 Bun 一個指令就全包了！不浪費生命在設定設定檔。
</div>

## 3. 為什麼這門課我們選擇 Bun？

雖然 Node.js 還是工作機會最多的，但在**學習階段**，我們選擇 **Bun**，原因如下：
1.  **零設定 (Zero Config)**：不用裝 TypeScript，它直接你看懂 TS 檔。
2.  **速度感**：寫 code 講求回饋，Bun 的熱重載 (Hot Reload) 讓你改完 code 網頁瞬間更新。
3.  **內建功能**：不用教你怎麼裝 `dotenv` 讀環境變數，Bun 內建就有。

> **注意**：課程中教的 JavaScript 語法是**通用**的。你在這裡學的 `Array.map()`，回到 Node.js 寫法一模一樣。我們只是換了一台比較快的跑車來學開車！

## 4. 外部資源與延伸閱讀

- [Bun 官方網站](https://bun.sh) - 首頁的 Benchmark 跑分非常誇張。
- [Node.js 2026 Roadmap](https://nodejs.org/en/about/previous-releases) - 看看老大哥如何反擊。
- [State of JS 2025](https://stateofjs.com) - 數據會說話，觀察開發者的選擇。

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 既然決定了要開跑車，我們就來考駕照吧！
 下一節，我們要手把手安裝 <strong>VS Code</strong> 這款神級編輯器，並且把 <strong>Bun</strong> 裝進你的電腦，寫下你的第一行 2026 JS 程式碼！
</div>
