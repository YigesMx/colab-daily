---
candidateId: "arxiv--2608.14047"
businessCandidateId: "arxiv--2608.14047"
date: "2026-08-18"
category: "Paper"
title: "Evolve Vision-Language-Action Model into an Agent with On-the-fly Tool-use"
authors:
  - "arxiv.org"
summary: "ART 把 VLA 模型改造成可即时调用视觉、可供性和本体增强工具的智能体，用 30K 工具轨迹降低新场景数据依赖并保留连续动作能力。"
provisionalKeywords:
  - "视觉语言动作"
  - "多智能体系统"
  - "模型与推理"
keywords:
  - "视觉语言动作"
  - "多智能体系统"
  - "模型与推理"
sources:
  - name: "arxiv.org"
    url: "https://arxiv.org/abs/2608.14047v1"
previewImage: "/daily/2026-08-18/assets/arxiv--2608.14047/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 84
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.14047 -->
# Evolve Vision-Language-Action Model into an Agent with On-the-fly Tool-use

## 研究问题与贡献

端到端 VLA 在已训练任务上动作精确，但新任务和新扰动需要昂贵后训练；完全离散工具系统又会牺牲连续控制。论文提出 Agentic Robot with Tool-use，让 VLA 在低层视觉、高层可供性和本体增强模块间动态调用工具。

## 方法与系统

作者从既有 VLA 数据构造 30K Action-with-Tool 轨迹，生成任务、工具链和长轨迹推理。训练采用两阶段 LoRA，把工具推理与核心 VLA 能力解耦，以降低灾难遗忘。系统可在运行中调用视觉增强、深度、检测、相机旋转或位置重置等工具。

## 实验设置与数据

模型在 8×A800 上以 batch size 24 微调一个 epoch。评估覆盖 LIBERO 视觉、可供性和本体扰动，Astribot S1 双臂机器人，以及黑暗新视角抓放等开放或闭环真实任务，并与 OpenVLA、π0、π0-FAST、ECoT 和同消耗后训练 FAST 比较。

## 结果、限制与结论

ART-FAST 在 LIBERO 泛化任务平均 75%、Astribot S1 平均 62%，高于 π0-FAST 43% 和 π0 37%。相对同消耗 FAST，视觉、本体和可供性任务分别达到 81%/62%/82% 对 71%/61%/65%；相对 ECoT，含视觉扰动的可供性任务为 72% 对 12%。限制是依赖工具 API 与工具链质量，真实平台覆盖仍有限。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.14047v1>
