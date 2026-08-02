---
candidateId: sample-20260723-005
date: 2026-07-23
rank: 5
title: 从可验证工具返回中学习调用策略
authors:
  - Nora Feld
  - Kai Nakamura
summary: 示例文章讨论如何利用代码执行、检索和数据库工具的可验证返回构造训练信号，减少对人工奖励数据的依赖。
keywords:
  - 强化学习
  - 工具调用
  - 可验证性
  - 智能体
score: 91.6
sources:
  - name: OpenAI
    url: https://openai.com/news/
  - name: MIT Technology Review
    url: https://www.technologyreview.com/topic/artificial-intelligence/
previewImage: null
---

# 从可验证工具返回中学习调用策略

> 这是用于来源聚合筛选的示例文章。

## 核心内容

代码是否通过测试、查询是否返回符合约束的记录、引用是否能在原文中定位，都是比开放式偏好更明确的监督信号。训练过程可以据此奖励有效调用，并惩罚重复、无关或过早终止的轨迹。

## 关键技术与数据

工具可验证并不意味着可以无限调用。一个实用目标需要同时考虑任务完成、调用次数、延迟和失败恢复，避免模型通过穷举获得表面上的高成功率。

## 结果与结论

系统可能学会迎合验证器的缺陷，因此验证规则本身也要接受对抗测试。对不可完全验证的研究任务，人工审阅仍然是最终边界。

## 来源链接

- [OpenAI News](https://openai.com/news/)
- [MIT Technology Review AI](https://www.technologyreview.com/topic/artificial-intelligence/)
