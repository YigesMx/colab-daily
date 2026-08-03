---
candidateId: "arxiv--2607.29622"
date: "2026-08-04"
rank: 12
title: "RayViT：面向视角鲁棒模仿学习的射线条件视觉表示"
authors:
  - "Qian Wang"
  - "Longrui Chen"
  - "Peiran Sun"
  - "Aleksandar Taranovic"
  - "Niklas Freymuth"
  - "Ge Li"
  - "Weiran Liao"
  - "C. F. Maximilian Nagy"
  - "Yucheng Tan"
  - "Tao Chen"
  - "Gerhard Neumann"
summary: "RayViT 将相机内外参转成与图像像素对齐的 Plücker ray map，并通过射线条件 class token、patch 级几何位置嵌入和跨视角一致性损失，把相机几何注入预训练 ViT。"
keywords:
  - "视觉几何表征"
  - "模仿学习"
  - "机器人操作"
score: 83.0
sources:
  - name: "arXiv full text"
    url: "https://arxiv.org/html/2607.29622"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29622v1"
previewImage: null
---

## 核心内容

仅使用 RGB 的视觉模仿策略容易把视角特定的外观映射记成动作规则。RayViT 的基本判断是，相机变化可以由相机内参和外参解释，因此应把每个像素的三维观察射线作为与图像对齐的几何条件，而不必增加深度传感器或大量新视角示范。

## 关键技术与数据

每个像素的 Plücker ray 由世界坐标射线方向和 moment 构成；ray map 经平均池化与两层 MLP 后加入 ViT patch token。另有可学习 query 通过 gated cross-attention 聚合 ray 特征，替换原始 CLS token；跨视角 cosine loss 以夹爪视角为 anchor，对中间层几何条件 class token 做一致性约束。实验在 RoboCasa 16 个仿真任务与 4 个真实任务中，用统一 score-based diffusion policy 和 xLSTM action head，对默认及相机扰动条件进行比较。

## 结果与结论

仿真结果中，RGB 变体平均成功率从默认 42.5 降到扰动 24.0，RayViT 从 39.8 降到 37.3，性能跌幅由 18.5 降到 2.5 个百分点。真实任务四个任务平均完成阶段由 RGB 的默认 2.44/扰动 0.91 变为 RayViT 的 2.81/2.69。结果支持几何条件提升抗相机扰动能力，但作者也指出当前方法依赖多视角、任务相关 anchor 和相机标定。

## 来源链接

- [本次精读原文](https://arxiv.org/html/2607.29622)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29622v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29622v1)
