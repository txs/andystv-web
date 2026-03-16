---
description: 把拼圖拼起來。學習如何將前面所學的組合成一個大型架構，探討狀態管理、排版規範與代碼拆分策略。
duration: 20:00
level: beginner
tags:
- Architecture
- Clean Code
- Best Practices
tier: free
title: "18-1 終章起點：現代應用的建築美學"
youtubeId: 
---

# 18-1 終章起點：現代應用的建築美學

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "恭喜大家走到這一步！
 前面的 17 章，我們學了地基（語法）、鋼筋（物件）與水電（網路）。
 現在，我們要來談談怎麼把這一切蓋成一棟漂亮的房子。
 
 好的架構不應該是複雜的，而應該是『理所當然』的。
 這一節，我們要學習如何把邏輯、資料與畫面乾淨地分開。"
</div>

## 1. 關注點分離 (Separation of Concerns)

不要在一個 `onClick` 函數裡同時寫 API 請求、資料處理與 DOM 更新。
- **Store**: 管理資料
- **Services**: 負責 API 通訊
- **Components**: 只負責顯示與互動

## 2. 狀態管理 (State Management) 的實質

不管是 Redux, Zustand 還是 Vuex，核心都是：**單一事實來源 (Single Source of Truth)**。

```javascript
// 一個簡單的 Store 模式
const state = {
  user: null,
  posts: []
};

function dispatch(action, payload) {
  // 透過這個統一出口來修改資料...
}
```

## 3. 模組化佈局 (Atomic Design 思維)

- **Atoms**: 按鈕、輸入框
- **Molecules**: 搜尋列 (由輸入框+按鈕組成)
- **Organisms**: 整個導覽欄

<div class="interactive-lab">
 🧪 <strong>Lab 46: 架構拆解圖</strong>
 拿出一張紙，試著畫出一個「購物車」應用。
 指出哪些部分是資料流 (Service)，哪些部分是 UI 元件 (Component)。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 開發完一個專案，並不代表你的學習結束了。
 下一節，我們要跳出代碼，看看 2026 年 JavaScript 生態系的風向在往哪吹。
 那些新工具、新玩具正在等著你。
</div>
