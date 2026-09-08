---
candidateId: "arxiv--2609.05324"
date: "2026-09-08"
category: Paper
title: "RoboSPA：VLA 模型能否超越简单场景与短时程任务"
authors: ["Zhenxuan Fan", "Bo Zhang", "Yutong Lin", "Yuqian Yuan", "Juekai Lin", "Liang Liang", "Zhuoyi Huang", "Wenqiao Zhang", "Juncheng Li", "Siliang Tang", "Jun Xiao", "Yueting Zhuang（EMNLP 2026 Main Conference）"]
summary: "RoboSPA 构建大规模机器人操作评测：10 个任务类别、56 个基础任务、按 5 级难度实例化为 280 个变体，采集 527K 条多本体轨迹，从细粒度空间推理与长时程程序规划两个维度诊断 VLA 模型；结果显示现有 VLA 在复杂空间关系、精确底层执行与记忆密集规划上仍困难。"
keywords:
  - 机器人评测与基准
  - VLA 模型与机器人操作
  - 长时程规划与记忆
sources:
  - { "name": "arxiv", "url": "https://arxiv.org/abs/2609.05324v1" }
previewImage: "/daily/2026-09-08/assets/arxiv--2609.05324/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 6
groupScore: 75.0
scoreScale: "paper-v2"
emphasis: false
---
# RoboSPA：VLA 模型能否超越简单场景与短时程任务

## 研究问题与贡献

现有 VLA 数据集与基准主要评测预定义设置下的任务完成率，对「空间与程序复杂度上升时模型如何退化」缺乏诊断能力。RoboSPA（Robo Spatial-Procedural Assessment）提出沿两个核心维度做受控升难评测：细粒度空间推理与长时程程序规划，并给出超越二元成功率的诊断指标。

## 方法与系统

基准结构：10 个任务类别、56 个基础任务；每个任务沿 5 个难度级别实例化，得到 280 个空间歧义与程序复杂度递增的变体；配套 527K 条跨多本体、多场景的轨迹数据。诊断指标按维度设计，用于定位模型失败在空间理解还是程序规划环节。

## 实验设置与数据

数据覆盖多本体与多样场景；对代表性 VLA 模型评测（具体平台、模型名单与协议以全文为准，摘要页未列出）。代码与数据仓库：https://github.com/fanzhenxuan/RoboSPA（README 标注代码与数据「正在准备发布」）。

## 结果、限制与结论

论文报告（定性）：当前 VLA 系统在复杂空间关系、精确底层执行与记忆密集规划上仍然困难；任务/难度/指标的具体量化结果需全文表格核验。仓库数据尚未完全释出，复现进度需关注；「程序性升难」的设计对评测维度化有直接参考价值。该工作已被 EMNLP 2026 主会接收。

## 来源链接

- arXiv 页面：https://arxiv.org/abs/2609.05324
- 代码仓库：https://github.com/fanzhenxuan/RoboSPA
- PDF：https://arxiv.org/pdf/2609.05324
