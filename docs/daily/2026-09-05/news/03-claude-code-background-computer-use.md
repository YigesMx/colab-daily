---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F09%2F04%2Fother%2Fadmin%2F111997%2Fclaude%25e5%2590%258e%25e5%258f%25b0%25e6%258e%25a5%25e7%25ae%25a1%25e7%2594%25b5%25e8%2584%2591%25ef%25bc%258c%25e7%259c%259f%25c2%25b7%25e8%25b5%259b%25e5%258d%259a%25e6%259b%25bf%25e8%25ba%25ab%25ef%25bc%2581%25e4%25ba%25ba%25e6%259c%25ba%25e5%25b9%25b6%25e8%25a1%258c%25e6%2597%25b6%25e4%25bb%25a3%25e6%259d%25a5%2F"
date: "2026-09-05"
category: News
title: "Claude Code 升级后台计算机使用：人机并行工作流上线"
authors: ["pub.towardsai.net", "aiera.com.cn"]
summary: "Anthropic 在 Fable 5.1 发布约 24 小时后宣布全面升级 Claude「计算机使用」能力（Beta，面向 Pro/Max 订阅用户，macOS 优先）：操作默认在后台窗口完成、不占用用户键鼠，采用 API 连接器 → 内置浏览器 → 屏幕交互三级降级执行架构，覆盖 Cowork 与 Claude Code 场景。"
keywords:
  - 智能体与自动化
  - 大模型发布与竞争
sources:
  - { "name": "pub.towardsai.net", "url": "https://pub.towardsai.net/claude-code-shipped-a-command-that-eats-your-codex-config-929f1dca10e1" }
  - { "name": "aiera.com.cn", "url": "https://aiera.com.cn/2026/09/04/other/admin/111997/claude%e5%90%8e%e5%8f%b0%e6%8e%a5%e7%ae%a1%e7%94%b5%e8%84%91%ef%bc%8c%e7%9c%9f%c2%b7%e8%b5%9b%e5%8d%9a%e6%9b%bf%e8%ba%ab%ef%bc%81%e4%ba%ba%e6%9c%ba%e5%b9%b6%e8%a1%8c%e6%97%b6%e4%bb%a3%e6%9d%a5/" }
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 3
groupScore: 83.0
scoreScale: "news-v3"
emphasis: False
---
# Claude Code 升级后台计算机使用：人机并行工作流上线

## 事件概述

新智元报道（9 月 4 日）：Anthropic 宣布全面升级 Claude 的「计算机使用」能力并进入 Beta，面向 Claude Pro 与 Max 订阅用户开放，macOS 版率先体验。核心变化是操作默认在后台完成——「一个人、一台电脑、两条工作流」可以同时进行。

## 已确认事实与证据

- 升级覆盖 Cowork 与 Claude Code 场景；此前 3 月该能力随 Dispatch 上线时采用「截图→看图→输出坐标→系统点击」的前台循环，会持续抢占用户光标。
- 本次更新在 macOS 15 及以上系统中默认通过后台窗口工作，不占用用户正在使用的鼠标键盘；检测到用户输入时主动等待；仅当任务必须接管整屏时，才在每次会话首次前台操作前征求许可。
- 执行架构为三级降级：优先走 API 连接器（Gmail、Google/Microsoft 办公套件等，数秒完成）；其次接管内置浏览器做网页自动化；最后触发屏幕交互式计算机使用。
- 新智元描述的技术循环（截屏→理解界面→选择动作→执行→检查结果）与 Anthropic 公开文档一致（媒体转述）。

## 影响与后续观察

- 后台化解决了 GUI 智能体「霸占屏幕」的核心体验障碍，人机并行可能改变开发者日常工具链的组织方式。
- 待观察：屏幕交互路径的可靠性（弹窗遮挡、加载延迟导致步骤漂移等问题媒体亦有讨论）；Windows/Linux 支持时间表；Beta 期间的权限与安全边界细节。

## 来源链接

- 新智元报道：https://aiera.com.cn/2026/09/04/other/admin/111997/
- Towards AI 报道：https://pub.towardsai.net/claude-code-shipped-a-command-that-eats-your-codex-config-929f1dca10e1
