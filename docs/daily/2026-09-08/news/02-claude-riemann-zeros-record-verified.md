---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F09%2F07%2Fother%2Fadmin%2F112536%2F%25e7%25aa%2581%25e5%258f%2591%25ef%25bc%2581claude%25e9%25bb%258e%25e6%259b%25bc%25e7%258c%259c%25e6%2583%25b3%25e6%259c%2580%25e5%25a4%25a7%25e7%25aa%2581%25e7%25a0%25b4%25ef%25bc%258c%25e5%25b7%25b2%25e8%25a2%25ab%25e4%25ba%25ba%25e7%25b1%25bb%25e6%2595%25b0%25e5%25ad%25a6%25e5%25ae%25b6%25e9%25aa%258c%25e8%25af%2581%2F"
date: "2026-09-08"
category: News
title: "Claude 黎曼猜想零点纪录获人类数学家验证并改写，AxiomProver 完成形式化"
authors: ["新智元"]
summary: "数论学家 Youness Lamzouri 宣布 Claude 关于 zeta 函数零点的证明结果确凿无误，并给出更简洁的新证明；数小时后 AxiomProver 完成该工作的 Lean 形式化。此前 Anthropic 用内部 Claude 把临界线上零点比例从 41.6% 推进到 67.25%（超过 2/3）。"
keywords:
  - AI 数学与形式化验证
  - 大模型能力与效率
sources:
  - { "name": "ai_info_source", "url": "https://aiera.com.cn/2026/09/07/other/admin/112536/%e7%aa%81%e5%8f%91%ef%bc%81claude%e9%bb%8e%e6%9b%bc%e7%8c%9c%e6%83%b3%e6%9c%80%e5%a4%a7%e7%aa%81%e7%a0%b4%ef%bc%8c%e5%b7%b2%e8%a2%ab%e4%ba%ba%e7%b1%bb%e6%95%b0%e5%ad%a6%e5%ae%b6%e9%aa%8c%e8%af%81/" }
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 2
groupScore: 84.0
scoreScale: "news-v3"
emphasis: false
---
# Claude 黎曼猜想零点纪录获人类数学家验证并改写，AxiomProver 完成形式化

## 事件概述

新智元 9 月 7 日报道：Claude 在黎曼猜想方向的相关证明工作迎来「人类验证 + 人类改写 + AI 形式化」三连进展——数论学家 Youness Lamzouri 宣布 Claude 的证明结果确凿无误，并给出了一个更简洁、更优雅的新证明（arXiv:2609.02882）；仅数小时后，AxiomProver 完成了这项工作的 Lean 形式化（证书见 AxiomMath/ZetaZeros 仓库）。

## 已确认事实与证据

- Claude 原始结果（Anthropic 口径，新智元转述）：超过 2/3 的 zeta 零点被确认位于临界线上且为单零点（67.25%），把此前主流的 41.6% 界限一次性提高约 25.6 个百分点——此前 37 年数学家只提高过 0.8%。Anthropic 数学团队使用了内部 Claude；该结果曾获数学家 Alpöge 与 Furman 初步验证。原始 PDF：www-cdn.anthropic.com/95c246936988e43127bc6b2ceb7077c1dad2d68e.pdf。
- 人类验证与改写：Lamzouri 撰写的验证/简化证明见 arXiv:2609.02882；报道形容其用一条简洁的希尔伯特空间不等式完成归约，砍掉了 Claude 证明中随 N(T) 增长的巨大矩阵。
- 形式化闭环：AxiomProver 在数小时内完成 Lean 形式化，Lean 证书开源：https://github.com/AxiomMath/ZetaZeros。
- 语义澄清：这是黎曼猜想方向「零点比例纪录」的实质推进（人类距 100% 还差约 32.75%），并非黎曼猜想本身被证明。

## 影响与后续观察

- 方法论意义：「AI 暴力证明 → 人类改写为可理解证明 → 另一 AI 形式化验证」的三段式协作，正在成为 AI 数学的标准工作流样本；与上月费马大定理机器验证、以及陶哲轩对「AI 证明晦涩」的批评形成同一议题的连续剧。
- 待观察：Lamzouri 论文的同行评审结果；Anthropic 是否发布官方技术报告；67.25% 之后下一个纪录由谁推进（人类或 AI）。
- 风险提示：报道为媒体转述口径，具体数值以 arXiv 论文与 Lean 仓库为准。

## 来源链接

- 新智元报道：https://aiera.com.cn/2026/09/07/other/admin/112536/
- Lamzouri 论文：https://arxiv.org/pdf/2609.02882
- Lean 证书仓库：https://github.com/AxiomMath/ZetaZeros
- Anthropic 原始结果 PDF：https://www-cdn.anthropic.com/95c246936988e43127bc6b2ceb7077c1dad2d68e.pdf
