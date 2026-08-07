---
candidateId: "arxiv--2608.02014"
category: "Paper"
date: "2026-08-05"
rank: 12
title: "MANGO-Grasp: Mahalanobis Fields over Geometry-Oriented 3D Gaussians for Cross-Embodiment Dexterous Grasping"
authors:
  - "Heng Zhang"
  - "Kevin Yuchen Ma"
  - "Mike Zheng Shou"
  - "Weisi Lin"
  - "Yan Wu"
summary: "MANGO-Grasp 用面向几何的 3D Gaussian 表示物体、形态-运动学描述手部，并以各向异性 Mahalanobis 场指导跨手型灵巧抓取。"
keywords:
  - "灵巧抓取"
  - "多视角几何"
  - "机器人泛化"
score: 77
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.02014v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.02014v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.02014/preview.png"
---

## 核心内容

这项工作将跨形态抓取建模为手部 keypoint 与物体局部表面之间的交互，而非直接回归某一手型的关节配置。其关键是让接触兼容度在表面法向和切向具有不同敏感性，从而兼顾局部接触与不同手型的可实现性。

## 关键技术与数据

物体 mesh 被转换为固定 256 个与表面对齐的板状 3D Gaussian，密度由法线和曲率信号驱动；手部以 256 个表面 keypoint 表示。DGCNN robot encoder 通过同一 keypoint 跨配置的形态 identity 对比学习，以及跨配置重建的 kinematic-awareness 训练得到描述符。交互生成器以 CVAE 预测 keypoint-Gaussian 的 Mahalanobis 距离矩阵；推理阶段在统一超参数下最小化 field guidance、穿透和自碰撞能量。实验使用 CMAP、MultiGripperGrasp、三种见过手型和未见 SharpaWave。

## 结果与结论

作者报告 CMAP 与 MultiGripperGrasp 上 seen-hand 成功率 97.59% 和 89.47%，未见 SharpaWave 的 zero-shot 成功率 84.17% 和 81.47%，实机为 86%。摘要中相对最强 seen-hand/zero-shot 基线的最高改善为 8.24/16.57 个百分点。该证据说明几何-接触表示在这些固定数据集和手型中有效，但真实实验规模、对象分布以及优化初始化都会影响成功率；论文没有声称解决任意手型的闭环抓取和在线感知问题。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.02014v1
- arXiv 摘要页：https://arxiv.org/abs/2608.02014v1
