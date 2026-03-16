---
description: 為什麼 2026 年絕對不該再用 var？一次搞懂 let 與 const 的正確使用時機，以及「預設 const」的現代開發準則。
duration: 15:00
level: beginner
tags:
- JavaScript
- Variables
- Best Practices
tier: free
title: "02-1 變數革命：為什麼 var 已死？"
youtubeId: 
quiz:
  - question: "在 2026 年的現代 Web 開發中，為什麼應該絕對避免使用 var？"
    options: ["因為它會污染全域作用域且可重複宣告", "因為它的執行速度比 let 慢很多", "因為它無法儲存數字型別", "因為 TypeScript 不支援 var"]
    correctIndex: 0
    explanation: "var 沒有區塊作用域 (Block Scope)，容易污染全域環境，並且允許重複宣告，這些特性在多人開發的大型專案中容易引發難以追蹤的 Bug。"
  - question: "如果一個變數在宣告後「絕對不會再被重新賦值」，應該優先使用哪一個關鍵字？"
    options: ["let", "const", "var", "static"]
    correctIndex: 1
    explanation: "const 代表常數，預設使用 const 可以向其他開發者表達「這個變數不會被修改」的意圖，不僅更安全，也能讓 JavaScript 引擎進行更好的最佳化。"
---

# 02-1 變數革命：為什麼 var 已死？

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "嘿，歡迎回到課程！
 如果你在網路上找到的教學還在教你用 `var` 來宣告變數，請立刻關掉那個網頁。
 那是十年前的寫法了！
 
 在 2026 年，我們只有兩個選擇：`let` 和 `const`。
 而且我會告訴你一個資深工程師的秘密：**95% 的情況下，你應該只用 `const`。**
 為什麼？讓我們看下去。"
</div>

## 1. 歷史的眼淚：`var` 的災難

以前我們用 `var`，但我現在要告訴你它為什麼被淘汰。
*   **你可以重複宣告**：`var x = 1; var x = 2;` 竟然不會報錯？這在大型專案是災難。
*   **它會「洩漏」出去**：`var` 沒有區塊作用域 (Block Scope)。

```javascript
// ❌ 錯誤示範 (以前的寫法)
if (true) {
  var secret = "I am secret";
}
console.log(secret); // 竟然印出來了！變數污染了全域！
```

## 2. 現代救星：`let` 與 `const`

ES6 (2015) 之後，JavaScript 終於正常了。
*   **Block Scope**：變數只活在大括號 `{}` 裡面。出了括號就死掉了（記憶體回收），這才安全。

### 規則一：預設使用 `const` (常數)
只要這個變數**之後不會被「重新賦值 (=)」**，就一律用 `const`。
這代表「承諾」：我不打算改變它。
```javascript
const birthYear = 1995;
// birthYear = 1996; // ❌ 報錯！保護你不會不小心改到重要資料。
```

### 規則二：真的要變，才用 `let`
只有像計數器、開關狀態這種**真的會變**的東西，才用 `let`。
```javascript
let score = 0;
score = 10; // ✅ 合法
```

## 3. LAB 01: 變數生存範圍實測

<div class="interactive-lab">
 🧪 <strong>練習時間</strong>
 1. 打開 VS Code，建立 <code>02-1-scope.js</code>。
 2. 輸入以下程式碼並用 Bun 執行：
 
 ```javascript
 if (true) {
   let ghost = "👻";
   const zombie = "🧟";
   var monster = "👹";
 }
 
 console.log(monster); // 印出 👹 (這就是 var 的壞處！)
 // console.log(ghost); // ❌ 報錯：ghost is not defined (這才是對的！)
 ```
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課</strong>
 搞懂了容器（變數），我們接下來要看容器裡面可以裝什麼「東西」。
 JavaScript 的型別系統在 2026 年有了新成員：<strong>BigInt</strong> 與 <strong>Symbol</strong>。
 這些是什麼？下一節揭曉！
</div>
