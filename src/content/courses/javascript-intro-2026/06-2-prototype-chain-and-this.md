---
description: 深入探討 JavaScript 的物件繼承機制。理解原型、原型鏈，以及讓無數開發者困惑的 this 關鍵字。
duration: 20:00
level: beginner
tags:
- Prototypes
- this keyword
- Inheritance
tier: free
title: "06-2 繼承之謎：原型與 this 指向"
youtubeId: 
---

# 06-2 繼承之謎：原型與 this 指向

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "JavaScript 雖然現在有 `class` 關鍵字，但骨子裡它還是那個『基於原型』的語言。
 這跟 Java 或 C++ 的類別繼承完全不同。
 
 還有那個 `this`，它就像一個會變臉的演員，
 在不同的舞台（呼叫環境）下，它代表的人都不一樣。
 這一節，我們要把這塊最硬的骨頭啃下來。"
</div>

## 1. 原型 (Prototype) 是什麼？

每個 JS 物件都有一個隱藏屬性 `[[Prototype]]`。
當你在物件上找一個不存在的屬性時，JS 會去「它的原型」那邊找。這就是**原型鏈**。

```javascript
const animal = { eats: true };
const rabbit = { jumps: true };

// 設定 animal 為 rabbit 的原型 (現代做法建議用 Object.create 或 Class)
Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.eats); // true (從原型繼承而來)
```

## 2. 理解 `this` 的黃金準則

`this` 代表誰，取決於**函數是如何被呼叫的**，而不是在哪裡定義的。

1.  **物件方法呼叫**：`this` 就是該物件。
2.  **純函數呼叫**：`this` 是全域物件 (window) 或 undefined (嚴格模式)。
3.  **箭頭函數**：沒有自己的 `this`，繼承外層的作用域。

```javascript
const person = {
  name: "Andy",
  sayHi() {
    console.log(this.name);
  }
};

person.sayHi(); // "Andy"

const talk = person.sayHi;
talk(); // ❌ undefined (因為 this 變成了全域)
```

## 3. 修改 `this`：Call, Apply, Bind

如果你想強迫函數聽你的話，你可以手動指定 `this`：
- `call()`: 立即執行，傳入 `this` 和參數。
- `bind()`: 不執行，回傳一個「綁定好 `this`」的新函數。

<div class="interactive-lab">
 🧪 <strong>Lab 11: this 糾纏</strong>
 寫一個計時器，在 1 秒後印出 <code>this.name</code>。
 試著分別用 <strong>箭頭函數</strong> 與 <strong>.bind(this)</strong> 兩種方式來讓它正確印出。
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：物件監控</strong>
 想不想在屬性被讀取或修改時，自動做點什麼？
 在付費單元，我們要學習現代框架 (如 Vue 3) 核心的魔法：<strong>Proxy 與 Reflect</strong>。
</div>
