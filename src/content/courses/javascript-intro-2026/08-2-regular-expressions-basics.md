---
description: 學習如何解析文字的模式。掌握正規表達式的基礎語法、Capture Groups，並學會在實戰中驗證表單。
duration: 20:00
level: beginner
tags:
- Regex
- Validation
- Text Processing
tier: free
title: "08-2 文字捕手：正規表達式基礎"
youtubeId: 
---

# 08-2 文字捕手：正規表達式基礎

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "正規表達式 (Regex) 大概是所有新手最想逃避的部分。
 那些 `/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/` 之類的東西，看起來真的跟咒語沒兩樣。
 
 但相信我，只要掌握了基礎的『單字』和『語法』，
 Regex 將成為你一生受用的技能。
 今天我們不求一次背完，我們先學會如何用它來解決最常見的問題：驗證與搜尋。"
</div>

## 1. 建立正規表達式

```javascript
const regex1 = /hello/i; // 字面量 (最常用), i 代表忽略大小寫
const regex2 = new RegExp("hello", "i"); // 建構式
```

## 2. 常用「單字」 (Metacharacters)

- `\d`: 匹配數字 [0-9]
- `\w`: 匹配單字文字 (字母、數字、下底線)
- `\s`: 匹配空格、Tab
- `.`: 匹配任一字元 (除了換行)
- `^` / `$`: 匹配字串開頭 / 字串結尾

## 3. 數量 (Quantifiers)

- `*`: 零個以上
- `+`: 一個以上
- `?`: 零個或一個
- `{3}`: 正好三個

## 4. 實戰：簡單的 Email 驗證

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailRegex.test("test@example.com")); // true
console.log(emailRegex.test("invalid-email"));     // false
```

### 捕捉群組 (Capture Groups)
使用 `()` 可以把你要的部分「抓」出來。
```javascript
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
const match = "2026-02-18".match(dateRegex);
console.log(match[1]); // "2026" (年份)
```

<div class="interactive-lab">
 🧪 <strong>Lab 17: 手機號碼捕獲</strong>
 請寫一個 Regex 匹配台灣的手機格式 <code>0911-222-333</code> 或是 <code>0911222333</code>。
 
 💡 <strong>提示</strong>：使用 <code>-?</code> 來代表選擇性的連字號。
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：國際化與進階匹配</strong>
 字串處理在跨國企業會遇到什麼挑戰？
 在付費單元，我們要學習 <strong>Intl 物件</strong> 處理貨幣與日期，以及 2026 年新的 <strong>Unicode 屬性匹配</strong>。
</div>
