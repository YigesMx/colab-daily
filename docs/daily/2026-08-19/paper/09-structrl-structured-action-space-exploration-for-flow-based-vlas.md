---
candidateId: "arxiv--2608.15139"
businessCandidateId: "arxiv--2608.15139"
date: "2026-08-19"
category: "Paper"
title: "StructRL: Structured Action-Space Exploration for Flow-Based VLAs"
authors: ["arxiv.org"]
summary: "StructRL 证明链内结构化噪声会被剩余去噪稀释，转而在执行动作空间注入时间相关且分组缩放的噪声，并用 last-step replay 更新 flow-based VLA，论文报告模拟 OOD 和真实适配效率明显提升。"
provisionalKeywords: ["强化学习", "VLA", "动作探索", "flow matching"]
keywords: ["视觉语言动作", "机器人学习"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.15139v1"}]
previewImage: "/daily/2026-08-19/assets/arxiv--2608.15139/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 9
groupScore: 81
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.15139 -->
# StructRL：面向 flow-based VLA 的结构化动作空间探索

## 研究问题与贡献

论文研究如何用在线强化学习适配 flow matching VLA。常见做法把随机性注入去噪链，但机器人探索需要时间上平滑、不同动作组尺度不同的噪声；论文发现，中间流时间注入的结构化噪声会被剩余去噪步骤拉回监督微调流形，其时间相关性和组间尺度在执行前被削弱。

作者把该现象命名为 Structured Noise Dilution，并提出 StructRL：保持 flow 解码器确定性，把探索分布直接放在执行动作空间，并用 last-step replay 把动作空间似然的策略梯度传回流解码器。论文在 π0、π0.5 和 GR00T N1.5 三个 flow-based VLA、多组模拟操作任务和两个真实任务上验证。

## 方法与系统

StructRL 先用确定性 ODE 从当前观测生成干净动作块，再在动作端加入结构化噪声。噪声使用 AR(1) 时间相关，分别对位置、旋转和夹爪动作设置尺度，从而避免独立同分布抖动和不安全的等尺度扰动。执行的动作就是解码动作加上该噪声，结构不会被后续去噪覆盖。

训练上，策略似然定义在采样的动作空间扰动上，而不是中间去噪状态。Last-step replay 在训练时重放最终一个或多个 ODE 跳跃，使梯度能更新完整 flow 场，同时避免为每个中间去噪状态定义概率。模拟并行 rollout 使用 PPO；真实低吞吐场景结合 AWAC，把 chunk 转移、人类干预和初始噪声一起离线重用，用优势加权行为克隆反复更新。

## 实验设置与数据

论文先用 GR00T N1.5 SFT 模型在 LIBERO-Long 上注入指定时间相关性和位置重度尺度，比较链内注入与动作端注入后的输出统计，直接验证噪声稀释。主实验覆盖 LIBERO 四套件和 ManiSkill 的分布内/OOD 任务，比较 Flow-SDE+PPO、Flow-CPS、π-StepNFT、动作端 Gaussian baseline 和 StructRL。消融研究噪声强度、注入方案、训练-推理 replay 一致性和去噪步数。

真实实验在 Franka FR3 上进行，包括 pick-banana 和 plug-charger-in。每个任务先用 10 条演示做 SFT，初始成功率为 0%；随后进行少量人类干预下的在线 RL。Pick-banana 使用 10 步 chunk 和 7 自由度动作，plug-charger-in 使用 5 步 chunk 和固定夹爪的 6 自由度动作。

## 结果、限制与结论

论文报告，GR00T N1.5 的 LIBERO 平均成功率从 SFT 的 52.5% 提升到 StructRL 的 99.0%，比 Flow-SDE+PPO 高 2.5 个百分点。ManiSkill 中，仅把注入位置从链内移到动作端，就使 π0 的 OOD 平均从 39.3% 提升到 67.3%，π0.5 从 49.3% 提升到 65.9%；StructRL 主要进一步提高学习效率，例如在 LIBERO-Long 约 40 个训练步达到 90% 成功，而 Gaussian baseline 约需 80 步。真实 pick-banana 在 60 分钟后达到 84%（21/25），Gaussian baseline 为 56%（14/25）；plug-charger-in 约在 30 分钟进入稳定成功，baseline 约需 35 分钟。

论文结论本身区分了两个效应：动作端注入带来主要 OOD 提升，时间与组结构主要改善探索效率，饱和后的最终性能未必普遍更高。本文分析认为，真实任务只有两个受控桌面任务，且论文未完整量化安全约束、人类干预次数和跨本体敏感性；因此更稳妥的结论是，对 flow-based VLA 的 RL 适配，探索分布应定义在最终执行动作上，而不是默认定义在去噪链内部。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.15139v1)
- [官方项目页](https://flyfaerss.github.io/structrl/)

