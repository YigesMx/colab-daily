---
candidateId: "paper--arxiv--2608.19891"
businessCandidateId: "paper--arxiv--2608.19891"
date: "2026-08-22"
category: "Paper"
title: "EXIMO: VLM Guided Exploration of VLA Policies"
authors: ["arxiv.org"]
summary: "Google DeepMind 提出 EXIMO 三阶段 VLA 微调算法：用 Gemini VLM 作为规划器把长程目标分解为 VLA 可执行的子目标并采集数据（Explore），行为克隆蒸馏回 VLA（Imitate），再用残差离轨 RL 进一步优化（Optimize）。在 22 个 ALOHA 仿真任务上，其样本效率与最终表现显著优于基线 VLA 及 VLM 在线编排。"
provisionalKeywords: ["VLA 模型", "机器人学习"]
keywords: ["VLA 模型", "机器人学习"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.19891"}, {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.19891v1"}, {"name": "huggingface.co", "url": "https://huggingface.co/papers/2608.19891"}, {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.19891"}]
previewImage: "/daily/2026-08-22/assets/paper--arxiv--2608.19891/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 7
groupScore: 79
scoreScale: "paper-v2"
emphasis: false
---
# EXIMO：VLM 引导探索的 VLA 高效微调

## 研究问题与贡献

大规模行为克隆得到的 VLA 在训练分布内表现强，但面对长程、组合或推理型目标（如“把猴子爱吃的水果放进碗里”）时退化；为每个新任务采集遥操作数据昂贵，直接 RL 又样本低效。EXIMO 的贡献是把 VLM 的世界知识与 VLA 的感知运动技能结合成三阶段微调管线，在不依赖新任务遥操作的前提下显著提升样本效率与最终成功率。

## 方法与系统

Explore 阶段把 Gemini VLM 作为闭环编排器，根据状态历史与自然语言目标给 VLA 下发可执行的中间目标，用环境成功检测器过滤成功的编排 episode；Imitate 阶段以这些数据对初始 VLA（Gemini Robotics On-Device 3B）继续行为克隆，直接以最终目标为条件，把 VLM 编排知识蒸馏进 VLA，部署时不再调用 VLM；Optimize 阶段训练残差策略，在 VLA 动作上叠加修正并用 MPO 优化稀疏成功奖励。

## 实验设置与数据

在 ALOHA 平台仿真的 22 个操作任务上评估，任务含推理型（BananaInBowl-Reasoning）与长程技能链（PlateBowlOnRack 等）；比较基线 VLA、基线+更多 RL、基线+VLM 在线编排，以及逐步消融三个阶段，报告成功率与成功时间。

## 结果、限制与结论

论文报告：VLM 编排显著提高数据采集质量并缩短 episode；仅靠编排数据做 SFT 的 VLA 即超过带在线编排的基线，且进一步残差 RL 后在更多环境步数下仍优于对基线直接 RL；SFT 后的策略在多个任务上甚至超过用更多数据做 RL 的基线 VLA。作者明确限制：当前假设可访问环境的真值成功检测器，未来需用 VLM 做成功检测与环境复位；结论主要来自仿真。该工作展示了 VLM 作为数据编排器、VLA 作为技能执行器的清晰分工范式。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.19891>
- Hugging Face：<https://huggingface.co/papers/2608.19891>
