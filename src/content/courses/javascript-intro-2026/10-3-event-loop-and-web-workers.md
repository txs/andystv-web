---
description: (Pro) 成為性能大師。揭秘 JavaScript 的異步心臟：Event Loop。學習如何使用 Web Workers 在後台處理運算，避免阻塞主執行緒。
duration: 30:00
level: intermediate
tags:
- Event Loop
- Microtasks
- Web Workers
tier: pro
title: "10-3 (付費) 幕後英雄：Event Loop 與 Web Workers"
youtubeId: 
---

# 10-3 (付費) 幕後英雄：Event Loop 與 Web Workers

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "這是區分初階與中階工程師的分水嶺。
 你可能聽說過 JS 是『單線程』的，但你有沒有想過，
 如果只有一條路，JS 怎麼可能一邊跑動畫、一邊等網路請求、一邊監聽點擊？
 
 今天我們要拆開瀏覽器的外殼，看看『事件循環 (Event Loop)』這個巨大的齒輪是怎麼轉動的。
 我們還會學習如何召喚第二個幫手 —— **Web Worker**，來處理那些讓頁面卡死的重裝運算。"
</div>

## 1. 事件循環 (Event Loop) 原理

JS 執行環境分為三大部分：
1.  **Stack (調用棧)**：目前正在跑的函數。
2.  **Task Queue (或是稱 Macro-task)**：如 `setTimeout`, `setInterval`。
3.  **Micro-task Queue**：如 `Promise.then`, `MutationObserver`。

**黃金順序**：先跑 Stack -> 清空 Micro-task -> 跑一個 Macro-task -> 再次清空 Micro-task。

```javascript
console.log("1"); // Stack
setTimeout(() => console.log("2"), 0); // Macro-task
Promise.resolve().then(() => console.log("3")); // Micro-task
console.log("4"); // Stack

// 結果順序：1, 4, 3, 2
```

## 2. 別阻塞主執行緒 (Main Thread)

如果你在主執行緒算 1 億次加法，使用者的網頁會直接死機，按鈕沒反應。
這叫 **Blocking**。

## 3. 解藥：Web Workers

Web Worker 讓你可以在另一個執行緒跑代碼，不影響 UI。

**Main.js:**
```javascript
const worker = new Worker("worker.js");
worker.postMessage("開始算！");
worker.onmessage = (e) => console.log("算完了：", e.data);
```

**Worker.js:**
```javascript
onmessage = (e) => {
  // 這裡可以做耗時運算
  const result = heavyCalculation();
  postMessage(result);
};
```

<div class="interactive-lab">
 🧪 <strong>Lab 24: 順序猜測</strong>
 給你一段包含 <code>setTimeout</code>, <code>Promise</code>, <code>async function</code> 的混合代碼。
 請在不執行它的情況下，預測它的輸出順序。這是最經典的面試魔鬼題。
</div>

---

<div class="next-step-teaser">
 🎓 <strong>本章總結</strong>
 控制了時間，你就控制了整個 Web 應用的節奏。
 你現在不僅能優雅地串接 API，還知道如何讓你的網頁保持 60 FPS 的流暢度。
 
 下一章，我們要回歸視覺：<strong>現代 DOM 與事件委派 (The Modern DOM)</strong>。
 我們要學習在 2026 年，如何在不使用框架的情況下，玩轉網頁元素。
</div>
