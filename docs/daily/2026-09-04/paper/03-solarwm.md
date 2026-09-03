---
candidateId: "arxiv--2609.02886"
date: "2026-09-04"
category: Paper
title: "SolarWM：面向长时程视频世界模型的全开源数据与训练底座"
authors: ["arxiv.org", "huggingface.co"]
summary: "SolarWM 发布了覆盖 10 个数据集、约 143 万条规范视频片段的统一数据引擎与四代（5B-33B）跨骨干模型的开源训练配方，支持分钟级 6-DoF 相机轨迹的连续 rollout，是长时程视频世界模型的重要开源基础设施。"
keywords:
  - 世界模型
  - 视频生成与扩散
  - 数据与评测
sources:
  - { "name": "arxiv.org", "url": "https://arxiv.org/abs/2609.02886v1" }
  - { "name": "huggingface.co", "url": "https://huggingface.co/papers/2609.02886" }
previewImage: "/daily/2026-09-04/assets/arxiv--2609.02886/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 84.0
scoreScale: "paper-v2"
emphasis: true
---

# SolarWM：面向长时程视频世界模型的全开源数据与训练底座

交互式视频世界模型的训练长期被数据与工程耦合问题困扰：不同数据集在时间尺度、相机几何、画质与标注风格上差异巨大，各视频生成骨干的表征也互不兼容，导致朴素混合训练难以复现与比较。SolarWM 试图给出一个完整的开源答案。

## 研究问题与贡献

问题：如何在异构数据源与异构视频骨干之间建立可复现、可重组的世界模型训练管线。贡献：可重组的多源数据引擎，把 10 个数据集约 143 万条片段转换为统一契约（视觉观测、度量相机几何、描述、质量元数据、筛选决定与溯源）；backbone-native 适配框架，保留各骨干原生表征与目标；以及基于 Wan2.2、LTX-2.5、MiniMax-H3 的四个 5B-33B 模型实例与统一三段式训练配方。

## 方法与系统

数据引擎把每个数据源的处理与混合构建解耦，输出 kept-high / kept-xhigh / rejected 三档质量分层的 WebDataset；配方索引用于灵活构建训练/评测混合。模型侧采用统一相机条件化（Fused-PRoPE）连接数据引擎与各视频骨干，训练流程分为双向预训练与蒸馏等阶段，全部代码、数据与配方开源。

## 实验设置与数据

语料覆盖真实世界、合成与游戏环境三类域；评测包括分钟级不间断 rollout，在代表性真实、合成与游戏场景下沿平移、旋转与混合 6-DoF 相机路径滚动；四个模型在共享条件化与推理接口下横向比较。

## 结果、限制与结论

论文报告了四个模型在长时程 rollout 与跨域场景上的系统比较（具体指标以论文表格为准）。限制：开源语料仍受原始数据许可约束；长时程一致性与交互可控性之间的权衡原文有讨论但结论尚待社区复现；33B 级模型训练门槛高。对组内价值：这是继 Genie 系列闭源路线之后，世界模型方向目前最完整的开源数据+训练底座之一，对数据配方研究有直接参考意义。

## 来源链接

- 论文页：https://arxiv.org/abs/2609.02886
- HTML 全文：https://arxiv.org/html/2609.02886
