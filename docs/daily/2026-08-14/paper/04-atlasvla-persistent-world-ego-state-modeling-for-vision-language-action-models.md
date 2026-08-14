---
schemaVersion: 2
candidateId: "arxiv--2608.06729"
date: "2026-08-14"
category: "Paper"
ratingTrack: "paper"
groupRank: 4
groupScore: 90
scoreScale: "paper-v2"
title: "AtlasVLA: Persistent World-Ego State Modeling for Vision-Language-Action Models"
authors: ["Guiyu Zhao", "Longteng Guo", "Yanghong Mei", "Zilin Zhu", "Yu Zhang", "Bin Cao", "Mingming Yu", "Xingjian He", "Jie Jiang", "Jing Liu"]
summary: "AtlasVLA 以持久四维世界状态和自我工作状态弥补腕部相机的视野遗忘与任务进度遗忘，为动作生成提供可持续更新的世界—自我上下文。"
provisionalKeywords: ["视觉语言动作模型", "世界状态记忆", "长时操作", "部分可观测性", "腕部相机"]
keywords: ["视觉语言动作", "世界模型", "长时记忆"]
sources:
  - name: "原始来源 1"
    url: "https://arxiv.org/pdf/2608.06729v1"
  - name: "原始来源 2"
    url: "https://export.arxiv.org/e-print/2608.06729v1"
  - name: "原始来源 3"
    url: "https://ar5iv.labs.arxiv.org/html/2608.06729"
previewImage: "/daily/2026-08-14/assets/arxiv--2608.06729/preview.png"
---

# AtlasVLA: Persistent World-Ego State Modeling for Vision-Language-Action Models

> AtlasVLA 以持久四维世界状态和自我工作状态弥补腕部相机的视野遗忘与任务进度遗忘，为动作生成提供可持续更新的世界—自我上下文。

## 研究问题与贡献

仅用腕部相机的 VLA 在物体离开视野后会遗忘空间状态，也容易在多步任务中丢失进度。AtlasVLA 将反应式操作改造成基于持久 World-Ego 状态的主动推理，目标是在严格 wrist-only 观测下保持环境几何和执行历史。

## 方法与系统

4D Persistent World State Memory 把瞬时二维观察提升到全局更新的 voxel-hash 空间状态，并通过时空位置编码融合历史；Ego-Working State Memory 保存机器人自身状态、历史动作与任务进度。两类记忆共同条件化 diffusion transformer 动作生成器。世界状态处理视野外物体，自我工作状态抑制长时任务中的意图漂移。

## 实验设置与数据

评测包括 LIBERO、RLBench，以及真实机器人一般操作与长时任务；核心约束是仅使用腕部相机，并与单视角和多视角 VLA/记忆基线比较。LIBERO 每任务 50 次，RLBench 验证每任务 20 个 episode，真实任务表格以每项 50 次试验统计。消融分别移除世界状态、自我状态、空间位置编码和不同记忆长度/voxel 尺度，并报告延迟与显存。

## 结果、限制与结论

论文报告 AtlasVLA 在 LIBERO-Long 相对强基线绝对提升 9.4 个百分点，在真实长时任务提升 17.5 个百分点；RLBench wrist-only 平均成功率 70.8%。消融中移除世界状态条件使真实长时成功率下降约 8 个百分点，支持持久几何记忆的作用。代价是额外三维重建、检索和记忆维护，延迟与内存随场景规模增长；世界状态仍依赖深度/位姿质量，动态场景、严重遮挡和长期漂移下的稳健性当前材料未完全确认。

## 来源链接

- [arXiv](https://arxiv.org/abs/2608.06729)
- [PDF](https://arxiv.org/pdf/2608.06729)
