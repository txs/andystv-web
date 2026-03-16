---
description: 學會處理意外。使用 try/catch 抓取錯誤，並理解 2026 年現代 Web 開發中的錯誤處理最佳實務。
duration: 18:00
level: beginner
tags:
- Error Handling
- Debugging
- Try/Catch
tier: free
title: "04-2 優雅的崩潰：Error Handling 與 Try/Catch"
youtubeId: 
---

# 04-2 優雅的崩潰：Error Handling 與 Try/Catch

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "在程式的世界裡，只有兩種工程師：一種是程式會出錯的，另一種是說謊的。
 
 好的程式碼不是『不會出錯』，而是『出錯了也能優雅地處理』。
 這一單元我們要學習如何預測風險，並在錯誤發生時，給用戶一個溫馨的提示，而不是一個冰冷的瀏覽器報錯。"
</div>

## 1. 基礎防護：Try...Catch

當你執行一段可能會「爆炸」的程式碼時（例如讀取一個不存在的變數屬性，或是發送網路請求），請把他包在 `try` 塊中。

```javascript
try {
  // 這裡放可能會有危險的程式碼
  const data = JSON.parse("{ invalid json }");
} catch (error) {
  // 當 error 發生時，執行這裡
  console.warn("唉呀，JSON 資料格式不對喔！", error.message);
} finally {
  // 不論成敗，最後都會執行（常用於關閉讀取動畫）
  console.log("處理完畢。");
}
```

## 2. 自行拋出錯誤：Throw

有時候，語法沒錯，但「內容」錯了。例如：用戶沒填寫 Email。

```javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("你還太年輕，不能看這部分內容！");
  }
  return "歡迎光臨！";
}

try {
  checkAge(10);
} catch (e) {
  alert(e.message); 
}
```

## 3. 2026 實務建議：別過度 Catch

在現代開發（如 React 或 Astro）中，我們傾向於在**最外層**處理 UI 錯誤。
*   **不要語法過敏**：如果你不知道抓到錯誤後要做什麼，就別抓它。
*   **給出具體的訊息**：`throw new Error("系統壞了")` 是最爛的做法。請告訴用戶「資料庫暫時連不上」。

<div class="interactive-lab">
 🧪 <strong>Lab 05: 穩定性測試</strong>
 試著寫一個函數，隨機丟出錯誤（使用 <code>Math.random()</code>），
 並嘗試用 <code>try...catch</code> 捕捉它，成功時印出 "Safe"，失敗時印出 "Boom!"。
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：進階流控</strong>
 普通的 if/else 已經滿足不了你了嗎？
 在付費單元，我們要教你 2026 年最強的 **Pattern Matching (模式匹配)** 概念，
 以及如何利用 `Switch(true)` 寫出美得像詩一樣的邏輯樹。
</div>
