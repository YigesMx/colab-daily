---
candidateId: "arxiv--2607.29172"
date: "2026-08-04"
rank: 1
title: "CLIFT：用非侵入式闭环迭代微调将 Gemini Robotics On-Device 变成专长人形机器人策略"
authors:
  - "Yuxin Chen"
  - "Hari Srikanth"
  - "Nathan Jew"
  - "Menglin Wu"
  - "Pengcheng Wang"
  - "Junli Ren"
  - "Masayoshi Tomizuka"
  - "Peng Xu"
  - "Jinyu Xie"
  - "Thomas Tian"
summary: "论文研究只能通过托管 SFT API 适配闭权重机器人基础模型的场景，并提出 CLIFT，将真实部署中的奖励反馈转成带优势标记的监督数据。作者在 Unitree G1 上报告：在相同示范基础上，GROD 经过两轮闭环飞轮后，箱体装配、杯子插入和双手盘子交接的成功率分别从 93% 提升到 100%、从 70% 提升到 98%、从 53% 提升到 96%。"
keywords:
  - "闭环策略优化"
  - "视觉语言动作"
  - "机器人操作"
score: 95.0
sources:
  - name: "arXiv full text"
    url: "https://arxiv.org/html/2607.29172"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29172v1"
previewImage: null
---

## 核心内容

CLIFT 针对一个现实限制：用户可以向闭权重 VLA 的托管接口提交示范，却不能访问权重、梯度、损失或动作似然。论文把部署时的滚动轨迹作为反馈来源，先用偏好校准的稠密奖励模型评分，再通过相似初始状态检索为动作块分配正负优势标记，最后把带标记的轨迹块与原示范一起提交 SFT API。这样既保留了 API 的非侵入边界，也让模型从自身部署分布中的部分成功和失败中继续改进。

## 关键技术与数据

系统由偏好校准的稠密奖励模型、基于检索的优势标注和迭代 SFT 三部分组成。奖励模型从 100 组人工成对偏好与 VLM 候选奖励中选择并蒸馏得到；每个动作块与视觉相似状态下的对照块比较，处于对照集合前 30% 的块标为 positive，其余为 negative。实验使用 Unitree G1、双臂和灵巧手、两台头部 RGB 相机、1.6 秒动作块，以及每个任务每轮 100 次部署滚动；每个任务收集 2 小时 VR 遥操作数据。

## 结果与结论

作者报告，GROD 的稠密优势版本在两轮后达到箱体装配 100%、杯子插入 98%、双手盘子交接 96%；同一流程使开放权重 π0.5 分别从 59% 到 76%、从 50% 到 56%、从 5% 到 30%。论文还观察到箱体重定向和插入失败后重试等示范中没有出现的行为。限制是每轮需要昂贵且有安全风险的真实人形机器人滚动，且只比较了一个开放权重模型。这里的归纳仅复述原文实验范围，不将近乎完美推广到其他平台。

## 来源链接

- [本次精读原文](https://arxiv.org/html/2607.29172)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29172v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29172v1)
