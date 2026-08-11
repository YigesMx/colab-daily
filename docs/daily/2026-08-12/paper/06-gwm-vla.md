---
schemaVersion: 2
candidateId: "arxiv--2608.07619"
date: "2026-08-12"
category: "Paper"
authors:
  - "Source record"
sources:
  - name: "Original source"
    url: "https://arxiv.org/abs/2608.07619v1"
ratingTrack: "paper"
groupRank: 6
groupScore: 89
scoreScale: "paper-v2"
title: "GWM-VLA: Geometry-Aware Latent World Modeling for Vision-Language-Action Learning"
summary: "已读取 arXiv PDF 全文；以下仅陈述论文原文能够核验的主张。"
keywords: ["具身智能","机器人操作","世界模型"]
previewImage: null
---

## 研究问题与贡献

论文原文摘要摘录（来源：arXiv PDF）：

> on visual appearance. Existing methods incorporate explicit Vision-Language-Action (VLA) models achieve strong robotic manipulation performance but often degrade under world models in different ways. World-action models such visual and environmental shifts. Latent world modeling of- as DreamZero (Ye et al. 2026) integrate future visual predic- fers a promising approach to improving robustness, yet exist- tion and action generation within a unified policy, whereas ing methods commonly encode camera views independently π0.7 (Physical Intelligence et al. 2026) uses a separate world and predict holistic scene dynamics without explicitly mod- model to generate visual subgoals for the VLA. However, eling their geometric relationships. We propose GWM-VLA, these explicit world models require generating future vi- a geometry-aware latent world modeling framework for VLA sual observations. Their prediction objectives must therefore learning. GWM-VLA combines geometry-aware multi-view model textures, lighting, backgrounds, and other appearance state encoding, global context-conditioned target-view pre- details in addition to control-relevant state changes. diction, and shared latent-action representations grounded by robot-action supervision. Specifically, VGGT-Ω jointly aggre- Latent world modeling offers a more compact alternative

该工作的问题设定、贡献边界和结论以论文全文为准；未在摘录或正文中确认的外推不作陈述。

## 方法与系统

全文方法/系统段落摘录：

> ing methods commonly encode camera views independently π0.7 (Physical Intelligence et al. 2026) uses a separate world and predict holistic scene dynamics without explicitly mod- model to generate visual subgoals for the VLA. However, arXiv:2608.07619v1 [cs.RO] 7 Aug 2026 eling their geometric relationships. We propose GWM-VLA, these explicit world models require generating future vi- a geometry-aware latent world modeling framework for VLA sual observations. Their prediction objectives must therefore learning. GWM-VLA combines geometry-aware multi-view model textures, lighting, backgrounds, and other appearance state encoding, global context-conditioned target-view pre- details in addition to control-relevant state changes. diction, and shared latent-action representations grounded by

## 实验设置与数据

全文实验、数据集或评测协议摘录：

> greater emphasis on end-effector motion and local gripper- JEPA uses a pretrained V-JEPA2 encoder (Assran et al. 2025) object interactions. Finally, the shared latent-action represen- tations condition both the latent world model and the flow- to encode each camera view independently and combines matching action head, allowing latent-prediction supervision the resulting features through concatenation. Consequently, and ground-truth robot-action supervision to jointly shape the cross-view geometric relationships, including visual corre- same latent-action representations. Experiments across both spondences and camera-relative scene structure, remain im- simulation and real-world environments demonstrate the ef- plicit.

## 结果、限制与结论

全文结果/结论段落摘录：

> eraged over suites, while LIBERO-Plus results are averaged Joint World-Model and Policy Learning over perturbation dimensions. GWM-VLA jointly optimizes teacher-forced next-step latent Baselines. We compare GWM-VLA with representative prediction and robot action generation: VLA, latent-action, and world-model-based methods, in- L = Laction + λLwm , (13) cluding LAPA (Ye et al. 2025), UniVLA (Bu et al. 2025b), OpenVLA-OFT (Kim, Finn, and Liang 2025), π0 (Black where λ balances the predictive and control objectives. We et al. 2024), π0 -FAST (Pertsch et al. 2025), CoT-VLA (Zhao use λ = 0.1 as the default world-model loss weight in the et al. 2025), WorldVLA (Cen et al. 2025), villa-X (Chen main experiments; a sensitivity analysis is provided in the et al. 2025a), GR00T N1 (Bjorck et al. 2025), π0.5 (In- appendix. This joint objective encourages the latent action to telligence et al. 2025), and VLA-JEPA (Sun et al. 2026).

限制：本文仅报告 PDF 中可核验的实验和作者结论；跨数据集、跨硬件或部署效果若未被原文证明，保留为未知。

## 来源链接

- https://arxiv.org/abs/2608.07619v1
