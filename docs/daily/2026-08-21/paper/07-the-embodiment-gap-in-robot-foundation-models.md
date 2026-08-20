---
candidateId: "paper--arxiv--2608.18433"
businessCandidateId: "paper--arxiv--2608.18433"
date: "2026-08-21"
category: "Paper"
title: "The Embodiment Gap in Robot Foundation Models"
authors: ["arxiv.org"]
summary: "论文系统定义机器人基础模型的可复用结构与目标机体执行工作之间的 embodiment gap，并提出两维地图与跨形态报告框架。"
provisionalKeywords: ["具身智能", "跨形态泛化", "机器人数据"]
keywords: ["具身智能", "跨形态泛化", "机器人数据"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.18433v1"}]
previewImage: "/daily/2026-08-21/assets/paper--arxiv--2608.18433/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 7
groupScore: 81
scoreScale: "paper-v2"
emphasis: false
---
# The Embodiment Gap in Robot Foundation Models

## 研究问题与贡献

论文提出 embodiment gap：机器人基础模型中的语义、感知、数据或接口可复用，但要在特定机体上执行仍需要额外适配工作。作者将这个差距形式化，并分析其如何随方法和目标机器人变化。贡献包括两维地图、三条研究路线和一个可复现的报告框架。

## 方法与系统

作者按共享结构类型和执行前仍需适配的阶段组织现有方法，形成两维地图。综述覆盖共享语义与感知、共享机器人数据与接口、学习跨机体对应关系三个方向。报告框架要求披露源机器人、硬件改动、演示量、真实试验、人工介入、失败模式和目标机体工作，而非只报告成功率。

## 实验设置与数据

作为 survey，论文不提出新模型实验，而是系统整理近期跨形态方法、基线和评测主张，并用代表性工作演示报告卡的适用性。分析材料来自论文正文、图表和引用工作。

## 结果、限制与结论

论文结论是，scaling 观点必须补上执行适配成本；不同方法在可复用什么和还需实现什么上差异显著。该框架能让后续工作更公平比较跨形态学习。限制是分类边界依赖作者选取文献，报告卡尚未成为社区强制规范，也未量化所有适配成本。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.18433)
- [官方 PDF](https://arxiv.org/pdf/2608.18433)

![preview](/daily/2026-08-21/assets/paper--arxiv--2608.18433/preview.png)
