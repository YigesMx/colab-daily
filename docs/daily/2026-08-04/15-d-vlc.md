---
candidateId: "arxiv--2607.29009"
category: "Paper"
date: "2026-08-04"
rank: 15
title: "D-VLC：未知环境中异构具身多机器人系统的去中心化视觉语言协作"
authors:
  - "Yuan Zhou"
  - "Ruitong Lin"
  - "Shen Wang"
  - "Weiqi Gai"
  - "Mo zhu"
  - "Xin Zhou"
  - "Yuze Wu"
  - "Fei Gao"
summary: "D-VLC 用去中心化、异步的 VLM 感知-推理-动作循环协调两台无人机和一个移动操作机器人，在未知环境中用轻量 mini-map、能力条件推理和统一动作接口完成搜索、导航和操作。"
keywords:
  - "多机器人协作"
  - "视觉语言动作"
score: 81.0
sources:
  - name: "arXiv full text"
    url: "https://export.arxiv.org/e-print/2607.29009"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29009v1"
previewImage: "/daily/2026-08-04/assets/arxiv--2607.29009/preview.png"
---

## 核心内容

传统异构多机器人系统往往依赖预定义任务、已知地图和中心化同步决策。D-VLC 将复杂指令先按机器人能力分解，再让每台机器人独立执行并异步交换结构化任务状态、地图元素、候选目标和协助请求；高层 VLM 决定机器人特定动作，学习无关的专家负责运动与操作。

## 关键技术与数据

每个机器人维护固定大小 640×480 mini-map，融合自由空间、障碍、房间语义、机器人位置和探索候选；通信不传原始全景或完整点云，而传结构化摘要。系统区分 explore、execute、request 三种模式，使用 capability check、几何和语义候选、LiDAR/深度 grounding、A*、EGO Planner 和 TopAY 等学习无关模块。实验在 Unity+ROS1 中用两台 UAV 和一个 mobile manipulator，覆盖废墟 survivor search、家庭 clock/garage search、医院 toilet search，三类任务场景各 30 次。

## 结果与结论

在三组 task-scene pairs 的 30 次试验表中，几何贪心 SR 为 66.7%；5 个 VLM backbone 的 SR 为 76.7%-90.0%，Claude-Opus-4-8 最高 90.0%，GPT-5.4-Mini 完成时间 166.8 s、相对贪心减少 55.8%，总步数减少 51.3%。这些是受控模拟结果；作者在结论中把物理机器人、更大团队、通信约束和端侧模型列为未来工作，因此不能写成真实部署验证。

## 来源链接

- [本次精读原文](https://export.arxiv.org/e-print/2607.29009)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29009v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29009v1)
