---
candidateId: "arxiv--2608.05042"
date: "2026-08-07"
rank: 3
title: "BridgeVLA++：统一时空记忆的三维视觉语言动作框架"
authors:
  - "Peiyan Li"
  - "Yuze Zhu"
  - "Yixiang Chen"
  - "Qisen Ma"
  - "Yuan Xu"
  - "Jiabing Yang"
  - "He Guan"
  - "Yan Huang"
  - "Hongtao Wu"
  - "Xiao Ma"
  - "Tao Kong"
  - "Liang Wang"
  - "Tieniu Tan"
summary: "BridgeVLA++ 在 2D 热图对齐的三维 VLA 基础上加入时间交互历史与持久空间几何记忆，同时覆盖数据效率、分布外泛化、记忆依赖任务和双臂实机验证。"
keywords:
  - "视觉语言动作模型"
  - "具身记忆"
  - "三维空间理解"
score: 84.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.05042v1"
previewImage: "/daily/2026-08-07/assets/arxiv--2608.05042/preview.png"
---

## 核心内容

BridgeVLA 的出发点是把三维点云投影为多视角正交图，并让预训练 VLM 预测二维平移热图，再回投为三维末端位置，从而让预训练和动作学习共享视觉定位空间。BridgeVLA++ 解决其马尔可夫限制：时间记忆保留任务阶段，空间记忆重渲染较早、遮挡较少的几何，分别回答“下一步做什么”和“准确在哪里做”。两类记忆与双臂共享主干结合，避免复制昂贵 VLM。

## 关键技术与数据

基础模型使用语言条件目标定位预训练和逐视角热图动作解码；BridgeVLA++ 从历史中选择初始、邻近及子目标关键帧。时间记忆区分视觉相近但任务阶段不同的状态；空间记忆保留先前几何并恢复被机械臂或物体遮挡的区域。训练时对当前与记忆观察统一施加刚体增强，并联合动作损失与关键帧保留分类损失。论文在 RLBench、COLOSSEUM、GemBench、RMBench、MemoryBench 以及 Franka 与 Dobot 两类实机上评估。

## 结果与结论

BridgeVLA 在 RLBench 18 任务平均成功率为 90.5%，BridgeVLA++ 达 93.7%；去掉热图解码后基础模型降至 31.4%，显示输入输出对齐是关键。RMBench 上无记忆 BridgeVLA 为 18.9%，BridgeVLA++ 为 96.0%；COLOSSEUM 为 65.2%，GemBench 为 51.1%，说明加入记忆没有明显牺牲原有分布外能力。论文还报告实机记忆任务由 20.0% 提升到 93.3%。这些结果覆盖面广，但系统依赖 RGB-D/点云投影和结构化历史关键帧，部署传感器、记忆构建及基准标注条件不能忽略。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.05042v1)
- [arXiv PDF](https://arxiv.org/pdf/2608.05042v1)
