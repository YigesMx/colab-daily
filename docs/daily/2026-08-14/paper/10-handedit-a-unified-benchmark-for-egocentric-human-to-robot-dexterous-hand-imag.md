---
schemaVersion: 2
candidateId: "arxiv--2608.12122"
date: "2026-08-14"
category: "Paper"
ratingTrack: "paper"
groupRank: 10
groupScore: 85
scoreScale: "paper-v2"
title: "HandEdit: A Unified Benchmark for Egocentric Human-to-Robot Dexterous Hand Image Editing"
authors: ["Zhenjie Yang", "Xingyu Jiao", "Guopeng Zhong", "Shuzhe Yang", "Shi Che", "Chao Wu", "Chenyu Jiang", "Dongjie Zhang", "Yideng Zhang", "Zheng Zhang", "Muyun Jiang", "Haisheng Su", "Shuang Jin", "Donghang Zhang", "Chao Yang", "Li Chen", "Hongyang Li", "Zuxuan Wu", "Yu-Gang Jiang", "Xiaosong Jia", "Junchi Yan"]
summary: "HandEdit 构建面向第一视角人手到机器人灵巧手编辑的 2 亿实例数据与统一 benchmark，覆盖 26 种 URDF 本体和多维评测。"
provisionalKeywords: ["灵巧手操作", "机器人数据集", "图像编辑", "人机本体迁移", "具身评测"]
keywords: ["灵巧操作", "跨本体泛化", "模型评测"]
sources:
  - name: "原始来源 1"
    url: "https://arxiv.org/pdf/2608.12122v1"
  - name: "原始来源 2"
    url: "https://export.arxiv.org/e-print/2608.12122v1"
  - name: "原始来源 3"
    url: "https://ar5iv.labs.arxiv.org/html/2608.12122"
previewImage: "/daily/2026-08-14/assets/arxiv--2608.12122/preview.png"
---

# HandEdit: A Unified Benchmark for Egocentric Human-to-Robot Dexterous Hand Image Editing

> HandEdit 构建面向第一视角人手到机器人灵巧手编辑的 2 亿实例数据与统一 benchmark，覆盖 26 种 URDF 本体和多维评测。

## 研究问题与贡献

第一视角人手视频规模大，但人手与机器人灵巧手在外观、关节、视角和接触约束上差异显著，通用图像编辑无法保证本体正确与交互一致。HandEdit 首次把这一问题系统化为 URDF 条件图像编辑，提供大规模数据、Hand-only/Hand-Arm 两条赛道和统一指标。

## 方法与系统

数据流水线从 EgoDex、ARCTIC、OakInk2、HOI4D、HO-Cap 提取第一视角交互，经跨本体重定向、渲染、分割、背景恢复、合成与人工质检生成伪参考。目标覆盖 13 种纯手和 13 种手臂组合。指标同时测通用图像相似度、DINOv2 结构保真、CLIP 多视角 URDF 身份一致性、交互保持及 VLM judgment，并提供 harmonization 后处理。

## 实验设置与数据

当前版本含超过 2 亿 image-level 编辑实例、30 万以上 clips、600+ 场景、1,100+ 物体和 400+ 任务。benchmark 比较 11 个商业与开源编辑器。人工验证抽取 2,860 个输出，每个由 5 名标注者沿目标机器人正确性、场景/交互保持、真实与物理合理性三轴打分，共 14,300 次图像级标注和 42,900 个标量评分。

## 结果、限制与结论

论文显示通用编辑器在图像相似、机器人身份和接触保持之间存在明显权衡，单一通用指标无法反映具身可用性。人工一致性 Krippendorff α 为 0.603–0.627，平均评分可靠性 ICC(2,k) 为 0.831–0.849，自动指标与人类偏好的 Fleiss κ 为 0.554–0.586。限制是物理采集无法获得像素对齐的人—机器人真值，因此采用编辑伪参考，仍与真实机器人观察、细粒度接触动力学有差距；数据适合预训练/中训练，不能替代真实机器人示范。

## 来源链接

- [arXiv](https://arxiv.org/abs/2608.12122)
- [PDF](https://arxiv.org/pdf/2608.12122v1)
- [项目页](https://handedit.github.io/)
- [代码](https://github.com/HandEdit/HandEdit)
- [数据集](https://huggingface.co/datasets/HandEdit/HandEdit-Full)
