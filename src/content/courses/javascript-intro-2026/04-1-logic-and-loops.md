---
description: 掌握現代 JavaScript 的邏輯控制。從傳統的 if/else 到 2026 年推薦的聲明式迴圈處理。
duration: 15:00
level: beginner
tags:
- Logic
- Loops
- Control Flow
tier: free
title: "04-1 邏輯控制：if, else 與現代迴圈"
youtubeId: 
---

# 04-1 邏輯控制：if, else 與現代迴圈

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "歡迎來到第四章！如果說變數是程式的『記憶』，那麼邏輯控制就是程式的『大腦』。
 今天我們要教電腦如何做決定。
 
 很多人問：『老師，if/else 我在別的語言學過了，JS 有什麼特別的嗎？』
 其實，在 2026 年的開發中，我們越來越少用傳統的 `for(let i=0; ...)` 了。
 我會帶你看看現代工程師是如何優雅地處理流程的。"
</div>

## 1. 條件判斷：不僅僅是 if

在 JS 中，除了傳統的 `if`，我們更愛用**三元運算子 (Ternary Operator)** 進行簡潔的賦值。

```javascript
// ❌ 傳統寫法
let status;
if (isLogin) {
  status = "Welcome";
} else {
  status = "Please Login";
}

// ✅ 現代建議：三元運算子
const userStatus = isLogin ? "Welcome" : "Please Login";
```

### 短路求值 (Short-circuiting)
這是 2026 開發者的必備技巧：
```javascript
// 如果 exists 為真，執行後面的函數
exists && renderComponent();

// Nullish Coalescing (空值合併)
// 只有在是 null 或 undefined 時才使用預設值
const score = 0;
const finalScore = score ?? 100; // 結果是 0，因為 0 不是 null
```

## 2. 迴圈：從手動到自動

### 為什麼我們不愛 `for (let i = 0; ...)` 了？
那種寫法太容易出錯 (Off-by-one error)，而且**命令式 (Imperative)** 的語法讓程式碼變得很吵。

### 現代推薦：`for...of`
如果你只需要遍歷一個陣列的每一個元素，這是最乾淨的寫法：
```javascript
const fruits = ["Apple", "Banana", "Cherry"];

for (const fruit of fruits) {
  console.log(`我正在吃 ${fruit}`);
}
```

### 如果需要 Index 呢？
我們可以使用陣列的 `.entries()` 方法：
```javascript
for (const [index, fruit] of fruits.entries()) {
  console.log(`第 ${index + 1} 個水果是 ${fruit}`);
}
```

<div class="interactive-lab">
 🧪 <strong>Lab 04: 迴圈挑戰</strong>
 試著把一個陣列 <code>[10, 20, 30]</code> 裡面的數字通通加起來，但如果遇到超過 25 的數字就跳過。
 
 💡 <strong>提示</strong>：使用 <code>continue</code> 關鍵字。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 程式跑順了固然開心，但如果報錯了怎麼辦？
 下一節，我們要學習如何當一個優雅的工作者：<strong>錯誤處理 (Error Handling)</strong>。
 我們會教你如何抓蟲，而不是讓你的網頁直接崩潰變白屏。
</div>
