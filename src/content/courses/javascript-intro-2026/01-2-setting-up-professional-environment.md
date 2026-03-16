---
description: 手把手教學：安裝 VS Code、設定開發生產力 Extensions，並安裝 Bun 環境運行你的第一行程式。
duration: 20:00
level: beginner
tags:
- Setup
- VS Code
- Bun
tier: free
title: "01-2 打造專業級開發環境：VS Code 與 Bun"
youtubeId: 
---

# 01-2 打造專業級開發環境：VS Code 與 Bun

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "工欲善其事，必先利其器。
 很多新手寫程式覺得挫折，往往不是因為邏輯不好，而是環境沒設好。
 程式碼沒變色？抓不到錯？存檔不會自動排版？
 這些看似小事，累積起來會浪費你一半的時間。
 
 今天這堂課，請跟著我一步一步做。我們要安裝目前地表最強的編輯器 VS Code，
 並且把那些高手都在用的『外掛』一次裝好。
 最後，我們要召喚剛剛提到的速度惡魔 —— Bun。"
</div>

## 1. 編輯器首選：Visual Studio Code (VS Code)

別懷疑，2026 年依然是 VS Code 的天下。

### 必裝 Extensions (擴充套件) 2026 版
請打開 VS Code 左側的方塊圖示 (Extensions)，搜尋並安裝以下神器：

1.  **Biome** (取代 Prettier/ESLint):
    *   *為什麼裝它？* 它是 2026 的新標準，格式化速度比 Prettier 快 25 倍。
    *   *功能*：存檔瞬間幫你排版、補上分號、修正縮排。
2.  **Error Lens**:
    *   *為什麼裝它？* 它會把錯誤訊息**直接顯示在程式碼行尾**，不用滑鼠移上去才看得到。
    *   *體驗*：寫錯當下立刻被打臉，學習效率加倍。
3.  **Pretty TypeScript Errors**:
    *   *為什麼裝它？* 讓那些原本只有火星人看得懂的報錯訊息，變成人類可讀的英文。
4.  **Auto Rename Tag**:
    *   *功能*：改 HTML 的 `<div>` 開頭，結尾的 `</div>` 會自動跟著變。

## 2. 安裝運行環境：Bun

我們略過原本繁瑣的 Node.js 安裝，直接用 PowerShell (Windows) 或 Terminal (Mac) 安裝 Bun。

### Windows 使用者
打開 PowerShell (以管理員身分)，輸入：
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Mac/Linux 使用者
打開 Terminal，輸入：
```bash
curl -fsSL https://bun.sh/install | bash
```

安裝完後，輸入 `bun --version`。如果有看到版本號 (例如 1.2.x)，恭喜你，你的電腦已經裝上了渦輪引擎！

## 3. LAB 01: Hello World 三部曲

我們來做個實驗，用三種不同方式說 Hello。

### 實作 A: 瀏覽器 Console (最原始)
1. 打開 Chrome。
2. 按 `F12` 開啟開發者工具 -> 切換到 **Console** 分頁。
3. 輸入 `alert("Hello Browser!")` 按 Enter。
4. **結果**：網頁會彈出視窗。這是 JS 最一開始的樣子。

### 實作 B: 使用 Bun (現代後端)
1. 在桌面建一個資料夾 `js-2026-demo`。
2. 用 VS Code 打開它。
3. 建立檔案 `index.js`。
4. 輸入：
   ```javascript
   console.log("Hello Bun! I am super fast ⚡️");
   ```
5. 打開 VS Code 下方的 Terminal (`Ctrl + ~`)。
6. 輸入 `bun run index.js`。
7. **結果**：終端機瞬間印出文字。

### 實作 C: 體驗 TypeScript (Bun 的超能力)
*新手不用怕，這一點都不難！*
1. 建立檔案 `app.ts` (注意是 .ts)。
2. 輸入：
   ```typescript
   const greeting: string = "Hello TypeScript via Bun!";
   console.log(greeting);
   ```
3. 在 Terminal 輸入 `bun run app.ts`。
4. **結果**：竟然直接跑起來了！
   *註：如果是早期的 Node.js，這一步你會直接報錯，需要安裝一堆編譯工具。*

<div class="interactive-lab">
 🛡️ <strong>實務解決方案</strong>
 遇到 <code>bun 透過不被信任的開發者執行</code> 錯誤嗎？
 💡 解法：在 PowerShell 輸入 <code>Set-ExecutionPolicy RemoteSigned</code>。這是在 Windows 開發很常見的權限問題。
</div>

---

<div class="next-step-teaser">
 💎 <strong>付費版延伸預告</strong>
 環境架好了，但這樣就夠專業了嗎？
 下一節（付費單元），我們要帶你設定 <strong>Biome 的全自動規則</strong>。
 想知道怎麼讓團隊 10 個人的程式碼看起來像 1 個人寫的嗎？
 還有 VS Code 的隱藏設定 `settings.json` 大解密，這是資深工程師的吃飯傢伙！
</div>
