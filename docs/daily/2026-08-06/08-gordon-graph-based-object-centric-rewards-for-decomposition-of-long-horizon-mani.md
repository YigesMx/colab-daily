---
candidateId: "arxiv--2608.03753"
category: "Paper"
date: "2026-08-06"
rank: 8
title: "GORDON: Graph-based Object-centric Rewards for Decomposition of Long-Horizon Manipulation"
authors:
  - "Andrea Protopapa"
  - "Davide Buoso"
  - "Francesca Pistilli"
  - "Georgia Chalvatzaki"
  - "Giuseppe Averta"
summary: "GORDON 从无动作视频中构建对象关系图和密集进度奖励，并据奖励曲线自动发现长程操作子任务。"
keywords:
  - "强化学习"
  - "机器人操作"
score: 79
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.03753v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.03753v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.03753/preview-main.png"
---

## 核心内容

长程操作的强化学习面临稀疏奖励和人工子任务标注成本。GORDON 不直接用像素距离作为进度，而是把场景表示成对象和空间关系图，学习任务相关的对象中心潜空间，再以到目标状态的距离形成奖励。

## 关键技术与数据

图神经网络以自监督方式编码对象图，activity-aware weighted pooling 强调任务相关对象并抑制机器人自身运动。奖励曲线中的阶段变化被用来自动切分子任务，再训练子任务特定奖励和策略并顺序组合。实验在 MAGICAL 和 ManiSkill3 的七项短程、长程操作任务上比较环境奖励、像素和对象中心基线。

## 结果与结论

作者报告长程任务平均成功率 74.4%，较最强学习奖励基线约高 35 个百分点，较 oracle 约高 25 个百分点；奖励还可转移到自动发现的子任务。结果表明对象关系比原始像素更适合学习阶段进度，但方法依赖对象检测和场景图质量，且在真实机器人、检测错误和跨视觉域场景中的表现尚未由本文验证。

## 来源链接

- https://arxiv.org/pdf/2608.03753v1
- https://arxiv.org/abs/2608.03753v1
