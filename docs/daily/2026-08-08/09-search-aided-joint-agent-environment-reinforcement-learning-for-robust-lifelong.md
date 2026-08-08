---
candidateId: "arxiv--2608.05588"
category: "Paper"
date: "2026-08-08"
rank: 9
title: "Search-Aided Joint Agent-Environment Reinforcement Learning for Robust Lifelong Multi-Agent Path Finding with Rotations"
authors:
  - "He Jiang"
  - "Jingtian Yan"
  - "Yulun Zhang"
  - "Yimin Tang"
  - "Tanishq Duhan"
  - "Rishi Veerapaneni"
  - "Guillaume Sartoretti"
  - "Jiaoyang Li"
summary: "论文研究带鲁棒安全距离和原地旋转约束的 LMAPF-R2，并提出 SJRL 联合学习局部 agent policy 与生成全局边代价的 environment policy。同步 Causal PIBT 在神经策略后解决冲突并传播意图，环境策略用 guidance graph 和 backward Dijkstra 提供全局引导。六张高密度地图和混合现实仓库实验显示，联合方法超过强搜索基线；8 个实体机器人与 248 个虚拟机器人实验的吞吐均值为 1.01。"
keywords:
  - "多智能体路径规划"
  - "在线自适应优化"
score: 87.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.05588"
previewImage: "/daily/2026-08-08/assets/arxiv--2608.05588/preview.png"
---

## 核心内容

LMAPF 要在一个目标完成后持续分配新目标，目标是长期吞吐最大化。论文认为学习型规划器常用的标准 MAPF 模型过度简化了真实机器人约束，因此提出 LMAPF-R2：禁止跟随碰撞以保持最小安全距离，并要求机器人在换向时花多个时间步原地旋转。高密度、窄通道和长时域共同使死锁、活锁与拥堵更严重。

SJRL 采用两个互补策略。agent policy 在局部视野中选择下一顶点作为 subgoal，并由同步 Causal PIBT 通过优先级继承和深度优先搜索处理冲突、传播 agent 意图；environment policy 只在地图级生成每条边的代价，再用 backward Dijkstra 计算面向目标的启发距离，为 agent policy 提供全局 movement guidance。两者在统一 RL 过程中联合优化，而不是只优化单个机器人局部行为。

## 关键技术与数据

- 问题模型：4 邻域网格图上每个 agent 有位置和东/南/西/北朝向，可前进、顺/逆时针旋转或等待；同时禁止顶点碰撞、跟随碰撞和交换位置导致的边碰撞。每个时间步的目标是平均完成目标数（`AnonymousSubmission2027.tex`，Problem Formulation，约 269-278 行）。
- agent policy：输入包括静态障碍、agent 优先级、busy/free 状态以及四个朝向的启发特征；CNN、通信模块和 MLP 后用 skip connection 直接注入启发距离。策略预测下一顶点而非 primitive action，Causal PIBT 只为 free agents 分配 subgoal，busy agents 的当前位置和 subgoal 作为障碍，之后贪心旋转、等待或移动（约 344-363 行）。
- environment policy：五层 `3x3` CNN 根据障碍和预运行统计生成每条边代价的高斯均值/方差，代价经变换限制在 `[1,10]`；推理用均值，随后 backward Dijkstra 生成启发距离。agent policy 先 warm-up，再与环境 policy 联合训练（约 365-385 行）。
- 实验设置：六张 Moving-AI/SILLM 地图，每张用 256 agents 训练，测试 32-320 agents，单次 512 步；默认 32 个随机种子，推理每步低于 0.05 秒。补充验证使用 8 个实体机器人和 248 个虚拟机器人（约 387-389、657-687、718-739 行）。

## 结果与结论

主实验显示 SJRL 随 agent 数增加明显超过 Causal-PIBT，并稳定超过只训练 agent 的 SARL、只训练 environment 的 SERL 和 CMA-ES guidance graph。作者把收益归因于局部反应策略与全局流量引导的互补：两种学习都提高平均 pairwise distance，减少空间拥堵。与 SILLM、MAGAT+、HMAGAT 的比较中，SJRL 在六张地图上持续领先；论文同时提醒这些方法原本使用标准模型，比较包含模型差异因素。

混合现实仓库中，NORL、SERL、SARL、SJRL 的吞吐均值/标准差分别为 `0.72/0.04`、`0.84/0.07`、`0.87/0.06`、`1.01/0.07`。消融表明 skip connection 有益，三种朴素碰撞屏蔽都不如 Causal PIBT；专家初始化边代价还能进一步提升性能，但从均匀代价开始的 SJRL 可能陷入 PPO 局部最优。保守结论是，搜索辅助和 agent/environment 联合学习在本文地图、密度与同步执行设置下有效；跨地图泛化、异步执行和更丰富动力学仍未解决。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.05588)
- [arXiv TeX 源码](https://arxiv.org/e-print/2608.05588)
