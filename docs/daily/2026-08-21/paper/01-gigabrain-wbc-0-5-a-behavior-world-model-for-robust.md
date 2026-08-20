---
candidateId: "paper--arxiv--2608.18234"
businessCandidateId: "paper--arxiv--2608.18234"
date: "2026-08-21"
category: "Paper"
title: "GigaBrain-WBC-0.5: A Behavior World Model for Robust Whole-Body Control with Environment Interaction"
authors: ["arxiv.org"]
summary: "论文提出首个用于人形机器人全身控制的行为世界模型，把动作、状态与环境约束联合建模，并显著提升地形交互、异常指令与跌倒恢复表现。"
provisionalKeywords: ["具身智能", "世界模型", "机器人操作", "机器人数据"]
keywords: ["具身智能", "世界模型", "机器人操作", "机器人数据"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.18234v1"}]
previewImage: "/daily/2026-08-21/assets/paper--arxiv--2608.18234/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 89
scoreScale: "paper-v2"
emphasis: true
---
# GigaBrain-WBC-0.5: A Behavior World Model for Robotic Whole-Body Control with Environment Interaction

## 研究问题与贡献

论文研究人形机器人全身运动跟踪在非空场景中的失效问题：既有策略往往在平坦地面训练，难以处理地形、物体接触、不可行指令和扰动。作者提出 GigaBrain-WBC-0.5，将全身控制从被动跟踪参考动作扩展为同时预测下一动作、下一状态和潜在行为命令分布的行为世界模型。核心贡献是行为世界模型、自动三维接触地形标注管线，以及部署期对不可行命令的在线回收机制。

## 方法与系统

系统使用因果 Transformer 联合建模动作、状态和潜在行为命令，使执行策略同时学习环境如何改变可行行为。自动地形标注从重定向动作恢复三维接触几何，把大规模人体动作数据转成可用于全身控制的环境监督。部署时，模型利用预测的潜在行为命令分布识别不合理指令，并将其回收到已学到的可行行为上，从而以尽力执行的方式维持平衡和安全。

## 实验设置与数据

论文在标准地形、外域地形、异常命令和跌倒恢复四个场景中比较三个大规模 tracker 基线，并报告硬件实验。数据侧利用重定向人体动作语料生成地形与接触标注；硬件部分覆盖 Unitree G1，并测试向 Maker L01 的微调迁移。实验同时检查动作误差、根速度或位置误差、成功率和恢复成功率。

## 结果、限制与结论

论文报告 GigaBrain-WBC-0.5 在四个 regime 中均取得最高成功率：地形交互 81.3%，约为最强基线 4.3 倍；异常命令成功率 83.1%；跌倒恢复 99.3%，约为最强基线 16.8 倍。硬件试验显示其在支撑缺失和扰动下仍能交互执行，G1 checkpoint 可经简单微调迁移到 Maker L01。限制在于评测集中在论文定义的 tracker 场景，真实任务级成功率、长期部署和更复杂接触仍需外部验证。整体看，该工作把世界模型引入低层全身控制，为具身基础模型落地提供了直接可用的控制接口。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.18234)
- [官方 PDF](https://arxiv.org/pdf/2608.18234)

![preview](/daily/2026-08-21/assets/paper--arxiv--2608.18234/preview.png)
