---
description: (Pro) 將你的函數提升至藝術等級。學習純函數、副作用控制、以及利用 Pipe/Compose 構建聲明式代碼。
duration: 30:00
level: advanced
tags:
- Functional Programming
- Pure Functions
- Design Patterns
tier: pro
title: "05-3 (付費) 函數式編程：Pipe, Compose 與純粹性"
youtubeId: 
---

# 05-3 (付費) 函數式編程：Pipe, Compose 與純粹性

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "歡迎來到最高層次。
 
 在大型專案中，最恐怖的事情就是：你改了一個函數 A，結果遠在天邊的物件 B 竟然壞掉了。
 這就是所謂的『副作用 (Side Effects)』。
 
 這一章我们要學的是如何把程式碼寫得像數學公式一樣：給特定的輸入，永遠產出特定的輸出。
 當你的函數變得『純粹』，你的程式就變得極易測試、極易預測。"
</div>

## 1. 純函數 (Pure Functions)

一個純函數必須滿足兩個條件：
1.  **確定的結果**：給一樣的輸入，永遠得到一樣的輸出。
2.  **無副作用**：不改動外部變數、不發送網路請求、不印 console (嚴格來說)。

```javascript
// ❌ 不純：依賴外部變數
let tax = 0.05;
const calc = (price) => price * tax;

// ✅ 純：依賴傳入的參數
const calcPure = (price, tax) => price * tax;
```

## 2. 聲明式編程：Pipe 的概念

雖然 JS 官方的 `|>` (Pipeline) 提案還沒正式定案，但在 2026 年，我們習慣用工具函式來模擬它。

**目標**：把資料像流水線一樣經過多個工廠。

```javascript
const trim = (str) => str.trim();
const capitalize = (str) => str.toUpperCase();
const addExclamation = (str) => `${str}!`;

// 傳統寫法 (醜)
const result = addExclamation(capitalize(trim("  hello  ")));

// 現代思維 (Pipe)
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const processText = pipe(trim, capitalize, addExclamation);
console.log(processText("  hello  ")); // "HELLO!"
```

## 3. 高階函數的綜合應用：撰寫自己的中介軟體 (Middleware)

學會了這些，你就可以像 Better Auth 或 Astro 一樣，寫出可高度組合的元件。

```javascript
const withLogger = (fn) => (...args) => {
  console.log(`正在呼叫 ${fn.name}，参数是 ${args}`);
  return fn(...args);
};

const secureAdd = withLogger((a, b) => a + b);
secureAdd(1, 2); 
```

<div class="interactive-lab">
 🧪 <strong>Lab 09: 流水線大賽</strong>
 請設計三個小型函數：<code>double</code>, <code>square</code>, <code>minusOne</code>。
 試著用 <code>pipe</code> 把一個數字 5 依序經過這三個函數。結果應該是 <code>(5*2)^2 - 1 = 99</code>。
</div>

---

<div class="next-step-teaser">
 🎓 <strong>本章總結</strong>
 你已經掌握了 JavaScript 最核心的武器。
 你現在知道如何封裝數據、如何避免副作用，以及如何像搭積木一樣組合函數。
 
 下一章，我們要來看看資料的載體：<strong>物件與原型 (Objects & Prototypes)</strong>。
 我們要探索 JavaScript 獨有的繼承機制。
</div>
