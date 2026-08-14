---
schemaVersion: 2
candidateId: "arxiv--2608.11246"
date: "2026-08-14"
category: "Paper"
ratingTrack: "paper"
groupRank: 7
groupScore: 87
scoreScale: "paper-v2"
title: "Towards the Harness of Embodied Agents"
authors: ["Qi Wang", "Tianyi Wang", "Chengyang Li", "Shikun Ban", "Yurun Chen", "Yizhong Ge", "Jason Qin", "Chengtai Li", "Wentao Zhu"]
summary: "Thea 把编码智能体的 harness 范式迁移到物理机器人，用可调用工具、持久场景图和显式动作结果评估闭合长时执行循环。"
provisionalKeywords: ["具身智能体", "智能体框架", "场景图记忆", "动作评估", "长时任务"]
keywords: ["具身智能体", "长时记忆", "智能体安全"]
sources:
  - name: "原始来源 1"
    url: "https://arxiv.org/pdf/2608.11246v1"
  - name: "原始来源 2"
    url: "https://export.arxiv.org/e-print/2608.11246v1"
  - name: "原始来源 3"
    url: "https://ar5iv.labs.arxiv.org/html/2608.11246"
previewImage: "/daily/2026-08-14/assets/arxiv--2608.11246/preview.png"
---

# Towards the Harness of Embodied Agents

> Thea 把编码智能体的 harness 范式迁移到物理机器人，用可调用工具、持久场景图和显式动作结果评估闭合长时执行循环。

## 研究问题与贡献

编码智能体的能力不仅取决于模型，还取决于工具、上下文和执行框架。论文探讨同一范式能否用于物理机器人，并指出物理世界缺少软件环境天然提供的两项能力：可靠读取当前状态、判断动作是否成功。Thea 以 harness 组织既有机器人能力，强调系统层闭环而非再训练单一策略。

## 方法与系统

智能体循环把导航、感知和操作能力封装成协议化工具。Scene Graph as Context 持久保存对象、关系和历史变化，避免每轮从原始观测重新推断；Evaluation as Exit Codes 检测动作终止、判定成功，并在失败时诊断原因，供后续重试或改计划。上下文按 resident、working 等生命周期管理，Embodiment Profile 描述不同机器人栈的能力与约束。

## 实验设置与数据

全文在 Astribot S1 真实平台上设计 L1 到更复杂长时任务，比较 Thea 与不同编排基线，并用任务成功、评估器混淆和可靠性随步骤增长等指标分析。工具表明确列出感知、移动、操作和 evaluate_run 接口；实验还展示失败恢复、工具组合和跨场景的涌现行为。公开材料未给出可用于广泛统计推断的大规模多平台样本量。

## 结果、限制与结论

作者报告 Thea 通过持久场景图与结果评估提高多步真实任务完成度，并能在工具失败后诊断和恢复。论文也明确讨论局限：场景图受感知错误和对象关联影响，评估器可能误判，工具本身的能力上限无法由 harness 消除；长时可靠性仍会随步骤累积下降。当前验证集中在单一机器人栈与有限任务，模型、工具和环境变化下的可移植性以及与端到端策略的统一对照仍待进一步核验。

## 来源链接

- [arXiv](https://arxiv.org/abs/2608.11246)
- [PDF](https://arxiv.org/pdf/2608.11246v1)
