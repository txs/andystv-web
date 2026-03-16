---
description: 進階運算子應用：邏輯賦值運算子 (Logical Assignment)、位元運算子 (Bitwise) 基礎與權限設計應用。
duration: 25:00
level: intermediate
tags:
- JavaScript
- Advanced Operators
tier: pro
title: "03-3 (付費) 進階運算：邏輯賦值與位元操作"
youtubeId: 
---

# 03-3 進階運算：邏輯賦值與位元操作

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "這是付費章節，我們要講點硬核的。
 你有沒有寫過這種 code：`if (!user.name) user.name = 'Guest';`？
 這種寫法太囉唆了。
 ES2021 推出了『邏輯賦值運算子』，讓你一行搞定。
 另外，我們要來看看駭客電影裡那種 010101 的「位元運算」，它在實務上到底能幹嘛？"
</div>

## 1. 邏輯賦值運算子 (Logical Assignment Operators)

結合了「邏輯判斷」與「賦值」。

*   `||=` (Or Assign): 如果左邊是 Falsy，就賦值。
*   `&&=` (And Assign): 如果左邊是 Truthy，就賦值。
*   `??=` (Nullish Assign): 如果左邊是 Null/Undefined，就賦值。

**實戰重構：**
```javascript
// 以前
if (!config.theme) {
  config.theme = "dark";
}

// 現在 (優雅)
config.theme ||= "dark";
// 或是更嚴謹 (只針對未定義)
config.theme ??= "dark";
```

## 2. 位元運算子 (Bitwise Operators)

JS 雖然是高階語言，但還是能操作二進位。
雖然一般網頁很少用，但在「權限系統 (Flags)」非常強大。

*   `&` (AND)
*   `|` (OR)
*   `^` (XOR)
*   `~` (NOT)
*   `<<`, `>>` (Shift)

### 實戰應用：權限管理 (Permission Flags)
這是一個非常經典的設計模式，Linux 權限也是這樣做的。

```javascript
const READ = 1;    // 0001
const WRITE = 2;   // 0010
const EXECUTE = 4; // 0100

// 設定權限：同時擁有讀跟寫
let userPerm = READ | WRITE; // 0011 (3)

// 檢查權限：有沒有寫的權限？
const canWrite = (userPerm & WRITE) !== 0; 
console.log(canWrite); // true

// 移除權限：拿掉寫的權限
userPerm = userPerm & ~WRITE; // 變成 0001
```
**優點**：只用一個數字就能存一大堆開關狀態，極度節省空間與資料庫欄位。

## 3. 運算子優先級 (Operator Precedence)

這也是新手常掛掉的地方。
`a || b && c` 到底是先 `||` 還是先 `&&`？

**答案是：`&&` 優先於 `||`**。（就像乘法優先於加法）
所以 `true || false && false` 會是 `true`。
(因為先算 `false && false` → `false`，再算 `true || false` → `true`)

> **老師建議**：不要背表，**直接加括號 `()`**。
> `(a || b) && c`，這樣寫清楚多了，人類好讀最重要。

---

<div class="assignment-box">
 📝 <strong>本章作業 (Assignment)</strong>
 1. 請重構一段充滿 `if` 的舊程式碼，改用 `?.` 和 `??=` 來簡化。
 2. 實作一個簡單的「角色狀態系統」，用位元運算子定義：`POISONED (1)`, `PARALYZED (2)`, `SILENCED (4)`。
 寫出函式 `addStatus(current, newStatus)` 和 `hasStatus(current, checkStatus)`。
 (這是遊戲開發的基本功喔！)
</div>
