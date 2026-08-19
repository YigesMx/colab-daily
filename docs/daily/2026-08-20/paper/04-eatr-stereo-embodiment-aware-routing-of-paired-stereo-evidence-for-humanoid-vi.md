---
candidateId: "arxiv--2608.17453"
businessCandidateId: "arxiv--2608.17453"
date: "2026-08-20"
category: "Paper"
title: "EATR-Stereo: Embodiment-Aware Routing of Paired Stereo Evidence for Humanoid Vision-Language-Action Control"
authors: ["arxiv.org"]
summary: "EATR-Stereo 为头戴双目 VLA 人形控制引入本体感知路由，在 33 自由度实体人形上报告完整任务成功率 60%、抓取成功率 100%。"
provisionalKeywords: ["人形机器人", "视觉-语言-动作", "机器人操作", "具身智能"]
keywords: ["人形机器人", "视觉-语言-动作", "机器人操作", "具身智能"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.17453"}]
previewImage: "/daily/2026-08-20/assets/arxiv--2608.17453/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 90
scoreScale: "paper-v2"
emphasis: false
---
# EATR-Stereo: Embodiment-Aware Routing of Paired Stereo Evidence for Humanoid Vision-Language-Action Control

## 研究问题与贡献

论文解决人形 VLA 如何利用双目辅助视角而不破坏预训练主视角通路的问题。EATR-Stereo 保留主视角 token，并生成与主视角对齐的 Cross-View Auxiliary Tokens，同时用本体状态历史调节辅助证据使用。

## 方法与系统

系统包含跨视角辅助 token 构造和身体分段本体感知编码器。双目证据只作为语言与主视觉上下文的增量信息进入冻结 VLM，路由过程显式考虑机器人构型，从而降低无关视觉 token 干扰。

## 实验设置与数据

论文在 33 DoF、37 维本体状态的真实人形平台上评估超过 100 秒的搜索、接近、抓取、放置与返回任务，比较九种配置并做遮挡恢复与消融。

## 结果、限制与结论

论文报告完整任务成功率 60.0%，抓取成功率 100.0%，阶段成功率 80.0%；严重非对称遮挡下恢复率从 30% 提高到 80%。消融支持保留主视角 token 与结构化本体路由的必要性。任务仍限于特定长时程操作套件，跨场景与更复杂接触的泛化待验证。结论是本体感知的双目证据路由能改善人形 VLA 空间 grounding。

## 来源链接

- [arXiv 论文](https://arxiv.org/abs/2608.17453)
- [arXiv HTML 全文](https://arxiv.org/html/2608.17453)
