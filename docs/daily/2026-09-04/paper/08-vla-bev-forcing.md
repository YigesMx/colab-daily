---
candidateId: "arxiv--2609.02341"
date: "2026-09-04"
category: Paper
title: "驾驶 VLA 的跨本体零样本迁移与 BEV-Forcing"
authors: ["arxiv.org"]
summary: "该工作系统研究多数据集训练下的驾驶 VLA 行为，提出把 BEV 地面布局信息注入骨干的 BEV-Forcing 辅助目标，在保留本体与零样本迁移（含 KIT LongTail）上同时提升分布内与分布外表现。"
keywords:
  - 自动驾驶
  - VLA 与跨本体
  - 三维感知
sources:
  - { "name": "arxiv.org", "url": "https://arxiv.org/abs/2609.02341v1" }
previewImage: "/daily/2026-09-04/assets/arxiv--2609.02341/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 8
groupScore: 78.0
scoreScale: "paper-v2"
emphasis: false
---

# 驾驶 VLA 的跨本体零样本迁移与 BEV-Forcing

机器人操作领域的经验表明：跨 embodiment 统一表征的多数据集训练能提升泛化；但驾驶 VLA 仍主要在单一数据集上训练，很少评测向未见数据集与相机配置的零样本迁移，且朴素堆数据不一定带来改善。本文把这一经验带入驾驶。

## 研究问题与贡献

问题：驾驶 VLA 如何从多数据集训练中获益，并零样本迁移到未见数据集与相机 rigs。贡献：多数据集驾驶 VLA 训练的系统研究；BEV-Forcing 辅助目标——把专用鸟瞰图模型的地面物体布局信息迁入 VLA 骨干，鼓励模型通过共享 BEV 空间界面表示物体位置；以及数据集标准化流程。

## 方法与系统

骨干采用视觉-语言-动作架构，动作表征面向端到端规划；BEV-Forcing 在训练时以 BEV 布局作为辅助监督强制空间表征对齐。训练使用 LoRA（秩 16）、学习率 1e-4 余弦衰减、单 epoch、4 张 A100 全局批 64——工程配置完整可复现。

## 实验设置与数据

规划数据使用 WOD-E2E、NAVSIM、nuScenes 与 6k Physical AI 片段；零样本评测在限时发布的 KIT LongTail 测试集（无训练集可用）上进行，专门检验零/少样本能力。

## 结果、限制与结论

论文报告：BEV-Forcing 在多数据集训练下同时改善分布内与分布外表现（具体增益见论文表格）；朴素增加数据集数量在保留本体上不一定有益。限制：受算力约束仅用部分数据；KIT LongTail 为限时测试集，后续不可复训复评；真车闭环未在论文范围内。结论：BEV 空间界面作为驾驶 VLA 的「通用语言」是一个值得跟进的方向。

## 来源链接

- 论文页：https://arxiv.org/abs/2609.02341
- HTML 全文：https://arxiv.org/html/2609.02341
