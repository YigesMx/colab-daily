---
candidateId: "arxiv--2608.04246"
date: "2026-08-07"
rank: 13
title: "SAFECAST：用视觉语言对比集校准 VLA 的部署期失败风险"
authors:
  - "Harshitha Rajaprakash"
  - "Aditeya Prajapati"
  - "Rong Xue"
  - "Abrar Anwar"
  - "Jesse Thomason"
summary: "SAFECAST 用视觉、语言及联合扰动产生的对比轨迹增强隐藏状态风险探针和 conformal calibration，缓解校准数据与真实部署偏移不匹配的问题。"
keywords:
  - "视觉语言动作模型"
  - "运行时安全监控"
  - "分布偏移鲁棒性"
score: 76.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.04246v1"
previewImage: null
---

## 核心内容

SAFE 类方法用 VLA 隐藏状态训练失败风险探针，再用 functional conformal prediction 设置时间相关阈值，但其可靠性依赖校准轨迹与部署分布相似。SAFECAST 主动构造照明、杂物、对象、初态和指令改写等视觉/语言对比轨迹，把预计会遇到的偏移同时加入探针训练与阈值校准。

## 关键技术与数据

论文拆分四种配置：原始 SAFE、只增强 probe training、只增强 calibration、两者都增强的完整 SAFECAST。实机使用 Franka/DROID，评估 π0 与 π0-FAST；模拟使用 LIBERO-Spatial 与 LIBERO-Plus，覆盖 π0 和 OpenVLA。指标在一系列 conformal 显著水平 alpha 上汇总 F1 与 ROC-AUC，而非只挑单个阈值。还测试在模拟中训练风险探针、再用少量实机对比轨迹校准的 sim-to-real 路径。

## 结果与结论

DROID 和 LIBERO 中，对比集配置总体优于原始 SAFE，不同策略对训练增强或校准增强的敏感性不同。联合视觉语言扰动在模拟中最佳：OpenVLA 的 F1 从视觉-only 0.922 提升到 0.959；表中联合设置也对 π0 明显优于单模态。模拟训练加真实对比校准优于仅用较小真实数据训练和校准。方法的核心限制是必须预先收集能代表未来偏移的对比轨迹，增加 rollout 成本；超出对比分布的变化仍可能失效，且经验改进不能恢复任意分布偏移下的 conformal exchangeability 保证。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.04246v1)
- [arXiv PDF](https://arxiv.org/pdf/2608.04246v1)
