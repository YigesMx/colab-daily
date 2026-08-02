---
candidateId: sample-20260723-003
date: 2026-07-23
rank: 3
title: 面向代码智能体的抗污染评测如何构造
authors:
  - Mei Zhang
  - Benchmark Sample Lab
summary: 示例文章梳理从真实工程变更反向构造任务的评测方法，重点观察公开题库污染、端到端完成度和跨工具场景。
keywords:
  - 代码生成
  - 评测基准
  - 数据污染
  - 智能体
score: 95.4
sources:
  - name: arXiv
    url: https://arxiv.org/
  - name: PaperWeekly
    url: https://www.paperweekly.site/
previewImage: null
---

# 面向代码智能体的抗污染评测如何构造

> 以下内容是站点迁移样例，不描述一个已发布的真实基准。

## 核心内容

一种更接近实际工作的做法，是从已经完成的缺陷修复或功能变更出发，隐藏最终补丁，再把上下文改写成开发者请求。评测执行时，智能体需要浏览仓库、定位代码、运行测试并提交可验证修改。

## 关键技术与数据

仅使用较新的仓库提交并不足以完全阻断污染。任务还应避免直接暴露提交信息、测试名称和原始问题文本，并记录数据冻结时间，以便解释模型可能接触过的公开信息。

## 结果与结论

最终测试通过率仍然重要，但还应观察无关文件修改、工具调用成本、补丁可读性和安全边界。多个指标共同呈现，才能避免一个聚合分数隐藏严重失败。

## 来源链接

- [arXiv](https://arxiv.org/)
- [PaperWeekly](https://www.paperweekly.site/)
