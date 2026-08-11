---
schemaVersion: 2
candidateId: "url--https%3A%2F%2Fhuggingface.co%2Fblog%2Fmuse-glimmer"
date: "2026-08-11"
title: "Meta is back with Muse Glimmer: local, agentic, multimodal, and open source"
authors:
  - "Pedro Cuenca"
  - "merve"
  - "ben burtenshaw"
  - "Aritra Roy Gosthipaty"
summary: "Hugging Face 于 2026 年 8 月 10 日发布文章介绍 Meta 的 Muse Glimmer：一个面向本地智能体场景的 30B 多模态模型，采用 Apache 2.0 许可，并在 transformers、llama.cpp 和 vLLM 等工具中提供首日支持。文章还给出了发布方自测基准、架构和部署示例，但这些结果尚未被本记录中的独立测试验证。"
keywords:
  - "本地开放多模态部署"
  - "多模态模型"
category: "News"
ratingTrack: "news_policy"
groupRank: 1
groupScore: 76
scoreScale: "news-policy-v2"
sources:
  - name: "Hugging Face Blog"
    url: "https://huggingface.co/blog/muse-glimmer"
  - name: "AI Policy Daily archive"
    url: "https://aipolicydaily.org/archive/daily/2026-08-10/#story-0003"
previewImage: null
---

## 事件概述

Hugging Face 于 2026 年 8 月 10 日刊发由 Pedro Cuenca、merve、ben burtenshaw 和 Aritra Roy Gosthipaty 撰写的文章，介绍 Meta 的 Muse Glimmer。文章将其描述为面向本地智能体用途的 30B 多模态模型，并称模型以 Apache 2.0 许可发布，可从 Hugging Face Hub 获取。文章还称 transformers、llama.cpp、vLLM 和 Inference Endpoints 已提供首日支持，因此事件的可验证新增部分是模型发布、许可和软件集成的公开声明，而不是已经证明的普遍部署效果。

## 已确认事实与证据

Hugging Face 的完整文章明确写出 Muse Glimmer 是一个由 2B 视觉编码器和 28B 文本解码器组成的 dense 30B 模型。文本解码器采用三层 2,048 token 滑动窗口注意力接一层全注意力的模式，重复 13 次共 52 层；每个键值头由 16 个查询头共享，文章称这会减少 KV cache 内存。视觉编码器同时处理图像和视频，视频处理器目标为每秒 2 帧、最多均匀采样 96 帧。上述架构描述直接来自发布文章。

文章列出 high-reasoning 模式下与 Gemma4-31B Thinking Mode、Qwen3.6-27B Thinking Mode 的多组比较。例如 Muse Glimmer-30B 在其表格中获得 MCP Atlas 75.5、SWE-Bench Verified 76.0、MMMU Pro 74 和 AIME 2026 94.7；在 OSWorld-Verified 上的 65.9 低于 Qwen 的 75.6。安全表也同时报告 CI Memories 的 violation 26.4、coverage 64.8，以及 Siren AgentDojo 的 attack success rate 28.4、utility 94.2。所有这些数值均应表述为 Hugging Face/Meta 文章“发布方报告”的结果，记录中没有独立复现实验、统一评测协议或第三方测试。

文章提供了 `meta-models/Muse-Glimmer-30B` 的 transformers 加载示例，并称 `device_map="auto"` 可用于 NVIDIA、AMD 和 Intel 加速器；还给出 llama.cpp 服务、OpenAI-compatible Inference Endpoint 和多模态工具调用示例。文章称模型在 Apache 2.0 许可下发布，并将本地运行与隐私、成本和个人助手场景联系起来。AI Policy Daily 的同期条目独立确认了“可下载并修改”的发布事实，但其摘要还转述了 Zuckerberg 文章和 Meta 开放权重政策变化，这些背景在当前完整技术文章中没有得到同等详细的原始证据支持，不能升级为本篇的已证实结论。

## 影响与后续观察

如果 Hub 权重、许可和软件集成按文章所述保持可用，研究团队可以在不依赖托管 API 的前提下评估本地多模态智能体、文档分析和代码场景；工具链的首日适配也降低了启动试验的工程门槛。对部署而言，30B 规模、所需硬件、量化质量、端点价格和实际吞吐仍决定“本地可运行”是否等于目标团队的可用性。文章展示的 benchmark 是发布方自测，且不同 benchmark 的高低结果并不支持“全面领先”这一结论。

近期应继续核验 Hub 中的权重和模型卡、Apache 2.0 的具体适用范围、不同硬件上的显存与延迟、视频和工具调用的失败模式，以及独立评测对安全指标和智能体任务结果的复现。当前材料没有提供真实用户部署规模、长期稳定性、完整训练数据或第三方安全审计，因此这些事项仍属未知，而非发布已完成的事实。

## 来源链接

- [Hugging Face Blog 原文](https://huggingface.co/blog/muse-glimmer)
- [Muse Glimmer Hub 页面](https://huggingface.co/meta-models/Muse-Glimmer-30B)
- [AI Policy Daily 同期条目](https://aipolicydaily.org/archive/daily/2026-08-10/#story-0003)
