---
candidateId: "arxiv--2608.26673"
businessCandidateId: "arxiv--2608.26673"
date: "2026-08-29"
category: Paper
title: "PredVLA: A Sub-Million-Parameter Predictive-Coding Policy for Robot Manipulation"
authors: ["arxiv.org"]
summary: "PredVLA 用 0.68M 可训练参数的层级预测编码循环策略，在 LIBERO 短时程三 suite 达 86.94% 成功率，并在相同前端与解码器下大幅超过参数匹配基线。"
provisionalKeywords: ["视觉语言动作", "机器人操作", "开源生态"]
keywords: ["视觉语言动作", "机器人操作", "开源生态"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.26673v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.26673"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2608.26673"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/e-print/2608.26673"}
previewImage: "/daily/2026-08-29/assets/arxiv--2608.26673/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 10
groupScore: 82
scoreScale: "paper-v2"
emphasis: false
---
# PredVLA：亚百万参数的机器人操作预测编码策略

## 研究问题与贡献

主流 VLA 常依赖大规模预训练和数十亿参数，论文追问：如果改变控制架构，一个少于 100 万可训练参数、无机器人数据预训练的语言条件策略能达到什么水平？PredVLA 的贡献是把预测编码循环网络带入标准 LIBERO 评估，并在相同冻结前端、示教、动作表示和评测协议下比较参数匹配 Transformer/LSTM。

## 方法与系统

前端冻结：语言用 all-MiniLM-L6-v2 加固定 PCA，两个相机视角用 ImageNet ResNet18 加固定 PCA，本体感知直接输入。可训练控制器包含共享顶层、视觉分支和上下动作模块，形成多时间尺度层级。关键性质是观测不直接进入循环状态；视觉和本体预测误差只在在线推断中优化潜变量，推断得到的潜轨迹再解码动作。因此把在线推断设为零步即可得到保持模型和语言条件的精确开环控制。

## 实验设置与数据

LIBERO 的 SPATIAL、GOAL、OBJECT、LONG 四个 suite 各 500 条官方示教，每任务 50 条；每个 suite 单独训练控制器。主要结果每任务 50 次 rollout、14 个独立训练 seed，相当于每 suite 7,000 episodes。配置为 675,732 个可训练网络参数，两个相机、9 维本体感知和 7 维动作，短时程视觉刷新间隔 4 步。

## 结果、限制与结论

PredVLA 在三个短时程 suite 平均成功 86.94%，四 suite 含 LONG 为 75.35%；LONG 单独为 40.57±6.44。参数匹配 Transformer 与 LSTM 四 suite 平均仅 19.73% 和 10.26%，PredVLA 分别为其 3.7 倍和 7.4 倍。消融显示统一时间常数会在三个短 suite 降 17-29 点，关闭在线误差回归降 6-12 点，LONG 降 12.57 点。模型在 RTX 5090 上含在线误差回归的端到端延迟 46 ms。限制明确：仅仿真、单一机器人身体和名义 LIBERO 分布，LONG 性能仍明显更低，也未测试物理机器人和环境扰动。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2608.26673v1)
- [PDF 全文](https://arxiv.org/pdf/2608.26673)
- [HTML 全文](https://arxiv.org/html/2608.26673)
- [TeX source](https://arxiv.org/e-print/2608.26673)
