---
candidateId: "arxiv--2607.29482"
date: "2026-08-04"
rank: 10
title: "Temporal Policy：从历史初始化动作生成的机器人示范学习"
authors:
  - "Dylan Miller"
  - "Martin Jagersand"
summary: "Temporal Policy 用机器人近期状态历史而不是独立高斯噪声初始化 flow，将动作生成转化为 point-to-distribution 的时序耦合传输，以降低 transport cost 和推理延迟。"
keywords:
  - "高效时序建模"
  - "模仿学习"
  - "机器人操作"
score: 85.0
sources:
  - name: "arXiv full text"
    url: "https://arxiv.org/html/2607.29482"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29482v1"
previewImage: "/daily/2026-08-04/assets/arxiv--2607.29482/preview.png"
---

## 核心内容

扩散和标准 flow matching 从无信息高斯先验到物理动作空间，必须学习一条长且可能高曲率的向量场。Temporal Policy 让源分布直接来自机器人的状态历史，并将其与未来动作序列配对，以利用相邻状态的相关性、缩短生成路径并支持高频闭环控制。

## 关键技术与数据

方法要求状态和动作在关节位置或笛卡尔姿态等配置表示中同构；源是长度 H 的状态历史，目标是错移 d 步的未来状态块。随机插值器在两者之间加带噪声的线性路径，网络用 1D U-Net 预测漂移，视觉由 ResNet-18 和 Spatial Softmax 编码，推理时可选择 ODE 确定性采样或 SDE 随机采样。仿真使用 Robomimic 五个任务，真实实验使用 7-DoF Barrett WAM 和 150 个示范。

## 结果与结论

在 Square ph 任务上，论文报告 transport 指标 Temporal Policy 1.21、CFM 10.00、Diffusion Policy 189.99；推理延迟为 19.1 ms，使用 10 NFE。仿真成功率整体与基线相当，真实 mug-hang 任务 20 次试验中总体成功 10/20，抓取阶段 19/20。主要失败集中在杯子遮挡树钩后导致深度对齐不足，说明低 transport cost 不等于真实部署已解决。

## 来源链接

- [本次精读原文](https://arxiv.org/html/2607.29482)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29482v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29482v1)
