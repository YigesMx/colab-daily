---
candidateId: "url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-08-16-6"
date: "2026-08-17"
category: "Paper"
title: "ECCV 2026 Oral｜首个端到端实时 DETR 旋转检测模型，中科大联合华为发布 RiO-DETR：2.7 ms 达到 78.4 AP50"
authors:
  - "arxiv.org"
summary: "RiO-DETR 将旋转目标检测改造为端到端实时 DETR 框架，在 DOTA-1.0 上报告 2.7 ms 与 78.4 AP50。"
provisionalKeywords:
  - "计算机视觉"
  - "模型架构"
  - "基准评测"
keywords:
  - "计算机视觉"
  - "模型架构"
  - "基准评测"
sources:
  - name: "arxiv.org"
    url: "https://arxiv.org/html/2603.09411v1"
  - name: "www.jiqizhixin.com"
    url: "https://www.jiqizhixin.com/articles/2026-08-16-6"
previewImage: "/daily/2026-08-17/assets/url--https_3a_2f_2fwww.jiqizhixin.com_2farticles_2f2026-08-16-6/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 76
scoreScale: "paper-v2"
---

# ECCV 2026 Oral｜首个端到端实时 DETR 旋转检测模型，中科大联合华为发布 RiO-DETR：2.7 ms 达到 78.4 AP50

## 研究问题与贡献

旋转目标检测广泛用于遥感、无人机和工业巡检，但传统两阶段流程与角度周期性、边界交换问题会影响速度和精度。论文目标是减少手工旋转先验与复杂后处理，用端到端 DETR 集合预测直接回归旋转边界框。

## 方法与系统

RiO-DETR 显式建模旋转边界框，改进多尺度特征与查询解码，抑制角度周期误差，并通过端到端匹配避免 NMS 类后处理。论文称其为首个端到端实时 DETR 旋转检测模型，并给出速度与精度较优的模型配置。

## 实验设置与数据

实验主要使用 DOTA-1.0 等遥感旋转检测基准，报告不同模型尺度的 AP、AP50 与延迟，并提供 TensorRT FP16 在 T4 GPU 上的部署速度，说明工程可用性。

## 结果、限制与结论

原文关键证据摘录：- The Roadmap to RiO-DETR.
- 4 Experiments 4.1 Evaluation Datasets DOTA-1.0.
- RiO-DETR-n achieves 78.4 % 78.4\% AP 50 with 2.7 ms latency and 4.0M parameters, surpassing YOLO26n-obb.

论文报告 RiO-DETR-n 在 DOTA-1.0 达到 78.4 AP50，TensorRT FP16 延迟为 2.7 ms。限制在于基准以遥感俯视场景为主，真实小目标、大长宽比目标、不同成像条件与边缘设备部署仍需更广泛验证。

## 来源链接

- https://arxiv.org/html/2603.09411v1
- https://www.jiqizhixin.com/articles/2026-08-16-6
