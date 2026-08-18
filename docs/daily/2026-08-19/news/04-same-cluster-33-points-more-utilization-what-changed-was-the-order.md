---
candidateId: "url--https%3A%2F%2Fhuggingface.co%2Fblog%2FDharma-AI%2Fgpu-management-pt2"
businessCandidateId: "url--https%3A%2F%2Fhuggingface.co%2Fblog%2FDharma-AI%2Fgpu-management-pt2"
date: "2026-08-19"
category: "News"
title: "Same Cluster, 33 Points More Utilization: What Changed Was the Order"
authors: []
summary: "Hugging Face 发布 Dharma-AI 的约束感知 GPU 分配器，称在七个同硬件同负载基准中最高提升利用率 33 个百分点，所有场景优先级加权产出均提升。"
provisionalKeywords: ["GPU调度", "算力利用", "基础设施", "基准测试"]
keywords: ["评测与基准", "AI基础设施"]
sources: [{"name": "huggingface.co", "url": "https://huggingface.co/blog/Dharma-AI/gpu-management-pt2"}]
previewImage: "/daily/2026-08-19/assets/url--https_3a_2f_2fhuggingface.co_2fblog_2fDharma-AI_2fgpu-management-pt2/preview.jpeg"
schemaVersion: 3
ratingTrack: "news"
groupRank: 4
groupScore: 82
scoreScale: "news-v3"
---

<!-- businessCandidateId: url--https%3A%2F%2Fhuggingface.co%2Fblog%2FDharma-AI%2Fgpu-management-pt2 -->
# Dharma AI 发布约束感知 GPU 分配器基准结果

## 事件概述

2026年8月17日，Hugging Face 发布 Dharma-AI 团队文章《Same Cluster, 33 Points More Utilization: What Changed Was the Order》。发布方称，其构建了约束感知 GPU 分配器，并与 FIFO 调度器在七个基准场景中比较。相同硬件和负载下，该分配器最高将 GPU 利用率提高 33 个百分点，并使优先级加权产出在全部场景提升。

## 已确认事实与证据

发布方称，系统同时处理训练、实时推理、批处理推理和量化四类负载。训练、批处理推理和量化需要连续占用 GPU 块，实时推理则按需求曲线弹性伸缩。分配器将实时需求视为随时间变化的需求曲线而非全天峰值预留，并按优先级和全局时间视野安排批处理任务。形式化模型约束包括单 GPU 同一时间只能服务一个任务、已启动任务不可中断、批处理任务占用二的幂大小的连续 GPU 块，以及实时任务相邻时间步的 GPU 切换上限。

公布的七个场景中，利用率最高从 53.6% 升至 87.0%，优先级加权产出最高提升 105.1%；64 GPU、30 个任务的规模测试中利用率持平于 44.9%，但优先级加权产出提升 15.9%。发布方称热路径决策耗时为 1 至 2 毫秒，规模测试为 15 毫秒。上述结果为公司自述基准，比较对象是特定 FIFO 调度实现，尚缺少独立环境复现。

## 影响与后续观察

该文章把 GPU 管理的关键从单纯提高占有率推进到同时衡量利用率、任务优先级、实时需求满足和全局排布合法性。如果方法在真实企业集群中成立，可能减少峰值预留造成的闲置，并提高已购算力的有效产出。后续需要关注负载预测误差、优先级定义、与现有调度器的迁移成本、多租户隔离，以及在预测偏差和突发任务下的稳定性。文章中的基准收益不应直接外推到所有集群。

## 来源链接

- [Hugging Face：Same Cluster, 33 Points More Utilization: What Changed Was the Order](https://huggingface.co/blog/Dharma-AI/gpu-management-pt2)

