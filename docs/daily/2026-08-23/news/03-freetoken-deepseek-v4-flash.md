---
candidateId: "news--url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-08-22-8%3Fsource%3Drss"
businessCandidateId: "news--url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-08-22-8%3Fsource%3Drss"
date: "2026-08-23"
category: "News"
title: "FreeToken 开源：单卡 RTX 5090 跑满血 DeepSeek-V4-Flash"
authors: ["www.jiqizhixin.com"]
summary: "机器之心报道 UC Berkeley/MIT 等机构团队开源 FreeToken 边缘推理系统，宣称单卡 RTX 5090 可运行满血 DeepSeek-V4-Flash（284B/13B 激活、1M 上下文），团队含 Ion Stoica 与 Matei Zaharia；具体机制与基准以开源仓库为准。"
provisionalKeywords: ["模型推理部署", "开源生态"]
keywords: ["模型推理部署", "开源生态"]
sources: [{"name": "www.jiqizhixin.com", "url": "https://www.jiqizhixin.com/articles/2026-08-22-8"}, {"name": "www.163.com", "url": "https://www.163.com/dy/article/L4V5T2DV0511AQHO.html"}, {"name": "huggingface.co", "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash"}]
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 3
groupScore: 73
scoreScale: "news-v3"
emphasis: false
---
# FreeToken 开源：单卡 RTX 5090 跑满血 DeepSeek-V4-Flash

## 事件概述

8 月 22 日，机器之心报道，来自 UC Berkeley、MIT 等机构的联合团队开源了名为 FreeToken 的边缘端推理系统，宣称让桌面级 RTX 5090 单卡运行满血 DeepSeek-V4-Flash（284B 总参数、13B 激活、原生 100 万 token 上下文），并可让笔记本 RTX 4060 运行 Qwen 3.6-35B。

## 已确认事实与证据

报道确认：FreeToken 已开源；团队包括并列一作杨硕（伯克利 EECS 博士生）、范晓泽（UT Austin），作者含 Ion Stoica、Matei Zaharia 等；宣称能力为单卡 5090 运行满血 DeepSeek-V4-Flash。DeepSeek-V4-Flash 模型本身已在 Hugging Face 开放，官方模型卡确认 284B/13B 激活与 1M 上下文。FreeToken 的具体加速机制、量化方案与吞吐数据当前报道摘要未完整给出，以开源仓库为准。

## 影响与后续观察

若宣称成立，端侧部署 frontier 级 MoE 模型的门槛将从多卡服务器降到单张消费级 GPU，显著改变个人开发者与小团队的推理成本结构。后续应关注：开源仓库中的基准数据（吞吐、延迟、显存占用）；与 llama.cpp/KTransformers/SGLang 等部署路径的对比；以及长上下文（1M）下的实际可用性。

## 来源链接

- 机器之心报道（网易镜像）：<https://www.163.com/dy/article/L4V5T2DV0511AQHO.html>
- 原文：<https://www.jiqizhixin.com/articles/2026-08-22-8>
- DeepSeek-V4-Flash 模型卡：<https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash>
