---
schemaVersion: 2
candidateId: "arxiv--2608.12063"
date: "2026-08-14"
category: "Paper"
ratingTrack: "paper"
groupRank: 8
groupScore: 86
scoreScale: "paper-v2"
title: "Learning Loco-Manipulation From SMPC Demonstrations With Sparse Offline-to-Online RL"
authors: ["Martin Schuck", "Maks Sorokin", "Simone Manni", "Duy Ta", "Angela P. Schoellig", "Marco Hutter", "Simon Le Cleac'h", "Jan Brüdigam"]
summary: "该方法用仿真中的采样式 MPC 自动生成大规模示范，再以稀疏奖励离线到在线强化学习训练 Spot 与 G1 的移动操作策略。"
provisionalKeywords: ["移动操作", "离线到在线强化学习", "模型预测控制", "稀疏奖励", "仿真到现实"]
keywords: ["移动操作", "离线到在线学习", "灵巧操作"]
sources:
  - name: "原始来源 1"
    url: "https://arxiv.org/pdf/2608.12063v1"
  - name: "原始来源 2"
    url: "https://export.arxiv.org/e-print/2608.12063v1"
  - name: "原始来源 3"
    url: "https://ar5iv.labs.arxiv.org/html/2608.12063"
previewImage: "/daily/2026-08-14/assets/arxiv--2608.12063/preview.png"
---

# Learning Loco-Manipulation From SMPC Demonstrations With Sparse Offline-to-Online RL

> 该方法用仿真中的采样式 MPC 自动生成大规模示范，再以稀疏奖励离线到在线强化学习训练 Spot 与 G1 的移动操作策略。

## 研究问题与贡献

移动与操作联合学习通常依赖耗时的密集奖励塑形。论文提出用可快速调参的 Sample-based MPC 在仿真中充当自动专家，先解决探索，再让 off-policy RL 只使用稀疏任务奖励，目标是把控制器示范转化为可超过教师且可 sim-to-real 的策略。

## 方法与系统

SMPC 生成离线轨迹并填充 replay buffer；TD3 类 off-policy learner 从离线数据启动，再逐步加入策略自身数据。训练期间按阈值 phase out 专家数据，避免长期受教师分布限制。高层学习策略与低层动态稳定控制器组合，使策略优化任务目标的同时维持腿式平台稳定。

## 实验设置与数据

任务覆盖装臂 Spot 的到达、箱体推动、轮胎扶正/移动等，以及 G1 人形的箱体操作；训练在仿真进行，随后部署到真实形态。论文围绕离线数据量、SMPC 样本数、专家数据占比、phase-out 阈值、奖励稀疏性和多模态行为做结构化消融，并报告多随机种子平均。具体所有任务的成功率和训练曲线见正文与扩展消融。

## 结果、限制与结论

作者报告策略可在稀疏奖励下学习复杂 loco-manipulation，并在若干任务上超过 SMPC 教师，最终成功部署到 Spot 和 G1。消融表明数据规模与质量需要随任务复杂度增长，过早或过晚移除专家数据都会损害学习。论文限制包括依赖仿真中的准确动力学与可用 SMPC 专家；低层控制器固定，难以适应任务特定物理扰动；真实部署任务数有限，碰撞安全、硬件磨损和长时间在线更新当前材料未报告。

## 来源链接

- [arXiv](https://arxiv.org/abs/2608.12063)
- [PDF](https://arxiv.org/pdf/2608.12063v1)
