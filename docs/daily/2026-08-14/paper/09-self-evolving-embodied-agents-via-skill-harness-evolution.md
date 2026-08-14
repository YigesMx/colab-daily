---
schemaVersion: 2
candidateId: "arxiv--2608.11350"
date: "2026-08-14"
category: "Paper"
ratingTrack: "paper"
groupRank: 9
groupScore: 86
scoreScale: "paper-v2"
title: "Self-Evolving Embodied Agents via Skill-Harness Evolution"
authors: ["Peidong Wang", "Zhiming Ma", "Ying Chang", "Xufang Luo", "Xiaocui Yang", "Shi Feng", "Yuqing Yang", "Dongsheng Li"]
summary: "SHAPER 冻结模型参数，通过目标环境 rollout 交替演化可复用技能和上下文代码 harness，实现无需梯度更新的具身适配。"
provisionalKeywords: ["具身智能体", "测试时适配", "技能演化", "智能体框架", "无需训练"]
keywords: ["具身智能体", "少样本适配", "长时记忆"]
sources:
  - name: "原始来源 1"
    url: "https://arxiv.org/pdf/2608.11350v1"
  - name: "原始来源 2"
    url: "https://export.arxiv.org/e-print/2608.11350v1"
  - name: "原始来源 3"
    url: "https://ar5iv.labs.arxiv.org/html/2608.11350"
previewImage: "/daily/2026-08-14/assets/arxiv--2608.11350/preview.png"
---

# Self-Evolving Embodied Agents via Skill-Harness Evolution

> SHAPER 冻结模型参数，通过目标环境 rollout 交替演化可复用技能和上下文代码 harness，实现无需梯度更新的具身适配。

## 研究问题与贡献

监督微调和强化学习需要新增数据、奖励和训练；许多代码式无训练方法又假设可编程机器人 API。SHAPER 面向固定接口具身环境，把适配对象从模型权重转向外部技能与上下文 harness，让同一个冻结模型兼任规划器和优化器。

## 方法与系统

系统把智能体分解为冻结 VLM planner、冻结 executor、文本技能和 context-code harness。目标环境 rollout 先由诊断器总结失败，再分两阶段优化：固定 harness 演化可复用规划技能，随后固定技能演化上下文构造代码。生成代码受可观察信息、沙箱接口和载荷大小约束，并在进入评测前验证。

## 实验设置与数据

评测覆盖 VLABench 四个 200-episode held-out split 和 ESI-Bench 官方比例的 231 个问题，包含不同低层动作接口。对比直接执行、监督微调、verifier-free selection、投票等 test-time scaling；消融分别只演化技能、只演化 harness 和二者联合，并统计优化成本与收益。

## 结果、限制与结论

在 VLABench，Seed Agent 为 28.25%，完整演化后论文报告明显提升；在 ESI-Bench，完整 SHAPER 达到 49.8% micro、42.9% macro accuracy。技能-only、harness-only、完整演化在对应消融中为 33.50%、30.50%、34.50%，说明两类非参数工件的贡献随基准而变。限制在于需要目标环境 rollout 和可用反馈，优化器仍可能过拟合当前任务；生成 harness 的安全性和可迁移性依赖沙箱与接口验证，真实机器人上的执行风险、样本成本和长期稳定性未在当前材料中确认。

## 来源链接

- [arXiv](https://arxiv.org/abs/2608.11350)
- [PDF](https://arxiv.org/pdf/2608.11350v1)
