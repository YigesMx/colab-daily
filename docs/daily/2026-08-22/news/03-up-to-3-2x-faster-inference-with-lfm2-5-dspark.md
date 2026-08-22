---
candidateId: "news--url--https%3A%2F%2Fhuggingface.co%2Fblog%2FLiquidAI%2Flfm25-dspark"
businessCandidateId: "news--url--https%3A%2F%2Fhuggingface.co%2Fblog%2FLiquidAI%2Flfm25-dspark"
date: "2026-08-22"
category: "News"
title: "Up to 3.2x Faster Inference with LFM2.5-DSpark"
authors: ["huggingface.co"]
summary: "Liquid AI 在 Hugging Face 官方博客发布 LFM2.5 家族三个模型的 DSpark 草稿模型检查点，通过投机解码以极小显存代价换取解码加速：GPU 吞吐最高提升 3.18 倍、端侧最高 2.87 倍，函数调用平均延迟降低 57%，llama.cpp 与 SGLang 首日支持。"
provisionalKeywords: ["模型推理加速", "产品与部署"]
keywords: ["模型推理加速", "产品与部署"]
sources: [{"name": "huggingface.co", "url": "https://huggingface.co/blog/LiquidAI/lfm25-dspark"}, {"name": "huggingface.co", "url": "https://huggingface.co/blog"}]
previewImage: "/daily/2026-08-22/assets/news--url--https_3a_2f_2fhuggingface.co_2fblog_2fLiquidAI_2flfm25-dspark/preview.png"
schemaVersion: 3
ratingTrack: "news"
groupRank: 3
groupScore: 72
scoreScale: "news-v3"
emphasis: false
---
# Liquid AI 发布 LFM2.5-DSpark：最高 3.2 倍推理加速的开源投机解码

## 事件概述

8 月 20 日，Liquid AI 在 Hugging Face 官方博客发布 LFM2.5-DSpark 草稿模型检查点，覆盖 LFM2.5-1.2B-Instruct、LFM2.5-2.6B 与 LFM2.5-8B-A1B 三个模型，为 LFM2.5 家族增加可开源使用的投机解码路径。

## 已确认事实与证据

官方博客确认：DSpark 为三个 LFM2.5 模型提供草稿检查点；投机解码以最小显存增加换取大幅解码加速；官方报告 GPU 上吞吐最高提升 3.18 倍、端侧最高 2.87 倍；对端侧智能体场景，LFM2.5-2.6B 的函数调用延迟平均降低 57%；llama.cpp 与 SGLang 的 LFM 兼容 DSpark 集成已开源上游。发布方称输出质量不因加速改变；第三方复现结果当前材料未提供。

## 影响与后续观察

DSpark 面向端侧智能体与函数调用场景，直接降低本地部署的延迟与算力门槛，对需要快速工具调用的 agent 工作流有实用价值。后续值得观察：草稿模型对长上下文与代码生成的接受率表现；社区在更多硬件上的实测数据；以及该投机解码模式能否推广到其他混合架构模型。

## 来源链接

- 官方发布：<https://huggingface.co/blog/LiquidAI/lfm25-dspark>
