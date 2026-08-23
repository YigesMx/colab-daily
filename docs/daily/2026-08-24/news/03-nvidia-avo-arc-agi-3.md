---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F08%2F23%2Fother%2Fadmin%2F110215%2F%25e5%2588%259a%25e5%2588%259a%25ef%25bc%258c%25e8%258b%25b1%25e4%25bc%259f%25e8%25be%25beai%25e5%2588%25b7%25e7%2588%2586arc-agi-3%25ef%25bc%2581%25e5%258d%258e%25e4%25ba%25ba%25e7%258f%25ad%25e5%25ba%2595%25e4%25b8%2580%25e5%258f%25a3%25e6%25b0%2594%25e5%25b1%25a0%25e4%25ba%2586183%25e5%2585%25b3%2F"
businessCandidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F08%2F23%2Fother%2Fadmin%2F110215%2F%25e5%2588%259a%25e5%2588%259a%25ef%25bc%258c%25e8%258b%25b1%25e4%25bc%259f%25e8%25be%25beai%25e5%2588%25b7%25e7%2588%2586arc-agi-3%25ef%25bc%2581%25e5%258d%258e%25e4%25ba%25ba%25e7%258f%25ad%25e5%25ba%2595%25e4%25b8%2580%25e5%258f%25a3%25e6%25b0%2594%25e5%25b1%25a0%25e4%25ba%2586183%25e5%2585%25b3%2F"
date: "2026-08-24"
category: "News"
title: "刚刚，英伟达AI刷爆ARC-AGI-3！华人班底一口气屠了183关"
authors: ["aiera.com.cn"]
summary: "英伟达称通用编码智能体 AVO 以 6624 步通关 ARC-AGI-3 全部 183 关并取得 RHAE 100，核心机制为持久记忆、监督器和长时程搜索；结果仍待独立复现。"
provisionalKeywords: ["智能体系统","评测基准","长程任务","AI基础设施"]
keywords: ["智能体系统","评测基准","长程任务","AI基础设施"]
sources: [{"name":"aiera.com.cn","url":"https://aiera.com.cn/2026/08/23/other/admin/110215/%e5%88%9a%e5%88%9a%ef%bc%8c%e8%8b%b1%e4%bc%9f%e8%be%beai%e5%88%b7%e7%88%86arc-agi-3%ef%bc%81%e5%8d%8e%e4%ba%ba%e7%8f%ad%e5%ba%95%e4%b8%80%e5%8f%a3%e6%b0%94%e5%b1%a0%e4%ba%86183%e5%85%b3/"}]
previewImage: "/daily/2026-08-24/assets/url--https_3a_2f_2faiera.com.cn_2f2026_2f08_2f23_2fother_2fadmin_2f110215_2f_25e5_2588_259a_25e5_2588_259a_25ef_25bc_258c_25e8_258b_25b1_25e4_25bc_259f_25e8_25be_25beai_25e5_2588_25b7_25e7_2588_2586arc-agi-3_25ef_25bc_2581_25e5_258d_258e_25e4_25ba_25ba_25e7_258f_25ad_25e5_25ba_2595_25e4_25b8_2580_25e5_258f_25a3_25e6_25b0_2594_25e5_25b1_25a0_25e4_25ba_2586183_25e5_2585_25b3_2f/preview.png"
schemaVersion: 3
ratingTrack: "news"
groupRank: 3
groupScore: 85
scoreScale: "news-v3"
emphasis: false
---

# 英伟达称 AVO 在 ARC-AGI-3 达到满分

## 事件概述

英伟达在开发者博客中称，其通用编码智能体 AVO 在 ARC-AGI-3 的 25 个游戏环境中通关全部 183 个关卡，总步数 6624 步，RHAE 得分为 100.00。新智元报道了同一结果，并指出 AVO 底层使用了 Claude Opus 5 模型，外层通过持久记忆和监督机制提升长时程表现。

## 已确认事实与证据

英伟达官方博客称，AVO 采用持久记忆保存历史实现、评测结果、编译器和分析器输出，并在上下文重置后继续当前状态；监督器观察搜索轨迹，在进展停滞时促使主智能体切换策略。官方还称，ARC-AGI-3 输入以精确的 64x64 文本网格表示，全程未使用图像输入。新智元报道称，同一模型单独参加时得分为 30.16%，但该数字及“官方认证榜第一名”的表述仍需以排行榜原始记录为准。

英伟达此前在 arXiv 论文中将 AVO 描述为面向 GPU 算子自主进化搜索的智能体式变异算子。报道称，该系统在 GPU 内核优化任务中探索超过 500 个方向并提交 40 个有效内核版本；官方博客后续也用于解释其长时程智能体架构。上述性能数字均来自英伟达或论文作者披露，本文不作为独立基准复测结论。

## 影响与后续观察

AVO 的关键意义不只在单个榜单分数，而在同一智能体外层机制能否跨任务保持长时程搜索、记忆和纠错能力。若结果可复现，它会影响智能体工程、GPU 内核优化和自动化系统研究；但满分结果也可能依赖特定 harness、模型和评测配置，不能直接等同于通用智能突破。

后续需要关注官方评测日志和复现实验、ARC Prize 榜单状态、AVO 与其他满分系统的差异、以及该架构在真实工程任务中的成本、稳定性和安全约束。

## 来源链接

- [英伟达开发者博客](https://developer.nvidia.com/blog/nvidia-avo-reaches-100-on-arc-agi-3-demonstrating-a-frontier-level-general-purpose-architecture-for-long-horizon-autonomous-agents/)
- [AVO 论文](https://arxiv.org/abs/2603.24517)
- [新智元报道](https://aiera.com.cn/2026/08/23/other/admin/110215/%e5%88%9a%e5%88%9a%ef%bc%8c%e8%8b%b1%e4%bc%9f%e8%be%beai%e5%88%b7%e7%88%86arc-agi-3%ef%bc%81%e5%8d%8e%e4%ba%ba%e7%8f%ad%e5%ba%95%e4%b8%80%e5%8f%a3%e6%b0%94%e5%b1%a0%e4%ba%86183%e5%85%b3/)

