---
candidateId: "paper--arxiv--2608.18410"
businessCandidateId: "paper--arxiv--2608.18410"
date: "2026-08-21"
category: "Paper"
title: "Role-Conditioned Sub-Token Routing for Efficient Vision-Language-Action Policies"
authors: ["arxiv.org"]
summary: "RoleSub 按视觉、语言和控制 token 的角色压缩保留值表示，在 OpenVLA-OFT 上将总 KV 缓存压至约一成仍保持多数 LIBERO 控制性能。"
provisionalKeywords: ["VLA 模型", "AI 基础设施", "机器人操作"]
keywords: ["VLA 模型", "AI 基础设施", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.18410v1"}]
previewImage: null
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 84
scoreScale: "paper-v2"
emphasis: false
---
# Role-Conditioned Sub-Token Routing for Efficient Vision-Language-Action Policies

## 研究问题与贡献

论文研究 VLA 策略长多模态 token 序列带来的显存与推理开销。已有方法主要减少视觉 token 数量，但过度剪枝会丢失整段表示。作者提出 RoleSub：不再只减少 token 数量，而是按 token 角色压缩保留 token 的 value 表示。

## 方法与系统

RoleSub 将每个保留 token 的 value 表示划分为正交子组，轻量路由器根据 token 表示、潜在角色和语言上下文决定保留哪些子组。同一机制也可作用于语言 value，实现视觉与语言压缩互补。相比 token-only 剪枝，该方法保留更多 token 而降低每个 token 的值宽度。

## 实验设置与数据

论文在 OpenVLA-OFT-7B 与四个 LIBERO 套件上评估，使用匹配视觉 KV 预算比较 token-only 控制方法，并测试语言单独压缩、视觉语言联合压缩及不同预算。

## 结果、限制与结论

论文报告在匹配视觉 KV 预算下，RoleSub 在 36 个设置中的 33 个超过训练过的 token-only 控制；视觉与语言联合压缩可将总 KV 降至原始 9.2% 至 11.3%，并在多数任务保持较强控制性能。限制是极端压缩下部分任务仍明显退化，评测集中于 LIBERO，真实机器人延迟和精度收益需进一步验证。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.18410)
- [官方 PDF](https://arxiv.org/pdf/2608.18410)
