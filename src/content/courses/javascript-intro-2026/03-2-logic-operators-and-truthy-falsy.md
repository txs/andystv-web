---
description: 學會像電腦一樣思考：Boolean 邏輯、Truthy/Falsy 值，以及如何利用「短路求值」寫出更簡潔的條件判斷。
duration: 18:00
level: beginner
tags:
- JavaScript
- Logic
tier: free
title: "03-2 邏輯運算與真假值 (Truthy & Falsy)"
youtubeId: 
---

# 03-2 邏輯運算與真假值 (Truthy & Falsy)

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "在 JavaScript 的世界裡，不是只有 `true` 才是真。
 一個字串、一個數字，甚至一個空陣列，都有它的「真假屬性」。
 這叫做 Truthy 和 Falsy。
 搞懂這個，你才能看懂很多開源專案裡面奇怪的寫法。"
</div>

## 1. 真真假假：Truthy 與 Falsy

所有值轉成 Boolean 後，如果是 `false`，就是 **Falsy**。
背起來，**Falsy 只有這 6 個**（其他全是 Truthy）：
1.  `false`
2.  `0`
3.  `""` (空字串)
4.  `null`
5.  `undefined`
6.  `NaN` (Not a Number)

> **陷阱題**：
> *   `[]` (空陣列) 是 Truthy!
> *   `{}` (空物件) 是 Truthy!
> *   `"0"` (字串0) 是 Truthy!

## 2. 邏輯運算子的隱藏功能：短路 (Short Circuit)

`&&` 和 `||` 不只回傳 true/false，它們會回傳**運算元的值**。

### `||` (OR) - 尋找第一個真值
```javascript
// 常用在設預設值 (雖然現在推薦用 ??，但很多舊 code 還是這樣寫)
const name = input || "Guest"; 
// 如果 input 是真 (有值)，就拿 input。
// 如果 input 是假 (沒填)，就拿 "Guest"。
```

### `&&` (AND) - 尋找第一個假值 / 全真則拿最後一個
這常用來「條件執行」：
```javascript
// 如果 isLogined 是真，才執行後面的函式
isLogined && showWelcomeMessage();
```
這比寫 `if (isLogined) { ... }` 短很多！這在 React 開發中超級常見。

## 3. `!` (Not) 與 `!!` (Double Not)

*   `!true` → `false`
*   `!!` 用來**強制轉型成 Boolean**。
    *   `!!"Andy"` → `true`
    *   `!!0` → `false`

## 4. LAB 02: 邏輯炸彈拆解

<div class="interactive-lab">
 🧪 <strong>預測結果</strong>
 請在腦中執行，然後用 Bun 驗證：
 
 ```javascript
 console.log(null || "User");      // ?
 console.log("Andy" && "Cool");    // ? (提示：AND 想要找假，找不到就給最後一個)
 console.log(0 && "Hidden");       // ?
 console.log(!!{});                // ?
 ```
</div>

---

<div class="next-step-teaser">
 💎 <strong>付費單元預告</strong>
 學會了運算子，我們要進入「位元運算 (Bitwise)」與「邏輯賦值 (&&=)」。
 雖然 Web 開發少用，但如果你想寫高效能遊戲或權限系統，這是必備的。
 還有，我們要深入探討 `??` 和 `||` 的真正效能差異與使用場景。
</div>
