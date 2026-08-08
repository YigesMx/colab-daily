---
candidateId: "arxiv--2608.05747"
category: "Paper"
date: "2026-08-08"
rank: 10
title: "GST-Bench: Can VLMs Develop Global Spatial Awareness from Video?"
authors:
  - "Qifeng Zhang"
  - "Kaixiang Huang"
  - "Heng Dong"
  - "Huang Fang"
  - "Junting Chen"
  - "Junjie Zhu"
  - "Yonghang Chen"
  - "Zhiyu Zhang"
  - "Wei Li"
summary: "GST-Bench 将 VLM 空间理解从单图或少量视图推进到长时程第一人称视频、轨迹外新视角和显式俯视图之间的全局对齐。基准包含 50 个室内场景生成并经人工核验的 2,762 个问题，视频输入累计 6,790 分钟，覆盖自定位、物体定位和场景结构理解 12 个子任务。22 个 VLM 中最强零样本模型 Gemini-3-Pro 得分 42.68，显著低于人类 79.08；在 GST-Train 上微调 Qwen3-VL-8B 后得分从 25.89 升至 53.52。"
keywords:
  - "空间场景建模与路由"
  - "视觉语言动作控制"
score: 87.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.05747"
previewImage: "/daily/2026-08-08/assets/arxiv--2608.05747/preview.png"
---

## 核心内容

GST-Bench 研究 VLM 能否把长时间的第一人称探索视频组织成全局一致的空间表示。现有空间基准多集中在单图、两三张图或粗粒度左右/前后关系，不能清楚区分“单帧即可回答”和必须跨帧整合的问题，也很少要求把视频证据映射到全局俯视图。GST-Bench 因此要求查询视角来自视频轨迹之外，物体定位任务中的目标在查询视角不可见，并用距离、角度和像素点等精确数值评估。

基准围绕三个具身能力组织：Where am I 的 self localization、Where is the target 的 object localization，以及 What does the scene look like 的 scene structure understanding。论文还构造 GST-Bench-Local，把目标放回查询图像中以隔离局部感知；再提供 GST-Train 作为针对全局空间推理的训练数据，检验监督是否能缩小差距。

## 关键技术与数据

- 输入与任务：输入包括长时程 exploration video、带红框的 object-annotated video、短轨迹视频、easy/medium/hard 三种俯视图和轨迹外 current view。12 个子任务包括全局位置/朝向、语义或视觉目标的自我中心方向/距离/全局位置、三种俯视图选择和轨迹选择（`sections/3-GST-Bench.tex`，约 8-69 行）。
- 数据生成：基于 OmniGibson 与 BEHAVIOR-1K 等室内模拟场景，记录相机/物体三维坐标、可见性、距离和角度，从几何直接生成 QA；自动过滤无效投影、歧义选项和目标可见样本，再由人工核验目标是否能从探索视频识别、轨迹外视角是否仍可定位。最终为 50 个场景、2,762 个人工核验问题，累计 QA 视频输入 6,790 分钟（`sections/1-introduction.tex`，约 23-25、38-44 行；`sections/3-GST-Bench.tex`，约 71-108 行）。
- 评测指标：距离用 MRA，角度用 15/30/45 度容差准确率，点预测用 100-300 像素阈值准确率，选择题用标准准确率；总分是 12 个子任务分数的算术平均（`sections/4-Evaluation-on-GST.tex`，约 16-46 行）。22 个模型以 zero-shot、官方 prompt、greedy decoding 评测，并包含 2B-38B 的开源、闭源和具身模型（约 8-14 行）。
- 局部诊断与训练：Global 设置要求跨帧整合；Local-Video 让目标出现在 current view；Local-Image 移除探索视频。GST-Train 与评测场景分离，并与通用多模态指令数据混合微调 Qwen3-VL-8B（`sections/4-Evaluation-on-GST.tex`，约 132-224 行）。

## 结果与结论

人类平均得分 79.08，最好零样本模型 Gemini-3-Pro 为 42.68，差距 36.4 分；其 global position visual 为 42.23、orientation 为 16.89，显示全局对齐和方向估计困难。开源模型总体约 20-31 分，部分低于随机基线 20.01；具身调优模型也没有超过相近规模的通用模型。GPT-5、Gemini-2.5-Pro 和 Gemini-3-Pro 构成零样本第一梯队，但仍低于人类表现的 55%。

局部对照显示，Gemini-3-Pro 在语义方向任务中从 Global 22.11 升到 Local-Image 61.20，论文据此把闭源模型主要瓶颈归因于跨帧空间整合，而不是单图感知。开源模型在局部设置中提升不稳定，部分模型反而下降，说明其同时存在局部感知和全局整合问题。Qwen3-VL-8B 在 GST-Train 上微调后从 25.89 升至 53.52，超过所有零样本模型但仍低于人类，支持“针对性监督有效但未解决长时程空间推理”的保守结论。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.05747)
- [arXiv TeX 源码](https://arxiv.org/e-print/2608.05747)
- [GST-Bench 项目页](https://qwerirwq.github.io/GST-Bench/)
