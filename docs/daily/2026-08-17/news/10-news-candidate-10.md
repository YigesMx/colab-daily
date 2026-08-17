---
candidateId: "url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-08-16-9"
date: "2026-08-17"
category: "News"
title: "「有些模型就是不想学？」循环模型为什么越想越错？"
authors:
  - "www.jiqizhixin.com"
summary: "技术文章梳理循环 Transformer：增加循环次数并非单调提升推理，稳定机制与训练配方仍是瓶颈。"
provisionalKeywords:
  - "模型架构"
  - "模型能力"
  - "基准评测"
keywords:
  - "模型架构"
  - "模型能力"
  - "基准评测"
sources:
  - name: "www.jiqizhixin.com"
    url: "https://www.jiqizhixin.com/articles/2026-08-16-9"
  - name: "blog.tilderesearch.com"
    url: "https://blog.tilderesearch.com/blog/one-layer-deeper"
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 10
groupScore: 64
scoreScale: "news-v3"
---

# 「有些模型就是不想学？」循环模型为什么越想越错？

## 事件概述

机器之心技术文章比较 Transformer 显式思维链与隐空间循环，讨论循环模型为什么在增加测试时计算后仍可能出现性能下降。

## 已确认事实与证据

文章引用 Ouro-Thinking 1.4B 在 AIME 2024 的结果：第 1 轮为 0 分，第 4 轮升至 65 分，继续到第 8 轮降至 38.67 分。2026 年 Parcae 研究报告循环语言模型易出现残差爆炸与损失尖峰，加入稳定机制后验证困惑度最多降低 6.3%，13 亿参数下超过传统 Transformer 基线。

## 影响与后续观察

原文关键证据摘录：- 以 1.4B 参数的 Ouro-Thinking 为例，它在 AIME 2024 上的成绩从第一轮的 0 分逐步上升，在第四轮达到 65 分；继续转到第八轮，成绩又掉到了 38.67 分。
- 2026 年的 Parcae 研究便发现，循环语言模型容易出现 残差爆炸 和 损失突然上升。
- 重新设计循环过程中的稳定机制 后，模型的验证集困惑度最多降低了 6.3% ；扩展到 13 亿参数时，也在固定参数量和数据量下超过了传统 Transformer 基线。

“更多思考轮数”不是单调收益，循环模型需同时解决参数共享、误差累积、优化器、中间监督和推理预算控制。后续关注稳定循环训练、可解释中间状态与推理预算控制能否在大规模模型上同时成立。

## 来源链接

- https://www.jiqizhixin.com/articles/2026-08-16-9
- https://blog.tilderesearch.com/blog/one-layer-deeper
