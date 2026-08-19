---
candidateId: "arxiv--2608.17027"
businessCandidateId: "arxiv--2608.17027"
date: "2026-08-20"
category: "Paper"
title: "FetchMan: Learning Visual Humanoid Loco-Manipulation Policies from Simulated Experiences"
authors: ["arxiv.org"]
summary: "FetchMan 用 15 万以上仿真场景训练人形 loco-manipulation，并在真实 Unitree G1 上零样本完成未见场景走取，报告成功率 73.3%。"
provisionalKeywords: ["人形机器人", "机器人操作", "强化学习", "具身智能"]
keywords: ["人形机器人", "机器人操作", "强化学习", "具身智能"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.17027"}]
previewImage: "/daily/2026-08-20/assets/arxiv--2608.17027/preview.jpg"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 91
scoreScale: "paper-v2"
emphasis: true
---
# FetchMan: Learning Visual Humanoid Loco-Manipulation Policies from Simulated Experiences

## 研究问题与贡献

论文研究人形机器人如何同时处理行走、平衡和抓取。作者提出端到端 sim-to-real 管线 FetchMan，在超过 150000 个仿真场景中训练视觉 loco-manipulation，并发布 FetchMan-Bench。

## 方法与系统

流程先合成大规模演示并做行为克隆，再用 Flow-GRPO 在单一稀疏奖励上强化学习精调。论文发现单纯增加克隆数据会遭遇性能上限，而强化学习能突破该上限；最终策略可零样本迁移到真实 Unitree G1。

## 实验设置与数据

训练覆盖大规模仿真场景，评估包括 FetchMan-Bench、单物体 reach-and-pick 与多物体扩展。真实部署测试未见场景中的行走接近、抓取和泛化能力，不使用每个场景的真实数据微调。

## 结果、限制与结论

论文报告真实 Unitree G1 零样本单物体走取成功率为 73.3%，并称行为克隆在合成数据上存在饱和，Flow-GRPO 可恢复性能空间。当前真实结果集中于 reach-and-pick 类任务，多物体与更复杂长时程作业仍是初步扩展。结论是仿真经验加强化学习精调是数据昂贵人形操作的一条可复用路线。

## 来源链接

- [arXiv 论文](https://arxiv.org/abs/2608.17027)
- [项目页](https://orayyan.com/fetchman)
