---
description: (Pro) 邁向國際化產品。學習使用 Intl API 處理多國語言貨幣與日期，並探索 2026 年正規表達式的進階特性。
duration: 25:00
level: intermediate
tags:
- i18n
- Intl API
- Advanced Regex
tier: pro
title: "08-3 (付費) 跨越國界：Intl 國際化與進階匹配"
youtubeId: 
---

# 08-3 (付費) 跨越國界：Intl 國際化與進階匹配

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "當你的網站開始有來自全球的用戶時，你會發現『文字』變得非常複雜。
 台灣人習慣 `NT$ 1,000`，但歐洲人可能習慣 `1.000,00 €`。
 
 以前我們都要裝大型套件 (如 Moment.js)，現在瀏覽器內建的 `Intl` 已經強大到不可思議。
 同時，我也會教你 2026 年 Regex 那些『看後斷言』等魔鬼細節。準備好變強了嗎？"
</div>

## 1. Intl API：多國語言的守護者

不要再手動寫格式化函數了！

### 貨幣格式化
```javascript
const amount = 1234567.89;

const twFormat = new Intl.NumberFormat('zh-TW', { style: 'currency', currency: 'TWD' });
console.log(twFormat.format(amount)); // "NT$1,234,568"

const deFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
console.log(deFormat.format(amount)); // "1.234.567,89 €"
```

### 日期相對時間
如果你想寫「3 分鐘前」、「兩天前」：
```javascript
const relative = new Intl.RelativeTimeFormat('zh-TW', { numeric: 'auto' });
console.log(relative.format(-1, 'day')); // "昨天"
console.log(relative.format(2, 'hour')); // "2 小時後"
```

## 2. 進階 Regex：斷言 (Assertions)

這能讓你根據「前面」或「後面」有沒有特定內容來做判斷。

- **Lookahead (?=...)**：後面必須跟著...
- **Lookbehind (?<=...)**：前面必須跟著...

```javascript
// 只有在數字後面有 "元" 的時候才匹配數字
const priceRegex = /\d+(?=元)/;
"售價 100元".match(priceRegex); // "100"
"數量 5個".match(priceRegex); // null
```

## 3. Unicode 屬性匹配 (\p{...})

在 2026 年，我們經常用來處理 Emoji 或各國特殊字符：
```javascript
const emojiRegex = /\p{Emoji}/u; // 需要 u 修飾符
console.log(emojiRegex.test("🚀")); // true
```

<div class="interactive-lab">
 🧪 <strong>Lab 18: 匯率顯示器</strong>
 請建立一個函數，輸入數字後，根據用戶傳入的區域 (Locale)，
 自動顯示當地格式的**相對時間**（例如輸入 <code>-5, 'minute'</code> 回傳 <code>"5 分鐘前"</code>）。
</div>

---

<div class="next-step-teaser">
 🎓 <strong>本章總結</strong>
 文字是專案的靈魂，你現在掌握了從基礎模板到高階國際化的所有技能。
 
 下一章，我們要探索 JavaScript 最神祕的兩個內建物件：<strong>選取器與產生器 (Iterators & Generators)</strong>。
 我們要學習如何控制「時間」與「流量」。
</div>
