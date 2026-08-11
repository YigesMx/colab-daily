---
schemaVersion: 2
candidateId: "url--https%3A%2F%2Fhuggingface.co%2Fblog%2FMultiverseComputingCAI%2Fefficient-knowledge-distillation"
date: "2026-08-11"
title: "Making Knowledge Distillation Cheap Enough to Run at Scale"
authors:
  - "Antonio Tiene"
  - "Iker García-Ferrero"
  - "Ali Hashemi"
  - "Bakbergen Ryskulov"
summary: "Multiverse Computing 于 2026 年 8 月 10 日在 Hugging Face 发布文章，介绍用离线 top-100 logits 缓存和 fused chunked KL loss 降低大语言模型知识蒸馏的显存开销。文章报告单 H200、8K 上下文的比较，以及 32K/256K 长上下文和 GPT-OSS 20B 实验，但这些数字属于发布方文章及其所引论文的报告，当前记录未独立复现。"
keywords:
  - "知识蒸馏优化"
  - "长上下文训练"
category: "News"
ratingTrack: "news_policy"
groupRank: 2
groupScore: 69
scoreScale: "news-policy-v2"
sources:
  - name: "Hugging Face Blog"
    url: "https://huggingface.co/blog/MultiverseComputingCAI/efficient-knowledge-distillation"
previewImage: null
---

## 事件概述

Hugging Face 于 2026 年 8 月 10 日刊发 Multiverse Computing 团队文章，介绍论文《Efficient Knowledge Distillation for LLMs: Offline Top-K Logits and a Fused Chunked KL Loss》及其开源实现。事件的具体新增信息不是一个新模型发布，而是一个面向大语言模型知识蒸馏的训练系统方案：先缓存教师模型每个位置的 top-100 logits，再用分块且融合输出投影的 KL 损失训练学生模型。发布方称这一组合能降低长上下文蒸馏的显存和训练成本。

## 已确认事实与证据

完整文章解释，传统在线蒸馏同时保留教师和学生，并为每个 token 位置生成完整词表分布。文章以 gpt-oss-120b 的 201,088 词表、32K 序列长度和 batch size 4 为例，称单个教师概率张量约需 50GB bfloat16 显存，加上其他训练状态后一次迭代峰值约 250GB。这是文章用来说明问题规模的计算示例和发布方表述，不是本次独立测量。

方案的第一部分是 offline distillation：教师输出只计算一次，每个位置保存最可能的 100 个 token 的 logits，训练期间不再让教师与学生同时驻留，也可以在多次消融实验中复用缓存。第二部分是 fused chunked KL loss：它按序列块计算输出投影和损失，前向完成后丢弃块，反向再计算，从而不生成或保存完整的“词表大小 × 序列长度”学生 logits 网格。文章还说明，forward-chunked KL 仍会保留学生完整 logits，而 fused 版本进一步消除了这一点，代价是前向和反向各做一次投影。

文章报告在单张 H200、8K 上下文、Llama 3.1 8B Instruct 教师和 3.2B Llama 学生的比较中，online、dense KL、forward-chunked KL 和 fused chunked KL 的训练损失近似一致；四者峰值显存分别为 102.8、78.3、61.8 和 58.3 GB，迭代时间分别为 25.9、18.5、18.4 和 20.2 秒。发布方同时报告一个 toy output-projection 实验：32K token 时 fully chunked 从 dense loss 的 85.2 GiB 降至 5.45 GiB，64K 起 dense loss 失败；256K 时 fully chunked 使用 11.6 GiB，且每次迭代约比下一种 chunked 变体快 3.3 倍。文章链接了论文和 `Full-Chunked-KL-Loss` GitHub 实现，但当前精读没有把论文或代码另行作为本地全文读取。

## 影响与后续观察

若这些结果在目标训练栈中成立，离线缓存和融合分块损失可以把长上下文蒸馏从多节点显存约束转化为更可控的单节点工程问题。文章称 GPT-OSS 20B 的 32,768 token 蒸馏由四个 GPU 节点缩至一个，步时从 57.0 秒降到 12.23 秒，每 GPU 吞吐从 74.2 增至 345.7 TFLOP/s；这些是发布方报告的具体运行结果，不能当作普遍硬件保证。

文章还称由 Llama 3.1 8B Instruct 蒸馏得到的约 3.2B 学生在 BoolQ 和 HellaSwag 上保留大部分教师准确率，在 MMLU 上与教师相差约 9 个百分点，参数量不到一半。后续应检查完整论文中的训练配置、数据划分、教师/学生精确版本、top-K 选择对能力恢复的影响，以及开源实现的可复现性。尤其要区分发布文章对成本的自测、论文的实验结论和实际生产训练的总成本；当前材料没有提供跨 GPU、跨框架或长期训练稳定性的独立证据，也没有证明压缩后的学生在所有任务上保持教师能力。

## 来源链接

- [Hugging Face Blog 原文](https://huggingface.co/blog/MultiverseComputingCAI/efficient-knowledge-distillation)
- [完整论文：Efficient Knowledge Distillation for LLMs](https://arxiv.org/abs/2608.03796)
- [开源 Full-Chunked-KL-Loss 实现](https://github.com/CompactifAI/Full-Chunked-KL-Loss)
