---
schemaVersion: 2
candidateId: "arxiv--2608.06756"
date: "2026-08-11"
title: "Capek 0.5: An Execution-Centric Vision-Language Model for Embodied Intelligence"
authors:
  - "Ying Chen"
  - "Weizhen Li"
  - "Zhe Hu"
  - "Zhenjiang Li"
  - "Rui Jiang"
  - "Zhifeng Gu"
  - "Lihuang Fang"
  - "Jiangping Liu"
  - "Lei Yi"
  - "Jie Chen"
summary: "Capek 0.5 按机器人执行循环中的功能角色组织空间推理、时间理解、动作引导和状态验证四类能力，先从共享骨干训练专长模型，再用 TIES 合并和 routed MOPD 统一到单一推理模型。论文报告 35B-A3B 版本相对 Qwen 初始化在 34 个匹配行中提升 28 行，并在 EmbodiedBench/VIGIL 闭环评测中取得收益。"
keywords:
  - "具身执行与状态验证"
  - "长时程机器人操作"
category: "Paper"
ratingTrack: "paper"
groupRank: 8
groupScore: 84
scoreScale: "paper-v2"
sources:
  - name: "arXiv full HTML"
    url: "https://arxiv.org/html/2608.06756v1"
  - name: "Hugging Face paper listing"
    url: "https://huggingface.co/papers/2608.06756"
previewImage: null
---

## 研究问题与贡献

Capek 0.5 研究如何把机器人执行中反复出现的感知、推理、动作和验证能力组织并整合到一个视觉语言模型，而不是按孤立数据集或任务分别优化。论文提出执行中心的四类能力分类：Spatial Reasoning、Temporal Understanding、Action Guidance 和 State Verification，并把每类的监督格式和可验证奖励作为独立的能力获取单元。其具身连接在于，模型不仅回答视觉问题，还要支持闭环执行中的目标定位、轨迹指导和状态/进度确认。

## 方法与系统

四个 specialist 从同一 Qwen 视觉语言骨干开始，用能力对齐数据和带格式解析器/任务验证器的 token-level GRPO 独立训练。数据涵盖空间关系与度量、多视频事件和时间定位、点/框/轨迹动作引导，以及从 BEHAVIOR-1K 轨迹构造的物理状态验证和任务进度估计。之后先用 TIES 对四个 task vector 做冲突感知合并，再用 routed Multi-Teacher On-Policy Distillation 在学生生成的 prefix 上由对应专家蒸馏；部署时只保留一个自回归 checkpoint。作者还引入 Capek-StateBench-P/T，分别评估物理状态和任务进度/下一步。

## 实验设置与数据

实验覆盖 35B-A3B 和 2B 两个规模，使用 DeepInsight 统一记录配置、生成和分数；matched Capek-Qwen 对采用相同提示、解析器和评分器。离线基准按空间、时间、动作引导、状态验证和一般能力保留分组，轨迹指标使用各自原生 RMSE/DFD/归一化分数。专门的闭环评估使用 EmbodiedBench 的 EB-HAB/EB-ALFRED，各 300 个多步 episode，以及含 1,000 个均衡 episode 的 VIGIL。主要 35B 版本与 Qwen3.6-35B-A3B 比较，2B 版本与小规模模型比较；原文没有把不同原生指标合成为单一总分。

## 结果、限制与结论

35B-A3B 相对 Qwen3.6 初始化在 34 个匹配 benchmark 行中提升 28 行：动作引导 10/10 行、时间理解 5/5 行、状态验证 2/2 行，空间推理 6/9 行，一般保留 5/8 行。代表性变化包括 PixMoPointsEval 62.42->74.06、Where2Place 57.61->73.52、NaviTrace 30.87->42.80，以及 StateBench-P 提升 11.00 点。Capek 0.5-35B-A3B 在 EmbodiedBench EB-HAB 平均成功率 63.0%，EB-ALF 55.3%，分别比匹配 Qwen 高 17.0 和 4.6 个百分点；VIGIL 世界完成率/基准成功率为 38.6%/32.2%，Qwen 为 37.4%/28.8%。2B 版本在 34 行中提升 30 行。

证据边界是，闭环结果均为仿真 benchmark，论文没有在本文中提供真实机器人成功率。TIES 与 MOPD 的整合会保留各专长但存在量化损失，且不同任务原生指标不可直接平均。未来工作才计划工具调用、更长时程交互和物理机器人验证；因此本文支持执行能力整合和仿真闭环迁移，不能外推为已验证的真实机器人控制器。

## 来源链接

- 原始论文全文：https://arxiv.org/abs/2608.06756v1
- Hugging Face 论文页：https://huggingface.co/papers/2608.06756
