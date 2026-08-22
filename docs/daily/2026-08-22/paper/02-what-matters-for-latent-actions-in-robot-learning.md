---
candidateId: "paper--arxiv--2608.19613"
businessCandidateId: "paper--arxiv--2608.19613"
date: "2026-08-22"
category: "Paper"
title: "What Matters for Latent Actions in Robot Learning"
authors: ["arxiv.org"]
summary: "该工作是首个针对机器人操作中潜动作模型（LAM）的系统实证研究，统一比较 41 个设计选择，覆盖 LIBERO、LIBERO-Plus、RoboTwin2.0 与 Franka 真机。核心结论包括：原始 LAPO 在原始数据训练下仍是强基线，潜动作维度 32 最稳定，FDM 重建指标比探针指标更可靠，用潜动作微调 VLM 骨干能为下游策略提供更强初始化。"
provisionalKeywords: ["机器人学习", "数据基础设施"]
keywords: ["机器人学习", "数据基础设施"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.19613"}, {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.19613v1"}]
previewImage: "/daily/2026-08-22/assets/paper--arxiv--2608.19613/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 85
scoreScale: "paper-v2"
emphasis: true
---
# What Matters for Latent Actions in Robot Learning：潜动作模型的首个系统实证研究

## 研究问题与贡献

潜动作模型（LAM）试图从大规模无标注视频中学习紧凑的潜动作表示，以缓解机器人动作数据稀缺的问题。但现有方法在不同设定下孤立评估，缺乏可比较的实证结论。本文首次在统一自编码框架下系统研究 LAM 的建模范式、学习目标与正则、以及潜动作接入策略，共 41 个设计选择，并检验四类代理指标与下游操作性能的相关性。

## 方法与系统

作者把现有方法统一为 IDM-FDM（逆动力学-正动力学，如 LAPO、LAOF、CoMo）与 CFD-AE（连续帧差分自编码）两类范式，帧差可以是像素差、DINOv2 语义特征差或光流。训练管线分三阶段：预训练阶段从视频学习潜动作；中训练阶段用潜动作标注语义条件视频数据并微调 VLM 骨干；后训练阶段用少量带真动作的机器人数据训练下游策略。研究还比较 AE/VAE/VQ-VAE/稀疏/SIGReg 等正则及其强度，以及多种把潜动作引入动作预测的接入策略。

## 实验设置与数据

实验覆盖 LIBERO、LIBERO-Plus 与 RoboTwin2.0 三个仿真基准，并在 Franka Panda 真机上验证；分析包括潜动作维度、归一化、预训练规模扩展，以及代理指标与下游成功率的相关性。

## 结果、限制与结论

论文报告：直接在原始数据上训练的 LAPO 仍是强基线，现成视觉编码器的语义特征差分也具竞争力；潜动作维度 32 在 7 自由度单臂与 14 自由度双臂上总体最佳，配合合适正则后额外归一化收益有限；FDM 重建类指标比额外训练探针的指标更能反映潜动作质量，但只适合粗粒度选型，无法可靠挑出最优模型；用潜动作微调 VLM 骨干能为下游策略学习提供更强初始化，且扩大潜动作预训练规模持续提升下游表现。限制在于结论依赖所选方法族与三个基准，未覆盖全部近期 LAM 变体；真机验证规模相对有限。对研究者的直接价值是给出了一套可复用的设计指南与评估协议。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.19613>
- 项目页：<https://lam-research.github.io/>
- Hugging Face：<https://huggingface.co/papers/2608.19613>
