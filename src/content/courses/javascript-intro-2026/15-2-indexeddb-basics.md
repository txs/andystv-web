---
description: 學習瀏覽器內建的 NoSQL 資料庫。掌握 IndexedDB 的異步操作、Object Stores，以及處理大量結構化數據。
duration: 20:00
level: beginner
tags:
- IndexedDB
- Storage
- NoSQL
tier: free
title: "15-2 瀏覽器的硬碟：IndexedDB 入門"
youtubeId: 
---

# 15-2 瀏覽器的硬碟：IndexedDB 入門

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "當 LocalStorage 那區區 5MB 滿足不了你時，
 或者是你想要對資料進行搜尋、排序時，你就需要 IndexedDB。
 
 它是一個功能完整的 **NoSQL 資料庫**，直接住在你的瀏覽器裡。
 雖然它的原生 API 寫起來有點『復古』（基於事件而不是 Promise），
 但它是現代離線應用 (PWA) 的核心守護者。"
</div>

## 1. 開啟資料庫

```javascript
const request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = (e) => {
  const db = e.target.result;
  // 建立一個叫 users 的「資料表」
  db.createObjectStore("users", { keyPath: "id" });
};

request.onsuccess = (e) => {
  console.log("資料庫連接成功");
};
```

## 2. 存取資料 (Transaction)

所有的操作都必須包在一個「事務 (Transaction)」中。

```javascript
const db = request.result;
const transaction = db.transaction(["users"], "readwrite");
const store = transaction.objectStore("users");

// 新增
store.add({ id: 1, name: "Andy", role: "Instructor" });
```

## 3. 2026 年的開發建議：使用 Wrapper

實務上，我們很少直接寫原生的 IndexedDB。我們會用 `idb` 或是 `Dexie.js` 這類把 API 變回 Promise 的套件。

```javascript
// 如果使用了 Dexie.js
const db = new Dexie("MyDatabase");
db.version(1).stores({ users: "id, name" });
await db.users.add({ id: 1, name: "Andy" });
```

<div class="interactive-lab">
 🧪 <strong>Lab 38: 應用程式面板勘查</strong>
 打開 F12 開發者工具 -> **Application** 分頁 -> **IndexedDB**。
 觀察你剛剛建立的資料庫是否存在，並嘗試手動刪除它。
</div>

---

<div class="next-step-teaser">
 💎 <strong>Pro 版預告：離線與同步</strong>
 在飛機上沒網路時，應用程式怎麼運作？
 在付費單元，我們要學習 <strong>Service Workers</strong> 與 <strong>數據衝突解決策略</strong>。
 讓你的網頁變身成真正的桌面應用！
</div>
