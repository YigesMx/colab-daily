---
candidateId: "arxiv--2608.22278"
businessCandidateId: "arxiv--2608.22278"
date: "2026-08-26"
category: "Paper"
title: "DreamMimic: Learning Visuomotor Whole-Body Loco-Manipulation via World Model"
authors: ["arxiv.org"]
summary: "DreamMimic 利用世界模型预测潜变量和辅助状态头，把特权教师策略蒸馏为可部署的视觉全身 loco-manipulation 控制器。"
provisionalKeywords: ["具身智能", "机器人操作", "模型训练"]
keywords: ["具身智能", "机器人操作", "模型训练"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.22278v1"}]
previewImage: "/daily/2026-08-26/assets/arxiv--2608.22278/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 5
groupScore: 84
scoreScale: "paper-v2"
emphasis: false
---

# DreamMimic: Learning Visuomotor Whole-Body Loco-Manipulation via World Model

## 研究问题与贡献

论文处理人形机器人全身移动操作中的视觉策略蒸馏：高维动作、不连续接触和视觉部分可观测使单步模仿容易累积误差，直接从像素学习又难以探索。既有教师策略依赖真值物体位姿、接触和交互图，而这些信号部署时不可用。

DreamMimic 的贡献是把 Dreamer-style RSSM 从“规划器”改成预测表征和多步监督源，为视觉学生策略提供动作条件化的时序 latent；同时加入奖励、特权状态、接触和物体状态辅助预测，并用 Performance-Conditioned Guidance 根据教师/学生相对表现调节教师引导比例。论文在 OMOMO 和 BEHAVE 上做了系统消融，并给出 Unitree G1 与跨仿真器的定性实验。

## 方法与系统

特权教师可用完整仿真状态、交互图和接触信号，通过强化学习跟踪参考运动；学生只接收非特权本体感知、紧凑目标条件以及由深度和分割输入得到的 RSSM 特征。RSSM 编码视觉-本体感知历史，输出确定性 recurrent 状态、奖励预测、特权状态预测、接触预测和物体状态预测；重建头只用于表征学习，不直接作为策略输入。

多步 latent 蒸馏从同一 posterior latent 分别按教师和学生动作展开 H=3 步想象轨迹，约束两者的 latent 演化一致，减少单步动作匹配无法覆盖的未来漂移。PCG 维护教师驱动和学生驱动环境的奖励 EMA，按相对表现调整教师环境比例，而不是手工按迭代退火；训练还结合 DAgger 风格动作监督、低权重 PPO 正则化和基于学生失败 rollout 的 reference-buffer curriculum。

## 实验设置与数据

OMOMO 选择桌子、木椅、塑料箱、小箱子和行李箱五类物体；BEHAVE 选择背包、塑料容器和凳子，并聚焦平均超过 300 步的长程交互。所有视觉学生使用相同教师、深度、分割、本体感知和紧凑目标条件，基线包括 ResNet-18、ViT、轻量 CNN、单阶段 Dreamer、DAgger/DAgger+RL，以及去除多步 latent、只用重建、只用辅助损失、去除动作条件或 recurrent 状态等消融。论文另做物体质量增加 5 倍或 2 倍的压力测试。

指标包括参考片段跟踪成功率、早停前持续时间、机器人逐链位置误差和物体位姿/点误差。跨形态实验在 42 DoF Unitree G1 上与 Dreamer 定性比较；跨仿真器实验从 Isaac Gym 转移到 Isaac Lab 的匹配 OMOMO 序列。

## 结果、限制与结论

论文报告 DreamMimic 在 OMOMO 达到 92.2% 成功率、5.4 cm 机器人跟踪误差和 8.8 cm 物体跟踪误差；5 倍质量下成功率为 41.2%。BEHAVE 标准和 2 倍质量成功率均为 72.7% 和 63.6%，PCG 相比 naive annealing 改善持续时间和跟踪误差。去掉多步 latent 蒸馏使 OMOMO 成功率降到 70.6%；只用当前 stochastic 特征降到 74.5%。定性结果显示更稳定的搬运、拖动和推动，但作者明确这些跨形态和跨仿真结果不是硬件验证。

主要限制是全部评估仍在仿真中，并使用真值渲染的深度和分割；严重遮挡、视觉模糊接触和 G1 上手部精细接触仍会失败，G1 倾向推重物而非抬起。真实机器人、鲁棒感知、触觉或局部手-物控制、遮挡恢复行为和更长时间部署当前材料未确认。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.22278v1)
- [PDF 全文](https://arxiv.org/pdf/2608.22278v1)
- [项目代码](https://github.com/DreamMimic/DreamMimic)
- [项目网站](https://dreammimic.github.io/)
