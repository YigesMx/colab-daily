---
candidateId: "arxiv--2608.13723"
businessCandidateId: "arxiv--2608.13723"
date: "2026-08-18"
category: "Paper"
title: "Graph-MambaNav: Spatial-Temporal Graph Mamba Leveraging Object-Relation Knowledge for Object-Goal Navigation"
authors:
  - "arxiv.org"
summary: "Graph-MambaNav 用目标感知的局部、全局与时间扫描顺序，把对象关系先验注入 Mamba 序列建模，在 ObjectNav 长时程任务上取得更强效率与成功率。"
provisionalKeywords:
  - "自主导航"
  - "具身智能"
  - "模型与推理"
keywords:
  - "自主导航"
  - "具身智能"
  - "模型与推理"
sources:
  - name: "arxiv.org"
    url: "https://arxiv.org/abs/2608.13723v1"
previewImage: "/daily/2026-08-18/assets/arxiv--2608.13723/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 6
groupScore: 82
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.13723 -->
# Graph-MambaNav: Spatial-Temporal Graph Mamba Leveraging Object-Relation Knowledge for Object-Goal Navigation

## 研究问题与贡献

图导航模型通常置换不变，缺少控制信息传播顺序的机制，也难以显式表达目标相关的重要性。论文提出 target-aware spatial-temporal graph Mamba，将 LLM 对象关系、启发式节点排序和历史扫描结合。

## 方法与系统

模型从 RGB 观察构造对象图，利用 LLM 给出对象关系边，再执行局部结构、全局目标相关顺序和时间扫描。全局扫描按目标与关系重要性排列节点；时间扫描按过去到当前累积历史，使当前决策聚合完整上下文。

## 实验设置与数据

在 AI2-THOR 与 RoboTHOR 的 ObjectNav 任务上比较 Random、SP、SAVN、SpAtt、ORG、HOZ、VTNet、TSOG、M-MambaNav 等方法，并报告全部轨迹和最短路径长度 ≥5 的长时程子集。

## 结果、限制与结论

AI2-THOR 成功率 83.22%、SPL 46.52%，长时程成功率 76.09%；RoboTHOR 成功率 49.82%、SPL 28.67%。相对 Transformer 变体，模型参数 12.58M、23.47 GFLOPs、22.12 FPS，显著低于 62.13M、82.39 GFLOPs 和 11.32 FPS。限制是 RoboTHOR 提升较小，SPL 仍受策略优化影响，真实部署范围原文未形成大规模统计。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.13723v1>
