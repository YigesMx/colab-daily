---
candidateId: "arxiv--2608.03701"
date: "2026-08-06"
rank: 1
title: "LiLa-WAM: Lightweight Latent Reasoning World-Action Model for Robotic Manipulation"
authors:
  - "Fan Yang"
  - "Yuting Su"
  - "Xiaobo Wang"
  - "Yuncheng You"
  - "Fugui Fan"
  - "Yuting Wu"
  - "Minghui Wu"
  - "Chenxu Zhao"
  - "JiaHong Ning"
  - "Peiguang Jing"
summary: "LiLa-WAM 将未来状态预测与动作生成置于紧凑潜空间中，用视觉过渡 token 指定任务，并在单张 24GB GPU 上完成端到端训练。"
keywords:
  - "世界动作模型"
  - "机器人操作"
  - "轻量化训练"
score: 83
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.03701v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.03701v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.03701/preview.png"
---

## 核心内容

论文针对世界动作模型训练和推理成本高、像素空间预测包含大量控制无关细节的问题，提出 LiLa-WAM。模型不依赖语言指令，而是从视觉特征中构造任务方向，同时预测未来状态并生成动作，使世界建模目标直接服务于机械臂控制。

## 关键技术与数据

模型使用紧凑视觉骨干和 latent reasoning space，未来状态预测与动作生成共同塑造该空间；Visual Transition Token 将任务表示为视觉特征空间中的方向。作者在 RoboTwin 2.0、LIBERO 和真实机器人任务上评估，并强调单张 24GB GPU 的训练约束。

## 结果与结论

作者报告 RoboTwin 2.0 的 50 个任务平均成功率为 90.48%，并在 LIBERO 与实机任务中验证效果。结论支持将未来状态预测放在动作相关潜空间中可以降低 WAM 训练门槛；但论文的主要证据仍来自指定基准和任务，视觉任务 token 对更复杂语言条件任务的适用性尚未由这些实验充分证明。

## 来源链接

- https://arxiv.org/pdf/2608.03701v1
- https://arxiv.org/abs/2608.03701v1
