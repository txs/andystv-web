---
description: 掌握 JavaScript 2026 運算子：算術、比較、邏輯，以及現代必備的 Nullish Coalescing (??) 與 Optional Chaining (?.)。
duration: 15:00
level: beginner
tags:
- JavaScript
- Operators
- "2026"
tier: free
title: "03-1 運算子大補帖：從基礎到現代語法"
youtubeId: 
---

# 03-1 運算子大補帖：從基礎到現代語法

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "加減乘除大家都會，但在程式裡還有很多神奇符號。
 你看過 `??` 嗎？看過 `?.` 嗎？
 這些符號不是亂碼，它們是讓你的程式碼變乾淨的魔法。
 今天這集，我們要把所有常見符號一次掃盲！"
</div>

## 1. 基礎運算子 (算術與指派)

這裡快速帶過，跟你小學學的一樣。
*   `+`, `-`, `*`, `/`
*   **取餘數 `%`**: 很有用！ `10 % 3` 得到 `1`。常用來判斷奇偶數 ( `% 2` )。
*   **指數 `**`**: `2 ** 3` 就是 2 的 3 次方 (8)。

### 指派運算子的縮寫
工程師都很懶。
*   `x = x + 1` → `x += 1`
*   `x = x + 1` (且只要加 1) → `x++` (注意：盡量少用 `++` 在複雜算式，易混淆)

## 2. 比較運算子：千萬別用 `==`

JavaScript 有兩個等於：
*   `==` (寬鬆等於)：會偷偷幫你轉型別。 `1 == "1"` 是 `true`。 **(危險！2026 禁止使用)**
*   `===` (嚴格等於)：型別也要一樣。 `1 === "1"` 是 `false`。 **(請永遠用這個)**

> 只要你的 code 出現 `==`，Biome (我們的 Linter) 就會罵你。請聽它的話。

## 3. 現代運算子：讓 Code 變優雅

這兩個是 2020 後最重要的發明：

### Optional Chaining (`?.`) - 安全存取
以前怕物件是空的，要寫一大堆 `if`：
```javascript
// 舊寫法
if (user && user.address && user.address.city) {
  console.log(user.address.city);
}
```

現在只要：
```javascript
// 新寫法
console.log(user?.address?.city);
```
如果中間斷了（`undefined`），它就直接回傳 `undefined`，不會報錯當機！

### Nullish Coalescing (`??`) - 預設值
「如果是空值，就給預設值」。
```javascript
const name = inputName ?? "Guest";
```
只有當 `inputName` 是 `null` 或 `undefined` 時，才會用 "Guest"。
(以前用 `||` 會有 bug，例如數值 `0` 會被當成假，但 `??` 不會！)

## 4. LAB 01: 運算子體操

<div class="interactive-lab">
 🧪 <strong>練習</strong>
 寫一個程式，模擬購物車總金額計算：
 1. 商品單價 100，數量 3。
 2. 會員有折扣碼嗎？(用 `??` 預設 'NO_CODE')
 3. 如果會員物件不存在，怎麼安全讀取名字？(用 `?.`)
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課</strong>
 邏輯思考是程式的核心。
 `And (&&)` 跟 `Or (||)` 其實不只是「且」跟「或」。
 它們有強大的「短路求值 (Short Circuit)」特性，高手都拿來代替 `if`。
 下一節揭曉！
</div>
