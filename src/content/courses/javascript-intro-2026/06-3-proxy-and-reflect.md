---
description: (Pro) 掌握現代框架的核心：攔截物件行為。學習 Proxy 與 Reflect 進行數據響應式開發與高階封裝。
duration: 25:00
level: intermediate
tags:
- Proxy
- Reflect
- Reactive Programming
tier: pro
title: "06-3 (付費) 物件攔截：Proxy 與 Reflect"
youtubeId: 
---

# 06-3 (付費) 物件攔截：Proxy 與 Reflect

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "你是否好奇，為什麼在 Vue 或部分狀態管理工具中，
 當你改了一個變數，畫面就會自動更新？
 
 這背後的功臣就是 `Proxy`。
 它就像在物件外面設了一個『警衛亭』，任何人想進去讀資料、改資料，
 都要先經過警衛的檢查。這給了我們無窮的想像空間。"
</div>

## 1. Proxy (代理人)

`Proxy` 可以讓我們攔截物件的各種操作（讀取 `get`、賦值 `set`、刪除 `deleteProperty` 等）。

```javascript
const target = { price: 100 };

const observer = new Proxy(target, {
  set(obj, prop, value) {
    if (prop === "price" && value < 0) {
      throw new Error("價格不能是負數！");
    }
    console.log(`屬性 ${prop} 已更新為 ${value}`);
    obj[prop] = value;
    return true;
  }
});

observer.price = 200; // ✅ 更新成功
observer.price = -50; // ❌ 報錯
```

## 2. Reflect (反射)

`Reflect` 是一個內建對象，它提供了攔截 JavaScript 操作的方法。
它通常與 `Proxy` 搭配使用，用來執行「原本該有的行為」。

```javascript
const handler = {
  get(target, prop, receiver) {
    console.log(`正在讀取: ${prop}`);
    return Reflect.get(target, prop, receiver); // 確保 this 指向正確
  }
};
```

## 3. 實戰場景：自動化驗證與記錄 (Validation)

在 2026 年，我們常利用 Proxy 來建立自動驗證的 Model。

```javascript
function createValidator(data, schema) {
  return new Proxy(data, {
    set(target, prop, value) {
      const validator = schema[prop];
      if (validator && !validator(value)) {
        console.error(`${prop} 驗證失敗！`);
        return false;
      }
      return Reflect.set(target, prop, value);
    }
  });
}
```

<div class="interactive-lab">
 🧪 <strong>Lab 12: 響應式數據初步</strong>
 請實做一個簡單的 <code>reactive</code> 函數，
 當物件屬性被修改時，自動印出 <code>"UI 正在重新渲染..."</code>。
</div>

---

<div class="next-step-teaser">
 🎓 <strong>本章總結</strong>
 恭喜！你已經掌握了 JS 最強大的動態特性。
 下一章，我們要進入資料處理的大宗：<strong>陣列 (Arrays)</strong>。
 我們會討論如何寫出像詩一樣優雅的 Array 方法。
</div>
