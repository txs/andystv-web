---
description: 解析 2026 年的主流函數語法。理解箭頭函數與普通函數的差異，並搞懂讓無數開發者頭痛的「作用域 (Scope)」。
duration: 20:00
level: beginner
tags:
- Functions
- Arrow Functions
- Scope
tier: free
title: "05-1 函數革命：箭頭函數與作用域"
youtubeId: 
---

# 05-1 函數革命：箭頭函數與作用域

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "有人說，JavaScript 就是一個『被裝飾過的函數式語言』。
 以前我們寫函數是用 `function` 關鍵字，現在我們幾乎都用箭頭 `=>`。
 
 他們只是寫法不一樣嗎？不，他們的靈魂（也就是那個讓人又愛又恨的 `this`）完全不同。
 今天我不教你八股的定義，我讓你從『作用域』的角度，看穿函數的真面目。"
</div>

## 1. 箭頭函數 (Arrow Functions)

在 2026 年，如果你還在寫 `function name() {}`，除非你有特殊目的，否則你看起來會像個古董。

```javascript
// 傳統
const add = function(a, b) {
  return a + b;
};

// 現代箭頭
const add = (a, b) => a + b; // 極度簡潔
```

### 箭頭函數的兩大優勢：
1.  **精簡**：如果只有一個參數，括號可以省略；如果只有一行回傳，`return` 可以省略。
2.  **Lexical this**：它不會產生新的 `this`。它會乖乖繼承外層的 `this`，這在寫 Class 或 React 元件時非常有用。

## 2. 作用域 (Scope) 的戰爭

作用域就是「變數的生存範圍」。

### 全域作用域 (Global Scope)
定義在最外層，任何地方都看得到。

### 區域作用域 (Local/Block Scope)
這就是為什麼我們用 `let` 和 `const`。
```javascript
if (true) {
  const secret = "噓！";
}
console.log(secret); // ❌ 報錯：secret is not defined
```

## 3. Hoisting (提升) 現象

雖然我們現在很少遇到，但你必須知道：`function` 聲明會被提升到最頂端。
這就是為什麼你可以在定義一個函數「之前」就呼叫它。
但**箭頭函數 (賦值給變數)** 不會被提升。

```javascript
sayHi(); // ✅ 成功

function sayHi() { console.log("Hi!"); }

// ---

sayHello(); // ❌ 失敗：Cannot access before initialization

const sayHello = () => { console.log("Hello!"); };
```

<div class="interactive-lab">
 🧪 <strong>Lab 07: 箭頭轉換</strong>
 把這段代碼轉換成一行式的箭頭函數：
 <code>function multiply(a, b) { return a * b; }</code>
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 如果一個函數生出了另一個子函數，而且子函數還記得父函數的變數...
 這就是令人敬畏的<strong>閉包 (Closures)</strong>。它是 JS 最重要的魔法，掌握它，你就掌握了私有變數的秘密。
</div>
