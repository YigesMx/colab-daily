---
candidateId: "arxiv--2607.28272"
date: "2026-08-01"
rank: 10
title: "MemHarness：把历史经验按当前状态重构，而不是原样回放"
authors:
  - "Rong Wu"
  - "Daocheng Fu"
  - "Licheng Wen"
  - "Xuemeng Yang"
  - "Shu Zou"
  - "Jianbiao Mei"
  - "Yuxin Wang"
  - "Hairong Zhang"
  - "Yu Yang"
  - "Tao Hu"
  - "Cong Zhang"
  - "Botian Shi"
  - "Pinlong Cai"
summary: "MemHarness 不把检索到的历史经验直接塞入动作上下文，而让同一个 7B 策略比较经验来源状态与当前历史，重写或拒绝经验后再行动，并以端到端 GRPO 从任务奖励学习这一潜在重构过程。"
keywords:
  - "Agent记忆"
  - "智能体系统"
score: 77
sources:
  - name: "arXiv TeX source"
    url: "https://arxiv.org/src/2607.28272v1"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2607.28272"
previewImage: "/daily/2026-08-01/assets/arxiv--2607.28272/preview.png"
---

## 核心内容

经验记忆常被写成抽象策略，再在相似任务中检索并原样加入 prompt。MemHarness 认为问题不在“能否找到相似经验”，而在历史经验产生时的状态与当前状态可能不同：静态回放会把已过时或不适用的指引注入决策，造成负迁移。为此，每条记忆除自然语言策略外还保存来源观测，策略在当前决策前显式比较来源状态和最近三步历史，再保留、修改或拒绝经验。

推理分三段。首先，策略根据当前历史决定是否检索，BGE-M3 从经验库返回 top-3；其次，同一策略将任务、当前历史、经验及来源观测拼接，输出针对当前状态的 guidance，若无经验适用则输出 `<EMPTY>` 并退回自主推理；最后，同一参数策略基于重构 guidance 生成一个可执行动作。记忆库从空开始，训练期间由策略从自身轨迹中总结原则，并做语义去重、效用跟踪与低效条目清理。

重构没有人工标签，因此作者用 GRPO 端到端训练“检索、重构、行动”轨迹。每个任务采样一组轨迹，以组内归一化回报给所有 token 共享 credit。主要任务奖励为失败 0、成功 10，另加最多 0.1 的格式奖励，约束每步一个 think/action 块、每 episode 检索 1 至 5 次及英文输出。这个辅助奖励很小，旨在建立协议而不是替代环境成功信号。

## 关键技术与数据

策略主干为 Qwen2.5-7B-Instruct，基于 verl-agent。每个 benchmark 的冷启动数据含 200 条带思维与主动记忆检索的多轮轨迹，以及 200 条把轨迹总结为记忆的问答样本；随后使用 GRPO。所有可训练基线共享主干、最近历史窗口 `w=3`、交互预算和优化设置。评估环境为 ALFWorld 家庭任务与 WebShop 目标购物，指标包括成功率，以及 WebShop 平均任务分数。

基线覆盖 GPT-4o、Gemini-2.5-Pro，ReAct、Reflexion、Mem0、ExpeL、MemP、SimpleMem，以及 RLOO、GRPO、MemRL、EvolveR、Mem0+GRPO、SimpleMem+GRPO。消融包括原样记忆、推理时去掉重构、去掉记忆，以及用未针对任务训练的 Qwen2.5-7B-Instruct 替换策略内部重构器。OOD 测试改变 ALFWorld 房间布局与物体位置；机制测试还删除或随机替换来源状态，并构造 1000 个最小修改当前状态的离线反事实 probe。

预览图来自方法部分第一张框架图，完整展示记忆检索、依据来源状态的上下文重构和动作生成三段流程；使用 TeX source 内原始 PDF 图转换，而非生成示意图。

## 结果与结论

作者报告 MemHarness 在 ALFWorld 成功率为 85.2%，WebShop 为 75.6%，分别比纯 GRPO 高 8.8 和 9.5 个百分点。去掉测试时记忆后，ALFWorld 仍为 83.0%，高于 RL Only 的 76.4%，作者据此认为重构训练也改善了无记忆时的内在推理。用通用 7B 指令模型替代内部重构器时 ALFWorld 降到 77.7%，说明简单文本改写不能复现端到端任务奖励学到的适配。

ALFWorld OOD 中，MemHarness 平均 85.9%，RL + Raw Memory 为 76.3%；保留策略但去掉重构为 82.4%，去掉记忆为 83.0%。删除来源状态会把 ALFWorld 成功率从 85.2% 降至 80.0%；用随机记忆的来源状态替换时，拒绝率从 8.7% 升至 13.3%，WebShop 从 56.0% 升至 63.3%。1000 个反事实 probe 中，最小状态变化也会增加适配或拒绝输出。这些证据支持策略确实利用状态差异，而不是无条件润色检索文本。

仍需谨慎区分相关性与充分性。轨迹级奖励同时赋给重构和动作 token，无法精确定位每个提升来自哪一段；经验库的总结、效用维护和 cold-start 也共同参与系统效果。测试只覆盖 ALFWorld 和 WebShop，主干固定为 7B，所谓“内在推理改善”主要来自去记忆消融，不等同于已学习可跨域的通用记忆机制。作者也把扩大模型和开放环境列为后续工作。

## 来源链接

- arXiv TeX 原始源码：https://arxiv.org/src/2607.28272v1
- arXiv 摘要页：https://arxiv.org/abs/2607.28272
- arXiv PDF：https://arxiv.org/pdf/2607.28272
