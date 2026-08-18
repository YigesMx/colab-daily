---
candidateId: "arxiv--2608.14160"
businessCandidateId: "arxiv--2608.14160"
date: "2026-08-18"
category: "Paper"
title: "OccPlanner: Goal-Aware Occupancy-Conditioned Diffusion Planner for Pixel-Goal Navigation"
authors:
  - "arxiv.org"
summary: "OccPlanner 用像素目标、RGB-D 时序上下文和学习的局部三维占用特征条件化扩散轨迹生成，并引入 L3ROcc 从单目导航视频构造监督。"
provisionalKeywords:
  - "自主导航"
  - "世界模型"
  - "机器人学习"
keywords:
  - "自主导航"
  - "世界模型"
  - "机器人学习"
sources:
  - name: "arxiv.org"
    url: "https://arxiv.org/abs/2608.14160v1"
previewImage: "/daily/2026-08-18/assets/arxiv--2608.14160/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 7
groupScore: 82
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.14160 -->
# OccPlanner: Goal-Aware Occupancy-Conditioned Diffusion Planner for Pixel-Goal Navigation

## 研究问题与贡献

像素目标只指定相机视图中的位置，不提供度量深度和可通行性，使三维目标落地与无碰撞连续规划困难。论文贡献是 goal-aware occupancy-conditioned diffusion planner 与 L3ROcc 数据构造链。

## 方法与系统

L3ROcc 把单目 RGB 导航视频转化为机器人中心的可见性感知局部占用与轨迹监督。OccPlanner 先把像素目标映射到自我中心度量空间，再通过时序视觉上下文与局部占用特征两阶段条件化，生成连续障碍感知轨迹。

## 实验设置与数据

训练使用 InternData-N1，闭环评估覆盖 InternScenes 四个未见场景类别和两个目标距离范围；开环评估使用 1496 个 held-out 样本，并在 Unitree Go2 上做初步真实迁移。基线包含 NavDP 等局部规划方法。

## 结果、限制与结论

在 5–8m 设置中，四类平均成功率从 NavDP 20.81% 提升到 71.55%，cluttered-easy 与 cluttered-hard 分别为 86.20% 和 84.92%。消融显示 ego-goal reasoning 是最大单阶段增益，两阶段交互把 hard 成功率从 75.55% 提至 84.92% 并使 DTG 从 0.87m 降至 0.56m。限制是真实实验为静态室内开环，尚未闭环验证动态障碍与长时程导航。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.14160v1>
