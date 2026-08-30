---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F08%2F30%2Fother%2Fadmin%2F111287%2F%25e7%25bb%2588%25e4%25ba%258e%25ef%25bc%258cclaude-code%25e6%2589%2593%25e9%2580%259a%25e4%25ba%2586%25e6%25a1%258c%25e9%259d%25a2%25e7%25ab%25af%25e4%25b8%258e%25e7%25bb%2588%25e7%25ab%25af%25ef%25bc%2581%2F"
date: "2026-08-31"
category: News
title: "Anthropic 官宣 Claude Code 桌面端打通终端会话（/resume）"
authors: ["aiera.com.cn"]
summary: "Anthropic 官方开发者账号宣布：Claude Code 桌面应用新增 /resume 命令，可直接恢复此前在 CLI 终端中开启的会话，完整对话记录与上下文随会话迁移到桌面端继续。官方公告明确了主体、时间与功能行为，官方会话管理文档（2026-08-29 更新）同步佐证 /resume 会话选择器与桌面端会话历史机制。媒体报道补充了双向打通（/desktop 与 /resume）、检查点 /rewind 兼容等细节。功能具体版本号与桌面发起会话反向搬回终端的能力，当前材料未确认。"
keywords: ["Anthropic", "开发者工具", "产品运营"]
sources:
  - {"name":"aiera.com.cn","url":"https://aiera.com.cn/2026/08/30/other/admin/111287/%e7%bb%88%e4%ba%8e%ef%bc%8cclaude-code%e6%89%93%e9%80%9a%e4%ba%86%e6%a1%8c%e9%9d%a2%e7%ab%af%e4%b8%8e%e7%bb%88%e7%ab%af%ef%bc%81/"}
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 5
groupScore: 69
scoreScale: "news-v3"
---

# Anthropic 官宣 Claude Code 桌面端打通终端会话（/resume）

## 事件概述

Anthropic 宣布，其智能编程工具 Claude Code 的桌面应用新增 `/resume` 能力：用户可以在桌面端直接恢复此前在命令行终端（CLI）中开启的工作会话。Anthropic 官方开发者账号 @ClaudeDevs 于 2026 年 8 月 28 日（UTC 16:00）发文称："You can now resume your terminal sessions in the Claude Code desktop app. Type /resume to pick any session you started from the CLI. The session continues in the app with the full conversation and context intact." 即：在桌面端输入 `/resume`，可从列表中选取任意一个从 CLI 启动的会话，会话将带着完整对话记录和上下文在桌面应用中继续。新智元于 2026 年 8 月 30 日报道了此次官宣。

## 已确认事实与证据

- **主体与官宣渠道**：发布方为 Anthropic 的 Claude Code 团队，官宣渠道为官方 X 账号 @ClaudeDevs（2026-08-28 16:00 UTC 推文，附官方演示视频）。这是官方一手公告，主体、时间和事件均可核验。
- **核心功能**：据 Anthropic 官方公告，在 Claude Code 桌面应用中输入 `/resume` 可挑选任意从 CLI 启动的会话，会话在桌面应用中继续，"完整对话与上下文原样保留"。
- **官方文档佐证**：Claude Code 官方文档"Manage sessions"页（code.claude.com/docs/en/sessions，页面标注 2026-08-29 更新）系统描述了 `--continue`、`--resume`、`--from-pr` 与 `/resume` 会话选择器等会话恢复机制，并说明"a desktop-app session resumes in the app, which keeps its own session history"（桌面应用会话在应用内恢复，应用维护自己的会话历史）。
- **媒体补充细节（归属新智元报道，非官方规格）**：据新智元报道，官方演示视频中 Claude Code 工程师 Lydia Hallie 的会话统计为 1240 次、162.4M tokens；终端内原有的 `/desktop` 命令可将当前会话交给桌面端，本次新增的 `/resume` 实现反方向的"捡回"，两个方向打通；恢复后的会话检查点机制照常可用，仍可用 `/rewind` 回退；工程师 Anthony Morris 表示团队曾考虑把终端会话直接嵌入桌面侧栏，因界面未达预期而先用 `/resume` 方案上线。上述细节来自媒体报道与官方演示视频转述，未在官方文字公告中逐项确认。
- **背景**：据新智元报道，2026 年 4 月已有用户在 GitHub 上提出"终端可恢复会话、桌面端无选择器"的需求；此前桌面、Web、VS Code 各自维护会话历史，互不可见。

## 影响与后续观察

- 对重度 Claude Code 用户而言，该功能消除了跨端重建对话上下文的重复成本：在终端中开始的会话可以直接在桌面端继续，符合 Anthropic 8 月围绕"会话不丢失"的一系列更新方向（据新智元报道，同月桌面端还加入额度恢复后自动续跑、修复会话标题丢失与 30 天会话清理等问题）。
- **当前材料未确认**的事项包括：该功能对应的具体版本号——官方更新日志截至 2026-08-28 的条目中未见该功能的独立版本条目；从桌面端从零发起的会话能否反向搬回终端——新智元报道称目前尚不支持，官方公告未提及；各平台（macOS/Windows/Linux）的可用范围与推送节奏，原文与官方公告均未报告。
- 新智元报道中提到的"更理想方案（终端会话嵌入桌面侧栏）只是往后排了"属于工程师个人表述，是否进入正式路线图有待官方后续披露。

## 来源链接

- Anthropic 官方公告（@ClaudeDevs，X）：https://x.com/ClaudeDevs/status/2093368017304371503
- Claude Code 官方文档 · Manage sessions：https://code.claude.com/docs/en/sessions
- Claude Code 官方文档 · Desktop application：https://code.claude.com/docs/en/desktop
- Claude Code 官方更新日志：https://code.claude.com/docs/en/changelog
- 新智元报道（原始来源）：https://aiera.com.cn/2026/08/30/other/admin/111287/%e7%bb%88%e4%ba%8e%ef%bc%8cclaude-code%e6%89%93%e9%80%9a%e4%ba%86%e6%a1%8c%e9%9d%a2%e7%ab%af%e4%b8%8e%e7%bb%88%e7%ab%af%ef%bc%81/
