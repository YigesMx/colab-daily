---
candidateId: "paper--arxiv--2608.18787"
businessCandidateId: "paper--arxiv--2608.18787"
date: "2026-08-21"
category: "Paper"
title: "Dream2Reward: Transition-Alignment Reward Models from Positive Demonstrations for Robotic Manipulation"
authors: ["arxiv.org"]
summary: "Dream2Reward 只用成功演示学习语言条件化的成功潜转移场，为机器人操作生成方向与幅度均敏感的密集奖励，并支持在线与离线策略学习。"
provisionalKeywords: ["机器人操作", "机器人数据", "具身智能"]
keywords: ["机器人操作", "机器人数据", "具身智能"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.18787v1"}]
previewImage: "/daily/2026-08-21/assets/paper--arxiv--2608.18787/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 5
groupScore: 83
scoreScale: "paper-v2"
emphasis: false
---
# Dream2Reward: Transition-Alignment Reward Models from Positive Demonstrations for Robotic Manipulation

## 研究问题与贡献

论文针对机器人操作中密集奖励难以设计的问题提出 Dream2Reward。传统 progress reward 可能在错误方向或超调动作后仍保持高分。作者只用正样本演示学习成功潜转移场，对观测到的动作转移进行方向和幅度一致性打分。

## 方法与系统

模型以语言条件和视觉历史为输入，预测成功执行的潜位移；随后比较实际位移与预测位移，使用带符号的方向一致性和对称幅度一致性构造奖励。训练无需失败标注、进度标签或合成负样本，并可冻结后服务在线与离线策略学习。

## 实验设置与数据

论文先在机制诊断和共享轨迹评估中比较成功/失败区分度与低质量行为反馈，再测试在线、离线策略学习和真实机器人操作。基线聚焦 progress-based 奖励方法，并报告失败检测 AUC、奖励差距和真实机器人轨迹。

## 结果、限制与结论

论文报告 Dream2Reward 提供更强的成功-失败分离和低质量行为反馈，同一冻结奖励模型降低 reward hacking 并支持更好的下游性能，包括真实机器人操作；真实机器人失败检测 AUC 达 0.95。限制是奖励仍依赖正样本演示覆盖和视觉历史，语言条件泛化与更长时间任务仍需验证。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.18787)
- [官方 PDF](https://arxiv.org/pdf/2608.18787)

![preview](/daily/2026-08-21/assets/paper--arxiv--2608.18787/preview.png)
