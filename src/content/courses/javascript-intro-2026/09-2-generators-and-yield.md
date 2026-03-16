---
description: 學習控制代碼的「暫停」與「恢復」。掌握產生器函數 (*), yield 關鍵字，以及如何處理無限序列。
duration: 20:00
level: beginner
tags:
- Generators
- Yield
- Control Flow
tier: free
title: "09-2 程式的暫停鍵：產生器 (Generators)"
youtubeId: 
---

# 09-2 程式的暫停鍵：產生器 (Generators)

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "想像一下：你有一個函數，執行到一半可以『暫停』，
 把控制權交回給別人，等一下再『恢復』繼續從原來的地方跑。
 這在以前簡直是科幻小說。
 
 但這就是 `Generator`。它讓原本一鼓作氣跑到底的 JS 函數，
 變成了一個可以隨時調整節奏的『節拍器』。
 對於處理無限資料或是複雜的狀態轉移，這是最強大的利器。"
</div>

## 1. 產生器函數 (Generator Function)

使用 `function*` 定義，並使用 `yield` 暫停。

```javascript
function* sayNumbers() {
  console.log("開始...");
  yield 1;
  console.log("繼續...");
  yield 2;
}

const gen = sayNumbers(); // 執行此行不會印出任何東西，只會回傳一個迭代器

console.log(gen.next().value); // "開始..." -> 1
console.log(gen.next().value); // "繼續..." -> 2
```

## 2. 處理無限序列

這是在傳統迴圈中絕對不能做的事，但在 Generator 中輕而易舉。

```javascript
function* idCreator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const ids = idCreator();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
// 不會當機，因為它每次 yield 就停下來了
```

## 3. 向產生器傳遞值

`yield` 不僅可以把值傳出去，還能接收傳進來的值。

```javascript
function* chatter() {
  const answer = yield "你叫什麼名字？";
  yield `你好，${answer}！`;
}

const c = chatter();
console.log(c.next().value); // "你叫什麼名字？"
console.log(c.next("Andy").value); // "你好，Andy！"
```

<div class="interactive-lab">
 🧪 <strong>Lab 20: 費波那契數列 (Fibonacci)</strong>
 請使用產生器寫一個費波那契數列產生器。
 <code>0, 1, 1, 2, 3, 5, 8...</code>。
 試著印出前 10 個數字。
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：非同步流</strong>
 當產生器遇到非同步請求時會發生什麼事？
 在付費單元，我們要學習 <strong>Async Iterators</strong> 與 <strong>Streams</strong>，
 這是處理大型下載或是實時數據的專業選擇。
</div>
