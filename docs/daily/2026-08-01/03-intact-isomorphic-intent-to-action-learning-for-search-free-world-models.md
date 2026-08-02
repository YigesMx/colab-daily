---
candidateId: "arxiv--2607.26056"
date: "2026-08-01"
rank: 3
title: "INTACT: Isomorphic Intent-to-Action Learning for Search-Free World Models"
authors:
  - "Junhan Sun"
  - "Hao Zhao"
  - "Guofeng Zhang"
summary: "INTACT 在前向 JEPA 上增加共享的条件动作算子，把真实一步转移和部署时目标位移映射到同一动作分布，使四个 LeWM 仿真任务可以直接零搜索控制，并把小规模搜索降为可选的局部验证。"
keywords:
  - "world models"
  - "intent-to-action"
  - "search-free control"
  - "JEPA"
  - "robot control"
score: 88
sources:
  - name: "arXiv TeX source"
    url: "https://arxiv.org/src/2607.26056"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2607.26056"
  - name: "Project page"
    url: "https://zju3dv.github.io/INTACT-JEPA/"
previewImage: "/daily/2026-08-01/assets/arxiv--2607.26056/79a6e3cc10dfb9d5503e0efc0625882f27ff2ff5fdf62c4b76eadffdd0279d4b.png"
---

## 核心内容

前向 latent world model 擅长回答“给定动作后场景会怎样”，却不能直接回答“为了到达目标该执行什么动作”。LeWM 一类方法因此在部署时从无信息高斯分布采样动作序列，再用前向模型和 CEM 搜索排名。INTACT 的核心目标是把这种昂贵的逆向搜索摊销进训练：从带动作但无奖励的离线轨迹中，学习一个可在看到当前图像与目标图像后直接输出动作的接口。

方法在同一个 encoder 和 forward predictor 之外加入条件动作算子 `G`。训练时它被调用两次：物理分支以真实相邻 latent 差 `z(t+1)-z(t)` 为条件，保证表示保留能恢复动作的一步变化；目标分支以停止梯度的未来目标差 `sg(zg)-z(t)` 为条件，让部署时可用的目标成为动作条件。两次调用具有相同四槽输入语法并共享参数，但作者没有强迫两类 latent 位移逐点相等。“isomorphic”指共享结构和由同一个条件动作分布建立的语义对应，不代表 latent 动力学全局线性。

部署时，Direct 控制从当前 latent 开始，反复计算到目标的位移，用条件高斯均值生成一个动作块，再由前向模型预测下一个 latent，组成长度为五个动作块的计划；执行首块后重新观测和规划。它不采样候选，也不调用终端代价。Guarded A 则以 Direct 计划为中心，用 128 个样本、3 次迭代做局部验证，而不是从全局原始动作分布搜索。

## 关键技术与数据

离线轨迹由 RGB 观测和动作组成。每个动作块含 5 个环境步，训练窗口含 5 个块；前向模型读取最近 3 个 latent 与动作块。动作算子的输入拼接当前状态、目标位移、二者逐元素乘积以及前一动作嵌入，三层 MLP 输出对角高斯，log 标准差裁剪到 `[-5,2]`。单任务目标同时包含 world prediction、真实后继 inverse likelihood 和 goal likelihood；多任务版本共享 ViT-Tiny/14 encoder、projector 和 192 维 latent，但保留任务专属 forward、动作嵌入和动作头。

实验使用 LeWM 的 PushT、OGBench Cube、DMC Reacher 和 TwoRoom 四个仿真任务。单任务模型各训练一个 epoch，batch size 256、AdamW 学习率 `5e-4`，每个 checkpoint 用 3 个评估 seed、每个 seed 100 episodes；多任务训练 5 epochs，使用 3 个训练 seed。作者把官方成功率和修复初始已解与 evaluator 问题的 CLEAR-LeWM Moderate 审计严格分开，不混合汇报。

对照覆盖 Direct、关闭动作头的 Pure CEM `300×30`、大预算 actor-on CEM 和 Guarded A `128×3`。另有 frozen probe、effective rank、动作 R²、预测-专家 CKA/kNN 与跨 seed gauge 映射，用于区分 encoder 表示改善、动作读出和搜索带来的贡献。

## 结果与结论

作者报告单任务、一个 epoch 的 goal-displacement INTACT Direct 在 PushT/Cube/Reacher/TwoRoom 上分别达到 85.78%、100.00%、97.67% 和 97.89%，宏平均 95.33%，规划侧延迟 2.9 至 5.5 ms，候选数为零。Guarded A 用 384 而非 9,000 个候选把宏平均提高到 96.86%；大预算 actor-on CEM 反而只有 93.78%，支持“搜索适合作为已学计划的局部验证，而非重新做全局提案”。更严格的 CLEAR Moderate 下 Direct/Guarded A 宏平均降至 83.33%/84.83%，特别是修正角度拓扑后 Reacher 从官方 97.67% 降至 49.56%，说明 headline 对 evaluator 定义敏感。

多任务共享 encoder 在第 5 epoch 的 Direct 宏平均为 89.39%，相对匹配的 LeWM+CEM 66.17% 更高；Guarded A 为 90.47%。关闭动作头后，Goal INTACT 的 pure-CEM 宏平均仅从 LeWM 的 66.17% 提至 70.08%，说明表示确有改善，但大部分闭环收益来自共享的 intent-to-action 接口。预测与专家动作族的局部 kNN 对齐和 Direct 成功率相关系数报告为 `r=0.954`，但相关分析仍不是因果证明。

适用范围相当明确：实验只有四个仿真任务、固定图像目标、任务专属动作头和离线专家轨迹，尚未证明真实机器人、分布外目标、干扰物或跨 embodiment 泛化。动作分布是对角高斯且部署执行均值，在多峰动作或接触切换处可能落在有效模式之间；goal displacement 也只在演示支持范围内被识别，遇到障碍与多模态路径并不保证正确。三训练 seed 只能粗略估计波动。因此，INTACT 的有力结论是它在受控 LeWM 设置中显著减少了测试时搜索，而不是普遍消除了机器人规划。

## 来源链接

- arXiv TeX 原始源码：https://arxiv.org/src/2607.26056
- arXiv 论文页：https://arxiv.org/abs/2607.26056
- 项目主页：https://zju3dv.github.io/INTACT-JEPA/
