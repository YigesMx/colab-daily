---
candidateId: "arxiv--2608.23452"
businessCandidateId: "arxiv--2608.23452"
date: "2026-08-26"
category: "Paper"
title: "Reward-Free Continual Adaptation for Resilient Space Robots"
authors: ["arxiv.org"]
summary: "论文提出面向空间机器人的免奖励持续适应框架，用预训练潜空间奖励景观和世界模型动态更新应对严重硬件退化。"
provisionalKeywords: ["空天机器人", "世界模型", "模型训练"]
keywords: ["空天机器人", "世界模型", "模型训练"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.23452v1"}]
previewImage: "/daily/2026-08-26/assets/arxiv--2608.23452/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 9
groupScore: 80
scoreScale: "paper-v2"
emphasis: false
---

# Reward-Free Continual Adaptation for Resilient Space Robots

## 研究问题与贡献

论文研究空间机器人在严重硬件退化后的在线适应。轮子锁死、推进器失效或工具装配偏斜会显著改变转移动力学，零样本策略可能失败，而从头重训在时间和通信带宽上不可行。持续强化学习又依赖部署时可精确计算的奖励；外部跟踪、完整状态和复杂环境中的任务奖励在空间场景往往不可观测。

作者提出的框架把预训练 latent world model 中的奖励结构当作在线适应的奖励来源。部署后不接收新奖励，只用无监督 rollout 更新转移动力学，并在更新后的想象轨迹中重训 actor-critic。论文在行星 traversal、轨道导航和精密装配三类仿真任务中验证该方法。

## 方法与系统

框架基于 DreamerV3 RSSM。预训练阶段在多种仿真环境中联合训练序列模型、前向动力学、encoder、decoder、reward predictor、continuity predictor 和 actor-critic，并用重力、惯性、摩擦和外部扰动等域随机化让 latent 与奖励映射更泛化。策略完全在世界模型生成的想象轨迹中训练，使 reward head 学到任务目标的 latent 表达。

部署后发生形态退化时，作者冻结 encoder、decoder 和 reward predictor，只更新 sequence model 与 forward dynamics。新的本体感知转移用 posterior 与 prior 的 KL 损失训练，世界模型学习率从 4e-5 降到 4e-6 以减缓遗忘；动作加入 N(0, 0.02) 的小高斯探索，让 RSSM 覆盖新物理约束下的状态转移。随后 actor-critic 按每环境步 2048 次策略更新的比例在更新后的想象轨迹中重复训练。固定终止条件的任务中 continuity predictor 也保持冻结。

## 实验设置与数据

所有任务基于 NVIDIA Isaac Lab 与 Space Robotics Bench。行星 traversal 使用 12 执行器、主动万向悬架的实验 rover，在程序化障碍地形中锁死右前轮转向和驱动关节，控制频率 25 Hz；轨道导航使用 12 个连续推进器，在 SE(3) 中跟踪移动目标，并让三个共位非轴向推进器完全失效，控制频率 10 Hz；精密装配用 7-DoF 机械臂和电动螺丝刀，引入 15 度法兰轴向弯曲，控制频率 50 Hz。

预训练为 20 million 环境步、512 个并行环境、每步 32 次策略更新。在线适应被限制为单一仿真 agent 和 60 分钟交互，对应 90K、36K 和 180K 步；每个任务用 3 个随机种子重复。比较对象为零-shot、从头重训、带特权奖励的自适应 agent 和无奖励自适应 agent。

## 结果、限制与结论

论文报告零-shot 策略在三类形态退化下均灾难性失败；从头重训证明任务可解但样本效率低；带特权奖励的 agent 快速恢复到接近重训上限。无奖励 agent 也能出现快速初始恢复，说明冻结 reward head 的 latent 奖励可以引导适应，但性能低于特权基线，并在轨道与装配任务中出现明显波动和后期衰减。作者解释为持续更新退化形态的转移动力学会让 RSSM 偏离原 latent 空间，覆盖预训练得到的泛化结构。

局限是实验完全仿真，未处理 sim-to-real；在线阶段的高优化量超过空间级嵌入式算力和功耗约束；长时稳定性、局部 latent adapter、真实传感噪声和通信中断下的恢复当前材料未确认。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.23452v1)
- [PDF 全文](https://arxiv.org/pdf/2608.23452v1)
