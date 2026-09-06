---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F09%2F06%2Fother%2Fadmin%2F112366%2F%25e5%2588%259a%25e5%2588%259a%25ef%25bc%258cclaude%25e9%25a6%2596%25e6%25ac%25a1%25e8%25af%2581%25e6%2598%258e%25e8%25b4%25b9%25e9%25a9%25ac%25e5%25a4%25a7%25e5%25ae%259a%25e7%2590%2586%25ef%25bc%2581%25e6%25b8%2585%25e5%258d%258e%25e5%25a7%259a%25e7%258f%25ad%25e5%25a4%25a7%25e7%25a5%259e%25e5%2587%25ba%25e6%2589%258b%2F"
date: "2026-09-07"
category: News
title: "Anthropic：Claude 11 天完成费马大定理首个端到端机器验证证明"
authors: ["aiera.com.cn"]
summary: "Anthropic 9 月 4 日官方发布：Claude 在 11 天内基本自主地完成费马大定理的首个完整计算机检验证明——1,300 万行 Lean 代码、29,500 条中间定理（超 Mathlib 五倍）、仅依赖 Lean 三条标准公理、消耗约 60 亿输出 token；项目由清华姚班出身、哥伦比亚大学助理教授兼 Anthropic 研究员彭天翼（Tianyi Peng）发起，依托其 Prove2Me 定理 DAG 协作平台与 Claude Code 多智能体框架，早期失败尝试仅贡献约 7% 非样板代码。"
keywords:
  - AI 数学与推理
  - AI 科研自动化
  - 大模型发布与竞争
sources:
  - { "name": "aiera.com.cn", "url": "https://aiera.com.cn/2026/09/06/other/admin/112366/%e5%88%9a%e5%88%9a%ef%bc%8cclaude%e9%a6%96%e6%ac%a1%e8%af%81%e6%98%8e%e8%b4%b9%e9%a9%ac%e5%a4%a7%e5%ae%9a%e7%90%86%ef%bc%81%e6%b8%85%e5%8d%8e%e5%a7%9a%e7%8f%ad%e5%a4%a7%e7%a5%9e%e5%87%ba%e6%89%8b/" }
previewImage: "/daily/2026-09-07/assets/url--https_3a_2f_2faiera.com.cn_2f2026_2f09_2f06_2fother_2fadmin_2f112366_2f_25e5_2588_259a_25e5_2588_259a_25ef_25bc_258cclaude_25e9_25a6_2596_25e6_25ac_25a1_25e8_25af_2581_25e6_2598_258e_25e8_25b4_25b9_25e9_25a9_25ac_25e5_25a4_25a7_25e5_25ae_259a_25e7_2590_2586_25ef_25bc_2581_25e6_25b8_2585_25e5_258d_258e_25e5_25a7_259a_25e7_258f_25ad_25e5_25a4_25a7_25e7_25a5_259e_25e5_2587_25ba_25e6_2589_258b_2f/preview.jpg"
schemaVersion: 3
ratingTrack: "news"
groupRank: 2
groupScore: 82.0
scoreScale: "news-v3"
emphasis: false
---
# Anthropic：Claude 11 天完成费马大定理首个端到端机器验证证明

## 事件概述

Anthropic 于 9 月 4 日在官方 research 页面发布《Formalizing Fermat's Last Theorem》：Claude 用 11 天时间、以基本自主的方式完成费马大定理（FLT）的首个完整端到端计算机检验证明，写下 1,300 万行 Lean 代码。这是数学形式化与 AI 自动证明方向的标志性事件，中文圈 9 月 6 日由新智元以《刚刚，Claude首次证明费马大定理！清华姚班大神出手了》报道。

## 已确认事实与证据

以下数字均以 Anthropic 官方页面为准确认（新智元报道口径的「30,300 条可验证定理、29,500 条被采用」已按官方页校正为 29,500 条中间定理）：
- 官方页面（2026 年 9 月 4 日）声明：Claude 在 11 天内基本自主工作，产出首个端到端、计算机检验的 FLT 证明；过程中写下 1,300 万行 Lean、证明 29,500 条中间定理；证明规模超过其依赖的主社区数学库 Mathlib 五倍以上；最终证明仅使用 Lean 的三条标准公理，由 Lean 编译器完整检查通过。
- 计算口径：由通用内部研究模型（能力大致与 Claude Fable 5.1 相当）执行，消耗约 60 亿输出 token；配合 Prove2Me 与基于 Claude Code 的多智能体 harness。
- 人员：由 Anthropic 研究员、哥伦比亚大学助理教授彭天翼（Tianyi Peng，清华姚班本科、MIT 博士）发起；Prove2Me 是彭天翼与哥大合作者设计的开放数学形式化协作平台，通过定理 DAG（有向无环图）、陈述与证明分离、自然语言索引帮助多智能体并行。
- 过程：早期几十个智能体的协作尝试一度混乱，失败代码最终仅占非样板代码的约 7%；证明沿 Wiles 证明的 Darmon–Diamond–Taylor 简化版本推进；Kevin Buzzard（帝国理工，2024 年启动 FLT 形式化项目、第一阶段蓝图 86 页）评价其为「现代数学文献自动形式化的一大步」。
- 附加实验：3 个消费级账号经 Prove2Me 协作、3 天完成维诺格拉多夫三素数定理的形式化。

## 影响与后续观察

- autoformalization 的工程化拐点：此前公认「以年为单位」的形式化工程被压缩到天级；「附带形式化验证代码」可能逐步成为数学与理论 CS 论文的标配，AI 生成的数学结论也因此获得机器可查的信任链。
- Prove2Me 式「定理 DAG + 多智能体」脚手架是可复用的方法论：对具身/RL 方向的复杂系统验证（如控制器安全性证明）也有想象空间（此为 track 分析，非论文主张）。
- 待观察：Lean 社区对该证明结构与依赖的审读；消费级订阅复现门槛的稳定性；「机器验证 ≠ 数学洞见」的边界讨论；彭天翼团队后续论文与平台开放节奏。

## 来源链接

- Anthropic 官方研究页（一手）：https://www.anthropic.com/research/formalizing-fermats-last-theorem
- 新智元报道（对象发现来源）：https://aiera.com.cn/2026/09/06/other/admin/112366/（完整 URL 见来源记录）
