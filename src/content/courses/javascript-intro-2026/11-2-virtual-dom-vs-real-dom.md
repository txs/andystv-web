---
description: 深入理解 DOM 的效能瓶頸。探討什麼是 Virtual DOM，以及現代框架如何透過 Diff 算法減少瀏覽器的重繪負擔。
duration: 18:00
level: beginner
tags:
- Virtual DOM
- Performance
- Framework Theory
tier: free
title: "11-2 效能之辯：Real DOM 與 Virtual DOM"
youtubeId: 
---

# 11-2 效能之辯：Real DOM 與 Virtual DOM

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "很多新手以為 DOM 操作很快。其實，操作 DOM 很慢，『非常慢』。
 每當你改動一個像素，瀏覽器可能都要重新計算整個網頁的佈局（這叫 Reflow 與 Repaint）。
 
 為了拯救效能，React 和 Vue 提出了 Virtual DOM 的概念。
 這一節，我們不寫框架，但我們要搞懂這套『偷懶』的哲學是怎麼運作的。"
</div>

## 1. 為什麼 Real DOM 慢？

當你頻繁操作 DOM 時，瀏覽器會一直進行重繪。
想像你要蓋一棟房子，你每改一個插座的位置，都要叫建築師重新畫一次整張藍圖。這就是慢的原因。

## 2. 虛擬 DOM 的哲學

Virtual DOM 其實就是一個**純 JavaScript 物件**，代表了 DOM 的結構。

```javascript
// 這是一個虛擬的 <div>
const vNode = {
  tag: "div",
  props: { class: "container" },
  children: [
    { tag: "span", text: "Hello" }
  ]
};
```

**過程**：
1.  **Render**：把資料變成虛擬物件（在 JS 裡面跑，極快）。
2.  **Diff**：比較「舊的虛擬物件」與「新的虛擬物件」，找出差異。
3.  **Patch**：只把那一點點差異，更新到「真實的 DOM」上。

## 3. 2026 年的趨勢：No Virtual DOM?

雖然 Virtual DOM 很紅，但像 Svelte 或是現代的 **Astro Island** 指出：
我們可以透過編譯時期的分析，直接產出精準的修改代碼，連 Diff 都不用做。
這就是為什麼我們的課程重點依然放在 Vanilla JS (原生 JS) 上。

<div class="interactive-lab">
 🧪 <strong>Lab 26: 佈局抖動 (Layout Thrashing)</strong>
 試著寫一個迴圈，在裡面同時讀取 <code>offsetHeight</code> 並修改 <code>style.top</code>。
 打開 Chrome 的 Performance 面板，你會看到紅色的警告。
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：事件的藝術</strong>
 如果你的網頁有 1000 個按鈕，你要裝 1000 個監聽器嗎？
 在付費單元，我們要學習 <strong>事件委派 (Event Delegation)</strong>，
 這是一次性管理萬千節點的核心技術。
</div>
