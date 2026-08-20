---
candidateId: "paper--arxiv--2608.19085"
businessCandidateId: "paper--arxiv--2608.19085"
date: "2026-08-21"
category: "Paper"
title: "DA-WAM: Decision-Aligned Future Latents for Driving World Models"
authors: ["arxiv.org"]
summary: "DA-WAM 将动作条件未来潜表示、预测监督和轨迹评分统一到一个决策目标中，在 NAVSIM v1/v2 驾驶世界模型评测上取得当前先进表现。"
provisionalKeywords: ["世界模型", "自动驾驶", "AI 基础设施"]
keywords: ["世界模型", "自动驾驶", "AI 基础设施"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.19085v1"}]
previewImage: "/daily/2026-08-21/assets/paper--arxiv--2608.19085/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 10
groupScore: 78
scoreScale: "paper-v2"
emphasis: false
---
# DA-WAM: Decision-Aligned Future Latents for Driving World Models

## 研究问题与贡献

论文指出驾驶世界模型仅预测未来还不够，预测表示必须能影响轨迹选择。DA-WAM 的贡献是把预测表示学习、动作条件未来建模和轨迹评分统一到同一个决策优化目标中。

## 方法与系统

系统用在线编码器映射当前观测，为每条候选轨迹生成独立的动作条件未来潜状态，再由未来潜状态条件化的因子化 scorer 评分。训练中，专家匹配轨迹的未来潜表示由观测未来监督，同时引入安全关键 hard negative 轨迹强化决策边界；动量目标提供稳定预测监督。

## 实验设置与数据

论文在 NAVSIM-v1 与 NAVSIM-v2 的 navtest split 上评测，指标覆盖导航合规、驾驶方向合规、碰撞时间、舒适度、效率与 PDMS，并通过消融分析未来预测配置、在线编码器适配、稠密预测损失和安全负样本。

## 结果、限制与结论

论文报告 DA-WAM 在两个 NAVSIM 版本上取得 state-of-the-art 结果，消融支持动作条件预测与 hard negative 的作用。其意义在于把预测更准转化为规划更优。限制是评测仍以仿真驾驶基准为中心，真实闭环控制、传感器噪声和长尾交互需要进一步验证。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.19085)
- [官方 PDF](https://arxiv.org/pdf/2608.19085)

![preview](/daily/2026-08-21/assets/paper--arxiv--2608.19085/preview.png)
