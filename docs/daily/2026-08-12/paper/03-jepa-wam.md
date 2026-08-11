---
schemaVersion: 2
candidateId: "arxiv--2608.09381"
date: "2026-08-12"
category: "Paper"
authors:
  - "Source record"
sources:
  - name: "Original source"
    url: "https://arxiv.org/abs/2608.09381v1"
ratingTrack: "paper"
groupRank: 3
groupScore: 92
scoreScale: "paper-v2"
title: "JEPA-WAM: Learning Vision-Language-Action Policies with Joint-Embedding World Modeling"
summary: "已读取 arXiv PDF 全文；以下仅陈述论文原文能够核验的主张。"
keywords: ["具身智能","机器人操作","世界模型"]
previewImage: null
---

## 研究问题与贡献

论文原文摘要摘录（来源：arXiv PDF）：

> Robust robot control benefits from explicitly modeling Prediction state transitions, but video-generation world action models Predictor (WAMs) introduce substantial deployment cost. Existing la- Representation Action tent WAMs avoid explicit future generation, but often com- Success press predictive representations or separate predictive mod- eling from the representations used for action generation. Performance Out-of-Domain In-Domain We introduce JEPA-WAM, a latent WAM built in a pre- Being-H0.7 trained V-JEPA space, which couples latent transition pre- VLA-Adapter diction with continuous action generation through a shared predictor. JEPA-WAM predicts a spatially structured joint cur- 77.1 / 96.6 79.2 / 96.7 rent–future target that captures task-shared visual temporal π0 structure between current and future observations, while pre- serving dense patch-level correspondence. Through the shared LIBERO- predictor, transition supervision directly shapes the backbone, w/o Robot Pretrain w/ Robot Pretrain π0 JEPA-WAM π0.5 π0.5+JEPA Obj. *The area represents the model backbone's parameter count. (w/o PT.) from which dedicated representations are extracted for ac- tion prediction. The same design can also be instantiated in pretrained VLA policies while preserving their original Figure 1: Overview and performance of JEPA-WAM. Top:

该工作的问题设定、贡献边界和结论以论文全文为准；未在摘录或正文中确认的外推不作陈述。

## 方法与系统

全文方法/系统段落摘录：

> Robust robot control benefits from explicitly modeling Prediction arXiv:2608.09381v1 [cs.RO] 10 Aug 2026 state transitions, but video-generation world action models Predictor (WAMs) introduce substantial deployment cost. Existing la- Representation Action tent WAMs avoid explicit future generation, but often com- Success press predictive representations or separate predictive mod- eling from the representations used for action generation. Performance Out-of-Domain In-Domain We introduce JEPA-WAM, a latent WAM built in a pre- Being-H0.7

## 实验设置与数据

全文实验、数据集或评测协议摘录：

> space of JEPA-WAM, representing both the current visual temporal offset. state and the joint current–future target for temporal super- V-JEPA 2.1 uses modality-specific tokenizers, with its vision. A frozen V-JEPA 2.1 encoder EJ provides dense video tokenizer grouping every two frames into one tem- patch-level representations rather than a globally pooled rep- poral tubelet. Therefore, the two-frame joint input produces resentation. We refer to these representations as spatially the same spatial token grid as a single image, so Yt,t+δ and structured because the tokens retain their patch organization Zt share the same camera and spatial-token ordering. within each view and are arranged in a fixed camera order Unlike a future-only target EJ (Ot+δ ), which represents across views. We denote the resulting current representation the future observation in isolation, the joint target makes

## 结果、限制与结论

全文结果/结论段落摘录：

> robot-policy pretraining, while its pretrained π0.5 instantiation dictor. Bottom: JEPA-WAM maintains strong in-distribution reaches 86.3%, achieving the best overall performance. Ex- performance while improving generalization under out-of- periments on RoboTwin 2.0 and real-world bimanual manipu- distribution shifts across LIBERO, RoboTwin 2.0, and real- lation further demonstrate strong generalization under visual world manipulation; the same transition supervision also and spatial shifts. The project page is available on GitHub. benefits pretrained π0.5 . Vision-language-action (VLA) policies have achieved strong retain predictive world modeling without generating future performance across diverse manipulation tasks (Kim et al. observations. 2024; Black et al. 2024; Liu et al. 2025), but their action Without explicit future-frame generation, latent WAMs prediction objectives model state transitions only implicitly, must address two complementary design questions: what which can limit robustness under distribution shift. World predictive target should be learned, and how should pre-

限制：本文仅报告 PDF 中可核验的实验和作者结论；跨数据集、跨硬件或部署效果若未被原文证明，保留为未知。

## 来源链接

- https://arxiv.org/abs/2608.09381v1
