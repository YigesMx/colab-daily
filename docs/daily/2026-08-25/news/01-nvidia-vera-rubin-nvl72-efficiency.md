---
candidateId: "url--https%3A%2F%2Fblogs.nvidia.com%2Fblog%2Fvera-rubin-nvl72-efficiency-ai-agents%2F"
businessCandidateId: "url--https%3A%2F%2Fblogs.nvidia.com%2Fblog%2Fvera-rubin-nvl72-efficiency-ai-agents%2F"
date: "2026-08-25"
category: "News"
title: "NVIDIA称Vera Rubin NVL72每兆瓦Agent吞吐量提升至30倍"
authors: ["blogs.nvidia.com"]
summary: "NVIDIA官方称，在SemiAnalysis AgentX真实Agent编码轨迹上，Vera Rubin NVL72相对GB300 NVL72在DeepSeek V4 Pro上最高达到30倍每兆瓦吞吐和35倍更低百万token成本；数据尚待SemiAnalysis复核。"
provisionalKeywords: ["AI基础设施", "推理优化", "芯片与算力"]
keywords: ["AI基础设施", "推理优化", "芯片与算力"]
sources: [{"name": "blogs.nvidia.com", "url": "https://blogs.nvidia.com/blog/vera-rubin-nvl72-efficiency-ai-agents/"}]
previewImage: "/daily/2026-08-25/assets/url--https_3a_2f_2fblogs.nvidia.com_2fblog_2fvera-rubin-nvl72-efficiency-ai-agents_2f/preview.jpg"
schemaVersion: 3
ratingTrack: "news"
groupRank: 1
groupScore: 92
scoreScale: "news-v3"
emphasis: false
---
# NVIDIA称Vera Rubin NVL72每兆瓦Agent吞吐量提升至30倍

## 事件概述

NVIDIA官方博客发布Vera Rubin NVL72在智能体工作负载上的早期测得性能：相对GB300 NVL72，在DeepSeek V4 Pro模型上最高达到30倍每兆瓦吞吐量和35倍更低百万token成本。 NVIDIA强调Agent会持续积累上下文、调用工具并生成子Agent，因此与简单聊天相比消耗显著更多token。

## 已确认事实与证据

官方引用OpenRouter数据称，智能体工作负载消耗token为简单聊天的15倍。测得数据使用SemiAnalysis AgentX工作负载，该负载由真实Agent编码session记录构成，保留上下文增长、工具调用和子Agent生成。 NVIDIA还称GB300 NVL72在DeepSeek V4 Pro上相对Hopper最高带来15倍每兆瓦吞吐提升。

系统侧，Vera Rubin NVL72结合prefill/decode分离、rate matching、大规模专家并行、分布式KV cache、KV-aware routing、融合CUDA kernel、NVFP4量化、第六代NVLink和NVLink Switch。 NVIDIA称DSX MaxLPS可在GPU、机架和工作负载层管理功耗，在相同兆瓦预算下配置最多40%更多GPU。

## 影响与后续观察

若结果经独立复核，电力受限AI工厂的吞吐、单位token成本和利润率都会被显著改变，尤其影响长上下文智能体编码、研究和客服系统。但官方口径仍属厂商测量，且文中说明结果待SemiAnalysis复核，Vera CPU工具调用性能也尚未计入。

后续应关注完整测试方法、模型清单、上下文长度分布、功率边界、token成本口径，以及与GB300 NVL72在生产环境中的稳定性和可用性对比。

## 来源链接

- [NVIDIA官方博客](https://blogs.nvidia.com/blog/vera-rubin-nvl72-efficiency-ai-agents/)
- [NVIDIA RSS](https://blogs.nvidia.com/feed/)
