---
candidateId: "arxiv--2608.02834"
date: "2026-08-06"
rank: 14
title: "Biconvex Optimization for Smooth Minimum-Time Trajectories around Convex Obstacles"
authors:
  - "Peter Werner"
  - "Tobia Marcucci"
  - "Daniela Rus"
summary: "该方法把带任意阶导数约束的最短时间避障规划转为双凸优化，通过时变分离平面处理碰撞并改善坏初始化。"
keywords:
  - "任务规划"
  - "机器人操作"
  - "三维几何"
score: 74
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.02834v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.02834v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.02834/preview-main.png"
---

## 核心内容

最短时间轨迹规划需要同时处理时间目标、平滑性、速度/加速度等导数约束和障碍物碰撞。论文通过变量变换联合凸化时间目标与导数约束，再用只对当前碰撞障碍添加的时变分离平面形成可交替求解的双凸问题。

## 关键技术与数据

算法交替计算障碍物的最大间隔分离平面和轨迹变量，允许轨迹跨越障碍绕行并逃离部分局部极小。方法从简单无碰撞多边形曲线开始，提供收敛和 anytime 属性。实验包括无人机导航与双臂 bin unloading，比较分解式运动规划器以及不同初始化。

## 结果与结论

作者报告在无人机导航和双臂卸料任务中获得高质量轨迹，计算时间与先进分解式规划器相当，并对坏初始化更稳健。论文的优势是优化约束和初始化鲁棒性，而非学习策略；实体部署中的模型误差、动态障碍和更高维碰撞几何仍是本文未覆盖的边界。

## 来源链接

- https://arxiv.org/pdf/2608.02834v1
- https://arxiv.org/abs/2608.02834v1
