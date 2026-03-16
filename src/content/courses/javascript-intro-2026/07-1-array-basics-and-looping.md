---
description: 掌握 JavaScript 中最常用的有序集合。學習基礎操作、遍歷技巧，以及 2026 年必備的陣列方法。
duration: 15:00
level: beginner
tags:
- Arrays
- Data Structures
- Looping
tier: free
title: "07-1 集合的藝術：陣列基礎與遍歷"
youtubeId: 
---

# 07-1 集合的藝術：陣列基礎與遍歷

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "如果物件是在描述一個『人』，那陣列就是在描述一串『隊伍』。
 在開發中，你會花大量的時間在處理列表：產品列表、好友名單、按鈕設定。
 
 這一章，我們要學會如何專業地操作這支隊伍。
 除了傳統的加減元素，我會教你如何有效率地找到隊伍裡的那個人。"
</div>

## 1. 陣列的基礎操作

```javascript
const list = ["HTML", "CSS", "JS"];

// 新增與刪除 (尾部)
list.push("Bun");     // 加到最後
list.pop();           // 刪除最後一個

// 新增與刪除 (頭部) - 效能較差，因為要移動所有元素
list.unshift("Astro"); // 加到最前
list.shift();          // 刪除第一個
```

## 2. 隨心所欲的切割：Splice 與 Slice

- `slice(start, end)`：**不改動原陣列**，回傳切下來的部分。
- `splice(index, howmany, item1...)`：**會改動原陣列**，強大的萬能工具（可刪除、可插入）。

```javascript
const colors = ["Red", "Green", "Blue"];
const newColors = colors.slice(1); // ["Green", "Blue"]
```

## 3. 找尋元素

```javascript
const users = ["Andy", "Brian", "Chris"];

console.log(users.indexOf("Brian")); // 1
console.log(users.includes("Andy")); // true (2026 年推薦寫法)
```

## 4. 2026 必備：陣列解構與合併

```javascript
const [first, ...rest] = ["A", "B", "C", "D"];
// first = "A", rest = ["B", "C", "D"]

const combined = [...list, ...users]; // 合併兩個隊伍
```

<div class="interactive-lab">
 🧪 <strong>Lab 13: 隊伍重排</strong>
 你有一個名單 <code>["Alice", "Bob", "Charlie", "David"]</code>。
 請使用陣列方法，將 Charlie 刪除，並在那個位置插入 "Eve"。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 你還在用 <code>for</code> 迴圈處理資料嗎？快把它忘掉！
 下一節，我們要學習現代開發的靈魂：<strong>.map(), .filter(), .reduce()</strong>。
 這三劍客將讓你的程式碼減少一半的行數。
</div>
