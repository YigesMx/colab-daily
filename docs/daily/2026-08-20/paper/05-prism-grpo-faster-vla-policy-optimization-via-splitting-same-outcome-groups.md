---
candidateId: "arxiv--2608.17423"
businessCandidateId: "arxiv--2608.17423"
date: "2026-08-20"
category: "Paper"
title: "Prism-GRPO: Faster VLA Policy Optimization via Splitting Same-outcome Groups"
authors: ["arxiv.org"]
summary: "Prism-GRPO 通过把同结局 VLA rollout 按执行质量拆分，恢复被丢弃的训练信号，在四个 RoboTwin 任务上报告目标成功率所需 rollout 最多减少 56%。"
provisionalKeywords: ["视觉-语言-动作", "强化学习", "机器人操作"]
keywords: ["视觉-语言-动作", "强化学习", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.17423"}]
previewImage: "/daily/2026-08-20/assets/arxiv--2608.17423/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 5
groupScore: 89
scoreScale: "paper-v2"
emphasis: false
---
# Prism-GRPO: Faster VLA Policy Optimization via Splitting Same-outcome Groups

## 研究问题与贡献

论文针对 GRPO 训练 VLA 时同成功/同失败组没有优势、昂贵 rollout 被丢弃的问题，提出 Prism-GRPO。其核心是在二元成功奖励之外加入轨迹级执行质量分数，把同结局组拆成质量谱。

## 方法与系统

质量信号可来自仿真接触、执行动作或视觉观察，不需要任务专属进度奖励。理论部分证明该做法不会提高零优势组被丢弃的概率，并给出组合更新仍为任务成功局部上升方向的梯度对齐条件。成功仍严格排在失败之前，避免质量分数覆盖任务目标。

## 实验设置与数据

论文在四个 RoboTwin 任务上比较 matched rollout budget 下的成功率、执行质量与目标成功率所需 rollout 数，并做接触、平滑性与 VLM 质量信号消融，最后测试真实机器人直接部署。

## 结果、限制与结论

论文报告目标成功率所需 rollout 最多减少 56%，并抑制一种奖励捷径；更干净的行为可迁移到真实机器人。质量信号设计与标定仍依赖任务可观测性，复杂现实任务中的自动质量估计需要继续验证。结论是执行质量可为 VLA 强化学习提供低成本额外信号。

## 来源链接

- [arXiv 论文](https://arxiv.org/abs/2608.17423)
- [arXiv HTML 全文](https://arxiv.org/html/2608.17423)
