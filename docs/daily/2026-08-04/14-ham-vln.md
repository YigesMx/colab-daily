---
candidateId: "arxiv--2607.29600"
date: "2026-08-04"
rank: 14
title: "HAM-VLN：用分层智能体记忆实现零样本视觉语言导航"
authors:
  - "An Liu"
  - "Bingxi Liu"
  - "Hongyu Ding"
  - "Yixuan Jiang"
  - "Yaran Chen"
  - "Fulin Tang"
  - "Cong Leng"
  - "Hong Zhang"
  - "Jian Cheng"
summary: "HAM-VLN 在每个导航决策中同步写入语义、进度和失败信息，把近期帧保留为 working memory，把更早经历放入有深度定位的世界图并按子目标检索，从而在零训练 VLN 中控制上下文增长。"
keywords:
  - "智能体记忆与导航"
  - "视觉语言动作"
score: 81.0
sources:
  - name: "arXiv full text"
    url: "https://arxiv.org/html/2607.29600"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29600v1"
previewImage: "/daily/2026-08-04/assets/arxiv--2607.29600/preview.png"
---

## 核心内容

长程零样本导航既需要知道走过哪里、任务进展如何，也需要记住失败分支。HAM-VLN 让做决定的 MLLM 同时完成记忆写入，使用最近 K 个 waypoint 的原始帧、指令进度记录和子目标条件的图切片组成后续上下文，并将失败证据绑定到可回溯地点。

## 关键技术与数据

双过程架构由 System 2 的慢速 MLLM 选择方向、回退或停止，System 1 的快速 MLLM 将目标描述 grounding 到像素，再由深度、位姿和局部规划器执行。世界图包括 place/object 节点、place-place 拓扑和 place-object 关系；检索按相关性、递归新近度和显著性排序，选 3 个 seed 扩展一跳，最终最多保留 5 个地点。R2R-CE、RxR-CE 和 HM3D-v2 ObjectNav 使用 K=1，三次独立运行。

## 结果与结论

R2R-CE 上 HAM-VLN 达到 NE 3.92 m、OSR 78.7%、SR 61.0%、SPL 48.1%，RxR-CE SR 52.7%、SPL 35.7%、nDTW 54.3%；HM3D-v2 ObjectNav SR 79.7%、SPL 43.2%。R2R-CE 中相对完整 raw history，系统 2 token 减少 69.0%，每 episode API token 减少 67.2%；去掉世界图后 SR 从 61.0 降至 51.7。实验使用闭源/外部 MLLM 配置，结果不能直接等同于通用本地模型能力。

## 来源链接

- [本次精读原文](https://arxiv.org/html/2607.29600)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29600v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29600v1)
