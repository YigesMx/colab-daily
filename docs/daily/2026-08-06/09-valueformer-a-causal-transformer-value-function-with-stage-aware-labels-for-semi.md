---
candidateId: "arxiv--2608.02958"
date: "2026-08-06"
rank: 9
title: "ValueFormer: A Causal Transformer Value Function with Stage-Aware Labels for Semi-Autonomous Vision-Language-Action Policies"
authors:
  - "Inkyu Sa"
  - "Konstantin Stulov"
  - "Rajat Bhageria"
summary: "ValueFormer 用阶段感知的连续价值和错误区间标签，为半自主 VLA 提供逐帧进度估计、优势加权和在线失误检测。"
keywords:
  - "视觉语言动作模型"
  - "强化学习"
  - "进度估计"
score: 78
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.02958v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.02958v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.02958/preview.png"
---

## 核心内容

行为克隆 VLA 只输出动作，难以分辨 rollout 正在推进还是已经悄然崩溃；终止成功/失败标签又过于稀疏。ValueFormer 将问题转为逐帧标签设计，让一个轻量 critic 同时表达平滑进度价值和尖锐错误信号。

## 关键技术与数据

模型在冻结 DINOv3 特征上使用因果 Transformer，一次前向输出 Monte Carlo value 和 binary value。失败轨迹使用 success-then-decay 的阶段标签，错误监督覆盖可恢复错误的时间区间，而不是只标记最终失败时刻。作者在真实双臂三明治装配数据上评估，并将 critic 信号用于训练权重和在线检测。

## 结果与结论

在 1,427 条真实机器人 episode 上，critic-derived training weight 将任务完成率从 70% 提升到 85%，但作者明确指出 n=20 的比较仍在噪声范围内；批处理 bf16 编码器将在线成本降低约 3-5 倍，使 critic 可在单 GPU 上以 2Hz 运行。结论支持密集阶段标签有实用价值，但实验任务单一，价值标签的跨任务构造和更大规模统计仍待验证。

## 来源链接

- https://arxiv.org/pdf/2608.02958v1
- https://arxiv.org/abs/2608.02958v1
