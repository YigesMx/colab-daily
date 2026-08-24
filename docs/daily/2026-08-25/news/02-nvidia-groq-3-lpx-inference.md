---
candidateId: "url--https%3A%2F%2Fblogs.nvidia.com%2Fblog%2Fvera-rubin-lpx-spectrum-x-nvlink-fusion%2F"
businessCandidateId: "url--https%3A%2F%2Fblogs.nvidia.com%2Fblog%2Fvera-rubin-lpx-spectrum-x-nvlink-fusion%2F"
date: "2026-08-25"
category: "News"
title: "NVIDIA宣布Groq 3 LPX量产并扩展Vera Rubin智能体推理"
authors: ["blogs.nvidia.com"]
summary: "NVIDIA称Vera Rubin NVL72扩展的Groq 3 LPX已全面量产；在Gemma 4 31B、100k token长上下文测试中输出3400 token/s，号称比最近替代平台快4倍。"
provisionalKeywords: ["AI基础设施", "推理优化", "芯片与算力"]
keywords: ["AI基础设施", "推理优化", "芯片与算力"]
sources: [{"name": "blogs.nvidia.com", "url": "https://blogs.nvidia.com/blog/vera-rubin-lpx-spectrum-x-nvlink-fusion/"}]
previewImage: "/daily/2026-08-25/assets/url--https_3a_2f_2fblogs.nvidia.com_2fblog_2fvera-rubin-lpx-spectrum-x-nvlink-fusion_2f/preview.png"
schemaVersion: 3
ratingTrack: "news"
groupRank: 2
groupScore: 91
scoreScale: "news-v3"
emphasis: false
---
# NVIDIA宣布Groq 3 LPX量产并扩展Vera Rubin智能体推理

## 事件概述

NVIDIA官方宣布，与Vera Rubin NVL72协同的机架级系统NVIDIA Groq 3 LPX进入全面量产，用于加速智能体系统的token生成。官方称Nebius是首个采用Groq 3 LPX的AI云，CoreWeave已在生产环境部署Spectrum-X Multiplane，SpaceXAI计划采用Vera CPU支撑下一代智能体AI。

## 已确认事实与证据

NVIDIA称在Artificial Analysis基准、Gemma 4 31B开源智能体模型和100000 token长上下文场景中，Groq 3 LPX输出3400 token/s，比最近替代平台快4倍。官方还描述Rubin GPU负责大规模上下文处理，LPX负责延迟敏感decode，二者共同计算模型各层。

网络方面，Spectrum-X Multiplane通过多个平行两层网络扩展到512000 GPU；八平面拓扑中单平面故障仍保留约90%带宽，硬件恢复速度称比软件多平面负载均衡快11倍。 NVLink Fusion则把定制XPU/CPU接入NVLink scale-up域和MGX生态。

## 影响与后续观察

该发布针对智能体AI从单次推理转向长上下文、工具调用和多Agent协作后的decode延迟和吞吐瓶颈。若部署顺利，会影响实时编码Agent、交互式推理和大规模token serving的成本结构。

后续需要独立验证3400 token/s的上下文长度、batch、精度和硬件配置；关注Nebius实际可用性、CoreWeave网络稳定性、SpaceXAI部署范围，以及Groq 3 LPX与Rubin GPU在不同模型中的端到端收益。

## 来源链接

- [NVIDIA官方博客](https://blogs.nvidia.com/blog/vera-rubin-lpx-spectrum-x-nvlink-fusion/)
- [NVIDIA RSS](https://blogs.nvidia.com/feed/)
