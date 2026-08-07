---
candidateId: "arxiv--2607.29567"
category: "Paper"
date: "2026-08-04"
rank: 6
title: "TransGraspNet：透明实验室器皿的物理与几何一致操作"
authors:
  - "Hailing Hu"
  - "Mingyi Zhu"
  - "Yiquan An"
  - "Yifei Tian"
  - "Tianyou Zuo"
  - "Lifeng Zhou"
summary: "TransGraspNet 将透明器皿操作中的边界、深度表面和抓取物理稳定性放到同一条一致性链路中，分别改进透明物体分割、深度补全和抓取重评分，并在含液体器皿的真实搬运中测试防洒漏。"
keywords:
  - "机器人操作"
  - "视觉几何表征"
score: 88.0
sources:
  - name: "arXiv full text"
    url: "https://arxiv.org/html/2607.29567"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29567v1"
previewImage: "/daily/2026-08-04/assets/arxiv--2607.29567/preview.png"
---

## 核心内容

透明玻璃器皿的边界反射、深度缺失和液体搬运安全相互耦合。论文的核心不是单独提高某个感知模块，而是让边界成为深度重建先验，让表面几何支撑法向估计，再让抓取选择同时考虑质心对齐和 wrench-space 稳定性，以减少倾斜、偏心和动态滑移。

## 关键技术与数据

感知模块在 ResNet-101/FPN 中加入 E-CBAM 和边缘分支；深度模块用 TDCNet、Edge-Guided Attention Gate 和 Masked Geometric Retention loss 抑制跨边界深度传播；抓取模块对 GraspNet 6-DoF 候选融合主轴、角度、质心、抗对称和 wrench-space 分数。RobotSci-Glass 覆盖 20 类物体，含 5,000+ RGB-D 感知图像和 200 个深度监督场景；真实平台为 AUBO i5、CTAG2F90C 和 RealSense D435i。

## 结果与结论

RobotSci-Glass 消融中，完整分割模型 mask AP 为 78.5、Boundary F 为 65.3；深度 RMSE 从 25.4 mm 降至 18.1 mm、法向误差从 15.2° 降至 8.4°。真实抓取在简单和杂乱场景分别为 96.0% 和 86.0%，100 次平均 91.0%；50 ml Erlenmeyer flask 和 100 ml bottle 半满液体以 0.5 m/s、1.0 m/s² 搬运时报告零洒漏。论文仍受单平台、数据集和控制协议限制。

## 来源链接

- [本次精读原文](https://arxiv.org/html/2607.29567)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29567v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29567v1)
