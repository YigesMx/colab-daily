---
candidateId: "arxiv--2608.17600"
businessCandidateId: "arxiv--2608.17600"
date: "2026-08-20"
category: "Paper"
title: "LIBERO-VIFO: Benchmarking the Capability and Safety of Visual Cue Following in Vision-Language-Action Models"
authors: ["arxiv.org"]
summary: "LIBERO-VIFO 用八类视觉线索评估 VLA 的授权遵循与未授权线索风险，七个模型均暴露可被无语言指令视觉线索驱动的安全面。"
provisionalKeywords: ["安全评测", "视觉-语言-动作", "具身智能"]
keywords: ["安全评测", "视觉-语言-动作", "具身智能"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.17600"}]
previewImage: "/daily/2026-08-20/assets/arxiv--2608.17600/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 7
groupScore: 87
scoreScale: "paper-v2"
emphasis: false
---
# LIBERO-VIFO: Benchmarking the Capability and Safety of Visual Cue Following in Vision-Language-Action Models

## 研究问题与贡献

论文提出 LIBERO-VIFO，系统评估 VLA 是否能遵循授权视觉线索、忽略未授权线索。基准覆盖八类视觉线索和四个协议，分别测试理解、授权执行、语言冲突和空语言条件下的未授权执行。

## 方法与系统

基准把能力与安全拆开：授权线索用于测量视觉理解到执行的转化，未授权线索用于测量模型是否会在语言指令缺失或冲突时仍跟随视觉提示。评估还扩展到场景实例化线索、安全关键设置和真实机器人。

## 实验设置与数据

论文评估七个 VLA 模型，报告线索理解、任务执行、冲突条件与真实部署结果，并分析视觉线索形态与安全风险。

## 结果、限制与结论

论文发现视觉理解并不必然转化为可靠执行；当前 VLA 能在无语言指令时执行线索指向任务，暴露未授权视觉线索风险。真实机器人实验支持该现象。基准仍是构造化评估，不能覆盖全部物理世界对抗性线索。结论是视觉中心安全应成为 VLA 评测的独立维度。

## 来源链接

- [arXiv 论文](https://arxiv.org/abs/2608.17600)
- [arXiv HTML 全文](https://arxiv.org/html/2608.17600)
