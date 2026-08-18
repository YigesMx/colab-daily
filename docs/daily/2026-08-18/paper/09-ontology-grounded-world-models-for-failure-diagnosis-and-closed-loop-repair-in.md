---
candidateId: "arxiv--2608.13901"
businessCandidateId: "arxiv--2608.13901"
date: "2026-08-18"
category: "Paper"
title: "Ontology-Grounded World Models for Failure Diagnosis and Closed-Loop Repair in Physical AI Systems"
authors:
  - "arxiv.org"
summary: "Onto-EV-WM 在 EV-WM 之上加入任务本体、类型化失败诊断、修正路由和谓词门控验收，使世界模型候选质量可解释并支持闭环修复。"
provisionalKeywords:
  - "世界模型"
  - "安全与治理"
  - "具身智能"
keywords:
  - "世界模型"
  - "安全与治理"
  - "具身智能"
sources:
  - name: "arxiv.org"
    url: "https://arxiv.org/abs/2608.13901v1"
previewImage: "/daily/2026-08-18/assets/arxiv--2608.13901/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 9
groupScore: 80
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.13901 -->
# Ontology-Grounded World Models for Failure Diagnosis and Closed-Loop Repair in Physical AI Systems

## 研究问题与贡献

视觉或特征距离不等于任务成功，标量候选分数也不能说明缺失的任务谓词、可用修正机制或修正后是否可接受。论文贡献是任务局部 TBox、来源相关 grounding、确定性诊断规则与 verification-gated correction interface。

## 方法与系统

TBox 定义实体类型、谓词签名和约束；grounding 把预测或仿真状态映射为任务 ABox。确定性规则保留缺失谓词及其参数并给出修正路由，学习或启发式 proposer 与符号接口分离。任务原生谓词决定验收，有界协议决定失败验证是否重试。

## 实验设置与数据

在 PointMaze、LIBERO-Goal 与固定 10030 任务 LIBERO-Plus 注册表中评估完整配置。指标包括成功率、最终状态距离和 corrected-window success，并通过消融检查 grounding 与路由记录。

## 结果、限制与结论

PointMaze 中 EV-WM 与 Onto-EV-WM 均为 94% 成功，但平均最终距离从 0.90573 降至 0.61177，另设预算搜索达 50/50。LIBERO-Goal seed 0 为 469/500，即 93.8%，四个采样 seed 平均 94.05±0.30%；LIBERO-Plus 为 8526/10030。限制是定量修正直接应用仿真状态，未验证真实机器人恢复、held-out 泛化或本体单独因果贡献。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.13901v1>
