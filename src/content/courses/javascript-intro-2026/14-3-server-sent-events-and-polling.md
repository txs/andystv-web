---
description: (Pro) 選擇正確的通訊架構。深入比較 WebSocket、SSE (Server-Sent Events) 與過往的 Polling 技術，並實作一個資料流處理器。
duration: 25:00
level: intermediate
tags:
- SSE
- Server-Sent Events
- Polling
tier: pro
title: "14-3 (付費) 推播架構：SSE 與高效能輪詢"
youtubeId: 
---

# 14-3 (付費) 推播架構：SSE 與高效能輪詢

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "很多新手一想到即時通訊就想衝去用 WebSocket。
 但如果你只是要做一個『股價看板』或是『ChatGPT 的文字打字效果』，
 WebSocket 其實是有點過重的。
 
 這一章我们要學的是 **Server-Sent Events (SSE)**。
 它基於標準的 HTTP 協議，具有自動重連機制，且對伺服器的壓力極小。
 同時，我也會教你如何寫出一個不會把伺服器操爆的『智慧型輪詢』代碼。"
</div>

## 1. Server-Sent Events (SSE)

SSE 是單向的（Server -> Client），非常適合資料流。

```javascript
const eventSource = new EventSource("/api/stock-updates");

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(`最新股價：${data.price}`);
};

eventSource.onerror = () => {
  console.log("連線斷開，SSE 會自動嘗試重連...");
};
```

## 2. 智慧型長輪詢 (Long Polling)

如果你的環境不支援 WebSocket 或 SSE，你可以使用長輪詢，但要有策略。

```javascript
async function smartPoll() {
  try {
    const data = await fetch("/updates");
    // 處理資料...
    setTimeout(smartPoll, 1000); // 成功後等 1 秒再跑
  } catch (e) {
    setTimeout(smartPoll, 5000); // 失敗了就等 5 秒，這叫 Expontential Backoff (指數退避)
  }
}
```

## 3. 三大技術大評比

| 特性 | Polling | WebSockets | SSE |
| :--- | :--- | :--- | :--- |
| **通訊方向** | 單向 (Client 點名) | 雙向 (隨時說話) | 單向 (Server 推播) |
| **協議** | HTTP | WS (獨立協議) | HTTP (Stream) |
| **自動重連** | 需手寫 | 需手寫 | **內建支援** |
| **適合場景** | 低頻率更新 | 遊戲、多人編輯 | 股票、AI 回覆、通知 |

<div class="interactive-lab">
 🧪 <strong>Lab 36: SSE 模擬器</strong>
 在本地專案中，試著建立一個簡單的 <code>EventSource</code> 連結，
 觀察 Network 面板，看看它與普通 <code>fetch</code> 的請求類型有何不同。
</div>

---

<div class="next-step-teaser">
 🎓 <strong>本章總結</strong>
 你現在掌握了所有與世界連線的手段。
 
 下一章，我們要把資料留下來：<strong>瀏覽器存儲 (Client-Side Storage)</strong>。
 我們要學習如何製作出即使斷網、重新開機，資料依然存在的專業 Web 應用。
</div>
