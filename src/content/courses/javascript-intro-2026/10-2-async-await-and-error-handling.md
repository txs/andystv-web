---
description: 異步編程的最終解決方案。學習如何編寫可讀性最高的 Async 函數，並掌握異步環境下的錯誤捕捉技巧。
duration: 20:00
level: beginner
tags:
- Async Await
- Error Handling
- Clean Code
tier: free
title: "10-2 語法糖的極致：Async 與 Await"
youtubeId: 
---

# 10-2 語法糖的極致：Async 與 Await

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "如果你學會了這堂課，你就不會想再寫 `.then()` 了。
 `Async/Await` 讓異步代碼變得極度人性化。
 它讓我們可以『暫停』函數的執行，等到 Promise 解決後再繼續。
 
 這種『看起來像同步』的異步寫法，不僅減少了括號的層數，
 更讓除錯 (Debug) 變得無比輕鬆。"
</div>

## 1. Async / Await 基本語法

- 在函數前面加 `async`。
- 在 Promise 前面加 `await`（這會暫停函數直到結果回傳）。

```javascript
async function getUserData() {
  const response = await fetch("https://api.example.com/user");
  const user = await response.json();
  console.log(user.name);
}
```

## 2. 錯誤處理：Try...Catch 的回歸

在 `async/await` 中，我們不再需要 `.catch()`，直接用熟悉的 `try...catch` 即可。

```javascript
async function safeFetch() {
  try {
    const res = await fetch("...");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("抓不到資料：", error);
  }
}
```

## 3. 陷阱：不要序列化你的併發

這是一個新手最容易犯的錯：

```javascript
// ❌ 慢：要等 A 跑完才開始跑 B
const user = await fetchUser();
const posts = await fetchPosts();

// ✅ 快：同時開始，一起等待 (併發)
const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
```

<div class="interactive-lab">
 🧪 <strong>Lab 23: 倒數計時請求</strong>
 寫一個 <code>sleep(ms)</code> 函數並回傳 Promise。
 先讓程式碼 <code>sleep(2000)</code>，之後再發送 <code>fetch</code> 請求。
 全部使用 <code>async/await</code> 實現。
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：深入核心</strong>
 為什麼 JS 是單執行緒，卻能同時處理這麼多請求？
 在付費單元，我們要深入<strong>事件循環 (Event Loop)</strong>。
 我們要討論 Macro-task, Micro-task，以及如何使用 Web Workers 釋放你的 CPU 潛能。
</div>
