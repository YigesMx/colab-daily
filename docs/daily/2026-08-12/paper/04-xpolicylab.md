---
schemaVersion: 2
candidateId: "arxiv--2608.09892"
date: "2026-08-12"
category: "Paper"
authors:
  - "Source record"
sources:
  - name: "Original source"
    url: "https://arxiv.org/abs/2608.09892v1"
ratingTrack: "paper"
groupRank: 4
groupScore: 91
scoreScale: "paper-v2"
title: "XPolicyLab: A Unified Standard and Open Ecosystem for Robot Policy Evaluation and Deployment"
summary: "已读取 arXiv PDF 全文；以下仅陈述论文原文能够核验的主张。"
keywords: ["具身智能","机器人操作","世界模型"]
previewImage: null
---

## 研究问题与贡献

论文原文摘要摘录（来源：arXiv PDF）：

> fragmented by model-specific software dependencies, data exposing a stable interface to simulators, benchmark clients, representations, and runtime interfaces, so that connecting N and physical robots. In particular, it must support stateful policies to M evaluation environments requires O(N M ) separate integrations. We present XPolicyLab, a unified standard and policies, action chunking, batched evaluation, local and remote open ecosystem that reduces this cost to O(N +M ). XPolicyLab execution, and reliable communication, without coupling specifies common observation, action, and trajectory schemas policy implementations to environment-specific software together with a minimal adapter interface for observation stacks. updates, action prediction, batched execution, and episode reset, We present XPolicyLab,1 a unified standard and open while a dependency-isolated client/server architecture separates policy inference from environment execution, so that each side ecosystem for robot policy evaluation and deployment, retains its native software stack and may run locally or remotely. illustrated in Fig. 1. XPolicyLab specifies common ob- The ecosystem integrates 42 robot policies and standardizes servation, action, and trajectory representations, together their installation, debugging, serving, and evaluation workflows. with a lightweight adapter contract for policy initialization,

该工作的问题设定、贡献边界和结论以论文全文为准；未在摘录或正文中确认的外推不作陈述。

## 方法与系统

全文方法/系统段落摘录：

> fragmented by model-specific software dependencies, data exposing a stable interface to simulators, benchmark clients, representations, and runtime interfaces, so that connecting N and physical robots. In particular, it must support stateful policies to M evaluation environments requires O(N M ) separate integrations. We present XPolicyLab, a unified standard and policies, action chunking, batched evaluation, local and remote open ecosystem that reduces this cost to O(N +M ). XPolicyLab execution, and reliable communication, without coupling specifies common observation, action, and trajectory schemas policy implementations to environment-specific software together with a minimal adapter interface for observation stacks. updates, action prediction, batched execution, and episode reset, We present XPolicyLab,1 a unified standard and open

## 实验设置与数据

全文实验、数据集或评测协议摘录：

> XPolicyLab Contributors, Leading Institutions: MMLab@HKU & THU Website: https://xpolicylab.github.io/ Abstract— Robot policy evaluation and deployment remain heterogeneous model architectures and dependencies while fragmented by model-specific software dependencies, data exposing a stable interface to simulators, benchmark clients, representations, and runtime interfaces, so that connecting N and physical robots. In particular, it must support stateful policies to M evaluation environments requires O(N M ) separate integrations. We present XPolicyLab, a unified standard and policies, action chunking, batched evaluation, local and remote open ecosystem that reduces this cost to O(N +M ). XPolicyLab execution, and reliable communication, without coupling

## 结果、限制与结论

全文结果/结论段落摘录：

> Stated as a systems problem, connecting N policies to M 1) We introduce a unified contract between robot policies evaluation environments currently costs O(N M ) separate and evaluation environments that standardizes obser- integrations. vation and action representations, action prediction, Substantial progress has been made in robot data collection, batched execution, and episode management while dataset standardization, and training infrastructure [10], [11], preserving policy-specific implementations. [12], [13], [14], which lowers the cost of producing a 2) We develop a dependency-isolated serving architecture checkpoint. The complementary boundary, between a trained that decouples policy inference from environment policy and the environments that must execute it, remains largely unaddressed. A reusable solution there must absorb 1 https://github.com/XPolicyLab/XPolicyLab HETEROGENEOUS POLICIES UNIFIED XPOLICYLAB INFRASTRUCTURE EVALUATION ENVIRONMENTS

限制：本文仅报告 PDF 中可核验的实验和作者结论；跨数据集、跨硬件或部署效果若未被原文证明，保留为未知。

## 来源链接

- https://arxiv.org/abs/2608.09892v1
