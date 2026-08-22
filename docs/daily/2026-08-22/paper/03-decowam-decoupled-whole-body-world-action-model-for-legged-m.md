---
candidateId: "paper--arxiv--2608.20114"
businessCandidateId: "paper--arxiv--2608.20114"
date: "2026-08-22"
category: "Paper"
title: "DECOWAM: Decoupled Whole-Body World-Action Model for Legged Mobile Manipulation"
authors: ["arxiv.org"]
summary: "清华、上海 AI Lab、哈工大与云深处提出面向足式移动操作的全身世界-动作模型 DECOWAM，在冻结的 FastWAM 上只训练 2595 万参数的残差路径，显式解耦底盘控制、机械臂控制与相机自运动，并发布 ARMDOG 真机数据集。固定回放协议下，frame MSE 降低 15.03%、action MSE 降低 21.7%，在与 Motus 等 WAM 的对比中全部指标领先。"
provisionalKeywords: ["世界模型", "具身智能"]
keywords: ["世界模型", "具身智能"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.20114"}, {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.20114v1"}]
previewImage: "/daily/2026-08-22/assets/paper--arxiv--2608.20114/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 84
scoreScale: "paper-v2"
emphasis: true
---
# DECOWAM：面向足式移动操作的解耦全身世界-动作模型

## 研究问题与贡献

足式移动操作的相机随底盘运动，图像中混合场景动态、机械臂运动与自运动；动作向量同时包含高频机械臂与低频底盘速度指令，语义与时间尺度都不同。现有世界-动作模型多面向固定基座平台，未显式区分这些因素。DECOWAM 的贡献是把底盘、机械臂与相机自运动作为显式条件接口引入世界-动作建模，并以参数高效的冻结残差适配实现，同时发布同步视频、全身状态/动作与语言的 ARMDOG 真机数据集。

## 方法与系统

模型基于 FastWAM（WAN 视频专家 + ActionDiT 动作专家）。第一阶段整体适配域；第二阶段冻结全部 60.2 亿参数，只训练 2595 万参数：每块后的残差适配器、从特权未来潜状态蒸馏出的动作等价未来瓶颈（保证部署时因果）、用梯度反转对抗分离的 16 维底盘/机械臂双潜变量，以及把当前底盘速度作为显式自运动条件注入视频 token 的速度条件接口。两个专家都用条件流匹配训练。

## 实验设置与数据

ARMDOG 当前快照含 27 个任务文件夹的 217 条真机 episode、56041 同步帧，平台为带 6 自由度机械臂的四足机器人。固定回放协议使用 23 个 episode 切片，模型预测 8 帧未来 RGB 与 48 步 14 维全身动作，比较 frame MSE、PSNR、SSIM、LPIPS 与动作 MSE/MAE/L2，并做模块消融与闭环真机实验。

## 结果、限制与结论

论文报告：相对 Stage-1 FastWAM，DECOWAM 的 frame MSE 降低 15.03%、action MSE 降低 21.7%；移除任何一条结构化路径都会退化；与 Motus 等可运行世界-动作参考相比，在全部报告的视频与动作指标上排名第一（相对 Motus frame/action MSE 降低 83.1%），且同时输出未来视频与全身动作，而动作专用 VLA 不具备未来预测能力。限制包括数据规模仍较小、评测以回放与受限闭环为主，距离开放任务的大规模部署验证还有距离。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.20114>
- Hugging Face：<https://huggingface.co/papers/2608.20114>
