---
candidateId: "arxiv--2608.25308"
businessCandidateId: "arxiv--2608.25308"
date: "2026-08-28"
category: Paper
title: "V-Link: Recovering Lost Visual Representations in Action DiT for Vision-Language-Action Models"
authors: ["arxiv.org"]
summary: "V-Link诊断出GR00T N1.6从VLM到Action DiT的视觉表征可达性瓶颈，用空间与语义查询以及非对称注入把三维几何和二维语义重新送入动作生成，显著提升仿真与真实人形任务。"
provisionalKeywords: ["视觉语言动作模型", "空间表征", "机器人操作"]
keywords: ["视觉语言动作模型", "空间表征", "机器人操作"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.25308v1"}
previewImage: "/daily/2026-08-28/assets/arxiv--2608.25308/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 93
scoreScale: "paper-v2"
emphasis: true
---

# V-Link: Recovering Lost Visual Representations in Action DiT for Vision-Language-Action Models

## 研究问题与贡献

**V-Link: Recovering Lost Visual Representations in Action DiT for Vision-Language-Action Models** 的一句话结论是：双系统VLA的问题不只在VLM表征不够强，而在最终层VL-to-A迁移后Action DiT难以访问三维几何与二维语义。作者用冻结特征加轻量深度/分割头的诊断协议发现，GR00T N1.6的Action DiT特征深度MAE从VLM特征的0.015升至0.071，分割mIoU从0.665降至0.290。V-Link的贡献是学习Spatial与Semantic Queries，并通过非对称注意力把两类表征注入Action DiT，推理时不需要深度或分割标注。

## 方法与系统

系统基于GR00T N1.6 3B。Spatial Queries由约2.3M参数的深度头监督，深度损失结合平滑L1、近场相对误差和top-k困难patch；Semantic Queries由分割头监督，使用交叉熵与Dice。两个查询集合在VLM中使用隔离因果掩码独立聚合视觉与文本线索。注入阶段，机器人状态与噪声动作token先并行交叉注意VLM图像token和Semantic Queries，再与Spatial Queries交叉注意；语义通路有可学习门控，空间通路形成强制几何条件。辅助头只在训练期使用，总目标为动作流匹配损失加深度与分割辅助损失。

## 实验设置与数据

仿真评测使用LIBERO、LIBERO-Plus和RoboTwin 2.0。LIBERO与LIBERO-Plus按官方协议训练和零样本评测；RoboTwin选取移动、放置与接触共6个任务，每任务50条演示，共300条。真实平台为AGIBOT A3 Ultra，自主开机与关机各收集100条遥操作演示，各评测50次连续试验。训练用4张H100，冻结语言与视觉主干，VLM用rank-128 LoRA；训练期深度由Lingbot-Depth补全，分割伪标签由GroundingDINO与SAM3生成，推理时移除辅助头和伪标签。

## 结果、限制与结论

论文报告V-Link在LIBERO平均99.3%，比GR00T N1.6高1.9个百分点，LIBERO-Long提升5.1个百分点；LIBERO-Plus总体75.0%，比基线高31.2个百分点，其中Noise提升60.4、Language提升47.3、Lighting提升30.6。RoboTwin平均56.8%，比基线高18.8。真实开机/关机成功率分别为98%/94%，基线为78%/70%；额外推理延迟1.58ms，从43.21ms到44.79ms。消融显示单加Spatial Query为51.2%、单加Semantic Query为47.8%，两者合为56.8%；去掉任务监督或注入分别降至40.3%和39.8%。限制在于真实训练依赖补全深度与自动分割伪标签，真实验证只有一个人形平台和两个任务，LIBERO本身接近饱和，且论文未给出不同机器人或更高噪声现场的失败分析。未知项：跨机器迁移、长期运行稳定性和伪标签错误的影响幅度未验证。

## 来源链接

- [arXiv论文](https://arxiv.org/abs/2608.25308v1)
