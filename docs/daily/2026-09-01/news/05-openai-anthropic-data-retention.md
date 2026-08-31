---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F08%2F31%2Fother%2Fadmin%2F111490%2Fopenai%25e5%25ae%2598%25e5%25ae%25a3%25ef%25bc%259a%25e4%25bd%25a0%25e7%259a%2584%25e6%2595%25b0%25e6%258d%25ae%25e4%25b8%2580%25e5%25ad%2597%25e4%25b8%258d%25e7%2595%2599%25ef%25bc%2581anthropic%25e9%259a%2594%25e5%25a4%25a9%25e6%259d%25be%25e5%258f%25a3%25ef%25bc%259a%25e4%25bd%25a0%25e5%258f%25af%25e4%25bb%25a5%2F"
date: "2026-09-01"
category: News
title: "OpenAI官宣：你的数据一字不留！Anthropic隔天松口：你可以自己保管"
authors: ["aiera.com.cn"]
summary: "OpenAI 8月19日宣布预览 Private Safety Processing，承诺企业客户提示词与回复零留存；Anthropic 次日被报道松口：30天留存义务不变，但数据可存于客户自有云，Boris Cherny 称新方案今年秋天推出。两家对企业数据保管权给出不同答案，均指向跨请求安全分析这一共同前提。"
keywords: ["AI 治理与合规", "AI 产品与公司动态"]
sources:
  - {"name": "aiera.com.cn", "url": "https://aiera.com.cn/2026/08/31/other/admin/111490/openai%e5%ae%98%e5%ae%a3%ef%bc%9a%e4%bd%a0%e7%9a%84%e6%95%b0%e6%8d%ae%e4%b8%80%e5%ad%97%e4%b8%8d%e7%95%99%ef%bc%81anthropic%e9%9a%94%e5%a4%a9%e6%9d%be%e5%8f%a3%ef%bc%9a%e4%bd%a0%e5%8f%af%e4%bb%a5/"}
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 5
groupScore: 73
scoreScale: "news-v3"
---

# OpenAI官宣：你的数据一字不留！Anthropic隔天松口：你可以自己保管

## 事件概述

围绕企业客户数据留存，OpenAI 与 Anthropic 在一周内接连调整官方政策。据新智元 2026-08-31 报道：6 月 9 日 Anthropic 一项企业新规生效——企业客户要调用 Fable 5、Mythos 5 这一档模型，须接受提示词与生成输出留存 30 天的条件；8 月 19 日 OpenAI 宣布预览 Private Safety Processing，核心承诺是不保留客户数据；次日 Anthropic 被报道松口，30 天留存义务不变，但给出新选项——这些数据可以存放在客户自己的云上；随后 Anthropic 的 Boris Cherny（报道称其为 Claude Code 之父）进一步表示，客户可以拥有并控制自己的数据，Anthropic 一点都不留，新办法今年秋天推出。两条官方动作合计构成一次关于企业数据保管权的连续政策变化。

## 已确认事实与证据

- 主体、时间与事件链：新智元（AIERA）2026-08-31 全文报道（原文页 HTTP 200，正文已完整落盘核验，与冻结 source record 一致），报道给出双方公告时间线，并引用 OpenAI 官方公告与 Anthropic 官方隐私中心页面作为一手来源。
- OpenAI 侧：报道称 OpenAI 于 8 月 19 日宣布预览 Private Safety Processing，官方公告 URL 为 https://openai.com/index/offering-zero-data-retention-for-frontier-models/ 。该官方页面当前对自动抓取返回 403，公告全文未能直接读取；以下机制描述均为 OpenAI 宣布/报道转述口径：原始内容可留在客户自有基础设施，或放入 OpenAI 提供的存储但以客户持有的密钥加密（OpenAI 无副本）；自动系统跨多轮相关交互横向分析风险模式；命中风险后 OpenAI 只收到活动类别与严重程度的窄口径信号，底层提示词与回复对 OpenAI 不可见；客户可在自己系统查询告警并自行决定是否交出相关内容。报道称该设计尚在早期客户测试，计划 9 月开始推出，技术白皮书届时发布。
- Anthropic 侧：Anthropic 官方隐私中心文章《Is my data used for model training?》（HTTP 200，正文已落盘）确认消费端数据用于训练的三种情形（设置中允许、对话被标记进安全审查、主动加入 Trusted Tester 等计划），与报道转述一致。报道另称：Anthropic 6 月 9 日生效的企业新规针对原本配置零数据留存、又希望使用 Covered Models（Fable 5、Mythos 5 档）的组织，留存目的是支持安全分析（如跨请求的 Best-of-N 越狱、数据勒索等只有在大量请求聚合时才可见的攻击）；新规后 Anthropic 与 100 多家客户沟通过替代方案（其中包括 Salesforce）；本次调整中 30 天留存义务不变，新增选项是数据可放在客户自己的云上，密钥、访问日志与审计归客户自己管理。其中“30 天照留、可放在自有云”一节报道标注为“据知情人士透露”，未见 Anthropic 正式公告页直接确认。
- 留存与训练的区分：报道称 Anthropic 表示 Covered Models 留存内容用于支撑安全工作；OpenAI 表示企业数据默认不用于训练，除非客户主动选择加入。消费端方面，Anthropic 官方页面明确消费端套餐的输入输出本来就在留存；2025 年 8 月 Anthropic 曾将训练开关默认值调整为开启（报道引用其官方公告弹窗截图）；消费端允许训练后去标识聊天记录最长可在训练管线保留 5 年、违反使用政策的对话内容存 2 年、风险分存 7 年等时间数字均为报道转述，未独立核验。

## 影响与后续观察

- 对企业客户，数据存放位置、密钥与审计归属成为模型选型的新合规维度；报道指出 OpenAI 方案是“不留也不要求客户留”，Anthropic 方案是“留存义务不变、保管权移交客户”，两种“零留存”语义并不等价。
- 对安全治理，双方一致认可跨请求聚合分析对发现复杂攻击的必要性，分歧集中在是否需要以留存原始数据为代价。
- 待观察事项：Private Safety Processing 是否按计划于 9 月推出及技术白皮书内容；Anthropic 秋季新方案的正式公告、适用范围与细则；报道中“知情人士”口径的自有云保管选项是否落地为正式条款；消费端默认训练开关与长期留存的监管反应。

## 来源链接

- 新智元（AIERA）报道（2026-08-31）：https://aiera.com.cn/2026/08/31/other/admin/111490/openai%e5%ae%98%e5%ae%a3%ef%bc%9a%e4%bd%a0%e7%9a%84%e6%95%b0%e6%8d%ae%e4%b8%80%e5%ad%97%e4%b8%8d%e7%95%99%ef%bc%81anthropic%e9%9a%94%e5%a4%a9%e6%9d%be%e5%8f%a3%ef%bc%9a%e4%bd%a0%e5%8f%af%e4%bb%a5/
- OpenAI 官方公告（报道引用；当前对自动抓取返回 403）：https://openai.com/index/offering-zero-data-retention-for-frontier-models/
- Anthropic 官方隐私中心《Is my data used for model training?》：https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training
