---
candidateId: "url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-08-16-8"
date: "2026-08-17"
category: "Paper"
title: "港中文联手中科大提出VideoCoCo，重新定义物理视频生成新范式"
authors:
  - "arxiv.org"
summary: "VideoCoCo 用可执行 Blender 代码作为过程级思维链，先生成确定性物理草稿再交给视频编辑引擎，在两个视频基准上显著提升。"
provisionalKeywords:
  - "视频生成"
  - "模型架构"
  - "基准评测"
  - "多智能体协作"
keywords:
  - "视频生成"
  - "模型架构"
  - "基准评测"
  - "多智能体协作"
sources:
  - name: "arxiv.org"
    url: "https://arxiv.org/html/2607.27380v1"
  - name: "github.com"
    url: "https://github.com/micky-li-hd/VideoCoCo"
  - name: "www.jiqizhixin.com"
    url: "https://www.jiqizhixin.com/articles/2026-08-16-8"
previewImage: "/daily/2026-08-17/assets/url--https_3a_2f_2fwww.jiqizhixin.com_2farticles_2f2026-08-16-8/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 84
scoreScale: "paper-v2"
---

# 港中文联手中科大提出VideoCoCo，重新定义物理视频生成新范式

## 研究问题与贡献

论文针对文本到视频模型的“因果不透明”问题：自然语言提示高度压缩，而生成系统必须同时恢复完整时空过程并合成高保真画面。VideoCoCo 的贡献是把过程推理外化为可执行、可检查的中间表示，而不是只依赖文本计划、关键帧或稀疏视觉状态。

## 方法与系统

系统采用 agentic dual-engine。编码智能体先把提示转换为显式描述场景和时间演化的 Blender 程序；沙盒执行程序得到确定性时空草稿；生成式视频引擎再通过草稿条件化编辑输出真实感视频。作者构建 VideoCoCo-3K 数据集，包含草稿、编辑指令与目标视频三元组，用于让视频编辑器遵循仿真草稿。

## 实验设置与数据

实验在 PhyGenBench 和 VBench-2.0 上比较 OmniWeaving 基线及消融设置，检验代码链路、草稿条件与编辑器适配的贡献，并给出定性物理案例分析。项目页公开代码入口。

## 结果、限制与结论

原文关键证据摘录：- To address this limitation, we introduce VideoCoCo , an agentic dual-engine framework in which executable Blender code serves as a process-level chain of thought.
- 3.3 VideoCoCo-3K: Data for Draft-Conditioned Editing Teacher-Based Triplet Construction.
- VideoCoCo improves the OmniWeaving baseline from 0.475 to 0.558 on PhyGenBench and from 52.18 to 77.88 on VBench-2.0, achieving the best average score on both benchmarks.

论文报告 VideoCoCo 将 PhyGenBench 平均分从 0.475 提升到 0.558，将 VBench-2.0 平均分从 52.18 提升到 77.88，在两个平均指标上取得最佳结果。限制在于依赖仿真程序与草稿编辑质量，复杂开放世界材料、接触流体等高难物理现象以及跨数据集泛化仍需更多验证。

## 来源链接

- https://arxiv.org/html/2607.27380v1
- https://github.com/micky-li-hd/VideoCoCo
- https://www.jiqizhixin.com/articles/2026-08-16-8
