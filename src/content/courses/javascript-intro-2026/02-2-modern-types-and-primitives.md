---
description: 深入了解 2026 JavaScript 的七大原始型別，分辨 null 與 undefined 的差異，並掌握字串模板 (Template Literals)。
duration: 20:00
level: beginner
tags:
- JavaScript
- Types
- ES2026
tier: free
title: "02-2 現代型別系統：BigInt, Symbol 與字串模板"
youtubeId: 
---

# 02-2 現代型別系統：BigInt, Symbol 與字串模板

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "變數就像箱子，型別就是箱子裡裝的東西。
 很多新手分不清楚 `null` 跟 `undefined`，這在面試必考！
 還有，數字超過 9000 兆的時候該怎麼辦？
 這節課我們要來盤點 JavaScript 2026 年的所有資料型別。"
</div>

## 1. 原始型別 (Primitives) - 簡單的資料

JavaScript 有 7 種原始型別，它們是**不可變的 (Immutable)**。
你可以把它們想成是「原子」，不能再切分了。

1.  **Number**: 一般數字。 `let age = 18;`
2.  **String**: 字串。 `let name = "Andy";`
3.  **Boolean**: 真假值。 `let isCool = true;`
4.  **Null**: 「空」。即使刻意設定的「沒有值」。
5.  **Undefined**: 「未定義」。尚未被賦值的狀態。
6.  **BigInt** (現代新增): 超大整數。 `const huge = 9007199254740991n;` (注意後面的 n)
7.  **Symbol** (現代新增): 獨一無二的識別符。 `const id = Symbol("id");`

### 重點比較：Null vs Undefined
*   **Undefined**: 你買了箱子，但還沒裝東西。（系統預設）
*   **Null**: 你買了箱子，並且貼上標籤說「這箱子是空的」。（開發者設定）

## 2. 關於字串：Template Literals

拜託，2026 年不要再用 `+` 號來接字串了。太醜了。
請使用 **反引號 (Backticks) `**。

```javascript
const name = "Andy";
const action = "coding";

// ❌ 舊寫法 (醜)
const msg = "Hello, " + name + " is " + action;

// ✅ 新寫法 (優雅)
const msgModern = `Hello, ${name} is ${action}`; 
```

並且，它支援**多行字串**，不用在那邊 `\n`：
```javascript
const html = `
  <div>
    <h1>Title</h1>
  </div>
`;
```

## 3. LAB 02: 型別偵探

<div class="interactive-lab">
 🧪 <strong>Typeof 練習</strong>
 請寫一個程式，檢查變數的型別：
 
 ```javascript
 console.log(typeof 123);        // number
 console.log(typeof "123");      // string
 console.log(typeof 9007199254740991n); // bigint
 console.log(typeof undefined);  // undefined
 console.log(typeof null);       // object ⚠️ (這是 JS 著名的歷史 Bug，但改不了了)
 ```
</div>

---

<div class="next-step-teaser">
 💎 <strong>付費單元預告</strong>
 你知道你在宣告變數時，電腦記憶體發生了什麼事嗎？
 為什麼有些人面試會問「Hosting (提升)」跟「TDZ」？
 這些聽起來很難的專有名詞，其實是 JS 運作的底層邏輯。
 下一節付費課，我們要帶你「透視」JS 引擎的內部！
</div>
