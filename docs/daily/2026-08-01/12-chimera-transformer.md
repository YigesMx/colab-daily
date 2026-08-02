---
candidateId: "arxiv--2607.28611"
date: "2026-08-01"
rank: 12
title: "Chimera：面向长上下文视觉生成的混合扩散 Transformer 与缩放规律"
authors:
  - "Chongjian Ge"
  - "Hanwen Jiang"
  - "Tianyu Wang"
  - "Hao Tan"
summary: "Chimera 以 KDA 线性注意力、周期性 MLA、模态感知短卷积和稀疏 MoE 构成无位置编码的单流视觉扩散骨干，并用 HeteroP 建立跨宽度与深度的超参数迁移及图像、视频计算最优缩放规律。"
keywords:
  - "视频生成"
  - "视觉语言模型"
score: 75
sources:
  - name: "arXiv source"
    url: "https://arxiv.org/src/2607.28611v1"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2607.28611v1"
previewImage: "/daily/2026-08-01/assets/arxiv--2607.28611/preview.png"
---

## 核心内容

Chimera 面向高分辨率图像、长视频和多模态上下文带来的 token 扩张，目标是在不完全依赖二次复杂度全注意力的情况下保留全局交互。它把文本、图像和视频 token 按单流组织：视觉 latent 以时间优先、帧内行优先顺序展开；每四层中三层使用维护固定大小循环状态的 Kimi Delta Attention（KDA），一层使用压缩键值表示但仍做双向全局交互的 Multi-head Latent Attention（MLA）。KDA 负责长序列状态跟踪，周期性 MLA 补充精确全局召回。

架构不使用显式位置编码。短距离位置选择交给模态感知短卷积，近因衰减交给 KDA 的内容自适应遗忘门，多维布局由文本一维卷积和视觉时空三维卷积直接表达。中间 FFN 使用 56 个路由专家、每 token 激活 8 个的稀疏 MoE；四路 identity Hyper-Connection 为异构子层提供自适应读写，同时保持恒等残差路径。论文还提出 HeteroP，根据每类张量实际功能 fan-in 和网络深度迁移初始化、学习率、权重衰减及 AdamW epsilon，避免用一个全局宽度倍率错误缩放异构模块。

## 关键技术与数据

训练采用 rectified flow 的速度预测损失。冻结的因果 3D VAE 在时间、高、宽上按 4、8、8 压缩，之后再做 1、2、2 patchification；文本由冻结 umT5-XXL 编码，最大 512 token。训练数据是作者称为“大规模精选视觉语料”的内部集合，但未公开样本数、许可证和具体构成。图像桶为 256、512、1024 平方像素；混合训练另含约 5 秒、16 fps、81 帧的 180p 和 360p 视频。模型家族覆盖约 55M 至 4B 激活参数，最终模型总参数 11B、激活参数 2B。

缩放实验的图像部分使用 36 个可用 run、29 个激活参数规模和约 12 万个 loss 点；视频部分用同一规模网格上的 30 个从零训练 run。作者以训练曲线包络、IsoFLOP 和完整损失面参数拟合三种方法估计计算最优前沿。最终质量评测包括 GenEval、DPG-Bench，以及从 5 秒训练长度零样本外推至 30 秒时尾部 5 秒的 FID/FVD。长视频实验每个模型和时长生成 512 个视频，并使用相同提示、种子、分辨率和帧率。

## 结果与结论

在共同训练损失 0.149 处，Chimera-dense 需要 2.55e20 FLOPs，对照 Wan2.1 需要 4.29e20 FLOPs；完整配置只需 6.27e19 FLOPs。消融显示 MoE、iHC、HeteroP 依次把 Chimera-dense 的计算需求降到 1.76e20、1.50e20 和 6.27e19 FLOPs。混合 KDA/MLA 在 A100 80GB 上完成 255k token 测试，而匹配的 MHA/MLA 约在 152k token 首次 OOM；255k token 时前者快 2.14 倍。

图像缩放的多种估计把模型参数指数放在约 0.48 至 0.52，说明额外计算应近似均分给激活参数和视觉 token；视频对应指数约 0.53 至 0.56，略偏向增加模型容量。5 秒训练模型外推到 30 秒时，尾部 FID 从 77.1 增至 82.1，仅恶化 6.5%，FVD 恶化 20.9%；Wan2.1 和 HunyuanVideo-1.5 的 FID 分别恶化 50.5% 和 53.6%。不过这些结论基于未公开训练语料和作者自有训练体系，且部分结构轴在缩放研究中固定不变。它证明了该架构与参数化在实验范围内有效，不能直接推出规律对其他扩散骨干和数据分布普遍成立。

## 来源链接

- arXiv 原文：https://arxiv.org/abs/2607.28611v1
- arXiv TeX 源码：https://arxiv.org/src/2607.28611v1
- arXiv PDF：https://arxiv.org/pdf/2607.28611v1
