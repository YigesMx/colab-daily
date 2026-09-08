---
candidateId: "arxiv--2609.04893"
date: "2026-09-08"
category: Paper
title: "Reasoning Without Inference Cost：用潜在语义脚手架给 VLA 策略注入推理"
authors: ["提交人 Ting Yan Andrew Li（完整作者列表见论文页）"]
summary: "VLA 模型学到「做什么」却没学「为什么」；现有因果推理增强方法在推理时生成推理 token 或滚动预测未来状态，成本随长时程任务复合。论文提出潜在语义脚手架（LSS）：训练时用一个投影头把 VLA 动作 token 表征对齐物理推理理由的文本嵌入，推理时丢弃该头、零额外成本；稠密相位级对齐使 backbone 每相位可分性约翻倍，未见过任务迁移最好。"
keywords:
  - VLA 模型与机器人操作
  - 机器人学习与强化学习
  - 具身智能
sources:
  - { "name": "arxiv", "url": "https://arxiv.org/abs/2609.04893v1" }
previewImage: "/daily/2026-09-08/assets/arxiv--2609.04893/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 79.0
scoreScale: "paper-v2"
emphasis: false
---
# Reasoning Without Inference Cost：用潜在语义脚手架给 VLA 策略注入推理

## 研究问题与贡献

VLA 模型由模仿训练学到「采取什么动作」，但没有学到「为什么」；加入因果推理可以改善操作，但现有方法在推理阶段生成推理 token 或滚动预测未来状态，代价随长时程复合。论文提出问题：推理带来的收益能否只在训练时获取、部署前丢弃？答案是肯定的——Latent Semantic Scaffolding（LSS，潜在语义脚手架）。

## 方法与系统

LSS 是一个应用于人类演示预训练阶段的辅助损失：通过一个小型投影头，把 VLA 的动作 token 表征对齐到物理推理理由（rationale）的文本嵌入；推理时直接丢弃投影头，部署的是未修改的基座策略，零额外推理成本。核心设计轴是对齐粒度：稠密 LSS 把每个动作 token 对齐到其所属操作相位各自的理由；池化 LSS 只对齐单个池化的 episode 级嵌入。论文发现稠密的相位级对齐迁移显著更好，池化对齐则过度特化于训练任务。

## 实验设置与数据

在分布内任务、留出/未见过迁移任务与表征探针上评估（具体基准、机器人平台与基线名称摘要页未列出，需以全文实验节为准）。

## 结果、限制与结论

论文报告：稠密 LSS 同时取得最佳分布内成功率与最佳未见任务迁移；表征探针显示稠密 LSS 使 backbone 的每相位可分性约提升两倍，支持「相位级对齐是作用机制」的解释。理由文本需要演示数据附带（或构造）相位级物理解释，其标注成本与质量对效果的影响在摘要层未报告；定量表格需全文核验。方向上，这是「训练时吸收语言推理、部署时零开销」的代表性路线。

## 来源链接

- arXiv 页面：https://arxiv.org/abs/2609.04893
- HTML 全文：https://arxiv.org/html/2609.04893v1
- PDF：https://arxiv.org/pdf/2609.04893
