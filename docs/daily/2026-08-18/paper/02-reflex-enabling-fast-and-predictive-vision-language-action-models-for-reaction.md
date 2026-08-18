---
candidateId: "arxiv--2608.14379"
businessCandidateId: "arxiv--2608.14379"
date: "2026-08-18"
category: "Paper"
title: "Reflex: Enabling Fast and Predictive Vision-Language-Action Models for Reaction-Critical Manipulation"
authors:
  - "arxiv.org"
summary: "ReflexBench 面向反应关键操作引入可控延迟评估，ReflexVLA 通过潜在未来预测、多帧时序融合和推理加速在 1B 参数规模上实现动态操作改进。"
provisionalKeywords:
  - "视觉语言动作"
  - "机器人学习"
  - "数据与基准"
keywords:
  - "视觉语言动作"
  - "机器人学习"
  - "数据与基准"
sources:
  - name: "arxiv.org"
    url: "https://arxiv.org/abs/2608.14379v1"
previewImage: "/daily/2026-08-18/assets/arxiv--2608.14379/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 86
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.14379 -->
# Reflex: Enabling Fast and Predictive Vision-Language-Action Models for Reaction-Critical Manipulation

## 研究问题与贡献

现有 VLA 基准多关注静态操作，难以评估动态环境中感知到执行的延迟。论文贡献是六个动态任务的 ReflexBench、可配置同步/异步推理的评估协议，以及不需要大规模机器人预训练的 ReflexVLA。

## 方法与系统

ReflexBench 将仿真器步进与机器人控制解耦，用实测策略延迟折算成阻塞时间。ReflexVLA 在视觉 backbone 中加入冻结 DINOv3 目标的潜在未来预测与中间特征多帧融合，并用批量视觉编码和 CUDA Graph replay 降低部署延迟。

## 实验设置与数据

评估包含传送带抓放、接球、打地鼠、滚球拦截、掷球与旋转插销，另在 LIBERO 验证静态能力，并在传送带、按钮和接球三个真实任务上测试。基线包括 OpenVLA-OFT、π0.5、PUMA、DynamicVLA、SmolVLA 与 VLA-Adapter。

## 结果、限制与结论

ReflexVLA 在 ReflexBench 平均成功率 50.4%，与 PUMA 50.2% 相当且高于 1B 基线 30.3%；LIBERO 平均 97.2%。渐进消融中成功率从 36.8% 升至 73.8%，延迟由 125.1ms 降至 65.0ms；真实任务为 16/20、22.5 和 6.7。限制是未来预测和时序融合仅在微调阶段引入，未探索 RTC 等更复杂推理机制。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.14379v1>
- 项目页：<https://reflexvla.github.io/>
