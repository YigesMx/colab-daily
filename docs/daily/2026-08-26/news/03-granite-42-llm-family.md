---
candidateId: "url--https%3A%2F%2Fhuggingface.co%2Fblog%2Fibm-granite%2Fgranite-4-2"
businessCandidateId: "url--https%3A%2F%2Fhuggingface.co%2Fblog%2Fibm-granite%2Fgranite-4-2"
date: "2026-08-26"
category: "News"
title: "Granite 4.2 LLMs: How They're Built"
authors: ["huggingface.co"]
summary: "IBM Granite 4.2 发布 3B、8B、30B 三档 Apache 2.0 推理模型，覆盖 512K 上下文、思维/非思维模式、工具调用和多阶段 RL。"
provisionalKeywords: ["开源模型", "模型训练", "智能体"]
keywords: ["开源模型", "模型训练", "智能体"]
sources: [{"name": "huggingface.co", "url": "https://huggingface.co/blog/ibm-granite/granite-4-2"}]
previewImage: "/daily/2026-08-26/assets/url--https_3a_2f_2fhuggingface.co_2fblog_2fibm-granite_2fgranite-4-2/preview.webp"
schemaVersion: 3
ratingTrack: "news"
groupRank: 3
groupScore: 82
scoreScale: "news-v3"
emphasis: false
---

# Granite 4.2 LLMs: How They're Built

## 事件概述

IBM Granite 团队于 2026 年 8 月 25 日在 Hugging Face 发布 Granite 4.2 推理模型家族的技术说明。发布方称，该家族包含 3B、8B 和 30B 三个 dense、decoder-only 大语言模型，重点增强显式推理、工具调用和智能体能力，并以 Apache 2.0 许可证开放。

## 已确认事实与证据

- 发布方为 IBM Granite 团队，文章托管在 Hugging Face 官方博客，发布时间为 2026 年 8 月 25 日。
- 发布方称，三个模型均从头预训练，训练数据规模约为 15T tokens，并通过五阶段训练策略将上下文窗口扩展到 512K tokens。
- 发布方称，模型先经过监督微调，数据包含思维链、推理和智能体轨迹；随后进入多阶段强化学习流程。
- 发布方称，8B 与 30B 模型额外经过智能体强化学习，在真实沙盒环境中学习调用工具、编辑和运行代码、操作终端以及搜索网页。
- 发布方称，所有模型提供 thinking/non-thinking 切换、低努力思考模式和原生工具调用，并发布 Apache 2.0 许可证版本。
- 发布方还公布了架构、训练数据、强化学习流程、benchmark 和量化版本等信息；这些数值均属于厂商自报结果，本稿不作为独立复测结论。

## 影响与后续观察

- Granite 4.2 把推理、工具使用和智能体任务训练整合进开源模型家族，可能降低企业构建本地推理与智能体系统的门槛。
- 512K 上下文、智能体强化学习和 Apache 2.0 许可证的组合对开源模型生态具有直接影响，但实际效果仍取决于部署成本、推理吞吐、安全表现和下游任务可靠性。
- 发布方自报的 benchmark 尚需第三方在相同评测配置、提示词和工具环境中复测。
- 后续应关注模型在生产级智能体工作流中的错误率、长上下文检索稳定性、工具调用安全性，以及 FP8、FP4 和 GGUF 量化版本在不同硬件上的实际表现。

## 来源链接

- [Hugging Face 官方文章](https://huggingface.co/blog/ibm-granite/granite-4-2)
- [Hugging Face Blog RSS](https://huggingface.co/blog/feed.xml)
