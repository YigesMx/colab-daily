---
candidateId: "arxiv--2609.02134"
date: "2026-09-04"
category: Paper
title: "UMR：用学习到的点云对应统一人形机器人运动重定向"
authors: ["arxiv.org"]
summary: "UMR 摒弃人工关键点，直接学习人体与机器人表面点云的稠密对应来完成运动重定向；在 BONES-SEED 大规模策略学习与真机高动态踢腿跟踪上验证，域随机化与 Sim2Sim 下全面超越 GMR 基线。"
keywords:
  - 人形机器人
  - 数据与评测
  - 具身智能
sources:
  - { "name": "arxiv.org", "url": "https://arxiv.org/abs/2609.02134v1" }
previewImage: "/daily/2026-09-04/assets/arxiv--2609.02134/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 9
groupScore: 77.0
scoreScale: "paper-v2"
emphasis: false
---

# UMR：用学习到的点云对应统一人形机器人运动重定向

人形机器人学习依赖把海量人类运动数据转换为高质量机器人参考轨迹，但人形形态差异（自由度、关节范围、运动学约束）使重定向困难，既有方法依赖手工稀疏关键点或身体部位配对，扩展性差。

## 研究问题与贡献

问题：如何在不设计人工人体-机器人对应关系的前提下，把任意运动源高质量重定向到任意人形形态。贡献：UMR（Unified Motion Retargeting）——学习人体与机器人表面稠密点云对应关系的统一重定向框架；对运动源与形态的双侧可扩展性；以及重定向数据在 downstream 策略学习中的价值验证。

## 方法与系统

点云对应学习直接在表面点云层面建立人体-机器人稠密映射，重定向由此生成全身参考轨迹；配合优化保证运动学可行性与关节限位。下游在 SONIC 框架下用 UMR 重定向数据训练 BONES-SEED 策略。

## 实验设置与数据

三种评测设置：无域随机化仿真、域随机化仿真、Sim2Sim 部署（遵循 GMR 设置）；真机验证包括 MimicKit 来源的高动态旋转踢腿跟踪。对比基线为 GMR（手工对应）与 Unitree 官方重定向参考。

## 结果、限制与结论

论文报告：域随机化与 Sim2Sim 下 UMR 在所有运动类别上超越 GMR，与 Unitree 官方参考保持竞争力；真机高动态踢腿跟踪验证了实用性。限制：接触丰富技能（如带接触的全身动作）的重定向质量原文未深入；学习对应需要形态点云先验；极限动态运动仍可能需人工微调。结论：这是人形数据基础设施的重要一环，去人工化对应使运动数据管线可随形态库自动扩展。

## 来源链接

- 论文页：https://arxiv.org/abs/2609.02134
- HTML 全文：https://arxiv.org/html/2609.02134
