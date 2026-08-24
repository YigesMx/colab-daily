---
candidateId: "arxiv--2608.20735"
businessCandidateId: "arxiv--2608.20735"
date: "2026-08-25"
category: "Paper"
title: "ForeTime-VLA：把世界模型的未来感蒸馏进传送带操作策略"
authors: ["arxiv.org"]
summary: "ForeTime-VLA 从冻结 Fast-WAM 教师蒸馏因果 future-token，不在线生成视频；真实机器人慢速移动抓取成功率 58.9%，比 π0.5 基线高 22.2 个百分点，延迟仅增加约2.5%-2.9%。"
provisionalKeywords: ["机器人操作", "世界模型", "视觉语言动作模型"]
keywords: ["机器人操作", "世界模型", "视觉语言动作模型"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.20735v1"}]
previewImage: "/daily/2026-08-25/assets/arxiv--2608.20735/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 87
scoreScale: "paper-v2"
emphasis: true
---
# ForeTime-VLA：把世界模型的未来感蒸馏进传送带操作策略

## 研究问题与贡献

移动对象操作要求策略预判接触时间和姿态，但常见 VLA 只以当前观测为条件。直接部署视频级 world action model 又会带来推理开销。论文提出 ForeTime-VLA，把未来表征离线蒸馏进 dense π0.5 策略，使部署时无需显式想象未来帧。

核心贡献包括因果 future-token 蒸馏、阶段/时间条件、慢/快双路径注入，以及传送带移动对象数据集与真实机器人评测。论文报告其在动作重建和真实抓取上超过 π0.5 基线，并保持较低延迟。

## 方法与系统

教师来自冻结的 Fast-WAM 派生 world action model，提供未来感知特征。学生学习一个 1.251M 参数的时序模块和五个 slow-prefix token，将未来特征、阶段/时间条件注入 π0.5。慢路径关注较长时间结构，快路径关注即时动作，双路径可互补。

训练目标保持基础 VLA 动作目标，同时约束蒸馏后的 future representation。推理时不需要视频教师在线运行，因此额外开销主要来自小型时序模块和少量 token。

## 实验设置与数据

论文构建覆盖 stationary grasp、mobile tracking、navigate-then-grasp 和并发任务的传送带数据集。离线评估使用 40k-step checkpoint，报告 validation/test 的 MSE、MAE、L2 和动作组误差；真实机器人第一轮实验在固定和慢速移动任务上每方法 90 次，另在慢/中/快三档速度上每方法 30 次。对比模型包括 π0.5、GR00T N1.6、StarVLA 和 SmolVLA。本次 refine 已读取 PDF、TeX、方法图和结果表。

## 结果、限制与结论

论文报告 validation/test MAE 分别改善 2.96% 和 2.63%，test L2 改善 3.02%；末端 RPY 的 MAE 改善为 validation 4.12%、test 3.78%。真实固定任务成功率为 81.11%，高于次优 StarVLA 12.2 个百分点；慢速移动任务成功率 58.89%，高于次优 π0.5 22.2 个百分点。相对 π0.5，早失败、晚失败和接触姿态错误分别降低 15.8%、37.5% 和 57.1%。延迟从 66.97 ms 增至 68.62 ms，约 2.46%。

限制是实验集中于传送带抓取和 π0.5 系骨干；论文的 cross-family 对比使用不同 checkpoint 和步数，作者只作为参考而非完全同预算比较。更高速度、非结构化碰撞和更复杂接触模式下的表现当前材料未完整报告。

## 来源链接

- 论文：https://arxiv.org/abs/2608.20735
- PDF：https://arxiv.org/pdf/2608.20735
- arXiv 源码：https://arxiv.org/e-print/2608.20735
