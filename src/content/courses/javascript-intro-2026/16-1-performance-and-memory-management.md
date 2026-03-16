---
description: 學習如何衡量網頁速度。理解 Core Web Vitals (LCP, FID, CLS) 指標，並學會使用 Chrome DevTools 進行診斷。
duration: 15:00
level: beginner
tags:
- Performance
- Web Vitals
- Optimization
tier: free
title: "16-1 效能診斷：Core Web Vitals 與數據指標"
youtubeId: 
---

# 16-1 效能診斷：Core Web Vitals 與數據指標

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "『我覺得我的網頁很快』—— 這種感覺通常是不準的。
 在專業開發中，我們用數據說話。
 
 Google 提出了 **Core Web Vitals** 三大指標，這不只影響用戶體驗，還直接影響你的 SEO 排名。
 這一節，我們要學習如何看懂這些指標，並學會使用瀏覽器內建的『聽診器』來檢查網頁健康狀況。"
</div>

## 1. 三大核心指標

1.  **LCP (Largest Contentful Paint)**：網頁主體內容要多久才秀出來？（理想：2.5s 內）
2.  **FID (First Input Delay)**：用戶點按鈕後，多久才有反應？（理想：100ms 內）
3.  **CLS (Cumulative Layout Shift)**：圖片載入時，排版會不會跳來跳去？（理想：< 0.1）

## 2. 使用 Lighthouse 進行體檢

1.  F12 -> **Lighthouse**。
2.  選擇 **Mobile** 模式點擊 **Analyze page load**。
3.  分數越紅，代表你的網頁體質越虛弱。

## 3. 圖片優化的黃金法則

大部分網頁變慢，都是因為圖片太大。
- **懶加載 (Lazy Loading)**：`<img loading="lazy">`。
- **現代格式**：使用 WebP 或 Avif 取代 PNG/JPG。

<div class="interactive-lab">
 🧪 <strong>Lab 40: 佈局跳動實驗</strong>
 建立一個網頁，放一張沒寫高度 <code>height</code> 的大圖。
 看看圖片載入前後，下方的文字是否被「往下推」了？這就是糟糕的 CLS。
</div>

---

<div class="next-step-teaser">
 🚀 <strong>下一節課預告</strong>
 網頁明明沒什麼東西，為什麼記憶體佔用越來越高？
 下一節，我們將討論開發者的噩夢：<strong>記憶體洩漏 (Memory Leaks)</strong>。
</div>
