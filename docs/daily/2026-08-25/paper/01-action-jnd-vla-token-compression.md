---
candidateId: "arxiv--2608.21247"
businessCandidateId: "arxiv--2608.21247"
date: "2026-08-25"
category: "Paper"
title: "Action-JND：让VLA token压缩看见动作安全边界"
authors: ["arxiv.org"]
summary: "论文把视觉编码中的 Just Noticeable Difference 扩展为 Action-JND：只有当 token 扰动不会让 VLA 动作输出超出容忍边界时才允许压缩；在 LIBERO 的高压缩率设置下相对 VLA-Cache 最高提升 41.65 个百分点。"
provisionalKeywords: ["视觉语言动作模型", "推理优化", "机器人操作"]
keywords: ["视觉语言动作模型", "推理优化", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.21247v1"}]
previewImage: "/daily/2026-08-25/assets/arxiv--2608.21247/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 91
scoreScale: "paper-v2"
emphasis: true
---
# Action-JND：让 VLA token压缩看见动作安全边界

## 研究问题与贡献

论文研究视觉语言动作（VLA）模型的推理加速问题。已有 token pruning 和 KV-cache reuse 常用视觉相似度、注意力或显著性判断可压缩性，但这些指标只说明“信息是否冗余”或“模型是否关注”，不能直接回答压缩后机器人动作会不会偏离到不可接受。

作者提出 Action-JND，将经典的人眼 just noticeable difference 思想扩展到 embodied perception：一个视觉 token 的表示变化是否可接受，由闭环控制中的语言条件动作响应决定，而不是由图像保真度或人类可感知性决定。论文的贡献包括动作条件 JND 定义、轻量 token 级容忍度估计器，以及可插入 stale-KV reuse 和 token pruning 的排序信号。

## 方法与系统

Action-JND 为每个视觉 token 学习最大可容忍扰动：估计器在深度视觉特征空间生成动作容忍分数，压缩框架优先压缩高容忍 token，保留会显著改变动作的 token。对 OpenVLA，训练使用离散 action-token KL 目标；对 OpenVLA-OFT，分别为主视角和腕视角估计器训练连续动作回归目标。

该分数是 plug-and-play 信号：在 KV-cache 复用中决定哪些历史 token 可安全保留旧表示；在 token pruning 中决定视觉 token 删除顺序。论文强调它不替代具体压缩框架，而是替代其中间接的压缩判据。

## 实验设置与数据

实验在 LIBERO 的 Spatial、Object、Goal 和 Long 四个套件上执行，覆盖空间推理、物体中心操作、目标条件和长程任务；骨干模型为 OpenVLA 和 OpenVLA-OFT。KV-cache 设置包括自适应 soft policy 和 30%、40%、60%、80% 目标复用率；token pruning 设置为 25%、50%、75%、87.5%。指标包括任务成功率、FLOPs、CUDA latency 和控制频率。本次 refine 已下载并核对 PDF、TeX 源码和图 1，但没有复跑实验。

## 结果、限制与结论

论文报告，在 OpenVLA 60% 和 80% KV 复用率下，Action-JND 相比 VLA-Cache 平均成功率分别高 23.70 和 41.65 个百分点；在 OpenVLA-OFT 上分别高 6.20 和 10.10 个百分点。80% 复用率下 OpenVLA 平均成功率仍为 55.45%，同时控制频率从 vanilla 的 21.71 Hz 提升到 28.81 Hz。OpenVLA-OFT soft 策略平均成功率为 96.20%，高于未压缩参考的 95.05%。

限制方面，论文当前验证集中于 LIBERO 和两个 OpenVLA 家族；Action-JND 依赖动作偏差阈值和估计器训练，作者也指出机器人场景中动作敏感性的更完整定义仍需扩展。硬件延迟结果与具体 GPU、软件栈和模型版本相关，不能直接外推到所有机器人控制器。

## 来源链接

- 论文：https://arxiv.org/abs/2608.21247
- PDF：https://arxiv.org/pdf/2608.21247
- arXiv 源码：https://arxiv.org/e-print/2608.21247
