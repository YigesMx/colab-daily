---
candidateId: "arxiv--2608.21204"
businessCandidateId: "arxiv--2608.21204"
date: "2026-08-25"
category: "Paper"
title: "Q-Planning：冻结大策略，只训练Q函数让机器人从失败自改进"
authors: ["arxiv.org"]
summary: "Q-Planning 保持十亿级 BC/VLA 策略冻结，用较小的 off-policy Q 吸收成功与失败 rollout；10轮自改进将 LIBERO-10 从 93% 提到 99%，RoboTwin 从 83.8% 提到 91.4%。"
provisionalKeywords: ["机器人操作", "具身智能", "运动控制"]
keywords: ["机器人操作", "具身智能", "运动控制"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.21204v1"}]
previewImage: "/daily/2026-08-25/assets/arxiv--2608.21204/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 89
scoreScale: "paper-v2"
emphasis: true
---
# Q-Planning：冻结大策略，只训练Q函数让机器人从失败自改进

## 研究问题与贡献

行为克隆让机器人策略学会成功示范，但策略失败后，失败状态本身不能被重新用于训练，因为标准模仿目标只会鼓励重复示范动作。强化学习微调能利用失败，却难以稳定作用在多十亿参数 VLA 策略上。

论文提出 Q-Planning：保留冻结的行为克隆/VLA 策略作为动作提议分布，训练一个较小的 off-policy Q 函数为其加权，并把部署中的成功和失败轨迹都写回 replay buffer，仅更新 Q 函数。这样策略本体不被破坏，失败信号也不会直接污染动作生成。

## 方法与系统

每一步从冻结策略采样多个动作块，用 Q 函数打分并做加权平均；在线自改进循环按任务收集 rollout，将完整轨迹加入 replay buffer，然后仅对 Q 函数做梯度更新。作者使用流匹配动作块的多峰采样，避免 MPPI 式手工噪声和超参数。

系统关键在于责任分离：BC 策略提供可行动作分布，Q 函数估计状态动作价值并吸收失败。作者报告 Q 函数约 1B 参数，显著小于冻结策略，因而每轮自改进成本低于全策略梯度更新。

## 实验设置与数据

仿真实验覆盖 LIBERO 四个套件、LIBERO-10 和 47 个 RoboTwin 双臂任务，每个任务 20 个 episode；真实实验为两个接触丰富的双臂任务。FastWAM 权重全程冻结，Q 凝始只用与 BC 相同的成功示范训练，不额外加入人工数据。作者在 4 张 H200 上完成 Q 预训练，并报告 L40S 上的规划延迟。本次 refine 已读取 PDF、TeX 和图 1。

## 结果、限制与结论

论文报告，10 轮 Q-only 自改进把 LIBERO-Spatial 从 91.5% 提到 98.5%，LIBERO-10 从 93% 提到 99%，RoboTwin 从 83.8% 提到 91.4%，五个基准平均从 92.1% 提到 97.6%。在相同在线数据预算下，Best-of-N 停在 95%，Filtered SFT 停在 93.5%，IBRL、DSRL 和 DAWR 不稳定或低于冻结 BC。两个真实双臂任务的纯视觉成功率也由 50% 提升到 90%，50% 提升到 70%。

限制在于该方法仍需要部署 rollout 和 Q 函数训练数据；论文验证集中在 FastWAM 与特定操作平台，Q 加权对其他 VLA 架构、安全约束和高维力控的作用仍待验证。作者也没有宣称解决探索问题，而是聚焦把已部署失败转化为价值学习信号。

## 来源链接

- 论文：https://arxiv.org/abs/2608.21204
- PDF：https://arxiv.org/pdf/2608.21204
- arXiv 源码：https://arxiv.org/e-print/2608.21204
