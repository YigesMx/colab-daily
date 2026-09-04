---
candidateId: "arxiv--2609.03715"
date: "2026-09-05"
category: Paper
title: "MINERVA：LIBERO 到底需要多大的操作策略？"
authors: ["arxiv.org"]
summary: "MINERVA 刻意把视觉-动作策略缩到最小再压垮它：0.54M 参数策略在四个标准 LIBERO 套件 2,000 次 rollout 上平均成功率 95.1%，仅比参数量大 7,700 倍的 LeRobot π0.5 低 2.4 点；性能在约 1M 参数饱和、低于 0.25M 崩溃；广泛扫描中只有动作块长度与视觉容量持续超过 ±1 点种子波动带，flow matching 相对 L1 回归无可检优势且慢至 3.8 倍；task-ID 置换探针显示指令条件主要是在已记忆任务中选择，LIBERO-Plus 扰动下性能降至 46-56%。"
keywords:
  - VLA 与机器人操作
  - 模型评测与鲁棒性
sources:
  - { "name": "arxiv.org", "url": "https://arxiv.org/abs/2609.03715v1" }
previewImage: "/daily/2026-09-05/assets/arxiv--2609.03715/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 7
groupScore: 79.0
scoreScale: "paper-v2"
emphasis: false
---
# MINERVA：LIBERO 到底需要多大的操作策略？

**一句话结论**：一个 0.54M 参数的极简策略就能在 LIBERO 上拿到 95.1% 成功率——这篇论文对「VLA 评测以大为尊」的现状做了一次系统性的容量测量，结论对部署成本与基准解读都有直接含义。

## 研究问题与贡献

十亿参数级 VLA 统治 LIBERO 榜单，但没人测过这个基准实际需要多大容量。对部署而言这是关键量：任务集固定后，能解决任务的最小策略决定部署成本（能否上边缘设备）。本文构建 MINERVA（MINimal Efficient Robotic Vision-Action policy）家族，一路缩小直到崩溃，并系统扫描架构/训练/推理选择，量化「哪些选择真正影响成绩」。

## 方法与系统

MINERVA 是刻意极简的视觉运动策略族：标准视觉编码 + 紧凑策略头，无大语言骨干。评估协议严格：四个标准 LIBERO 套件共 2,000 次 rollout 的平均成功率；与 LeRobot π0.5 的报告值对照；跨三个随机种子的 flow matching vs L1 回归对照；task-ID 置换探针检验指令条件机制；LIBERO-Plus 扰动集测鲁棒性。

## 实验设置与数据

在广泛架构、训练与推理扫描中，以 ±1 点训练种子波动带为噪声基准，只有超过该带的选择才被视为有真实效应。0.54M 策略在笔记本 CPU 上每块 5-9ms 重规划，比 SmolVLA 快 113 倍、比 π0.5 快 1,400 倍且无需 GPU。

## 结果、限制与结论

论文报告：0.54M 达 95.1%（低于 π0.5 报告值 2.4 点，参数量 1/7,700）；约 1M 饱和、0.25M 以下崩溃；仅动作块长度与视觉容量稳定超出噪声带；flow matching 无可检优势且回归快 3.8 倍；task-ID 置换使成功率降至接近随机，说明标准 LIBERO 指令条件主要是在记忆任务中选择；LIBERO-90 上同配方达 94.6%，但 LIBERO-Plus 扰动降至 46-56%，光度扰动鲁棒性近零。这些结果提示：LIBERO 高分不能等同于通用操作能力，小模型足以复现基准内的记忆化行为，真实鲁棒性需要扰动评测检验。局限：结论限于 LIBERO 家族，向真实任务的外推未验证。

## 来源链接

- 论文原文：https://arxiv.org/abs/2609.03715
- HTML 全文：https://arxiv.org/html/2609.03715v1
