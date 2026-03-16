---
description: (Pro) 處理海量動態數據。學習異步迭代協議、for-await-of，以及使用 Web Streams API 進行高效能資源處理。
duration: 25:00
level: intermediate
tags:
- Async Iterators
- Streams API
- Performance
tier: pro
title: "09-3 (付費) 數據洪流：異步迭代與 Streams"
youtubeId: 
---

# 09-3 (付費) 數據洪流：異步迭代與 Streams

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "如果你的資料不是一次性給齊，而是像水管裡的水一樣緩緩流過來，你該怎麼處理？
 例如：一支 1GB 的影片，或者一個持續更新的股票報價。
 
 在 2026 年，我們不再把整個檔案讀進記憶體。
 我們要學習如何使用異步迭代器 `for await...of`。
 這不僅能節省你的記憶體，還能讓你的應用程式反應極快。"
</div>

## 1. 異步迭代器 (Async Iterators)

當 `next()` 回傳的是一個 `Promise` 時，我們稱之為異步迭代器。

```javascript
const asyncSource = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      async next() {
        await new Promise(r => setTimeout(r, 1000)); // 模擬延遲
        if (i < 3) return { value: i++, done: false };
        return { done: true };
      }
    };
  }
};

(async () => {
  for await (const val of asyncSource) {
    console.log(val); // 每秒鐘印出一個數字
  }
})();
```

## 2. 異步產生器 (Async Generators)

結合 `async` 與 `*`，它是處理分頁 API 的神器。

```javascript
async function* fetchPages(url) {
  let currUrl = url;
  while (currUrl) {
    const response = await fetch(currUrl);
    const data = await response.json();
    currUrl = data.nextPage;
    yield data.items;
  }
}
```

## 3. Web Streams API

這是處理原始二進位數據的最核心工具（例如：正在下載的檔案）。

```javascript
const response = await fetch(url);
const reader = response.body.getReader();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  console.log(`收到 ${value.length} bytes 的數據`);
}
```

<div class="interactive-lab">
 🧪 <strong>Lab 21: 漸進式讀取器</strong>
 試著實作一個異步產生器，模擬每隔 500ms 從資料庫抓取一筆使用者，
 並使用 <code>for await...of</code> 將所有名字印出來。
</div>

---

<div class="next-step-teaser">
 🎓 <strong>本章總結</strong>
 控制了迭代，你就控制了數據的節奏。
 
 下一章，我們將正式進入最熱門、最重要的主題：<strong>非同步 JavaScript (Asynchronous JS)</strong>。
 我們要徹底搞懂 Promise、Async/Await，以及那個讓全世界 JS 新手抓狂的 **Event Loop**。
</div>
