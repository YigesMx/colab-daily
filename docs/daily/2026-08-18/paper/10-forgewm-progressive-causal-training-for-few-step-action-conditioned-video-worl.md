---
candidateId: "arxiv--2608.14022"
businessCandidateId: "arxiv--2608.14022"
date: "2026-08-18"
category: "Paper"
title: "ForgeWM: Progressive Causal Training for Few-Step Action-Conditioned Video World Models"
authors:
  - "arxiv.org"
summary: "ForgeWM 通过四阶段渐进因果训练把双向动作条件视频生成器蒸馏成 1/2/4 步交互世界模型，并在 Minecraft 与 FPS 控制中改善质量、延迟和控制精度。"
provisionalKeywords:
  - "世界模型"
  - "生成式媒体"
  - "模型与推理"
keywords:
  - "世界模型"
  - "生成式媒体"
  - "模型与推理"
sources:
  - name: "arxiv.org"
    url: "https://arxiv.org/abs/2608.14022v1"
previewImage: "/daily/2026-08-18/assets/arxiv--2608.14022/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 10
groupScore: 79
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.14022 -->
# ForgeWM: Progressive Causal Training for Few-Step Action-Conditioned Video World Models

## 研究问题与贡献

交互式世界模型需要低延迟因果生成，并让离散键盘与连续鼠标输入在潜在 chunk 和自回归 rollout 中保持对齐。论文提出域适应、teacher-forced causal training、因果一致性蒸馏和 on-policy 分布匹配的渐进流程。

## 方法与系统

框架先适配双向动作条件生成器，再转为因果执行、蒸馏因果一致性，并用双向教师匹配自生成历史分布，分别得到 1、2、4 步学生。部署可采用交互优先加可选重放精化的双路径：一步学生保存草稿后重噪化并精化。

## 实验设置与数据

定量主实验使用配对 Minecraft 轨迹，报告 VBench Imaging Quality、LPIPS、运动轮廓、反事实键盘符号准确率、鼠标控制和延迟；同一流程迁移到七款游戏的 gamepad FPS 数据。

## 结果、限制与结论

ForgeWM-1 达 IQ 0.6776、Mouse Accuracy 0.7848、168.2ms 与 72.10 FPS；ForgeWM-2 在 IQ、LPIPS、Flow Profile、KCtrl 和 Mouse Accuracy 上表现最好。重放精化 LPIPS 0.6155，与四步直接生成 0.6168 相当，但与草稿距离 0.1970，远低于从噪声重生成的 0.6187。限制是主要定量比较仍集中于 Minecraft，真实机器人或非游戏控制未评估。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.14022v1>
