---
candidateId: "arxiv--2608.04404"
category: "Paper"
date: "2026-08-07"
rank: 4
title: "Faster-WAM：稀疏复用推理期未来表征"
authors:
  - "Weiheng Zhao"
  - "Haoyi Jiang"
  - "Xin Shi"
  - "Liu Liu"
  - "Fan Huang"
  - "Zhizhong Su"
  - "Wei Sui"
  - "Xinggang Wang"
summary: "Faster-WAM 证明推理期未来条件对分布偏移鲁棒性重要，并用一次视频前向、SparseMoT 和 Interval KV-Fusion 降低联合视频动作去噪的成本。"
keywords:
  - "世界动作模型"
  - "分布偏移鲁棒性"
score: 83.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.04404v1"
previewImage: "/daily/2026-08-07/assets/arxiv--2608.04404/preview.png"
---

## 核心内容

联合 WAM 在动作去噪的每一步重复更新未来视频，鲁棒但昂贵；训练期使用未来、推理期完全删除未来的 Fast-WAM 更快，却可能失去分布偏移下的时间线索。Faster-WAM 的折中不是压缩掉未来，而是先用一次视频专家前向生成固定、未来感知的多层 K/V 上下文，再让动作专家选择性读取。

## 关键技术与数据

SparseMoT 只在 30 个对齐阶段中的每四层进行一次视频-动作交互，其余层做动作-only 更新；Interval KV-Fusion 对每个区间内多深度 K/V 加权聚合，不增加注意力序列长度。模型基于 Wan2.2-5B，预测 32 步动作，视频侧九帧，视频与动作 flow time 独立采样并共同训练。对 Joint-WAM、Fast-WAM 与 Faster-WAM 使用相同主干、数据、tokenization 和采样设置，形成较强控制对比。

## 结果与结论

Faster-WAM 在 LIBERO 为 99.0%，RoboTwin 2.0 为 92.6%；更有区分度的 LIBERO-Plus 从 Fast-WAM 的 49.1% 和 Joint-WAM 的 66.3% 提升至 73.6%。单张 L20 上总体延迟 252.95 ms，相比 Joint-WAM 的 559.84 ms 快 2.21 倍，也低于 Fast-WAM 的 320.97 ms。实机标准任务平均 95.8%，三类未见扰动平均 71.1%。当前-only 同架构消融仅 51.0%，支持未来上下文本身的贡献；不过论文主要围绕同一 WAM 家族和操控基准，未来上下文的随机噪声构造及跨主干普适性仍需更多验证。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.04404v1)
- [arXiv PDF](https://arxiv.org/pdf/2608.04404v1)
