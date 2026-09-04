---
candidateId: "arxiv--2609.04193"
date: "2026-09-05"
category: Paper
title: "GIFT：用几何、可供性与目标约束引导机器人策略中间特征"
authors: ["arxiv.org"]
summary: "GIFT 把「视觉丰富但控制不足」的差距命名为 action-sufficiency gap，并通过三个训练期约束引导中间特征保留控制相关结构：与冻结几何基础模型对齐、物体中心可供性预测、指令条件目标区域重建；同一原则实例化到 VLA、快速 WAM 与逆动力学 WAM 三种模型，零样本迁移 LIBERO-Plus 时分别超越 StarVLA-OFT、Fast-WAM、Fast-WAM-IDM 4.6/12.6/5.2 点，RoboCasa 上再超 12.6/9.0/8.4 点。"
keywords:
  - VLA 与机器人操作
  - 世界模型
  - 多模态与空间智能
sources:
  - { "name": "arxiv.org", "url": "https://arxiv.org/abs/2609.04193v1" }
previewImage: "/daily/2026-09-05/assets/arxiv--2609.04193/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 10
groupScore: 78.0
scoreScale: "paper-v2"
emphasis: false
---
# GIFT：用几何、可供性与目标约束引导机器人策略中间特征

**一句话结论**：GIFT 回答了一个被忽视的问题——预训练视觉特征「看得多」不等于「够控制」：仅用三个训练期监督目标（几何对齐、可供性预测、目标区域重建），不改动动作接口，就让 VLA 与两种 WAM 在扰动评测上大幅超越对应基线。

## 研究问题与贡献

VLA 从视觉-语言预训练继承语义，世界动作模型（WAM）耦合预测视觉动力学，但两者的原生目标（动作监督、视觉预测）不保证中间特征保留物理与任务结构，同时保留大量控制无关视觉冗余——作者称之为 action-sufficiency gap。本文贡献：(1) 把该差距形式化为三类控制相关结构的保留问题：决定运动可行性的几何、编码指令相关实体与物体中心末端配置的可供性、把指令锚定到任务相关区域的目标；(2) GIFT（Guided Intermediate Feature Training）——架构灵活的训练框架，以几何对齐（对冻结几何基础模型）、可供性预测与目标区域重建作为中间视觉 token 的训练期约束，默认不做推理期注入，仅靠梯度塑形共享特征；(3) 同一原则在 VLA、直接动作 WAM、逆动力学 WAM 三种动作形式上实例化验证。

## 方法与系统

辅助目标挂在策略的中间视觉 token 上：几何对齐用冻结几何基础模型做教师；可供性头预测物体中心的交互配置；目标头在指令条件下重建任务相关区域。三头不向动作通路注入额外输入，避免改变模型特定的动作生成接口。

## 实验设置与数据

仿真在 LIBERO-Plus（视角/布局/语言/外观/机器人初始化扰动）与 RoboCasa 上做零样本迁移评估，配对基线为 StarVLA-OFT、Fast-WAM、Fast-WAM-IDM。真机构建两套系统：UFACTORY xArm7 + 双 RealSense D435（第三人称+腕部，镜像 LIBERO 相机配置）与 ARX X5 双臂 + 三 D405（头部+双腕），自采四任务基准。

## 结果、限制与结论

论文报告：零样本迁移 LIBERO-Plus 上 GIFT 三变体分别达 79.6%/72.6%/87.8%（超基线 4.6/12.6/5.2 点）；RoboCasa 达 61.4%/83.6%/82.3%（超 12.6/9.0/8.4 点）；真机四任务验证同一趋势。结论：控制相关结构可以「教给」特征而不必作为显式输入。局限：辅助监督依赖几何基础模型与标注质量；评测以桌面操作为主，长时程与全身任务未覆盖。

## 来源链接

- 论文原文：https://arxiv.org/abs/2609.04193
- HTML 全文：https://arxiv.org/html/2609.04193v1
