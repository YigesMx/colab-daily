---
candidateId: "arxiv--2608.20556"
businessCandidateId: "arxiv--2608.20556"
date: "2026-08-25"
category: "Paper"
title: "Logic-VLA：用信号时序逻辑约束VLA的安全行为"
authors: ["arxiv.org"]
summary: "Logic-VLA 在推理时接收 Signal Temporal Logic 规范，用语法图编码器和满足/违反轨迹偏好优化训练单一策略；对未见结构规范的满足率达 82.0%，较 STL-blind 基线最高提升 40.7 个百分点。"
provisionalKeywords: ["视觉语言动作模型", "模型安全", "运动控制"]
keywords: ["视觉语言动作模型", "模型安全", "运动控制"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.20556v1"}]
previewImage: "/daily/2026-08-25/assets/arxiv--2608.20556/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 84
scoreScale: "paper-v2"
emphasis: false
---
# Logic-VLA：用信号时序逻辑约束VLA的安全行为

## 研究问题与贡献

自然语言指令可以告诉机器人“去哪里”，但难以精确表达“在某段时间内必须保持”或“直到某条件发生才能进入”等安全约束。论文提出 Logic-VLA，让同一个 VLA 策略根据 Signal Temporal Logic（STL）规范在推理时调整行为。

贡献包括 STL 语法图编码器、语义预训练、满足/违反轨迹配对的偏好优化，以及在四旋翼闭环导航中对见过参数、未见参数和未见结构规范的泛化评测。

## 方法与系统

系统以 π0.5 为初始化，先用无 STL 条件的导航数据适配基础策略，再用 STL 语法图编码器把形式规范映射到 VLA conditioning 空间。编码器先通过 robust semantics 预训练捕捉时序算子、谓词和逻辑组合的语义。

后训练分两阶段：第一阶段用满足规范的轨迹做规范条件模仿；第二阶段把同一初始状态邻域内满足与违反的 rollout 配对，用偏好优化强化规范满足行为，同时用首选轨迹锚定保持原任务能力。相对直接最大化可微 robust semantics，该方法避免为提高规范分数而牺牲自然语言任务。

## 实验设置与数据

实验在 NVIDIA Isaac Sim 的十个随机 photorealistic 仓库和六个自然语言导航任务中执行，使用 3000 条无碰撞可行轨迹，闭环控制频率 10 Hz。数据构造得到 1224 个不同 STL 公式、87 个结构和 13494 个偏好对。评测分为 Seen、Unseen Parameter 和 Unseen Structure，比较 STL-blind、STL-SFT、smooth robust semantics 优化和 Logic-VLA。本次 refine 已读取 PDF、TeX、架构图和结果表。

## 结果、限制与结论

论文报告 Logic-VLA 在 Seen、Unseen Parameter、Unseen Structure 的 STL 满足率分别为 82.0%、74.8%、82.0%，自然语言任务成功率为 89.0%、92.2%、87.5%。三种设置下较 STL-blind 基线提升 24.8 到 40.7 个百分点，任务成功率最多下降 1.8 个百分点。直接鲁棒语义优化虽然提高规范满足，但在 Seen 设置中把任务成功率压到 45.0%-68.5%。

限制是验证集中于仿真四旋翼导航和 π0.5 骨干；STL 生成依赖预定义谓词和结构模板，真实感知噪声、模型不确定性以及更复杂接触任务中的安全证明未在当前实验中覆盖。

## 来源链接

- 论文：https://arxiv.org/abs/2608.20556
- PDF：https://arxiv.org/pdf/2608.20556
- arXiv 源码：https://arxiv.org/e-print/2608.20556
