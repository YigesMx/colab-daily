---
candidateId: "arxiv--2608.17163"
businessCandidateId: "arxiv--2608.17163"
date: "2026-08-20"
category: "Paper"
title: "Q-Learning With World Models"
authors: ["arxiv.org"]
summary: "QWM 将世界模型用于 Q-learning 的测试时想象搜索，而不是直接在想象轨迹上训练策略，在 Robomimic 与 LIBERO 上报告样本效率与性能提升。"
provisionalKeywords: ["强化学习", "世界模型", "机器人操作"]
keywords: ["强化学习", "世界模型", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.17163"}]
previewImage: "/daily/2026-08-20/assets/arxiv--2608.17163/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 6
groupScore: 88
scoreScale: "paper-v2"
emphasis: false
---
# Q-Learning With World Models

## 研究问题与贡献

论文研究如何让世界模型提升 off-policy Q-learning 的样本效率，同时避免策略和价值函数在长想象 rollout 中累积模型偏差。作者提出 QWM，把世界模型用作测试时搜索器。

## 方法与系统

Q-learning 继续只在真实在线转移上训练策略与价值函数；在执行和评估时，世界模型生成候选想象轨迹，Q 值用于选择高价值动作。由于不用想象样本直接更新价值网络，模型误差不会通过训练目标持续放大。

## 实验设置与数据

论文在 Robomimic 与 LIBERO 操作基准上与强基线比较样本效率和最终性能，并分析任务时域、视觉复杂度与搜索开销。

## 结果、限制与结论

论文报告 QWM 在两个基准上均取得更强的样本效率与性能。当前材料主要覆盖仿真操作与有限任务族，真实机器人长时程、模型校准与搜索计算成本仍需进一步报告。结论是世界模型与 Q-learning 可以通过测试时搜索形成互补，而不必承担想象训练偏差。

## 来源链接

- [arXiv 论文](https://arxiv.org/abs/2608.17163)
- [arXiv HTML 全文](https://arxiv.org/html/2608.17163)
