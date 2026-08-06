---
candidateId: "arxiv--2608.04996"
date: "2026-08-07"
rank: 1
title: "DreamWAM：用运动、几何与语义重塑世界动作模型的未来表征"
authors:
  - "Shanglin Yuan"
  - "Weiheng Zhao"
  - "Xin Shi"
  - "Haoyi Jiang"
  - "Xianda Guo"
  - "Liu Liu"
  - "Wenyu Liu"
  - "Wei Sui"
  - "Xinggang Wang"
summary: "DreamWAM 不再把未来等同于 RGB 帧，而是在训练期联合建模外观、光流、几何和语义；辅助分支部署时移除，在 LIBERO-Plus 和实机视觉扰动下取得比匹配 RGB 基线更明显的增益。"
keywords:
  - "世界动作模型"
  - "三维空间理解"
score: 87.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.04996v1"
previewImage: "/daily/2026-08-07/assets/arxiv--2608.04996/preview.png"
---

## 核心内容

世界动作模型通常通过预测未来视频来帮助动作生成，但像素空间同时包含纹理、光照、背景和视角等与任务无关的变化。DreamWAM 的核心判断是：策略真正需要的不是像素级复刻，而是对象如何移动、空间关系如何变化以及任务相关语义是否保持一致。论文因此把未来拆为外观、运动、几何和语义四个互补视图，并让动作分支通过共享注意力读取这种结构化未来。

## 关键技术与数据

外观使用 Wan2.2 视频 VAE 的 RGB latent；运动由 RAFT 从相邻未来帧估计光流，再编码到同一 latent 网格；几何和语义分别来自 Depth Anything V3 与 DINOv2。RGB 与运动采用联合 flow-matching 去噪，几何与语义则通过轻量门控残差支路注入，避免破坏预训练视频通路。所有非 RGB 编码器和预测头只用于训练，部署仍沿用 Fast-WAM 的 RGB 接口。实验使用 LIBERO 四套任务、七类未见 LIBERO-Plus 扰动，以及 AgileX PiPER 双臂实机；模拟匹配实验采用 Wan2.2-5B、32 步动作块和 10 次去噪。

## 结果与结论

作者报告，无 rollout 模式从 97.30% 提升到 98.40%，联合视频-动作推理从 98.00% 提升到 98.90%；在 LIBERO-Plus 上对应从 51.36% 到 63.44%、从 69.16% 到 75.47%。实机标准任务均值从 90.8% 到 96.7%，未见光照、背景和布局扰动从 55.6% 到 74.4%。消融显示运动是最关键辅助视图，且把三类信号都强行作为去噪目标反而低于 RGB 基线，说明监督路由而非监督数量决定效果。结论应保守理解为匹配 Fast-WAM 配置下的初步证据；作者仍把度量 3D、接触感知和更强时间一致性列为后续方向。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.04996v1)
- [arXiv PDF](https://arxiv.org/pdf/2608.04996v1)
