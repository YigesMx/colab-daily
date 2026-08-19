---
candidateId: "arxiv--2608.17386"
businessCandidateId: "arxiv--2608.17386"
date: "2026-08-20"
category: "Paper"
title: "MANIGUARD: A Benchmark and Data Suite for Specification-Grounded Safety Evaluation and Improvement of Robotic Manipulation"
authors: ["arxiv.org"]
summary: "ManiGuard 提出 1000 个锁定场景与 8000 条安全标注演示，把机器人操作安全从任务成功率中拆出来评估，并显示部分成功轨迹仍违反安全规范。"
provisionalKeywords: ["安全评测", "机器人操作", "具身智能", "数据基础设施"]
keywords: ["安全评测", "机器人操作", "具身智能", "数据基础设施"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.17386"}]
previewImage: "/daily/2026-08-20/assets/arxiv--2608.17386/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 92
scoreScale: "paper-v2"
emphasis: true
---
# MANIGUARD: Specification-Grounded Safety Evaluation and Improvement of Robotic Manipulation

## 研究问题与贡献

论文针对 VLA 操作策略“任务成功不等于安全”的问题提出 ManiGuard。贡献包括 200 个锁定基础任务、四类单轴分布外扰动、1000 个评估场景，以及 8000 条带安全标注的轨迹演示。安全规范由 LTLf 自动机和物理谓词监控，而不是由 LLM 裁判直接判断。

## 方法与系统

系统包含任务套件、轨迹生成管线和安全监控。轨迹由自动运动规划与人类遥操作共同产生，每步都用同一监控器标注。套件覆盖六个接触丰富的家庭任务族，并将技能与约束交叉组织，支持后续安全感知微调。

## 实验设置与数据

论文在仿真和 Franka 实物平台上评估零样本与微调后的 VLA，总计报告超过 23000 次滚动，并比较安全任务完成率与被监控器捕获的违规行为。

## 结果、限制与结论

论文报告 6% 到 21% 的成功轨迹违反规范；在套件上微调后，安全任务完成率可从接近零提升到 7.5% 到 29.8%，engage-and-safe 行为从 16% 到 40% 提升到 51% 到 72%。但 21% 到 42% 的 engaged 轨迹仍违规，部分任务族安全成功率低于 2%。结论是安全需要独立目标、独立数据和独立评测，不能仅靠扩大任务演示解决。

## 来源链接

- [arXiv 论文](https://arxiv.org/abs/2608.17386)
- [arXiv HTML 全文](https://arxiv.org/html/2608.17386)
