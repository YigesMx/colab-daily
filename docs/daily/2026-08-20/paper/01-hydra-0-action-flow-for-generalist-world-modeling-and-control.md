---
candidateId: "arxiv--2608.18077"
businessCandidateId: "arxiv--2608.18077"
date: "2026-08-20"
category: "Paper"
title: "Hydra-0: Action Flow for Generalist World Modeling and Control"
authors: ["arxiv.org"]
summary: "Hydra-0 把机器人动作表达为像素级 action flow，使世界模型在异构本体、任务与环境之间共享同一控制接口。论文报告，其最佳配置相对动作条件基线将机器人运动误差降低 90.4%、物体运动误差降低 60.2%，并支持零样本组合与数据高效适配。"
provisionalKeywords: ["世界模型", "具身智能", "机器人操作", "视觉-语言-动作"]
keywords: ["世界模型", "具身智能", "机器人操作", "视觉-语言-动作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.18077"}]
previewImage: "/daily/2026-08-20/assets/arxiv--2608.18077/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 93
scoreScale: "paper-v2"
emphasis: true
---
# Hydra-0: Action Flow for Generalist World Modeling and Control

## 研究问题与贡献

论文关注通用机器人世界模型如何统一视频预测与控制。作者提出 Hydra-0，用 action flow 表示机器人动作，即把动作转化为像素运动，使异构本体、任务和环境的后果能进入同一个生成式世界模型。论文还报告一种逆向使用方式：由期望物体运动预测兼容的机器人运动，再映射为可执行动作。

## 方法与系统

Hydra-0 以视频生成骨干为载体，把动作条件转换为共享的像素运动接口。训练时模型学习动作造成的视觉变化，推理时既可做开环策略评估，也可通过 world action model 与动作头生成控制。该设计试图避免不同机器人动作空间造成的数据割裂。

## 实验设置与数据

论文在多本体、多任务数据上训练，并使用 RoboLab 基准比较重放成功率与参考成功率之间的相关性。作者还测试零样本组合、少样本适配与推理速度，并将 action flow 与动作条件基线对照。

## 结果、限制与结论

论文报告最佳配置使机器人运动误差降低 90.4%、物体运动误差降低 60.2%；在 RoboLab 上重放与参考成功率的 Pearson 相关系数为 0.96。逆向模式可从人类演示的期望物体流推得机器人运动。当前材料仍以生成与开环评估为主，复杂接触、安全约束和大规模真实闭环部署仍需进一步验证。结论是 action flow 可作为连接异构数据、策略评估与控制的共享接口。

## 来源链接

- [arXiv 论文](https://arxiv.org/abs/2608.18077)
- [arXiv HTML 全文](https://arxiv.org/html/2608.18077)
