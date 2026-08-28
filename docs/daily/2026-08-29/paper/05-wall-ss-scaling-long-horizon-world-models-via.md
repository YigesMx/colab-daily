---
candidateId: "arxiv--2608.26239"
businessCandidateId: "arxiv--2608.26239"
date: "2026-08-29"
category: Paper
title: "WALL-SS: Scaling Long-horizon World Models via Next-Scale Autoregression"
authors: ["arxiv.org"]
summary: "WALL-SS 用尺度对齐动作条件、压缩长时程记忆和在线策略对齐构建可流式扩展的动作条件世界模型，并在真实/生成闭环结果间保持较高校准。"
provisionalKeywords: ["世界模型", "实时推理", "多模态生成"]
keywords: ["世界模型", "实时推理", "多模态生成"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.26239v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.26239"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2608.26239"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/e-print/2608.26239"}
previewImage: "/daily/2026-08-29/assets/arxiv--2608.26239/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 5
groupScore: 87
scoreScale: "paper-v2"
emphasis: false
---
# WALL-SS：通过下一尺度自回归扩展长时程世界模型

## 研究问题与贡献

机器人世界模型不仅要生成可信视频，还要显式关联动作与后果、支持可变时长和流式扩展、维持长时程状态并提供可优化接口。WALL-SS 把观测和动作按时间交错组织为因果序列，并把每个未来观测按粗到细多尺度生成，从而统一动作条件仿真、流式记忆和策略评估。

## 方法与系统

模型包含三部分。Action-conditioned next-scale prediction 在每个尺度上注入尺度对齐动作表示，加强动作-未来耦合；Scale-compressed long-horizon memory 在有界内存内保留近期细粒度交互并逐步压缩远处观测和动作，配合 dream forcing 提高对自生成上下文的鲁棒性；On-policy alignment 将下一尺度生成视为随机策略，用动作跟随和长期一致性奖励优化新生成 rollout，同时约束视觉分布。

## 实验设置与数据

训练数据包含完整 AgiBotWorld-Beta 的 987,508 个标注 clip（来自 165,560 个源视频）、ManipArena、内部 X2-Robot、UMI、人类接管和失败恢复轨迹。动作条件只分配给同步与标定可靠的数据；视觉有效但几何控制不可靠的数据进入视频-only 池。评估包含 200 个分布内和 100 个分布外任务的 embodied video benchmark，并在 30 个任务-checkpoint 单元、600 对匹配 episode 中比较生成与真实闭环结果。

## 结果、限制与结论

在生成评测中，WALL-SS 的交互质量、指令跟随、轨迹精度和深度精度均领先或接近最强基线，并支持分钟级有界内存流式 rollout。闭环校准方面，任务级成功率 MAE 为 0.062，相关系数 0.93；59 个真实排序对中保留 89%，平均 Spearman 0.88；600 对 episode 的 balanced accuracy 为 0.88，成功/失败召回分别为 0.90/0.86。作者也披露风险模式：332 个真实失败中有 45 个在生成 rollout 中仍被预测为成功，接触阶段误差最大，因此它还不是完全保守的策略评估器。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2608.26239v1)
- [PDF 全文](https://arxiv.org/pdf/2608.26239)
- [HTML 全文](https://arxiv.org/html/2608.26239)
- [TeX source](https://arxiv.org/e-print/2608.26239)
- [代码仓库](https://github.com/X-Square-Robot/wall-ss)
