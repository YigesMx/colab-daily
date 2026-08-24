---
candidateId: "arxiv--2608.20948"
businessCandidateId: "arxiv--2608.20948"
date: "2026-08-25"
category: "Paper"
title: "Neural-Primitive：1.5MiB端到端局部规划器实现毫秒级自主飞行"
authors: ["arxiv.org"]
summary: "Neural-Primitive 用模仿学习从离线 primitive 策略直接输出多项式轨迹，仿真平均规划时间 0.68-0.70ms，比基线快7-60倍；真实森林飞行平均板载规划时间 3.68ms，最高速度 6.10m/s。"
provisionalKeywords: ["自主飞行", "运动控制", "具身智能"]
keywords: ["自主飞行", "运动控制", "具身智能"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.20948v1"}]
previewImage: "/daily/2026-08-25/assets/arxiv--2608.20948/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 8
groupScore: 81
scoreScale: "paper-v2"
emphasis: false
---
# Neural-Primitive：1.5MiB端到端局部规划器实现毫秒级自主飞行

## 研究问题与贡献

未知杂乱环境中的机载轨迹生成需要同时满足计算、质量和内存约束。传统层次化规划依赖地图、走廊或后端优化，学习法也可能遇到可微规划结构复杂和加速度不连续的问题。论文提出 Neural-Primitive，一个只有 1.5MiB 的端到端局部规划器。

贡献包括离线 primitive 策略嵌入的数据采集框架、点云预处理和领域随机化、直接输出多项式系数的网络，以及仿真与真实零样本飞行验证。

## 方法与系统

训练数据全部来自仿真。系统先调用 QP 生成安全、动态可行且任务导向的 primitive，将成功 replanning 步骤的系数作为监督。网络输入点云和状态，直接输出多项式轨迹系数，无需在线 ESDF、网格地图或 BVP 后端。

方法将避障和目标推进解耦：先筛除碰撞 primitive，再在安全集合中选择更直接的轨迹，避免把所有目标放入一个强耦合优化。点云预处理和领域随机化用于提升密度和噪声鲁棒性。

## 实验设置与数据

仿真对比 Fast、Ego、Super 和 Yopo，在稀疏与密集场景各 100 次，最大速度 4m/s、碰撞半径 0.15m、到达容差 1m。泛化实验使用真实森林点云和 Perlin noise 3D 障碍地图，各 150 次。真实实验覆盖非均匀森林、厚植被和室内多目标场景；森林密度约 1/6 trees/m²，最窄通道小于 0.8m。本次 refine 已读取 PDF、TeX、系统图和统计结果。

## 结果、限制与结论

论文报告该方法仿真平均规划时间为稀疏 0.70ms、密集 0.68ms，比基线快约 7 到 60 倍；密集环境成功率达 0.97。泛化地图成功率分别为 0.907 和 0.833。真实森林中无人机 12 秒无碰撞飞行 60m，最高速度 6.10m/s；板载规划平均 3.68ms，中位数 3.43ms。

限制是框架主要面向静态障碍，对高度动态障碍和局部陷阱、U 形死路仍困难；作为局部规划器，它依赖瞬时有限视场，不能替代全局探索策略。真实实验数量和天气条件也未覆盖全部外场部署风险。

## 来源链接

- 论文：https://arxiv.org/abs/2608.20948
- PDF：https://arxiv.org/pdf/2608.20948
- arXiv 源码：https://arxiv.org/e-print/2608.20948
