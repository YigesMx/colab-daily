---
schemaVersion: 2
candidateId: "arxiv--2608.06833"
date: "2026-08-11"
title: "Unordered Landmark Visual Navigation"
authors:
  - "Hao Ren"
  - "Junzhe Zhu"
  - "Yihan Li"
  - "Zetong Bi"
  - "Le Zheng"
  - "Zhi Li"
  - "Yiqing Yuan"
  - "Zhaoliang Wan"
  - "Dizhe Zhang"
  - "Lu Qi"
  - "Hui Cheng"
summary: "ULVN 面向没有时间顺序、里程计或深度/LiDAR 的无序 RGB 图像目标导航，组合几何验证的拓扑建图、图上的置信传播定位和信念感知子目标搜索。论文在仿真与真实部署中报告了优于现有方法的结果，并给出约 95% 定位准确率与最高 71.9% 导航成功率。"
keywords:
  - "视觉导航系统"
  - "拓扑地图定位"
category: "Paper"
ratingTrack: "paper"
groupRank: 4
groupScore: 87
scoreScale: "paper-v2"
sources:
  - name: "arXiv TeX source archive"
    url: "https://arxiv.org/abs/2608.06833v1"
previewImage: null
---

## 研究问题与贡献

ULVN 研究图像目标导航在无序图像库条件下如何保持空间一致性。传统方法依赖有序视频、时间先验、里程计或深度/LiDAR；去掉这些条件后，感知混淆、错误图像关联和地图崩溃会累积。论文提出一个纯 RGB、无时间和里程计先验的统一框架，把建图、定位、规划连接成闭环，目标是让机器人可以消费众包或预录的无序图像。

## 方法与系统

RAVEL 先用全局图像检索召回候选，再用 LightGlue 等局部几何验证计算内点数，以数据驱动阈值过滤边，并用最大生成森林压缩为结构骨架；随后重新插入高权重强环路，以恢复替代路径和拓扑纠错。BPL 在图节点上维护位置信念，用最多 3 跳的累积可达矩阵作拓扑预测，观察似然由图像嵌入距离给出，并根据先验信念熵在预测和观察之间自适应融合。BASS 以最大化路径最弱边权的 widest-path 目标寻找子目标，执行中若定位偏离路径或到子目标的图距离超过 3，就重新规划。

## 实验设置与数据

仿真评估在 NVIDIA Isaac Sim 的 GRScenes 上进行，使用 10 个场景，均分为 home 和 commercial；CARLA 用于隔离 RAVEL/BPL 的感知条件实验。建图指标是边 Precision、Recall、F1、Accuracy，定位指标是 MAP 节点准确率，导航指标是 SR、SPL 和碰撞数。对比包含 ResNet-50、DINOv2、MegaLoc、ViNT、PlaceNav、JIST、NoMaD、Uni-Navid 和 UniGoal 等。真实部署使用 Diablo 轮式机器人、Azure Kinect 和 Jetson Orin。完整的每场景样本数量、随机种子和所有导航表格细节在当前读到的正文中未完整呈现，因此记为 not_reported。

## 结果、限制与结论

作者报告 RAVEL 在加入图结构约束后取得最高 F1，并在视觉扰动设置下 F1 下降 6.56%；BPL 在四个数据集和多种退化条件下平均定位准确率为 0.930 +/- 0.040，保持在 0.89 以上。关闭熵自适应融合会使定位准确率从 0.9549 降至 0.9057。导航中，ULVN 与 NoMaD 的最高成功率为 71.9%，改用基于 temporal distance 的定位后降至 59.6%；论文还报告仿真到真实的漂移恢复案例。

实验前提包括图像库具有足够视觉重叠、局部规划器能从图像产生低层速度、静态拓扑图适合当前场景。作者观察到定位约 95% 与导航约 71% 之间存在差距，主要来自局部规划器的障碍感知不足和轨迹振荡。对动态环境、图像重叠不足、移动底盘和未见传感器条件的量化泛化，原文未报告，不能将框架表述为普适导航保证。

## 来源链接

- 原始论文：https://arxiv.org/abs/2608.06833v1
