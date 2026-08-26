---
candidateId: "arxiv--2608.24885"
businessCandidateId: "arxiv--2608.24885"
date: "2026-08-27"
category: "Paper"
title: "Do Robotic World Models Really Follow Actions? Diagnosing and Aligning Action-Conditioned Generation for Policy Learning"
authors: ["arxiv.org"]
summary: "这篇论文质疑动作条件世界模型的基本假设：给定一条合法动作，生成模型是否真的按该动作改变未来。作者指出以往评测多围绕专家演示动作，容易掩盖模型在偏离专家分布的控制下失效的问题。WorldEcho 因此把动作跟随评测扩展到专家、局部扰动、跨状态重放、策略 rollout 和可行空间采样等查询类型，并同时衡量视觉完整性与 SE(3) 末端轨迹一致性。WorldSync 则从三方面改进：扩大动作后果训练覆盖、用 Action-Forcing Expert 让中间视频表征接地机器人轨迹、用 Interve"
provisionalKeywords: ["世界模型", "机器人操作", "生成式模型"]
keywords: ["世界模型", "机器人操作", "生成式模型"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.24885v1"}]
previewImage: "/daily/2026-08-27/assets/arxiv--2608.24885/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 89
scoreScale: "paper-v2"
emphasis: true
---



# Do Robotic World Models Really Follow Actions? Diagnosing and Aligning Action-Conditioned Generation for Policy Learning

## 研究问题与贡献

这篇论文质疑动作条件世界模型的基本假设：给定一条合法动作，生成模型是否真的按该动作改变未来。作者指出以往评测多围绕专家演示动作，容易掩盖模型在偏离专家分布的控制下失效的问题。WorldEcho 因此把动作跟随评测扩展到专家、局部扰动、跨状态重放、策略 rollout 和可行空间采样等查询类型，并同时衡量视觉完整性与 SE(3) 末端轨迹一致性。WorldSync 则从三方面改进：扩大动作后果训练覆盖、用 Action-Forcing Expert 让中间视频表征接地机器人轨迹、用 Intervention-Effect 监督对齐“动作改变导致的预测差分”。

## 方法与系统

WorldEcho 用视觉 gate 判定 rollout 是否有效，并用归一化动态时间规准误差比较生成轨迹与真实轨迹；无效 rollout 在官方指标中被固定罚分，避免视觉坏样本因轨迹误差偶然较小而得分。WorldSync 使用共享的机器人基座坐标系相对末端位移动作空间，把模拟中的专家、扰动、重放、策略和可行动作与少量目标域真实演示混合。视频骨干用 flow matching 训练，Action-Forcing Expert 通过轨迹 query 交叉读取中间视频特征并解码未来 SE(3) 轨迹，但不直接读写动作；干预效果损失在同一观察、指令和噪声下比较 A/B 动作的预测差分与真实未来差分。最终目标为标准视频生成损失、AFE 轨迹损失和 IE 差分损失的加权和。

## 实验设置与数据

主评测覆盖 50 个 RoboTwin 操作任务和五类动作查询；组件分析用 4 个 RoboTwin 任务。基线包括 CtrlWorld、Cosmos-Predict2.5、Cosmos3、DreamDojo、Motus 和 LingBotVA，并比较专家演示与扩展动作覆盖两种训练方式。策略改进实验采用 VLAW 协议，在固定初始策略、交互、世界模型 rollout 与训练预算下比较两轮迭代改进；真实机器人任务为 stacking-cups。论文报告完整性门控误差、raw NDTW、视觉通过率及任务宏平均。

## 结果、限制与结论

诊断显示六个专家训练模型的 off-expert 完整性门控误差增加 0.029-0.099 米，raw NDTW 增加 0.010-0.043 米，视觉失败率增加 6.3-28.1 个百分点。扩展覆盖后各骨干轨迹对齐均改善。完整 WorldSync 在 50 任务上达到门控误差 0.0661、视觉通过率 84.51%，均略优于最强基线，但 Cosmos-Predict2.5 的 raw NDTW 更低，说明其优势来自轨迹与视觉平衡而非全面支配。策略改进中，RoboTwin 从 51-52% 起步，两轮后到 65%，比 CtrlWorld 高 8-9 个百分点；真实任务从 48% 到 68%，对照为 56%。局限在于 WorldEcho 仍以 RoboTwin 与单一真实任务为主，长时序、开放世界和更多本体未覆盖；WorldSync 使用 60k 更新而部分基线为 20k/40k，虽然作者称是 designated endpoint，仍需注意预算差异。评测协议本身对世界模型作为模拟器的可信度有直接价值。

## 来源链接

- 论文：https://arxiv.org/abs/2608.24885
- PDF：https://arxiv.org/pdf/2608.24885
