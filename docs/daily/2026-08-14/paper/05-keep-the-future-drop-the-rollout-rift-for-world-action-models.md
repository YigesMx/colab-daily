---
schemaVersion: 2
candidateId: "arxiv--2608.11521"
date: "2026-08-14"
category: "Paper"
ratingTrack: "paper"
groupRank: 5
groupScore: 89
scoreScale: "paper-v2"
title: "Keep the Future, Drop the Rollout: RIFT for World Action Models"
authors: ["Chushan Zhang", "Jinguang Tong", "Xuesong Li", "Yikai Wang", "Hongdong Li"]
summary: "RIFT 发现动作专家主要需要未来表征而非完整视频 rollout，并用 anticipation tokens 单次构造未来 K/V cache，显著降低部署延迟。"
provisionalKeywords: ["世界动作模型", "潜在未来", "机器人控制", "推理加速", "动作生成"]
keywords: ["世界模型", "视觉语言动作", "推理加速"]
sources:
  - name: "原始来源 1"
    url: "https://arxiv.org/pdf/2608.11521v1"
  - name: "原始来源 2"
    url: "https://export.arxiv.org/e-print/2608.11521v1"
  - name: "原始来源 3"
    url: "https://ar5iv.labs.arxiv.org/html/2608.11521"
previewImage: "/daily/2026-08-14/assets/arxiv--2608.11521/preview.png"
---

# Keep the Future, Drop the Rollout: RIFT for World Action Models

> RIFT 发现动作专家主要需要未来表征而非完整视频 rollout，并用 anticipation tokens 单次构造未来 K/V cache，显著降低部署延迟。

## 研究问题与贡献

世界动作模型通常先迭代生成未来视频，再让动作网络读取预测结果，部署延迟高。论文通过闭环干预区分“未来 cache 的消费”和“未来 rollout 的生产”，发现部分模型可重复使用最终干净 K/V cache 而几乎不改变执行，由此提出无需视频 rollout 的 RIFT。

## 方法与系统

RIFT 使用一组可学习 anticipation tokens，在一次视频骨干 prefill 中构造完整未来层级 K/V 状态，保留原动作专家读取未来的接口。训练以未来表示对齐、动作目标和条件课程约束 anticipation tokens；部署时不再迭代解码视频。论文还用 mask、位置重分配和 fixed-cache replay 检验动作对未来值及其位置的因果敏感性。

## 实验设置与数据

因果分析覆盖四个 WAM 和全部 40 个 LIBERO 任务；主评测在 LIBERO 与 RoboTwin 2.0 clean/randomized 场景进行。LIBERO 每 suite 每种子 500 次、三种子，共 2,000 次总体 rollout；RoboTwin 每设置每任务 100 次。比较 Joint、IDM、LingBot-VA、Fast-WAM 等，并报告成功率、action-chunk latency、末端执行器位移误差及 token 数消融。

## 结果、限制与结论

固定最终 cache 在 Joint/Cosmos-2 上保持 97.9%–98.2% 成功率，平均末端位移误差 1.7–1.9 cm。RIFT 在 LIBERO 达到 98.8%，接近 rollout 基线 98.4%–98.6%，同时将 action-chunk 延迟降低 68.2%–89.1%；RoboTwin clean/randomized 为 92.9%/92.6%。论文限制包括干预结论并非对所有 WAM 架构普适；失败检测与 cache 质量仍需校准；评测主要集中在既有仿真基准，真实机器人长期闭环、复杂接触和分布外动态环境尚待验证。

## 来源链接

- [arXiv](https://arxiv.org/abs/2608.11521)
- [PDF](https://arxiv.org/pdf/2608.11521v1)
