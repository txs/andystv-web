---
description: 讓資料持久化。學習如何使用 LocalStorage、SessionStorage 儲存用戶偏好，以及 Cookies 在安全性上的應用。
duration: 15:00
level: beginner
tags:
- LocalStorage
- Cookies
- Browser Storage
tier: free
title: "15-1 資料的記憶：LocalStorage 與 Cookies"
youtubeId: 
---

# 15-1 資料的記憶：LocalStorage 與 Cookies

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "用戶好不容易設好了『深色模式 (Dark Mode)』，重刷網頁就沒了，他一定會生氣。
 網頁是會健忘的。
 
 這一節，我們要教網頁如何『儲存記憶』。
 我會帶你看看最常用的 `LocalStorage`（存偏好）
 以及最神祕的 `Cookies`（存門票/Token）。
 掌握了這些，你的網頁就不再是一次性的消耗品了。"
</div>

## 1. LocalStorage：超長記憶

資料會一直留著，直到你手動刪除。

```javascript
// 存入
localStorage.setItem("theme", "dark");

// 讀取
const theme = localStorage.getItem("theme");

// 刪除
localStorage.removeItem("theme");

// ⚠️ 注意：只能存字串。存物件要先 JSON.stringify()
const userObj = { name: "Andy" };
localStorage.setItem("user", JSON.stringify(userObj));
```

## 2. SessionStorage：短暫記憶

關閉分頁或視窗後，資料就會消失。語法跟 LocalStorage 一模一樣。

## 3. Cookies：網路的門票

雖然也能存資料，但 Cookies 主要是用來跟伺服器溝通（身分驗證）。

- **HttpOnly**: 讓 JS 讀不到 Cookie (防止 XSS)。
- **SameSite**: 防止 CSRF 攻擊。

```javascript
// 在 JS 中讀寫 (如果沒設 HttpOnly)
document.cookie = "username=Andy; max-age=3600; path=/";
```

## 4. 儲存空間大對決

| 特性 | LocalStorage | Cookies |
| :--- | :--- | :--- |
| **容量** | 5MB (很大) | 4KB (非常小) |
| **過期** | 永久 | 手動設定 |
| **伺服器讀取** | 讀不到 | 每次請求都會自動帶過去 |

<div class="interactive-lab">
 🧪 <strong>Lab 37: 自動儲存輸入框</strong>
 建立一個 Text Input。
 讓用戶輸入文字時，自動同步存到 <code>localStorage</code>。
 重新整理網頁時，輸入框應主動填入上次存好的內容。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 如果你要存成千上萬筆資料，或是要存離線的地圖數據，LocalStorage 就不夠用了。
 下一節，我們要學習瀏覽器裡的專業資料庫：<strong>IndexedDB</strong>。
</div>
