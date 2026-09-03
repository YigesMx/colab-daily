---
candidateId: "arxiv--2609.02159"
date: "2026-09-04"
category: Paper
title: "World-Coherent Decoding：让世界动作模型在执行前自我校验"
authors: ["arxiv.org"]
summary: "WCD 将 WAM 的随机 rollout 视为可证伪的「未来-动作」假设，用视频 surprisal 与动作路径代价排序候选，再用想象-现实失配在线训练可靠性预测器；在 RoboTwin 2.0 困难泛化协议下将平均成功率提升 5.10 点、Horizon-3 成功率提升 16.43 点。"
keywords:
  - 世界模型
  - 机器人操作
  - 视频生成与扩散
sources:
  - { "name": "arxiv.org", "url": "https://arxiv.org/abs/2609.02159v1" }
previewImage: "/daily/2026-09-04/assets/arxiv--2609.02159/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 84.0
scoreScale: "paper-v2"
emphasis: true
---

# World-Coherent Decoding：让世界动作模型在执行前自我校验

世界动作模型通过随机生成视觉未来再解码动作来控制机器人，但实证观察表明结果强烈依赖「选中哪个未来」。本文提出 World-Coherent Decoding（WCD），在测试时对 WAM 候选进行自校验式选择。

## 研究问题与贡献

核心问题：WAM 的随机采样不保证下游可用性，选错未来会导致动作失败。贡献：把 WAM rollout 形式化为可证伪的「未来-动作」假设；提出不更新模型权重的测试时候选排序框架；以及把延迟自验证转化为执行前可靠性估计的在线预测器。

## 方法与系统

每个决策步从冻结 WAM 采样多个候选；用两类内部生成信号排序：基于光流的视频 surprisal 度量视觉合理性，动作路径代价度量动作生成稳定性。执行后用真实观测审计被选中的想象，得到「想象-现实失配」，训练一个轻量在线预测器用于后续候选选择。整个过程不改动 WAM 权重，属于纯测试时可叠加的规划层。

## 实验设置与数据

评测在 RoboTwin 2.0 双臂操作基准上进行，覆盖 50 个任务、多样物体交互、多步执行与长时程技能；标准协议使用 2.5k 干净演示加 25k 强随机化演示的混合预训练骨干，在 Easy 与 Hard 配置上评测，另有困难泛化协议下的消融。

## 结果、限制与结论

论文报告：困难泛化协议下相对基础 WAM 平均成功率 +5.10 点、Horizon-3 成功率 +16.43 点；消融表明收益来自结构化选择而非单纯增加采样数。限制：排序信号依赖光流与动作解码的内部统计，在极端外观变化下的可靠性原文未完全量化；额外采样带来推理开销，实时性边界待核验；方法假设冻结 WAM 已有基本能力。结论：这是 WAM 可靠性工程中「测试时自我校验」方向的清晰示范。

## 来源链接

- 论文页：https://arxiv.org/abs/2609.02159
- HTML 全文：https://arxiv.org/html/2609.02159
