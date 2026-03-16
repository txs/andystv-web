---
description: 找出消耗資源的元兇。學習 JavaScript 垃圾回收機制、辨識常見記憶體洩漏場景，並學習使用 Memory Profiler。
duration: 18:00
level: beginner
tags:
- Memory Management
- Debugging
- Profiling
tier: free
title: "16-2 資源追蹤：記憶體洩漏與垃圾回收"
youtubeId: 
---

# 16-2 資源追蹤：記憶體洩漏與垃圾回收

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "JavaScript 有一個很勤勞的清潔工，叫 **Garbage Collector (垃圾回收器)**。
 但這個清潔工有時候會偷懶，或是有些東西它『不敢丟』。
 
 這些沒被清理的垃圾堆積起來，就會變成記憶體洩漏。
 你的網頁跑了 1 小時後突然卡死，通常就是這個原因。
 這一節，我們要學習如何抓出這些隱形的資源殺手。"
</div>

## 1. 常見的洩漏場景

1.  **被遺忘的計時器**：`setInterval` 沒清掉。
2.  **閉包過度捕獲**：大變數被關在一個沒用的函數裡。
3.  **沒拆掉的監聽器**：`window.addEventListener` 在元件消失後還留著。

## 2. 實戰：除錯技巧

```javascript
function heavyTask() {
  const data = new Array(1000000).fill("🔥");
  window.mySecretData = data; // ❌ 慘！掛在全域物件上，永遠清不掉
}
```

## 3. 使用 Memory Profiler (快照)

1.  F12 -> **Memory** -> **Heap Snapshot**。
2.  點擊圓圈做一次快照。
3.  操作你的網頁後，再做一次快照。
4.  比較兩次快照的 Size，如果一直往上衝，你就中招了。

<div class="interactive-lab">
 🧪 <strong>Lab 41: 計時器實驗</strong>
 寫一個函數會啟動 <code>setInterval</code>，
 但故意**不寫** <code>clearInterval</code>。
 重複執行這個函數 10 次，觀察 Console 的輸出頻率與記憶體佔用。
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：計算的極限</strong>
 當 JS 本身的運算力遇到瓶頸時，該怎麼辦？
 在付費單元，我們要學習 <strong>WebAssembly (WASM)</strong>，
 讓 C++ 或 Rust 的程式碼直接在你的網頁裡面飛奔！
</div>
