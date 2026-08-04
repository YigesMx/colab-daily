---
candidateId: "arxiv--2608.00635"
date: "2026-08-05"
rank: 3
title: "FlowPilot: Real-Time World-Action Modeling for Agile UAV Navigation"
authors:
  - "Runqing Wang"
  - "Ding Yu"
  - "Pengyuan Min"
  - "Xinhong Zhang"
  - "Wei Xiao"
  - "Yu Hu"
  - "Jie Chen"
  - "Fu Zhang"
  - "Gang Wang"
summary: "FlowPilot 是面向机载敏捷无人机导航的紧凑世界动作模型，联合学习未来深度和可跟踪的 Bernstein 轨迹，但部署时只输出轨迹。"
keywords:
  - "世界动作模型"
  - "轨迹规划"
score: 82
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.00635v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.00635v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.00635/preview.png"
---

## 核心内容

论文针对高速、障碍密集飞行中地图重建延迟与纯反应策略缺少未来场景建模的问题，提出由深度观测、状态目标、速度命令和上一条轨迹驱动的世界动作模型。重点是将未来场景训练信号转化为可由下游控制器直接跟踪的平滑参考，而非在飞行时解码视频。

## 关键技术与数据

模型以双流 Mixture-of-Transformers 连接视频专家和动作专家，通过共享注意力联合去噪未来深度与动作。动作不用独立 waypoint，而以七阶 Bernstein 曲线的五个自由控制点表示，前三个点由当前位置、速度和加速度约束，因此速度、加速度和 jerk 可解析得到。数据金字塔由 16 小时 IsaacLab 深度、8 小时 Flightmare 深度和 2 小时真实机载深度组成；训练先进行世界建模，再做世界动作对齐。

## 结果与结论

作者在 3-8 m/s、不同障碍稀疏度的闭环仿真中报告 Full FlowPilot 整体优于 action-only、EGO-Planner 和 YOPO。对同步未来深度去噪的消融中，碰撞率为 4.0%，Depth-frozen 为 26.0%；机载总推理延迟均值为 16.294 ms。实机平台在室内和森林场景中报告最高 5.5 m/s。论文承认轨迹动态可行性仍取决于下游控制器和飞行器约束，且真实数据只有 2 小时，因此不能将仿真优势直接外推为所有环境下的飞行安全保证。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.00635v1
- arXiv 摘要页：https://arxiv.org/abs/2608.00635v1
