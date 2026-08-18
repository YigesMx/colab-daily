---
candidateId: "arxiv--2608.14028"
businessCandidateId: "arxiv--2608.14028"
date: "2026-08-18"
category: "Paper"
title: "AdvDex: Learning Dexterous Manipulation from Human Demonstrations via Joint-Aligned Actions and Adversarial Learning"
authors:
  - "arxiv.org"
summary: "AdvDex 用 OmniShare 人类演示、Joint-Aligned Action Space 和域对抗学习，把人类手部技能迁移到不同灵巧手与平行夹爪。"
provisionalKeywords:
  - "灵巧操作"
  - "机器人学习"
  - "具身智能"
keywords:
  - "灵巧操作"
  - "机器人学习"
  - "具身智能"
sources:
  - name: "arxiv.org"
    url: "https://arxiv.org/abs/2608.14028v1"
previewImage: "/daily/2026-08-18/assets/arxiv--2608.14028/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 5
groupScore: 83
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.14028 -->
# AdvDex: Learning Dexterous Manipulation from Human Demonstrations via Joint-Aligned Actions and Adversarial Learning

## 研究问题与贡献

灵巧操作数据受机器人硬件差异、动作空间不一致和视觉本体捷径限制。论文贡献是超过 10 万条人类演示的 OmniShare、统一 SE(3) 腕部位姿与 15 个手指关节的 JAAS，以及用梯度反转层抑制本体特定视觉特征的域对抗训练。

## 方法与系统

OmniShare 覆盖 500 多个任务、700 多个物体，并用微秒级同步传感器提供运动、触觉等多模态监督。JAAS 在 51 自由度 MANO、19 自由度灵巧手和 7 自由度机械臂加平行夹爪之间建立功能对应。VLM-DiT 主干与 GRL 共同训练，减少人类/机器人外观差异带来的 shortcut。

## 实验设置与数据

评估包含手部动作预测、五个已见真实操作任务、只在人类数据中出现的新技能零样本迁移，以及 5/20 条目标演示的少样本适应。基线为 π0.5 与 VITRA，协议控制动作表示和训练步数。

## 结果、限制与结论

已见任务中 AdvDex 在抓取、倒水、推块和叠瓶等任务上持平或领先；未见物体和环境的成功率分别为 50% 与 60%，高于 π0.5 的 35%/45% 和 VITRA 的 40%/35%。人类独有技能迁移中，Box Doll、Press Button、Move Bottle、Tool Use 分别为 60%、70%、45%、30%，整体高于基线。限制是物理验证集中于单个灵巧手平台，动作空间未显式建模动力学和接触约束。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.14028v1>
