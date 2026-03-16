---
description: (Pro) 優化你的事件處理。學習事件冒泡、捕獲機制，並掌握事件委派技術以大幅提升複雜 UI 的效能。
duration: 25:00
level: intermediate
tags:
- Event Delegation
- Performance
- Event Bubbling
tier: pro
title: "11-3 (付費) 事件藝術：事件委派與效能優化"
youtubeId: 
---

# 11-3 (付費) 事件藝術：事件委派與效能優化

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "你是否遇過這種情況：動態新增了一個列表項目，結果它的點擊事件沒反應？
 或者是你有一個超長的選單，導致網頁記憶體一直往上升？
 
 這些問題的終極解法就是：**事件委派 (Event Delegation)**。
 我們不把監聽器裝在小兵身上，我們裝在他們的將軍（父元素）身上。
 這不僅解決了動態節點的問題，更讓你的程式碼乾淨得離譜。"
</div>

## 1. 事件冒泡 (Event Bubbling)

當你點擊一個按鈕，點擊事件會像泡泡一樣，從按鈕往上傳給 `div`、傳給 `body`、最後傳給 `window`。

```javascript
document.body.onclick = () => console.log("Body 被點到了");
```

## 2. 事件委派 (Event Delegation) 實戰

如果你有一個購物清單：
```javascript
const list = document.querySelector("#shopping-list");

// ❌ 錯誤做法：給每個 li 裝監聽器 (浪費記憶體)
// ✅ 專業做法：只給父元素裝一個，再用 e.target 判斷是誰

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(`你點擊了項目：${e.target.textContent}`);
    e.target.classList.toggle("completed");
  }
});
```

## 3. 2026 年的高階應用：Passive Listeners

為了讓網頁捲動更流暢，現代瀏覽器支持 `passive` 參數：
```javascript
window.addEventListener("scroll", handleScroll, { passive: true });
```
這告訴瀏覽器：「我保證這個監聽器不會呼叫 `preventDefault()`」，瀏覽器就可以放心地加速捲動。

<div class="interactive-lab">
 🧪 <strong>Lab 27: 萬人軍隊點擊</strong>
 建立一個父容器，裡面動態產生 100 個按鈕。
 使用<strong>事件委派</strong>，讓每個按鈕被點擊時，都能印出它自己的編號，
 且不准使用 100 個 <code>addEventListener</code>。
</div>

---

<div class="next-step-teaser">
 🎓 <strong>本章總結</strong>
 你已經學會了如何高效、優雅地操作網頁。
 
 下一章，我們要走出單一檔案，看看現代開發如何組織大型專案。
 歡迎來到 <strong>模組化與建置工具 (Modules & Build Tools)</strong> 的世界。
</div>
