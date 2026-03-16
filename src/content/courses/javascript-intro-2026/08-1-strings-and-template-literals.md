---
description: 掌握 JavaScript 中的文字處理。學習模板字面量、標籤函數，以及 2026 年現代字串處理技巧。
duration: 15:00
level: beginner
tags:
- Strings
- Template Literals
- ES2026
tier: free
title: "08-1 文字的魔力：字串與模板字面量"
youtubeId: 
---

# 08-1 文字的魔力：字串與模板字面量

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "如果程式碼是邏輯，那文字就是與用戶溝通的橋樑。
 以前我們接字串要用一堆 `+` 號，寫得又醜又難維護。
 
 2026 年的現在，我們有『模板字面量』，它不僅讓程式碼變漂亮，
 還能讓我們寫出像魔法一樣的『標籤函數』。
 讓我們來看看如何優雅地玩弄文字！"
</div>

## 1. 模板字面量 (Template Literals)

使用 反引號 (`` ` ``) 代替單引號。

```javascript
const name = "Andy";
const items = 5;

// ✅ 嵌入變數與表達式
const message = `你好 ${name}，你購物車有 ${items} 件商品，總共 ${items * 100} 元。`;
```

### 多行字串
不用再寫 `\n` 了，直接換行即可：
```javascript
const html = `
  <div>
    <h1>Hello World</h1>
  </div>
`;
```

## 2. 標籤模板 (Tagged Templates)

這是一個進階用法，你可以自定義一個函數來處理模板字面量。

```javascript
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    return `${acc}${str}<span class="highlight">${values[i] || ""}</span>`;
  }, "");
}

const user = "Andy";
const result = highlight`歡迎我們的嘉賓：${user}！`;
// 結果會是 "歡迎我們的嘉賓：<span class="highlight">Andy</span>！"
```

## 3. 2026 常用字串方法

```javascript
const str = "Astro is awesome";

console.log(str.startsWith("Astro")); // true
console.log(str.includes("is"));      // true
console.log(str.repeat(3));           // 重複三次
console.log("  trim me  ".trim());    // 去除前後空格
```

<div class="interactive-lab">
 🧪 <strong>Lab 16: 模板挑戰</strong>
 試著利用標籤模板寫一個 <code>sanitize</code> 函數，
 將用戶傳入的文字中的 <code><</code> 替換成 <code>&lt;</code> 以防止 XSS 攻擊。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 如果你要從一段雜亂的文字中找出所有 Email 或是電話號碼，該怎麼辦？
 歡迎來到<strong>正規表達式 (Regex)</strong> 的世界。雖然它看起來像外星語，但它是文字處理的最強武器。
</div>
