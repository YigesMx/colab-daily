---
candidateId: "arxiv--2608.23565"
businessCandidateId: "arxiv--2608.23565"
date: "2026-08-26"
category: "Paper"
title: "ReWorld: An Interactive World Model with Long-Horizon Memory"
authors: ["arxiv.org"]
summary: "ReWorld 用混合注意力窗口和固定 pose 索引地标缓存，把实时交互生成与长程回访记忆放在同一交互世界模型中。"
provisionalKeywords: ["世界模型", "具身智能", "模型部署"]
keywords: ["世界模型", "具身智能", "模型部署"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.23565v1"}]
previewImage: "/daily/2026-08-26/assets/arxiv--2608.23565/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 88
scoreScale: "paper-v2"
emphasis: true
---

# ReWorld: An Interactive World Model with Long-Horizon Memory

## 研究问题与贡献

论文关注交互式世界模型中“控制”和“记忆”的结构性冲突：控制只需要近期场景和当前命令，响应应尽量不受历史窗口影响；记忆则必须看到远处过去，才能在相机回到旧位置时复现该位置。若两者在同一长窗口中直接共同训练，直接动作注入会改善控制但削弱重访记忆。

ReWorld 的贡献是把控制与记忆按注意力窗口拆开训练，再在固定 KV 预算下推理。模型使用混合 per-head 注意力窗口、随机 head routing、pose-indexed landmark bank、chunk-drop 训练和 LoRA 化少步蒸馏，实现 704x1280 实时流式生成、高控制精度和分钟级重访记忆。

## 方法与系统

模型基于 Wan2.2-TI2V-5B 因果流匹配扩散 Transformer，将视频切成 12 个 latent chunk 生成。MRoPE 把相机位姿作为注意力检索键，使相似视角在时间上相隔很远时也能相互匹配；直接动作注入把每帧目标位姿转成 Plücker ray map 加到 patch embedding，为当前 chunk 提供明确控制。

训练时每块 24 个 head 中 6 个全局关注完整因果历史、18 个局部只看最近 12 个 latent frame，并在 12 个随机全局 head 分区之间逐步切换，避免能力绑定到特定 head。推理时固定 12 chunk 缓存由 1 个 sink、5 个近期 chunk 和 6 个按当前位姿检索的 landmark 组成；landmark bank 最多 30 个成员，按相机行程间隔写入并按空间冗余度淘汰。chunk-drop 训练随机保留 sink 加 5 个历史 chunk，使部署时的稀疏非连续缓存成为分布内输入。四步 DMD LoRA 只训练注意力和 FFN 的低秩适配器，动作与位姿路径不挂 LoRA，从而保留原多步高保真模式和实时模式。

## 实验设置与数据

训练语料包含 8 个来源、220,724 条带位姿标注片段：两个自建 Unreal Engine 控制与扩展集、DL3DV、RealEstate10K、Sekai real-walking-hq、游戏漫游、OmniWorld-Game 和 Sekai game-walking。UE 服务在 337 个环境中规划方向均衡轨迹并输出真值位姿；各来源按 UE 平移增量中位数统一到同一物理尺度。两个 UE 来源以 0.2 概率采样 palindrome 轨迹，为“离开再返回”的记忆学习提供显式重访证据。

评估覆盖 40 张起始图 x 6 种轨迹、每方法 240 条控制片段，并与 SANA-WM、DreamX、HY-WorldPlay、Matrix-Game 3.0、LingBot-World 和 Yume-1.5 比较。长程记忆使用 palindrome needle-in-a-haystack 协议，在 48 与 96 latent 的公共设置以及 96、192、288、384 latent 的自建扩展上评估 SSIM、LPIPS、DINO 和 ORB 重访一致性；质量评估使用 7 个 VBench 内在维度。

## 结果、限制与结论

论文报告 ReWorld 在控制基准取得最低整体旋转误差 11.95 度、最低 camera-motion consistency 0.332，translation error 0.102。96 latent 重访测试中，ReWorld 在路径长度 615 px 的条件下取得 SSIM 0.384、LPIPS 0.332、DINO 0.932 和 ORB 0.379；VBench 七维度均值为 0.850，是报告方法中最高。消融显示随机 head routing 在保持控制指标的同时把重访 SSIM 从无 routing 的 0.3376 恢复到 0.3752；固定 12 chunk landmark 缓存在 64 秒、384 latent 的 out-and-back rollout 中仍能再生起始视角，而 full-KV 在超过 192 latent 后内存耗尽。

作者在结论中说明当前记忆只以相机位姿为键，动态场景和更丰富的非导航交互是自然扩展方向。论文报告了 4 步实时推理和 2.6 GB LoRA，但外部部署硬件成本、跨 checkpoint 迁移之外的泛化以及动态物体记忆的定量结果当前材料未确认。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.23565v1)
- [PDF 全文](https://arxiv.org/pdf/2608.23565v1)
