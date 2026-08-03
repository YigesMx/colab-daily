---
candidateId: "arxiv--2607.29302"
date: "2026-08-04"
rank: 3
title: "BWM：低成本高保真的机器人学习世界模拟器"
authors:
  - "BWM Team"
summary: "BWM 是一个动作条件世界模拟器，通过初始环境、动态历史和动作块自回归预测未来观测。论文同时把它用作模仿学习数据引擎和闭环策略评估器，并在 WorldArena 与 ARX X5 实验中报告了模拟保真度、下游策略和硬件结果。"
keywords:
  - "世界模型"
  - "机器人操作"
score: 93.0
sources:
  - name: "arXiv full text"
    url: "https://export.arxiv.org/e-print/2607.29302"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29302v1"
previewImage: "/daily/2026-08-04/assets/arxiv--2607.29302/preview.png"
---

## 核心内容

论文把机器人世界模拟定义为在观测空间中预测控制造成的视觉状态变化。BWM 的目标不是只生成看似合理的视频，而是保留动作响应、任务状态和跨自回归步骤的一致性，从而能生成与动作对齐的轨迹并提前评估风险。

## 关键技术与数据

模型以 Wan2.2-TI2V-5B 为初始化，使用动作序列的逐帧 token 和潜变量级聚合两条注入路径，并结合初始环境指导、动态历史帧条件和未来片段 flow-matching 损失。数据流程采用轨迹回放、重叠 clip 抽样和初始观测增强。设置为动作维度 14、历史窗口 H=8、未来块 K=72；WorldArena 训练使用四个节点、每节点 8 张 A800，物理实验覆盖 ARX X5 的 6 个操作任务。

## 结果与结论

作者报告 BWM 的 WorldArena EWMScore 为 63.51，动作条件模拟器中超过 Ctrl-World 3.81，数据引擎两任务平均成功率为 94.50%，模拟策略评估 Pearson r 为 0.978。物理机器人数据引擎中，加入 BWM 轨迹的策略平均硬件成功率为 71.00%；失败轨迹纳入的策略评估器与硬件结果的 Pearson r 为 0.908，MAE 为 14.67。论文的结论限定于其数据、任务和对比协议，不代表世界模拟器已经替代真实或物理仿真。

## 来源链接

- [本次精读原文](https://export.arxiv.org/e-print/2607.29302)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29302v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29302v1)
