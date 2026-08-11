---
schemaVersion: 2
candidateId: "arxiv--2608.09853"
date: "2026-08-12"
category: "Paper"
authors:
  - "Source record"
sources:
  - name: "Original source"
    url: "https://arxiv.org/abs/2608.09853v1"
  - name: "Original source"
    url: "https://huggingface.co/papers/2608.09853"
ratingTrack: "paper"
groupRank: 1
groupScore: 96
scoreScale: "paper-v2"
title: "RynnValue: Scaling Robotic Value Foundation Models with Temporal Distance"
summary: "已读取 arXiv PDF 全文；以下仅陈述论文原文能够核验的主张。"
keywords: ["具身智能","机器人操作","世界模型"]
previewImage: null
---

## 研究问题与贡献

论文原文摘要摘录（来源：arXiv PDF）：

> Dongchi Huang∗ , Hongyin Zhang∗ , Bohan Hou∗ , Siteng Huang† , Zhian Su , Hang Guo , Tong Lu , Zhaofeng Xu , Jiahao Tang , Jianfei Yang , Donglin Wang , Peixi Peng† , Mingxiu Chen , Deli Zhao , Xin Li Equal contribution, † Corresponding authors General-purpose reward models are increasingly the bottleneck for scaling robot learning, yet the recipe for learning value-related capabilities from large-scale heterogeneous corpora remains underexplored. Existing approaches tie supervision to task-internal anchors such as preferences or normalized progress, none of which transfer cleanly across embodiments and data sources. We introduce RynnValue, an open-source value foundation model for robotic manipulation that replaces these anchors with temporal distance, the directed cost-to-go from an observation to the language-specified goal. Because temporal-distance labels can be derived directly from timestamps, RynnValue scales to over 7,000 hours and roughly 3M instruction-conditioned clips without preference or progress annotations. To make temporal-value learning reliable at scale, we combine random temporal sampling, temporal-order shuffling, and value-isolation attention, suppressing shortcuts that would leave predictions insensitive to failures and regressions. Trained without preference labels, RynnValue attains an average Kendall’s

该工作的问题设定、贡献边界和结论以论文全文为准；未在摘录或正文中确认的外推不作陈述。

## 方法与系统

全文方法/系统段落摘录：

> temporal distance, the directed cost-to-go from an observation to the language-specified goal. Because temporal-distance labels can be derived directly from timestamps, RynnValue scales to over 7,000 hours and roughly 3M instruction-conditioned clips without preference or progress annotations. To arXiv:2608.09853v1 [cs.RO] 10 Aug 2026 make temporal-value learning reliable at scale, we combine random temporal sampling, temporal-order shuffling, and value-isolation attention, suppressing shortcuts that would leave predictions insensitive to failures and regressions. Trained without preference labels, RynnValue attains an average Kendall’s τa of 0.675 on RBM-EVAL-OOD, surpassing the fully preference-supervised state of the art (0.655)

## 实验设置与数据

全文实验、数据集或评测协议摘录：

> onto the same temporal-distance supervision interface: each trajectory segment provides timestamp-derived state-level labels measuring the remaining temporal distance to its completion cutoff. 3.1.2 Data Preprocessing and Temporal-Distance Relabeling Large-scale robot datasets differ substantially in how episodes and subtasks are defined [3, 23, 4]. We therefore convert each data source into instruction-conditioned trajectory segments. Long demonstrations are split using native temporal annotations when available; otherwise, the complete episode is retained as a coarse segment. Because recorded trajectories may contain post-completion motions, we further assign each segment a completion cutoff. The segment endpoint is used by default, while dataset-specific ratio- or duration-based

## 结果、限制与结论

全文结果/结论段落摘录：

> https://alibaba-damo-academy.github.io/RynnValue.github.io https://github.com/alibaba-damo-academy/RynnValue https://huggingface.co/collections/Alibaba-DAMO-Academy/rynnvalue https://www.modelscope.cn/collections/DAMO_Academy/RynnValue Generalist robot policies are increasingly trained with reinforcement learning [2, 12], yet scaling this loop is bottlenecked not by policy capacity but by reward supervision. Hand-designed rewards hardly generalize to open-ended tasks, while sparse success signals offer limited guidance for long-horizon behavior [31]. Existing general-purpose reward models rely on task-internal anchors such as preferences, reference demonstrations, or local state comparisons [31, 34, 18, 26], which tie supervision to particular trajectories or comparison sets and are difficult to reuse across heterogeneous data. The common fallback, normalized [0,1] progress [16, 15], is

限制：本文仅报告 PDF 中可核验的实验和作者结论；跨数据集、跨硬件或部署效果若未被原文证明，保留为未知。

## 来源链接

- https://arxiv.org/abs/2608.09853v1
- https://huggingface.co/papers/2608.09853
