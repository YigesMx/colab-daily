---
candidateId: "arxiv--2608.14024"
businessCandidateId: "arxiv--2608.14024"
date: "2026-08-18"
category: "Paper"
title: "SSP: An Event-Matched Syn2Sim2Phy Cross-Domain Evaluation Framework for Autonomous Driving VLA Models"
authors:
  - "arxiv.org"
summary: "SSP 用同一安全关键事件贯通合成视频、CARLA 仿真和封闭场地，以事件规范、迁移审计和统一语义/轨迹槽位更准确诊断驾驶 VLA 的跨域失效。"
provisionalKeywords:
  - "世界模型"
  - "安全与治理"
  - "数据与基准"
keywords:
  - "世界模型"
  - "安全与治理"
  - "数据与基准"
sources:
  - name: "arxiv.org"
    url: "https://arxiv.org/abs/2608.14024v1"
previewImage: "/daily/2026-08-18/assets/arxiv--2608.14024/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 83
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.14024 -->
# SSP: An Event-Matched Syn2Sim2Phy Cross-Domain Evaluation Framework for Autonomous Driving VLA Models

## 研究问题与贡献

既有跨域评测常独立选取合成、仿真和物理数据，导致场景难度变化与真实域偏移混杂。SSP 的贡献是事件匹配的 Syn2Sim2Phy 证据链、迁移资格审计，以及语言与轨迹联合评价。

## 方法与系统

系统先用 VLM 从合成长尾视频生成事件规范，记录道路拓扑、参与者角色、相对运动、冲突演化、通行顺序、响应约束和事件阶段；再分别构造 CARLA 与封闭场地实现，只有强制属性保持一致才纳入评测。模型输出被映射到封闭语义槽和统一 1 秒自我中心轨迹窗口，评估有效性、语义、关键交互、轨迹质量、文本-轨迹一致性和风险响应。

## 实验设置与数据

报告 Cut-in 与弱势道路使用者横穿两个案例，比较 OpenEMMA、LLaViDA、Alpamayo-R1，并在 OpenEMMA 风格接口下测试 Qwen3-VL 系列。指标以 Integrated VLA Capability Score 汇总。

## 结果、限制与结论

Physical、Simulation、Synthetic 宏观 IVCS 分别为 0.325、0.291、0.259，但 Cut-in 中 Simulation 最高，说明域效应不是单调的。Alpamayo-R1、OpenEMMA、LLaViDA 分别为 0.405、0.338、0.131；Qwen3-VL-30B-A3B 轨迹成功率 0.630、IVCS 0.398。限制是事件类型和封闭测试覆盖有限，结果依赖所用仿真协议。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.14024v1>
