---
description: 學習 JavaScript 現代物件導向基礎。掌握 Class 語法、構造函數 (Constructor)，以及如何實例化對象。
duration: 15:00
level: beginner
tags:
- OOP
- Classes
- Constructors
tier: free
title: "13-1 結構化思維：類別 (Class) 基礎"
youtubeId: 
---

# 13-1 結構化思維：類別 (Class) 基礎

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "前面我們學過物件字面量 `{}`，但如果你要一次建立 100 個『用戶』呢？
 難道要手打 100 個括號嗎？
 
 這就是 `Class` 出場的時候了。
 它就像是一個印章（模具），定義了一種類型的東西『長什麼樣』、『能做什麼』。
 雖然 JS 底層依然是原型，但有了 Class 語法，我們組織代碼的方式變得更直觀且更具規模性。"
</div>

## 1. 定義類別與實例化 (Instantiation)

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // 方法 (Method)
  greet() {
    console.log(`Hello, 我是 ${this.name}`);
  }
}

// 建立實例 (Instance)
const andy = new User("Andy", "andy@example.com");
andy.greet();
```

## 2. 關於 Constructor (構造函數)

- 每個類別只能有一個 `constructor`。
- 當你執行 `new User()` 的瞬間，這個函數會被自動執行。
- `this` 指向的是新產生的那個物件。

## 3. Getter 與 Setter

讓你可以在「讀取」或「寫入」屬性時，加入一些邏輯（例如格式化或驗證）。

```javascript
class Player {
  constructor(score) {
    this._score = score;
  }

  get score() {
    return `${this._score} 分`;
  }

  set score(value) {
    if (value < 0) return;
    this._score = value;
  }
}
```

<div class="interactive-lab">
 🧪 <strong>Lab 31: 汽車製造廠</strong>
 建立一個 <code>Car</code> 類別，
 包含 <code>brand</code> 和 <code>speed</code> 屬性，以及一個 <code>drive()</code> 方法。
 試著建立兩台不同的車並讓它們跑起來。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 如果所有的汽車都有某些共通點，但「電動車」又有獨特的功能？
 下一節，我們要學習 <strong>繼承 (Inheritance)</strong>。
 我們會看到子類別如何接手父類別的超能力。
</div>
