---
candidateId: "paper--arxiv--2608.19066"
businessCandidateId: "paper--arxiv--2608.19066"
date: "2026-08-21"
category: "Paper"
title: "GS-VLA: Plug-and-Play Viewpoint Canonicalization for Frozen VLA Policies via Gaussian Splatting"
authors: ["arxiv.org"]
summary: "GS-VLA 用约 4M 参数的三维高斯视角规范化模块前置到冻结 VLA 策略，在相机位姿变化时无需重训即可恢复大部分操作成功率。"
provisionalKeywords: ["VLA 模型", "跨形态泛化", "机器人操作"]
keywords: ["VLA 模型", "跨形态泛化", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.19066v1"}]
previewImage: "/daily/2026-08-21/assets/paper--arxiv--2608.19066/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 87
scoreScale: "paper-v2"
emphasis: true
---
# GS-VLA: Plug-and-Play Viewpoint Canonicalization for Frozen VLA Policies via Gaussian Splatting

## 研究问题与贡献

论文针对 VLA 操作策略对训练相机配置的强依赖提出解决路径。作者观察到，LIBERO 上小幅相机安装位移可把成功率从约 90% 降到最差约 10%。GS-VLA 的贡献是把视角变化转化为局部新视角合成问题，用一个可插拔模块规范化观测，而不修改冻结策略权重。

## 方法与系统

系统前置一个约 4M 参数的三维高斯 canonicalizer。在相机扰动限定在工作空间附近小范围内的 locality 假设下，视角规范化被拆成场景无关、策略无关的补遮挡问题；模块生成接近训练视角的观测后交给原 VLA 执行。相较大规模微调或生成式数据增强，该方法避免重训和灾难性遗忘。

## 实验设置与数据

论文在 LIBERO 相关任务上评估三类泛化轴：不同 VLA 策略、未见任务套件以及不同扰动尺度，并测试平移和旋转扰动及位姿校准噪声。基线包括原始冻结策略、微调或数据增强路径。

## 结果、限制与结论

论文报告单一 checkpoint 可跨策略、任务与扰动尺度恢复大部分因视角位移损失的性能，且无需策略重训。该方法把部署期相机变化从数据问题转为观测规范化问题。限制是 locality 假设要求扰动有界，极端大位移、动态场景与更复杂遮挡仍需进一步验证。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.19066)
- [官方 PDF](https://arxiv.org/pdf/2608.19066)

![preview](/daily/2026-08-21/assets/paper--arxiv--2608.19066/preview.png)
