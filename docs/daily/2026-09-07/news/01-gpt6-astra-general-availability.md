---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F09%2F06%2Fother%2Fadmin%2F112353%2F%25e5%2588%259a%25e5%2588%259a%25ef%25bc%258cgpt-6-astra%25e5%2585%25a8%25e9%2587%258f%25e5%25bc%2580%25e6%2594%25be%25ef%25bc%2581%2F"
date: "2026-09-07"
category: News
title: "GPT-6 Astra 全量开放：高阶付费与 API 同步上线，官方指南劝开发者「删提示词」"
authors: ["aiera.com.cn", "www.jiqizhixin.com"]
summary: "OpenAI 宣布 GPT-6 Astra 向全部 Pro、Enterprise 与 Business Premium 用户开放（ChatGPT Work 与 Codex 可用，API 同步上线），Plus 与普通 Business 用户数日内跟进；官方数据显示 OSWorld 2.0 达 72.6%（上一代 GPT-5.6 Sol 为 65.7%）、单任务耗时从 75 分钟降至 40 分钟，但 Artificial Analysis 综合指数 61.2 仍低于 Claude Fable 5.1 的 65.7。模型指南称 Astra 对 AGENTS.md/Skills 指令更敏感，强烈建议审计并删除过时、冲突的提示规则。"
keywords:
  - 大模型发布与竞争
  - 智能体与自主系统
  - 模型评测与鲁棒性
sources:
  - { "name": "aiera.com.cn", "url": "https://aiera.com.cn/2026/09/06/other/admin/112353/%e5%88%9a%e5%88%9a%ef%bc%8cgpt-6-astra%e5%85%a8%e9%87%8f%e5%bc%80%e6%94%be%ef%bc%81/" }
  - { "name": "aiera.com.cn", "url": "https://aiera.com.cn/2026/09/06/other/admin/112316/40%e5%b9%b4%e5%89%8d%e7%94%b5%e8%84%91%ef%bc%8c%e8%a2%abgpt-6%e5%a4%8d%e6%b4%bb%ef%bc%81openai%e4%b8%8b%e4%b8%80%e4%bb%a3%e7%aa%81%e7%84%b6%e6%9b%9d%e5%85%89/" }
  - { "name": "www.jiqizhixin.com", "url": "https://www.jiqizhixin.com/articles/2026-09-06-5" }
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 1
groupScore: 86.0
scoreScale: "news-v3"
emphasis: false
---
# GPT-6 Astra 全量开放：高阶付费与 API 同步上线，官方指南劝开发者「删提示词」

## 事件概述

OpenAI 于 9 月 5 日宣布 GPT-6 Astra 全量开放：所有 Pro、Enterprise 与 Business Premium 用户已可在 ChatGPT Work 和 Codex 中直接使用，API 同步上线；Plus 与普通 Business 用户需再等几天。这是 9 月 3 日分阶段上线后的全面放开，也是本期窗口内最重大的旗舰模型事件，伴随大量开发者实测与官方迁移指南的发布。

## 已确认事实与证据

- 可用范围（OpenAI 官宣口径，经新智元报道转述）：Pro/Enterprise/Business Premium 用户即刻可用 ChatGPT Work 与 Codex，API 同步上线；Plus 与普通 Business 用户「再等几天」。
- 官方性能口径：OSWorld 2.0（桌面操作基准）上 Astra 达 72.6%，上一代 GPT-5.6 Sol 为 65.7%；每任务平均耗时从 75 分钟压缩到 40 分钟。
- 第三方口径：Artificial Analysis 综合智能指数上 Astra 为 61.2 分，低于 Anthropic 本周发布的 Claude Fable 5.1（65.7 分）——双雄尚未分出胜负。
- 官方模型指南（developers.openai.com）：Astra 对 skill 与 AGENTS.md 中的指令「更敏感」，以前被忽略的旧规则会被逐条执行；含糊规则会让它反复确认，冲突规则会让它停滞；指南「强烈建议」开发者审计模型可读到的每一个 skill 文件，并附出禁用「delve」「值得注意的是」等套话的示例提示词。OpenAI 工程师 Victor Nunez 的第一条建议是「删掉你的提示词」。
- 开发者实测（报道转述的公开案例）：Matt Shumer 用「管理者循环」（一个 Astra 做经理拆解任务、一个做执行者，峰值 96 个子智能体并行）在虚幻引擎中一条街一条街建出曼哈顿，历时一周；免疫学家 Derya Unutmaz 一句话生成 5 分钟 T 细胞教学视频（自动编排 Remotion 动画、Imagegen 配图并建议 HeyGen 旁白）；Tom Krcha 用一张蒸汽火车旧图纸在 Blender 中生成 3,295 个可编辑对象。
- 来源：新智元 9 月 6 日报道（含 OpenAI X 官宣帖、Victor Nunez 帖与官方迁移指南链接）；机器之心同日另有能力分析（合并来源）。

## 影响与后续观察

- 提示工程范式从「加法」转向「减法」：面向 agent 的 AGENTS.md/Skills 质量成为新的工程变量，过时与冲突规则从无害冗余变为实际错误源；对依赖提示词堆叠的既有工作流是一次强制审计。
- OSWorld 2.0 的 72.6% 与耗时减半若被独立复核，将直接改变桌面自动化 agent 的可用性判断；Artificial Analysis 指数落后于 Fable 5.1 提示「综合能力」与「长尾任务能力」的分歧。
- 待观察：Plus/普通 Business 开放时间；ARC-AGI-3 等高难基准的独立结果；企业从 GPT-5.6 Sol 到 Astra 的迁移成本；上下文与推理级别定价变化（原文未报告，待核验）。

## 来源链接

- 新智元报道：https://aiera.com.cn/2026/09/06/other/admin/112353/（完整 URL 见来源记录）
- OpenAI 官宣（X）：https://x.com/OpenAI/status/2095968413646737608
- 官方迁移指南：https://developers.openai.com/api/docs/guides/latest-model
- 机器之心分析（合并来源）：https://www.jiqizhixin.com/articles/2026-09-06-5
