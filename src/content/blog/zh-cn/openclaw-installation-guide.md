---
title: "如何安装和使用 OpenClaw：专为新手打造的完整指南"
description: "如何安装和使用 OpenClaw：专为新手打造的完整指南"
pubDate: "2026-02-18T00:00:00.000Z"
tags: ["OpenClaw","安装","AI 工具"]
draft: false
---

OpenClaw 是一款用于构建和管理智能智能体、子智能体以及各类集成的强大 AI 工具。无论你是希望自动化工作流程的开发者，还是正在探索 AI 的爱好者，本指南都将带你了解安装和基础用法的全过程。截至 2026 年，随着其近期集成到更大的生态系统中，OpenClaw 比以往任何时候都更加触手可及。

## 前提条件
在安装之前，请确保你已具备：
- Node.js（版本 18 或更高）
- VS Code 等代码编辑器
- JavaScript 或 Python 的基础知识
- 用于下载的互联网连接

## 步骤 1：安装
OpenClaw 可以通过 npm 安装或从源码安装。

### 选项 1：NPM 安装（推荐）
1. 打开终端。
2. 运行：`npm install -g openclaw`
3. 验证：`openclaw --version`

这将全局安装 CLI，允许你在任何地方运行指令。

### 选项 2：从源码安装
1. 克隆仓库：`git clone https://github.com/openclaw/openclaw.git`
2. 进入目录：`cd openclaw`
3. 安装依赖：`npm install`
4. 构建：`npm run build`
5. 链接：`npm link`

## 步骤 2：设置你的第一个网关
OpenClaw 使用“网关”（gateway）来管理智能体。

1. 初始化：`openclaw gateway init`
2. 配置：使用你的 API 密钥编辑生成的配置文件（例如，用于各类集成）。
3. 启动：`openclaw gateway start`

你的网关现在正运行在 localhost:3000（默认）。

## 步骤 3：创建你的第一个智能体
智能体是 OpenClaw 的核心。

1. 创建：`openclaw agent create myagent --model gpt-4`
2. 定义任务：使用 Web 界面或 CLI 添加任务，如“生成子智能体”或“集成浏览器控制”。
3. 运行：`openclaw agent run myagent --task "Hello World"`

## 步骤 4：基础使用示例
- **浏览器控制：** 集成 Chrome 以实现自动化：`openclaw browser open https://example.com`
- **子智能体：** 生成辅助工具：`openclaw subagent spawn --task "analyze data"`
- **定时任务：** 安排任务：`openclaw cron add "daily backup" --schedule "0 0 * * *"`

## 新手提示
- 从文档开始：访问 https://docs.openclaw.ai 获取教程。
- 加入社区：在 Discord 或 GitHub 上获取支持。
- 安全实验：使用沙盒模式进行测试，而不会影响生产环境。

OpenClaw 正在迅速演进——请保持关注，了解增强型 AI 集成等新功能。
