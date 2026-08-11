---
schemaVersion: 2
candidateId: "arxiv--2608.09467"
date: "2026-08-12"
category: "Paper"
authors:
  - "Source record"
sources:
  - name: "Original source"
    url: "https://arxiv.org/abs/2608.09467v1"
ratingTrack: "paper"
groupRank: 10
groupScore: 86
scoreScale: "paper-v2"
title: "RecoverFly: A Failure-Aware Reinforcement Learning Post-Training Framework for Aerial Vision-Language Navigation"
summary: "已读取 arXiv PDF 全文；以下仅陈述论文原文能够核验的主张。"
keywords: ["具身智能","机器人操作","世界模型"]
previewImage: null
---

## 研究问题与贡献

论文原文摘要摘录（来源：arXiv PDF）：

> Unmanned aerial vehicle vision-language navigation (UAV- but cannot correct VLN) requires agents to translate visual observations and lan- guage instructions into reliable flight actions in complex envi- ronments. Although recent end-to-end UAV vision-language- (b) Standard RL action (UAV-VLA) policies reduce reliance on separately Explores and gets designed perception, planning, and control modules, their are rarely revisited behavior-cloning objectives provide limited corrective super- vision for interactive closed-loop execution. Reinforcement learning (RL) offers a promising solution, while its effective- (c) RecoverFly ness is constrained by inefficient use of samples, long-tailed tasks and learns to scene distributions, and policy distribution shift during opti- robust navigation. 1. Revisit the mization. To this end, we propose RecoverFly, a failure-aware RL post-training framework for end-to-end UAV-VLA poli- Start Target Expert Demonstration Failure Trajectory Successful Trajectory Replay & Learn from Failure cies. Specifically, RecoverFly adapts token-level RL for sta- ble optimization of grammar-constrained autoregressive UAV Figure 1: Comparison of training paradigms for UAV- actions, revisits unresolved failure cases to strengthen correc- VLN. Behavior cloning lacks corrective learning, and stan-

该工作的问题设定、贡献边界和结论以论文全文为准；未在摘录或正文中确认的外推不作陈述。

## 方法与系统

全文方法/系统段落摘录：

> should address these issues jointly rather than treating RL as gram synthesis. Moreover, NavFoM (Zhang et al. 2025a) and a generic second-stage optimizer. LongFly (Jiang et al. 2025) further improve generalization To address the aforementioned challenges, we propose through large-scale pretraining and spatiotemporal model- RecoverFly, a failure-aware RL post-training framework for ing. These methods substantially improve semantic planning, end-to-end UAV-VLA policies. Figure 1 conceptually com- while most retain explicit interfaces between high-level rea- pares RecoverFly with behavior cloning and standard RL for soning and low-level flight execution, through which predic- end-to-end UAV-VLN. Specifically, RecoverFly adapts RL tion and control errors can accumulate. to grammar-constrained UAV action tokens, enabling sta-

## 实验设置与数据

全文实验、数据集或评测协议摘录：

> strate that RecoverFly achieves the best performance on the seen, unseen-map, and unseen-object splits. Moreover, com- pared to the AerialVLA initialization, RecoverFly improves ing end-to-end interface from onboard observations and in- success rate by 3.12 to 8.37 percentage points under a total structions to executable controls, reducing reliance on sepa- rollout budget of about 30% of the training-set size, validating rately engineered perception, planning, and control modules its effectiveness, robustness, and generalization capabilities. (Zitkovich et al. 2023; Kim et al. 2025; Xu et al. 2026). However, closed-loop UAV navigation remains difficult for Introduction two reasons. First, rapidly changing viewpoints, occlusion,

## 结果、限制与结论

全文结果/结论段落摘录：

> from previous actions rather than from the instantaneous (Xiao et al. 2025) and OpenFly (Gao et al. 2026) broad- actions. Second, unresolved failure cases with substantial ened it toward open-world object goals and larger-scale aerial learning value may rapidly disappear from subsequent sam- datasets. To execute long-horizon flights, TravelUAV (Wang pling batches. Third, scene imbalance may concentrate pol- et al. 2025) predicts continuous waypoints, whereas City- icy optimization on frequently observed environments. Fi- NavAgent (Zhang et al. 2025b), SkyVLN (Li et al. 2025), nally, unconstrained policy updates may degrade previously TypeFly (Chen et al. 2025), and training-free VLM ap- acquired navigation capabilities (Ouyang et al. 2022; Lin proaches (Hu et al. 2025) combine language reasoning with et al. 2025). As a result, a practical post-training method memory, trajectory generation, model-based control, or pro- should address these issues jointly rather than treating RL as gram synthesis. Moreover, NavFoM (Zhang et al. 2025a) and a generic second-stage optimizer. LongFly (Jiang et al. 2025) further improve generalization

限制：本文仅报告 PDF 中可核验的实验和作者结论；跨数据集、跨硬件或部署效果若未被原文证明，保留为未知。

## 来源链接

- https://arxiv.org/abs/2608.09467v1
