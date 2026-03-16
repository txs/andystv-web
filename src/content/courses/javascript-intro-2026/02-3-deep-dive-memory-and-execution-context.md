---
description: 資深工程師必修：深入記憶體管理 (Stack vs Heap)、執行環境 (Execution Context)、Hosting 機制與 TDZ (Temporal Dead Zone)。
duration: 30:00
level: intermediate
tags:
- JavaScript
- Deep Dive
- Architecture
tier: pro
title: "02-3 (付費) 深度解析：記憶體模型與執行環境"
youtubeId: 
---

# 02-3 深度解析：記憶體模型與執行環境

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "恭喜你來到付費深度單元！這就是你會跟自學新手拉開差距的地方。
 很多初階工程師寫 code 是「憑感覺」，程式會跑但不知道為什麼。
 資深工程師則是「看透矩陣」，看到程式碼就能想像記憶體怎麼流動。
 
 今天這堂課偏難，全是理論，但非常重要。如果你想進一線大廠，這些是必考題。"
</div>

## 1. 記憶體管理：Stack vs Heap

JavaScript 引擎（如 V8）在執行你的程式時，會把資料存在兩個地方：

### Stack (堆疊)
*   **特性**：存取極快，空間較小。
*   **存什麼**：原始型別 (`Number`, `Boolean`, `String`...)。
*   **運作**：`let a = 10;`，10 直接存在 Stack 上。

### Heap (堆積)
*   **特性**：空間很大，但存取稍慢。
*   **存什麼**：物件型別 (`Object`, `Array`, `Function`)。
*   **運作**：`const user = { name: "Andy" };`
    *   `{ name: "Andy" }` 這個物件實體存在 **Heap**。
    *   變數 `user` 存在 **Stack**，裡面存的是「記憶體位址 (Reference)」，指向 Heap 的那個物件。

> **面試題**：為什麼 `const arr = []; arr.push(1);` 不會報錯？
> **答案**：因為 `arr` 在 Stack 裡的「記憶體位址」沒有變！我們只是改了 Heap 裡面的東西。

## 2. Hoisting (提升) 與 TDZ

你可能聽過「變數提升」，就是變數還沒宣告就能用？
但在 `let` 和 `const` 的世界，這產生了一個新概念：**TDZ (暫時性死區)**。

```javascript
console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

*   **Hoisting**：JS 引擎確實有把 `x` 提升到最上面，但它把它放入了「死區」。
*   **TDZ**：從 Scope 開始到 `let x` 這一行之間的區域，就是 TDZ。在這裡碰 `x` 會直接爆炸。
*   **目的**：這是一個好設計！強迫你「先宣告，再使用」，讓程式碼邏輯更清晰。

## 3. 執行環境 (Execution Context)

每當函式執行，就會創造一個「執行環境」。
它包含：
1.  **Variable Environment**: 這裡面有什麼變數？
2.  **Scope Chain**: 我找不到變數時，該往外層哪裡找？
3.  **this Binding**: `this` 是誰？（這在後面章節會詳談）

這就像一個洋蔥，一層包一層。內層看得到外層，外層看不到內層（閉包的基礎）。

## 4. LAB 03: 記憶體視覺化實驗

我們來模擬 Stack 和 Heap 的行為。

```javascript
// 原始型別 (Pass by Value)
let a = 10;
let b = a; // 複製一份 10 給 b
b = 20;
console.log(a); // 10 (a 沒變，因為他們是獨立的)

// 物件型別 (Pass by Reference)
const p1 = { name: "Andy" };
const p2 = p1; // 複製「遙控器 (Reference)」給 p2
p2.name = "Jack";

console.log(p1.name); // Jack! 😱
// 因為 p1 和 p2 指向 Heap 裡的同一個物件！
```

<div class="interactive-lab">
 💡 <strong>實戰技巧：如何真的複製物件？</strong>
 這就是為什麼我們常聽到「Deep Copy」。
 在 2026 年，最快的方法是：
 <code>const p2 = structuredClone(p1);</code>
 試試看把上面的程式改成用 <code>structuredClone</code>，p1 就不會被改到了！
</div>

---

<div class="assignment-box">
 📝 <strong>本章作業 (Assignment)</strong>
 1. 畫出 LAB 03 程式碼執行時的 Stack 與 Heap 示意圖（手繪拍照即可）。
 2. 試著解釋：為什麼 <code>const</code> 宣告的陣列可以被修改內容，但不能被重新賦值？
 (將作業上傳到 Discord 專屬頻道，助教將為您批改)
</div>
