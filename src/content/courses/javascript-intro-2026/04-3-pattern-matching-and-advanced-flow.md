---
description: (Pro) 邁向資深開發者。探索模式匹配、複雜狀態機處理，以及如何避免過深的回圈與巢狀。
duration: 25:00
level: intermediate
tags:
- Advanced Logic
- Pattern Matching
- Functional Style
tier: pro
title: "04-3 (付費) 進階流控：模式匹配與狀態管理"
youtubeId: 
---

# 04-3 (付費) 進階流控：模式匹配與狀態管理

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "歡迎來到高手單元。
 
 你有沒有看過一種程式碼，`if` 裡面包 `if`，總共包了 5 層？業界稱之為『毀滅金字塔 (Pyramid of Doom)』。
 資深工程師的程式碼往往平整得像一張紙。
 他們到底是怎麼把複雜的邏輯打平的？這一單元，我們要教你幾種『降維打擊』的流控技巧。"
</div>

## 1. 打平你的邏輯：Early Exit (衛句)

這是讓程式碼變清晰的最簡單工具。

```javascript
// ❌ 巢狀寫法
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        return "Access Granted";
      }
    }
  }
}

// ✅ 衛句 (Gard Clause)
function processUser(user) {
  if (!user) return;
  if (!user.isActive) return;
  if (!user.hasPermission) return;
  
  return "Access Granted";
}
```

## 2. Pattern Matching (模式匹配) 模擬

雖然 JS 官方的 Pattern Matching 提案還在路上，但在 2026 年，我們常用 **Object Mapping** 來取代繁瑣的 `switch`。

```javascript
const userActions = {
  ADMIN: (u) => grantAllAccess(u),
  GUEST: (u) => limitAccess(u),
  BANNED: (u) => redirectToLogin(u),
  DEFAULT: () => console.log("Unknown role")
};

const handleUser = (user) => {
  const action = userActions[user.role] ?? userActions.DEFAULT;
  return action(user);
};
```

### 優點：
1.  **易擴充**：加一個新的角色只需要在物件加一行，不需要改 `if/else`。
2.  **O(1) 效能**：直接查表，比 `if/else` 一個個判斷快得多。

## 3. 分支美學：Switch(true)

這是一個冷門但極強的技巧，適合處理多種範圍判斷。

```javascript
const score = 85;

switch (true) {
  case (score >= 90):
    console.log("優秀");
    break;
  case (score >= 60):
    console.log("及格");
    break;
  default:
    console.log("不及格");
}
```

<div class="interactive-lab">
 🧪 <strong>Lab 06: 邏輯重構</strong>
 請嘗試把你專案中某個複雜的 <code>if-else if-else</code> 結構，
 使用 <strong>Object Mapping</strong> 的方式重寫。感受一下維護性的差異。
</div>

---

<div class="next-step-teaser">
 🎓 <strong>本章總結</strong>
 恭喜你完成第四章！你現在不僅會命令電腦做事，還知道如何寫出結構漂亮的邏輯。
 
 下一章，我們將進入 JavaScript 的心臟：<strong>函數 (Functions)</strong>。
 我們會討論為什麼 <code>() => {}</code> 徹底改變了我們寫 JS 的習慣。
</div>
