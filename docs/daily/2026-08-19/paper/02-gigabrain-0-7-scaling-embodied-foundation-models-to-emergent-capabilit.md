---
candidateId: "arxiv--2608.15875"
businessCandidateId: "arxiv--2608.15875"
date: "2026-08-19"
category: "Paper"
title: "GigaBrain-0.7: Scaling Embodied Foundation Models to Emergent Capabilities with a Three-System Architecture"
authors: ["arxiv.org"]
summary: "GigaBrain-0.7 用理解规划、预测评估和动作控制三系统组织超过 37,000 小时的异构具身预训练，论文报告数据规模、System 3 条件信号和双平台后训练均带来可测量收益。"
provisionalKeywords: ["具身智能", "基础模型", "多本体训练", "世界模型"]
keywords: ["具身智能", "世界模型"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.15875v1"}]
previewImage: "/daily/2026-08-19/assets/arxiv--2608.15875/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 88
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.15875 -->
# GigaBrain-0.7：面向涌现能力的三系统具身基础模型

## 研究问题与贡献

论文研究异构机器人经验如何扩展成可执行、可规划、可预测并可持续改进的具身基础模型。作者认为，仅增加轨迹数量或模型参数并不足够：不同本体、动作空间和执行条件会带来干扰，理解、预测、动作和经验改进也常常被割裂在不同训练阶段。

GigaBrain-0.7 的贡献是把这些能力组织成三个系统：System 1 负责动作与控制，System 2 负责理解与规划，System 3 负责未来状态预测与评估。论文报告称，模型在超过 37,000 小时、覆盖 16 种机器人形态的具身轨迹数据和约 2.7 亿视觉-语言样本上进行一阶段多本体预训练，并计划发布训练代码和预训练权重。

## 方法与系统

System 1 采用 VLM backbone 与连续动作专家的双流结构，用 flow matching 生成动作块，并通过本体感知的动作专家适配不同自由度和控制模式。System 2 引入时间上下文建模，追踪任务进度并把长指令分解为可执行子任务。System 3 用世界模型预测未来视觉状态并估计状态价值，把子目标图像和标量价值作为两个互补接口注入 System 1。

训练上，论文使用统一的 LeRobot v3 数据管线、跨本体状态-动作归一化、LLM 辅助指令重写和子任务标注，并进行多阶段质量控制。为避免动作梯度破坏通用视觉语言能力，模型在 Knowledge Insulation 基础上提出 Soft Knowledge Insulation：不是完全阻断进入 VLM backbone 的动作梯度，而是衰减梯度，使控制适应与通用能力保持平衡。系统还设计了从人类反馈和纠错 rollout 中继续改进的经验驱动训练路径。

## 实验设置与数据

实验先做 backbone、耦合结构、数据规模、数据来源和时间上下文消融，再评估零样本、指令跟随、分布外泛化、长时程操作和任务特定后训练。真实机器人平台包括 AgileX PiPER/PiPER-X 低成本双臂平台和自研 Maker H01 人形平台；每个配置通常评估 10-20 次，以完整任务成功率为主要指标。

基线包括 π0.5、GigaBrain-0.1、Xiaomi-Robotics-1、Galaxea G0.5 等。System 3 消融在叠衣、礼物包装和方块排序三类任务上比较基础 VLA、加入子目标图像、加入价值和两者联合。后训练评估覆盖颜色、目标身份和空间方向六类语言条件任务，以及需要持续接触和多阶段执行的复杂操作。

## 结果、限制与结论

论文报告，增加预训练数据持续降低验证损失，并让水果操作和混乱叠衣的真实成功率上升；机器人、UMI 和 EGO 数据组合优于单一来源。System 3 消融中，礼物包装成功率从基础模型的 0% 分别升至 +SubImage 20%、+Value 60% 和联合 80%；方块排序从 40% 升至联合 55%。零样本评测显示同一预训练模型能在两个本体上执行多任务指令，但分布外设置明显退化。后训练后，GigaBrain-0.7 在 PiPER 六任务平均成功率为 91.5%，在 Maker H01 为 84.2%，分别高于表中 π0.5 的 88.8% 和 75.2%。

论文也承认，当物体身份、场景布局和任务组合同时变化时泛化仍困难。本文分析认为，“涌现能力”在论文中主要由数据规模增加后任务可靠性上升和 System 3 消融支持，尚不是严格因果证明；权重和训练代码在论文中为承诺发布，本篇精读时未能独立验证发布状态。整体看，该工作的价值在于把数据管线、三系统接口和后训练闭环放在同一框架内，为多本体具身基础模型提供了可复现实验的候选路线。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.15875v1)
- [GigaBrain-0.7 官方博客](https://gigaai.cc/blog/gigabrain07)
- [GigaBrain-0 代码仓库](https://github.com/open-gigaai/giga-brain-0)

