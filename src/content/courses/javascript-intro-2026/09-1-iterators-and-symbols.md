---
description: 探索 JavaScript 的迭代協議。理解 Symbol.iterator 如何讓物件變得可以被迴圈，並學習內建的 Iterable 物件。
duration: 18:00
level: beginner
tags:
- Iterators
- Symbols
- Protocol
tier: free
title: "09-1 遍歷之理：反覆運算子 (Iterators)"
youtubeId: 
---

# 09-1 遍歷之理：反覆運算子 (Iterators)

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "你有沒有想過，為什麼 `Array` 可以用 `for...of`，但 `Object` 卻不行？
 這背後有一套神祕的約定，叫做『迭代協議 (Iteration Protocol)』。
 
 今天我們要學會如何讓任何東西（即使是一個複雜的資料結構）都變得可以被遍歷。
 這會開啟你對『資料流』的新理解。"
</div>

## 1. 什麼是迭代器？

迭代器是一個物件，它有一個 `next()` 方法，回傳：
`{ value: 任何值, done: 布林值 }`。

```javascript
const myIterator = {
  i: 0,
  next() {
    if (this.i < 3) {
      return { value: this.i++, done: false };
    }
    return { done: true };
  }
};

console.log(myIterator.next()); // { value: 0, done: false }
```

## 2. Symbol.iterator：打通樞紐

要讓一個物件支援 `for...of`，你必須賦予它一個 `[Symbol.iterator]` 方法。

```javascript
const collection = {
  items: ["A", "B"],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        return i < this.items.length 
          ? { value: this.items[i++], done: false } 
          : { done: true };
      }
    };
  }
};

for (const x of collection) {
  console.log(x); // "A", "B"
}
```

## 3. Iterable 的力量

只要一個物件是 Iterable (可迭代的)，你就可以對它使用：
- `for...of`
- `[...spread]` (展開運算子)
- `Array.from()`

<div class="interactive-lab">
 🧪 <strong>Lab 19: 自定義遞減計時器</strong>
 請建立一個物件 <code>countdown</code>，讓它支援 <code>for...of</code>。
 當你使用迴圈時，它會從 10 倒數到 1 然後停止。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 寫迭代器有點麻煩對吧？要自己寫 <code>next()</code>...
 下一節，我們要學習一個超級語法糖：<strong>產生器 (Generators)</strong>。
 使用 <code>*</code> 和 <code>yield</code>，你就能優雅地控制代碼的執行順序。
</div>
