---
candidateId: "url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-09-06-3"
date: "2026-09-07"
category: Paper
title: "StarVLA：乐高式 VLA 开源代码库持续扩张，RoboDojo 与 RoboCasa365 九月连更"
authors: ["www.jiqizhixin.com"]
summary: "StarVLA 是当前最全面的开源 VLA 研究代码库之一：模块化骨干-动作头抽象同时支持 VLM 与世界模型骨干，统一集成 LIBERO、SimplerEnv、RoboTwin 2.0、RoboCasa-GR1、BEHAVIOR-1K 五大基准，并以最小数据工程的单一基准配方匹配或超越既有方法；9 月 5 日更新 RoboCasa365 集成（StarVLA-PI 最佳 40.64%），8 月起经 XPolicyLab 支持 RoboDojo 官方数据训练与 42 任务协议评测。机器之心 9 月 6 日报道中「16 卡训练、20% 数据超 GR00T N1.6、RoboDojo 超 WAM」等对比数字当前官方材料未确认。"
keywords:
  - VLA 与机器人操作
  - 具身数据与基础设施
  - 模型评测与鲁棒性
  - 开源生态与工具链
sources:
  - { "name": "www.jiqizhixin.com", "url": "https://www.jiqizhixin.com/articles/2026-09-06-3" }
previewImage: "/daily/2026-09-07/assets/url--https_3a_2f_2fwww.jiqizhixin.com_2farticles_2f2026-09-06-3/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 75.0
scoreScale: "paper-v2"
emphasis: true
---
# StarVLA：乐高式 VLA 开源代码库持续扩张，RoboDojo 与 RoboCasa365 九月连更

**一句话结论**：StarVLA 用「乐高式」模块化代码库把 VLA 研究中碎片化的架构、训练与评测统一起来——骨干与动作头可独立替换、五大基准一个接口、单一基准配方即可复现强基线，9 月又在 RoboDojo 与 RoboCasa365 两个方向连续更新，是当前具身开源基础设施的重要底座。

## 研究问题与贡献

构建通用具身智能体需要整合感知、语言理解与动作，VLA（视觉-语言-动作）路线因此快速兴起，但现有方法在架构、代码库与评测协议上高度碎片化，妨碍了有原则的比较与复现。StarVLA 团队在技术报告（arXiv 2604.05014，GitHub 已超 3,500 星）中提出一个开源代码库，贡献集中在三点：其一，模块化「骨干-动作头」架构，VLM 骨干（如 Qwen-VL 系列）与世界模型骨干（如 Cosmos）可在同一抽象下独立替换，并覆盖四种代表性动作解码范式；其二，可复用训练策略，包括跨 embodiment 学习与多模态 co-training，在各范式下一致适用；其三，统一评测接口集成 LIBERO、SimplerEnv、RoboTwin 2.0、RoboCasa-GR1 与 BEHAVIOR-1K，支持仿真与真机部署。报告特别强调「简单、完全可复现的单一基准训练配方」在最小数据工程下已在多个基准上匹配或超越既有方法。

本期窗口内的动态：9 月 5 日仓库更新了 RoboCasa365（PandaOmron）集成，附带整合的数据/训练/评测指南与 50 任务本地研究快照，覆盖 StarVLA-OFT、StarVLA-PI、StarVLA-GR00T 三个变体，其中最佳本地结果为 StarVLA-PI 的 40.64%（1,016/2,500）；8 月上旬起通过 XPolicyLab 支持 RoboDojo 官方数据集训练与官方协议评测。机器之心 9 月 6 日以《20%数据超GR00T N1.6、RoboDojo超WAM！StarVLA只用16卡训出全新VLA！》为题报道本方向；标题中的具体对比数字（16 卡训练、20% 数据超越 GR00T N1.6、RoboDojo 超过 WAM）在当前官方材料中未获确认，本文按官方可核验材料呈现。

## 方法与系统

StarVLA 的核心抽象是「骨干与动作头各自可换」。以 RoboDojo 配方为例：三个已发布变体共享 Qwen3-VL-4B-Instruct 基座与统一观测/动作契约（头部+左右腕三路 RGB，224×224；ARX X5 双臂 14 维绝对关节位置动作；50 步动作块，执行 16 步后重规划），动作头分别为 QwenOFT（MLP + L1 回归）、QwenGR00T（16 层 DiT-B flow-matching，768 隐宽、12 头）与 QwenPI_v3（36 层 LayerwiseFM）；三者端到端训练 VLM、VLM 接口与动作头，共享 per-GPU batch 16、AdamW、余弦调度与 5,000 步 warmup。仓库还提供 WM4A（World Model for Action）路线，用 Cosmos-Predict2、Wan2.2 等视频生成 DiT 作为动作预测骨干，以及 Franka、Unitree G1 全身、Realman、EgoVLA 等真机开发案例与 RL 后训练（RLinf）集成。

## 实验设置与数据

RoboDojo 路线直接读取官方 64GB LeRobot v2.1 导出（3,500 条 episode、35 个训练任务），评测使用官方完整 42 任务协议、每任务 50 episodes（每策略 2,100 episodes），由 XPolicyLab 维护的策略适配与评测运行时执行；Hugging Face 模型卡公开了 QwenOFT/QwenGR00T/QwenPI_v3 在 42 任务上的完整分组对照表。RoboCasa365 方向使用 50 任务本地研究快照，团队明确说明这些目标任务/目标厨房结果仅供研究参考，并非官方 RoboCasa 榜单提交。

## 结果、限制与结论

论文与模型卡报告：在官方 RoboDojo 协议下，三个变体各有强项——QwenPI_v3 平均 SR/Score 最高（6.19/9.60），QwenOFT 次之（4.86/8.01），QwenGR00T（3.81/7.35）在长时程组领先（6.50/15.46）；RoboCasa365 本地快照上 StarVLA-PI 达 40.64%。同族工作 StarVLA-α（arXiv 2604.11757，4 月）表明刻意极简的统一多基准基线即可保持强竞争力，并在公开真机基准 RoboChallenge 上超过 π0.5 约 20%。限制：技术报告定位为持续更新的 living report，各基准数字来自不同配方，不可直接互相比较；中文报道中的部分对比数字尚无官方出处；跨 embodiment 的系统性对照仍待报告后续版本。

## 来源链接

- 技术报告：https://arxiv.org/abs/2604.05014
- 代码库（含 9/5 RoboCasa365 与 RoboDojo 更新）：https://github.com/starVLA/starVLA
- RoboDojo 模型卡（官方 42 任务协议表）：https://huggingface.co/StarVLA/Qwen3vl4b-GR00T-RoboDojo
- StarVLA-α：https://arxiv.org/abs/2604.11757
- 机器之心报道（对象发现来源）：https://www.jiqizhixin.com/articles/2026-09-06-3
