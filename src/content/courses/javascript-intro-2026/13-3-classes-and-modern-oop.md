---
description: (Pro) 建立真正安全的類別。掌握 ES2026 私有欄位 (#)、靜態屬性，以及進階的 Mixins 模式來構建複雜系統。
duration: 25:00
level: intermediate
tags:
- Private Fields
- Mixins
- Advanced OOP
tier: pro
title: "13-3 (付費) 封裝之極：私有成員與 Mixins"
youtubeId: 
---

# 13-3 (付費) 封裝之極：私有成員與 Mixins

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "好的封裝，是要把對外不需要知道的秘密藏起來。
 以往 JS 開發者只能用 `_` 代表私有（但其實外面還是看得到）。
 
 在 2026 年，我們終於有了真正的**私有欄位**。
 同時，我們也會處理一個常見難題：JS 不支援多重繼承。
 如果一個類別想同時擁有『跑步』和『游泳』的能力該怎麼辦？答案就是 **Mixins**。"
</div>

## 1. 真正的私有欄位 (#)

在變數名稱前加上 `#`，它就變成真正的私有，外部存取會報錯。

```javascript
class BankAccount {
  #balance = 0; // 私有屬性

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.#balance); // ❌ 語法報錯！
```

## 2. 靜態屬性與方法 (Static)

不需要實例化就能呼叫，通常用於工具函式。

```javascript
class Utils {
  static version = "1.0.0";
  static formatDate() { ... }
}

console.log(Utils.version); // ✅ 直接叫
```

## 3. Mixins (混入) 模式

由於 JS 只能 `extends` 一個父類別，我們可以用函數回傳類別的方式來實現 Mixins。

```javascript
const swimmerMixin = (Base) => class extends Base {
  swim() { console.log("我在游泳..."); }
};

const flyerMixin = (Base) => class extends Base {
  fly() { console.log("我在飛翔..."); }
};

class Creature {}
class Duck extends flyerMixin(swimmerMixin(Creature)) {}

const duck = new Duck();
duck.swim();
duck.fly();
```

<div class="interactive-lab">
 🧪 <strong>Lab 33: 權限管家 Mixin</strong>
 建立一個 <code>withPermissions</code> 的 Mixin，
 給目標類別新增一個 <code>canEdit</code> 屬性和 <code>checkAuth()</code> 方法。
</div>

---

<div class="next-step-teaser">
 🎓 <strong>本章總結</strong>
 一路走來，你已經掌握了從基礎邏輯到高階架構的 JS 核心。
 
 下一章，我們要走出本地端，與世界連線：<strong>網路請求與通訊 (Network & Communication)</strong>。
 我們要學習 WebSockets 與長連線，讓你的網頁動起來。
</div>
