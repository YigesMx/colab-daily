---
schemaVersion: 2
candidateId: "arxiv--2608.06729"
date: "2026-08-11"
title: "AtlasVLA: Persistent World-Ego State Modeling for Vision-Language-Action Models"
authors:
  - "Guiyu Zhao"
  - "Longteng Guo"
  - "Yanghong Mei"
  - "Zilin Zhu"
  - "Yu Zhang"
  - "Bin Cao"
  - "MingMing Yu"
  - "Xingjian He"
  - "Jie Jiang"
  - "Jing Liu"
summary: "AtlasVLA 针对腕部相机下的空间和任务进度遗忘，维护 4D Persistent World State 与 Ego-Working State 双记忆，并以二者条件化扩散动作专家。论文在仅腕部相机条件下报告 LIBERO 平均 97.6%、RLBench 平均 70.8%，真实长时任务平均 69.5%。"
keywords:
  - "具身持久记忆"
  - "长时程机器人操作"
category: "Paper"
ratingTrack: "paper"
groupRank: 3
groupScore: 88
scoreScale: "paper-v2"
sources:
  - name: "arXiv full HTML"
    url: "https://arxiv.org/html/2608.06729v1"
previewImage: null
---

## 研究问题与贡献

论文关注单腕部相机 VLA 在部分可观测、长时程操作中的两类遗忘：物体离开视野后的感知遗忘，以及多步执行中的任务进度遗忘。AtlasVLA 的研究贡献是把反应式的“观察-动作”改造成带持久 world-ego 隐状态的策略：空间记忆保存被暂时看不见的工作区，ego 记忆保存历史意图和子任务进度，再联合用于动作生成。该问题直接连接 VLA、机器人操作、空间记忆和长时程控制。

## 方法与系统

Persistent World State Memory 从腕部 RGB 提取视觉 token，用 Depth Anything v3 估计深度，再结合相机内外参回投到 3D；空间上用受 TSDF 启发的 voxel hashing 和置信度加权融合，时间上用滑动窗口，并永久保留首帧锚点。Ego-Working State Memory 用 intent-aware learnable queries 从多模态 token 中提取任务状态和进度，通过冗余感知 consolidation 维护记忆库，再检索当前相关意图。动作专家是约 300M 参数的 DiT，逐扩散步先关注 ego 状态、再关注 ego 引导检索出的世界状态，最后解码 7-DoF 动作。

模型以 OpenVLA-7B/LLaMA-2 7B 语义骨干和视觉编码器为基础；训练使用全局 batch 256、学习率 2e-5，动作块大小 16，在线 DDIM 10 步、CFG 1.5。Persistent World Memory 容量为 2048 token、体素大小 0.025 m，ego working token 数为 4。上述配置来自论文附录，而非从摘要推断。

## 实验设置与数据

LIBERO 包含 Spatial、Object、Goal、Long、90 五个套件，每任务 50 条示范；前三个套件各训练 20k 步，Long/90 联合训练 40k 步，每任务 50 次 rollout。RLBench 使用每任务 100 条示范、80k 步训练，在 6 个代表任务上每任务 20 次验证，输入为单个 128x128 腕部 RGB。真实实验使用 7-DoF Franka 和单个末端 Intel RealSense D415，包含 6 个一般操作任务和 4 个长时任务，每任务 50 次。基线包括 OpenVLA、pi0、CogACT、MemoryVLA 等；所有结果取最终训练检查点。

## 结果、限制与结论

腕部相机 LIBERO 平均成功率为 97.6%，LIBERO-Long 为 94.6%；RLBench 平均为 70.8%。真实一般任务平均为 78.7%，真实长时任务平均为 69.5%，相对 pi0 提升 17.5 个百分点、相对 MemoryVLA 提升 9.0 个百分点。消融显示，移除 world memory 后真实长时成功率从 69.5% 降到 54.0%，移除 ego memory 降到 56.5%；用朴素累积替换时空更新降到 58.0%，去掉 world state conditioning 降到 61.5%。这些结果支持双记忆和更新/检索设计，但仍是作者在特定模拟器、硬件和任务上的报告。

论文未在结论中给出完整的跨物体、跨机器人或安全失败分类；部署延迟和 GPU 资源的附录比较显示 AtlasVLA 为 0.158 s、101.3 Hz、18.1 GB，但这不等价于所有硬件上的实时保证。主要可观察限制是严格腕部视角、固定任务套件和依赖深度估计及相机外参；对更大场景、未知机器人形态和分布外遮挡的泛化，原文未报告。

## 来源链接

- 原始论文全文：https://arxiv.org/abs/2608.06729v1
