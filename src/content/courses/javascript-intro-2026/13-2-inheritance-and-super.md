---
description: 學習物件導向的核心：繼承。掌握 extends 關鍵字、super 調用，以及如何重寫 (Override) 父類別的方法。
duration: 18:00
level: beginner
tags:
- Inheritance
- super keyword
- OOP
tier: free
title: "13-2 能力繼承：Extends 與 Super"
youtubeId: 
---

# 13-2 能力繼承：Extends 與 Super

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "在現實世界中，兒子會繼承爸爸的基因。
 在程式世界也一樣。我們不需要重複寫一樣的代碼。
 
 我們可以建一個基礎的 `Animal` 類別，再延伸出 `Dog` 和 `Cat`。
 這一單元我們要學習如何透過 `extends` 來傳承能力，
 以及那個神祕的 `super()` 到底是代表什麼。"
</div>

## 1. 使用 Extends 進行繼承

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} 正在發出聲音...`);
  }
}

class Dog extends Animal {
  // 繼承了 Animal 的所有東西
}

const bingo = new Dog("Bingo");
bingo.speak(); // "Bingo 正在發出聲音..."
```

## 2. super 關鍵字

如果你在子類別想要有自己的 `constructor`，你**必須**先執行 `super()` 來呼叫父類別的初始化。

```javascript
class Cat extends Animal {
  constructor(name, lives) {
    super(name); // 呼叫父類別的 constructor
    this.lives = lives;
  }
}
```

## 3. 方法重寫 (Override)

子類別可以定義跟父類別一樣名稱的方法，來「覆蓋」掉它的行為。

```javascript
class Lion extends Animal {
  speak() {
    console.log(`${this.name} 正吼叫著：吼！！！！`);
  }
}
```

<div class="interactive-lab">
 🧪 <strong>Lab 32: 形狀繼承</strong>
 建立一個 <code>Shape</code> 類別。
 再建立一個 <code>Circle</code> 類別繼承它，並新增 <code>radius</code> 屬性。
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：私有化與混入</strong>
 類別裡面所有東西都是公開的嗎？
 在付費單元，我們要學習 2026 年必備的 <strong># Private 屬性</strong>，
 以及如何使用 <strong>Mixins</strong> 來解決單一繼承的局限性。
</div>
