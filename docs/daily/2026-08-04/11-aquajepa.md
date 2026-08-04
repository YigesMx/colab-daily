---
candidateId: "arxiv--2607.29393"
date: "2026-08-04"
rank: 11
title: "AquaJEPA：面向水下机器人动力学的动作条件多模态预测表示"
authors:
  - "Alan-Barsag Gazzaev"
  - "Alexey Gavrilov"
  - "Sergey Muravyov"
summary: "AquaJEPA 将 RGB、前视声纳、本体状态和传感器有效性融合到动作条件 JEPA 中，预测未来潜表示、速度变化和声纳轮廓，用统一 receding-horizon planner 在水下传感器缺失和动力学变化时选动作。"
keywords:
  - "水下机器人"
  - "世界模型"
score: 83.0
sources:
  - name: "arXiv full text"
    url: "https://arxiv.org/html/2607.29393"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29393v1"
previewImage: "/daily/2026-08-04/assets/arxiv--2607.29393/preview.png"
---

## 核心内容

水下机器人传感器可靠性会随能见度、视角和运动突然变化：相机有语义但会受衰减和散射影响，声纳保留几何回波但分辨率较低，DVL 可能失锁。AquaJEPA 不追求重建完整未来观测，而是学习与控制相关的未来表示，并让预测显式依赖候选推进器动作。

## 关键技术与数据

相机、声纳和 15 维本体状态分别编码为 64 维特征，再将三路有效性 mask 送入融合模块；GRU 编码 5 步、8 推进器命令，预测未来 EMA 目标表示，同时用 L1 头预测速度变化和 32 bin 声纳强度。损失包括 latent、速度、声纳、跨模态和 action margin 项；2 Hz planner 对同一候选动作库打分，DVL 缺失窗口固定为每回合 10-15、25-30、40-45 秒。

## 结果与结论

在 120 个配对环境中，AquaJEPA 达到 74/120 成功、平均最终误差 0.906 m；state-only 为 68/120、0.916 m，recurrent world model 为 68/120、1.012 m。相对普通多模态、监督动力学和 recurrent world model 的最终误差差异分别为 -0.273、-0.364 和 -0.106 m，区间不跨零；相对 state-only 的区间为 [-0.100,0.079]，优势未确定。作者限定结果为 Stonefish BlueROV2 的仿真证据，未声称已完成真实水下迁移。

## 来源链接

- [本次精读原文](https://arxiv.org/html/2607.29393)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29393v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29393v1)
