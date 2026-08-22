---
candidateId: "paper--arxiv--2608.19589"
businessCandidateId: "paper--arxiv--2608.19589"
date: "2026-08-22"
category: "Paper"
title: "OrthoSkillVLA: Continual Skill Learning via Gradient-Informed Skill Subspace Adaptation"
authors: ["arxiv.org"]
summary: "东南大学提出面向预训练 VLA 的持续技能学习框架 OrthoSkillVLA，针对 VLM 与 ActionHead 的表征差异设置独立正交子空间预算，并用免训练路由的轻量特征感知 MoE 速度解码器突破输出层可塑性瓶颈。仿真与真机连续技能学习实验显示其比统一子空间约束基线更好保留旧技能。"
provisionalKeywords: ["VLA 模型", "机器人学习"]
keywords: ["VLA 模型", "机器人学习"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.19589"}, {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.19589v1"}]
previewImage: "/daily/2026-08-22/assets/paper--arxiv--2608.19589/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 8
groupScore: 77
scoreScale: "paper-v2"
emphasis: false
---
# OrthoSkillVLA：梯度信息子空间适配的 VLA 持续技能学习

## 研究问题与贡献

预训练 VLA 顺序学习多个技能时会灾难性遗忘：新技能的参数更新扰动旧技能的表征与速度映射。架构隔离方法保留好但推理开销随技能增长；统一正交子空间约束又不区分 VLA 内部组件的角色。本文识别出两个 VLA 特有挑战——VLM 语义子空间易耗尽而 ActionHead 速度模式对扰动极敏感、最终速度解码器作为输出级存在表达瓶颈——并据此提出模块感知的持续学习框架。

## 方法与系统

对每个适配层维护历史技能特征的正交基；新技能训练时把累积梯度投影到正交补空间，LoRA 下投影冻结、仅更新上投影，并以能量阈值控制基增长。关键设计是分开设置预算：VLM 用较宽松阈值保留长期语义可塑性，ActionHead 用较严格阈值精确保护局部速度模式。最终速度解码器不参与正交微调，改为特征感知 MoE：每个新技能分配一个紧凑专家，推理时用免训练的投影亲和度路由选择专家。

## 实验设置与数据

在仿真与真实环境中按顺序学习多技能，每技能 20 次独立试验计算成功率，报告下三角成功率矩阵，并与 KeepLoRA 等子空间约束基线及冻结/LoRA 消融比较。

## 结果、限制与结论

论文报告：随着新技能顺序加入，OrthoSkillVLA 比统一子空间约束基线保持更稳定的旧技能表现，并在最终平均成功率上取得一致改进；消融显示模块级保护与解码器灵活性缺一不可。限制包括专家数量仍随技能线性增长（尽管参数占比很小）、子空间估计依赖梯度统计，且实验技能数规模有限。该工作为 VLA 的终身技能更新提供了可部署的参数高效方案。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.19589>
- Hugging Face：<https://huggingface.co/papers/2608.19589>
