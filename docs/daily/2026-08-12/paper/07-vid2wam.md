---
schemaVersion: 2
candidateId: "arxiv--2608.08558"
date: "2026-08-12"
category: "Paper"
authors:
  - "Source record"
sources:
  - name: "Original source"
    url: "https://arxiv.org/abs/2608.08558v1"
ratingTrack: "paper"
groupRank: 7
groupScore: 88
scoreScale: "paper-v2"
title: "Vid2WAM: Distilling Video Diffusion Priors into World Action Models"
summary: "已读取 arXiv PDF 全文；以下仅陈述论文原文能够核验的主张。"
keywords: ["具身智能","机器人操作","世界模型"]
previewImage: null
---

## 研究问题与贡献

论文原文摘要摘录（来源：arXiv PDF）：

> World Action Models (WAMs) improve robot policy learning by jointly modeling future visual dynamics and actions. How- Video Model Video branch｜Action branch ever, their scalability and generalization remain constrained by their reliance on costly expert demonstrations. We chal- lenge this by asking whether future supervision for WAMs (a) Video Gen. + IDM (b) World Action Model (WAM) must originate from target-task expert trajectories. In this pa- per, we propose Vid2WAM, an offline distillation framework IDM teacher-free fast inference that transfers visual diffusion priors from a large video foun- DISTILL Future branch｜Action branch dation model into a compact WAM student. Given an obser- Video vation and language instruction, Vid2WAM distills supervi- sion through two complementary channels: task-conditioned (c) Vid2WAM (Ours) future rollouts directly supervise the student’s future pre- diction branch, while an inverse dynamics model recovers Figure 1: Left: Comparison of video-based robot policy embodiment-specific pseudo-actions for action learning. To paradigms. (a) Video generation plus IDM performs costly robustly integrate synthetic and real supervision, we introduce online rollout and action recovery. (b) WAM jointly learns source-aware residual action adaptation that learns source-

该工作的问题设定、贡献边界和结论以论文全文为准；未在摘录或正文中确认的外推不作陈述。

## 方法与系统

全文方法/系统段落摘录：

> ever, their scalability and generalization remain constrained by their reliance on costly expert demonstrations. We chal- lenge this by asking whether future supervision for WAMs (a) Video Gen. + IDM (b) World Action Model (WAM) must originate from target-task expert trajectories. In this pa- arXiv:2608.08558v1 [cs.RO] 9 Aug 2026 per, we propose Vid2WAM, an offline distillation framework IDM teacher-free fast inference that transfers visual diffusion priors from a large video foun- DISTILL Future branch｜Action branch dation model into a compact WAM student. Given an obser- Video

## 实验设置与数据

全文实验、数据集或评测协议摘录：

> Vid2WAM improves novel-task generalization and data effi- right: Vid2WAM achieves the highest novel-task success ciency under limited expert demonstrations while preserving rate while retaining low inference latency. Introduction not required during deployment (Li et al. 2025; Xu et al. 2025; Yuan et al. 2026). However, most existing WAMs implicitly Building robot policies that generalize across tasks, objects, share one assumption: future supervision must be observed and environments remains a central goal of embodied intel- in task-specific expert demonstrations. Both future visual ligence. Recent progress has followed two complementary targets and action labels are obtained from paired robot tra- directions. Vision–language–action (VLA) models leverage jectories collected through simulated data collection or tele-

## 结果、限制与结论

全文结果/结论段落摘录：

> space. The IDM uses a ResNet-50 backbone (He et al. 2016) RoboTwin 2.0. Table 1 reports results under clean and ran- with action and proprioception prediction heads. To reduce domized conditions on RoboTwin 2.0, including averages the influence of long-horizon generation errors, pseudo su- over all 50 tasks and over the 15 novel tasks in the novel pervision in simulation experiments is restricted to the first regime. The results reveal that both pretrained VLA poli- eight seconds of each generated rollout. For real-world novel- cies and WAMs struggle to transfer to novel tasks, with all task pseudo data, the spatial video loss is computed only over baselines dropping substantially on the 15-task novel subset. the valid overhead-view region, while pseudo-action supervi- This degradation is particularly pronounced for Fast-WAM, sion remains unchanged. Complete training schedules, IDM whose success rate decreases from 75.7% to 45.0% under validation results, multi-view input layouts, and spatial and clean evaluation and from 74.7% to 42.8% under randomiza- Figure 5: Vid2WAM real-world executions for representative seen and novel tasks. Frames progress left to right.

限制：本文仅报告 PDF 中可核验的实验和作者结论；跨数据集、跨硬件或部署效果若未被原文证明，保留为未知。

## 来源链接

- https://arxiv.org/abs/2608.08558v1
