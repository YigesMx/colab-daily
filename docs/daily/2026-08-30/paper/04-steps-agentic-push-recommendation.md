---
candidateId: "arxiv--2608.01949"
date: "2026-08-30"
category: Paper
title: "A Self-Triggered Agentic Push Recommendation System"
authors: ["arxiv.org", "arxiv.org", "arxiv.org", "jiqizhixin.com"]
summary: "STEPS 把推送推荐重构为自触发智能体过程，由规划智能体决定下次系统调用、执行智能体决定是否发送、过滤智能体控制开销；在抖音在线 A/B 中用户活跃天数提升 0.2843%，关推送率下降 1.9089%，计算开销下降 79.42%。"
keywords: ["推理与系统优化", "商业化落地", "产业合作"]
sources:
  - {"name":"arxiv.org","url":"https://arxiv.org/abs/2608.01949"}
  - {"name":"arxiv.org","url":"https://arxiv.org/pdf/2608.01949"}
  - {"name":"arxiv.org","url":"https://arxiv.org/e-print/2608.01949"}
  - {"name":"jiqizhixin.com","url":"https://www.jiqizhixin.com/articles/2026-08-29-2"}
previewImage: "/daily/2026-08-30/assets/arxiv--2608.01949/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 79
scoreScale: "paper-v2"
emphasis: false
---

# STEPS：自触发的智能体推送推荐系统

## 研究问题与贡献

论文研究大规模平台推送中的“是否发、何时发”问题。传统方法分为离线预规划频率和固定间隔轮询，前者难以适应实时状态，后者在计算开销与最佳时机之间权衡。作者提出 STEPS，一个已在抖音全量部署的自触发端到端智能体推送系统，让系统自己决定何时再次唤醒自己以及唤醒后是否发送。

## 方法与系统

STEPS 包含三个协作组件。规划智能体使用 Decision Transformer 和 gated ordinal regression 预测下一次系统调用的时间间隔；执行智能体根据轨迹回报和实时上下文决定是否发送；轻量过滤智能体先筛除低价值请求，降低计算开销并防止不合理规划行为。系统把推送视为连续序列决策问题，在在线推理中聚合有序桶得到连续时间间隔。

## 实验设置与数据

离线训练和评估使用超过六个月、覆盖超过十亿抖音用户的生产日志；在线评估直接在抖音推送场景做 A/B 测试。指标包括用户活跃天数、负向体验和推送权限关闭率，并比较规划、执行、过滤三个智能体的消融贡献。

## 结果、限制与结论

在线 A/B 显示 STEPS 使用户活跃天数提升 0.2843%，推送权限关闭率下降 1.9089%；过滤智能体将计算开销降低 79.42%。消融表明规划智能体是主要贡献来源，执行智能体进一步提高活跃，过滤智能体提供边界控制并显著降低资源消耗。论文的限制在于主要验证来自单一超大规模平台的推送场景，外推到其他频控系统需要额外实验。总体而言，STEPS 说明了自触发调度能让推荐系统兼顾实时性和资源约束。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2608.01949)
- [PDF 全文](https://arxiv.org/pdf/2608.01949)
- [TeX source](https://arxiv.org/e-print/2608.01949)
- [机器之心报道](https://www.jiqizhixin.com/articles/2026-08-29-2)
