---
candidateId: "arxiv--2608.13489"
date: "2026-08-15"
category: "Paper"
title: "DreamX-Phi 1.0: Action-Conditioned Video World Model for Robotic Manipulation"
authors:
  - "DreamX Team 等"
summary: "DreamX-Phi 1.0 用动作条件视频扩散模型预测双臂机器人操作结果，并以臂组 PRoPE、辅助深度、SAM3/V-JEPA 对象监督和少步蒸馏提升几何与对象一致性。"
provisionalKeywords:
  - "动作条件视频世界模型"
  - "机器人操作"
  - "几何一致性"
  - "对象持续性"
  - "少步生成"
keywords:
  - "视觉世界模型"
  - "机器人操作"
  - "长时一致性"
sources:
  - name: "Hugging Face"
    url: "https://huggingface.co/papers/2608.13489"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.13489"
  - name: "PDF"
    url: "https://arxiv.org/pdf/2608.13489"
  - name: "TeX source"
    url: "https://export.arxiv.org/e-print/2608.13489"
previewImage: "/daily/2026-08-15/assets/arxiv--2608.13489/preview.png"
schemaVersion: 2
ratingTrack: "paper"
groupRank: 1
groupScore: 92
scoreScale: "paper-v2"
---

# DreamX-Phi 1.0: Action-Conditioned Video World Model for Robotic Manipulation

> DreamX-Phi 1.0 用动作条件视频扩散模型预测双臂机器人操作结果，并以臂组 PRoPE、辅助深度、SAM3/V-JEPA 对象监督和少步蒸馏提升几何与对象一致性。

## 研究问题与贡献

论文研究给定一帧观测、语言指令和双臂末端位姿/夹爪动作序列时，如何生成未来机器人操作视频。作者指出，仅追求画面真实并不保证动作忠实：模型可能移动错误的手臂或丢失被操作物体。DreamX-Phi 1.0 的贡献是把结构化动作条件、辅助几何监督、对象级一致性约束和少步蒸馏组合到一个机器人视频世界模型中，并在 WorldArena 2.0 快照上验证预测和作为策略训练环境的价值。

## 方法与系统

系统以 Wan2.2-TI2V-5B 视频扩散 Transformer 为骨干，用 flow-matching 学习未来帧。针对双臂控制，模型把每条手臂的 SE(3) 位姿序列注入注意力，形成臂组 PRoPE 式几何编码，保持臂身份和刚体运动结构。训练侧增加轻量深度分支，将深度图编码为 latent 目标，使共享表征学习表面顺序、物体范围和接触几何；SAM3 掩码重加权 RGB 目标，冻结 V-JEPA 教师提供对象关系监督。最后用 DMD2 风格分布匹配蒸馏把多步生成器压缩为少步学生。

## 实验设置与数据

论文在 WorldArena 2.0 Track 1 的 31 个参赛系统中比较 EWMScore-P，并报告 Track 2 Adjust Bottle 成功率；对比对象包括 Alpha-World、FlowWAM-FiveAges、GigaWorld-0、Vidar、WoW、Ctrl-World、IRASim、WOVR-PLUS 和 Lute 等。定性实验覆盖 RoboTwin 2.0 clean 与背景、纹理、光照、干扰物随机化场景。作者明确说明排名对应 2026 年 8 月 12 日快照，不代表最终挑战赛 standings。

## 结果、限制与结论

在 Track 1，DreamX-Phi-1.0-FDM-0730 以 60.65 EWMScore-P 排名第一；其交互质量 57.36、轨迹准确率 57.15、深度准确率 98.55、指令跟随 61.62。Track 2 中，用该世界模型作为 rollout 环境训练的策略在 Adjust Bottle 达到 67.19%，与 Lute 并列第二，低于 WOVR-PLUS 的 68.75%。结论认为几何与对象监督有效，但作者也明确承认仍需匹配消融来量化每个组件贡献；跨机构复现、训练数据完整披露和最终竞赛结果待进一步核验。

## 来源链接

- [Hugging Face](https://huggingface.co/papers/2608.13489)
- [arXiv](https://arxiv.org/abs/2608.13489)
- [PDF](https://arxiv.org/pdf/2608.13489)
- [TeX source](https://export.arxiv.org/e-print/2608.13489)

