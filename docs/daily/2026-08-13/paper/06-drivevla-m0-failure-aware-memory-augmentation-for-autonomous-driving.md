---
schemaVersion: 2
candidateId: "arxiv--2608.10413"
date: "2026-08-13"
category: "Paper"
ratingTrack: paper
groupRank: 6
groupScore: 87
scoreScale: paper-v2
title: "DriveVLA-M0: Failure-Aware Memory Augmentation for Autonomous Driving"
authors:
  - "Zebin Xing"
  - "Yupeng Zheng"
  - "Qiang Chen"
  - "Linbo Wang"
  - "Yichen Zhang"
  - "Pengxuan Yang"
  - "Junli Wang"
  - "Deheng Qian"
  - "Xiaoqing Ye"
  - "Junyu Han"
  - "Yifeng Pan"
  - "Qichao Zhang"
  - "Dongbin Zhao"
summary: "Vision-Language-Action (VLA) models have recently emerged as a promising paradigm for end-to-end autonomous driving by enabling unified reasoning across perception, language, and planning. However, existing approaches lack mechanisms to exploit past failures or adapt to distribution shifts, causing the model to persistently underperform on similar scenarios where it has previously failed. In this paper, we propose DriveVLA-M0, a retrieval-augmented VLA with failure-aware latent memory. We construct a latent memory pool that stores failure cases along with their structure scene representations and expert trajectory labels, and design a dedicated Retrieve Model that decouples static road structure and dynamic agent interactions to enable structurally grounded retrieval. At inference time, retrieved cases are injected into the model via a lightweight decoupled LoRA-based test-time training (TTT) mechanism, allowing targeted and scenario-specific correction without modifying the backbone. "
provisionalKeywords:
  - "具身智能"
  - "世界模型"
  - "机器人学习"
keywords:
  - "生成模型"
  - "强化学习"
  - "数据集与基准"

sources:
  - name: "原始来源"
    url: "https://arxiv.org/abs/2608.10413v1"
previewImage: "/daily/2026-08-13/assets/arxiv--2608.10413/preview.png"
---

# DriveVLA-M0: Failure-Aware Memory Augmentation for Autonomous Driving

## 研究问题与贡献

Vision-language-action models in autonomous driving leverage adaptation with minimal overhead. The key advantage of DriveVLA- large vision-language models (VLMs) to integrate semantic rea- M0 lies in the synergy between memory retrieval and test-time soning and high-level scene understanding into driving decisions, adaptation: memory provides access to past and external failure attracting significant interest for their potential in generalization experiences, while TTT allows the VLA model to dynamically inte- and scalability. Early work, such as LMDrive [35] demonstrated grate this knowledge into its driving policy. Together, they enable the important role of vision-language models in following driving the model to handle scenarios that were previously failure-prone instructions. Subsequent studies [22, 41, 63], show that reasoning and improve robustness to distribution shifts without requiring mechanisms based on language models can substantially improve large-scale retraining. performance in complex driving scenarios. Extensive experiments on NAVSIMv1 [8] and NAVSIMv2 [4] Despite these promising results, existing VLA-based driving mod- demonstrate the effectiveness of our approach. DriveVLA-M0 achieves els often repeat similar mistakes in similar scenarios, lacking the state-of-the-art performance across multiple metrics, reaching 94.1 ability to directly associate the current situation with past failures. PDMS on NAVSIMv1 and 47.0 EPDMS on NAVSIMv2, demonstrat- Studies [2, 3] on human physiology and behavior have shown that ing superior results in safety-critical indicators such as collision humans link ongoing situations with historical errors, predicting avoidance and drivable area compliance. Moreover, we show that the likelihood of failure in the current context and adjusting their our framework scales naturally with external memory, enabling fur- behavior accordingly. Motivated by this, we introduce an explicit ther gains through synthetic data augmentation without modifying latent memory that records failure cases, enabling associative re- the base model. Our contributions are as follows: trieval and error likelihood assessment at test time, allowing the model to selectively adjust its planning based on prior failures. • We propose a failure-aware memory augmentation frame- In parallel, memory-augmented methods have shown strong work for VLA-based 

## 方法与系统

Reasoning Planning Failure Scene (b) Ours Retrieve Extract Retrieve Latent Model Structure Infos Similar Scenes Memory Safe Gradient Descent VLM Action Model Decoder Figure 1: We propose DriveVLA-M0, a failure-aware memory augmentation VLA framework. (a) Classic VLA: VLMs perform scene reasoning in vision-language space and pass intermediate features to an Action Decoder for planning. The red trajectories indicate the model’s likely selections. (b) Ours: We retrieve structurally similar failure cases using Retrieved Model from a latent memory pool and inject them into the Action Decoder via LoRA-based test-time training for scenario-specific correction. (c) Performance: DriveVLA-M0 achieves SOTA on Navtest (NAVSIMv1, blue) and Navhard (NAVSIMv2, orange). Abstract ∗ Equal contribution. Vision-Language-Action (VLA) models have recently emerged as † Corresponding author. a promising paradigm for end-to-end autonomous driving by en- abling unified reasoning across perception, language, and planning. However, existing approaches lack mechanisms to exploit past fail- ures or adapt to distribution shifts, causing the model to persistently This work is licensed under a Creative Commons Attribution 4.0 International License. underperform on similar scenarios where it has previously failed. In MM ’26, Rio de Janeiro, Brazil © 2026 Copyright held by the owner/author(s). this paper, we propose DriveVLA-M0, a retrieval-augmented VLA ACM ISBN 979-8-4007-2213-4/2026/11 with failure-aware latent memory. We construct a latent memory https://doi.org/10.1145/3767308.3835233 MM ’26, November 10–14, 2026, Rio de Janeiro, Brazil Xing and Zheng et al. pool that stores failure cases along with their structure scene rep- been introduced into VLA-style embodied agents, such as Memo- resentations and expert trajectory labels, and design a dedicated ryVLA [36] and EchoVLA [25], primarily to improve long-horizon Retrieve Model that decouples static road structure and dynamic reasoning and task consistency. agent interactions to enable structurally grounded retrieval. At Existing VLA-based methods in Embodied AI typically use in- inference time, retrieved cases are injected into the model via a termediate vision-language features as retrieval keys for memory. lightweight decoupled LoRA-based test-time training (TTT) mech- However, unlike robotic manipulation, autonomous driving plan- ani

## 实验设置与数据

NAVSIMv2 benchmark demonstrate that our approach consistently and (2) scene structure information (e.g., road topology). Using outperforms prior methods, achieving 94.1 PDMS on Navtest and vision-language features directly as retrieval keys makes it difficult 47.0 EPDMS on Navhard with only 26.44 ms TTT backward la- to effectively capture these two critical aspects, leading to retrieved tency overhead. Furthermore, we show that DriveVLA-M0 scales cases that may differ significantly from the current scenario in effectively with additional memory, enabling training-free perfor- terms of dynamics and structure—differences that are essential for mance gains through memory expansion. The code is available at robust decision-making and failure recovery. https://github.com/ZebinX/DriveVLA-M0. To address this, we propose DriveVLA-M0 1, a framework that integrates failure-aware memory with test-time adaptation for VLA- CCS Concepts based driving. Our key insight is that effective memory augmenta- • Computing methodologies → Vision for robotics. tion for autonomous driving requires two properties: (1) structural retrieval: retrieving cases based on scene-level similarity with re- Keywords spect to dynamic and physical structure rather than vision-language similarity; and (2) failure awareness: focusing on scenarios where Autonomous Driving, Vision-Language-Action Model, Memory the base model underperforms. ACM Reference Format: Our approach consists of two stages. In the offline stage (Mem- Zebin Xing, Yupeng Zheng, Qiang Chen, Linbo Wang, Yichen Zhang, Pengx- ory Generation), we construct a latent memory pool by identifying uan Yang, Junli Wang, Deheng Qian, Xiaoqing Ye, Junyu Han, Yifeng Pan, failure scenarios via oracle simulation metrics and storing their in- Qichao Zhang, and Dongbin Zhao. 2026. DriveVLA-M0: Failure-Aware termediate representations, including scene embeddings, trajectory Memory Augmentation for Autonomous Driving. In Proceedings of the clusters, and expert signals. To enable effective retrieval, we train a 34th ACM International Conference on Multimedia (MM ’26), November dedicated Retrieve Model that explicitly captures static road struc- 10–14, 2026, Rio de Janeiro, Brazil. ACM, New York, NY, USA, 15 pages. ture and dynamic agent interactions using a dual-branch design. In https://doi.org/10.1145/3767308.3835233 the online stage (Inference with

## 结果、限制与结论

els often repeat similar mistakes in similar scenarios, lacking the state-of-the-art performance across multiple metrics, reaching 94.1 ability to directly associate the current situation with past failures. PDMS on NAVSIMv1 and 47.0 EPDMS on NAVSIMv2, demonstrat- Studies [2, 3] on human physiology and behavior have shown that ing superior results in safety-critical indicators such as collision humans link ongoing situations with historical errors, predicting avoidance and drivable area compliance. Moreover, we show that the likelihood of failure in the current context and adjusting their our framework scales naturally with external memory, enabling fur- behavior accordingly. Motivated by this, we introduce an explicit ther gains through synthetic data augmentation without modifying latent memory that records failure cases, enabling associative re- the base model. Our contributions are as follows: trieval and error likelihood assessment at test time, allowing the model to selectively adjust its planning based on prior failures. • We propose a failure-aware memory augmentation frame- In parallel, memory-augmented methods have shown strong work for VLA-based autonomous driving that explicitly tar- potential across agent systems, robotics, and sequence modeling. gets poorly performing scenarios. Approaches such as MANTRA [31] and MemoNet [53] retrieve • We design a structurally grounded retrieval mechanism that prototypical trajectories for motion prediction, while agent systems decouples static and dynamic scene features and integrate it like JARVIS-1 [48] and MemGen [57] leverage episodic memory with a decoupled LoRA-based test-time training strategy for for long-horizon decision-making. More recently, memory has also efficient, targeted online adaptation. DriveVLA-M0: Failure-Aware Memory Augmentation for Autonomous Driving MM ’26, November 10–14, 2026, Rio de Janeiro, Brazil [M] Memory Generation Add to Memory DINO Simulation Failure? Action Backbone Decoder Ego Status [I] Inference with TTT Decoupled LoRA Retrieve Trigger Latent Memory DINO Gradient Descent Router Backbone Action Decoder Score Head 𝐵 𝐵 Pretrained ViT Compress LLM 𝐴 𝐴 You are a vehicle planning expert… Traj Head Input State Ego Status Map Embed Agent Embed Lang Embed Ego Embed Traj Cluster Scores Traj Figure 2: Overview of DriveVLA-M0. (Top) [M] Memory Generation: Scenarios where the base m

## 来源链接

- https://arxiv.org/abs/2608.10413v1
- https://arxiv.org/pdf/2608.10413v1
