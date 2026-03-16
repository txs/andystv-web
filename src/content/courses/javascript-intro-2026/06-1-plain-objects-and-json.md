---
description: 理解 JavaScript 中最核心的資料結構：物件。從基礎字面量到現代解構與展開運算。
duration: 15:00
level: beginner
tags:
- Objects
- JSON
- Data Structures
tier: free
title: "06-1 資料的容器：物件與 JSON"
youtubeId: 
---

# 06-1 資料的容器：物件與 JSON

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "在 JavaScript 的世界，除了基本型別，幾乎萬物皆物件。
 不管你是在處理用戶資料、還是串接 API，物件都是你最好的朋友。
 
 很多人會問：『物件不就是大括號包起來的東西嗎？』
 沒錯，但如何高效地取出裡面的變數？如何合併兩個物件？
 這些技巧將決定你的開發速度。"
</div>

## 1. 物件字面量 (Object Literals)

最常見的建立方式：
```javascript
const user = {
  name: "Andy",
  age: 30,
  "last login": "2026-02-18", // 屬性名稱有空格時需加引號
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};
```

## 2. 現代賦值簡寫 (Property Shorthand)

如果變數名稱跟屬性名稱一樣，我們可以縮寫它：
```javascript
const version = "1.2.0";
const config = { version }; // 等同於 { version: version }
```

## 3. 解構賦值 (Destructuring)

這是 2026 年工程師的標準動作：
```javascript
const person = { job: "Teacher", salary: 10000 };

// 從物件中直接提取變數
const { job, salary } = person;
console.log(job); // "Teacher"
```

## 4. 展開運算子 (Spread Operator)

用於合併物件或淺拷貝：
```javascript
const baseConfig = { theme: "dark" };
const userConfig = { ...baseConfig, fontSize: 16 };
// { theme: "dark", fontSize: 16 }
```

<div class="interactive-lab">
 🧪 <strong>Lab 10: 物件合併挑戰</strong>
 你有兩個物件：<code>defaultSettings</code> 和 <code>userProfile</code>。
 請使用展開運算子將兩者合併，並確保 <code>userProfile</code> 的內容會覆蓋掉 <code>defaultSettings</code> 的重複屬性。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 為什麼 <code>this</code> 有時候指這，有時候指那？
 我們要進入 JS 最神祕的領域：<strong>原型鏈 (Prototype Chain)</strong>。
 搞懂它，你就能理解 JS 物件繼承的真相。
</div>
