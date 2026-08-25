---
candidateId: "arxiv--2608.21407"
businessCandidateId: "arxiv--2608.21407"
date: "2026-08-26"
category: "Paper"
title: "Mamba-based Selective State Space Modeling Improves the Accuracy-Complexity Tradeoff of SmolVLA Vision-Language-Action Experts"
authors: ["arxiv.org"]
summary: "论文把 SmolVLA 动作专家中的注意力替换为 Mamba 选择性状态空间模型，在长动作视界下改善成功率与计算复杂度权衡。"
provisionalKeywords: ["VLA模型", "模型部署", "机器人操作"]
keywords: ["VLA模型", "模型部署", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.21407v1"}]
previewImage: "/daily/2026-08-26/assets/arxiv--2608.21407/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 10
groupScore: 79
scoreScale: "paper-v2"
emphasis: false
---

# Mamba-based Selective State Space Modeling Improves the Accuracy-Complexity Tradeoff of SmolVLA Vision-Language-Action Experts

## 研究问题与贡献

论文研究 VLA action chunking 中执行前缀长度 N 与准确率/推理复杂度之间的权衡。N=1 时策略频繁使用新观测，控制准确但推理调用过多；N 较大时调用减少、更接近实时部署，却会在过期观测上执行更长动作序列，成功率通常下降。既有 real-time chunking 或 chunk 截断方法多为固定策略后的执行期机制，本文则改变 action expert 内的时序建模。

作者在 SmolVLA 中把 causal self-attention temporal mixer 替换为 Mamba-1 selective state-space scan，保持视觉语言主干、cross-attention grounding、flow-matching 目标、训练协议和输出动作形式不变，从而隔离 intra-chunk 时序算子的影响。结果显示 Mamba 在长执行前缀下更保成功率，同时减少参数量。

## 方法与系统

SmolVLA 的冻结 SmolVLM2-500M-Video-Instruct 主干编码多视角 RGB、机器人状态和指令，为 action expert 提供逐层特征。基线 B0 的专家交替 8 层 cross-attention grounding 与 8 层 causal self-attention；M1 只把后 8 层替换为 Mamba selective SSM，其他组件、H=50 的动作 chunk 长度和 7 维动作表示不变。

Mamba 对 chunk 内有序位置维护输入依赖的 recurrent state：状态转移由当前 token 影响 discretization 与输入/输出投影，使模型能选择保留、更新或抑制先前动作信息。训练沿用条件 flow-matching，从数据到噪声的插值学习速度场；推理固定用 10 个 Euler step 生成完整 chunk。执行时只应用前 N 个动作再重新观测，N 取 1、25、50，训练权重保持不变。

## 实验设置与数据

实验基于 LeRobot，输入图像 resize 到 512x512，冻结主干并只训练 action expert。B0 可训练参数为 99.9M，M1 为 76.3M，减少约 23.6%；两者各训练 30,000 步、global batch size 64，AdamW 使用相同 warm-up 与 cosine 学习率。

评估使用标准 LIBERO 四 suite：Spatial、Object、Goal 和 Long 共 40 个 Franka Panda 仿真任务。训练数据为覆盖 40 任务的 1,693 条官方演示，每任务 10 次 rollout，结果为 3 个训练种子的均值和标准差；对每个 horizon，40 个任务作为配对观察，M1-B0 差值用 10,000 次 bootstrap 报告 95% CI。

## 结果、限制与结论

论文报告 N=1 时 B0/M1 成功率为 75.9%/76.2%，差异 0.3 个百分点且置信区间跨零；N=25 时为 71.0%/74.7%，M1 高 3.7 个百分点；N=50 时为 53.9%/61.8%，M1 高 7.8 个百分点，95% CI 为 3.0-12.6。N 从 1 到 50 的成功率下降分别为 B0 22.0 和 M1 14.5 个百分点。分 suite 看，N=50 时 M1 在 Object 和 Spatial 上分别高 17.7 和 10.0 个百分点，但 Goal 低 1.0 个百分点；Long 对两者都最难。

局限是研究仅在 SmolVLA/LIBERO 仿真协议中完成，每任务 10 次、3 个种子的规模有限；Goal suite 的劣势说明收益不均匀，长时任务整体成功率仍低。作者将扩展到更多 VLA 架构和真实机器人，当前材料未确认物理部署延迟、能耗或实时控制器中的收益。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.21407v1)
- [PDF 全文](https://arxiv.org/pdf/2608.21407v1)
