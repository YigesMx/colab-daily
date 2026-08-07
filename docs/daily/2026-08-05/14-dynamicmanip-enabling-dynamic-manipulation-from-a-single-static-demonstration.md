---
candidateId: "arxiv--2608.01452"
category: "Paper"
date: "2026-08-05"
rank: 14
title: "DynamicManip: Enabling Dynamic Manipulation from a Single Static Demonstration"
authors:
  - "Haoran Liao"
  - "Pengyue Wang"
  - "Shuoyu Chen"
  - "Kehan Cheng"
  - "Xuhang Chen"
  - "Yuhao Lin"
  - "Mu Lin"
  - "Zhizhao Liang"
  - "Xiaoyi Fan"
  - "Chengyi Xing"
  - "Dan Niu"
  - "Yi-Lin Wei"
  - "Wei-Shi Zheng"
summary: "DynamicManip 从单条静态演示编辑出动态操作数据，并用预测的交互阶段调节扩散策略的计算与动作块执行以降低响应延迟。"
keywords:
  - "动态操作"
  - "具身数据合成"
  - "动作分块"
score: 75
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.01452v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.01452v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.01452/preview.png"
---

## 核心内容

论文将动态操作的数据瓶颈和低延迟执行放在同一框架：先保存静态演示中的局部接触模式，再变化物体运动、空间位置和阶段锚点来生成动态 episode；部署时不固定地使用同一种扩散推理配置。

## 关键技术与数据

数据管线先用 CAD/点云对齐和 URDF 前向运动学构造可编辑场景，再以 start、grasp、interact、recover 等稀疏 keyframe 拆分源轨迹。它组合静态获取、动态目标对齐、局部接触 replay 与姿态条件转场四类操作，自动得到每步 stage label。共享编码器上的分类头预测四类阶段；调度器据此选择 Taylor-accelerated DDIM 的计算间隔、阶数和执行动作数，在快运动阶段保持短块与频繁反馈。DynamicManip Benchmark 基于 RoboTwin2.0，包含五类动态任务和延迟感知评测。

## 结果与结论

作者报告从一条静态实机演示生成 200 episode 后，在四项实机任务上分别为 87.8%、73.3%、66.7%、83.3%，高于表中 50 条人工动态演示训练的对应结果。与 DP3 的延迟感知仿真比较中，平均 policy-query latency 降 32.9%，平均成功提升 18.4 点；例如 Goal Blocking 为 88% 对 42%。论文的 stage 调度依赖任务启发式和自动标签，且数据生成需对象几何、规划及特定任务规则，因此对无 CAD、强视觉遮挡或非结构化动态场景的可迁移性仍未证明。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.01452v1
- arXiv 摘要页：https://arxiv.org/abs/2608.01452v1
