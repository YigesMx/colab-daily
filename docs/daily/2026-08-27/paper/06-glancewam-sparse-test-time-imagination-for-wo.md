---
candidateId: "arxiv--2608.23927"
businessCandidateId: "arxiv--2608.23927"
date: "2026-08-27"
category: "Paper"
title: "GlanceWAM: Sparse Test-Time Imagination for World-Action Models"
authors: ["arxiv.org"]
summary: "GlanceWAM 处理世界-动作模型中的实时性矛盾：每个控制周期同步生成未来视频会带来过高延迟，完全移除测试时想象又会损失长时程空间引导。作者的关键做法是把想象从控制关键路径移出：一个视频 DiT 在后台每约 3 秒生成一张未来 lookahead latent，动作头在 0.8 秒动作块周期内直接读取该 latent，并以 48 ms 输出动作块。贡献包括非干扰注意力 mask、可容忍异步老化的 horizon 训练、跨多层 DiT 特征的动作条件，以及证明 lookahead 通道被动作决"
provisionalKeywords: ["世界模型", "机器人操作", "生成式模型"]
keywords: ["世界模型", "机器人操作", "生成式模型"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.23927v1"}]
previewImage: "/daily/2026-08-27/assets/arxiv--2608.23927/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 6
groupScore: 86
scoreScale: "paper-v2"
emphasis: false
---



# GlanceWAM: Sparse Test-Time Imagination for World-Action Models

## 研究问题与贡献

GlanceWAM 处理世界-动作模型中的实时性矛盾：每个控制周期同步生成未来视频会带来过高延迟，完全移除测试时想象又会损失长时程空间引导。作者的关键做法是把想象从控制关键路径移出：一个视频 DiT 在后台每约 3 秒生成一张未来 lookahead latent，动作头在 0.8 秒动作块周期内直接读取该 latent，并以 48 ms 输出动作块。贡献包括非干扰注意力 mask、可容忍异步老化的 horizon 训练、跨多层 DiT 特征的动作条件，以及证明 lookahead 通道被动作决策真实使用。

## 方法与系统

模型基于 SkyReels-V2-DF-1.3B 和因果视频 VAE。训练时引入单张远未来目标，动作头从第 5、12、19、26 层均匀抽取视觉与 lookahead 特征，浅层提供空间细节、深层提供语义目标。异步推理时 lookahead latent 不解码为 RGB，而直接作为动作头 conditioning token；lookahead 生成在后台线程运行，动作头持续使用当前持有且逐渐接近执行时刻的潜变量。训练随机化 lookahead offset，使模型适应 0 到 Hf 的使用延迟；attention mask 防止视频与动作任务互相污染。作者还用 attention 权重、token patch 干预和将 lookahead 置零来检验其因果作用。

## 实验设置与数据

RoboCasa 包含 24 个 Franka 厨房任务，论文遵循 Cosmos Policy 协议，每任务 50 次、共 1200 次，在 5 个 held-out 布局中评估；训练仅用每任务 50 条 replay-filtered 演示，而不是常见 300 条。LIBERO 四个 suite 每任务 50 条演示并评估 2000 次。基线包括 Diffusion Policy、π0/π0-FAST/π0.5、OpenVLA-OFT、CogVLA、Cosmos Policy、Fast-WAM、Motus 等。训练只用 RGB 演示与动作，不做在线 rollout，也不引入深度或 affordance 标注。

## 结果、限制与结论

论文报告 RoboCasa 平均成功率 72.2%，在六分之一演示量下超过 Cosmos Policy 的 67.1%；LIBERO 平均 99.0%。消融显示无 lookahead 共训 64.4%，加入单层 lookahead 到 71.5%，多层到 72.2%；把 lookahead 置零降到 61.6%，证明通道因果有效。动作路径在 A100 上 48 ms/块，同步可比系统为 1133-3812 ms；lookahead 10 步生成约 479 ms，但被异步摊销。采样 1 到 30 步成功率变化仅 1.9%，说明策略主要读取低频空间布局而非像素清晰度。限制是部署必须维持 lookahead 更新节奏：来源滞后 0.8 秒只损失 0.5 点，1.6 秒接近置零，3.2 秒会主动误导；真实机器人验证也仍待补充。该方法为实时控制中的测试时想象提供了清晰工程边界。

## 来源链接

- 论文：https://arxiv.org/abs/2608.23927
- PDF：https://arxiv.org/pdf/2608.23927
- 代码：https://github.com/linhanwang/GlanceWAM
