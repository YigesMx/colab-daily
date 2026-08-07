---
candidateId: "arxiv--2608.03034"
category: "Paper"
date: "2026-08-06"
rank: 11
title: "PACE: Adaptive Budget Allocation for Time-Efficient Embodied Planning"
authors:
  - "Yuchen Huang"
  - "Xijiang Ying"
  - "Zhenhua Ma"
  - "Xiaxiang Yuan"
  - "Zhijie Gao"
  - "Jiayi Huang"
  - "Ruichi Mao"
  - "Jiazheng Zhang"
  - "Hongsheng Ti"
  - "Maotao Tian"
  - "Rong Shi"
  - "Lu Zhao"
  - "Shizhuang Zhang"
  - "Zhuo Cui"
  - "He Wang"
  - "Ling Liu"
  - "Wei Zhang"
summary: "PACE 将大语言模型的思考过程与机器人动作执行交错安排，并根据可用执行窗口动态分配推理 token 预算。"
keywords:
  - "任务规划"
  - "实时控制"
score: 75
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.03034v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.03034v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.03034/preview-main.png"
---

## 核心内容

推理增强模型在具身规划中常需等待完整思考结束，导致计划延迟超过可用的执行时间。PACE 将思考和行动放入流水线，使机器人执行已经确定的动作时，模型继续为后续决策分配认知预算。

## 关键技术与数据

框架包含 Interleaved Think-Act 架构和 Dynamic Budget Allocator，按当前执行窗口调整推理 token 数量，避免把所有思考都串行放在动作之前。作者在 Robotouille 基准上以量化 Qwen3-8B-AWQ 比较 ReAct+Think 等策略，并统计成功、思考时间和被执行窗口隐藏的推理比例。

## 结果与结论

作者报告 Robotouille 成功率 10%，较 ReAct+Think 提升 67%；思考时间加速 6.9 倍，并将 66.8% 的思考时间隐藏在动作执行窗口内。结果说明时间感知架构有机会让推理模型进入低延迟具身系统，但基准成功率绝对值仍低，且真实机器人安全、执行中断和更复杂传感器闭环不在本文证据范围。

## 来源链接

- https://arxiv.org/pdf/2608.03034v1
- https://arxiv.org/abs/2608.03034v1
