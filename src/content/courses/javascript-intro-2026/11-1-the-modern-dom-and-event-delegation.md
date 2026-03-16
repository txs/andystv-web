---
description: 學習如何直接控制網頁內容。掌握現代 DOM 選擇器、屬性操作，以及動態建立元素的技術。
duration: 15:00
level: beginner
tags:
- DOM
- Selectors
- Vanilla JS
tier: free
title: "11-1 網頁的操作者：DOM 選擇器與操作"
youtubeId: 
---

# 11-1 網頁的操作者：DOM 選擇器與操作

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "不管你用什麼框架，網頁最終顯示的都是 DOM (Document Object Model)。
 以前我們要寫長長的 `document.getElementById`，現在我們有更強大的工具。
 
 這一節，我們要學會如何像上帝一樣，在瀏覽器裡無中生有，
 或是把一個難看的按鈕變成精美的導航欄。"
</div>

## 1. 現代選擇器：querySelectorAll

不要再記五種不同的選取方法了。在 2026 年，我們 99% 的時間都在用這兩個：

```javascript
// 選一個
const header = document.querySelector(".main-header");

// 選全部
const buttons = document.querySelectorAll("button.submit");
// 回傳的是一個 NodeList，可以用 forEach 遍歷
```

## 2. 修改內容與樣式

```javascript
const el = document.querySelector("#app");

el.textContent = "Hello 2026!"; // 修改純文字
el.innerHTML = "<strong>亮點</strong>"; // 修改 HTML (小心 XSS)

// 操作樣式 (不建議直接改 style，建議改 class)
el.classList.add("active");
el.classList.toggle("hidden");
```

## 3. 動態建立元素

```javascript
const div = document.createElement("div");
div.className = "card";
div.textContent = "我是新來的";

document.body.appendChild(div); // 塞到最後面
```

### 效能小技巧：Fragment
如果你要一次塞 100 個元素，不要跑 100 次 `appendChild`。
先塞進 `DocumentFragment`，再一次塞進 body。

<div class="interactive-lab">
 🧪 <strong>Lab 25: 動態列表機</strong>
 寫一個迴圈，動態產生 5 個 <code><li></code> 標籤，
 標籤內容分別是「項目 1」到「項目 5」，並將它們塞入一個現有的 <code><ul></code> 中。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 React 為什麼這麼快？它說它用了 <strong>Virtual DOM</strong>。
 虛擬跟真實到底差在哪裡？
 下一節，我們要拆解 DOM 的效能瓶頸，並理解現代框架的底層設計。
</div>
