---
description: 擺脫回調地獄。深入理解 Promise 的三種狀態、鏈式調用，以及如何使用 Fetch API 進行現代網路請求。
duration: 18:00
level: beginner
tags:
- Promises
- Fetch API
- Asynchronous
tier: free
title: "10-1 正視承諾：Promise 與網路請求"
youtubeId: 
---

# 10-1 正視承諾：Promise 與網路請求

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "歡迎來到 JavaScript 最具代表性的章節。
 早期的 JS 處理異步（像是等檔案讀完、等 API 回傳）是用『回調函數 (Callback)』。
 結果就是代碼一直往右邊縮排，變成了可怕的『回調地獄』。
 
 `Promise` 的出現，是為了讓我們像寫同步程式一樣，優雅地寫異步程式。
 它不只是一個技術，它是一種設計哲學：『我現在還沒拿到結果，但我承諾你，拿到後我會通知你。』"
</div>

## 1. 什麼是 Promise？

Promise 有三種狀態：
1.  **Pending (等待中)**：初始狀態。
2.  **Fulfilled (已實現)**：作業成功，呼叫 `resolve()`。
3.  **Rejected (已拒絕)**：作業失敗，呼叫 `reject()`。

```javascript
const myWait = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    success ? resolve("成功！") : reject("慘，失敗了...");
  }, 1000);
});

myWait
  .then(res => console.log(res))
  .catch(err => console.error(err));
```

## 2. 現代網路請求：Fetch API

不要問 AJAX 怎麼寫，在 2026 年，我們只用 `fetch`。註：`fetch` 回傳的就是一個 Promise。

```javascript
fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) throw new Error("網路連線不給力");
    return response.json(); // 這裡也回傳 Promise
  })
  .then(data => console.log(data))
  .catch(error => console.error("發生錯誤：", error));
```

## 3. Promise 全家桶

- `Promise.all([p1, p2])`: 等「全部」都成功才成功。
- `Promise.race([p1, p2])`: 誰「最快」回傳就取誰。
- `Promise.allSettled()`: 不管成敗，等全部「處理完」才繼續。

<div class="interactive-lab">
 🧪 <strong>Lab 22: 同步併發挑戰</strong>
 同時使用 <code>fetch</code> 請求兩支 API。
 必須等到兩份資料都拿到後，才在畫面上印出「全部資料已載入」。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 `then()` 雖然好用，但接多了還是有點煩。
 下一節，我們要學習目前全世界工程師公認最完美的語法：<strong>Async / Await</strong>。
 它能讓你的異步代碼，看起來跟普通代碼一模一樣！
</div>
