---
candidateId: "arxiv--2608.03103"
date: "2026-08-06"
rank: 10
title: "A Hierarchical Approach to Imitation Learning for Manipulation Tasks Requiring Time Varying Forces"
authors:
  - "Rishabh Shukla"
  - "Adithya Santhosh"
  - "Shaili Gandhi"
  - "Samrudh Moode"
  - "Satyandra K. Gupta"
summary: "DPA-FTG 将接触丰富拆解任务分成低频扩散策略和高频力条件控制器，以应对扩散去噪延迟与瞬时力变化。"
keywords:
  - "力控制"
  - "模仿学习"
  - "机器人操作"
score: 77
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.03103v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.03103v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.03103/preview.png"
---

## 核心内容

接触丰富的凿击和撬动动作需要高频响应，而扩散策略的多步去噪会造成延迟；固定动作块又会错过断裂时刻的力突变。DPA-FTG 将策略选择与力调节拆成不同时间尺度。

## 关键技术与数据

高层以 5Hz 条件扩散模型从任务原语词汇中预测策略参数，低层以 60Hz 力条件神经阻抗控制器调节接触稳定性。系统使用视觉和触觉相关的动作表示，验证任务是双臂电池拆解中的柔性片材分离，并与 Reactive Diffusion Policy 等基线比较。

## 结果与结论

作者报告在双臂电池拆解任务中优于所比较的反应式扩散基线，说明低频计划和高频力调节的分工可以改善瞬时接触处理。论文摘要没有给出完整任务表和更广泛平台结果，因此应将它看作针对特定接触任务的控制架构证据，而不是对所有扩散策略延迟问题的普遍结论。

## 来源链接

- https://arxiv.org/pdf/2608.03103v1
- https://arxiv.org/abs/2608.03103v1
