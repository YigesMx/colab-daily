---
candidateId: "arxiv--2608.07545"
date: "2026-08-15"
category: "Paper"
title: "DarwinX: Evolving Agent Harnesses Through Natural Selection"
authors:
  - "Yifan Zhang 等"
summary: "DarwinX 在冻结模型上把智能体自进化视为 harness 种群选择，用 preserve-and-extend 契约和跨谱系档案积累可迁移能力。"
provisionalKeywords:
  - "智能体外层系统"
  - "自然选择"
  - "种群搜索"
  - "免训练进化"
  - "泛化评测"
keywords:
  - "智能体外层系统"
  - "长时一致性"
  - "多模态推理"
sources:
  - name: "Hugging Face"
    url: "https://huggingface.co/papers/2608.07545"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.07545"
  - name: "PDF"
    url: "https://arxiv.org/pdf/2608.07545"
  - name: "TeX source"
    url: "https://export.arxiv.org/e-print/2608.07545"
previewImage: "/daily/2026-08-15/assets/arxiv--2608.07545/preview.png"
schemaVersion: 2
ratingTrack: "paper"
groupRank: 9
groupScore: 84
scoreScale: "paper-v2"
---

# DarwinX: Evolving Agent Harnesses Through Natural Selection

> DarwinX 在冻结模型上把智能体自进化视为 harness 种群选择，用 preserve-and-extend 契约和跨谱系档案积累可迁移能力。

## 研究问题与贡献

LLM 智能体能力不仅取决于权重，也取决于 prompts、工具、技能和控制流。已有自改进循环常沿单谱系编辑 harness，容易路径依赖并造成局部任务回退。DarwinX 把改进视为多个 harness 变体的选择问题，在模型冻结时检验外层系统本身的演化能力。

## 方法与系统

每个子 harness 必须满足 preserve-and-extend：至少新增一个任务能力，同时不超过小回归容忍度。系统维护树形档案，保存 harness 快照、编辑增量、逐任务分数、试验证据和教训；失败谱系不会被丢弃，可与其他分支互补重组。失败、教师和自我派生证据共享同一编辑接口，fitness 由各 benchmark 自己的 verifier 决定，不使用 gold solution 或人工指定赢家。

## 实验设置与数据

论文构造四类逐步分离进化信号与测试的 regime：Terminal-Bench 2.1 in-domain、TerminalWorld held-out split、WebArena-Infinity 合成到真实，以及把 Terminal-Bench harness 不变迁移到 SWE-bench Verified。基线强调 matched-model 对比，并同时列出现成智能体与公开 leaderboard 作为背景。

## 结果、限制与结论

平均提升约 17 点。Terminal-Bench 2.1 从 GPT-5.5 的 75.5% 到 83.2%，在 GPT-5.6 Sol 上达 84.7%；TerminalWorld held-out 从 25/41 到 28/41；WebArena-Infinity audit-clean pass@1 从 43.5% 到 93.0%，无效轨迹从 293 降至 17；未做 in-domain SWE 训练的 harness 在 SWE-bench Verified 达 84.2%。作者明确说明完整系统未拆分 archive、parent selector 和 merge operator 的单独因果贡献，验证-before-finalization 与 contract-aware tool use 只是反复出现的解释性机制。

## 来源链接

- [Hugging Face](https://huggingface.co/papers/2608.07545)
- [arXiv](https://arxiv.org/abs/2608.07545)
- [PDF](https://arxiv.org/pdf/2608.07545)
- [TeX source](https://export.arxiv.org/e-print/2608.07545)

