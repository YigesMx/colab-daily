---
candidateId: "arxiv--2608.06867"
date: "2026-08-15"
category: "Paper"
title: "LLMRouter: Unified Infrastructure for Developing, Evaluating, and Deploying LLM Routers"
authors:
  - "Tao Feng 等"
summary: "LLMRouter 把模型路由形式化为五组件顺序决策过程，并提供 xRouteBench 与 16+ 路由器统一实现，用于质量和成本联合评估。"
provisionalKeywords:
  - "模型路由"
  - "推理成本"
  - "统一评测"
  - "开源基础设施"
  - "个性化路由"
keywords:
  - "模型路由"
  - "推理成本"
  - "智能体外层系统"
sources:
  - name: "Hugging Face"
    url: "https://huggingface.co/papers/2608.06867"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.06867"
  - name: "PDF"
    url: "https://arxiv.org/pdf/2608.06867"
  - name: "TeX source"
    url: "https://export.arxiv.org/e-print/2608.06867"
previewImage: "/daily/2026-08-15/assets/arxiv--2608.06867/preview.png"
schemaVersion: 2
ratingTrack: "paper"
groupRank: 10
groupScore: 83
scoreScale: "paper-v2"
---

# LLMRouter: Unified Infrastructure for Developing, Evaluating, and Deploying LLM Routers

> LLMRouter 把模型路由形式化为五组件顺序决策过程，并提供 xRouteBench 与 16+ 路由器统一实现，用于质量和成本联合评估。

## 研究问题与贡献

没有任何单一 LLM 在所有查询、用户偏好和预算下最优，路由因此是部署核心；但既有路由器形式和实现差异很大，缺乏统一评价管线。论文将 single-turn、multi-turn 和 personalized routing 统一为一个顺序决策过程，并给出可扩展实现与基准。

## 方法与系统

路由器由 context encoder、model encoder、scoring function、decision rule 和 learning signal 五类组件刻画。状态包含查询、可选用户上下文和交互历史；动作可派发候选模型或终止聚合。目标同时优化答案质量和调用成本。LLMRouter 库让新路由器只实现 routing method 与 loss，内置 16+ 代表方法；自动管线在候选模型池和 benchmark 上构建监督，再按统一协议评估。

## 实验设置与数据

xRouteBench 覆盖通用 NLP、memory-augmented、图像/视频、时间序列和个性化路由。论文进行系统经验研究，并在真实 Slack 偏好反馈中让 15 名用户产生 234 条 pairwise 记录；还测试 MultiAgentBench/GraphPlanner 的五种多智能体拓扑中逐节点路由。

## 结果、限制与结论

学习型路由相对最强固定模型提升 14.6%；成本压力会逆转排名，使轻量设计更占优；user-conditioned routing 带来一致个性化收益。真实用户中 PersonalizedRouter 达 83.05，而模拟 judge 下的 GMTRouter 排名下降，说明真实反馈校验必要。多智能体系统中六个学习路由器平均超过最大模型固定选择，MFRouter 76.48 对 71.48。局限在于基准仍依赖所选模型池与自动/人工 judge，成本和质量权重会影响结论；部署安全与路由失败回滚未在摘要范围内报告。

## 来源链接

- [Hugging Face](https://huggingface.co/papers/2608.06867)
- [arXiv](https://arxiv.org/abs/2608.06867)
- [PDF](https://arxiv.org/pdf/2608.06867)
- [TeX source](https://export.arxiv.org/e-print/2608.06867)

