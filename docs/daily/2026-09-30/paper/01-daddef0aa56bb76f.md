---
schemaVersion: 3
candidateId: "arxiv--2609.32193"
date: "2026-09-30"
category: "Paper"
groupRank: 1
title: "Devol-ONE: One Autoregressive Mixture of Transformers to Unify Vision-Language-Action and Latent World Modeling"
authors: ["Hongyi Cai", "Yi Herng Ong", "Tingshiuan C. Wu", "Lim Chiew Hui", "Hanxia Li", "Kehong Guo", "Sze Yuan Cheong"]
summary: "Devol-ONE 以单一自回归 Mixture-of-Transformers 统一视觉-语言理解、V-JEPA 潜世界动力学与扩散动作生成：动力学流逐层读取视觉-语言 KV 缓存做语言引导的未来潜状态预测，ALRT 把 rollout 训练同时作用于策略与预测器；LIBERO 98.4%、LIBERO-Plus 零样本 71.4%，RoboTwin 2.0 34 任务 Clean 61.1%→Randomized 63.7%，并完成 Flexiv 单/双臂真机部署。"
keywords: ["视觉语言动作", "世界-动作模型", "评测与基准"]
sources: [{"name": "arXiv", "url": "https://arxiv.org/abs/2609.32193"}, {"name": "PDF 全文", "url": "https://arxiv.org/pdf/2609.32193"}, {"name": "arXiv HTML 版", "url": "https://arxiv.org/html/2609.32193"}, {"name": "项目主页", "url": "https://arxiv.org/abs/2609.32193"}]
previewImage: "/daily/2026-09-30/assets/arxiv--2609.32193/preview.png"
---

## 研究问题与贡献

视觉-语言-动作（VLA）模型直接依据当前视觉与语言上下文生成动作，缺少对场景在候选动作下如何演化的显式建模；世界-动作模型（WAM）试图用预测未来状态弥补这一点，但现有设计通常把预测模块与策略学习在架构上分开，只通过预测输出（像素空间视频生成或独立训练的潜空间预测头）连接。Devol-ONE 提出"能否在统一架构内联合推理任务、预测未来世界状态并生成动作"的正面回答：用一个自回归 Mixture-of-Transformers 把视觉-语言流、V-JEPA 潜动力学流与扩散动作专家整合进单一框架。

## 方法与系统

Devol-ONE 的三条流通过逐层联合注意力耦合：V-JEPA 预训练的动力学流在每一层读取视觉-语言流的 KV 缓存，在语言引导下预测未来潜状态，使动作专家持续被语义推理与预测物理动力学塑形，而非依赖预先算好的固定表征。训练侧引入 ALRT（rollout 训练同时作用于策略与预测器）：针对潜世界模型 rollout 的曝光偏差会传导到任何以 rollout 为条件的动作头这一问题，把动力学流与动作头一起在展开轨迹上训练。视觉-语言 token 不再只编码一次供动作专家使用，而是与动力学预测交替自回归推进。

## 实验设置与数据

评测覆盖 LIBERO（标准四套件）、LIBERO-Plus（相机/机器人/语言/光照/背景等七个扰动维度，含零样本与分布内两种协议）与 RoboTwin 2.0 的 34 个评测任务，并在 Flexiv 单臂与双臂平台完成真机部署。

## 结果、限制与结论

论文报告：LIBERO 平均成功率 98.4%；LIBERO-Plus 零样本（不在扰动数据上微调）71.4%；RoboTwin 2.0 平均成功率从 Clean 设置 61.1% 到 Randomized 设置 63.7%，显示扰动下的鲁棒性提升；消融验证动力学流预测与逐层统一注意力的有效性。局限方面：论文未报告与开源 WAM 基线在完全一致数据预算下的横向对比细节，真机任务规模以平台验证为主；以上数字均为论文报告值。作者列表显示其来自具身智能方向研究团队，代码与权重开放口径未在摘要中明确。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2609.32193)
- [PDF 全文](https://arxiv.org/pdf/2609.32193)
- [arXiv HTML 版](https://arxiv.org/html/2609.32193)
