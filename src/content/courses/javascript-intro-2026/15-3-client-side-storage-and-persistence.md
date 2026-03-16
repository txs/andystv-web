---
description: (Pro) 打造強大的 PWA。結合 Service Worker 進行離線緩存，並學習資深開發者如何處理本地與伺服器的數據同步與衝突。
duration: 30:00
level: intermediate
tags:
- Service Workers
- PWA
- Data Sync
tier: pro
title: "15-3 (付費) 離線第一：數據同步與衝突處理"
youtubeId: 
---

# 15-3 (付費) 離線第一：數據同步與衝突處理

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "當你的應用程式變得專業，你遲早會遇到這個問題：
 用戶在捷運上（沒網路）改了一筆資料，回到辦公室（有網路）又改了同一筆。
 
 我們該聽誰的？這就是所謂的『同步衝突 (Sync Conflicts)』。
 這一單元，我們要學習 **Service Workers** 來攔截請求，
 以及經典的資料同步算法。這會讓你的應用程式穩定得像磐石一樣。"
</div>

## 1. Service Worker：攔截器

它就像是你的網頁與網路之間的「中介機器人」。即使分頁關掉，它也可以在背景跑。

```javascript
// sw.js
self.addEventListener("fetch", (event) => {
  // 這裡可以決定：是要去網路抓，還是從快取 (Cache) 拿
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
```

## 2. 數據衝突解決策略 (Conflict Resolution)

1.  **LWW (Last Write Wins)**：誰最後存，誰就贏（最簡單）。
2.  **Versioned Sync**：給資料加版本號，衝突時跳出視窗問用戶。
3.  **Merge**：像 Git 一樣嘗試合併屬性。

## 3. Background Sync API

當網路回來的「那一刻」，瀏覽器會自動幫你跑一段任務：

```javascript
navigator.serviceWorker.ready.then((registration) => {
  return registration.sync.register("sync-data");
});
```

<div class="interactive-lab">
 🧪 <strong>Lab 39: 離線恐龍測試</strong>
 試著把 WiFi 關掉，看看你的本地應用程式是否還能透過 <strong>Service Worker</strong> 正常顯示頁面內容。
</div>

---

<div class="next-step-teaser">
 🎓 <strong>本章總結</strong>
 控制了儲存，你就控制了應用的生命力。
 
 下一章，我們將進入專業開發者的最後一哩路：<strong>效能優化 (Performance)</strong>。
 我們要學習如何找出網頁變慢的原因，並徹底榨乾瀏覽器的性能。
</div>
