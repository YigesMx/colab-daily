---
candidateId: "arxiv--2608.16837"
businessCandidateId: "arxiv--2608.16837"
date: "2026-08-19"
category: "Paper"
title: "HAF: Adapting Generalist VLAs to Humanoid Whole-Body Loco-manipulation via Hierarchical Action Flow and Spectral Latent RL"
authors: ["arxiv.org"]
summary: "HAF 用粗到细的分层动作流和冻结 VLA 上的低维谱潜变量 RL 适配人形全身操作，论文报告七个真实任务平均归一化分数从最强基线 53.3% 提升到 70.5%。"
provisionalKeywords: ["人形机器人", "全身操作", "动作流", "强化学习"]
keywords: ["机器人学习", "人形机器人"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.16837v1"}]
previewImage: "/daily/2026-08-19/assets/arxiv--2608.16837/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 86
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.16837 -->
# HAF：分层动作流与谱潜变量强化学习适配人形全身 loco-manipulation

## 研究问题与贡献

论文研究如何把通用 VLA 迁移到人形机器人全身移动操作。直接微调整个高维 VLA 计算昂贵，也可能破坏预训练先验并产生不安全动作；只做末端残差修正又难以同时协调腿部、腰部、头部和双臂。

HAF 的贡献包括：HAF-VLA 用符合人形运动学依赖的分层动作流生成全身动作；HAF-Steer 在冻结 VLA backbone 上，用 DCT 压缩的低维谱潜空间进行离线到在线强化学习；论文在 TienKung 2.0 和 3.0 两个平台上验证七个真实家庭任务。

## 方法与系统

HAF-VLA 把每步动作分解为移动/技能模式、头部朝向、腰部姿态和双臂操作四组，并按“移动与头部 → 加腰部 → 加双臂”的嵌套集合逐步扩大活跃动作空间。三个阶段共享同一个动作流专家，视觉-语言前缀 KV cache 只计算一次并被复用；前一阶段输出被重新编码为动作 KV cache，为后续阶段提供粗运动上下文。训练使用阶段掩码的 flow matching 目标和教师强制，推理时只执行第三阶段的最终全身动作块。

HAF-Steer 先通过 flow reversal 把演示动作映射回初始噪声，再用 DCT 保留低频时间模式并压缩探索维度。策略在该谱系数空间中学习，经冻结 flow 生成器解码为动作块，避免高维原始动作空间中的不稳定高频探索。该模块可与 vanilla π0.5 或 HAF-VLA 组合，并在离线行为克隆初始化后使用混合离线-在线 SAC 优化。

## 实验设置与数据

作者用同构遥操作采集每个家庭任务 120 条轨迹：主臂控制双臂，手柄控制腿部和腰部，IMU 控制头部。任务包括装洗衣、取衣、整理桌面、搬篮子、收纳玩具、抛球和搬箱，均需导航、姿态调整、双臂操作或物体交互。由于二值成功率难以反映长序列部分进度，主指标为预定义里程碑的归一化任务分数，每方法和任务报告 10 次独立 rollout 平均值。

基线包括 ACT、π0.5、GR00T N1.7 和 Cosmos Policy。消融在装洗衣任务上比较全关节同时去噪、反向层级和增加去噪步数的 π0.5；泛化实验加入路径旁未知椅子和初始位置后移 20 cm；HAF-Steer 在目标桌位置偏移 30 cm 的分布内/外设置中比较基础模型、DSRL、Noise BC 和完整方法。

## 结果、限制与结论

论文报告，HAF-VLA 在七个任务上平均归一化分数为 70.5%，高于最强基线 π0.5 的 53.3%；箱体搬运 93.3%，抛球和玩具收纳分别为 56.7% 和 80.0%。装洗衣消融中，完整层级为 66.7%，全关节同时去噪 53.3%，臂优先层级 50.0%，30 步 vanilla π0.5 仅 20.0%，说明收益来自粗到细顺序而非单纯增加计算。未知椅子干扰下 HAF-VLA 为 40.0% 对 π0.5 的 26.7%，初始位置后移时为 43.3% 对 36.7%。HAF-Steer 的图表显示其在四个评估设置中均提升两个 backbone，且在多数设置取得最好或并列最好结果。

论文明确的限制是：三阶段去噪增加计算和部署延迟；谱潜变量 RL 仍受基础 VLA 先验限制，极端未知场景中的错误动作可能无法被修正。本文分析认为，该工作的证据集中在七个遥操作家庭任务和每任务 10 次评估，安全性和跨场景稳健性还需要更大规模验证；其最可迁移的启示是，把人形动作按运动学层级生成，并让在线探索发生在低频潜空间，可以同时保留通用先验和改善全身协调。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.16837v1)
- [官方项目页](https://grange007.github.io/HAF)

