---
candidateId: "arxiv--2608.01834"
date: "2026-08-05"
rank: 13
title: "Teleopit: A Full-Embodiment Humanoid Teleoperation System"
authors:
  - "Bingqian Wu"
  - "Zicheng Xu"
  - "Xianghui Fan"
  - "Dayu Li"
  - "Xiangru Huang"
summary: "Teleopit 用 VR 同步驱动人形全身、连续灵巧手和主动视角控制，并将收集的演示用于人形机器人策略训练。"
keywords:
  - "人形机器人遥操作"
  - "具身数据合成"
score: 76
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.01834v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.01834v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.01834/preview.png"
---

## 核心内容

Teleopit 试图避免现有全身遥操作在手部、移动和平视控制之间的取舍。PICO 提供身体骨架、双手关键点与头部姿态；运行时分别把它们映射到动态可行的身体控制、跨手型优化重定向和二自由度相机控制。

## 关键技术与数据

全身 tracker 在 mjlab 中以 PPO 学习，actor 将当前状态和过去 10 帧经一维卷积获得的 history 编码结合；训练通过 failure-aware rewind 反复采样失败前的困难片段。手部重定向以归一化手指方向、指尖闭合距离、拇指 frame 对齐和时间平滑为统一目标，使用 SLSQP 和解析运动学梯度，不为每种手型调目标权重。异步系统以 60 Hz 处理 VR、手和视角控制，身体策略 50 Hz、底层身体控制 200 Hz、记录 30 Hz。

## 结果与结论

作者在运动捕捉和 PICO 验证、手型重定向和实机遥操作中报告完整系统结果；用 Teleopit 采集的 96 条成功演示训练，ACT 与 GR00T N1.7 在 bottle-placement 上分别达到 90.0% 和 95.0%。论文展示其对身体、手和视角的集成，但训练 tracker 依赖仿真随机化、指定 Unitree G1 和语义 link 映射；96 条演示和单任务策略结果不足以证明跨平台、长时遥操作或安全性已经解决。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.01834v1
- arXiv 摘要页：https://arxiv.org/abs/2608.01834v1
