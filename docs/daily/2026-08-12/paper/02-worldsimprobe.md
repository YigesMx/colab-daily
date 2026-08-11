---
schemaVersion: 2
candidateId: "arxiv--2608.09298"
date: "2026-08-12"
category: "Paper"
authors:
  - "Source record"
sources:
  - name: "Original source"
    url: "https://arxiv.org/abs/2608.09298v1"
ratingTrack: "paper"
groupRank: 2
groupScore: 93
scoreScale: "paper-v2"
title: "WorldSimProbe: Diagnosing Simulator Faithfulness in Action-Conditioned World Models for Embodied Manipulation"
summary: "已读取 arXiv PDF 全文；以下仅陈述论文原文能够核验的主张。"
keywords: ["具身智能","机器人操作","世界模型"]
previewImage: null
---

## 研究问题与贡献

论文原文摘要摘录（来源：arXiv PDF）：

> original rollout same rollout different rollouts Action-conditioned world models (ACWMs) promise to pro- hard hard vide embodied AI with scalable predictive simulators for planning, policy evaluation, and data generation. Realizing this promise requires precise action-conditioned transitions rather than merely plausible outputs. Yet their applicabil- ity remains difficult to establish because prevailing evalu- ations emphasize visual quality, task outcomes, or coarse rollout-level responsiveness without directly testing simula- tor fidelity. To address this gap, we evaluate ACWMs through Interaction open Interaction the observable capabilities expected of physical simulators. Accordingly, we formalize Observable Simulator Contract, near ≠ contact visual overlap ≠ grasp knock over drop a minimal contract that any action-conditioned physical sim- ulator should satisfy: supplied actions must induce corre- Figure 1: Overview of the simulator-faithfulness chain from sponding agent motion, and environment responses must be grounded in that realized motion. To operationalize this con- supplied action to agent motion and environment response. tract, we introduce WorldSimProbe, comprising five con- trolled suites spanning local control sensitivity, global tra- jectory variation, source-diverse actions, interaction ground- 2025; Gao et al. 2026; Wu and Gao 2026). Their defining

该工作的问题设定、贡献边界和结论以论文全文为准；未在摘录或正文中确认的外推不作陈述。

## 方法与系统

全文方法/系统段落摘录：

> delity. Performance in a single regime does not guarantee benchmarks. Local–Global tests graded perturbations and robustness across others, motivating evaluations that sys- divergent trajectories; Source Diverse uses multiple control tematically probe the full simulator chain rather than isolated sources; Causal Probe applies controlled interventions; In- rollout success. teraction Decomp. separates interaction occurrence from dy- To this end, we introduce WorldSimProbe, a diagnos- namics. Checks denote explicit evaluation. tic benchmark that evaluates ACWM faithfulness through controlled interventions along the simulator chain. World- SimProbe operationalizes the Observable Simulator Con- et al. 2026b; Qin et al. 2024). A single language instruction

## 实验设置与数据

全文实验、数据集或评测协议摘录：

> this promise requires precise action-conditioned transitions rather than merely plausible outputs. Yet their applicabil- arXiv:2608.09298v1 [cs.RO] 10 Aug 2026 ity remains difficult to establish because prevailing evalu- ations emphasize visual quality, task outcomes, or coarse rollout-level responsiveness without directly testing simula- tor fidelity. To address this gap, we evaluate ACWMs through Interaction open Interaction the observable capabilities expected of physical simulators.

## 结果、限制与结论

全文结果/结论段落摘录：

> and Physical AI by predicting future scene evolution (Yang action-aware or physically plausible while lacking faithful et al. 2023; Bruce et al. 2024; Agarwal et al. 2025). Action- action execution or physically grounded interactions. conditioned world models (ACWMs) extend this capability Although ACWMs support diverse downstream applica- to robotic manipulation by predicting visual futures under tions, their reliability ultimately depends on a common foun- supplied action streams (Zhu et al. 2024, 2025; Guo et al. dation: faithful simulation of action-conditioned transitions. We therefore introduce Observable Simulator Contract, the Equal contribution. † Project leaders. ✉ Corresponding au- 1 minimal requirement for physical simulators: valid actions thor. State Key Laboratory of Multimedia Information Process- ing, School of Computer Science, Peking University 2 EvoPhys should produce corresponding agent motions, and environ-

限制：本文仅报告 PDF 中可核验的实验和作者结论；跨数据集、跨硬件或部署效果若未被原文证明，保留为未知。

## 来源链接

- https://arxiv.org/abs/2608.09298v1
