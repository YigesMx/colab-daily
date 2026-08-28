---
candidateId: "arxiv--2608.26800"
businessCandidateId: "arxiv--2608.26800"
date: "2026-08-29"
category: Paper
title: "Rapid On-Robot Learning for Dynamic Manipulation Skills: Robot Juggling"
authors: ["arxiv.org"]
summary: "研究提出保留不完美全局先验、用局部物理经验修正的正则化记忆学习和互可达安全集，使双臂多指手机器人在五分钟内学会五种三球抛球模式。"
provisionalKeywords: ["机器人操作", "具身智能", "实时推理"]
keywords: ["机器人操作", "具身智能", "实时推理"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.26800v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.26800"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2608.26800"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/e-print/2608.26800"}
previewImage: "/daily/2026-08-29/assets/arxiv--2608.26800/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 6
groupScore: 86
scoreScale: "paper-v2"
emphasis: false
---
# 快速在机学习动态操作技能：机器人抛球

## 研究问题与贡献

高速、间歇接触和多指手抓取使仿真模型与现实差异被放大。论文的问题不是追求零样本执行，而是当先验模型连一个完整抛接循环都无法完成时，机器人如何安全、高效地从自身物理经验中继续学习。贡献是正则化记忆学习、互可达安全集和五分钟内学会五种三球模式的系统验证。

## 方法与系统

系统将抛球拆成可复用技能。正则化记忆学习在积累的物理经验附近构建局部模型，而在经验稀疏处保留全局先验，避免从零开始探索。互可达安全集预先约束连续投掷/接住状态，防止某一步可行却把手臂带入下一步必须违反关节或执行器极限的状态。感知使用机载 RGBD 追踪三球，任务编排器监控失败并决定重置或继续。

## 实验设置与数据

硬件为 AthenaZero 双臂机器人、多指手和机载视觉。论文比较不同历史抛球系统的执行反馈、在机学习方式和物理经验量；本系统每种模式约 7-10 次尝试。学习曲线覆盖 cascade、tennis、half-shower、shower 和 box，并报告连续模式切换与安全集消融。作者还记录同一天到另一天的性能漂移和接触条件变化。

## 结果、限制与结论

系统在少于 5 分钟真实交互内学会五种三球模式；cascade 在 53 秒物理交互后达到目标循环数，共享技能使后续模式获得迁移，但 shower 和 box 未稳定达到五循环目标。互可达安全集在大量规划查询中主动约束可行但不可逆的边界状态。限制包括视觉反馈延迟无法及时修正短飞行侧抛、湿度/灰尘等接触变化会破坏已学行为，多指释放的非线性接触也使局部学习困难。作者认为更高带宽指尖感知和更好的低层策略是后续方向。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2608.26800v1)
- [PDF 全文](https://arxiv.org/pdf/2608.26800)
- [HTML 全文](https://arxiv.org/html/2608.26800)
- [TeX source](https://arxiv.org/e-print/2608.26800)
