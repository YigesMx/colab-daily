---
candidateId: "arxiv--2608.15897"
businessCandidateId: "arxiv--2608.15897"
date: "2026-08-19"
category: "Paper"
title: "Tactile Sim2Real without Tactile Simulation via Bottlenecked Latent Reconstruction"
authors: ["arxiv.org"]
summary: "SBLR 用仿真 PFC oracle 训练触觉策略，再以无配对随机触碰数据和瓶颈潜变量重建适配真实传感器，论文报告 GelSight Mini 与 DIGIT 上 85-97.5% 零样本硬件成功率。"
provisionalKeywords: ["触觉感知", "sim-to-real", "强化学习", "机器人操作"]
keywords: ["机器人操作", "机器人学习", "触觉感知"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.15897v1"}]
previewImage: "/daily/2026-08-19/assets/arxiv--2608.15897/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 7
groupScore: 83
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.15897 -->
# SBLR：无需触觉仿真的瓶颈潜变量重建触觉 Sim2Real

## 研究问题与贡献

论文研究接触密集机器人任务的零样本 sim-to-real。触觉传感器种类多、更新快，为每种传感器建立高保真物理仿真需要领域知识，且近似误差会降低策略迁移性能。已有做法常依赖传感器专用仿真和大量域随机化，可能抹去对精密操作重要的细粒度接触信息。

作者提出 Sim2Real via Bottlenecked Latent Reconstruction（SBLR）：在仿真中只用天然可得的 oracle 传感器训练策略，再通过无配对随机交互数据把真实传感器潜表示映射到 oracle 潜空间。论文报告，在 Peg Insertion 和 Gear Meshing 任务上，GelSight Mini 与 DIGIT 均可零-shot 达到 85-97.5% 成功率，并超过物理触觉仿真基线 7.5-15 个百分点。

## 方法与系统

oracle 传感器采用 Point Force Composition（PFC），包含物体和指尖全点云以及指尖接触力，能在多数模拟器中直接构造且信息不少于真实触觉。点云用 Point-MAE 编码，力用自编码器编码，二者拼接为 PFC 潜表示；真实触觉图像用 MAE 编码。仿真和真实各收集固定物体上的自动随机触碰数据，不要求同一接触成对出现。

对齐模块使用两个 rectified flow 网络：一个把 oracle 潜表示映射到估计的真实潜表示，删去真实传感器看不到的信息；另一个再从估计真实潜表示重建 oracle 潜表示。策略训练分两阶段：第一阶段直接在仿真 PFC 潜表示上做 RL；第二阶段用瓶颈潜变量重建做轻量 RL 适配，使策略面对真实传感器造成的信息损失仍能稳定执行。部署时只用真实触觉，编码后经 `real → oracle` 转换网络输入冻结策略。

## 实验设置与数据

仿真使用 Isaac Lab 和 Factory 环境，包含 Peg Insertion、Gear Meshing 和 Nut Threading 三个任务；对象初始位姿、机器人初始位姿和固定配合件位姿均随机化。仿真到 proxy-real 实验把 PFC 与 TacSL 渲染的触觉图像对齐，用 256 episode 评估，比较离散接触位置、最优传输、无触觉、去掉第二阶段 RL 的消融以及图像/PFC oracle。

真实硬件使用 3D 打印的 Peg Insertion 和 Gear Meshing 资产，并在 GelSight Mini 与 DIGIT 两个传感器上评估，每设置 40 episode。每个任务和传感器的对齐数据包含 4,096 条仿真 PFC episode 和 256 条真实触觉 episode；真实随机触碰采集约 40 分钟且无需人工遥操作。物理基线为经过 Taxim 校准和图像增强的 TacSL。

## 结果、限制与结论

论文报告，proxy-real 环境中 SBLR 在三个任务平均成功率为 87.4%、86.5% 和 75.9%，接近 PFC oracle 的 88.5%、88.2% 和 93.4%，明显高于离散接触位置和最优传输基线。真实硬件上，SBLR 在 GelSight Mini 的插销/齿轮任务为 92.5%/97.5%，在 DIGIT 上为 92.5%/85.0%；TacSL 分别为 77.5%/82.5% 和 77.5%/77.5%。去掉第二阶段 RL 后性能普遍下降，DIGIT 上下降更大，说明信息瓶颈适配对低分辨率、较硬传感器尤其重要。

论文明确的限制包括：方法主要处理传感器模态差距，而不是完整 sim-to-real 动力学差距；随机交互数据可能无法覆盖高精度任务在推理时真正需要的接触；真实实验只用单侧指尖触觉。本文分析认为，该证据支持“oracle + 潜空间瓶颈”作为传感器专用仿真的替代路线，但 Nut Threading 的 proxy-real 差距和固定物体随机触碰协议说明，接触覆盖仍是开放问题。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.15897v1)

