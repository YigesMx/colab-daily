---
candidateId: "arxiv--2609.03067"
date: "2026-09-05"
category: Paper
title: "Out-of-this-World-Model：面向航天器交会与近距操作的世界模型"
authors: ["arxiv.org"]
summary: "首次把世界模型范式引入航天器交会对接（RPO）：开源 JAX 版 AstroJAX ISS 对接环境（GPU 并行生成 50 万转移训练语料），提出以单步 flow matching 预测分布的 transformer 世界模型 OWM，在 keep-out-zone 约束下与 MPPI 结合完成自主对接，训练端口成功率 53% vs RL 基线 29%，held-out 端口 40% vs 17%，且预测不确定度可用作运行时异常监测。"
keywords:
  - 世界模型
  - 空天具身智能
  - 扩散策略与生成控制
sources:
  - { "name": "arxiv.org", "url": "https://arxiv.org/abs/2609.03067v1" }
previewImage: "/daily/2026-09-05/assets/arxiv--2609.03067/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 84.0
scoreScale: "paper-v2"
emphasis: true
---
# Out-of-this-World-Model：面向航天器交会与近距操作的世界模型

**一句话结论**：这是世界模型首次系统进入空间域的工作：用 GPU 并行航天动力学仿真生成训练语料，学习一个融合图像与运动学状态、以 flow matching 预测未来的世界模型，配合 MPPI 在 ISS 对接任务上以更少样本与更强分布外泛化超越 RL 基线，属空天具身智能方向的标志性推进。

## 研究问题与贡献

航天器交会与近距操作（RPO）正从稀少的人工监督程序变为常规任务（乘员/货运飞船对接、在轨服务、燃料加注），而世界模型此前从未应用于空间域。本文三项贡献：(1) 开源 JAX 版 AstroJAX ISS 对接环境，支持轨道/姿态动力学 GPU 并行仿真，生成世界模型训练所需的数万级状态-动作转移；(2) 提出 Out-of-this-World-Model（OWM）：transformer 架构将相对运动学状态与固连相机图像编码进共享潜空间，用单步 flow matching 预测未来观测分布，天然携带逐步不确定度；(3) 把世界模型与模型预测路径积分控制（MPPI）结合，完成 keep-out-zone 约束下的胶囊舱自主对接。

## 方法与系统

问题被形式化为离散时间部分可观决策过程：智能体不直接观测状态，而是获得由运动学向量与相机图像组成的观测。仿真环境以 313 个轴对齐碰撞盒做 keep-out 检查，设 8 个对接端口（5 个训练、3 个 held-out 评估），每回合初始半径 100-225m 随机采样；提供三档传感器噪声预设（含合作/非合作目标）。OWM 训练语料为 50 万转移。与 DreamerV3 风格 posterior-correction 基线相比，OWM 参数与超参数更少而预测性能更高。

## 实验设置与数据

在 ISS 对接场景上按三种传感器噪声档位评估：预测质量（自回归 rollout 的状态/图像重建误差随视界变化）、对接性能（与 PPO 基线对比）、未见端口泛化与异常检测。异常检测用「预测不确定度」判别含未见异常的接近序列。

## 结果、限制与结论

论文报告：训练端口对接成功率 53% 对 RL 基线 29%；held-out 端口 40% 对 17%，世界模型在基线完全无法习得的端口上成功对接且从不越出运行域；同一模型的预测不确定度可作为运行时异常监测器，正确分类含未见异常的接近序列。局限：目前限于仿真（高保真但非在轨实飞），非合作目标场景依赖传感器噪声预设近似；向真实星载计算与更多 RPO 任务（在轨服务、捕获）的迁移未在本文验证。

## 来源链接

- 论文原文：https://arxiv.org/abs/2609.03067
- HTML 全文：https://arxiv.org/html/2609.03067v1
