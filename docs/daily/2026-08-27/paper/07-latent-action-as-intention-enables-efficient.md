---
candidateId: "arxiv--2608.24882"
businessCandidateId: "arxiv--2608.24882"
date: "2026-08-27"
category: "Paper"
title: "Latent Action as Intention Enables Efficient Future Imagination for World Action Models"
authors: ["arxiv.org", "huggingface.co"]
summary: "LAWA 回答一个世界-动作模型的取舍：为了效率完全去掉测试时未来想象会降低泛化，而显式生成未来视频又延迟过高。作者把未来想象压缩为离散 tokenizer 学到的 latent action 序列，将其视为“未来意图”，推理时只联合去噪紧凑 latent intention 和可执行动作块，不生成未来观察。贡献包括带 DINOv2 与掩码辅助的 latent action tokenizer、动作无关第一人称视频预训练、结构化多模态 joint attention，以及在少数据与分布偏移下的系"
provisionalKeywords: ["世界模型", "具身智能", "机器人操作"]
keywords: ["世界模型", "具身智能", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.24882v1"}, {"name": "huggingface.co", "url": "https://huggingface.co/papers/2608.24882"}]
previewImage: "/daily/2026-08-27/assets/arxiv--2608.24882/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 7
groupScore: 85
scoreScale: "paper-v2"
emphasis: false
---



# Latent Action as Intention Enables Efficient Future Imagination for World Action Models

## 研究问题与贡献

LAWA 回答一个世界-动作模型的取舍：为了效率完全去掉测试时未来想象会降低泛化，而显式生成未来视频又延迟过高。作者把未来想象压缩为离散 tokenizer 学到的 latent action 序列，将其视为“未来意图”，推理时只联合去噪紧凑 latent intention 和可执行动作块，不生成未来观察。贡献包括带 DINOv2 与掩码辅助的 latent action tokenizer、动作无关第一人称视频预训练、结构化多模态 joint attention，以及在少数据与分布偏移下的系统验证。

## 方法与系统

tokenizer 用 DINOv2 提取逐帧 patch token，经时空注意力编码相邻帧差分并量化到可学习 codebook；因果 forward decoder 用 latent action 重建下一帧，SAM 式 mask decoder 借助 SAM 2 自动生成的手/机械臂掩码，使 latent code 更关注交互区域。动作无关第一人称预训练混合机器人与 egocentric 视频，做不同来源速度采样与加权再平衡，保持机器人域约 20%。策略训练阶段冻结 tokenizer，三个 flow matching expert 分别学习未来视频 latent、latent action 和动作块；结构化注意力让当前观察不可见未来、latent action 只见当前观察与自身序列、动作 token 可读取当前观察、latent action 和动作序列。推理时省略未来视频分支，只保留当前观察缓存加 latent/action 去噪。

## 实验设置与数据

RoboCasa 全量设置为 24 个任务、每任务 1000 条轨迹，few-shot 为其 10%；每任务 50 次评估。LIBERO-Plus 仅用原始 LIBERO 训练并零样本评估七类扰动。作者实现匹配的 Fast-WAM 与 Joint-WAM，并共享下游划分、优化、batch 与训练步数。真实实验使用 UFACTORY xArm7、RealSense D435 与两个鱼眼腕相机，设计齿轮、电池、积木和实验室长时程四个任务，每任务 200 条演示、20 次评估。

## 结果、限制与结论

论文报告 RoboCasa few-shot 65.6%、全量 80.8%，分别比匹配 Fast-WAM 高 9.6 和 4.5 点，并接近或超过 Joint-WAM；LIBERO-Plus 零样本 74.4%，比 Fast-WAM 高 14.4 点。推理延迟为 338.5 ms，比 Joint-WAM 593.1 ms 低 42.9%，但仍慢于 Fast-WAM 196.5 ms。对 latent 输入加噪或时间打乱分别降到 52.2% 和 56.4%，说明该通道确实被执行器使用。真实任务中，25% 演示时 LAWA 平均 40.0%，超过全量 Fast-WAM 的 33.8%。限制是相对 Fast-WAM 仍有 142 ms 延迟增加；tokenizer 的 mask 目标来自自动伪标签，语义并不等价真实控制意图；真实任务规模有限，论文也称代码与模型将发布但需后续核验。

## 来源链接

- 论文：https://arxiv.org/abs/2608.24882
- PDF：https://arxiv.org/pdf/2608.24882
- 项目页：https://getterupper.github.io/LAWA
