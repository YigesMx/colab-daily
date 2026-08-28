---
candidateId: "url--https%3A%2F%2Fwww.perceptron.inc%2Fblog%2Fintroducing-isaac-0-5"
businessCandidateId: "url--https%3A%2F%2Fwww.perceptron.inc%2Fblog%2Fintroducing-isaac-0-5"
date: "2026-08-28"
category: News
title: "Introducing Isaac 0.5"
authors: ["Perceptron"]
summary: "Perceptron 官方博客宣布发布36B稀疏参数具身模型Isaac 0.5，联合训练视频理解、空间定位、任务进展与机器人动作，并开放checkpoints、训练和推理代码。"
provisionalKeywords: ["具身智能", "跨本体学习", "视觉语言动作模型"]
keywords: ["具身智能", "跨本体学习", "视觉语言动作模型"]
sources:
  - {"name": "Perceptron", "url": "https://www.perceptron.inc/blog/introducing-isaac-0-5"}
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 6
groupScore: 0
scoreScale: "news-v3"
emphasis: false
---

# Perceptron 发布 Isaac 0.5，开放具身智能完整系统

## 事件概述

Perceptron 在官方博客中宣布发布 Isaac 0.5。官方列表页显示该文章日期为2026年8月26日；该日期不在本期 `[2026-08-26T16:00:00Z, 2026-08-27T16:00:00Z)` 冻结窗口内，因此本条为监督人授权的一次性特例插入，未参与本期 News 评分，`group_score` 记为0仅表示无评分，不表示质量判断。

## 已确认事实与证据

Perceptron 称，Isaac 0.5 是一个36B稀疏参数模型，输入覆盖图像、视频、语言指令、机器人状态和历史动作，可输出视频问答、对象指向与跟踪、任务进展判断以及机器人动作。模型训练使用35个以上机器人系统的数据、10万小时机器人经验、100万小时通用视频和3T多模态token，并从训练开始即共同优化视频理解、空间定位、任务进展和机器人动作。

官方博客还称，Isaac 0.5 引入语义世界建模目标，用未来“percept”预测连接视频表征与控制；架构上使用 mHarmony 类型化多模态接口、TensorStream 打包格式、Null Experts 动态计算和共享骨干，并同时提供离散 FAST 与连续 Flow 两条动作解码路径。Perceptron 报告的固定动作损失实验显示，在80:30:30的通用视频、自我中心视频和UMI配比下，把通用视频从1000小时增加到100万小时，可使达到动作损失2.50所需的遥操作数据从约5900小时降至28小时。

Perceptron 表示，Isaac 0.5 以完整系统形式发布，包括checkpoints、训练代码和基于 LeRobot 的推理代码，团队可将其微调为策略，或在规划器、控制器和数据引擎中使用其视觉输出。以上模型规模、训练配比、基准比较和210倍遥操作需求结论均来自Perceptron官方博客，本文未独立复现实验。

## 影响与后续观察

Isaac 0.5 的核心价值在于把大规模通用视频、跨本体机器人经验和开放发布组合在一起。如果官方报告的视频-遥操作 scaling law 可复现，它会影响机器人团队的数据预算策略，用低成本视频减少昂贵遥操作采集；开放训练与推理代码也便于社区验证其感知、定位和闭环控制能力。

后续需要核对实际权重许可、LeRobot代码可用性、硬件需求和推理延迟，并等待独立团队在真实机器人任务上的复现结果。官方博客中的对比基线和图表结论属于Perceptron自评，尚不能直接等同于跨模型优劣结论。

## 来源链接

- [Perceptron: Introducing Isaac 0.5](https://www.perceptron.inc/blog/introducing-isaac-0-5)
