---
schemaVersion: 3
candidateId: "arxiv--2609.33581"
date: "2026-09-30"
category: "Paper"
groupRank: 9
title: "ForeFly: A Dual-Horizon World Action Model for Aerial Vision-Language Navigation"
authors: ["Kunhui Wang", "Xintong Zhang", "Junyu Gao", "Changsheng Xu"]
summary: "ForeFly 双视界潜世界-动作模型面向空中 VLN：近视界保局部连续、自适应关键路径视界供长程引导，视界专属前瞻查询由近期与关键路径视觉记忆启动，FGAR 非对称作用于动作生成；TravelUAV 与 UAV-ON 已见/未见设置一致超过强基线。"
keywords: ["空天具身智能", "视觉语言动作"]
sources: [{"name": "arXiv", "url": "https://arxiv.org/abs/2609.33581"}, {"name": "PDF 全文", "url": "https://arxiv.org/pdf/2609.33581"}, {"name": "arXiv HTML 版", "url": "https://arxiv.org/html/2609.33581"}, {"name": "项目主页", "url": "https://arxiv.org/abs/2609.33581"}, {"name": "GitHub 仓库", "url": "https://github.com/kunhuiW/ForeFly"}]
previewImage: "/daily/2026-09-30/assets/arxiv--2609.33581/preview.png"
---

## 研究问题与贡献

空中视觉-语言导航（AVLN）要求无人机在复杂三维环境中对长轨迹保持可靠的指令跟随，而现有方法多为反应式或单一视界预测，忽略了不同时间视界上互补的未来线索。ForeFly 提出双视界潜世界-动作模型，同时预测保局部连续的近视界与提供长程引导的自适应关键路径视界。

## 方法与系统

ForeFly 为两类视界设置专属前瞻查询，分别由近期视觉记忆与关键路径视觉记忆启动，提供感知历史的上下文；提出视界引导动作精化（FGAR）：非对称地利用近视界做局部动作增强、关键路径视界做特征级校正与路径级引导，让不同角色的前瞻各自作用于动作生成的相应环节。

## 实验设置与数据

在 TravelUAV 与 UAV-ON 两个空中 VLN 基准上评测，覆盖已见与未见设置，与强基线对比。

## 结果、限制与结论

论文报告：ForeFly 在两个基准的已见与未见设置中一致超过强基线，验证双视界前瞻与 FGAR 的有效性。局限：评测以仿真基准为主，真实户外动态环境（风扰、动态障碍）下的表现当前材料未确认；长视界预测的计算开销与实时性权衡未在摘要中量化。代码已开源。以上均为论文报告口径。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2609.33581)
- [PDF 全文](https://arxiv.org/pdf/2609.33581)
- [arXiv HTML 版](https://arxiv.org/html/2609.33581)
- [GitHub 仓库](https://github.com/kunhuiW/ForeFly)
