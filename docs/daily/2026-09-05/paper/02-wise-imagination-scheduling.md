---
candidateId: "arxiv--2609.03681"
date: "2026-09-05"
category: Paper
title: "WISE：用世界模型想象调度高效后训练 VLA 策略"
authors: ["arxiv.org"]
summary: "WISE 协调「何时想象、想象多远、如何转化为监督」三个问题：仅在交互相关状态触发世界模型 rollout，有界多视角想象后用进度/完成信号评估候选动作，以相对结果 refine 真实上下文中的动作；在 π0 与 π0.5 上跨五个 MimicGen 任务持续提升，GPU 计算时间较全量想象降低约 80%，真机（Galaxea R1 Lite）在分布偏移下仍显著增益。"
keywords:
  - 世界模型
  - VLA 与机器人操作
sources:
  - { "name": "arxiv.org", "url": "https://arxiv.org/abs/2609.03681v1" }
previewImage: "/daily/2026-09-05/assets/arxiv--2609.03681/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 86.0
scoreScale: "paper-v2"
emphasis: true
---
# WISE：用世界模型想象调度高效后训练 VLA 策略

**一句话结论**：WISE 把世界模型后训练从「处处想象」变为「按需想象」：只在交互关键状态做有界想象，并把想象结果的相对优劣转化为策略监督，在 π0/π0.5 上以约 1/5 的计算量取得更稳的操控提升。

## 研究问题与贡献

预训练 VLA 的后训练要么依赖昂贵的专家演示微调，要么承受真实探索的不稳定与碰撞风险。世界模型可以评估候选行为的想象未来，但有效后训练要求：想象发生在有用的地方、 rollout 被限制在可靠视界内、想象结果被转化为可信的策略监督。WISE（World-model-guided Imagination Scheduling）把这三点形式化为一个统一的想象-评估-优化循环，是「世界模型 × VLA 后训练」方向上系统化的框架工作。

## 方法与系统

框架包含四个协同组件：(1) 想象调度器——以 DINOv2 ViT-L/14 编码腕部与第三人称双视角，轻量 MLP 预测当前状态的「交互相关性」，只在高分状态触发想象；(2) 有界多视角 rollout——从被选中的真实上下文出发，世界模型（DROID 预训练 + 任务演示适配）对候选动作块做多视角想象；(3) 轨迹评估器——把进度信号与终局完成信号融合为相对反馈，置信度加权并惩罚倒退；(4) 策略精化——冻结世界模型与 VLA 骨干，仅优化动作头，更新始终锚定在真实交互上下文。每个被选上下文累计 256 条 rollout 后更新一次。

## 实验设置与数据

仿真在五个 MimicGen 任务（Stack、Coffee、Square、Threading、Mug Cleanup）上评估，覆盖物体放置、铰接交互、接触密集插接与长时程操作；基线含 SFT 与多种后训练方法。真机在 Galaxea R1 Lite 平台上进行，输入腕部+第三人称 RGB 与本体状态，任务按时长与复杂度递进（Pick Cube → Stack Two Cubes 等），并另设物体/场景配置变化的泛化组。世界模型预训练用完整 DROID（16×A800 约 7 天），任务适配 8×A800 约 10 小时/任务。

## 结果、限制与结论

论文报告：π0 与 π0.5 在全部五个仿真任务上一致超越对比后训练方法；相对全量想象减少约 80% GPU 计算时间且成功率更高（消融显示许多想象状态提供冗余监督）；真机在多种分布偏移下显著增益。作者指出的局限：想象视界固定、调度监督较粗，未来可基于预测不确定度做自适应视界；向更多本体与更长时程任务扩展待验证。

## 来源链接

- 论文原文：https://arxiv.org/abs/2609.03681
- HTML 全文：https://arxiv.org/html/2609.03681v1
