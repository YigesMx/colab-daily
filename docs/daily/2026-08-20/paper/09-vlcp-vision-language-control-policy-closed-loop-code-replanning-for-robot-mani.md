---
candidateId: "arxiv--2608.16978"
businessCandidateId: "arxiv--2608.16978"
date: "2026-08-20"
category: "Paper"
title: "VLCP: Vision Language Control Policy Closed-Loop Code Replanning for Robot Manipulation"
authors: ["arxiv.org"]
summary: "VLCP 不微调 VLM，而是让它把机器人策略写成 Python 控制代码并在 episode 内闭环重写；57 任务池化成功率从 3.5% 提升到 35.1%。"
provisionalKeywords: ["机器人操作", "视觉-语言-动作", "具身智能"]
keywords: ["机器人操作", "视觉-语言-动作", "具身智能"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.16978"}]
previewImage: "/daily/2026-08-20/assets/arxiv--2608.16978/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 9
groupScore: 85
scoreScale: "paper-v2"
emphasis: false
---
# VLCP: Vision Language Control Policy Closed-Loop Code Replanning for Robot Manipulation

## 研究问题与贡献

论文提出让冻结 VLM 直接输出短 Python 控制函数作为机器人策略，并在执行中根据失败重写代码。相比把 VLM 微调成动作模型，该路线保留其预训练推理与代码能力。

## 方法与系统

VLCP 每 K 步读取多视角 RGB、本体状态和状态增量，重写控制函数。重写产物可进入跨 episode 技能库，后续 prompt 复用。系统不使用演示数据，也不做策略微调。

## 实验设置与数据

论文在 MuJoCo/RoboVerse 的 57 个任务上评估，比较每 episode 只写一次代码与周期性重写的成功率、恢复率与 token 开销。

## 结果、限制与结论

论文报告池化成功率 35.1%，而同系统一次性生成仅为 3.5%；失败抓取的 episode 内恢复率为 27.3%，中位 84% 输入 token 命中缓存。结果仍主要来自仿真 benchmark，真实机器人安全、代码执行环境与任务覆盖需进一步验证。结论是把闭环放在控制代码层能显著改善训练免费 VLM 策略。

## 来源链接

- [arXiv 论文](https://arxiv.org/abs/2608.16978)
- [arXiv HTML 全文](https://arxiv.org/html/2608.16978)
