---
candidateId: "arxiv--2608.02990"
category: "Paper"
date: "2026-08-06"
rank: 13
title: "EmbodiedVAE: Disentangled Video VAE for Efficient and Controllable Embodied Manipulation"
authors:
  - "Jiayi Luo"
  - "Hanxin Zhu"
  - "Chen Gao"
  - "Jiankun Wang"
  - "Cong Wang"
  - "Tianyu He"
  - "Jianxin Li"
  - "Zhibo Chen"
summary: "EmbodiedVAE 为机器人操作世界模型设计双编码器视频 VAE，将机械臂运动与背景环境解耦以获得紧凑且可控的潜表示。"
keywords:
  - "世界模型"
  - "机器人操作"
  - "三维几何"
score: 74
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.02990v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.02990v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.02990/preview-main.png"
---

## 核心内容

自然场景视频 VAE 未必适合机器人操作：背景纹理和照明会消耗潜空间容量，而控制真正需要的是机械臂运动、物体变化和时间一致性。EmbodiedVAE 将这些具身因素作为表示设计的一部分，而不是事后由动作头补偿。

## 关键技术与数据

模型采用 dual-encoder single-decoder 架构和非对称时空压缩模块，自动分离机械臂运动与环境背景；optimal-transport consistency module 约束运动潜变量的帧间一致性，并在操控世界模型中支持细粒度动作控制。论文以视频重建、压缩率和机器人操作控制精度比较既有视频 VAE。

## 结果与结论

作者报告在较高压缩率下保持更好的重建质量，并在机器人操作场景中相对现有视频 VAE 平均提高约 2dB PSNR，同时改善动作控制精度。该结果说明具身专用视频表示可能为世界模型节省容量；但当前证据主要是表示与指定操作场景的实验，跨机器人形态、对象和长期闭环控制仍未充分验证。

## 来源链接

- https://arxiv.org/pdf/2608.02990v1
- https://arxiv.org/abs/2608.02990v1
