---
candidateId: "arxiv--2609.05178"
date: "2026-09-08"
category: Paper
title: "LIBERO-RECOVER：从任务成功走向操作模型的失败恢复评测"
authors: ["提交人 Lin Liu（完整作者列表见论文页）"]
summary: "SOTA VLA/世界-动作模型在 LIBERO 上接近 100% 成功，但真实交互充满失败（抓取失败、碰撞、物体意外移动）；LIBERO-RECOVER 基于 LIBERO 收集真实执行失败，构建 1000+ 场景、四级恢复层次（动作重试/动作适应/物体状态恢复/环境恢复）的失败恢复基准，把评测从「能否成功」转向「失败后能否恢复」。"
keywords:
  - 机器人评测与基准
  - VLA 模型与机器人操作
  - 具身智能
sources:
  - { "name": "arxiv", "url": "https://arxiv.org/abs/2609.05178v1" }
previewImage: "/daily/2026-09-08/assets/arxiv--2609.05178/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 7
groupScore: 74.0
scoreScale: "paper-v2"
emphasis: false
---
# LIBERO-RECOVER：从任务成功走向操作模型的失败恢复评测

## 研究问题与贡献

SOTA 具身模型在 LIBERO 上成功率接近 100%，但现有基准只从预定义初始态评测任务完成；真实世界的交互必然包含失败——抓空、碰撞、物体被意外移动——机器人必须能识别并恢复。该能力此前基本未被度量。LIBERO-Recover 把评测问题从「机器人能否成功」改为「失败之后能否恢复」。

## 方法与系统

基准构建：在 LIBERO 之上，从 SOTA 具身模型的真实执行中收集失败场景，形成 1000+ 恢复场景，按四级恢复难度组织：(1) 动作重试（Action Retry）；(2) 动作适应（Action Adaptation）；(3) 物体状态恢复（Object State Recovery）；(4) 环境恢复（Environmental Recovery）。评测覆盖四种核心能力：空间理解、物体结构推理、交互理解与拓扑推理。项目页：https://liulin815.github.io/LIBERO-Recovery/。

## 实验设置与数据

基准基座为 LIBERO；失败来源为 SOTA 具身模型的真实执行；被测基线与具体指标数值摘要页未列出（以全文为准）。

## 结果、限制与结论

摘要层未给出各模型在四级恢复上的数值结果（需全文表格）；动机性事实是 SOTA 方法在 LIBERO 上接近满分而失败恢复此前无系统度量。四级恢复层次提供了一个可操作的失败分类学，对具身模型的可靠性评测与训练数据构造都有直接指导意义。

## 来源链接

- arXiv 页面：https://arxiv.org/abs/2609.05178
- 项目主页：https://liulin815.github.io/LIBERO-Recovery/
- PDF：https://arxiv.org/pdf/2609.05178
