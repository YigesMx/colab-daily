---
candidateId: sample-20260723-006
date: 2026-07-23
rank: 6
title: 稀疏专家路由能否缓解长上下文成本
authors:
  - Yifan Zhou
  - Marco Bellini
summary: 一份关于长上下文稀疏路由的示例分析，比较局部专家与全局聚合路径如何共同处理跨段信息。
keywords:
  - 语言模型
  - 长上下文
  - 稀疏专家
  - 计算效率
score: 89.3
sources:
  - name: Google DeepMind
    url: https://deepmind.google/discover/blog/
  - name: arXiv
    url: https://arxiv.org/
previewImage: null
---

# 稀疏专家路由能否缓解长上下文成本

> 本文内容明显为界面与内容管线测试样例。

## 核心内容

长文档可以先按结构切成多个区段，由局部专家处理区段内模式，再通过少量全局专家交换跨段摘要。这样能够减少每个 token 激活的参数量，同时保留必要的全局联系。

## 关键技术与数据

代码仓库理解、长文档问答和多轮对话都包含大量局部相关内容。合理路由可以把计算集中在当前任务最需要的区段，而不是对所有上下文使用相同深度。

## 结果与结论

错误路由会形成信息孤岛，专家负载也可能严重不均。除了最终准确率，评测还需要报告跨段召回、路由稳定性和真实硬件上的吞吐变化。

## 来源链接

- [Google DeepMind Blog](https://deepmind.google/discover/blog/)
- [arXiv](https://arxiv.org/)
