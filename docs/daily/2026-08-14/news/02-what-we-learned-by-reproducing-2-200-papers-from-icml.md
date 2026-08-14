---
schemaVersion: 2
candidateId: "url--https%3A%2F%2Fhuggingface.co%2Fblog%2Ficml-2026-open-reproductions"
date: "2026-08-14"
category: News
ratingTrack: news_policy
groupRank: 2
groupScore: 94
scoreScale: news-policy-v2
title: "What We Learned by Reproducing 2,200 papers from ICML"
authors: ["Hugging Face"]
publisher: "Hugging Face"
summary: "Hugging Face 总结 ICML 2026 Open Reproductions 挑战：社区智能体在 19 天内尝试复现 2,226 篇论文，并按 claim 发布可审计 logbook 和判定。"
provisionalKeywords: ["科学复现", "机器学习评测", "智能体科研", "开放科学"]
keywords: ["开放复现", "模型评测"]
sources:
  - name: "原始来源 1"
    url: "https://huggingface.co/blog/icml-2026-open-reproductions"
previewImage: null
---

# What We Learned by Reproducing 2,200 papers from ICML

## 事件概述

Hugging Face 于 2026 年 8 月 13 日发布对 ICML 2026 Open Reproductions 挑战的总结。活动在 2026 年 7 月 15 日至 8 月 2 日进行，参与者使用 Claude Code、Codex、Cursor、OpenResearch 等 coding agent，对 ICML 2026 论文的科学主张逐条尝试复现。文章强调，这是对大规模智能体辅助论文审查的一次公开实验，而不是对全部论文质量的最终裁定。

## 已确认事实与证据

Hugging Face 报告有 1,221 名社区成员参加，发布 6,816 份 Trackio logbook，尝试 2,226 篇论文（约占会议论文三分之一），共判定 35,908 个 claim，启动 2,962 个 HF Jobs，并公开 274 份完整 agent-trace 数据集。活动索引了 6,341 篇 ICML 2026 接收论文的摘要和核心 claim；参与者提交代码、运行产物和可选执行轨迹，Logbook Judge（GLM-5.2）按 claim 给出 verified、falsified、toy 或 inconclusive 判定，并被要求不信任参与者自评。

按文章汇总，1,103 篇（51%）至少有一个 claim 被独立验证，其中 266 篇所有提取 claim 均被复现，632 篇部分复现且没有 claim 被证伪；累计有 3,978 个 claim 得到真实实验确认。另有 496 篇（23%）出现至少一个被证伪或争议 claim，其中 49 篇全部 claim 均未被验证，242 篇出现不同复现团队对同一 claim 得出相反结论。其余包括 502 篇仅有 toy-scale 证据和 280 篇因缺失材料等原因无法建立结论。

文章还称，35 名参与者正式报告了证伪结果，主办方逐项重读论文、logbook 并重做数学推导或实验；总结中举出证明渐近项、训练代码与理论使用不同 KL 方向、评测被 EOS padding 稀释等案例，并提到部分作者已确认问题或准备 arXiv 修订。这里的数字和案例均为 Hugging Face 对活动数据与后续核查的汇总，不能替代每篇论文的独立同行评审。

## 影响与后续观察

这项活动显示，智能体可以把论文读取、代码实现、实验运行和证据整理并行化，但“跑出一个结果”并不自动等于可信复现。近期值得跟踪的是：如何公开保留 claim 级日志、代码和环境，使不同团队能重跑；如何处理专有数据、未发布 checkpoint 和 toy reproduction 的外推边界；以及作者回应、论文修订和独立团队相反 verdict 的后续收敛。Hugging Face 认为，人在流程中的价值仍包括发现前提错误、选择合理尺度、判断感知质量和决定何时停止无效计算。

## 来源链接

- Hugging Face 原文（2026-08-13）：https://huggingface.co/blog/icml-2026-open-reproductions
- 公开活动与 logbook 入口由原文链接提供；本文未对每一篇被尝试论文逐项复核。
