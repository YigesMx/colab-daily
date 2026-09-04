---
candidateId: "arxiv--2609.03889"
date: "2026-09-05"
category: Paper
title: "FWBC-VLA：无传感器力感知桥接 VLA 动作与全身补偿控制"
authors: ["arxiv.org"]
summary: "针对轮腿机器人接触密集 loco-manipulation，提出 HSR-Force 无传感器残差力矩估计器：用固定残差门融合历史与当前状态，把残差力矩总结为接触描述子并投影为末端/机体载荷代理；接触估计以 token 注入 VLA 动作专家解码，同时驱动全身补偿 sidecar，形成任务动作与机体稳定双反馈环；发布 5,000+ episode 的 WL&Arm 数据集（含力意图遥操作标注），真机实验显示交互反馈与全身补偿一致优于基线。"
keywords:
  - VLA 与机器人操作
  - 具身数据与基础设施
sources:
  - { "name": "arxiv.org", "url": "https://arxiv.org/abs/2609.03889v1" }
previewImage: "/daily/2026-09-05/assets/arxiv--2609.03889/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 6
groupScore: 81.0
scoreScale: "paper-v2"
emphasis: false
---
# FWBC-VLA：无传感器力感知桥接 VLA 动作与全身补偿控制

**一句话结论**：FWBC-VLA 不加装力传感器，用本体感知的残差力矩估计「感知接触」，让 VLA 动作生成与全身补偿控制第一次共享同一个物理交互表征，在轮腿平台真机任务上稳定超越既有范式。

## 研究问题与贡献

接触密集 loco-manipulation 需要「语义动作生成」与「物理交互控制」之间的桥梁：现有 VLA 生成任务级动作但读不懂动作引发的物理交互；全身控制（WBC）能稳定机体却无法区分任务相关交互力与外部扰动；加装力/力矩传感器又有硬件成本与集成代价。本文贡献：(1) HSR-Force——无传感器残差力矩估计器，推断接触强度及其时间变化；(2) 把接触估计编码为 token 注入 VLA 动作专家解码过程，同时为 WBC 提供任务相关的机体补偿信号，构成双反馈环；(3) WL&Arm 数据集——面向轮腿 loco-manipulation 的接触感知数据集（5,000+ episode），用混合位置-力遥操作采集并记录操作员的力意图。

## 方法与系统

框架三部分：传感器less交互估计、交互条件化 VLA 动作生成、全身补偿。HSR-Force 以固定残差门融合历史头与状态头，把残差力矩总结为接触描述子，再投影为末端系与机体系的载荷代理；两路消费者分别为 VLA（动作专家解码时注入接触 token）与补偿 sidecar（任务相关的基座修正），下游 WBC 继续负责平衡与低层跟踪。数据采集用 Pico 混合遥操作：操作员指定切向/法向末端力指令，作为接触前馈并记录为力意图标签，缓解「只记录运动不记录力意图」的问题。

## 实验设置与数据

真机评估覆盖多类接触密集任务，回答四个问题：HSRForce 估计精度（对 NEXT、GMO-SI 等基线）、状态/历史头及固定门融合的消融、真机 loco-manipulation 表现与力感知控制的收益、各组件贡献。WL&Arm 数据覆盖轮腿四足平台的接触操作行为。

## 结果、限制与结论

论文报告：显式交互反馈与全身补偿相对基线一致提升真机接触密集任务表现；HSR-Force 在无 F/T 传感器条件下估计精度优于学习与观测器基线。局限（作者自述）：力估计精度对任务性能的影响机制仍需深入研究；更广的接触感知感知与扩展是后续工作。

## 来源链接

- 论文原文：https://arxiv.org/abs/2609.03889
- HTML 全文：https://arxiv.org/html/2609.03889v1
