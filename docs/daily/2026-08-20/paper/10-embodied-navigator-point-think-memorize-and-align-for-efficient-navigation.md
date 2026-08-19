---
candidateId: "arxiv--2608.17512"
businessCandidateId: "arxiv--2608.17512"
date: "2026-08-20"
category: "Paper"
title: "Embodied-Navigator: Point, Think, Memorize, and Align for Efficient Navigation"
authors: ["arxiv.org"]
summary: "Embodied-Navigator 用“点选像素—3D 投影—SLAM 控制”的方式对齐 VLM 与机器人导航，并报告 R2R-CE 成功率 66.2%。"
provisionalKeywords: ["具身智能", "世界模型", "视觉-语言-动作"]
keywords: ["具身智能", "世界模型", "视觉-语言-动作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.17512"}]
previewImage: "/daily/2026-08-20/assets/arxiv--2608.17512/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 10
groupScore: 84
scoreScale: "paper-v2"
emphasis: false
---
# Embodied-Navigator: Point, Think, Memorize, and Align for Efficient Navigation

## 研究问题与贡献

论文针对 VLM 直接输出导航动作时与 2D 预训练先验不匹配的问题，提出 TAMP-Nav。核心是让 VLM 只选择 2D 像素，再投影为 3D 坐标交给低层 SLAM 控制器。

## 方法与系统

框架包含 Pixel-to-3D 动作表达、选择性推理与锚轨迹记忆。模型只在关键节点触发 Chain-of-Thought，压缩冗余轨迹为轻量时空指标；训练阶段用两级 GRPO 对齐，结合全局结果奖励与过程奖励。

## 实验设置与数据

论文在 R2R-CE 等具身导航基准上评估成功率和运行效率，并报告训练轨迹需求为 90k。

## 结果、限制与结论

论文报告 R2R-CE 成功率 66.2%，并称方法在运行与样本效率上具有优势。当前材料主要覆盖视觉语言导航基准，复杂动态障碍、真实机器人控制误差和多楼层长程任务仍待进一步验证。结论是保持 VLM 的 2D 点选接口、把 3D 执行交给控制器可减少动作空间错配。

## 来源链接

- [arXiv 论文](https://arxiv.org/abs/2608.17512)
- [arXiv HTML 全文](https://arxiv.org/html/2608.17512)
