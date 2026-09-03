---
candidateId: "arxiv--2609.01938"
date: "2026-09-04"
category: Paper
title: "DemoMimic：一次人类演示学会多物体灵巧操作"
authors: ["arxiv.org"]
summary: "DemoMimic 用局部接触几何中心的奖励在仿真中做残差 RL，从单次人类演示生成策略，真机上跨 16 种物体、4 类任务、2 种灵巧手取得 71% 成功率，且 sim-to-real 掉点最小。"
keywords:
  - 机器人操作
  - 强化学习
  - 具身智能
sources:
  - { "name": "arxiv.org", "url": "https://arxiv.org/abs/2609.01938v1" }
previewImage: "/daily/2026-09-04/assets/arxiv--2609.01938/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 83.0
scoreScale: "paper-v2"
emphasis: false
---

# DemoMimic：一次人类演示学会多物体灵巧操作

多指灵巧手有望达到人类级灵巧性，但大规模灵巧手数据采集极难。从人类演示学习是可扩展替代方案，但现有 sim-to-real RL 方法或缺少精确接触激励、或对未见物体泛化差。DemoMimic（Dexterous Motion Mimic）针对这两点给出方案。

## 研究问题与贡献

问题：如何用一次人类演示，让灵巧手策略跨物体形状、尺度、质量与摩擦泛化并在真机稳定运行。贡献：以接触点局部几何为中心的策略表征；显式激励精确接触的仿真奖励设计；以及小 sim-to-real 落差的部署流程。

## 方法与系统

训练分三阶段：仿真中的残差 RL 围绕演示轨迹优化接触-centric 奖励（奖励直接作用于接触点局部几何，而非全局物体位姿）；随后进行模仿学习策略训练（视觉策略蒸馏）；推理时策略只依赖机载相机。方法不依赖物体位姿估计，也不做开环轨迹回放，这是与既有真机部署路线的关键区别。

## 实验设置与数据

硬件为两台 Franka 臂，分别装配 Tesollo DF-5F 与 Sharpa 五指灵巧手，腕部立体相机加双臂间单目自我中心相机。评测覆盖 16 种独特物体、4 类任务、2 种手 embodiments；真机消融与基线比较使用相同物体集。

## 结果、限制与结论

论文报告：真机整体成功率 71%；接触-centric 奖励设计的 sim-to-real 掉点为对比方法中最小。限制：成功率仍留有约三成失败空间，长时程多阶段任务未覆盖；对高动态抛掷类技能原文未报告；接触奖励依赖仿真接触建模质量。结论：在「少样本灵巧操作泛化」这一核心难题上给出了完整、可复验的真机证据链，是本期操作方向最强工作之一。

## 来源链接

- 论文页：https://arxiv.org/abs/2609.01938
- HTML 全文：https://arxiv.org/html/2609.01938
