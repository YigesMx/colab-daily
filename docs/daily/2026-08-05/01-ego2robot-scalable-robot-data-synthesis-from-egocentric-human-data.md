---
candidateId: "arxiv--2608.02580"
date: "2026-08-05"
rank: 1
title: "Ego2Robot: Scalable Robot Data Synthesis from Egocentric Human Data"
authors:
  - "Ye Wang"
  - "Pei Lin"
  - "Xiong-Hui Chen"
  - "Haoqi Yuan"
  - "Zhixuan Liang"
  - "Yiyang Huang"
  - "Anzhe Chen"
  - "Zixing Lei"
  - "Jie Zhang"
  - "Tao Zhang"
  - "Haoyang Li"
  - "Tong Zhang"
  - "Chenxi Xiao"
  - "Ziyuan Jiao"
  - "Qin Jin"
summary: "Ego2Robot 将第一视角人类操作视频转换为多机器人形态的训练数据，并以解耦扰动评估检验其对 VLA 分布外泛化的贡献。"
keywords:
  - "具身数据合成"
  - "机器人泛化"
  - "视觉语言动作模型"
score: 83
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.02580v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.02580v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.02580/preview.png"
---

## 核心内容

论文把人类第一视角操作视频作为机器人数据扩展来源，针对人手与机器人形态之间的差异构建动作对齐、视觉对齐和质量筛选流程。其目标不是直接用人类视频替代机器人数据，而是在 VLA 预训练中与真实机器人数据联合使用，并分别观察视觉、场景、形态和任务语义变化下的表现。

## 关键技术与数据

动作侧从手部关键点构造平行夹爪末端轨迹，使用平滑和按来源的帧率下采样处理速度差；视觉侧依次进行手臂分割、去手修补、按形态搜索机器人基座、逆运动学和深度感知合成。论文对轨迹、帧和片段做三级质量筛选，并用 Qwen3.5 对长视频分段。输入覆盖 ANT、EgoDex、ViTRA、EgoVerse 约 1,940 小时，生成覆盖 15 种形态的 18,561 小时数据；评测在扩展 RoboTwin2.0 与 EBench 上进行。

## 结果与结论

作者报告 1:1 的 Ego2Robot 与机器人数据混合在 RoboTwin 随机化设置为 53.5%，较 robot-only 的 50.9% 高 2.6 点，并在视觉、形态和任务语义扰动中出现较大增益；3:1 配比在 EBench 达到 51.7%，较 robot-only 高 12.1 点。五项 ARX ACone 实机任务也报告混合预训练与额外 ego-play 数据的改善。论文同时明确，当前手部重定向只覆盖平行夹爪，视觉修补与深度合成可能引入伪影，且评测任务仍受 RoboTwin2.0 范围限制。保守地看，这是关于规模化数据转换与特定基准泛化的证据，而不是对所有手型或开放环境的普遍保证。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.02580v1
- arXiv 摘要页：https://arxiv.org/abs/2608.02580v1
