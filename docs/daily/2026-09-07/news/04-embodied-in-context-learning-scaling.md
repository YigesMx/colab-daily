---
candidateId: "url--https%3A%2F%2Fwww.qbitai.com%2F2026%2F09%2F484897.html"
date: "2026-09-07"
category: News
title: "具身智能的 In-Context Learning 赛道：Skild S1、GEN-1.5 与新创业玩家"
authors: ["www.qbitai.com"]
summary: "上下文正在成为具身智能新的 Scaling 维度：Skild AI 8 月发布的机器人基础模型 S1 只看一遍演示视频即可尝试未训练过的新任务（任务可达 10 分钟、几十个操作步，未见任务加视频上下文较纯语言提示提升约 7 倍）；Generalist GEN-1.5 把 one-shot 学习数秒级新任务作为核心能力；7 月的 RoboTTT 首次系统化机器人长上下文策略。量子位并深度对谈了把 ICL 前置到预训练的国内创业公司可可矩阵：其「条件表征 + 强理解轻生成」路线称 60M 动作头超过 1.1B 对照，简单抓取 one-shot 完成率 80% 以上。"
keywords:
  - 具身智能产业动态
  - VLA 与机器人操作
sources:
  - { "name": "www.qbitai.com", "url": "https://www.qbitai.com/2026/09/484897.html" }
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 4
groupScore: 73.0
scoreScale: "news-v3"
emphasis: false
---
# 具身智能的 In-Context Learning 赛道：Skild S1、GEN-1.5 与新创业玩家

## 事件概述

GPT-3 在 2020 年验证过的 In-Context Learning（ICL，不给参数更新、只看示例就会新任务）正在具身智能领域复演，并成为「上下文 Scaling」新赛道：8 月中旬 Skild AI 发布机器人基础模型 S1；一周前 Generalist AI 发布 GEN-1.5；7 月 16 日李飞飞、Jim Fan、Yuke Zhu 等的 RoboTTT 首次系统化机器人长上下文策略。量子位 9 月 6 日发表赛道综述与可可矩阵（COCO Matrix）创始人高宇翔的深度对谈。

## 已确认事实与证据

- Skild AI S1（8 月中旬发布）：给机器人看一遍任务演示视频，即可在不微调、不做额外 post-training 的情况下尝试此前未训练过的新任务；任务时长可达 10 分钟、包含几十个操作步骤。Skild 对比了 ICL 视频 prompt 与传统语言 prompt VLA：训练数据约 1,000 小时时语言 prompt 更好，数据规模增大后 ICL 反超；对未见任务，加入视频上下文后表现较只用语言指令提升约 7 倍。
- Generalist GEN-1.5（S1 发布前一周）：one-shot 学习为核心能力，看一个示范数秒内学习新任务，无需梯度更新或微调，支持人类示范到机器人执行、组合泛化与 Sim-to-Real 迁移（示范视频 3–12 秒、30 秒窗口内现学现用，量子位口径）。
- RoboTTT（7 月 16 日，arXiv 2607.15275，李飞飞、Jim Fan、Yuke Zhu 等合著）：第一个系统地把「上下文 scaling」搬到机器人视觉运动策略的工作。
- 可可矩阵（COCO Matrix，2026 年 4 月成立）：创始人兼 CEO 高宇翔（西安交大少年班出身、JHU 博士辍学、曾在傅利叶打通全尺寸人形遥操作-数据采集-模型部署链路并做世界模型 policy）。技术口径：把后训练 ICL 前置到预训练阶段；「条件表征」让视觉特征由「看到什么 + 想做什么」共同决定，统一模型在八、九类视觉任务（深度、分割、人体姿态等）上验证，部分接近单任务专用模型；「强理解、轻生成」：同等训练设置下约 60M 参数动作头效果超过约 1.1B 的对照方案；简单抓取类任务 one-shot 适配后完成率稳定在 80% 以上；以 Self-Correction（复用失败轨迹再尝试）与「第一次成功平均耗时」作为新指标。以上为公司口径，未经独立核验。

## 影响与后续观察

- Scaling 叙事扩展：从「模型-数据-任务覆盖」扩展到「部署后能否利用上下文继续学习」；对数据体系的含义是从「海量任务全覆盖」转向「基础能力 + 人机教学/实时纠偏/协同作业数据」，而后者目前尚无成熟采集标准。
- 技术看点：固定窗口 vs 流式记忆（持续压缩筛选历史）、多模态上下文的异构数据量差距（触觉/听觉/本体远小于视觉语言）、one-shot 适配与专项 post-training 的差距能否收敛。
- 待观察：Skild/Generalist 的完整技术报告（两家均以成果发布形式展示，细节未完全公开）；可可矩阵的技术论文与外部基准验证；具身 ICL 是否成为 VLA 之后的范式分叉点。

## 来源链接

- 量子位深度报道（对象发现来源）：https://www.qbitai.com/2026/09/484897.html
- RoboTTT 论文：https://arxiv.org/abs/2607.15275
- GPT-3 论文（ICL 定义）：https://arxiv.org/abs/2005.14165
- 可可矩阵：https://www.ccmtrx.com
