---
schemaVersion: 2
candidateId: "arxiv--2608.11671"
date: "2026-08-14"
category: "Paper"
ratingTrack: "paper"
groupRank: 2
groupScore: 93
scoreScale: "paper-v2"
title: "StellaVLA: In-Context Structured Demonstration for Generalizable Vision-Language-Action Models"
authors: ["Siyu Xu", "Yunke Wang", "Zijian Wang", "Dihao Zhu", "Chenghao Xia", "Chengbin Du", "Daochang Liu", "Tao Huang", "Chang Xu"]
summary: "StellaVLA 将单条示范离线转写为任务规划、子目标与三维运动语言，在测试时作为结构化上下文提升 VLA 的分布外与跨本体适配。"
provisionalKeywords: ["视觉语言动作模型", "上下文学习", "结构化示范", "跨本体泛化", "机器人操作"]
keywords: ["视觉语言动作", "跨本体泛化", "少样本适配"]
sources:
  - name: "原始来源 1"
    url: "https://arxiv.org/pdf/2608.11671v1"
  - name: "原始来源 2"
    url: "https://export.arxiv.org/e-print/2608.11671v1"
  - name: "原始来源 3"
    url: "https://ar5iv.labs.arxiv.org/html/2608.11671"
previewImage: "/daily/2026-08-14/assets/arxiv--2608.11671/preview.png"
---

# StellaVLA: In-Context Structured Demonstration for Generalizable Vision-Language-Action Models

> StellaVLA 将单条示范离线转写为任务规划、子目标与三维运动语言，在测试时作为结构化上下文提升 VLA 的分布外与跨本体适配。

## 研究问题与贡献

VLA 在场景、视角、物体或任务偏离训练分布时常显著退化，而逐场景补数据和微调成本高。StellaVLA 的目标是在不更新参数的条件下，仅凭一条检索示范完成测试时适配；关键不是复制像素轨迹，而是把示范表达成可跨场景和跨本体复用的任务语义与运动结构。

## 方法与系统

离线流水线把原始轨迹自动转成任务计划、子目标描述、二维夹爪路径和语言化三维运动，避免新增人工标注。训练采用并行双目标：动作专家学习高频控制，同时语言分支内化结构化推理；部署时只运行动作专家，并缓存示范上下文，因此不产生逐步语言解码延迟。真实机器人、人手视频和 XR 重定向示范都映射到同一结构化表示，执行动作仍来自目标机器人数据。

## 实验设置与数据

仿真包含标准 LIBERO、11 套 VLA-Arena 三级难度与 LIBERO-Plus 七类扰动。真实平台为 AgileX Piper，使用第三视角和腕部 RGB，包含四项桌面任务、两个 OOD-L1 变体和一个未见 OOD-L2 抽屉任务；训练数据为 125 条遥操作 episode（71,702 帧），另有 26 条人手 XR 和 26 条重定向轨迹作为检索池。论文还做正确、缺失、错误示范的因果干预。

## 结果、限制与结论

StellaVLA 在 LIBERO 达到 98.8%，VLA-Arena 总分 0.63（论文列出的最强基线 π0.5 为 0.44），LIBERO-Plus 平均 85.1%。真机 ID 成功率 85%，OOD-L1 为 75%；未见 OOD-L2 没有方法成功，StellaVLA 仅取得 1.9/4 的平均进度。去掉示范使 LIBERO 平均从 98.8% 降至 62.4%，错误示范进一步降至 44.9%，说明模型会实质使用上下文，但也暴露对检索正确性的依赖。论文明确指出固定示范无法在长时执行漂移后重规划，跨来源一致性分析主要是单步预测，且真机每格仅 10 次 rollout，结论仍需更大规模复验。

## 来源链接

- [arXiv](https://arxiv.org/abs/2608.11671)
- [PDF](https://arxiv.org/pdf/2608.11671v1)
- [项目介绍](https://stelledge.com/blog/stellavla)
