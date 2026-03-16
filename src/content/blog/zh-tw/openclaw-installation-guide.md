---
title: "如何安裝與使用 OpenClaw：新手完整指南"
description: "如何安裝與使用 OpenClaw：新手完整指南"
pubDate: "2026-02-18T00:00:00.000Z"
tags: ["OpenClaw","安裝","AI 工具"]
draft: false
---

OpenClaw 是一款強大的 AI 工具，用於建立與管理智能體、子智能體以及各類整合。無論你是想要自動化工作流的開發者，還是正在探索 AI 的愛好者，本指南都將帶你完成安裝與基礎使用。截至 2026 年，隨著其近期整合到更大的生態系統中，OpenClaw 比以往任何時候都更容易上手。

## 前提條件
在安裝之前，請確保你擁有：
- Node.js（18 版本或更高）
- VS Code 等程式碼編輯器
- JavaScript 或 Python 的基礎知識
- 下載所需的網路連接

## 步驟 1：安裝
OpenClaw 可以透過 npm 安裝或從原始碼安裝。

### 選項 1：NPM 安裝（推薦）
1. 打開你的終端機。
2. 執行：`npm install -g openclaw`
3. 驗證：`openclaw --version`

這將全域安裝 CLI，讓你在任何地方都能執行指令。

### 選項 2：從原始碼安裝
1. 複製倉庫：`git clone https://github.com/openclaw/openclaw.git`
2. 進入目錄：`cd openclaw`
3. 安裝依賴：`npm install`
4. 構建：`npm run build`
5. 連結：`npm link`

## 步驟 2：設定你的第一個網關（Gateway）
OpenClaw 使用「網關」來管理智能體。

1. 初始化：`openclaw gateway init`
2. 配置：使用你的 API 金鑰編輯生成的配置檔案（例如，用於整合）。
3. 啟動：`openclaw gateway start`

你的網關現在正執行於 localhost:3000（預設）。

## 步驟 3：建立你的第一個智能體
智能體是 OpenClaw 的核心。

1. 建立：`openclaw agent create myagent --model gpt-4`
2. 定義任務：使用 Web 介面或 CLI 加入任務，如「生成子智能體」或「整合瀏覽器控制」。
3. 執行：`openclaw agent run myagent --task "Hello World"`

## 步驟 4：基礎使用範例
- **瀏覽器控制：** 整合 Chrome 以實現自動化：`openclaw browser open https://example.com`
- **子智能體：** 生成助手：`openclaw subagent spawn --task "analyze data"`
- **定時任務：** 安排任務：`openclaw cron add "daily backup" --schedule "0 0 * * *"`

## 新手提示
- 從文件開始：瀏覽 https://docs.openclaw.ai 取得教學。
- 加入社群：在 Discord 或 GitHub 上取得支援。
- 安全實驗：使用沙盒模式進行測試，而不影響生產環境。

OpenClaw 正在迅速演進——請保持更新以獲取增強型 AI 整合等新功能。
