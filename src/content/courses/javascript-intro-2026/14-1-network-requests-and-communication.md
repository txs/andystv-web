---
description: 學習如何與伺服器溝通。掌握 RESTful API 原則、使用 Fetch 發送 GET/POST 請求，以及處理響應數據。
duration: 15:00
level: beginner
tags:
- Fetch API
- REST
- HTTP
tier: free
title: "14-1 網路連結：Fetch API 與 REST 原則"
youtubeId: 
---

# 14-1 網路連結：Fetch API 與 REST 原則

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "如果你的網頁不能連網，那它只是一個高級的計算機。
 在 2026 年，幾乎所有的應用都要與伺服器交換資料。
 
 這一節我們不只是要學怎麼發出請求，
 還要學習工程師之間的共同語言：**REST**。
 搞懂了 GET, POST, PUT, DELETE，你就拿到了通往後端世界的地圖。"
</div>

## 1. 什麼是 RESTful API？

REST 是一種設計規範，建議我們用「名詞」代表資源，用「HTTP 動詞」代表動作。

- **GET** `/users`: 獲取用戶列表
- **POST** `/users`: 新增一個用戶
- **PUT** `/users/1`: 更新 ID 為 1 的用戶
- **DELETE** `/users/1`: 刪除 ID 為 1 的用戶

## 2. Fetch API 實戰

### 發送 POST 請求 (新增資料)
```javascript
async function createUser(userData) {
  const response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  });
  
  const result = await response.json();
  return result;
}
```

## 3. 處理 HTTP 狀態碼 (Status Codes)

`fetch` 只要有連到伺服器就不會噴錯誤，你需要手動檢查 `ok`：
- **200-299**: 成功
- **404**: 找不到網頁 (Client Error)
- **500**: 伺服器壞了 (Server Error)

```javascript
if (!response.ok) {
  throw new Error(`連線失敗：狀態碼 ${response.status}`);
}
```

<div class="interactive-lab">
 🧪 <strong>Lab 34: 部落格獲取器</strong>
 請使用 <code>fetch</code> 請求一個公開的 API (例如 JSONPlaceholder)，
 抓取 10 篇文章的標題並印在 Console。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 如果你正在做一個聊天室，難道要每秒鐘發一次 `fetch` 嗎？太慢了吧！
 下一節，我們要學習 <strong>WebSockets</strong>。
 讓你的伺服器可以主動找你說話。
</div>
