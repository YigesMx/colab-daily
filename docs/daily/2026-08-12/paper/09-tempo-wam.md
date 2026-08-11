---
schemaVersion: 2
candidateId: "arxiv--2608.09492"
date: "2026-08-12"
category: "Paper"
authors:
  - "Source record"
sources:
  - name: "Original source"
    url: "https://arxiv.org/abs/2608.09492v1"
ratingTrack: "paper"
groupRank: 9
groupScore: 87
scoreScale: "paper-v2"
title: "Rethink Before You Execute: Adaptive Execution for World Action Models"
summary: "已读取 arXiv PDF 全文；以下仅陈述论文原文能够核验的主张。"
keywords: ["具身智能","机器人操作","世界模型"]
previewImage: null
---

## 研究问题与贡献

论文原文摘要摘录（来源：arXiv PDF）：

> World Action Models (WAMs) jointly predict future actions and the evolution of the environment. At each inference, a WAM generates a chunk of actions and the robot executes a fixed prefix before replanning. We argue that this fixed ex- ecution horizon is poorly matched to execution dynamics: the chunk reliability varies across task stages, so when to re- plan depends on the result of accumulated execution, not on the step counts. We propose TempoWAM (Timing Execution by Monitoring Progress Online), a lightweight plug-and-play execution scheme for WAMs. A Recurrent Progress Monitor first estimates task progress from the current observation, task instruction, remaining actions, and execution history; and an Adaptive Execution Protocol then evaluates whether the chunk is advancing the task to decide if replanning is needed. To bridge the training–deployment gap, the protocol is calibrated by a task-dependent calibration factor with online adaptation. Figure 1: Stage-dependent chunk reliability in Click Bell Experiments on LIBERO, RoboTwin, and real-world tasks task of RoboTwin 2.0. We plot the L2 error of action un- show that TempoWAM consistently improves the efficiency- der three fixed execution horizons. Chunk reliability varies success trade-off of WAM execution. On real robots, it reduces across execution stages: a long horizon accumulates error

该工作的问题设定、贡献边界和结论以论文全文为准；未在摘录或正文中确认的外推不作陈述。

## 方法与系统

全文方法/系统段落摘录：

> model. At each inference step, a WAM predicts a chunk of evolution, so the execution decision should be made based future actions, and the robot then executes a fixed prefix of on whether the remaining actions are still advancing the task, the chunk before replanning. However, as shown in Fig. 1, the not merely on whether the chunk looks plausible. reliability of chunks is not uniform across the task: during Based on this observation, we propose TempoWAM, a easy stages, a chunk can remain accurate for many steps; lightweight adaptive execution scheme for WAMs. Tem- but during hard stages, errors can accumulate rapidly after poWAM introduces a Recurrent Progress Monitor (RPM) only a few steps. This suggests that when to stop and replan that estimates task progress from the current observation, should depend on the execution state, not on a predetermined task instruction, remaining actions, and execution history.

## 实验设置与数据

全文实验、数据集或评测协议摘录：

> show that TempoWAM consistently improves the efficiency- der three fixed execution horizons. Chunk reliability varies success trade-off of WAM execution. On real robots, it reduces across execution stages: a long horizon accumulates error WAM inferences by 26.9% on easy tasks while maintaining in hard stages, while a short horizon remains accurate but success, and improves success by 13.3 points on difficult tasks. triggers unnecessary WAM calls in easy stages where the chunk is still reliable. This mismatch shows that no single fixed horizon fits all stages, motivating adaptive execution. World Action Models (WAMs) have emerged as a powerful paradigm for robot manipulation, jointly predicting future still be advancing the task. For WAMs, this distinction is es-

## 结果、限制与结论

全文结果/结论段落摘录：

> the step counts. We propose TempoWAM (Timing Execution by Monitoring Progress Online), a lightweight plug-and-play execution scheme for WAMs. A Recurrent Progress Monitor first estimates task progress from the current observation, task instruction, remaining actions, and execution history; and an Adaptive Execution Protocol then evaluates whether the chunk is advancing the task to decide if replanning is needed. To bridge the training–deployment gap, the protocol is calibrated by a task-dependent calibration factor with online adaptation. Figure 1: Stage-dependent chunk reliability in Click Bell

限制：本文仅报告 PDF 中可核验的实验和作者结论；跨数据集、跨硬件或部署效果若未被原文证明，保留为未知。

## 来源链接

- https://arxiv.org/abs/2608.09492v1
