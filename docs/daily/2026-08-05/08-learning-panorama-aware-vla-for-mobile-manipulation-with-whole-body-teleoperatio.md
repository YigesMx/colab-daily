---
candidateId: "arxiv--2608.02257"
category: "Paper"
date: "2026-08-05"
rank: 8
title: "Learning Panorama-Aware VLA for Mobile Manipulation with Whole-Body Teleoperation"
authors:
  - "Donglin Yang"
  - "Haoran Chen"
  - "Xingyu Chen"
  - "Lixing Liu"
  - "Manyi Li"
  - "Changhe Tu"
  - "Ke Xu"
  - "Xiaojian Ma"
  - "Si Liu"
summary: "PanoVLA 配合全身 VR 遥操作数据采集，用全景专用编码和专家模块为移动双臂操作提供机器人中心的全局空间上下文。"
keywords:
  - "移动操作"
  - "视觉语言动作模型"
score: 78
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.02257v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.02257v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.02257/preview.png"
---

## 核心内容

论文同时处理移动双臂操作的两项瓶颈：高质量全身演示收集，以及局部相机在移动、遮挡和多阶段任务中缺少全局上下文。系统以单套 VR 设备重定向操作者身体、双手和底盘意图，并将顶置 360 度相机与局部和腕部相机同步记录。

## 关键技术与数据

General Motion Retargeting 将底盘作为三自由度虚拟浮动基座，与双臂关节共同优化；数据包含 800 条轨迹、约 5.5 小时和 500K 帧。PanoVLA 在 pi0.5 的 VLM 和动作专家之间插入全景专家：双鱼眼先投影为 ERP，MTPano 产生语义和深度特征，再用 token adapter 和 KV cache 融合到动作条件。全身动作是 17 维，训练通过条件流匹配预测 32 步动作块。

## 结果与结论

作者在 Move Pen、Move Block、Open Curtain、Wipe Table 四项 15-trial 闭环实机评测中报告 PanoVLA 的平均阶段完成率 91.3%、端到端成功率 73.4%，对照 pi0.5 分别为 58.6% 和 30.0%。直接加原始全景或堆叠透视图均不如专用全景专家，且 Wipe Table 的最终阶段仍只有 46.7% 成功。证据说明全景表征在该硬件与四类任务中有价值，但数据与评测规模较小、训练依赖特定 360 度传感器，泛化到不同相机标定和更大场景尚待验证。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.02257v1
- arXiv 摘要页：https://arxiv.org/abs/2608.02257v1
