---
candidateId: "arxiv--2608.05975"
category: "Paper"
date: "2026-08-08"
rank: 7
title: "TRACE: Learned Proprioceptive Odometry for Legged Robots under Unreliable Contact Conditions"
authors:
  - "Taehyeon Kong"
  - "Woojin Kim"
  - "Jemin Hwangbo"
summary: "TRACE 是一个端到端四足机器人本体里程计，直接从 IMU 与关节历史预测相对位移、相对旋转和机体坐标系速度。脚部感知交叉注意力把腿部 token 作为软可靠性信号，结合运动学一致性和接触点速度损失抑制滑移、滚动和软地形造成的不可靠接触，并通过策略随机化和部分真实数据微调改善 sim-to-real。"
keywords:
  - "足端接触里程计"
  - "在线自适应优化"
score: 88.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.05975"
previewImage: "/daily/2026-08-08/assets/arxiv--2608.05975/preview.png"
---

## 核心内容

TRACE 关注外部视觉、激光或 GPS 不可用时的腿式机器人状态估计。接触辅助 IEKF 通常假设支撑脚相对地面速度为零，但滑移、冲击、可变形地形和脚部滚动会破坏这个假设；纯学习方法又可能缺少物理约束并过拟合单一仿真策略。论文把四足本体里程计直接表述为从最近一段 IMU 和关节观测预测相对运动与机体速度的学习问题，不依赖滤波后端，也不要求手工设置接触或滑移阈值。

核心设计是用历史运动编码器产生查询向量，让它对当前 IMU token 和四条腿 token 做交叉注意力。注意力可以根据当前运动状态下调不可靠腿的信息。训练目标除了直接估计误差，还加入预测位移与速度积分结果之间的运动学一致性损失，以及按腿注意力加权的接触点速度损失，从而把注意力塑造成一种可学习的接触可靠性指标。

## 关键技术与数据

- 输入输出：时间窗 `T=30`，每步 47 维观测包含角速度、线加速度、12 维关节位置、关节速度、目标力矩、上一时刻姿态/水平速度估计和采样间隔；输出为 9 维相对位移、李代数相对旋转和机体坐标系速度（`main.tex`，Estimator Input and Output，约 70-139 行）。
- 网络：时序 CNN 生成 64 维查询，当前观测形成加速度、陀螺仪和四个腿 token；两头交叉注意力后接隐藏维度 128 的 GRU 和 `[256,128]` MLP。部署时还使用类似 ZUPT 的静止输出归零（`main.tex`，Network Architecture，约 141-172 行）。
- 损失与训练：Smooth L1 直接估计损失、速度积分位移的模型一致性损失和接触点速度损失组成总目标。仿真使用 RaiSim、400 个并行环境、4 秒 rollout，策略/估计器/仿真频率分别为 100/500/4000 Hz；训练 3000 次更新，学习率 `3e-4`，约 20 小时、RTX 4060（`main.tex`，Training Losses、Simulation Training，约 174-295 行）。
- sim-to-real 与评估：策略随机化包括动作尺度、动作均值和低通系数；真实微调使用 6 条各 150 秒的 FAST-LIO2 日志，草地和硬地各 3 条，仅更新 GRU 与 MLP，使用 1 秒相对误差。Raibo2 评估覆盖 flat、rough、slippery、soft、grass、hard ground、stairs 和 full course，指标是位置/速度/姿态 ATE 与 10 秒 RE（`main.tex`，约 297-348 行）。

## 结果与结论

作者报告 TRACE 在四类室内地形上均取得最低位置 ATE。相较每种地形的最强基线，位置 ATE 降幅分别为 flat 50.7%、rough 39.2%、slippery 44.1%、soft 53.8%；10 秒位置 RE 降幅分别为 30.0%、50.9%、39.9%、26.4%。室外 grass、hard ground、stairs 的位置 ATE 分别为 0.4831、0.1796、0.1629 m，full course 为 0.7328 m；full course 的平均 10 秒位置 RE 为 0.2078 m，P90 为 0.3637 m。

注意力分析使用 2,000,000 个每腿样本，其中接触 1,129,612、摆动 870,388；接触腿平均注意力 0.2106，摆动腿 0.0060，最高注意力落在接触腿的比例为 96.21%，接触标签与注意力 AUC 为 0.9637。消融表明模型一致性损失、脚速度损失、策略随机化和部分微调各自有贡献；但真实微调是在草地和硬地采集，不能据此推断对所有平台和接触动力学都泛化。作者未来计划加入 IMU 偏置与不确定性预测，并扩展到人形机器人。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.05975)
- [arXiv TeX 源码](https://arxiv.org/e-print/2608.05975)
