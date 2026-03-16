---
description: 保護你的伺服器請求。理解跨站請求偽造 (CSRF) 的攻擊手段，並學習如何使用 SameSite Cookie 與防禦 Header。
duration: 18:00
level: beginner
tags:
- Security
- CSRF
- HTTP Headers
tier: free
title: "17-2 請求真偽：CSRF 攻防實戰"
youtubeId: 
---

# 17-2 請求真偽：CSRF 攻防實戰

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "想像一下：你剛登上網銀，還沒登出。
 這時你不小心點開了一個黑客的網頁，結果你的錢就被轉走了。
 你可能覺得奇怪：『他又不知道我的密碼，怎麼轉的？』
 
 這是因為瀏覽器會自動帶上你的 Cookie 去發請求。
 這就是 **CSRF**。今天，我們要學會如何在伺服器與客戶端之間，
 建立起一道正確的驗證機制，讓這種攻擊無效化。"
</div>

## 1. 什麼是 CSRF？

CSRF (Cross-Site Request Forgery) 跨站請求偽造。其核心是「利用用戶已經登入的身分（Cookie），偽造用戶發出的請求」。

## 2. 防禦機制 A：SameSite Cookies

這是 2026 年最簡單也最有效的防禦方式。
設定 Cookie 時加上 `SameSite=Lax` 或 `Strict`，這會禁止跨域請求帶上該 Cookie。

```javascript
// 在伺服器端設定
Set-Cookie: sessionId=abc; SameSite=Lax; Secure
```

## 3. 防禦機制 B：CSRF Token

在發送敏感請求 (POST/PUT/DELETE) 時，除了 Cookie，還要手動在 Header 帶上一個隨機的 Token。黑客在他的網站裡拿不到這個 Token，所以請求會失敗。

```javascript
fetch("/api/transfer", {
  method: "POST",
  headers: {
    "X-CSRF-Token": "rAnd0m-t0kEn-vAluE"
  },
  body: JSON.stringify({ amount: 1000 })
});
```

<div class="interactive-lab">
 🧪 <strong>Lab 44: SameSite 勘查</strong>
 打開你的 DevTools -> **Application** -> **Cookies**。
 看看你目前登入的網站（例如 GitHub 或 Google）的 Cookie 中，
 <code>SameSite</code> 這一欄位是設定成什麼？
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：加密與認證</strong>
 如果要處理密碼，你可以直接存明文嗎？絕對不行！
 在付費單元，我們要學習 <strong>Web Crypto API</strong> 進行雜湊運算，
 並且深入探討現代認證的主流：<strong>JWT 與 Better Auth</strong>。
</div>
