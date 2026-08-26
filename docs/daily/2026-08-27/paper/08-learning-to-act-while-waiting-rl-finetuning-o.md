---
candidateId: "arxiv--2608.23831"
businessCandidateId: "arxiv--2608.23831"
date: "2026-08-27"
category: "Paper"
title: "Learning to Act While Waiting: RL Finetuning of Generalist Robot Policies Under Inference Latency"
authors: ["arxiv.org"]
summary: "这篇论文研究部署约束下的 VLA 强化学习：大模型动作推理可造成 100-300 ms 以上延迟，异步执行虽能掩盖延迟，却让 RL 策略基于旧观察决策，破坏有效 MDP 的马尔可夫性。ARLI 的做法是给轻量 RL 策略补充两类中间信息：一是基础策略推理期间已经提交执行的动作序列，二是在 VLM 骨干完成后、action expert 启动前可获得的更新观察。RL 策略据此为扩散/流式基础策略选择去噪噪声，实现 DSRL 式潜在空间引导，而不是直接输出完整大模型动作。"
provisionalKeywords: ["强化学习", "模型推理", "机器人操作"]
keywords: ["强化学习", "模型推理", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.23831v1"}]
previewImage: "/daily/2026-08-27/assets/arxiv--2608.23831/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 8
groupScore: 84
scoreScale: "paper-v2"
emphasis: false
---



# Learning to Act While Waiting: RL Finetuning of Generalist Robot Policies Under Inference Latency

## 研究问题与贡献

这篇论文研究部署约束下的 VLA 强化学习：大模型动作推理可造成 100-300 ms 以上延迟，异步执行虽能掩盖延迟，却让 RL 策略基于旧观察决策，破坏有效 MDP 的马尔可夫性。ARLI 的做法是给轻量 RL 策略补充两类中间信息：一是基础策略推理期间已经提交执行的动作序列，二是在 VLM 骨干完成后、action expert 启动前可获得的更新观察。RL 策略据此为扩散/流式基础策略选择去噪噪声，实现 DSRL 式潜在空间引导，而不是直接输出完整大模型动作。

## 方法与系统

系统假设基础策略可分为 VLM 骨干和 action expert，action expert 在推理最后阶段消费噪声。ARLI 在 action expert 前运行轻量 actor，把原始旧观察、已提交动作与中间状态拼接为 RL state；可选择 Real-Time Chunking 的 inpainting guidance 维持动作块间连续性。理论上，论文定义 delayed oracle optimality gap，说明在覆盖与延迟 gap 假设下，延迟观察的标准 Q-learning 可逼近由该 gap 决定的次优界；中间状态的作用是实际缩小该 gap。实现使用 DSRL-SAC，训练单步 actor/critic 并把单一 latent 动作扩展到基础策略 action chunk。

## 实验设置与数据

模拟实验包括 Kinetix mjc swimmer、mjc walker、car launch 与 AlohaTransferCube。前三个使用公开 flow policy 检查点，tdelay=4；Aloha 使用 π0 3.3B 检查点，tdelay=20。真实实验在双臂 UR5e 上完成连接器装配、鞋入袋和袋放置三项任务，基础策略为按任务微调的 π0.5，RTX 5090 上 tdelay=10、中间 RL delay=7。基线包括同步 DSRL、RTC DSRL、只用中间动作或状态、残差 RL、预训练策略同步/RTC，以及无 RTC 变体；模拟结果平均 3 个种子。

## 结果、限制与结论

模拟中 ARLI 在四个任务上普遍比 DSRL 更快收敛并达到更高最终成功率；引入 RTC 后仍需中间动作与状态才能稳定学到目标行为。真实任务从约 40% 初始成功率出发，ARLI 在 100-125 episodes 后接近 100%，同步 DSRL 和 RTC DSRL 在装配、袋放置任务中难以达到 80%，鞋入袋则需近两倍训练量。只用动作的 ARLI 在袋放置任务不能收敛，说明中间状态对双臂耦合场景重要。局限是方法要求基础策略可分解且 action expert 消费噪声，不满足该结构的模型只能使用动作增强；RTC 会保留旧动作、限制反应性；方法依赖 DSRL，DSRL 难学的任务 ARLI 也会难学。它把“推理延迟”从部署工程问题提升为 RL 状态设计问题，对真实 VLA 自适应非常关键。

## 来源链接

- 论文：https://arxiv.org/abs/2608.23831
- PDF：https://arxiv.org/pdf/2608.23831
