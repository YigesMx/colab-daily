---
candidateId: "arxiv--2608.24101"
businessCandidateId: "arxiv--2608.24101"
date: "2026-08-27"
category: "Paper"
title: "TrAct: Bridging Robot Control and Visual Prediction with Visual Tracks"
authors: ["arxiv.org"]
summary: "TrAct 针对机器人控制与世界模型预测之间的接口错位：机器人动作依赖具体本体，且只提供稀疏控制信号，难以约束视频生成模型产生空间精确的视觉未来。作者提出用视觉轨迹作为动作和未来视频之间的中间表示，让“可能的动作”和“该动作在图像空间造成的物体运动”成对出现，再由预测结果反向筛选动作。框架包含三部分：VLAT 同时生成候选动作与视觉轨迹；TWM 以轨迹而非原始动作为条件预测未来视频；VLAC 用视觉语言奖励模型评估预测结果并选择最优动作-轨迹对。贡献在于证明了视觉轨迹能够成为控制与预测共享、跨本"
provisionalKeywords: ["世界模型", "机器人操作", "机器人导航"]
keywords: ["世界模型", "机器人操作", "机器人导航"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.24101v1"}]
previewImage: "/daily/2026-08-27/assets/arxiv--2608.24101/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 90
scoreScale: "paper-v2"
emphasis: true
---



# TrAct: Bridging Robot Control and Visual Prediction with Visual Tracks

## 研究问题与贡献

TrAct 针对机器人控制与世界模型预测之间的接口错位：机器人动作依赖具体本体，且只提供稀疏控制信号，难以约束视频生成模型产生空间精确的视觉未来。作者提出用视觉轨迹作为动作和未来视频之间的中间表示，让“可能的动作”和“该动作在图像空间造成的物体运动”成对出现，再由预测结果反向筛选动作。框架包含三部分：VLAT 同时生成候选动作与视觉轨迹；TWM 以轨迹而非原始动作为条件预测未来视频；VLAC 用视觉语言奖励模型评估预测结果并选择最优动作-轨迹对。贡献在于证明了视觉轨迹能够成为控制与预测共享、跨本体友好的接口，并把世界模型推理真正接入动作选择。

## 方法与系统

VLAT 在当前观察和语言指令下输出多组 16 步动作与对应视觉轨迹。轨迹来自图像中的任务相关点，包含机械爪抓取点以及腕视相机中 5×5 背景点网格，并以红色与蓝色 ControlNet 通道分别注入第三人称和腕视视图，使世界模型获得稠密、视图明确的运动指导。TWM 基于稳定视频扩散结构，在 DROID 上预训练，再用 LIBERO 与真实数据微调；对照 AWM 则把动作经 MLP 编码并注入 UNet。推理时系统为每个候选轨迹滚动未来视觉结果，InternVL2 奖励模型按指令打分，最高分的轨迹所配对动作被执行。论文还引入 LIBERO-INTEGRAL，把 LIBERO-PRO/Plus 的扰动与 UR5 跨本体任务组合成更难的评价集。

## 实验设置与数据

预训练使用 76K 条 DROID 轨迹，VLAT 使用 DROID 加 EgoDex 子集；模拟微调使用 2K LIBERO episodes，真实实验用 Franka Panda、两台 RGB 相机、4 个任务和 400 条人工演示。TWM 与 AWM 使用相同数据与预算训练。模拟评估为每个任务 10 次 rollout，真实实验每个设置 10 次。论文报告标准 LIBERO、新 LIBERO-INTEGRAL、100 条生成视频的 PSNR/SSIM/LPIPS/FID/FVD，以及真实分布外背景任务。

## 结果、限制与结论

论文报告，在 LIBERO-INTEGRAL 上 TrAct 将 π0.5 的平均成功率从 27% 提升到 55%；真实任务从 49% 提升到 76%。TWM 的选择比 AWM 选择在模拟和真实域均更高，且视频预测五项指标全优于 AWM，例如模拟第三人称视图 PSNR 24.51 对 15.12、LPIPS 0.106 对 0.438。三个种子复评中 TrAct 与 AWM 置信区间不重叠，候选数 K 增大仍有收益。限制在于动作选择需要为多个候选做世界模型 rollout，推理计算随 K 增长；跨本体最差任务仍明显低于整体平均，扩大 DROID/Bridge/EgoDex 预训练只把 5 个最难 UR5 任务从 0.32 提到 0.38。对具身研究而言，这项工作说明接口设计可能和模型规模同样关键：把动作投影到可观察的图像运动，可使世界模型同时服务预测与控制。

## 来源链接

- 论文：https://arxiv.org/abs/2608.24101
- PDF：https://arxiv.org/pdf/2608.24101
