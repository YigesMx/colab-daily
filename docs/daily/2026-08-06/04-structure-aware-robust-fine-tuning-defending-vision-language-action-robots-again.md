---
candidateId: "arxiv--2608.03231"
date: "2026-08-06"
rank: 4
title: "Structure-Aware Robust Fine-Tuning: Defending Vision-Language-Action Robots Against Physical Attention Hijacking"
authors:
  - "Jinquan Zhang"
  - "Dongfu Yin"
  - "Run Yang"
  - "Yufeng Yan"
  - "Zhen Tian"
  - "F. Richard Yu"
summary: "SARF 揭示可打印对抗贴纸会通过动作到视觉注意力劫持攻击 VLA 机器人，并以只微调视觉编码器的方式降低攻击失败率。"
keywords:
  - "视觉语言动作模型"
  - "机器人安全"
  - "机器人泛化"
score: 81
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.03231v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.03231v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.03231/preview.png"
---

## 核心内容

论文研究 VLA 在物理世界中的注意力攻击面。作者提出 policy-critical action-to-vision attention hijacking 机制，说明攻击贴纸不仅改变视觉语义，还会把动作条件注意力集中到局部贴纸，从而诱发跨任务和跨架构失败。

## 关键技术与数据

AGSD 使用 EOT 优化可打印贴纸，使其同时集中动作到视觉注意力并破坏视觉语言对齐。SARF 只微调视觉编码器，引入 feature anchoring、policy-critical attention correction 和语言引导的局部几何一致性，不在推理时新增模块。实验在 LIBERO 和真实 PiPER 机械臂上比较干净、随机和攻击条件。

## 结果与结论

在 LIBERO 上，SARF 将 OpenVLA 在 AGSD 下的失败率从 100% 降至 14.2%-56.8% 区间，平均约 28.6%；真实 PiPER 的攻击下平均成功率从 23.0% 提升至 65.0%，同时保持干净性能。作者的结论是机制级鲁棒微调比单纯增加攻击数据更有解释性；评估仍受贴纸、任务套件和平台范围限制，不能视为对所有物理攻击的完整防御。

## 来源链接

- https://arxiv.org/pdf/2608.03231v1
- https://arxiv.org/abs/2608.03231v1
