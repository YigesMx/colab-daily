---
candidateId: "arxiv--2608.04510"
date: "2026-08-07"
rank: 12
title: "GUARD：用条件缓存消融检测扩散式 VLA 是否真正落地"
authors:
  - "Suhas Hegde"
  - "Jitendra Yasaswi Bharadwaj Katta"
summary: "GUARD 在不修改策略的情况下定位视觉与语言 KV cache 中最影响动作的条目，批量消融后比较单步去噪响应，以功能落地程度生成跨任务失败信号。"
keywords:
  - "视觉语言动作模型"
  - "运行时安全监控"
  - "分布偏移鲁棒性"
score: 77.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.04510v1"
previewImage: "/daily/2026-08-07/assets/arxiv--2608.04510/preview.png"
---

## 核心内容

VLA 在未知环境中仍可能输出平滑、看似自信的动作，却已经不依赖指令和视觉目标。GUARD 不把新颖度或动作方差当成唯一风险，而直接测试动作头是否功能性依赖当前最关键的多模态证据。若删掉最具影响的视觉或语言 cache 条目后，去噪响应几乎不变，动作可能缺乏真实 grounding。

## 关键技术与数据

冻结 VLA 正常生成动作块后，GUARD 对传入扩散/流匹配动作头的 token-indexed 最终 KV cache 做梯度归因。它分别把视觉和语言中最显著条目替换为本模态均值，并从同一噪声动作状态批量执行一次反事实去噪。响应敏感度、注意力熵、模态偏置、grounding efficiency 等诊断输入轻量时间分类器，再以 functional conformal prediction 生成随进度变化的报警阈值。

## 结果与结论

五个未见任务设置中，GUARD 四项第一、一项第二，平均 ROC-AUC 88.84%，比最强 FIPER 高 5.73 点，比 SAFE 高 12.62 点；seen 平均与最佳结果只差 0.19 点。最显著 10% cache 条目优于随机或最不显著消融，说明信号来自针对性干预而非破坏上下文。开销为 Pi0 的 1.14 倍和 SmolVLA 的 1.27 倍。限制是只适用于扩散/流式动作头，saliency 反向传播需保留激活并增加峰值显存；它是监控器，不会修复策略或保证报警后的安全控制。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.04510v1)
- [arXiv PDF](https://arxiv.org/pdf/2608.04510v1)
