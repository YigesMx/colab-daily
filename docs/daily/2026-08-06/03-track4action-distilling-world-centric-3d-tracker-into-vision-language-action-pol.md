---
candidateId: "arxiv--2608.03727"
date: "2026-08-06"
rank: 3
title: "Track4Action: Distilling World-Centric 3D Tracker into Vision-Language-Action Policies"
authors:
  - "Chenyi Wang"
  - "Xinkai Wang"
  - "Bokai Lin"
  - "Jialin Tian"
  - "Fucheng Zhang"
  - "Cewu Lu"
  - "Lixin Yang"
summary: "Track4Action 将动作对应片段中的世界中心三维跟踪特征作为训练期特权监督，蒸馏进部署时不再依赖跟踪器的 VLA。"
keywords:
  - "视觉语言动作模型"
  - "三维几何"
  - "机器人泛化"
score: 81
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.03727v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.03727v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.03727/preview-main.png"
---

## 核心内容

普通动作标签说明机器人要执行什么，却没有直接描述动作如何改变三维世界。Track4Action 使用与动作块对齐的演示视频，通过冻结的 Track4World 提取几何、运动、可见性和相机变化，再让当前观察下的 VLA 学会预测这一动作相关世界表征。

## 关键技术与数据

训练时 Track4World 对 K+1 帧计算 pooled tracker feature，VLA 隐状态通过 learnable track queries 预测该特征，并在共享空间中对齐；对齐后的表征通过 feature-wise gate 调节 flow-matching action head。部署时移除视频片段和跟踪器，只保留当前观察、任务和动作模型。实验覆盖 LIBERO-Plus、RoboTwin 2.0 以及四项实体双臂任务。

## 结果与结论

作者报告 LIBERO-Plus 零样本 82.3%，RoboTwin 2.0 clean/randomized 分别为 80.44% 和 81.48%，四项实体双臂任务平均成功率为 67.5%，较 alignment-free 变体高 25 个百分点。证据支持动作对齐的三维过渡可作为特权监督；不过训练依赖跟踪器质量、演示对齐和相机设置，部署阶段不使用跟踪器并不等于训练数据不需要这些条件。

## 来源链接

- https://arxiv.org/pdf/2608.03727v1
- https://arxiv.org/abs/2608.03727v1
