---
schemaVersion: 2
candidateId: "arxiv--2608.09771"
date: "2026-08-12"
category: "Paper"
authors:
  - "Source record"
sources:
  - name: "Original source"
    url: "https://arxiv.org/abs/2608.09771v1"
ratingTrack: "paper"
groupRank: 8
groupScore: 87
scoreScale: "paper-v2"
title: "SLIM-0.5B: Learning Action-Grounded Predictive Latents for Robot Manipulation"
summary: "已读取 arXiv PDF 全文；以下仅陈述论文原文能够核验的主张。"
keywords: ["具身智能","机器人操作","世界模型"]
previewImage: null
---

## 研究问题与贡献

论文原文摘要摘录（来源：arXiv PDF）：

> Jingkai Wang1,2,∗ Zihan Tang3,2,∗ Gu Zhang3 Mingyu Cao2 Jiapeng Chen1 Jingjiao Zhao4,2 Xiansheng Chen2 Pengwei Wang2 Fudan University 2 Beijing Academy of Artificial Intelligence Tsinghua University 4 Renmin University of China https://kzz1031.github.io/slim-project-page/ Encoder Encoder Encoder Latency Real-world Eval (a) Overall Pipeline of Self-supervised Latent Interaction Model (b) Quantitative Results Figure 1: Overview of SLIM. A compact MoT backbone models interactions among observation latents, continuous action tokens, and predictive future slots. Complementary inverse- and forward-dynamics objectives learn action-grounded predictive latents from robot trajectories, enabling robust, low-latency control with a compact policy. Vision-language-action policies rely on large multimodal backbones to jointly per- form perception, language conditioning, and action generation at every control step. Much of this capacity supports open-domain semantics, whereas continuous robot manipulation primarily requires compact representations of observations, actions, and the transitions induced by actions. Pixel-level world models provide another route, but predicting visual details irrelevant to control can be unneces- sarily expensive. We propose SLIM (Self-supervised Latent Interaction Model),

该工作的问题设定、贡献边界和结论以论文全文为准；未在摘录或正文中确认的外推不作陈述。

## 方法与系统

全文方法/系统段落摘录：

> Figure 1: Overview of SLIM. A compact MoT backbone models interactions among observation latents, continuous action tokens, and predictive future slots. Complementary inverse- and forward-dynamics objectives learn action-grounded predictive latents from robot trajectories, enabling robust, low-latency control with a compact policy. Vision-language-action policies rely on large multimodal backbones to jointly per- form perception, language conditioning, and action generation at every control step. Much of this capacity supports open-domain semantics, whereas continuous robot manipulation primarily requires compact representations of observations,

## 实验设置与数据

全文实验、数据集或评测协议摘录：

> or exceeds representative large-scale VLA and world-action-model baselines with fewer parameters, no additional embodied pretraining, lower inference latency, and substantially lower GPU memory usage. Language-conditioned robot manipulation is increasingly shaped by two modeling paradigms. The first treats robot control as an extension of large vision-language models: vision-language-action (VLA) policies place perception, instruction understanding, and action generation within a shared multimodal backbone (Zitkovich et al., 2023; Driess et al., 2023; Kim et al., 2024; Black et al., 2024; Physical Intelligence et al., 2025; NVIDIA et al., 2025). This strategy brings strong semantic priors

## 结果、限制与结论

全文结果/结论段落摘录：

> Figure 1: Overview of SLIM. A compact MoT backbone models interactions among observation latents, continuous action tokens, and predictive future slots. Complementary inverse- and forward-dynamics objectives learn action-grounded predictive latents from robot trajectories, enabling robust, low-latency control with a compact policy. Vision-language-action policies rely on large multimodal backbones to jointly per- form perception, language conditioning, and action generation at every control step. Much of this capacity supports open-domain semantics, whereas continuous robot manipulation primarily requires compact representations of observations, actions, and the transitions induced by actions. Pixel-level world models provide another route, but predicting visual details irrelevant to control can be unneces-

限制：本文仅报告 PDF 中可核验的实验和作者结论；跨数据集、跨硬件或部署效果若未被原文证明，保留为未知。

## 来源链接

- https://arxiv.org/abs/2608.09771v1
