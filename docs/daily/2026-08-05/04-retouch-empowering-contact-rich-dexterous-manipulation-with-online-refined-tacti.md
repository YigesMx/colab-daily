---
candidateId: "arxiv--2608.01824"
category: "Paper"
date: "2026-08-05"
rank: 4
title: "ReTouch: Empowering Contact-Rich Dexterous Manipulation with Online-Refined Tactile Prediction"
authors:
  - "Shiqi Zhang"
  - "Xin Zhang"
  - "Yedong Shen"
  - "Jiajun Deng"
  - "Yuxuan Gao"
  - "Sha Zhang"
  - "Yuan Zhang"
  - "Kaixue Long"
  - "Jiajia Wu"
  - "Jia Pan"
  - "Yao Li"
  - "Yanyong Zhang"
summary: "ReTouch 用结构化手指触觉 patch 表示和在线更新的未来触觉预测，增强接触丰富灵巧操作中的动作修正。"
keywords:
  - "触觉操作"
  - "视觉语言动作模型"
  - "动态操作"
score: 81
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.01824v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.01824v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.01824/preview.png"
---

## 核心内容

ReTouch 的出发点是视觉无法稳定暴露多指接触位置、滑移与力变化，且一次性预测的未来触觉状态会在动作块执行中变旧。框架把低频视觉语言语义和高频触觉预测分开：前者缓存上下文，后者随新触觉反馈更新未来触觉潜变量和未执行动作。

## 关键技术与数据

Tactile-Patch Encoder 将每根手指的 120 个三维力 taxel 按指尖、中心、根部、左右五个功能区聚合，并加上手指与位置编码。训练时 Hindsight Action Expert 使用未来真实触觉构造动作相关目标，Foresight Action Expert 在可部署路径上从当前上下文预测目标；运行时 FAE 以 36 Hz 迭代更新，VLM 以 9 Hz 刷新语义。XHT-Dataset 包含 XHand-UR7e 上七个接触丰富任务的 900 条演示。

## 结果与结论

作者在七项实机任务上报告 ReTouch 宏平均 83.6%，相对最强单一基线 Tactile-VLA 的 65.2% 高 18.4 点；扰动设置平均为 73.1%，而 Tactile-VLA 为 35.0%。触觉在线更新相对 one-shot 变体将动作误差降低 2.139%。论文也显示 Cabinet Retrieval 上 ViTacFormer 为 67.5%，高于 ReTouch 的 62.5%，说明优势并不覆盖所有任务；结果采用每任务 20 次实机 rollout，仍需要更广手型、对象和传感器条件的复核。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.01824v1
- arXiv 摘要页：https://arxiv.org/abs/2608.01824v1
