---
candidateId: "arxiv--2608.15816"
businessCandidateId: "arxiv--2608.15816"
date: "2026-08-19"
category: "Paper"
title: "ViTaR: Visuo-Tactile Residual Adaptation for Foundation VLA Manipulation"
authors: ["arxiv.org"]
summary: "ViTaR 把触觉作为冻结 OpenVLA-OFT 上的有界残差调制器，论文报告 UniVTAC 平均成功率从 30.7% 提升到 61.3%，物理任务平均达到 48.3%。"
provisionalKeywords: ["触觉感知", "VLA", "残差学习", "接触操作"]
keywords: ["视觉语言动作", "触觉感知"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.15816v1"}]
previewImage: "/daily/2026-08-19/assets/arxiv--2608.15816/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 6
groupScore: 84
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.15816 -->
# ViTaR：用有界触觉残差调制冻结 VLA 的接触密集操作

## 研究问题与贡献

论文处理 VLA 在接触密集任务中的盲区：外部相机难以判断接触是否建立、丢失、滑动或不稳定，而冻结 VLA 对这些不同接触状态可能输出相同动作。直接把触觉并入动作生成可能覆盖预训练视觉-语言先验，在线强化学习又要求机器人在安全裕度最小的近失败接触状态下探索。

ViTaR 的核心贡献是把触觉从“生成动作的感知输入”改成“执行调制器”。系统在冻结 OpenVLA-OFT 之上选择并缩放有界残差修正，不修改基础模型表征，不生成新的语义动作方向。论文报告称，该方法在 UniVTAC 七个接触密集任务上达到 61.3% 平均成功率，比冻结基础策略高 30.6 个百分点。

## 方法与系统

框架由 Effect-Guided Modeling（EGM）和 Residual Action Modulation（RAM）组成。EGM 在恢复到同一局部决策点的短时程分支 rollout 中比较“保留基础动作”和若干结构化残差选项，学习该状态是否可改进以及各候选的相对效果。残差方向来自冻结 VLA 动作块的主要符号成分，例如局部平移和夹爪增量，并被限制在有界字典内。

RAM 部署时不直接执行 EGM 分数。标记运动导出的接触描述子决定是否介入和选择哪个残差，触觉图像摘要决定连续增益。对 H 步动作块，同一个缩放残差在整个块内保持一致。由于监督来自同一状态恢复后的分支比较，系统不需要跨异构接触状态全局校准奖励，也避免用绝对回报比较不同状态。

## 实验设置与数据

UniVTAC 评测覆盖抬瓶、拔钥匙、抬罐、放瓶、插 HDMI、插管和抓取分类七个任务，每个方法-任务 100 个 episode，以端到端二值成功率为指标。基线包括 ACT、VITaL、ACT+UniVTAC、Tactile-VLA、π0.5 和冻结 OpenVLA-OFT。物理机器人实验包括插孔、擦白板和抬瓶三个任务，每任务 20 次；ViTaR 每任务使用 20 个恢复决策组做分支监督，其聚合执行时长短于微调 OpenVLA-OFT 的 50 条专家演示。

消融比较直接 PPO-option 和 SAC-residual、移除标记接触描述子或触觉摘要、固定缩放，以及 EGM 和 RAM 内部证据来源。论文还报告恢复率、保持率、不安全/提前终止率和 held-out 排序准确率作为诊断，但这些诊断不作为部署输入。

## 结果、限制与结论

论文报告，ViTaR 在 UniVTAC 七任务平均 61.3%，冻结基础为 30.7%；七个任务均相对基础提升，但并非每项第一，π0.5 在抬罐上为 70% 高于 ViTaR 的 44%，Tactile-VLA 在抬瓶上为 97% 高于 ViTaR 的 88%。物理任务平均为 48.3%，比 OpenVLA-OFT 高 30.0 个百分点，其中插孔和擦白板各 40%，抬瓶 65%。消融中，移除标记接触描述子使匹配恢复从 0.79 降到 0.46，移除触觉摘要使平均成功率降到 46%，固定缩放为 45%；完整 EGM 设计把 held-out 正/基础排序从 0.63/0.60 提升到 0.83/0.88。

论文明确指出，ViTaR 的绝对性能受基础策略语义动作质量限制；物理实验只有三任务、每任务 20 次，只能提供有限迁移证据。本文分析认为，残差候选集和恢复式分支采集仍是任务相关工程选择，方法尚未扩展到多指异构触觉和更长时程任务。其清晰贡献在于证明了触觉可以作为安全、可审计的局部执行调制，而不必接管 VLA 的全局动作生成。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.15816v1)
- [官方项目页](https://icr-lab.github.io/ViTaR)

