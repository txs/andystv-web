---
description: 揭開 JavaScript 最強大的魔法：閉包。學習如何利用閉包建立私有數據，以及柯里化 (Currying) 在現代開發中的應用。
duration: 22:00
level: beginner
tags:
- Closures
- Functional Programming
- Currying
tier: free
title: "05-2 記憶魔法：閉包 (Closures) 與柯里化"
youtubeId: 
---

# 05-2 記憶魔法：閉包 (Closures) 與柯里化

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "很多面試官最喜歡問：『請解釋一下閉包』。
 如果你回答：『就是一個函數包著另一個函數』，那你就出局了。
 
 閉包的本質是**記憶力**。
 即使外層函數已經執行完了，裡層函數依然能『抓住』當時的環境不放。
 這就是我們實踐『封裝』和『模組化』最直覺的方式。"
</div>

## 1. 什麼是閉包？

看這段代碼：
```javascript
function createCounter() {
  let count = 0; // 這個變數被「關」在裡面了
  
  return () => {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```
雖然 `createCounter` 已經執行完畢，但 `counter` 函數依然記得 `count`。這就是閉包。

## 2. 實務應用：私有變數

在 2026 年以前，JS 沒有真正的 `private` 關鍵字（現在有了 `#`，但閉包依然很常用）。

```javascript
function secretVault(secret) {
  return {
    getSecret: () => secret,
    setSecret: (newSecret) => { secret = newSecret; }
  };
}

const vault = secretVault("我的密碼");
console.log(vault.secret); // ❌ undefined (存取不到)
console.log(vault.getSecret()); // ✅ "我的密碼"
```

## 3. 柯里化 (Currying)

把一個接收多個參數的函數，變成一系列接收「單一」參數的函數。

```javascript
// 傳統
const add = (a, b) => a + b;

// 柯里化
const curriedAdd = (a) => (b) => a + b;

const addFive = curriedAdd(5);
console.log(addFive(10)); // 15
```

### 為什麼要這樣？
因為你可以「預設」某些參數。這在處理通用的 Logger 或 API 路徑時非常強大。

<div class="interactive-lab">
 🧪 <strong>Lab 08: 專屬打招呼機</strong>
 請寫一個柯里化函數 <code>greet(style)</code>，
 讓我可以產出 <code>greetFormal("Andy")</code> -> "Hello, Andy" 
 以及 <code>greetCasual("Andy")</code> -> "Hi, Andy"。
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：函數式編程</strong>
 閉包和柯里化只是開頭。
 在付費單元，我們要進入 **純函數 (Pure Functions)** 的聖殿，並教你 2026 年最頂尖的 **Pipe & Compose** 技巧。
 讓你的代碼像工廠流水線一樣整潔。
</div>
