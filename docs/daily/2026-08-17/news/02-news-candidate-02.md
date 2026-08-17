---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F08%2F16%2Fother%2Fadmin%2F109270%2F%25e5%2585%25a8%25e7%2590%2583%25e7%25a8%258b%25e5%25ba%258f%25e5%2591%2598%25e9%2583%25bd%25e5%259c%25a8%25e7%25bb%2599anthropic%25e7%2599%25bd%25e9%2580%2581%25e9%2592%25b1%25ef%25bc%2581%25e5%25ae%2598%25e6%2596%25b9%25e7%25bb%2588%25e4%25ba%258e%25e7%259c%258b%25e4%25b8%258d%25e4%25b8%258b%25e5%258e%25bb%25e4%25ba%2586%2F"
date: "2026-08-17"
category: "News"
title: "全球程序员都在给Anthropic白送钱！官方终于看不下去了"
authors:
  - "www.anthropic.com"
summary: "Anthropic 官方博客解释 Claude Code token 成本结构与会话降本实践。"
provisionalKeywords:
  - "编程智能体"
  - "企业动态"
  - "产业观察"
keywords:
  - "编程智能体"
  - "企业动态"
  - "产业观察"
sources:
  - name: "www.anthropic.com"
    url: "https://www.anthropic.com/news/maximizing-the-value-of-your-claude-code-sessions"
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 2
groupScore: 82
scoreScale: "news-v3"
---

# 全球程序员都在给Anthropic白送钱！官方终于看不下去了

## 事件概述

Anthropic 官方博客发布 Claude Code 使用效率指南，解释智能体编程任务为什么具有显式 token 成本，以及相同任务为何会因上下文、模型档位和缓存行为产生不同费用。

## 已确认事实与证据

官方建议在任务之间运行 /clear 清除无关上下文；开始前固定模型与 effort，避免中途改变导致 prompt cache 失效；用 /context 检查 CLAUDE.md、MCP 工具定义等加载项；在离开键盘前执行 /compact，因为 prompt cache 约 1 小时后过期，仍在缓存窗口内总结更便宜。博客还解释输入、输出与缓存 token 的价格差异。

## 影响与后续观察

原文关键证据摘录：- It means there are cheap moments to do it, the start of a session or right after a /clear , and expensive ones, the middle of a long conversation.
- Run /context once in a fresh session.
- /compact before you take a break from your keyboard.
- Claude Code manages the prompt cache on every request, there's nothing to turn on.

智能体编程的瓶颈正从“能否生成代码”转向上下文治理、缓存保持与任务切分。企业应把 token 成本与任务完成率、审查通过率、返工率和安全事件一起核算，而不是只看单价。

## 来源链接

- https://www.anthropic.com/news/maximizing-the-value-of-your-claude-code-sessions
