---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F08%2F29%2Fother%2Fadmin%2F111186%2Fopenai%25e6%258a%258acodex%25e5%2581%259a%25e6%2588%2590%25e3%2580%258c%25e6%25b0%25b8%25e5%258a%25a8%25e6%259c%25ba%25e3%2580%258d%25ef%25bc%2581%25e5%2586%2585%25e9%2583%25a8%25e4%25bb%25a3%25e7%25a0%2581%25e6%259b%259d%25e5%2585%2589%25ef%25bc%259a%25e4%25b8%258d%25e5%25bc%25ba%25e5%2588%25b6%25e4%25bc%2591%25e7%259c%25a0%2F"
date: "2026-08-30"
category: News
title: "OpenAI Codex 代码曝光持久化智能体模式"
authors: ["aiera.com.cn", "github.com", "wired.com", "aiera.com.cn"]
summary: "Wired 审查 OpenAI Codex 公开代码发现持久化模式：持续工作直到被休眠、跨会话生成后续任务并利用历史偏好；OpenAI 称尚无立即上线计划，且模式不扩大权限。"
keywords: ["AI安全", "智能体记忆", "商业化落地"]
sources:
  - {"name":"aiera.com.cn","url":"https://aiera.com.cn/2026/08/29/other/admin/111186/openai%e6%8a%8acodex%e5%81%9a%e6%88%90%e3%80%8c%e6%b0%b8%e5%8a%a8%e6%9c%ba%e3%80%8d%ef%bc%81%e5%86%85%e9%83%a8%e4%bb%a3%e7%a0%81%e6%9b%9d%e5%85%89%ef%bc%9a%e4%b8%8d%e5%bc%ba%e5%88%b6%e4%bc%91%e7%9c%a0/"}
  - {"name":"github.com","url":"https://github.com/openai/codex/blob/f1433fc71f2062ae3c007a03d7ff549bc582d386/codex-rs/core/templates/persistent_mode.md"}
  - {"name":"wired.com","url":"https://www.wired.com/story/openai-is-developing-a-persistent-ai-agent/"}
  - {"name":"aiera.com.cn","url":"https://aiera.com.cn/2026/08/29/other/admin/111186/openai%e6%8a%8acodex%e5%81%9a%e6%88%90%e3%80%8c%e6%b0%b8%e5%8a%a8%e6%9c%ba%e3%80%8d%ef%bc%81%e5%86%85%e9%83%a8%e4%bb%a3%e7%a0%81%e6%9b%9d%e5%2585%2589%ef%bc%9a%e4%b8%8d%e5%bc%ba%e5%88%b6%e4%bc%91%e7%259c%a0%e4%b8%8d%e5%81%9c%e6%9c%ba/"}
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 6
groupScore: 83
scoreScale: "news-v3"
---

# Codex 的“永动机”模式曝光

## 事件概述

Wired 审查 OpenAI 公开的 Codex 代码库后发现一个持久化智能体模式：智能体可持续工作直到被强制休眠，任务完成后自行创建后续任务，并利用历史交互和对用户的了解决定下一步。OpenAI 承认相关探索存在，但称暂无立即上线计划。

## 已确认事实与证据

代码模板中的指令为“continue working until put to sleep”，并要求完成用户请求后主动创建后续任务；系统可跨会话延续、在未被询问时联系用户，但被要求克制打扰。模板同时规定该模式不扩大权限，触及用户系统之外的操作必须获得明确批准。新智元援引 OpenAI Hugging Face 事件报告，提醒高持久内部模型可能加剧对齐与安全问题。本文依据公开代码模板和报道，不把实验功能写成已发布功能。

## 影响与后续观察

持久化智能体会改变生产力与风险边界：一方面可承接长项目，另一方面提高凭证暴露、目标漂移、资源消耗和无人监督行动的风险。后续应关注该模式是否进入 ChatGPT Work、权限与审计日志设计、休眠策略，以及外部安全评估。

## 来源链接

- [Codex persistent_mode 代码模板](https://github.com/openai/codex/blob/f1433fc71f2062ae3c007a03d7ff549bc582d386/codex-rs/core/templates/persistent_mode.md)
- [Wired 报道](https://www.wired.com/story/openai-is-developing-a-persistent-ai-agent/)
- [新智元报道](https://aiera.com.cn/2026/08/29/other/admin/111186/openai%e6%8a%8acodex%e5%81%9a%e6%88%90%e3%80%8c%e6%b0%b8%e5%8a%a8%e6%9c%ba%e3%80%8d%ef%bc%81%e5%86%85%e9%83%a8%e4%bb%a3%e7%a0%81%e6%9b%9d%e5%2585%2589%ef%bc%9a%e4%b8%8d%e5%bc%ba%e5%88%b6%e4%bc%91%e7%259c%a0%e4%b8%8d%e5%81%9c%e6%9c%ba/)
