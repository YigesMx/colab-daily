---
candidateId: "arxiv--2608.03234"
date: "2026-08-06"
rank: 15
title: "Learning Context-Aware Motion Priors for Humanoid Control"
authors:
  - "Yunyang Mo"
  - "Yi Gu"
  - "Yangchen Zhou"
  - "Hanyang Cao"
  - "Renjing Xu"
summary: "CMP 根据当前任务上下文重新加权示范运动先验，用高优势策略 rollout 学习相关性，避免无关技能对人形控制造成冲突指导。"
keywords:
  - "人形机器人"
  - "强化学习"
  - "运动先验"
score: 73
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.03234v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.03234v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.03234/preview.png"
---

## 核心内容

通用运动先验通常把整个参考数据集均匀用于所有任务，可能将无关甚至冲突的动作指导传给当前策略。CMP 不要求手工技能标签、数据集预分区或独立技能发现，而是在策略学习过程中判断哪些参考运动与当前任务更匹配。

## 关键技术与数据

方法用高优势 policy rollout 学习 context-motion compatibility，同时以示范目标约束相关性不偏离参考分布；相关分数进一步重加权参考监督，训练轻量 context-conditioned adapter。作者将方法分别实例化在 Adversarial Motion Priors 和 Score-Matching Motion Priors 上，在五项人形控制任务中比较性能、样本效率和不平衡参考分布。

## 结果与结论

作者报告 CMP 在五项人形控制任务中持续提升任务性能和样本效率，并能学习有意义的任务-运动对齐，在参考分布不平衡时保持鲁棒。论文支持上下文感知运动先验的使能价值，但没有把结果等同于跨平台泛化；任务、参考动作质量和 rollout 优势估计仍会影响学习到的相关性。

## 来源链接

- https://arxiv.org/pdf/2608.03234v1
- https://arxiv.org/abs/2608.03234v1
