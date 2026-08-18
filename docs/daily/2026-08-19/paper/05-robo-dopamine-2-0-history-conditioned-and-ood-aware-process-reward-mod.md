---
candidateId: "arxiv--2608.15680"
businessCandidateId: "arxiv--2608.15680"
date: "2026-08-19"
category: "Paper"
title: "Robo-Dopamine 2.0: History-Conditioned and OOD-Aware Process Reward Modeling for Robotic Manipulation"
authors: ["arxiv.org"]
summary: "Robo-Dopamine 2.0 用历史面板、带符号 OOD 进度空间和 Signed-Hop 课程学习过程奖励，论文报告 RoboTwin 平均 86.8% 成功和真实双臂 71/80 次成功插入。"
provisionalKeywords: ["奖励模型", "机器人操作", "分布外泛化", "强化学习"]
keywords: ["机器人操作", "机器人学习", "奖励模型"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.15680v1"}]
previewImage: "/daily/2026-08-19/assets/arxiv--2608.15680/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 5
groupScore: 85
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.15680 -->
# Robo-Dopamine 2.0：历史条件化且分布外感知的机器人过程奖励模型

## 研究问题与贡献

论文针对 VLA 强化学习中的奖励瓶颈：稀疏成功信号探索效率低，人工稠密奖励脆弱且任务专用；已有视觉奖励模型常只看前后静态状态，难以区分视觉相似但处于不同隐藏阶段的状态，也难以区分保持任务语义的扰动与真正失败。

Robo-Dopamine 2.0 的贡献是三部分统一设计：历史条件化的成对过程奖励；带符号的分布外进度空间，同时表示有效进度、鲁棒扰动、失败和恢复；Signed-Hop 课程与转移感知重放，用于先学全局顺序再校准细粒度差异。论文还构建了覆盖 ID、时间记忆、OOD 负例、OOD 鲁棒和 OOD 时间五类场景的评测。

## 方法与系统

模型保留成对预测接口，输入任务指令、起止参考锚点、时间上下文面板和两个被查询的多视角状态，输出带符号的相对进度。标准查询使用同episode专家历史；在线查询使用实际 rollout 前缀；合成 OOD 查询保留被编辑的两个端点，但参考面板来自源成功轨迹，避免用编辑图像污染上下文。

带符号进度空间把成功状态、鲁棒 OOD 状态和失败状态放入统一几何：鲁棒扰动与对应成功进度同值，错误物体交互、空抓、未释放和目标替换映射为负进度，恢复则从负分支回到有效进度。Signed-Hop 课程先用大跨度样本学习成功/鲁棒/失败分支的全局结构，再用小跨度和零跨度样本校准局部顺序，并通过重放保留大转移样本。推理时，成对预测被转换为状态潜力，并与任务奖励一起形成 `r = r_task + γ(Φ_{t+1}-Φ_t)` 的稠密 shaping。

## 实验设置与数据

离线评测使用轨迹级视觉顺序一致性（VOC），数据来自 RoboCasa、LIBERO 和 AgiBot World，并经过阶段有效的任务与相机视角编辑。模型比较静态输入与 3×3 面板输入，并做面板、OOD 监督、QA 混合和课程消融。任务完成分类另在 60 个 episode 上与多个大模型比较。

下游 RL 包括两部分：在 RoboTwin 2.0 的放置空杯、容器上盘和递积木三个任务上用 GRPO 微调 OpenVLA-OFT；在双 Franka 的四孔重复插方块任务上用 ConRFT，每个试验含四次插入，评估 80 次插入和 20 条完整序列。控制条件分别开关 OOD 监督和 rollout 历史面板。

## 结果、限制与结论

论文报告，3×3 历史面板把 Robo-Dopamine 2.0 的平均 VOC 从 0.967 提升到 0.986，OOD 鲁棒 VOC 从 0.906 提升到 0.958；在 400K 成对奖励预算下，Signed-Hop 加 25% 重放达到 0.9872，高于同池随机课程的 0.9858。RoboTwin 上，历史和 OOD 组合 C11 在 300 epoch 内达到 86.8% 平均成功率，超过 1,000 epoch 稀疏奖励的 85.8%；真实重复插方块中 C11 达到 71/80 次插入和 15/20 条完整序列，事件稀疏奖励为 48/80 和 8/20。

论文结论明确提出后续需扩大任务、OOD 和真实机器人评估。本文分析认为，主要证据仍依赖构造的合成 OOD 编辑和有限任务族，历史面板也会增加输入长度和部署复杂度；论文未证明该奖励模型能泛化到未编辑的自然分布外场景或安全约束任务。尽管如此，它把“进度、鲁棒性、失败、恢复”放进同一可学习几何，对需要从近失败状态恢复的 VLA RL 具有直接工程价值。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.15680v1)

