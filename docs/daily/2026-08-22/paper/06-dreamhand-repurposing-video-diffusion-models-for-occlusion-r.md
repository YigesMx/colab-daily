---
candidateId: "paper--arxiv--2608.20308"
businessCandidateId: "paper--arxiv--2608.20308"
date: "2026-08-22"
category: "Paper"
title: "DreamHand: Repurposing Video Diffusion Models for Occlusion-Robust Egocentric 3D Hand Motion Recovery"
authors: ["arxiv.org"]
summary: "上海交大、南洋理工、港中文与 ACE Robotics 提出离线片段级框架 DreamHand，把视频扩散模型改造成确定性几何编码器：对干净潜表示做单次前向提取遮挡与出画之外的场景信息，配合双向时空解码器恢复双手度量轨迹。在五个第一人称基准上刷新 SOTA，MPJPE-p 降低约 30%。"
provisionalKeywords: ["视觉感知", "数据基础设施"]
keywords: ["视觉感知", "数据基础设施"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.20308"}, {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.20308v1"}]
previewImage: "/daily/2026-08-22/assets/paper--arxiv--2608.20308/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 6
groupScore: 79
scoreScale: "paper-v2"
emphasis: false
---
# DreamHand：把视频扩散模型改造成遮挡鲁棒的第一人称 3D 手部运动恢复器

## 研究问题与贡献

第一人称视频是可扩展的机器人操作数据来源，但从原始视频恢复度量 3D 手部轨迹受两个因素阻碍：手-物交互遮挡，以及头部快速运动导致手完全出画。逐帧检测器与因果跟踪器在出画后难以恢复连贯轨迹，而用视频扩散模型做多步采样再渲染像素的生成式方案延迟高且会把生成伪影带入姿态估计。DreamHand 的贡献是把 VDM 当作确定性几何编码器而非像素渲染器，以片段级时空推理恢复双手度量轨迹。

## 方法与系统

框架包含确定性干净潜编码器（Deterministic Clean-Latent Encoder）与双向时空解码器（Bidirectional Spatiotemporal Decoder）：对干净潜表示做一次前向传播，提取当前观测之外的场景内容（含被遮挡与出画的手），再离线解码整段双手轨迹；系统无需外部检测器即可输出连续双手轨迹与度量放置。基于射线的相机求解器提供第二种配置，可不在测试时依赖相机内参。

## 实验设置与数据

在 ARCTIC、HOT3D、HOI4D 等五个第一人称基准上与 InterWild、HaMeR、Hamba、WildHands、WiLoR 等方法比较，报告检测 F1、MPJPE-p、PA-p、含出画的 MPJPE+OOS、2D 投影误差、全局/相机轨迹与抖动等指标。

## 结果、限制与结论

论文报告：DreamHand 在五个基准上整体刷新 SOTA，在展示的七项平均指标中六项领先，MPJPE-p 相对降低约 30%，并在手短暂出画时保持身份与轨迹连续性。限制是离线片段级处理不适合在线控制，且依赖视频扩散先验对物理与交互的编码质量；作者未报告推理成本与大范围真实机器人数据管线的端到端收益。对具身数据基础设施而言，它是把海量第一人称视频转成可用操作演示的关键组件。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.20308>
- Hugging Face：<https://huggingface.co/papers/2608.20308>
