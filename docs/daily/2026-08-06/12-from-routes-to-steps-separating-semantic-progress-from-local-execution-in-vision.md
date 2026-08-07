---
candidateId: "arxiv--2608.03143"
category: "Paper"
date: "2026-08-06"
rank: 12
title: "From Routes to Steps: Separating Semantic Progress from Local Execution in Vision-and-Language Navigation"
authors:
  - "Xiangyun Huang"
  - "Xiangchen Wang"
  - "Runfeng Lin"
  - "Yihao Xu"
  - "Kangyu Huang"
  - "Jiang Hengchen"
  - "Xiwang Dong"
  - "Lin Jiarong"
summary: "Route2Step 将视觉语言导航中的路线级进度判断与局部动作执行分开，并用无人工时间标注的步骤对齐训练两者。"
keywords:
  - "任务规划"
  - "视觉语言动作模型"
score: 75
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.03143v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.03143v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.03143/preview-main.png"
---

## 核心内容

现有 VLM 导航器常用下一动作同时承担“当前应该执行哪一步”和“如何执行这一步”，因此偏航后可能继续从错误进度状态决策。Route2Step 显式维护 step-level interface，让语义进度错误和局部执行错误可以分开诊断和纠正。

## 关键技术与数据

Instruction Analysis Module 根据全局指令和视觉历史预测当前子指令，Action Generation Module 基于该状态和近期观察生成动作块。E-SPA 从路线级演示中自动对齐子指令与时间片；只有在正确进度状态下反复失败的 rollout 才使用直接动作监督。实验覆盖 R2R-CE 和真实室内、室外环境。

## 结果与结论

作者报告 R2R-CE 的 SR 从 48.1% 提升到 55.3%，SPL 从 43.3% 提升到 48.2%，使用 190K 状态纠正样本和 11.5K 直接动作监督状态；真实环境实验支持实际可用性。结果支持显式进度状态的价值，但导航场景和数据集范围有限，复杂三维户外长期记忆和机器人本体差异仍需更多验证。

## 来源链接

- https://arxiv.org/pdf/2608.03143v1
- https://arxiv.org/abs/2608.03143v1
