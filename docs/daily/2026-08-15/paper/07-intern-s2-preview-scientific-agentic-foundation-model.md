---
candidateId: "arxiv--2608.13505"
date: "2026-08-15"
category: "Paper"
title: "Intern-S2-Preview: Scientific Agentic Foundation Model"
authors:
  - "Intern Large Models"
summary: "Intern-S2-Preview-397B 面向科学智能体任务，结合科学多模态预训练、多任务/agentic RL 和可插拔 Memory Decoder，在科学、时序与通用基准上形成广泛能力。"
provisionalKeywords:
  - "科学智能体"
  - "多模态基础模型"
  - "强化学习"
  - "时序建模"
  - "模块化记忆"
keywords:
  - "科学智能体"
  - "多模态推理"
  - "模块化记忆"
sources:
  - name: "Hugging Face"
    url: "https://huggingface.co/papers/2608.13505"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.13505"
  - name: "PDF"
    url: "https://arxiv.org/pdf/2608.13505"
  - name: "TeX source"
    url: "https://export.arxiv.org/e-print/2608.13505"
previewImage: "/daily/2026-08-15/assets/arxiv--2608.13505/preview.png"
schemaVersion: 2
ratingTrack: "paper"
groupRank: 7
groupScore: 86
scoreScale: "paper-v2"
---

# Intern-S2-Preview: Scientific Agentic Foundation Model

> Intern-S2-Preview-397B 面向科学智能体任务，结合科学多模态预训练、多任务/agentic RL 和可插拔 Memory Decoder，在科学、时序与通用基准上形成广泛能力。

## 研究问题与贡献

科学发现需要模型理解异构科学证据、调用工具与环境，并在长任务中持续推进。Intern-S2-Preview 试图把多模态科学理解、推理、生成和工具交互统一到一个 397B 预览版基础模型，并研究不改动冻结骨干的领域 specialization 路径。

## 方法与系统

预训练覆盖渲染科学文档、图文交错数据和科学语料；后训练包含 SFT、可扩展多任务 RL、黑/白盒 agentic RL 和 on-policy distillation，配合 partial rollout/off-policy correction、自适应长度正则、在线投机解码、鲁棒多任务优化和 trace-aware experience assembly。架构上，时序模块从长序列理解扩展到数值预测；Memory Decoder 作为独立扩展，通过外部参数记忆和 token 级 router 与冻结 397B 下一 token 分布融合。

## 实验设置与数据

评估覆盖 Biology-Instructions、Mol-Instructions、SciReasoner、MP20、ProteinBinder-9、XLRS-Bench、MicroVQA、SFE、ResearchClawBench，以及 MMLU-Pro、MMMU-Pro、TerminalBench、SWE-Bench 等通用与智能体基准；另在 SciTS 和 GIFT-Eval 上测试时序理解/预测。对比对象包括 DeepSeek-V4-Pro、Qwen3.5-397B、GLM-5.2、Kimi-K2.7-Code 等。

## 结果、限制与结论

模型在 Biology-Instructions 56.92、Mol-Instructions 52.37、SciReasoner 63.97 上超过强开源/闭源模型，并在内部 MP20、ProteinBinder-9 取得 SOTA；MolecularIQ 61.49、TOMG-Bench 65.66、XLRS-Bench 51.97、MicroVQA 68.81 为开源最佳。通用侧 MMLU-Pro 89.75、SimpleQA-Verified 69.90、MMMU-Pro 80.46、ChartQAPro 69.65。SciTS 七/九项超过 Intern-S1-Pro，PHU01 F1 从 36.8 到 66.9；GIFT-Eval zero-shot MASE 0.785。Intern-MemDec-4B 将 Biology-Instructions 从 56.92 提至 60.32。作者称其仍为 preview，长科学流程可靠性、领域记忆、verifier 和专业工具集成仍待加强，且内部评测集的独立复现边界需持续关注。

## 来源链接

- [Hugging Face](https://huggingface.co/papers/2608.13505)
- [arXiv](https://arxiv.org/abs/2608.13505)
- [PDF](https://arxiv.org/pdf/2608.13505)
- [TeX source](https://export.arxiv.org/e-print/2608.13505)

