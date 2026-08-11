---
schemaVersion: 2
candidateId: "arxiv--2608.07045"
date: "2026-08-11"
title: "C2Dex: Contact-Consistent Reconstruction and Retargeting for Dexterous Manipulation from Monocular Video"
authors:
  - "Jie Ren"
  - "Zhehao Jiang"
  - "Yinhong Yang"
  - "Haorui Jia"
  - "Han Jiang"
  - "Ben Li"
  - "Yao Yao"
  - "Cheng Lin"
  - "Qiu Shen"
  - "Zhenshan Bing"
  - "Xiao-Xiao Long"
  - "Xun Cao"
summary: "C2Dex 用规范物体坐标中的稳定接触作为视频到灵巧操作的共享接口，先约束单目手物交互重建，再在跨手型迁移中保留局部交互几何，并用仿真残差强化学习修正轨迹。论文在 DexYCB 和 TACO 上报告了 57.78% 和 26.67% 的宽松判定成功率。"
keywords:
  - "灵巧手物操作"
  - "闭环机器人控制"
category: "Paper"
ratingTrack: "paper"
groupRank: 1
groupScore: 89
scoreScale: "paper-v2"
sources:
  - name: "arXiv full HTML"
    url: "https://arxiv.org/html/2608.07045v1"
previewImage: null
---

## 研究问题与贡献

论文处理的是从单目人类视频生成可执行灵巧手操作轨迹的问题。直接采集灵巧机器人示范成本高，而单目视频容易出现遮挡、姿态漂移和深度歧义导致的接触抖动、手物穿透；人手与机器人手的形态差异又会使普通关键点重定向丢失任务关键接触。C2Dex 的核心贡献是把物体侧接触位置作为跨视频帧、跨手型的共享交互表示：它在规范物体空间聚合逐帧接触观测，得到稳定接触，再同时用于手物重建约束和机器人手的迁移目标。该问题与机器人操作和从人类视频学习灵巧操作直接相关。

## 方法与系统

系统先用 Dyn-HaMR 估计逐帧 MANO 手状态，用 SAM 3D 重建规范物体网格，并用 ProxyPose 估计物体位姿。候选接触由手、物体轮廓重叠产生，再用手/物体表面法向兼容性过滤；逐帧接触点变换到规范物体坐标后，按相邻姿态变化划分局部稳定时间段，并在每段内用 DBSCAN 聚类，取主簇 medoid 作为稳定接触。

重建阶段最小化稳定接触损失、物体 SDF 穿透损失和正则项，使手部接触在时间段内贴近物体侧目标。迁移阶段从关键点重定向开始，同时优化稳定接触、Laplacian 交互坐标、穿透和轨迹平滑；Laplacian 图由人手关键点和规范物体点构成，目标是保留局部手物几何而不是强行保持绝对手部位置。最后在 Isaac Gym 中用 PPO 训练残差策略，奖励包含物体运动、手部跟踪、接触一致性和时间平滑；残差策略只生成离线可执行轨迹，部署时不需要在线视觉反馈。

## 实验设置与数据

端到端实验在 DexYCB 的 45 条序列和 TACO 的 30 条序列上，与 Do As I Do、DexImit 比较。成功条件是位置 ATE 不超过 0.10 m，旋转 ATE 在宽松判定下不超过 1.00 rad、严格判定下不超过 0.50 rad；不完整或无效轨迹计为失败。重建实验在 DexYCB 上用 1,000 个仿真步的物体质心位移 SD、MPJPE、P-MPJPE、Chamfer distance 和 F@5 评估，并与 HOLD、DiffHOI、BIGS 比较。重定向实验固定同一真实人手-物体轨迹和 Inspire 手型，与 DexPilot、AnyTeleop、GeoRT 比较接触精度、法向对齐和最大穿透。真实硬件实验使用 Unitree G1 与 Inspire 灵巧手，开放环回放作者自录的 24 段视频，覆盖 8 个接触丰富任务；原文将其定义为定性物理可行性研究。

## 结果、限制与结论

作者报告的宽松端到端成功率为 DexYCB 57.78%（26/45）、TACO 26.67%（8/30），严格判定分别为 55.56%（25/45）和 23.33%（7/30）；最强基线最高为 17.78% 和 10.00%。DexYCB 重建中，C2Dex 的 SD 为 1.57 cm，P-MPJPE 为 9.27 mm；重定向中，DexYCB 接触精度、法向对齐和最大穿透分别为 11.87 mm、18.13° 和 3.99 mm。去掉跨帧接触一致性后，DexYCB 宽松成功率降至 17.78%，TACO 降至 10.00%，支持稳定接触表示对端到端结果的重要性。真实回放在受控开放环条件下复现了主要动作和接触转换，但没有提供定量成功率。

限制包括严重遮挡、极端视角和复杂几何下交互线索可能不可靠，物体位姿漂移会污染规范空间聚合，以及当前方法不支持涉及频繁接触切换的复杂手内操作（如 finger gaiting）。因此，报告结果支持视频到灵巧操作的可行性和接触保持收益，但不能外推到软物体、强滑移或未评估的复杂手内操作。

## 来源链接

- 原始论文全文：https://arxiv.org/abs/2608.07045v1
- 作者项目页：https://k-jie.github.io/C2Dex/
