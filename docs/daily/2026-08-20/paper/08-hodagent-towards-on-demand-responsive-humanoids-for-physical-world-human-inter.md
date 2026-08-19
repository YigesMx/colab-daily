---
candidateId: "arxiv--2608.17584"
businessCandidateId: "arxiv--2608.17584"
date: "2026-08-20"
category: "Paper"
title: "HODAgent: Towards On-Demand, Responsive Humanoids for Physical World Human Interaction"
authors: ["arxiv.org"]
summary: "HODAgent 用半双工系统架构让服务型人形机器人处理动态请求、任务修订与结果核验，报告仿真 Joint Success 最高 91.5%，真实完整任务通过率 63.3%。"
provisionalKeywords: ["人形机器人", "具身智能", "产业落地"]
keywords: ["人形机器人", "具身智能", "产业落地"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.17584"}]
previewImage: "/daily/2026-08-20/assets/arxiv--2608.17584/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 8
groupScore: 86
scoreScale: "paper-v2"
emphasis: false
---
# HODAgent: Towards On-Demand, Responsive Humanoids for Physical World Human Interaction

## 研究问题与贡献

论文面向服务场景中的人形机器人交互，提出 System-2 代理 HODAgent。它关注运动中的新请求、任务状态保持、行动修订与执行结果闭环，而不只是单轮指令跟随。

## 方法与系统

架构包含环境交互器、规划器、执行器和层次记忆，通过共享接口连接仿真与 Unitree G1 实体平台，并隔离平台专属控制。系统在半双工交互中维护计划、任务状态和验证证据，支持服务回合内的中断与恢复。

## 实验设置与数据

论文构建 164 个交互仿真案例，比较两种 VLM 骨干与基线，并在真实机器人上评估原子任务、复合任务和完整任务通过率，另报告多个具身基准结果。

## 结果、限制与结论

论文报告两种 VLM 下仿真 Joint Success 分别为 84.8% 和 91.5%，相对基线提升 9.8 与 18.9 点；真实机器人原子、复合与完整任务通过率分别为 92%、72% 和 63.3%。复杂开放场景中的长时程可靠性和错误恢复仍待扩展。结论是统一 System-2 代理有助于自适应人形服务。

## 来源链接

- [arXiv 论文](https://arxiv.org/abs/2608.17584)
- [arXiv HTML 全文](https://arxiv.org/html/2608.17584)
