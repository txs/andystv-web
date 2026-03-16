---
description: 深入解析 2026 工具鏈。學習配置 Biome 進行極速 Linting/Formatting，並理解現代專案結構標準。
duration: 25:00
level: beginner
tags:
- Tooling
- Biome
- Deep Dive
tier: pro
title: "01-3 (付費) 掌握現代工具鏈：Biome 與專案結構"
youtubeId: 
---

# 01-3 掌握現代工具鏈：Biome 與專案結構

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "歡迎來到付費深度單元！
 剛剛我們雖然會『跑』程式了，但要寫出『好維護』的程式，光靠直覺是不夠的。
 
 你有沒有看過一種程式碼：縮排亂七八糟、有些變數有分號有些沒有、變數名稱定義得很隨意？
 這種程式碼在業界被稱為『義大利麵程式碼 (Spaghetti Code)』。
 
 今天這個單元含金量很高，我要教你用 2026 年最強的工具 **Biome**，
 來幫你自動『整骨』。只要設定一次，以後不管你怎麼隨便打，存檔的瞬間，程式碼就會變得乾淨漂亮。
 這就是資深工程師效率高的秘密。"
</div>

## 1. 為什麼選擇 Biome 而不是 ESLint + Prettier？

在 2025 年以前，標準配備是 ESLint (抓蟲) + Prettier (排版)。
但這套組合有幾個痛點：
1. **慢**：專案一大，存檔要等 2 秒才變色，打斷思緒。
2. **打架**：它們兩個常常吵架，Prettier 說要雙引號，ESLint 說只能單引號。
3. **設定繁瑣**：你要裝 `eslint-config-prettier` 來勸架。

**Biome** 用 Rust 重寫了這一切，它**只有一個工具，做所有事情**，而且快 25 倍。

## 2. 實戰：初始化一個專業的 JS 專案

不要再手動建檔案了，我們要練習用 Command Line (CLI) 初始化專案。

### Step 1: 專案初始化
在終端機輸入：
```bash
bun init
```
它會問你幾個問題：
- Package name: (預設即可)
- Entry point: `index.ts`

Bun 會自動幫你產生 `package.json` 和 `README.md`。

> **知識點**：`package.json` 就是這個專案的身分證。紀錄了專案叫什麼、用了哪些別人的程式碼(dependencies)。

### Step 2: 安裝與設定 Biome
我們透過 Bun 來安裝 Biome：
```bash
bun add --dev --exact @biomejs/biome
```

接著，產生設定檔：
```bash
bunx biome init
```
你會看到根目錄多了一個 `biome.json`。

### Step 3: 解讀與修改 biome.json
打開 `biome.json`，我們來調整幾個專業設定。這是業界常見的規範：

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignoreUnknown": false,
    "ignore": []
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,    // 現代 JS 流行 2 格縮排
    "lineWidth": 100     // 讓一行可以長一點
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "style": {
        "noVar": "error" // 絕對禁止使用 var (這是我們之後課程的重點)
      }
    }
  }
}
```

<div class="interactive-lab">
 🧪 <strong>Lab 02: 感受 Biome 的威力</strong>
 1. 把你的 <code>index.ts</code> 故意寫得很醜：
    <code>var   x=1;console.log(  x )</code>
 2. 仔細看，VS Code 應該會出現紅色波浪底線警告你 <code>noVar</code> (如果你有裝 Biome extension)。
 3. 在終端機執行修正指令：
    <code>bunx biome check --write ./index.ts</code>
 4. 再次打開檔案，你會發現它自動變成了：
    <code>let x = 1;\nconsole.log(x);</code>
 5. <strong>這就是自動化！</strong> 
</div>

## 3. VS Code 深度整合：Save on Format

每次都要打指令太累了。我們要設定「存檔即修正」。

1. 在 VS Code 按 `F1` 或 `Ctrl+Shift+P`。
2. 搜尋 `Preferences: Open User Settings (JSON)`。
3. 在大括號內加入這段設定：

```json
  "[javascript]": {
    "editor.defaultFormatter": "biomejs.biome",
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome",
    "editor.formatOnSave": true
  }
```

現在，試著回去亂改你的程式碼，然後按 `Ctrl+S` (存檔)。
**Boom!** 瞬間變漂亮。這就是專業開發者的快感。

## 4. 實務解決方案：如何與團隊協作？

當你進入公司，或者參與開源專案，每個人的編輯器設定可能不同。
**最佳實務**是建立一個 `.vscode` 資料夾，裡面放一個 `extensions.json`。

**Lab 03: 推薦團隊安裝清單**
建立 `.vscode/extensions.json`：
```json
{
  "recommendations": [
    "biomejs.biome",
    "usernamehw.errorlens"
  ]
}
```
這樣任何人打開你的專案，VS Code 就會右下角彈出視窗：「推薦你安裝這些套件喔！」
這展現了你的**專業素養**，你替你的隊友考慮到了開發環境。

---

<div class="next-step-teaser">
 🎓 <strong>總結</strong>
 恭喜你！你現在擁有了一個跟 Google、Meta 工程師同等級的開發環境。
 *   <strong>Runtime</strong>: 極速的 Bun
 *   <strong>Editor</strong>: 武裝完全的 VS Code
 *   <strong>Linter</strong>: 嚴格但敏捷的 Biome
 
 地基打好了，下一章，我們要正式進入 JavaScript 的語言核心。
 我們要來聊聊為什麼 <code>var</code> 被丟進歷史垃圾桶，以及 <code>const</code> 到底是常數還是變數？
</div>
