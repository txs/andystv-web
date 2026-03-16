---
description: 建立動態實時應用。學習 WebSocket 協議、建立長連線，以及如何實作雙向通訊機制（聊天室範例）。
duration: 20:00
level: beginner
tags:
- WebSockets
- Real-time
- Communication
tier: free
title: "14-2 實時通訊：WebSockets 入門"
youtubeId: 
---

# 14-2 實時通訊：WebSockets 入門

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "HTTP 就像是快遞，你下單（請求），他送貨（響應），送完就走了。
 但如果你在跟朋友聊天，快遞就不管用了。你需要的是一支『電話通話』。
 
 這就是 WebSockets。
 一旦連線建立，這條管道就是雙向暢通的。
 伺服器有新訊息，會直接『推』給你，不用你一直去問。這就是實時 (Real-time) 應用的魅力。"
</div>

## 1. WebSocket 基本語法

不使用 `fetch`，我們使用 `WebSocket` 類別。

```javascript
const socket = new WebSocket("ws://example.com/chat");

// 連線成功時觸發
socket.onopen = (event) => {
  console.log("連線成功！");
  socket.send("哈囉伺服器！");
};

// 收到訊息時觸發
socket.onmessage = (event) => {
  console.log("收到訊息：", event.data);
};
```

## 2. 生命週期管理

WebSockets 使用的是「全雙工 (Full-duplex)」通訊，記得不用的時候要關掉以節省頻寬。

```javascript
socket.onclose = () => console.log("連線已關閉");
socket.onerror = (err) => console.error("發生錯誤", err);
```

## 3. 實戰場景：簡易聊天室邏輯

```javascript
const msgInput = document.querySelector("#msg");
const sendBtn = document.querySelector("#send");

sendBtn.onclick = () => {
  const text = msgInput.value;
  socket.send(JSON.stringify({ type: "CHAT", content: text }));
  msgInput.value = "";
};
```

<div class="interactive-lab">
 🧪 <strong>Lab 35: 狀態監聽器</strong>
 試著連上一個測試用的 WebSocket Server (如 <code>wss://echo.websocket.org</code>)，
 發送你的名字，並觀察它是否原封不動地「回傳」給你。
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：高效率推播</strong>
 所有的實時系統都要用 WebSocket 嗎？不一定。
 在付費單元，我們要學習 <strong>Server-Sent Events (SSE)</strong>，
 這是在處理單向資料流（如股票、GPT 回應）時更省電、更穩定的選擇。
</div>
