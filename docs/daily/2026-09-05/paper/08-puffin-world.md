---
candidateId: "arxiv--2609.04196"
date: "2026-09-05"
category: Paper
title: "Puffin-World：原生建模物理、几何与外观的统一世界模型"
authors: ["arxiv.org", "huggingface.co"]
summary: "Puffin-World 提出统一多模态架构，把三种原生 3D 世界状态（物理：重力场与纬度；几何：深度；外观：图像）与统一 Omni-Camera 表示（重力感知绝对朝向 + 射线相对运动）联合建模；物理动力学跨未来帧传播、外观与几何在单一生成过程内耦合生成，支撑模仿、自校准世界探索等闭环应用；配套发布 Puffin-16M 数据集（1,500 万视觉-语言-相机三元组 + 100 万多样相机轨迹），提供 Base 与 Pro 两个规格。"
keywords:
  - 世界模型
  - 多模态与空间智能
  - 具身数据与基础设施
sources:
  - { "name": "arxiv.org", "url": "https://arxiv.org/abs/2609.04196v1" }
  - { "name": "huggingface.co", "url": "https://huggingface.co/papers/2609.04196" }
previewImage: "/daily/2026-09-05/assets/arxiv--2609.04196/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 8
groupScore: 79.0
scoreScale: "paper-v2"
emphasis: false
---
# Puffin-World：原生建模物理、几何与外观的统一世界模型

**一句话结论**：Puffin-World 认为「像素级 plausible」不等于世界模型：它把物理、几何、外观三层原生世界状态与统一相机表示塞进一个生成框架，使 3D 世界的生成、重建与交互在物理一致性与视觉稳定性上同时受益。

## 研究问题与贡献

能感知、生成并重建世界是多模态空间智能与物理 AI 的核心目标，但现有生成式世界模型多以 RGB 外观预测为中心，难以支撑需要物理接地与几何一致的交互。本文贡献：(1) 把世界状态组织为物理（重力场/纬度）、几何（深度）、外观（图像）三层原生 3D 状态并联合建模；(2) Omni-Camera 表示——把重力感知的绝对朝向与基于射线的相对运动统一为相机条件，支撑单视角控制、多视角合成与高难度相机轨迹；(3) 物理传播策略把参考视角的绝对物理状态外推到未来帧，维持一致的物理坐标系；(4) 外观与几何在单一生成过程内耦合：逐未来视角联合合成并重建其几何；(5) 发布 Puffin-16M 数据集。

## 方法与系统

架构提供两个规格：Base 以 C-RADIOv3-H 视觉编码器 + Qwen2.5-7B-Instruct + SD3.5-Medium-2.5B 扩散骨干初始化；Pro 换用 C-RADIOv4-H + Qwen2.5-1.5B-Instruct + SD3.5-Large-8.1B 以强化生成保真。统一框架支撑模仿（mimic）与自校准世界探索等需要多任务协同的交错闭环应用。

## 实验设置与数据

Puffin-16M 含 1,500 万视觉-语言-相机三元组（多样分辨率与长宽比）及 100 万含挑战性旋转相机运动的轨迹；与单任务和统一任务两类既有数据集从规模、通用性、空间分布与运动多样性对照。实验覆盖世界生成、几何重建与物理一致性评估（细节见论文表格）。

## 结果、限制与结论

论文报告：统一建模使物理一致且视觉稳定的世界生成成为可能，Omni-Camera 支撑含极端相机轨迹的多任务闭环应用，数据集在规模与运动多样性上具优势。局限：Hugging Face 热门趋势提供关注度信号但非质量证据；交互目前以视觉/几何闭环为主，与机器人动作空间的闭环耦合未在本文展开；大规模定量结果以生成/重建指标为主，下游机器人任务迁移待验证。

## 来源链接

- 论文原文：https://arxiv.org/abs/2609.04196
- HTML 全文：https://arxiv.org/html/2609.04196v1
- Hugging Face 页面：https://huggingface.co/papers/2609.04196
