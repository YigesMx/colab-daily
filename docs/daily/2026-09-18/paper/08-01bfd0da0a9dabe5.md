---
schemaVersion: 3
candidateId: "arxiv--2609.18016"
date: "2026-09-18"
category: "Paper"
groupRank: 8
title: "Causal-History Test-Time Scaling for Failure Recovery in Autoregressive World-Action Models"
authors: ["paper authors as listed on arXiv"]
summary: "自回归世界-动作模型（WAM）在真机执行偏离想象轨迹后，错误会留在 KV 因果历史里持续误导后续预测。FaRe 把失败恢复重构为对因果历史的测试时扩展：进度感知触发器判断何时干预、历史前缀恢复检索匹配当前物理状态的历史锚点并重建 KV、假设核验在完整历史/恢复前缀/完全重置三个假设间择优；免训练框架在仿真与真机操作上一致提升成功率，消融确认各阶段贡献。"
keywords: ["世界模型与动作预测", "具身操作与灵巧操控"]
sources: [{"name": "arXiv", "url": "https://arxiv.org/abs/2609.18016"}, {"name": "arXiv HTML", "url": "https://arxiv.org/html/2609.18016"}, {"name": "论文首图", "url": "https://arxiv.org/html/2609.18016v1/intro.png"}]
previewImage: "/daily/2026-09-18/assets/arxiv--2609.18016/preview.png"
---

## 研究问题与贡献

WAM 主要用成功轨迹训练，抓取落空后模型常继续名义动作并在闭合门前振荡；在以 LingBot-VA 为代表的自回归 WAM 中，视觉-动作 token 持久保留在 KV 缓存里，一次瞬时执行错误会长期污染条件历史。FaRe 的贡献：把恢复问题形式化为"何时改历史、从哪里恢复可靠前缀、哪种历史配置最支持后续执行"三个耦合决策，并给出免训练的三阶段实现。

## 方法与系统

阶段一进度感知恢复触发：以冻结进度奖励模型的增量估计检测持续无进展，并核验当前执行状态允许干预；阶段二历史前缀恢复：定位不可靠历史后缀，检索与当前物理状态匹配的历史锚点，按 WAM 原生缓存构造过程重放保留前缀、丢弃后缀，再以最新真实观测条件化；阶段三假设核验：对完整历史、恢复前缀、完全重置三种假设的未来延续打分并提交最优者。

## 实验设置与数据

在仿真与真机操作设置中评测任务成功率，消融分离触发、前缀恢复与假设核验各自贡献；基座为冻结的分块自回归 WAM。

## 结果、限制与结论

论文报告仿真与真机成功率一致提升，三阶段各自有效。限制：恢复依赖进度奖励模型的质量与历史锚点检索的匹配精度；额外的前向假设打分带来推理开销，高频任务的时间预算原文讨论有限；结论主要在其基座 WAM 与任务集内成立。对本组，该工作与"从失败学习"的叙事直接呼应：不重训模型而靠测试时历史管理获得鲁棒性，是 WAM 部署可靠性的实用方向。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2609.18016)
- [arXiv HTML 全文](https://arxiv.org/html/2609.18016)
- [Figure 1 首图](https://arxiv.org/html/2609.18016v1/intro.png)
