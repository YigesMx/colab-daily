---
candidateId: "url--https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F2076690728529482565"
businessCandidateId: "url--https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F2076690728529482565"
date: "2026-08-29"
category: News
title: "从预测未来到评价后果，ActEffect 给世界模型换了个位置"
authors: ["zhuanlan.zhihu.com"]
summary: "光象科技与清华大学团队发布 ActEffect：训练期用受控世界模型比较三份动作提案的后果，部署期移除世界模型 rollout，只保留约 4.6B 参数策略。"
provisionalKeywords: ["世界模型", "机器人操作", "产业合作"]
keywords: ["世界模型", "机器人操作", "产业合作"]
sources:
  - {"name": "zhuanlan.zhihu.com", "url": "https://zhuanlan.zhihu.com/p/2076690728529482565"}
previewImage: "/daily/2026-08-29/assets/url--https_3a_2f_2fzhuanlan.zhihu.com_2fp_2f2076690728529482565/preview.png"
schemaVersion: 3
ratingTrack: "news"
groupRank: 7
groupScore: 85
scoreScale: "news-v3"
emphasis: false
---
# 光象科技与清华团队发布 ActEffect 物理原生世界模型

## 事件概述

具身智能之心报道，光象科技联合清华大学李升波教授课题组发布第一代物理原生世界模型 Phi-WM 1.0 ActEffect。ActEffect 将世界模型主要用于训练阶段评估动作后果，部署阶段移除在线世界模型 rollout，只保留动作策略执行，以缓解显式预测未来带来的延迟。

## 已确认事实与证据

报道称，ActEffect 的策略侧使用 Qwen3-VL 4B 视觉语言骨干和 DiT 动作头，采用 Minimal Iterative Policy 生成动作；世界模型侧为 4 层、隐藏维度 768 的 Transformer，在冻结 DINOv3 潜在空间中预测动作后果。训练时，模型比较前馈动作、粗粒度动作和精修动作三份提案的未来状态，用反事实后果排序促使精修动作更接近专家示范未来；部署时移除世界模型和未来观测分支，整套部署策略参数约 46 亿。

发布方通过报道给出的评测结果为：LIBERO 平均成功率 98.8%，LIBERO-PLUS 80.3%，RoboCasa-GR1 67.5%；其中 RoboCasa-GR1 使用 Fourier GR-1 人形机器人，动作空间 29 维。上述架构与指标均来自项目方供稿，当前来源页对自动化访问返回 403，未提供可独立读取的论文或代码链接，本文按发布方称处理。

## 影响与后续观察

ActEffect 的路线把世界模型从“部署时生成未来”转为“训练时评价后果”，若结果可复现，可为实时机器人控制提供更低延迟的世界模型利用方式。它也提示具身智能数据团队，遥操作轨迹中的未来画面本身可以作为动作后果监督，不必额外人工标注奖励；同一状态下的多份动作提案也能在世界模型中形成可比较的反事实训练信号。但失败、碰撞和恢复样本的覆盖仍会决定模型理解的边界。后续需要验证真实机器人任务、动作安全约束、跨 embodiment 泛化，以及训练阶段反事实比较是否会引入新的偏差。论文、代码和独立基准结果发布前，不宜把榜单数字视为独立结论；尤其应区分仿真成绩、真实机器人验证和厂商叙事之间的证据强度，并记录每项结果对应的任务分布与失败样本。

## 来源链接

- [具身智能之心报道](https://zhuanlan.zhihu.com/p/2076690728529482565)