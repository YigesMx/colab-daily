---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F08%2F23%2Fother%2Fadmin%2F110126%2F%25e5%2586%258d%25e8%25a7%2581%25ef%25bc%258c%25e6%25b7%25b1%25e5%25a4%259c%25e5%2580%25bc%25e7%258f%25ad%25ef%25bc%2581anthropic%25e8%2587%25aa%25e7%2594%25a8%25e7%25a7%2598%25e7%25b1%258d%25e6%259b%259d%25e5%2585%2589%25ef%25bc%259a%25e5%2587%25ba%25e4%25ba%258b%25e7%259b%25b4%25e6%258e%25a5claude%25ef%25bc%258c4%2F"
businessCandidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F08%2F23%2Fother%2Fadmin%2F110126%2F%25e5%2586%258d%25e8%25a7%2581%25ef%25bc%258c%25e6%25b7%25b1%25e5%25a4%259c%25e5%2580%25bc%25e7%258f%25ad%25ef%25bc%2581anthropic%25e8%2587%25aa%25e7%2594%25a8%25e7%25a7%2598%25e7%25b1%258d%25e6%259b%259d%25e5%2585%2589%25ef%25bc%259a%25e5%2587%25ba%25e4%25ba%258b%25e7%259b%25b4%25e6%258e%25a5claude%25ef%25bc%258c4%2F"
date: "2026-08-24"
category: "News"
title: "再见，深夜值班！Anthropic自用秘籍曝光：出事直接@Claude，4分钟搞定"
authors: ["aiera.com.cn"]
summary: "Anthropic 公开 Claude 在 Slack 值班、CI 告警分诊、事故调查、修复验证与复盘中的实践，并开源 oncall-kit；响应时间与代码占比均来自官方或工程师陈述。"
provisionalKeywords: ["AI运维","智能体系统","开源生态"]
keywords: ["AI运维","智能体系统","开源生态"]
sources: [{"name":"aiera.com.cn","url":"https://aiera.com.cn/2026/08/23/other/admin/110126/%e5%86%8d%e8%a7%81%ef%bc%8c%e6%b7%b1%e5%a4%9c%e5%80%bc%e7%8f%ad%ef%bc%81anthropic%e8%87%aa%e7%94%a8%e7%a7%98%e7%b1%8d%e6%9b%9d%e5%85%89%ef%bc%9a%e5%87%ba%e4%ba%8b%e7%9b%b4%e6%8e%a5claude%ef%bc%8c4/"}]
previewImage: "/daily/2026-08-24/assets/url--https_3a_2f_2faiera.com.cn_2f2026_2f08_2f23_2fother_2fadmin_2f110126_2f_25e5_2586_258d_25e8_25a7_2581_25ef_25bc_258c_25e6_25b7_25b1_25e5_25a4_259c_25e5_2580_25bc_25e7_258f_25ad_25ef_25bc_2581anthropic_25e8_2587_25aa_25e7_2594_25a8_25e7_25a7_2598_25e7_25b1_258d_25e6_259b_259d_25e5_2585_2589_25ef_25bc_259a_25e5_2587_25ba_25e4_25ba_258b_25e7_259b_25b4_25e6_258e_25a5claude_25ef_25bc_258c4_2f/preview.webp"
schemaVersion: 3
ratingTrack: "news"
groupRank: 2
groupScore: 86
scoreScale: "news-v3"
emphasis: false
---

# Anthropic 公开 Claude 值班与 CI 事故处理实践

## 事件概述

新智元报道，Anthropic 工程团队公开了在 Slack 值班场景中使用 Claude Tag 处理 CI 事故的内部实践。报道援引 Anthropic CI 工程师 Sachin Malhotra 的工程文章，称该系统已在内部运行数月，用于告警分诊、事故调查、修复建议、验证和复盘，Anthropic 同时开源了 oncall-kit 项目。

## 已确认事实与证据

报道称，Claude Tag 常驻值班 Slack 频道，通过 MCP 连接 Grafana、Datadog、PagerDuty、GitHub 和 Kubernetes 等工具，并接入服务告警、配置变更等频道获取上下文。其工作流包括按值班手册分诊告警、生成事故调查任务、汇总态势报告、提出修复 PR、执行验证并写入复盘记录。报道援引 Malhotra 的说法称，最短一次 4 分钟定位原因，14 分钟产出态势报告；这些数字属于当事人经验描述，尚未见独立复测。

报道还称，团队先让 Claude 在只输出分析和建议的影子模式中运行，再逐步进入值班频道；人工工程师保留审查、纠偏和部署决策角色。Anthropic 公开的 oncall-kit 项目提供事故模式和调查手册构建流程，并附带虚构事故记录用于演练。文中“80% 合入代码由 Claude 编写”等组织效率数据同样来自 Anthropic 表述。

## 影响与后续观察

该案例展示了一条可审计的人机协同运维路径：AI 负责持续读取上下文、生成调查假设和报告，人负责规则、权限和最终判断。它可能降低值班负担并缩短初步定位时间，但也要求管理工具权限、误报处理、自动化修复风险和审计留痕。

后续应关注开源 kit 的实际采用门槛、Claude 在真实事故中的误判率、权限最小化与变更控制方案，以及独立团队复现的响应时间和服务质量数据。

## 来源链接

- [Anthropic 工程文章](https://claude.com/blog/ai-ci-cd-on-call)
- [oncall-kit](https://github.com/anthropics/oncall-kit)
- [新智元报道](https://aiera.com.cn/2026/08/23/other/admin/110126/%e5%86%8d%e8%a7%81%ef%bc%8c%e6%b7%b1%e5%a4%9c%e5%80%bc%e7%8f%ad%ef%bc%81anthropic%e8%87%aa%e7%94%a8%e7%a7%98%e7%b1%8d%e6%9b%9d%e5%85%89%ef%bc%9a%e5%87%ba%e4%ba%8b%e7%9b%b4%e6%8e%a5claude%ef%bc%8c4/)

