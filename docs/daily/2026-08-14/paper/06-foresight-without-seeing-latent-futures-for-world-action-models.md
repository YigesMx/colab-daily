---
schemaVersion: 2
candidateId: "arxiv--2608.11605"
date: "2026-08-14"
category: "Paper"
ratingTrack: "paper"
groupRank: 6
groupScore: 88
scoreScale: "paper-v2"
title: "Foresight Without Seeing: Latent Futures for World Action Models"
authors: ["Jiakai Huang", "Zhongbo Wu", "Zheng Zhang", "Zihan Wang", "Shan You", "Tao Huang"]
summary: "ForeWAM 用 Future-KV 和动力学 registers 在潜空间提供未来交互信息，避免部署时显式生成未来视频。"
provisionalKeywords: ["世界动作模型", "潜在动力学", "未来条件化", "视频生成", "机器人操作"]
keywords: ["世界模型", "视觉语言动作", "推理加速"]
sources:
  - name: "原始来源 1"
    url: "https://arxiv.org/pdf/2608.11605v1"
  - name: "原始来源 2"
    url: "https://export.arxiv.org/e-print/2608.11605v1"
  - name: "原始来源 3"
    url: "https://ar5iv.labs.arxiv.org/html/2608.11605"
previewImage: "/daily/2026-08-14/assets/arxiv--2608.11605/preview.png"
---

# Foresight Without Seeing: Latent Futures for World Action Models

> ForeWAM 用 Future-KV 和动力学 registers 在潜空间提供未来交互信息，避免部署时显式生成未来视频。

## 研究问题与贡献

显式未来 WAM 能让动作网络读取场景演化，但视频去噪昂贵；直接策略更快，却缺少可解释的预测动力学接口。ForeWAM 试图保留“未来条件化”同时移除部署时的视频生成，以验证未来信息是否可以只在潜空间中传递。

## 方法与系统

Future-KV 对当前视觉 latent 和随机 future slots 做一次 Video DiT prefill，并在动作去噪期间复用逐层 K/V。额外的 dynamics registers 由冻结 latent-action teacher 监督，促使隐式未来状态编码物体运动、接触变化和任务进度。真实未来观测和 teacher 仅在训练使用；推理阶段不需要未来帧，也不解码视频。

## 实验设置与数据

论文在标准 LIBERO 四套任务和 LIBERO-Plus 七类扰动上评测标准与加速版本，未使用具身机器人数据预训练。LIBERO 每任务 50 次 rollout；LIBERO-Plus 表格报告可观测子集，比较显式未来 WAM、直接策略和多种 VLA。实验还测量独立动作生成延迟，并消融 Future-KV、dynamics registers、teacher 监督及条件设计。

## 结果、限制与结论

标准与加速 ForeWAM 在 LIBERO 分别达到 96.7% 与 96.9%，标准版在 LIBERO-Plus 可观测子集达到 61.6%。结果支持无需可视化未来也能把预测动力学暴露给动作路径，但仍低于部分强 VLA/WAM 报告的饱和成功率。论文主要验证仿真，潜在状态是否真的对应可泛化物理因果仍缺直接测量；依赖冻结 teacher 的训练信号，真实机器人延迟、接触失败与跨平台迁移当前材料未确认。

## 来源链接

- [arXiv](https://arxiv.org/abs/2608.11605)
- [PDF](https://arxiv.org/pdf/2608.11605v1)
