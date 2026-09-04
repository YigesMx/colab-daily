---
candidateId: "url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-09-04-8"
date: "2026-09-05"
category: News
title: "Meta 开源 HumanCLAW：让 VLM 通过完整人体做闭环决策的评测框架"
authors: ["www.jiqizhixin.com"]
summary: "机器之心报道 Meta 全开源 HumanCLAW；官方项目材料确认其为由 Meta 与南洋理工、华盛顿大学、布朗、西北大学合作的工作（arXiv:2607.27180）：一个把 VLM 动作决策与底层运动执行解耦的评测框架，VLM 每个亚秒级步骤发出原子全身技能，由运动生成器实现为带接触/碰撞/重力后果的连续全身运动；2026-09-04 官方在 Hugging Face 放出 paper_fullval_v1 运动权重，代码、排行榜与 HSSD 补充材料同步开源。"
keywords:
  - VLA 与机器人操作
  - 模型评测与鲁棒性
  - 多模态与空间智能
sources:
  - { "name": "www.jiqizhixin.com", "url": "https://www.jiqizhixin.com/articles/2026-09-04-8" }
previewImage: "/daily/2026-09-05/assets/url--https_3a_2f_2fwww.jiqizhixin.com_2farticles_2f2026-09-04-8/preview.png"
schemaVersion: 3
ratingTrack: "news"
groupRank: 1
groupScore: 85.0
scoreScale: "news-v3"
emphasis: false
---
# Meta 开源 HumanCLAW：让 VLM 通过完整人体做闭环决策的评测框架

## 事件概述

据机器之心报道（标题：Meta 全开源 HumanCLAW：基础模型正进入具身智能的决策层），Meta 于本期窗口内全面开源 HumanCLAW。发布方公布的项目材料确认：HumanCLAW 是一个评测框架，回答「视觉-语言模型能否通过一个物理身体行动」，把 VLM 的动作决策与底层运动执行解耦；2026 年 9 月 4 日，官方在 Hugging Face 发布 paper_fullval_v1 运动权重（约 1.01GB，CC-BY-NC-4.0 许可），代码仓库、排行榜与 HSSD 补充材料同步开源。

## 已确认事实与证据

- 框架机制（官方项目页与论文 arXiv:2607.27180）：每个亚秒级步骤中，被 harness 约束的现成 VLM 读取自我中心视角并输出一个原子全身技能决策；校验器拒绝不安全、过早或物理无效的决策；运动生成器把被接受的技能实现为连续全身运动；半物理仿真器执行该运动并产生真实物理后果（接触、碰撞、重力）。
- 评测定位：当任务失败时，该框架能区分「VLM 决策错误」与「运动控制器执行失败（如失去平衡摔倒）」，从而单独度量 VLM 的动作智能（action intelligence）。
- 团队（论文作者信息）：Meta 与南洋理工大学、华盛顿大学、布朗大学、西北大学合作，李思偌（Meta）等。
- 开源内容（GitHub/Hugging Face 仓库）：评测代码、运动生成器权重、排行榜与 HSSD 补充场景；权重仓库显示 motion weights 于 2026-09-04 上传。

## 影响与后续观察

- 该框架把「基础模型能否进入具身决策层」变成可复现的量化评测，媒体将其解读为基础模型进入具身决策层的标志；对 VLM 厂商与人形机器人团队都是直接可用的评测底座。
- 待观察：机器之心报道中的性能比较表述未能从公开渠道逐项核验；论文原文未报告的细节（各 VLM 在排行榜上的具体分数变化）以官方排行榜为准；CC-BY-NC-4.0 许可对商用接入的限制需注意。

## 来源链接

- 机器之心报道：https://www.jiqizhixin.com/articles/2026-09-04-8
- 官方项目页：https://human-claw.github.io/
- 论文：https://arxiv.org/abs/2607.27180
- 代码：https://github.com/Human-CLAW/HumanCLAW
- 权重：https://huggingface.co/HumanCLAW/HumanCLAW
