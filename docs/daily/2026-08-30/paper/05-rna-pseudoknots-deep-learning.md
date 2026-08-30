---
candidateId: "doi--10.1126%2Fscience.aeg6829"
date: "2026-08-30"
category: Paper
title: "De novo design of RNA pseudoknots with deep learning"
authors: ["science.org", "science.org", "api.crossref.org", "jiqizhixin.com"]
summary: "Science 封面论文显示，在 Eterna OpenKnot 四轮 57 个 RNA 假结挑战中，引入 RNet 基础模型后 AI 方法能与经验人类设计者相当，部分困难 RNA 设计可绕过高精度三维结构预测。"
keywords: ["AI for Science", "多模态生成", "科学发现"]
sources:
  - {"name":"science.org","url":"https://www.science.org/doi/10.1126/science.aeg6829"}
  - {"name":"science.org","url":"https://www.science.org/doi/10.1126/science.aek4499"}
  - {"name":"api.crossref.org","url":"https://api.crossref.org/works/10.1126/science.aeg6829"}
  - {"name":"jiqizhixin.com","url":"https://www.jiqizhixin.com/articles/2026-08-29-8"}
previewImage: "/daily/2026-08-30/assets/doi--10.1126_2fscience.aeg6829/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 5
groupScore: 78
scoreScale: "paper-v2"
emphasis: false
---

# 深度学习驱动的 RNA 假结从头设计

## 研究问题与贡献

论文研究 RNA 设计中长期受三维结构预测精度限制的问题：能否不经先解决 RNA 3D 结构预测，就设计出可实验验证的复杂假结二级结构。研究通过 Eterna OpenKnot 盲测挑战比较 AI 与经验人类设计者，并提出 RNet 基础模型用于前瞻性筛选。

## 方法与系统

OpenKnot 挑战覆盖 57 个 RNA 假结，分四轮进行。设计通过单核苷酸分辨率 SHAPE 化学图谱、补偿性诱变和冷冻电镜验证。第一轮邀请六种 AI 方法，大多数未过阈值；随后团队引入在约 100 万 RNA 化学图谱上训练的 RNet，使 AI 和 Eterna 参与者都能利用预测谱筛选设计。第三、四轮引入新靶标和最长 240 个核苷酸的任务，用于检验泛化。

## 实验设置与数据

数据来自 Eterna 社区与实验室闭环：第一轮评估六种 AI 方法；第二轮重做 17 个靶标；第三轮加入 20 个新假结；第四轮加入 20 个更长靶标。评估指标不只是计算结构距离，而以实验化学图谱、突变补偿和冷冻电镜为准。

## 结果、限制与结论

引入 RNet 后，AI 方法在第二轮 17 个靶标上显著提升，所有测试 AI 和 Eterna 人类设计者均能在至少 80% 靶标达到 90 分以上。最终 AI 方法与经验设计者在多数盲测挑战中相当；一些具有准确二级结构的 AI 分子形成未显式设计的非经典三级相互作用。作者认为部分困难 RNA 设计可不先精确预测 3D 结构，但三维确认仍依赖实验，泛化到治疗性 RNA 还需更多序列与化学环境验证。

## 来源链接

- [Science 论文](https://www.science.org/doi/10.1126/science.aeg6829)
- [Crossref 元数据](https://api.crossref.org/works/10.1126/science.aeg6829)
- [机器之心解读](https://www.jiqizhixin.com/articles/2026-08-29-8)
