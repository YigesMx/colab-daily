---
candidateId: "arxiv--2608.02069"
date: "2026-08-05"
rank: 15
title: "Open-DiffLoco: Open-Source Differentiable Learning for Deployable Blind Quadruped Locomotion"
authors:
  - "Martin Opat"
summary: "Open-DiffLoco 提供基于 MuJoCo XLA 的开源可微仿真训练框架，用 SHAC 和 JAVE 训练可在 Unitree Go2 部署的盲四足运动策略。"
keywords:
  - "差分仿真"
  - "四足机器人"
score: 75
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.02069v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.02069v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.02069/preview.png"
---

## 核心内容

该论文的重点是降低一阶可微物理训练可部署四足控制的工程门槛。它主张在盲运动这一相对平滑的任务上，解析梯度能减少对复杂奖励塑形、参考轨迹和特权 actor 观测的依赖。

## 关键技术与数据

框架以 YAML 配置组织环境、算法、网络和部署模块，在 MJX 中实施 SHAC。actor 只接收部署可得的本体感觉，不含基座线速度或参考轨迹；奖励主要是速度/yaw 跟踪、高度、姿态、关节与动作正则。JAVE 在 TD-lambda critic 损失外加入 Bellman gradient 的 Jacobian 监督，并用学习到的 critic-observation 残差动力学形成梯度目标，以改善短视野一阶策略梯度的早期稳定性。真实部署使用 C++/ROS2 栈运行在 Unitree Go2。

## 结果与结论

作者报告单张 RTX 5080 下训练约 20-60 分钟、显存低于 6 GB；实机 Go2 的全向速度跟踪 RMSE 小于 0.2 m/s、速度超过 1 m/s，并展示不平地和侧向推扰恢复。文中比较 JAVE、SHAC、PPO 时特别说明不同奖励实现使绝对 reward 不可直接比较，JAVE 的优势主要出现在早期训练稳定性而非决定性的最终性能。作者还指出超过 2 m/s 的训练和鲁棒实机高速部署仍困难，接触不连续造成的一阶梯度偏差也限制方法范围。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.02069v1
- arXiv 摘要页：https://arxiv.org/abs/2608.02069v1
