---
description: 學習函數式陣列處理。掌握 Map, Filter, Reduce 三劍客，並理解為何「不可變性 (Immutability)」是現代框架的靈魂。
duration: 20:00
level: beginner
tags:
- Functional Programming
- Map
- Filter
- Reduce
tier: free
title: "07-2 資料流動：Map、Filter 與不可變之美"
youtubeId: 
---

# 07-2 資料流動：Map、Filter 與不可變之美

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "這是整個 JS 基礎中最重要的一堂課。
 現代前端框架 (React, Vue) 的資料處理邏輯， 90% 都在用這幾個方法。
 
 核心概念只有一個：**不要去修改原始資料，而是產生一份新的資料**。
 這就是所謂的『不可變性 (Immutability)』。
 當你習慣了這種思考方式，你的程式碼會變得超級好找 Bug。"
</div>

## 1. Map：一對一的轉換

把一個陣列，經過加工，變成**長度一樣**的新陣列。

```javascript
const prices = [10, 20, 30];
const doublePrices = prices.map(num => num * 2); // [20, 40, 60]
```

## 2. Filter：篩選器

只留下你想要的，變成**可能變短**的新陣列。

```javascript
const scores = [80, 50, 90, 40];
const passScores = scores.filter(s => s >= 60); // [80, 90]
```

## 3. Reduce：大魔王 (歸納)

把整個陣列「壓縮」成一個值（可以是數字、物件、甚至是另一個陣列）。

```javascript
const cart = [100, 250, 400];
const total = cart.reduce((sum, item) => sum + item, 0); // 750
```

## 4. 2026 的新工具：.toSorted(), .toReversed()

傳統的 `.sort()` 會改動原陣列，這在現代開發是不好習慣。
2026 年我們用「不可變」版本：
```javascript
const original = [3, 1, 2];
const sorted = original.toSorted(); // original 依然是 [3, 1, 2]
```

<div class="interactive-lab">
 🧪 <strong>Lab 14: 鏈式處理</strong>
 你有一個用戶陣列：
 <code>[{name: "A", age: 10}, {name: "B", age: 25}, {name: "C", age: 30}]</code>
 請用一串方法：先 <strong>filter</strong> 出大於 18 歲的人，再 <strong>map</strong> 出他們的名字。
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：效能巔峰</strong>
 當陣列變成 100 萬筆資料時，普通的 Array 方法會變慢嗎？
 在付費單元，我們要學習 <strong>TypedArrays</strong> 與 <strong>SharedArrayBuffer</strong>，
 這是處理二進制大型數據（如圖片、音訊）的專業選擇。
</div>
