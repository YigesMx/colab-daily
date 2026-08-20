---
candidateId: "paper--arxiv--2608.18701"
businessCandidateId: "paper--arxiv--2608.18701"
date: "2026-08-21"
category: "Paper"
title: "SoftVTBench: A Deformation-Aware Visuo-Tactile Dataset and Benchmark for Deformable-Object Manipulation"
authors: ["arxiv.org"]
summary: "SoftVTBench 发布 4000 条多视角 RGB、双指触觉与 FEM 真值对齐的柔性物体操作数据，并用变形感知成功率揭示完成任务但接触粗暴的问题。"
provisionalKeywords: ["触觉感知", "机器人数据", "机器人操作"]
keywords: ["触觉感知", "机器人数据", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.18701v1"}]
previewImage: "/daily/2026-08-21/assets/paper--arxiv--2608.18701/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 6
groupScore: 82
scoreScale: "paper-v2"
emphasis: false
---
# SoftVTBench: A Deformation-Aware Visuo-Tactile Dataset and Benchmark for Deformable-Object Manipulation

## 研究问题与贡献

论文指出柔性物体操作评测只看任务成功并不足够：策略可能完成任务却发生滑动、过度压缩或破坏性接触。SoftVTBench 同时提供策略可见的视觉触觉观测与 evaluator-only 的有限元物理真值，并定义变形感知成功率 DSR。

## 方法与系统

数据集包含 4000 条专家演示和超过 50 个资产，覆盖体积可变形物体及视觉匹配的刚性孪生对象。每条 20Hz episode 同步多视角 RGB、双指触觉 RGB 与 marker 运动、本体感知、语言、离散和连续夹爪动作，同时保存仅评测器可见的 FEM 状态。DSR 要求任务完成且峰值归一化变形在容差内。

## 实验设置与数据

论文在物体、空间、分布内与分布外套件上评测 Diffusion Policy、π0.5 和 FastWAM 等策略，并做视觉、触觉与夹爪控制模式的匹配消融。评测同时报告任务成功率和 DSR。

## 结果、限制与结论

论文报告全部 12 个分布内配置都有违反变形容差的成功 rollout，占各配置成功数的 0.7% 至 24%；分布外条件下，视觉触觉变体在 6 组策略-套件比较中全部取得更高任务成功率，其中 5 组 DSR 更高。这说明增加触觉不必然带来有效融合。限制是资产和任务仍受实验室校准约束，真实服务场景与更复杂材料需扩展。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.18701)
- [官方 PDF](https://arxiv.org/pdf/2608.18701)

![preview](/daily/2026-08-21/assets/paper--arxiv--2608.18701/preview.png)
