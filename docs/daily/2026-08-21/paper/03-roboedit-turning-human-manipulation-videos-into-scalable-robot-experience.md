---
candidateId: "paper--arxiv--2608.18948"
businessCandidateId: "paper--arxiv--2608.18948"
date: "2026-08-21"
category: "Paper"
title: "RoboEdit: Turning Human Manipulation Videos into Scalable Robot Experience"
authors: ["arxiv.org"]
summary: "RoboEdit 将人类操作视频转换成动作一致、物理合理的机器人视频，并生成跨 7 种机器人形态、14M 帧的 RoboEdit-14M 数据集。"
provisionalKeywords: ["机器人数据", "跨形态泛化", "具身智能"]
keywords: ["机器人数据", "跨形态泛化", "具身智能"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.18948v1"}]
previewImage: "/daily/2026-08-21/assets/paper--arxiv--2608.18948/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 86
scoreScale: "paper-v2"
emphasis: true
---
# RoboEdit: Turning Human Manipulation Videos into Scalable Robot Experience

## 研究问题与贡献

论文处理机器人手-物交互数据昂贵且高度依赖特定形态的问题。作者提出 RoboEdit 套件，把大量人类操作视频编辑为动作一致、物理合理且带三维手部状态的机器人视频，为可扩展机器人学习提供视觉与运动监督。

## 方法与系统

RoboEdit-ADC 从 RGB 视频重建并重定向三维交互，经深度与物理约束细化后合成前景与背景。核心编辑器 RoboEdit-Trans 使用 LoRA 和残差适配模块保持时序一致，同时改变外观与动作以适配机器人形态；三维 Robot-State Decoder 从编辑视频恢复逐帧机器人状态，使视频可服务结构化策略训练。

## 实验设置与数据

论文构建 RoboEdit-14M：17.4 万条对齐视频对、1400 万帧，覆盖 7 种机器人形态、多场景和多种交互。评估包括重建、局部编辑、背景保持与视频质量指标，并与视频编辑基线比较；下游实验检查数据对真实操作策略的支持。

## 结果、限制与结论

论文报告 RoboEdit 在编辑质量和跨形态状态恢复上达到当前先进水平，并支持真实机器人操作策略。该工作显著降低了人类视频到机器人经验的转换门槛。限制在于编辑质量仍依赖重建与物理细化，复杂接触、透明或变形物体和任务成功率的外推需要更多真实验证。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.18948)
- [官方 PDF](https://arxiv.org/pdf/2608.18948)

![preview](/daily/2026-08-21/assets/paper--arxiv--2608.18948/preview.png)
