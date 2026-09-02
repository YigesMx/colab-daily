---
candidateId: "url--https%3A%2F%2Fwww.qbitai.com%2F2026%2F09%2F482652.html"
date: "2026-09-03"
category: News
title: "Claude最强Fable 5.1发布！8项屠榜，最高降价45%，反蒸馏机制上线"
authors: ["qbitai.com", "anthropic.com"]
summary: "Anthropic 发布 Claude Fable 5.1（全面开放）与 Mythos 5.1（受信访问）。官方称 8 项公开基准第一、典型工作负载成本降约 25%（缓存读取降 75%，智能体任务最高省 45%）；科研演示含 10 倍亲和力蛋白质设计、金星 2-3 公里分辨率新地形图与 7 个开源模型最高 2.5 倍 GPU 提速；同期上线思维链签名反蒸馏机制，堵死篡改上下文重放推理的蒸馏路径。"
keywords:
  - 多模态大模型
  - 智能体
sources:
  - {"name": "qbitai.com", "url": "https://www.qbitai.com/2026/09/482652.html"}
  - {"name": "anthropic.com", "url": "https://www.anthropic.com/claude-fable-and-mythos-5-1"}
previewImage: "/daily/2026-09-03/assets/url--https_3a_2f_2fwww.qbitai.com_2f2026_2f09_2f482652.html/preview.webp"
schemaVersion: 3
ratingTrack: "news"
groupRank: 3
groupScore: 88
scoreScale: "news-v3"
emphasis: false
---

## 事件概述

9 月 2 日，Anthropic 发布 Claude Fable 5.1 与 Claude Mythos 5.1。据官方公告，Fable 5.1 面向所有用户开放，在智能体科研与代码等任务上明显超越 Fable 5，典型工作负载成本下降约 25%；Mythos 5.1 仅通过受信访问计划提供给经审核的网络安全与生命科学机构。量子位当日报道称其"8 项公开基准全部第一，最高降价 45%"，并确认新上线了针对思维链上下文篡改的反蒸馏机制。同期发布的科研实战演示（蛋白质设计、金星地形图、GPU 内核优化）展示了模型在科研自动化上的进展。

## 已确认事实与证据

- 发布主体与时间：Anthropic 于 2026 年 9 月 2 日在官方页面发布（官方页面已直接核验）；量子位 9 月 2 日 02:18 UTC 发文报道。
- 模型与可用性（官方口径）：Fable 5.1 正式开放；Mythos 5.1 仅通过 trusted access 计划提供给经过审核的网络安全与生命科学机构，其防护专为这两类工作设计。
- 基准表现（官方口径）：官方页面给出对比表，其中 Terminal-Bench-Science 上 Fable 5.1 为 52.6%，Fable 5 为 24.7%、Opus 5 为 29.0%、GPT-5.6 Sol 为 22.4%；媒体称 8 项公开基准全部第一。上述均为厂商报告值。
- 定价（官方口径）：官方称典型工作负载成本较 Fable 5 低约 25%；媒体报道具体拆解为缓存读取价格降至每百万 token 0.25 美元（降幅 75%），输入/输出价格维持 10/50 美元不变，高度智能体化任务最多节省约 45%。
- 科研演示（官方口径）：Mythos 5.1 使用开源蛋白质设计与折叠工具设计高亲和力结合蛋白，方案送两家外部机构实验验证——3 个靶标上亲和力达 Adaptyv Bio 蛋白质设计竞赛最佳方案的 10 倍，12 个靶标命中率接近 50%（领域典型为 10%-15%）；Fable 5.1 基于 NASA 麦哲伦号 30 多年前的雷达图像训练神经网络，为金星约三分之一表面生成新的高分辨率地形图，分辨率达 2-3 公里（原有地形图为 10-20 公里、覆盖五分之一面积），高度精度提高约 25%，地图已按 CC 协议开源供 NASA VERITAS 与 ESA EnVision 任务参考；Mythos 5.1 通过编写自定义 GPU 内核并缓存中间结果，将 7 个开源深度学习模型提速最高 2.5 倍（输出完全一致），预计可将此类研究的 GPU 成本降低 30%-60%，优化计划开源。
- 安全策略调整（官方口径）：Fable 5.1 网络安全误报率较 Fable 5 降低 60%，允许用于发现软件漏洞但禁止开发漏洞利用（渗透测试等双重用途任务仍重定向至 Opus 系列）；基础生物学与医学问题误报率降低 85%，生命科学研发查询仍路由至 Opus，专业人员经 Mythos 5.1 生命科学验证计划（LSVP）获取访问。
- 反蒸馏机制（官方文档、媒体报道）：自当日起新注册 API 账户无法在多轮对话中篡改上下文同时保留思维链记录——每个思维链区块附带签名，回传时校验前缀（含系统提示词、工具列表、历史消息）是否与生成时完全一致；校验失败默认返回 400，可设 prefix_mismatch_behavior 为 drop_block 静默丢弃失效区块。思维链区块形成链式校验，从中间抽块会使其后全部失效。Claude Code、claude.ai、Managed Agents、Agent SDK 等官方产品自动适配，直连 Messages API 的开发者需按 append-only 原则改造。
- 写作风格（官方研究员口径）：研究员 Flix Rieseberg 称 Fable 5.1 减少粗体、标题、列表与引号的使用，对风格提示词遵循更好。

## 影响与后续观察

- Fable 5.1 的降价重点在缓存读取（智能体任务成本大头），叠加多步骤任务稳定性提升，会直接降低长程智能体工作负载的成本门槛；反蒸馏机制则改变了第三方工具在多轮对话中回放/拼接思维链的做法，直连 API 的框架需要适配。
- 待观察：8 项基准为厂商报告，第三方复现与实际智能体任务表现待验证；Mythos 5.1 受信访问的审核范围与开放节奏未知；金星地形图与蛋白质设计成果的同行评审状态未报告；OpenAI 同期仅有 Astra 预告（媒体报道），两家旗舰模型的对局结果待观察；8 月 31 日前注册的 API 账户何时被强制执行签名校验未明确。
- 后续验证建议：关注 Anthropic 文档中 prefix_binding_mismatch 相关的迁移指南与开发者反馈。

## 来源链接

- Anthropic 官方公告：https://www.anthropic.com/claude-fable-and-mythos-5-1
- 量子位报道：https://www.qbitai.com/2026/09/482652.html

