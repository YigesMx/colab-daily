---
schemaVersion: 2
candidateId: "arxiv--2608.10107"
date: "2026-08-13"
category: "Paper"
ratingTrack: paper
groupRank: 1
groupScore: 89
scoreScale: paper-v2
title: "4D-WAM: 4D Consistent World Modeling for Autonomous Driving"
authors:
  - "Jiacheng Fu"
  - "Yibo Yuan"
  - "Meng Tian"
  - "Yue Li"
  - "Jiangtong Zhu"
  - "Jianhua Han"
  - "Yueyi Zhang"
  - "Jianwu Fang"
  - "Jianru Xue"
  - "Hang Xu"
  - "Zhiwei Xiong"
summary: "Emerging World-Action Models (WAMs) have demonstrated promising performance in autonomous driving by jointly modeling future driving scene evolution and trajectory planning. However, existing WAMs are typically trained with video data, which is only 2D projections of the underlying 4D driving scene. Consequently, WAMs fail to understand and capture the structure of 4D scenes and thus generate visually plausible yet 4D inconsistent future predictions that mislead downstream planning. To alleviate this issue, we present 4D-WAM, a model that leverages geometric foundation models for training-time supervision to enable 4D consistent world modeling. Specifically, we feed WAM-predicted future frames into a geometric foundation model, and use 4D-aware responses to define a 4D consistency loss. This loss encourages the model to understand, represent, and predict physically consistent 4D scenes during training, without additional inference cost. Moreover, we identify an early-decision phenomeno"
provisionalKeywords:
  - "具身智能"
  - "世界模型"
  - "机器人学习"
keywords:
  - "自动驾驶"
  - "机器人学习"
  - "视觉语言模型"

sources:
  - name: "原始来源"
    url: "https://arxiv.org/abs/2608.10107v1"
previewImage: "/daily/2026-08-13/assets/arxiv--2608.10107/preview.png"
---

# 4D-WAM: 4D Consistent World Modeling for Autonomous Driving

## 研究问题与贡献

Autonomous driving (AD) systems aim to perceive complex traffic scenes, reason about surrounding participants, and existing VLAs remains only loosely coupled with trajectory generate safe, comfortable, and rule-compliant behaviors. prediction, limiting its effectiveness (Li et al. 2026c). These Vision-language-action (VLA) models have been widely ex- two problems are difficult to overcome by merely scaling up plored in recent years as a paradigm for end-to-end AD, action-labeled data. leveraging large-scale multimodal pretraining to unify visual understanding, language-level reasoning, and trajectory or World-Action Models (WAMs) have emerged as a new control generation within a single policy (Xu et al. 2024; paradigm to address these limitations. Rather than mapping Tian et al. 2025; Shao et al. 2024; Zhou et al. 2026b). observations directly to actions, WAMs jointly model and However, VLAs face two fundamental limitations in tra- predict future scene evolution and actions. Such joint model- jectory planning. First, although language excels at seman- ing provides denser spatiotemporal supervision and stronger tic abstraction and high-level reasoning, it is not naturally foresight into scene evolution and surrounding-agent motion, suited to the continuous, fine-grained spatiotemporal rea- thereby improving planning, particularly in complex driving soning demanded by driving. Second, linguistic reasoning in scenarios (Li et al. 2025; Pai et al. 2025; Ye et al. 2026; Bi et al. 2026). However, existing WAMs are supervised by ∗ These authors contributed equally. videos, where each frame is only a 2D projection of the under- † Corresponding author. lying dynamic 4D driving scene. This raises a fundamental question: WAMs may produce visually plausible predictions, Related Work but do they truly understand the 4D world and ensure that the predicted frames correspond to a physically consistent World-Action Models 4D scene? As demonstrated in (Wu et al. 2025), depth-head Existing WAMs can be broadly grouped into two lines: probing of the intermediate features of world models reveals VLM-based WAMs and video-generation-based WAMs. The that these models struggle to understand and capture the first line extends VLA policies with future-scene prediction. underlying structure of a 4D scene. Consequently, their pre- VLA-World (Wang et al. 2026a) generates future observa- d

## 方法与系统

Jiacheng Fu1∗ , Yibo Yuan2∗ , Meng Tian3 , Yue Li3 , Jiangtong Zhu3 , Jianhua Han3 , Yueyi Zhang4 , Jianwu Fang2 , Jianru Xue2 , Hang Xu3 , Zhiwei Xiong1† 1 University of Science and Technology of China 2 Xi’an Jiaotong University 3 Yinwang Intelligent Technology Co., Ltd. 4 Midea Group jc_fu@mail.ustc.edu.cn zwxiong@ustc.edu.cn Abstract 4D Reconstruction Failure × Velocity Prediction Error × WAM Video Prediction Emerging World-Action Models (WAMs) have demonstrated promising performance in autonomous driving by jointly modeling future driving scene evolution and trajectory plan- Lead Agent ! ning. However, existing WAMs are typically trained with Collision ! Predicted Too Far video data, which is only 2D projections of the underlying arXiv:2608.10107v1 [cs.CV] 10 Aug 2026 4D driving scene. Consequently, WAMs fail to understand and capture the structure of 4D scenes and thus generate visu- Coherent Reconstruction ✓ Accurate Velocity Prediction ✓ 4D-WAM Video Prediction ally plausible yet 4D inconsistent future predictions that mis- lead downstream planning. To alleviate this issue, we present 4D-WAM, a model that leverages geometric foundation mod- els for training-time supervision to enable 4D consistent world modeling. Specifically, we feed WAM-predicted future frames into a geometric foundation model, and use 4D-aware re- sponses to define a 4D consistency loss. This loss encourages ✓ the model to understand, represent, and predict physically (a) Case 1: 4D Reconstruction Failure (b) Case 2: Velocity Prediction Error consistent 4D scenes during training, without additional in- ference cost. Moreover, we identify an early-decision phe- Figure 1: Existing WAMs, trained with 2D video supervi- nomenon in WAMs and propose a decision-oriented timestep sampling strategy that emphasizes supervision at early, high- sion, fail to capture the structure of underlying 4D driving noise stages, where driving decisions are primarily formed. By scenes. This leads to two critical failure modes in complex propagating 4D supervision to this critical decision-formation driving scenarios. (a) 4D Reconstruction Failure. Highly phase, the proposed strategy further improves trajectory plan- dynamic objects exhibit visual artifacts and geometric de- ning. Extensive experiments demonstrate that 4D-WAM ef- formation. (b) Velocity Prediction Error. Lacking reliable fectively models 4

## 实验设置与数据

fectively models 4D consistent scene evolution and achieves distance perception, WAMs fail to predict the lead agent’s state-of-the-art performance on challenging NAVSIM-v1 and velocity, resulting in a collision. Through 4D consistency su- NAVSIM-v2 benchmarks. pervision, 4D-WAM effectively addresses both failure modes and achieves 4D consistent world modeling. Introduction Autonomous driving (AD) systems aim to perceive complex traffic scenes, reason about surrounding participants, and existing VLAs remains only loosely coupled with trajectory generate safe, comfortable, and rule-compliant behaviors. prediction, limiting its effectiveness (Li et al. 2026c). These Vision-language-action (VLA) models have been widely ex- two problems are difficult to overcome by merely scaling up plored in recent years as a paradigm for end-to-end AD, action-labeled data. leveraging large-scale multimodal pretraining to unify visual understanding, language-level reasoning, and trajectory or World-Action Models (WAMs) have emerged as a new control generation within a single policy (Xu et al. 2024; paradigm to address these limitations. Rather than mapping Tian et al. 2025; Shao et al. 2024; Zhou et al. 2026b). observations directly to actions, WAMs jointly model and However, VLAs face two fundamental limitations in tra- predict future scene evolution and actions. Such joint model- jectory planning. First, although language excels at seman- ing provides denser spatiotemporal supervision and stronger tic abstraction and high-level reasoning, it is not naturally foresight into scene evolution and surrounding-agent motion, suited to the continuous, fine-grained spatiotemporal rea- thereby improving planning, particularly in complex driving soning demanded by driving. Second, linguistic reasoning in scenarios (Li et al. 2025; Pai et al. 2025; Ye et al. 2026; Bi et al. 2026). However, existing WAMs are supervised by ∗ These authors contributed equally. videos, where each frame is only a 2D projection of the under- † Corresponding author. lying dynamic 4D driving scene. This raises a fundamental question: WAMs may produce visually plausible predictions, Related Work but do they truly understand the 4D world and ensure that the predicted frames correspond to a physically consistent World-Action Models 4D scene? As demonstrated in (Wu et al. 2025), depth-head Existing WAMs can be broad

## 结果、限制与结论

NAVSIM-v2 benchmarks. pervision, 4D-WAM effectively addresses both failure modes and achieves 4D consistent world modeling. Introduction Autonomous driving (AD) systems aim to perceive complex traffic scenes, reason about surrounding participants, and existing VLAs remains only loosely coupled with trajectory generate safe, comfortable, and rule-compliant behaviors. prediction, limiting its effectiveness (Li et al. 2026c). These Vision-language-action (VLA) models have been widely ex- two problems are difficult to overcome by merely scaling up plored in recent years as a paradigm for end-to-end AD, action-labeled data. leveraging large-scale multimodal pretraining to unify visual understanding, language-level reasoning, and trajectory or World-Action Models (WAMs) have emerged as a new control generation within a single policy (Xu et al. 2024; paradigm to address these limitations. Rather than mapping Tian et al. 2025; Shao et al. 2024; Zhou et al. 2026b). observations directly to actions, WAMs jointly model and However, VLAs face two fundamental limitations in tra- predict future scene evolution and actions. Such joint model- jectory planning. First, although language excels at seman- ing provides denser spatiotemporal supervision and stronger tic abstraction and high-level reasoning, it is not naturally foresight into scene evolution and surrounding-agent motion, suited to the continuous, fine-grained spatiotemporal rea- thereby improving planning, particularly in complex driving soning demanded by driving. Second, linguistic reasoning in scenarios (Li et al. 2025; Pai et al. 2025; Ye et al. 2026; Bi et al. 2026). However, existing WAMs are supervised by ∗ These authors contributed equally. videos, where each frame is only a 2D projection of the under- † Corresponding author. lying dynamic 4D driving scene. This raises a fundamental question: WAMs may produce visually plausible predictions, Related Work but do they truly understand the 4D world and ensure that the predicted frames correspond to a physically consistent World-Action Models 4D scene? As demonstrated in (Wu et al. 2025), depth-head Existing WAMs can be broadly grouped into two lines: probing of the intermediate features of world models reveals VLM-based WAMs and video-generation-based WAMs. The that these models struggle to understand and capture the first line extends VLA policies with future

## 来源链接

- https://arxiv.org/abs/2608.10107v1
- https://arxiv.org/pdf/2608.10107v1
