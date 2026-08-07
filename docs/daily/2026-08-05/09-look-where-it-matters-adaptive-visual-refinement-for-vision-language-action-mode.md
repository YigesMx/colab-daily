---
candidateId: "arxiv--2608.02197"
category: "Paper"
date: "2026-08-05"
rank: 9
title: "Look Where It Matters: Adaptive Visual Refinement for Vision-Language-Action Models"
authors:
  - "Jin Cui"
  - "Yanbin Hu"
  - "Xinyue Long"
  - "Linkai Li"
  - "Boran Zhao"
  - "Pengju Ren"
summary: "AtVLA 通过 register token 缓解 VLA 视觉编码器中的高范数注意力伪影，并只在动作不确定时对相关区域进行高分辨率重编码。"
keywords:
  - "视觉语言动作模型"
  - "机器人泛化"
score: 77
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.02197v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.02197v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.02197/preview.png"
---

## 核心内容

论文认为具身后训练会把对象位置、深度和局部几何等信息挤入低信息背景 patch，导致视觉注意力难以稳定定位。AtVLA 将这一问题拆成两步：先用 register slots 给全局信息专门容量，再在基础视图仍不确定时做局部精细视觉。

## 关键技术与数据

在 SigLIP 视觉编码器的 CLS 后插入四个 register token，并通过原始动作监督完成三阶段训练。动作专家采样多个 action chunk，以近端平移动作的分歧定义不确定度；超过阈值时，从现有动作到图像的注意力 rollout 中选择对比性 crop，重新编码 224x224 图像并追加到 KV prefix。该策略保留基础语言和图像缓存，仅给不确定步骤增加一次编码与动作生成。实验覆盖 LIBERO、SimplerEnv 和 Franka Research 3 的 Kitchen/Building Blocks。

## 结果与结论

作者报告 AtVLA 在 LIBERO 四套平均 98.4%，基础 pi0 为 94.2%；在其真实任务集合中多项成功率高于 registers-only、cropping-only 和 pi0.5 变体。单视角真实基准汇总中，文中给出 pi0 从 46.5% 到 69.0% 的提升；crop 在约 30% 的重规划步触发，总代价约为 pi0 的 1.4-1.6 倍。论文的诊断和探针支持表征解释，但 crop 阈值、真实任务集设计和各基线训练方式都会影响绝对比较，因此结果不能单独证明对所有视觉故障都有同样作用。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.02197v1
- arXiv 摘要页：https://arxiv.org/abs/2608.02197v1
