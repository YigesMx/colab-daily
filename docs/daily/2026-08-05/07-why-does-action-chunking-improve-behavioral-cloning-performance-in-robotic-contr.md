---
candidateId: "arxiv--2608.02547"
category: "Paper"
date: "2026-08-05"
rank: 7
title: "Why Does Action Chunking Improve Behavioral Cloning Performance in Robotic Control?"
authors:
  - "Filippo Lazzati"
  - "Kyle Stachowicz"
  - "William Chen"
  - "Alberto Maria Metelli"
  - "Andrew Wagenmaker"
  - "Sergey Levine"
summary: "该论文通过仿真和实机控制实验分析动作分块为何有效，并将其额外收益归因于学习多种时间关系形成的隐式集成。"
keywords:
  - "动作分块"
  - "机器人泛化"
score: 78
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.02547v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.02547v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.02547/preview.png"
---

## 核心内容

论文不把 action chunking 仅视为减少控制频率的工程选择，而是检验其对行为克隆的归纳偏置。作者区分了相对 Markov 策略的非 Markov 表达能力、复合误差变化和一个额外的隐式集成效应，并使用 delayed policy 作为关键对照。

## 关键技术与数据

动作分块策略从单一观测预测 k 个未来动作，因而学习 a_t|o_t、a_t|o_{t-1} 等多个时间条件关系。论文比较普通 chunking、延迟单动作策略、随机延迟集成和显式集成策略，并在 LineWorld、LIBERO、RoboMimic 与实机控制中检查表示、验证损失、成功率和抗扰动行为。其结论不是将每一种收益都归给 chunking，而是分离可由 delay 复现的效应和不能复现的部分。

## 结果与结论

作者报告 temporal consistency、horizon reduction 和 representation learning 等常见解释不能单独解释效应；在多项设置中，延迟策略可以匹配非 Markov 表达和复合误差收益，但显式或随机延迟集成可复现并在一些域中超过 action chunking。论文的实机与仿真结果支持这一机制假说，不过它依赖所选的行为克隆任务、时延采样和评估方式，不能直接说明所有动作块策略或所有控制频率都应改为集成。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.02547v1
- arXiv 摘要页：https://arxiv.org/abs/2608.02547v1
