---
candidateId: "arxiv--2609.05260"
date: "2026-09-08"
category: Paper
title: "One Word, Different Action：语言条件具身推理的真实机器人基准"
authors: ["提交人 Yiwei Liu（完整作者列表见论文页）"]
summary: "自然语言指令的微小改动会直接改变机器人行为；该工作构建真实机器人基准，用「任务保持/任务改变」指令对联合评测 Decision Invariance 与 Decision Sensitivity，并加入多约束推理与真实 RGB grounding 评测：现代模型在单约束改动上接近饱和，但整合多个任务约束时明显退化。"
keywords:
  - 机器人评测与基准
  - VLA 模型与机器人操作
  - 具身智能
sources:
  - { "name": "arxiv", "url": "https://arxiv.org/abs/2609.05260v1" }
previewImage: "/daily/2026-09-08/assets/arxiv--2609.05260/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 5
groupScore: 77.0
scoreScale: "paper-v2"
emphasis: false
---
# One Word, Different Action：语言条件具身推理的真实机器人基准

## 研究问题与贡献

一个可靠的具身系统应在任务未变时保持动作（决策不变性）、在任务真正改变时正确更新动作（决策敏感性）。自然语言指令的改写、同义表达或无关词变化不应导致行为漂移。现有评测多为仿真中端到端成功率，缺少在真实机器人上对「语言理解-决策」链路的细粒度诊断。该工作提出 One Word, Different Action 基准，在物理决策状态与可执行动作之上联合度量这两项能力。

## 方法与系统

基准基于真实机器人（real-robot），核心构造是「任务保持（task-preserving）」与「任务改变（task-changing）」两类指令对：前者改写指令但任务不变，考察决策不变性；后者一词之差改变任务，考察决策敏感性。在此之上叠加多约束推理评测（把多个任务约束整合为一个可执行决策）与真实 RGB grounding 评测（视觉基础上的指令落地）。

## 实验设置与数据

真实机器人平台、任务清单与被测模型列表在摘要页未完整列出（以全文为准）；评测对象为现代语言条件 VLA/具身模型。

## 结果、限制与结论

论文报告（定性）：现代模型在单约束指令改动上接近饱和；当需要把多个任务约束组合为单一可执行决策时，若干模型明显退化——多约束整合是当前主要短板。具体成功率数字、平台与模型清单需全文核验。该基准把「语言稳健性」从 NLP 层面拉到真实机器人决策层面，对 VLA 评测体系是有价值的补充。

## 来源链接

- arXiv 页面：https://arxiv.org/abs/2609.05260
- HTML 全文：https://arxiv.org/html/2609.05260v1
- PDF：https://arxiv.org/pdf/2609.05260
