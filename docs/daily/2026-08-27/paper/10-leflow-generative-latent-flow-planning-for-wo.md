---
candidateId: "arxiv--2608.24855"
businessCandidateId: "arxiv--2608.24855"
date: "2026-08-27"
category: "Paper"
title: "LeFlow: Generative Latent Flow Planning for World Models"
authors: ["arxiv.org"]
summary: "LeFlow 研究潜在世界模型规划中的重复计算浪费：CEM/MPPI 等方法在每个状态-目标对上从头搜索动作序列，把世界模型当黑盒模拟器，无法复用规划经验。作者提出先离线学习一个可复用 latent trajectory prior：给定当前和目标观察 embedding，rectified flow 直接生成多条未来潜在轨迹；局部 inverse dynamics decoder 把相邻 latent 转移转为动作块；冻结世界模型再对候选做自回归 rollout，并按终点到目标的 latent"
provisionalKeywords: ["世界模型", "机器人导航", "生成式模型"]
keywords: ["世界模型", "机器人导航", "生成式模型"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.24855v1"}]
previewImage: "/daily/2026-08-27/assets/arxiv--2608.24855/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 10
groupScore: 82
scoreScale: "paper-v2"
emphasis: false
---


# LeFlow: Generative Latent Flow Planning for World Models

## 研究问题与贡献

LeFlow 研究潜在世界模型规划中的重复计算浪费：CEM/MPPI 等方法在每个状态-目标对上从头搜索动作序列，把世界模型当黑盒模拟器，无法复用规划经验。作者提出先离线学习一个可复用 latent trajectory prior：给定当前和目标观察 embedding，rectified flow 直接生成多条未来潜在轨迹；局部 inverse dynamics decoder 把相邻 latent 转移转为动作块；冻结世界模型再对候选做自回归 rollout，并按终点到目标的 latent 距离重排。核心贡献是把规划从在线迭代优化变成一次批量 proposal-and-reranking。

## 方法与系统

LeWM 世界模型保持冻结。flow planner 是 4 层 Transformer，建模轨迹内部 latent token 的条件速度场；inverse dynamics decoder 为 3 层 MLP，输入当前 latent、下一 latent 和位移，输出归一化动作。训练目标包含 latent path flow matching、逆动力学 MSE 和一致性损失；一致性损失把生成转移解码成动作、经冻结预测器一步 rollout，并惩罚其与提议下一 latent 的差距，使生成分布靠近可控流形。推理采样 N=64 条 latent 路径、16 个 Euler 步，解码动作后用冻结模型 rollout 排序，执行最优候选，并在 MPC 循环中滚动。

## 实验设置与数据

评测使用 LeWM 四个连续动作目标条件像素控制基准：TwoRoom、PushT、Reacher 和 OGBench-Cube，统一 H=5、50 episodes，LeFlow 结果为 5 个种子平均。基线包括 GCBC、GCIVL、GCIQL、PLDM、DINO-WM，以及在同一冻结 LeWM 上的 CEM、iCEM 和 MPPI。效率实验比较相同 backbone 与协议下的 CEM 与 LeFlow；消融覆盖 action-space flow、确定性 latent 回归、无重排和不同一致性权重；held-out 实验将 planner 训练限制在 80% episodes。

## 结果、限制与结论

论文报告 LeFlow 在四个基准上分别达到 100.0%、95.2%、86.8%、100.0%，均超过 LeWM+CEM 的 82.0%、89.3%、68.0%、73.3%。端到端评估时间从 CEM 的 224.78、198.92、326.01、224.62 秒降到 15.58、17.42、27.67、50.23 秒，对应 14.4×、11.4×、11.8×、4.5× 加速。held-out 20% episodes 上表现与训练分布几乎一致。消融显示 latent planning 在 PushT/Reacher 分别比 action-flow 高 3.0/4.5 点，重排在 Reacher 提升 10.5 点。局限非常明确：固定短 horizon，PushT horizon 从 5 到 10 时成功率从 94% 降到 32%，20 时仅 6%；主要基准本身偏短时程，DINO-WM 迁移只在 PushT 上验证且需要额外空间自编码器。它证明规划先验可以被学习，但还不是通用长时程机器人规划方案。

## 来源链接

- 论文：https://arxiv.org/abs/2608.24855
- PDF：https://arxiv.org/pdf/2608.24855
- 代码：https://github.com/hsiangwei0903/LeFlow
