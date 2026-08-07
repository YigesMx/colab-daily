---
candidateId: "arxiv--2608.01381"
category: "Paper"
date: "2026-08-05"
rank: 5
title: "DreamTrajectory: Trajectory-Guided Action Generation with World Model Alignment for Mobile Manipulation"
authors:
  - "Zheng Yang"
  - "Wenjie Zhang"
  - "Xiangyu Chen"
  - "Wenxuan Song"
  - "Xianpeng Wang"
  - "Yihang Kang"
  - "Wen Chen"
  - "Lujia Wang"
  - "Renjing Xu"
  - "Xiaowen Chu"
summary: "DreamTrajectory 将末端轨迹与全身动作块联合生成，再用轻量轨迹世界模型在执行前筛选更符合计划的动作候选。"
keywords:
  - "移动操作"
  - "世界动作模型"
  - "轨迹规划"
  - "视觉语言动作模型"
score: 80
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.01381v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.01381v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.01381/preview.png"
---

## 核心内容

该工作针对移动操作中底盘与机械臂共同构成的大动作空间，以及直接执行动作块造成的计划-执行偏差。它把意图级末端轨迹作为显式的任务空间接口，让全身动作生成有可比较的运动目标。

## 关键技术与数据

轨迹引导 VLA 用组因果注意力同步去噪未来 7D 末端轨迹和动作块，轨迹 token 可以指导动作 token、反向信息则被阻断。执行前，GRU 轨迹世界模型从双视角、状态和候选动作预测实际诱导轨迹；模型在原动作附近采样 30 个候选，按计划-诱导轨迹一致性与平滑性打分。世界模型的目标来自记录的执行结果而非开环运动学。训练和评测覆盖 Fetch 的 MS-HAB 六任务，以及 ARX LIFT 三项实机任务。

## 结果与结论

作者报告在 MS-HAB 上，动作基线 pi0.5 为 32.3%，轨迹引导为 47.5%，加测试时 refinement 为 54.8%；ARX LIFT 三项实机任务平均从 63.3% 提高到 81.7% 和 90.0%。所选 GRU 世界模型的 xyz ADE 为 0.028 m，完整框架增加 49.04M 参数和 11.75 ms。结果表明轨迹接口和筛选在这套任务中互补，但候选采样与测试时世界模型增加算力，且对更复杂环境、传感器故障或更长执行时段的稳定性尚未验证。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.01381v1
- arXiv 摘要页：https://arxiv.org/abs/2608.01381v1
