---
candidateId: "arxiv--2608.13924"
businessCandidateId: "arxiv--2608.13924"
date: "2026-08-18"
category: "Paper"
title: "BICPO-VLA: Behavior-Identified Continuation Preference Optimization for Smooth Asynchronous Vision-Language-Action Control"
authors:
  - "arxiv.org"
summary: "BICPO-VLA 将异步 VLA 控制拆成行为识别、Haar 结构化动作实现和交接条件选择三层，用于缓解指令歧义、状态漂移与新动作接管不兼容的问题。"
provisionalKeywords:
  - "视觉语言动作"
  - "机器人学习"
  - "具身智能"
keywords:
  - "视觉语言动作"
  - "机器人学习"
  - "具身智能"
sources:
  - name: "arxiv.org"
    url: "https://arxiv.org/abs/2608.13924v1"
previewImage: "/daily/2026-08-18/assets/arxiv--2608.13924/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 86
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.13924 -->
# BICPO-VLA: Behavior-Identified Continuation Preference Optimization for Smooth Asynchronous Vision-Language-Action Control

## 研究问题与贡献

异步 action chunking 会在请求、生成和真正交接之间留下时间差。论文指出该差距同时包含行为意图不确定、物理状态漂移以及新旧动作不兼容，而把它们压成一个端到端预测会掩盖应更新的因素。作者贡献是指令感知因果历史编码、顺序 Haar 子空间生成，以及滚动旧动作到真实交接状态后的 reference-relative Flow-DPO。

## 方法与系统

系统先用指令和任务进度选择命令相关视觉证据，并与动作历史融合以识别当前行为。随后用正交 Haar 变换把动作块拆成成对运动 scaffold 和局部残差，两阶段生成后可精确重构，减少原动作空间中的迭代细化。BICPO 在行为匹配的候选中比较交接质量，只调整剩余请求到交接的错配，不改变预期行为。

## 实验设置与数据

实验覆盖 CALVIN、RoboTwin 2.0 Hard 十个任务和六个真实机器人任务，并与 π0.5、B-VLA、OpenVLA-OFT、Legato、RTC 等比较。论文报告成功率、跳跃与趋势成本，并做 DPO、直接 SFT 和组件消融。

## 结果、限制与结论

RoboTwin 2.0 Hard 总体成功率为 80.6%，高于 B-VLA 75.8% 和 π0.5 66.8%；六个小样本真实任务平均 69.3%，高于 B-VLA 60.2%、π0.5 47.3% 和 OpenVLA-OFT 33.3%。LIBERO 中 DPO 使跳跃和趋势成本分别下降 21.3% 与 20.7%，成功率仍为 99.1%。限制在于任务与真实平台覆盖有限，跨部署条件的鲁棒性原文未充分报告。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.13924v1>
