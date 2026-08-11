---
schemaVersion: 2
candidateId: "arxiv--2608.07409"
date: "2026-08-11"
title: "UniJEPA: A Unified Joint-Embedding Predictive Architecture for Task-Agnostic Visual World Modeling"
authors:
  - "An Lanji"
  - "Dawei Liu"
  - "Jin Li"
  - "Haoran Xu"
  - "Mei Chen"
  - "Yu Tian"
summary: "UniJEPA 将图像级光度预测和视频级下一状态预测统一到同一 JEPA 潜空间，用单一潜嵌入预测损失与高斯正则训练，并在离线动作后训练后进行潜空间零样本规划。论文报告 ImageNet 线性探测 74.9%、Something-Something-v2 top-1 78.1% 和 75.8% 规划成功率。"
keywords:
  - "潜空间世界建模与规划"
  - "闭环机器人控制"
category: "Paper"
ratingTrack: "paper"
groupRank: 5
groupScore: 86
scoreScale: "paper-v2"
sources:
  - name: "arXiv full HTML"
    url: "https://arxiv.org/html/2608.07409v1"
previewImage: null
---

## 研究问题与贡献

UniJEPA 针对 JEPA 家族中图像、视频和动作条件预测各自使用不同编码器、预测器和抗坍塌方案，导致潜空间不能组合的问题。论文把光度变换预测和视频下一状态预测视作同一个潜变量预测任务，提出共享编码器/预测器和单一高斯正则目标，并主张通过两个目标的相对权重控制表征从光度不变到时间动力学等变的抽象程度。与具身方向的连接在于：该共享潜空间在离线动作后训练后可用于视觉目标到达的模型预测控制。

## 方法与系统

编码器将图像映射为潜向量，预测器接收潜向量及光度变换或动作，预测变换后或下一时刻的目标嵌入。统一损失是光度预测均方误差、时间预测均方误差和一个随机方向上的高斯分布正则项；论文定理声称，当正则项足够小时，编码器不能成为常数映射。预训练后冻结编码器，在离线观测-动作轨迹上后训练预测器；规划时把当前潜向量滚动预测 H 步，以到视觉目标潜向量的距离为 MPC 目标，用采样优化选择动作。

实验配置使用 ViT-Small/16（控制模型约 15M 参数）和 ViT-Large，大规模模型的预测器为轻量 MLP/ViT；光度增强包括 brightness、contrast、saturation、hue，时间预测使用连续视频片段，正则项投影到 512 个随机方向。模型不需要 EMA、stop-gradient 或预训练编码器。

## 实验设置与数据

图像实验使用 ImageNet-1k 线性探测/微调，视频实验使用 Something-Something-v2、Epic-Kitchens-100，并用 Perception Test、TempCompass 做诊断；规划覆盖迷宫、推物和多粒子控制。基线包括 I-JEPA、IWM、V-JEPA/V-JEPA-2、DINO-WM、LeWorldModel、SimCLR、DINOv2 和像素生成世界模型。主要报告 top-1、recall@5、规划成功率、规划速度和损失超参数数量。论文未提供与机器人真实硬件或语言条件 VLA 的实验，因此其具身价值仍主要是潜空间世界模型和离线控制层面的使能关系。

## 结果、限制与结论

UniJEPA 报告 ImageNet 线性探测准确率 74.9%，Something-Something-v2 top-1 78.1%，Epic-Kitchens-100 action anticipation recall@5 为 40.6%，规划成功率 75.8%，规划速度为相对基线的 44 倍。去掉光度损失后 ImageNet 降至 70.1%、规划降至 74.1%；去掉时间损失后无法规划；正则权重为零时潜空间秩坍塌到 3。MPC horizon 从 2 增至 5 时成功率从 68.4% 升至 75.8%，horizon 10 只有边际收益且速度减半。

作者报告最终精度约需同等生成世界模型 40% 的训练步数，但这些效率结果依赖论文的控制模型、评测套件和规划协议。限制包括共享预测器可能不足以处理长时程或多模态任务，高斯正则可能限制极大规模表征容量，模型当前不接收语言指令；作者还提醒世界模型动力学预测在安全或自主部署前必须验证。对真实机器人、复杂接触和视觉语言条件下的效果，原文未报告。

## 来源链接

- 原始论文全文：https://arxiv.org/abs/2608.07409v1
