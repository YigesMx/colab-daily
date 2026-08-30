---
candidateId: "arxiv--2608.24876"
date: "2026-08-30"
category: Paper
title: "Recuris: Recursive Experiential-Working Memory Evolution for Long-Horizon Agent Harnesses"
authors: ["arxiv.org", "github.com", "arxiv.org", "arxiv.org"]
summary: "Recuris 将工作记忆、经验记忆与技能记忆组织成有界递归演化循环；在四个长时程基准和十个模型上，37 个完成的模型-基准对中 35 个取得提升，Claude Opus 5 在 tau2-Retail 从 72.4 升至 87.9。"
keywords: ["智能体记忆", "推理与系统优化", "开源生态"]
sources:
  - {"name":"arxiv.org","url":"https://arxiv.org/abs/2608.24876"}
  - {"name":"github.com","url":"https://github.com/Gen-Verse/Recuris"}
  - {"name":"arxiv.org","url":"https://arxiv.org/pdf/2608.24876"}
  - {"name":"arxiv.org","url":"https://arxiv.org/e-print/2608.24876"}
previewImage: "/daily/2026-08-30/assets/arxiv--2608.24876/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 88
scoreScale: "paper-v2"
emphasis: true
---

# Recuris：面向长时程智能体的递归经验-工作记忆演化

## 研究问题与贡献

论文研究长时程任务中的递归自我改进难题：随着交互历史增长，模型难以维持当前任务状态，也容易在庞大历史中错误调用技能。作者提出 Recuris，把智能体 harness 拆成工作记忆、经验记忆和技能记忆三类组件，并引入固定的 Meta-Agent 根据失败证据做局部、受验证约束的记忆更新。核心贡献是将“改模型”或“改提示”的递归改进，转化为可定位、可回滚和可复现的记忆演化过程。

## 方法与系统

工作记忆维护已验证的任务进度，并指导从经验记忆中选择合适技能；执行之后，环境反馈和状态变化成为结构化证据，可把失败归因到具体记忆组件。Meta-Agent 只修改被诊断为责任组件的技能记忆，更新必须通过验证门槛，基础模型、工具和改进流程保持不变。这个设计使递归循环有界：不是无限改写智能体，而是在固定 harness 周围演化可审查的技能包。

## 实验设置与数据

作者在四个长时程基准上评估，包括 tau2-Retail、tau2-Airline、SkillFlow 和 Terminal-Bench 2.1，覆盖十个模型。每个基准构建一个 Skill Memory，仅使用部署模型自身产生的失败轨迹作为改进证据；评估包含冻结 held-out 任务、预算匹配重试基线和两个 Meta-Agent 实现的交换实验，以区分记忆内容本身与具体改进器的影响。

## 结果、限制与结论

Recuris 在 37 个完成的模型-基准对中提升 35 个：GPT-5.6 Sol 在 tau2-Retail 从 58.3 提升至 76.1，Claude Opus 5 从 72.4 提升至 87.9；在 SkillFlow 上，Qwen3.6-27B/35B 分别提升 16.6 和 13.5 分。任务越长收益越大，最长任务提升 32.2 分，常见失败最多下降 80%。作者也指出结果依赖基准结构和可验证任务状态，未声称解决通用递归自我改进。论文提供代码与基准材料，便于复现实验。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2608.24876)
- [PDF 全文](https://arxiv.org/pdf/2608.24876)
- [TeX source](https://arxiv.org/e-print/2608.24876)
- [代码仓库](https://github.com/Gen-Verse/Recuris)
