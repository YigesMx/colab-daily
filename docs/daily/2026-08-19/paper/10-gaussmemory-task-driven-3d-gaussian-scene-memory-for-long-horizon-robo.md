---
candidateId: "arxiv--2608.14986"
businessCandidateId: "arxiv--2608.14986"
date: "2026-08-19"
category: "Paper"
title: "GaussMemory: Task-Driven 3D Gaussian Scene Memory for Long-Horizon Robotic Manipulation"
authors: ["arxiv.org"]
summary: "GaussMemory 用 3D Gaussian 作为持久场景记忆，并通过统一读写注意力学习任务相关的更新与读出，论文报告 LIBERO Long-10 94.1% 成功率和 VLABench 两个 track 分别提升 5.2 与 6.0 个百分点。"
provisionalKeywords: ["空间记忆", "3D Gaussian", "长时程任务", "VLA"]
keywords: ["视觉语言动作", "空间记忆"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.14986v1"}]
previewImage: "/daily/2026-08-19/assets/arxiv--2608.14986/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 10
groupScore: 80
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.14986 -->
# GaussMemory：任务驱动的 3D Gaussian 场景记忆

## 研究问题与贡献

论文关注长时程操作中的持久空间记忆。无记忆 VLA 只能依赖当前 RGB 观测；当物体被放入两个视觉上相同的抽屉之一并关闭后，当前观测无法推断正确位置。已有 2D token、文本场景图或对象级 3D 图谱多为被动记录器，用固定规则决定匹配、平均、剪枝和保留，任务目标和记忆读写彼此割裂。

GaussMemory 提出把记忆更新和读出统一为一个任务驱动的计算过程：模型学习哪些物体要精确追踪、何时信任新观测、何时保留旧状态、何时插入或删除 Gaussian。论文报告，在 LIBERO 的 Goal 和 Long-10 上超过 MemoryVLA，在 VLABench Track 1 和 Track 6 上分别比 π0-FAST 高 5.2 和 6.0 个百分点。

## 方法与系统

系统用 feed-forward 3D Gaussian Splatting 编码器把三视角 RGB 转为带位置、协方差、透明度、语义特征、时间戳、对象身份和存在概率的持久 Gaussian 记忆。Unified Memory Attention（UMA）把观测 token、任务条件读出 query 和记忆 Gaussian token 拼接进共享 cross-attention，使读出需求能影响写入，记忆变化也能影响读出。

更新端包含多个可学习机制：匹配强度聚合决定观测与记忆条目的对应关系；学习到的更新门 η 根据观测特征、匹配强度和时间间隔决定信任新观测的程度；存在概率低于阈值的 Gaussian 被剪枝；低匹配观测可被插入为新对象。LLM backbone 接收 UMA 输出的 3D 空间上下文、2D 视觉 token、语言和本体状态，并由 diffusion action head 输出末端位姿增量和夹爪动作。总损失包含动作预测、子任务完成、时间一致性和带任务权重的记忆位置监督。

## 实验设置与数据

LIBERO 评估覆盖 Spatial、Object、Goal 和 Long-10 四套件共 40 个任务，每任务 20 次试验，结果在三个随机种子上平均。由于方法需要多视角，作者在默认第三人称相机之外渲染两个虚拟视角，并在消融中比较二视角与三视角。VLABench 使用内置前视和双侧相机，评估 Track 1 的 20 个 primitive 任务和 Track 6 的 10 个长时程复合任务。

实现上，FF-3DGS 每步生成 8,192 个 live Gaussian 并池化为约 20 个对象 token；记忆上限 32K Gaussian，64 个读出 query，6 层 UMA。训练在 4 张 A100 上进行 120K step。基线包括 OpenVLA、π0、π0-FAST、CogACT、MemoryVLA、CronusVLA、4D-VLA 等，并设置同 backbone、无记忆和 2D token 记忆消融。

## 结果、限制与结论

论文报告，GaussMemory 在 LIBERO Goal 达到 96.8%、Long-10 达到 94.1%，分别高于 MemoryVLA 的 96.4% 和 93.4%；MemoryVLA 在更依赖短时语义识别的 Spatial/Object 上仍领先。相对无记忆同 backbone，增益从 Spatial +4.0、Goal +8.6 增至 Long-10 +11.7；同 UMA 的 2D token 记忆在 Long-10 为 90.2%，低于 3D Gaussian 的 94.1%。VLABench Track 1 为 56.4% 成功率，Track 6 为 24.0%，高于 π0-FAST 的 51.2% 和 18.0%。消融显示固定 η=0.3 的被动 3D 记忆已达 90.4%，完整主动门控和存在管理升至 94.1%；学习到的更新门对被操作物体平均约 0.74，对背景约 0.06。

论文主要证据来自模拟基准，未在正文中报告真实机器人部署、实时延迟或完整训练成本；额外虚拟视角也可能在某些模拟器外不易获得。本文分析认为，最重要的实验点是 2D/3D 和统一读写消融，它们把收益归因到几何记忆与读写耦合，而不是简单增加视角或参数。后续值得验证的是，该方法在真实相机噪声、动态遮挡和更大场景中能否维持 32K Gaussian 容量与更新稳定性。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.14986v1)

