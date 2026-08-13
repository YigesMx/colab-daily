---
schemaVersion: 2
candidateId: "arxiv--2608.10600"
date: "2026-08-13"
category: "Paper"
ratingTrack: paper
groupRank: 7
groupScore: 88
scoreScale: paper-v2
title: "BooST: Bridging Semantics and Motions for Efficient Skill Transfer"
authors:
  - "Jusuk Lee"
  - "Daesol Cho"
  - "Jonghun Shin"
  - "Seungyeon Yoo"
  - "Jonghae Park"
  - "Taekbeom Lee"
  - "H. Jin Kim"
summary: "Skill abstraction---the process of learning reusable and temporally extended behaviors---has emerged as a key paradigm for improving sample efficiency and generalization in robot learning. For efficient skill transfer to real robots, learned skills must generalize across tasks and domains, remain robust to visual and dynamic perturbations, and be efficient enough for practical deployment. However, existing methods typically satisfy only a subset of these properties, as they capture either high-level semantic intent (what) or low-level motion dynamics (how). This incomplete skill transfer yields weak priors for policy learning, thereby demanding substantial in-domain data for downstream adaptation. To address these challenges, we introduce BooST, a two-stage framework that explicitly bridges semantics and motions to satisfy all three desiderata. BooST first leverages a cross-modal VQ-VAE to capture both semantic intent and motion dynamics, yielding a unified skill representation. It the"
provisionalKeywords:
  - "具身智能"
  - "世界模型"
  - "机器人学习"
keywords:
  - "强化学习"
  - "数据集与基准"
  - "安全与可靠性"

sources:
  - name: "原始来源"
    url: "https://arxiv.org/abs/2608.10600v1"
previewImage: "/daily/2026-08-13/assets/arxiv--2608.10600/preview.png"
---

# BooST: Bridging Semantics and Motions for Efficient Skill Transfer

## 研究问题与贡献

Skill abstraction---the process of learning reusable and temporally extended behaviors---has emerged as a key paradigm for improving sample efficiency and generalization in robot learning. For efficient skill transfer to real robots, learned skills must generalize across tasks and domains, remain robust to visual and dynamic perturbations, and be efficient enough for practical deployment. However, existing methods typically satisfy only a subset of these properties, as they capture either high-level semantic intent (what) or low-level motion dynamics (how). This incomplete skill transfer yields weak priors for policy learning, thereby demanding substantial in-domain data for downstream adaptation. To address these challenges, we introduce BooST, a two-stage framework that explicitly bridges semantics and motions to satisfy all three desiderata. BooST first leverages a cross-modal VQ-VAE to capture both semantic intent and motion dynamics, yielding a unified skill representation. It then distills this representation into a lightweight policy for efficient downstream adaptation to new tasks. Extensive experiments across simulation and real-robot settings demonstrate that BooST achieves superior few-shot adaptation, cross-domain skill transfer, and robustness to dynamic visual distractors, while maintaining a lightweight yet expressive design suitable for real-world deployment.

## 方法与系统

Robot Data satisfy only a subset of these properties, as they capture either Unified Skill high-level semantic intent (what) or low-level motion dynamics Motion Current (how). This incomplete skill transfer yields weak priors for (Action) Policy State Robot Action Seq. policy learning, thereby demanding substantial in-domain data arXiv:2608.10600v1 [cs.RO] 11 Aug 2026 for downstream adaptation. To address these challenges, we Unified Skill Pretraining Downstream Adaptation introduce BooST, a two-stage framework that explicitly bridges semantics and motions to satisfy all three desiderata. BooST first Fig. 1: Overview of BooST. Our framework consists of two leverages a cross-modal VQ-VAE to capture both semantic intent stages: (left) Unified Skill Pretraining, which learns a cross- and motion dynamics, yielding a unified skill representation. modal skill representation from large datasets, and (right) It then distills this representation into a lightweight policy for efficient downstream adaptation to new tasks. Extensive experi- Downstream Adaptation, which distills the learned skills into ments across simulation and real-robot settings demonstrate that a lightweight policy and skill prior for efficient adaptation. BooST achieves superior few-shot adaptation, cross-domain skill transfer, and robustness to dynamic visual distractors, while agents to efficiently adapt to novel tasks, even under limited maintaining a lightweight yet expressive design suitable for real- data availability. world deployment. Achieving such efficient skill transfer to real robots requires Index Terms—Representation Learning, Imitation Learning, three key properties: generalization, robustness, efficiency. Deep Learning in Grasping and Manipulation Skill representations should exhibit strong generalization, enabling transfer across novel scenes, tasks, and even to I. I NTRODUCTION different robotic embodiments. Realizing this level of gen- CENTRAL objective in robot learning is to develop eralization requires models to leverage extensive and hetero- A general-purpose agents capable of rapidly adapting to novel tasks in a zero-shot or few-shot manner. One promising geneous datasets, which inevitably contain visual noise [5]– [7]. Accordingly, skill learning should demonstrate robust- direction toward this goal is large-scale pretraining of reusable ness to visual distractors and back

## 实验设置与数据

It then distills this representation into a lightweight policy for efficient downstream adaptation to new tasks. Extensive experi- Downstream Adaptation, which distills the learned skills into ments across simulation and real-robot settings demonstrate that a lightweight policy and skill prior for efficient adaptation. BooST achieves superior few-shot adaptation, cross-domain skill transfer, and robustness to dynamic visual distractors, while agents to efficiently adapt to novel tasks, even under limited maintaining a lightweight yet expressive design suitable for real- data availability. world deployment. Achieving such efficient skill transfer to real robots requires Index Terms—Representation Learning, Imitation Learning, three key properties: generalization, robustness, efficiency. Deep Learning in Grasping and Manipulation Skill representations should exhibit strong generalization, enabling transfer across novel scenes, tasks, and even to I. I NTRODUCTION different robotic embodiments. Realizing this level of gen- CENTRAL objective in robot learning is to develop eralization requires models to leverage extensive and hetero- A general-purpose agents capable of rapidly adapting to novel tasks in a zero-shot or few-shot manner. One promising geneous datasets, which inevitably contain visual noise [5]– [7]. Accordingly, skill learning should demonstrate robust- direction toward this goal is large-scale pretraining of reusable ness to visual distractors and background variations, allowing robotic representations, inspired by the success of foundation effective pretraining without relying on filtered or curated models in computer vision and natural language process- data. Moreover, practical skill transfer requires efficiency, ing [1], [2]. In this context, skill abstraction has emerged as entailing lightweight yet expressive policies for real-world an effective paradigm for learning such robotic representations. deployment. While strong generalization typically demands By offering compact and reusable representations of tempo- large-scale models with high representational capacity [2], [5], rally extended behaviors that capture task-agnostic structures, such models are computationally prohibitive for real-world skills serve as a versatile prior that enables efficient adaptation robots due to latency and resource constraints. in the low-data regime of robot l

## 结果、限制与结论

cannot infer which action to perform from visual or language that achieves generalization, robustness, and efficiency simul- inputs. This lack of semantic grounding degrades downstream taneously, requiring substantial in-domain data for adaptation performance [20], [21] and increases the data required for to new scenes and tasks. adaptation. Moreover, low-level skills are tightly coupled to In this paper, we introduce BooST (Bridging semantics the pretraining action space, so skill transfer succeeds only and motions for Efficient Skill Transfer), a framework for when the downstream environment shares the same action learning a unified skill representation that captures both space. For example, skills learned from joint velocity action semantic intent (what) and motion dynamics (how). This space do not transfer to downstream tasks that use Cartesian representation enables cross-domain transfer with practical end-effector position control. In contrast, BooST integrates deployability and robustness to visual distractors, thereby semantic understanding with motion dynamics, yielding se- facilitating few-shot adaptation. BooST adopts a decoupled mantically grounded skills. Furthermore, BooST leverages the two-stage training paradigm. In the first stage, it pretrains a visuo-linguistic pathway alone during skill transfer, disentan- unified skill representation on large-scale and diverse datasets gling the learned representation from the pretraining action to jointly encode high-level semantics and low-level motions. space. This design enables skill transfer across heterogeneous At its core, BooST employs a cross-modal VQ-VAE [15], action spaces, supporting cross-embodiment skill transfer. [16] that learns a shared codebook via two pathways. The b) High-level skill abstractions: High-level skill methods visuo-linguistic pathway extracts semantic intent from visual map visual and linguistic inputs into discrete latent skill spaces observations and language instructions using a pretrained CLIP to encode semantic intent. One line of work [4], [11], [12] model [17] and a cross-attention mechanism. In parallel, the quantizes past observations and language instructions into dis- action pathway encodes motion dynamics from action trajecto- crete skills through vector quantization [22], but trains visual ries, grounding the learned semantics in executable behaviors. encode

## 来源链接

- https://arxiv.org/abs/2608.10600v1
- https://arxiv.org/pdf/2608.10600v1
