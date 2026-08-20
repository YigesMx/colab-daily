---
candidateId: "paper--arxiv--2608.18734"
businessCandidateId: "paper--arxiv--2608.18734"
date: "2026-08-21"
category: "Paper"
title: "CL4D: Contrastive Language-4D Pretraining for Vision-Language Reasoning in Dynamic Scenes"
authors: ["arxiv.org"]
summary: "CL4D 将动态点云与自然语言对齐，提出基础 4D 视觉编码器与 4DVLM，在动态场景检索和 4D 推理任务上取得明显提升。"
provisionalKeywords: ["具身智能", "世界模型", "跨形态泛化"]
keywords: ["具身智能", "世界模型", "跨形态泛化"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.18734v1"}]
previewImage: "/daily/2026-08-21/assets/paper--arxiv--2608.18734/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 9
groupScore: 79
scoreScale: "paper-v2"
emphasis: false
---
# CL4D: Contrastive Language-4D Pretraining for Vision-Language Reasoning in Dynamic Scenes

## 研究问题与贡献

论文解决动态物理环境中 4D 空间结构与时间演化难以和语言对齐的问题。作者提出 CL4D，用对比学习把动态点云的时空几何表示与自然语言描述映射到同一空间，并在此基础上构建直接处理 4D 点云的 4DVLM。

## 方法与系统

CL4D 使用点云编码器和时空编码器学习动态场景表示，通过文本-4D 对比对齐。4DVLM 将该编码器作为视觉基础，条件化语言生成，使模型能够处理动态几何而不是只依赖静态图像或普通视频。

## 实验设置与数据

论文构建 DynAction4D 数据集，覆盖人体动作、人与物体交互和复杂场景，并在多个 4D 人体动作基准上评估 motion-to-text、text-to-motion 检索和下游 4D 视觉语言任务，与既有编码器及前沿视频 VLM 比较。

## 结果、限制与结论

论文报告 CL4D 相比此前方法提升约 16.75%，4DVLM 在对应任务上优于 Gemini 与 GPT-5 等视频 VLM。该结果支持动态点云对具身推理的价值。限制是数据以人体与环境交互为主，开放世界物体动力学、机器人体感控制与部署成本仍待验证。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.18734)
- [官方 PDF](https://arxiv.org/pdf/2608.18734)

![preview](/daily/2026-08-21/assets/paper--arxiv--2608.18734/preview.png)
