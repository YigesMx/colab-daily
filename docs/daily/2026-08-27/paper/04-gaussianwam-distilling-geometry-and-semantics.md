---
candidateId: "arxiv--2608.24714"
businessCandidateId: "arxiv--2608.24714"
date: "2026-08-27"
category: "Paper"
title: "GaussianWAM: Distilling Geometry and Semantics from 3D Gaussian Fields into World-Action Models"
authors: ["arxiv.org"]
summary: "GaussianWAM 关注世界-动作模型表示中的结构性缺口：视频预测潜变量常以外观重建为目标，未必保持跨视图几何一致或空间对齐的物体语义。作者提出一个只在训练期使用的 3D Gaussian 教师：先用冻结 VGGT-Omega 从多视图估计深度、置信度和相机参数，用冻结 CLIP 提取稠密语义特征，再把几何点、深度、语义和覆盖度绑定到统一 Gaussian primitives。随后渲染成与 WAM 视觉 token 对齐的语义、深度和覆盖目标，蒸馏到当前观察表示中。关键贡献是所有教师模型、"
provisionalKeywords: ["世界模型", "具身智能", "机器人操作"]
keywords: ["世界模型", "具身智能", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.24714v1"}]
previewImage: "/daily/2026-08-27/assets/arxiv--2608.24714/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 88
scoreScale: "paper-v2"
emphasis: false
---



# GaussianWAM: Distilling Geometry and Semantics from 3D Gaussian Fields into World-Action Models

## 研究问题与贡献

GaussianWAM 关注世界-动作模型表示中的结构性缺口：视频预测潜变量常以外观重建为目标，未必保持跨视图几何一致或空间对齐的物体语义。作者提出一个只在训练期使用的 3D Gaussian 教师：先用冻结 VGGT-Omega 从多视图估计深度、置信度和相机参数，用冻结 CLIP 提取稠密语义特征，再把几何点、深度、语义和覆盖度绑定到统一 Gaussian primitives。随后渲染成与 WAM 视觉 token 对齐的语义、深度和覆盖目标，蒸馏到当前观察表示中。关键贡献是所有教师模型、Gaussian 场和辅助预测头在推理时移除，不改变原 WAM 前向路径或部署计算量。

## 方法与系统

对每个训练样本，系统把几何有效像素反投影为 3D 点，密集初始化 Gaussian；每点包含中心、旋转、尺度、透明度和 64 维语义特征。多视图拟合用语义余弦距离、深度 L1、覆盖目标和参数正则联合优化 50 次迭代，并把渲染后的语义、深度、alpha 与有效掩码离线缓存。训练 WAM 时，在 FastWAM 的最终层视频专家 hidden states 或 Cosmos Policy 统一 DiT 的当前观察 hidden states 上接入轻量语义、深度与 alpha 预测头，仅对几何与渲染均有效位置计算损失。该设计兼容双专家 MoT 和统一 Transformer 两种代表性 WAM 架构。

## 实验设置与数据

实验覆盖 LIBERO、LIBERO-Plus 零样本扰动、RoboTwin 2.0 Clean/Random 和双 UR7e 真实操作。FastWAM 基线与增强版均训练 70k 步，使用 8 张 A100、有效 batch 32；Cosmos Policy 使用相同 5k 迭代预算和有效 batch 1920。真实实验为两项双臂任务，每任务 100 条演示，每种设置 20 次评估。消融比较直接 CLIP+VGGT 蒸馏、Gaussian 统一、语义/深度/alpha 逐项移除以及监督层深度。

## 结果、限制与结论

论文报告，LIBERO-Plus 上 FastWAM 平均成功率从 52.05% 提升到 71.29%，其中相机 +29.03、光照 +29.11、噪声 +39.46 个百分点；Cosmos Policy 从 71.52% 到 77.30%。RoboTwin Random 下 FastWAM 0.70% 到 1.60%，Cosmos Policy 7.10% 到 14.40%。真实操作平均成功率从 30.00% 到 40.00%。直接 CLIP+VGGT 已到 69.37%，完整 Gaussian 统一到 71.29%，说明共享 3D 载体确实有增量价值；移除深度监督降到 66.28%，是最大单项损失。限制在于 RoboTwin 的 Random 成功率绝对值仍低，真实任务规模有限；教师深度和语义本身是伪标签，错误可能被蒸馏进 WAM；推理无额外开销的优势只在训练离线阶段可承担 Gaussian 拟合时成立。对机器人学习而言，这是把 3D/语义先验作为训练期表示约束而非推理期模块的实用方案。

## 来源链接

- 论文：https://arxiv.org/abs/2608.24714
- PDF：https://arxiv.org/pdf/2608.24714
