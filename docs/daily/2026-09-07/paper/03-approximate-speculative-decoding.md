---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F09%2F06%2Fother%2Fadmin%2F112379%2F%25e7%25bb%2599%25e5%25a4%25a7%25e6%25a8%25a1%25e5%259e%258b%25e3%2580%258c%25e6%258a%2595%25e6%259c%25ba%25e8%25a7%25a3%25e7%25a0%2581%25e3%2580%258d%25e6%259d%25be%25e7%25bb%2591%25ef%25bc%259a%25e5%2585%258d%25e8%25ae%25ad%25e7%25bb%2583%25ef%25bc%258c%25e5%258d%25b3%25e6%258f%2592%25e5%258d%25b3%25e7%2594%25a8%25e8%25bf%2591%2F"
date: "2026-09-07"
category: Paper
title: "ASD：免训练「近似投机解码」验证器，固定负载吞吐再提 3%–15%"
authors: ["aiera.com.cn"]
summary: "arXiv 2608.03447（v3）提出 Approximate Speculative Decoding（ASD）：一个免训练、即插即用的验证器，把投机解码的「首个不一致即截断」改为预算内最长前缀选择，配合局部 regret 门、每块例外上限与请求级预算三重控制，在 Qwen3-8B/14B + DSpark 七任务上平均提速 7.78%（区间 3.05%–15.26%），并可将 DeepSeek-V4-Flash(284B) 在 GSM8K/MATH-500 上的验证器接受率提高约 10%–16%。"
keywords:
  - 大模型推理优化
  - 开源生态与工具链
sources:
  - { "name": "aiera.com.cn", "url": "https://aiera.com.cn/2026/09/06/other/admin/112379/%e7%bb%99%e5%a4%a7%e6%a8%a1%e5%9e%8b%e3%80%8c%e6%8a%95%e6%9c%ba%e8%a7%a3%e7%a0%81%e3%80%8d%e6%9d%be%e7%bb%91%ef%bc%9a%e5%85%8d%e8%ae%ad%e7%bb%83%ef%bc%8c%e5%8d%b3%e6%8f%92%e5%8d%b3%e7%94%a8%e8%bf%91/" }
previewImage: "/daily/2026-09-07/assets/url--https_3a_2f_2faiera.com.cn_2f2026_2f09_2f06_2fother_2fadmin_2f112379_2f_25e7_25bb_2599_25e5_25a4_25a7_25e6_25a8_25a1_25e5_259e_258b_25e3_2580_258c_25e6_258a_2595_25e6_259c_25ba_25e8_25a7_25a3_25e7_25a0_2581_25e3_2580_258d_25e6_259d_25be_25e7_25bb_2591_25ef_25bc_259a_25e5_2585_258d_25e8_25ae_25ad_25e7_25bb_2583_25ef_25bc_258c_25e5_258d_25b3_25e6_258f_2592_25e5_258d_25b3_25e7_2594_25a8_25e8_25bf_2591_2f/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 56.0
scoreScale: "paper-v2"
emphasis: true
---
# ASD：免训练「近似投机解码」验证器，固定负载吞吐再提 3%–15%

**一句话结论**：ASD 只改动投机解码的「验证」一环——不再在草稿与目标模型首个不一致处一刀切截断，而是在严格预算内接受个别不一致、复用其后仍然目标贪心的连续后缀——不训练、不改草稿模型、零预算时严格退化为标准验证，换来最高约 15% 的吞吐提升。

## 研究问题与贡献

投机解码让轻量草稿模型先猜一整块 token、目标模型并行「批改」，是 LLM 推理最主流的免费提速思路之一。但标准贪心验证有一条严格规则：草稿在第一个 token 上与目标模型 argmax 不一致，验证立即停止、其后已被目标模型打分的后缀全部作废——哪怕这些 token 在实际前缀下仍然目标贪心。ASD（Approximate Speculative Decoding）的贡献是把「二元首错截断」替换为「预算内最长前缀选择」，并证明在不引入任何训练与额外目标模型前向的情况下可以安全地吃掉这部分被浪费的算力。新智元 9 月 6 日的报道聚焦该方法「免训练、即插即用、速度再提 15%」的面向，与论文 v3 数字一致。

## 方法与系统

ASD 是一个纯验证器侧的改动，三重预算控制：(1) 局部 target-logit regret 门——只接受 regret 受控的不一致；(2) 每块 exception 上限——限制单个草稿块内可接受的不一致数量；(3) 请求级持久 regret 预算——整个请求共享总预算。被选中的 mismatch 之后，连续的 target-greedy 后缀直接复用，不再做额外近似决策或目标模型前向。ASD 不需要新草稿模型、不需要微调；预算为零时严格退化为标准贪心验证。ASD 只使用标准目标验证过程已产生的 logits，可直接插入既有解码框架。

## 实验设置与数据

主实验以 Qwen3-8B/Qwen3-14B 为目标模型，配对 DSpark-8B-block7/DSpark-14B-block7 草稿，并测试向 EAGLE3（Llama-3.1-8B、Qwen2.5-7B）与 Medusa（Llama-3.1-8B）的迁移；任务覆盖 GSM8K、MATH-500、HumanEval、MBPP、MMLU、MT-Bench、Alpaca 七类。评测在单张 NVIDIA L20 GPU、vLLM 0.11.0 上进行，超参在 GSM8K 不相交切片上发现后冻结，每次评估重复四轮并以 strict–ASD–strict 三元组顺序执行以控制漂移。作者来自北京航空航天大学集成电路科学与工程学院、清华大学精密仪器系等。

## 结果、限制与结论

论文报告：固定负载吞吐较匹配的严格验证提升 3.05%–15.26%，Qwen3-14B + DSpark-14B 七任务平均提升 7.78%；在 DeepSeek-V4-Flash（284B）+ DSpark 的 FP4→FP8 兼容设置下，GSM8K 与 MATH-500 的验证器侧接受率提高约 10%–16%。源代码已开源。限制：所有对比基于贪心解码口径，采样解码下的行为论文未展开；接受 mismatch 会改变解码轨迹，下游质量影响需使用方按自身评测自查；与具身方向的连接是间接的（推理成本影响 VLA/世界模型部署经济学）。摘要中的实验数字均为论文报告值，track 未独立复现。

## 来源链接

- 论文原文：https://arxiv.org/abs/2608.03447
- HTML 全文（v3）：https://arxiv.org/html/2608.03447v3
- 代码：https://github.com/Kissmetothemoon/ASD
- 新智元报道（对象发现来源）：https://aiera.com.cn/2026/09/06/other/admin/112379/（见来源记录）
