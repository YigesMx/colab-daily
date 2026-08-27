---
candidateId: "arxiv--2608.26053"
businessCandidateId: "arxiv--2608.26053"
date: "2026-08-28"
category: Paper
title: "$R^3$: Training Robots to Reason in Natural Language via Reinforcement Learning"
authors: ["arxiv.org"]
summary: "R3用专家推理轨迹中训练和离线单步rubric RL把VLM训练成机器人推理器，以自由语言推理在测试时引导冻结的低层策略，在两个长时序仿真环境中优于仅指令模仿学习。"
provisionalKeywords: ["机器人操作", "具身智能"]
keywords: ["机器人操作", "具身智能"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.26053v1"}
previewImage: "/daily/2026-08-28/assets/arxiv--2608.26053/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 90
scoreScale: "paper-v2"
emphasis: false
---

# $R^3$: Training Robots to Reason in Natural Language via Reinforcement Learning

## 研究问题与贡献

**R3: Training Robots to Reason in Natural Language via Reinforcement Learning** 的一句话结论是：让高层VLM在发出子任务指令前生成动作导向的自由语言推理，可以作为机器人操作的测试时算力机制。论文关注三个环节：如何获得包含错误与恢复的推理数据、如何初始化适合机器人的推理风格、以及如何从更易获得的指令标签继续优化。R3的两阶段配方是先用专家推理轨迹mid-training，再用单步rubric-based RL从离线动作数据改进。

## 方法与系统

架构上，高层VLM输入场景、目标与历史响应，输出推理trace和短时指令；冻结的语言条件低层策略执行固定长度动作chunk。Language Table中用Gemini 3 Flash作为专家，生成含部分进度、错误与恢复的多轮轨迹；历史上下文显著提升专家在line和V任务上的pass@1。第一阶段用成功与失败轨迹的标准下一token训练初始化推理行为。第二阶段对无推理标签的离线数据采样推理与指令，用Qwen3.5-35B-A3B按语义一致性、可执行性和结果相似性打分，并以Dr.GRPO优化；过短回答给负奖励。 Grocery packing的指令集合有限，因此使用精确字符串匹配奖励，可跳过第一阶段。

## 实验设置与数据

Language Table设计14类长时序方块排列任务，每任务8个方块与高层空间目标；6类用于mid-training、3类用于RL、5类保持OOD。每个mid-training任务在64个场景各采4条轨迹，共256条；RL每任务使用128条无推理标签的成功轨迹。评测为每任务64个held-out场景、每场景16次。基座为Qwen3.5-4B，比较无推理基座、仅指令模仿、仅RL、仅mid-training、1/4 mid-training数据和结构化ECoT变体。Grocery packing使用双xArm-7仿真和π0.5低层策略，12个held-out任务每任务50次、共600次。

## 结果、限制与结论

论文报告R3在所有五个OOD任务上超过指令模仿学习；例如iL为37.2%对27.3%，mid为51.0%对42.3%，clear_half为74.5%对69.7%。同一checkpoint去掉推理或多截断推理会显著降低多数任务，说明收益不只来自表征学习。Grocery packing平均成功率47.9%、进度73.1%，高于无推理基座的19.7%/55.0%和指令模仿的38.0%/65.4%。限制：实验限于两个仿真域和固定低层策略；第一阶段仍需专家推理；第二阶段奖励是与专家指令语义一致的代理目标，并非最终任务成功；VLM judge虽与三名人工标注多数票接近，仍是模型评估。未知项：真实机器人、噪声感知、更长任务和在线多步RL效果未验证。

## 来源链接

- [arXiv论文](https://arxiv.org/abs/2608.26053v1)
- [项目页面](https://robotic-reasoner.github.io/)
