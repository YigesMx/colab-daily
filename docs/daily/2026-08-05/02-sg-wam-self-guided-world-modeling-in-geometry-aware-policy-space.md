---
candidateId: "arxiv--2608.01397"
category: "Paper"
date: "2026-08-05"
rank: 2
title: "SG-WAM: Self-Guided World Modeling in Geometry-Aware Policy Space"
authors:
  - "Ruiteng Zhao"
  - "Zhengshen Zhang"
  - "Yue Su"
  - "Wenshuo Wang"
  - "Jiahui Li"
  - "Zhiyuan Yang"
  - "Francis E. H. Tay"
  - "Marcelo H. Ang"
  - "Haiyue Zhu"
summary: "SG-WAM 在策略表征空间内预测动作条件未来状态，并以几何监督塑造视觉 token，试图同时获得动作相关性与空间结构。"
keywords:
  - "视觉语言动作模型"
  - "世界动作模型"
  - "多视角几何"
  - "机器人泛化"
score: 82
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.01397v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.01397v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.01397/preview.png"
---

## 核心内容

SG-WAM 关注传统世界动作模型在像素预测负担与独立潜变量目标不对齐之间的折中。它在共享 VLM 序列中加入可学习 dynamics tokens，让这些 token 承担未来状态预测，同时仍处于动作专家所消费的表征空间。

## 关键技术与数据

当前和未来 dynamics tokens 分别来自在线策略和其 EMA 副本；Self-Guided World Predictor 以中间动作编码预测未来 token 状态。冻结的 VGGT 仅对主视图视觉 token 提供几何特征对齐，而不充当未来预测目标。动作专家采用条件流匹配生成连续动作块，训练联合优化动作、几何和潜变量预测损失；推理时去除 VGGT、预测分支和 EMA 分支。实验使用 0.9B Qwen3.5-0.8B 级骨干，在 LIBERO、LIBERO-Plus 及 UR5e 的三项实机任务比较。

## 结果与结论

作者报告 LIBERO 四套平均成功率 98.5%，LIBERO-Plus 零样本总体 73.0%；实机的 Pick and Place、Towel Folding、Toolbox Organization 三项条件下均高于列出的 VPP 与 VLA-JEPA。消融中同时保留几何监督和世界建模得到 98.5%，去掉世界建模为 96.6%，去掉几何监督为 97.6%。这些结果支持两项辅助目标在该配方下互补，但基准和实机样本规模有限，且跨方法表中的训练数据和预训练条件并不完全可比。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.01397v1
- arXiv 摘要页：https://arxiv.org/abs/2608.01397v1
