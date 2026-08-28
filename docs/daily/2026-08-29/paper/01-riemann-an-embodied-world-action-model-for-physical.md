---
candidateId: "arxiv--2608.27033"
businessCandidateId: "arxiv--2608.27033"
date: "2026-08-29"
category: Paper
title: "Riemann-1.0: An Embodied World Action Model for Physical AI"
authors: ["arxiv.org"]
summary: "Riemann-1.0 用单一因果自回归 World Action Model 同时执行机器人策略和动作条件世界仿真，并通过 200K+ 小时渐进式具身预训练取得强仿真与真实操作结果。"
provisionalKeywords: ["具身智能", "世界模型", "机器人操作"]
keywords: ["具身智能", "世界模型", "机器人操作"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.27033v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.27033"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2608.27033"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/e-print/2608.27033"}
previewImage: "/daily/2026-08-29/assets/arxiv--2608.27033/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 93
scoreScale: "paper-v2"
emphasis: true
---
# Riemann-1.0：面向 Physical AI 的具身世界动作模型

## 研究问题与贡献

论文要解决两个耦合问题：如何把自我中心人类视频、手持夹具示教和异构机器人轨迹统一到一个可执行的具身经验体系中；以及如何让一个模型同时作为机器人策略和动作条件世界模拟器使用。作者提出 Riemann-1.0，将多视角观测、机器人状态和具体身体动作放进同一个因果自回归序列，使动作与世界演化成为连续的状态转移。

## 方法与系统

核心模型是完全因果的自回归 World Action Model。它不再把视频预测、动作生成或动作-视频解耦建模拆成独立流程，而是在同一序列中联合建模观测、状态、动作和未来世界。训练侧包含三阶段 Progressive Embodied Pretraining：先用冻结 Latent Action Model 从大规模无动作标注视频获得弱监督动作表示；再用人类视频、UMI/外骨骼示教和机器人轨迹做动作对齐；最后用高质量机器人轨迹强化具体身体的可执行策略。

## 实验设置与数据

数据语料报告为 200K+ 小时交互经验，来源包括自我中心人类视频、手持夹具示教和异构机器人轨迹，覆盖大量场景、技能和身体形态。仿真评估使用 RoboCasa-365、RoboTwin 2.0 和 LIBERO；真实部署评估长时程操作，论文报告每个真实任务收集三条示教用于后训练，并在相同设置下与多个开源/基线系统比较。

## 结果、限制与结论

论文报告 Riemann-1.0 在 RoboCasa-365 达到 62.6%，在 RoboTwin 2.0 达到 94.3%，在 LIBERO 达到 99.0%；真实长时程操作成功率为 85.0%，进度成功率为 94.4%，作者称相对最强开源基线的 SR 提升 15 个百分点。结论认为统一因果建模和渐进式具身预训练能把大规模交互经验转化为可泛化操作能力。论文正文未单独给出系统性失败分析或外部复现结果；这些泛化结论仍以作者报告的评测为准。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2608.27033v1)
- [PDF 全文](https://arxiv.org/pdf/2608.27033)
- [HTML 全文](https://arxiv.org/html/2608.27033)
- [TeX source](https://arxiv.org/e-print/2608.27033)
- [项目主页](https://riemann-dynamics.github.io/Riemann-1.0-Website)
