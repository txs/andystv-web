---
description: (Pro) 突破 JavaScript 的記憶體極限。學習 TypedArrays、ArrayBuffer 與 DataView，處理高效能二進位數據。
duration: 25:00
level: intermediate
tags:
- TypedArrays
- Memory Management
- Performance
tier: pro
title: "07-3 (付費) 效能巔峰：TypedArrays 與記憶體分佈"
youtubeId: 
---

# 07-3 (付費) 效能巔峰：TypedArrays 與記憶體分佈

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "普通的 JavaScript 陣列非常彈性，你可以同時放字串、數字、甚至物件。
 但這種彈性的代價就是**慢**。
 
 當你在處理 3D 繪圖 (WebGL)、視訊串流、或者 AI 權重數據時，
 我們需要直接與記憶體對話。
 這一節，我們要學習如何使用『定型陣列』，讓 JS 跑得跟 C 語言一樣快。"
</div>

## 1. ArrayBuffer：一塊原始記憶體

`ArrayBuffer` 代表一段固定長度的原始二進位數據緩衝區。
你不能直接操作它，必須透過「視圖 (View)」。

```javascript
const buffer = new ArrayBuffer(16); // 建立一個 16 bytes 的空間
```

## 2. Typed Arrays (定型陣列)

根據你需要的資料型態，選擇不同的視圖：
- `Int8Array`: 8 位元整數
- `Uint32Array`: 32 位元無符號整數 (0 ~ 4,294,967,295)
- `Float64Array`: 64 位元浮點數 (高精準度)

```javascript
const view = new Uint32Array(buffer);
view[0] = 42;
```

## 3. 實戰場景：讀取二進位檔案

當你使用 `fetch` 抓取一張圖片並想直接修改它的像素數據時：

```javascript
async function processImage(url) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const pixelData = new Uint8ClampedArray(buffer);
  
  // 這裡可以對 pixelData 進行直接操作，效能極高
}
```

## 4. SharedArrayBuffer 與並行處理

在 2026 年，多核心運算非常重要。
`SharedArrayBuffer` 讓多個 Web Worker 可以同時存取同一塊記憶體而無需複製資料。
（注意：為了安全考量，必須正確設定 HTTP Header 才能開啟此功能）。

<div class="interactive-lab">
 🧪 <strong>Lab 15: 記憶體計算機</strong>
 請嘗試建立一個 <code>Uint8Array</code>，並手動賦值超過 255 的數字（例如 256）。
 觀察它會發生什麼事（Overflow）。這能讓你理解數據類型的嚴謹性。
</div>

---

<div class="next-step-teaser">
 🎓 <strong>本章總結</strong>
 你已經從基礎的隊伍操作，一路晉升到手操記憶體的高手了。
 
 下一章，我們要聊聊文字的藝術：<strong>字串與正規表達式 (Strings & Regex)</strong>。
 我們要學習如何從雜亂的文字中，精準地抓出你要的機密資訊。
</div>
