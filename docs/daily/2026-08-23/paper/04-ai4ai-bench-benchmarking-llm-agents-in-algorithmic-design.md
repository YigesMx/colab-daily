---
candidateId: "paper--arxiv--2608.20318"
businessCandidateId: "paper--arxiv--2608.20318"
date: "2026-08-23"
category: "Paper"
title: "AI4AI-Bench：让 coding agent 改进 AI 训练算法的递归自我改进基准"
authors: ["arxiv.org"]
summary: "Einsia.AI 与清华发布 AI4AI-Bench：10 个任务让 coding agent 在 4 小时探索后提交改进的训练算法，再从零训练评分。290 个单元平均仅 0.166 分（标度 0.1 为仓库基线、1.0 为最优），超过四成提交比原有算法更差，说明递归自我改进的算法层仍远未解决。"
provisionalKeywords: ["评测基准", "智能体技术", "递归自我改进"]
keywords: ["评测基准", "智能体技术", "递归自我改进"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.20318"}, {"name": "lab.einsia.ai", "url": "https://lab.einsia.ai/ai4ai"}, {"name": "github.com", "url": "https://github.com/Einsia/AI4AI-Bench"}, {"name": "www.jiqizhixin.com", "url": "https://www.jiqizhixin.com/articles/2026-08-22"}]
previewImage: "/daily/2026-08-23/assets/paper--arxiv--2608.20318/preview.webp"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 58
scoreScale: "paper-v2"
emphasis: false
---
# AI4AI-Bench：让 coding agent 改进 AI 训练算法的递归自我改进基准

## 研究问题与贡献

递归自我改进（RSI）问的是系统能否改进“产生后续 AI 的过程本身”。Navers Lab（Einsia.AI）与清华团队的 AI4AI-Bench 把这个问题落到可测量层面：给 coding agent 一个真实研究仓库与基础模型，让它改进仓库中实现的训练算法，再用固定预算从零训练并评分。论文发布 10 个算法任务、评测器与全部已评分提交。

## 方法与系统

十个任务覆盖生成（OpenR1 SFT）、多轮智能体 RL（RAGEN）、在线策略蒸馏（OPD）、Bradley-Terry 奖励建模（BTRM）、偏好优化（DPO）、扩散 RL（DDPO）、机器遗忘（NPO）、离散图扩散（DiGress）、权重平均（Model Soup）与一次性剪枝（OWL）。协议把开放式探索与可复现测量分开：智能体在单张 B300 上有 4 小时探索（可用廉价代理指标），提交物是修改后的仓库源码；随后在全新正式环境中从零训练最多 12 小时、最多发布三个 checkpoint，交给冻结的验证与最终评分。评分为 0-1 标度：0.1 是仓库现有算法水平，1.0 是任务最优。

## 实验设置与数据

论文评测 6 个系统共 29 种配置（GPT-5.6 Sol/Terra/Luna 在 Codex 下六个 reasoning effort 档位；Claude Opus 5/Sonnet 5 在 Claude Code 下；Kimi K3 取最高档），每个配置跑全部 10 个任务，共 290 个单元。

## 结果、限制与结论

论文报告：全部 290 个单元平均分仅 0.166，最强系统 Claude Opus 5 平均 0.250，最佳单配置（Opus 5 中档 effort）0.288；124/290 个单元低于 0.1，即超过四成提交让仓库比原有算法更差。分析显示大多数提交从未触及“模型如何学习”的算法层；触及算法层的少数提交平均 0.226，其余仅 0.126；更多 reasoning effort 主要买到“敢碰算法层”的意愿，把该比例从 8% 提到 64%，平均分从 0.094 提到 0.196。结论是当前最强 coding agent 在 RSI 的算法设计层仍处在很低水平。限制：任务为 v1 快照、评分为任务内相对标度，结果依赖所选模型与 harness 组合。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.20318>
- 项目主页：<https://lab.einsia.ai/ai4ai>
- 代码：<https://github.com/Einsia/AI4AI-Bench>
- 媒体报道：<https://www.jiqizhixin.com/articles/2026-08-22>
