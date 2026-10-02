---
schemaVersion: 3
candidateId: "arxiv--2610.00317"
date: "2026-10-03"
category: "Paper"
groupRank: 6
title: "DriftOPD: Sequence-Level Reverse-KL Distillation for One-Step VLA Policies"
authors: ["Youngjun Jun", "Kyumin Choi", "Youngmin Kim", "Seonghyun Jin", "Sunwoo Park", "Jangho Park", "Jong Chul Ye"]
summary: "把 VLA 动作专家的多步蒸馏升级为序列级在线策略蒸馏：将动作序列分布上的反向 KL 分解为块级反向 KL 项与未来势能项，前者用单正样本一步漂移目标（核平滑反向 KL 的梯度等价形式）实现，后者用 VGAS 示教训练的 Q 函数评论家估计，全程免教师、免 rollout、仅用离线示教。跨 π0.5（全量/LoRA）、GR00T N1.5/N1.6、ABot-M0 多种配置，在 RoboCasa365 与 RoboTwin 2.0 上普遍优于 sCD/MFD/Drift 等一步基线，多个套件超过多步教师；GPU 成功时延相对 10 步教师加速 2.60 倍；真实 MolmoAct 2 平台上单臂平均 58.3%、双臂 76.7%，均为一步方法最高。"
keywords: ["一步动作生成", "视觉-语言-动作模型"]
sources: [{"name": "arXiv", "url": "https://arxiv.org/abs/2610.00317v1"}, {"name": "arXiv PDF", "url": "https://arxiv.org/pdf/2610.00317"}, {"name": "arXiv TeX e-print", "url": "https://arxiv.org/e-print/2610.00317"}, {"name": "arXiv HTML", "url": "https://arxiv.org/html/2610.00317v1"}, {"name": "项目页", "url": "https://yj-jun.github.io/DriftOPD/"}]
previewImage: "/daily/2026-10-03/assets/arxiv--2610.00317/preview.png"
---

## 研究问题与贡献

视觉-语言-动作（VLA）模型的动作专家通常以扩散/流匹配多步采样生成短动作块，采用滚动时域控制。本文针对两大痛点：一是块级训练只优化局部动作似然、不考虑最终任务成功，且测试时因模型自生成状态偏离示教分布而泛化变差；二是序列级强化学习虽能注入长时程反馈，但依赖闭环 rollout 与交互采集，对真实机器人操作成本过高。DriftOPD 提出免教师、免 rollout 的序列级在线策略蒸馏（OPD）框架：把动作序列分布上的反向 KL 散度（reverse KLD）分解为"块级反向 KL 项 + 未来势能项"，前者用一步漂移目标实现，后者用仅从离线示教训练的 Q 函数评论家估计，从而把多步教师的能力蒸馏进一步动作生成。贡献：一是首次把连续生成式 VLA 的序列级 OPD 从概念（需 rollout、受教师上界约束、多步采样延迟）变为可落地形式；二是给出漂移目标与评论家引导的组合实现（适配 VGAS 示教训练评论家）；三是跨多种 VLA 架构/微调策略/动作参数化在仿真与真实上验证优于现有一步蒸馏基线。团队来自 KAIST（Jong Chul Ye 组，据作者列表）。

## 方法与系统

形式化：设轨迹 τ 由动作块序列及其上下文组成，模型策略 π_θ 与目标策略 π 诱导的轨迹分布共享初始分布与转移核，其反向 KL 化为模型轨迹上逐块 KL 的累加；定义 cost-to-go J_t 后得到 Bellman 递推——J_t = 块级反向 KL（局部项 L_Local）+ 当前动作块经未来上下文影响后续块分布的作用（未来项 L_Future）。局部项：VLA 动作专家不给出显式密度，作者用核平滑（带宽 h 的归一化核）定义平滑反向 KL，其漂移场 V=∇log π_h−∇log π_{θ,h}（目标分与模型分之差），并证明命题：一步去噪器 G_θ 在单正样本（该示教上下文唯一记录的动作块 a_t^p，目标近似为 Dirac 核）加扰动下回归"a^q+η·V"目标（stop-gradient），其梯度恰为平滑局部反向 KL 的 1/(2η) 倍——即一步"漂移"即可优化局部反向 KL，无需多步采样。未来项：因连续动作块的干净 logits 不可得，用示教训练的 Q 函数评论家 Q_φ(s_t,a_t)（适配 VGAS，仅用示教数据训练）提供成功感知引导；λ 在 0.001–0.3 宽范围内一致提升、过大（1.0）则崩塌。总体目标 = 单正样本多带宽漂移目标 + λ·评论家引导，全部只用离线示教数据与当前策略生成样本，10k 步训练即可完成蒸馏。

## 实验设置与数据

模型覆盖 π₀.₅（全量微调与 LoRA r=16）、GR00T N1.5（动作专家微调，教师 4 步）、GR00T N1.6（动作头+顶部 4 层 VLM 层微调）与 ABot-M0（JiT 式直接预测干净动作，教师 10 步）。仿真基准：RoboCasa365 大规模家务操作（三个评测套件 atomic\_seen 18 任务 540 回合、composite\_seen/composite\_unseen 各 16 任务 480 回合，每任务 30 回合）、RoboTwin 2.0 双臂操作（按轨迹长度分短（少于 150 步）、中（150–279 步）、长（280 步及以上）三组）、另在附录评估 LIBERO 与 LIBERO-Plus，全部按官方公开协议。一步蒸馏基线：教师一步预测、sCD、MFD、Drift。真实：I2RT MolmoAct 2 Research Kit 平台，跨本体预训练 GR00T N1.6 在 638 段遥操作回合（36.6 万帧）上微调，再蒸馏 10k 步；评测右臂单臂抓放 4 档难度任务与双臂 YAM 抓取-递手-放置任务，配对环境设置。另测 GPU 成功时延（策略调用次数×单次时延，idle B200、batch 1，10 个随机 RoboCasa365 任务）。

## 结果、限制与结论

论文报告：RoboCasa365 上 DriftOPD 在 4 种模型配置 × 3 套件中几乎全部领先或持平其他一步方法，多个套件甚至超过多步教师（如 π₀.₅-LoRA atomic\_seen：教师 39.6%、一步教师 31.30%、sCD 29.26%、MFD 28.33%、Drift 34.07%、DriftOPD 39.26%）；GR00T N1.6 atomic\_seen 上 sCD 偶有例外（51.67% 对 DriftOPD 49.44%），其余套件 DriftOPD 仍最优或并列。sCD 与 MFD 有时低于一步教师，作者归因于本体特定数据有限时低噪声估计不稳定（目标分布尖锐、分数估计困难），MFD 在 ABot-M0 上甚至训练崩塌；单正样本多带宽核密度估计的漂移目标更稳健。RoboTwin 2.0：π₀.₅-LoRA 上 short 67.78% 超过教师（60.74%），medium 64.13% 略低于教师（67.30%）但高于其他一步基线，long horizon 上 Drift 48.48% 略高于 DriftOPD 46.67%（教师 55.15%）；ABot-M0 上 DriftOPD medium/long 最优（68.10%/38.79%），short 上教师一步预测 70.37% 略高。评论家分析：Q 值清晰区分成功/失败轨迹；λ 扫描显示 0.001–0.3 一致优于纯漂移（λ=0）。效率：相对 10 步教师，GPU 成功时延加速 2.60 倍。真实：单臂平均 58.3%（教师 70.0%、一步教师 25.0%、Drift 55.0%、sCD/MFD 近 0），其中 Easy 93.3% 持平教师、Hard 66.7% 持平教师；双臂平均 76.7%（教师 80.0%、Drift 46.7%），Handover LR 80.0%/RL 73.3% 均为一步方法最高且 LR 超教师（73.3%）。作者在附录 D 讨论局限（长时程任务仍有差距、评论家质量依赖示教覆盖等）。本文分析：该工作把 LLM 领域的序列级 reverse-KL OPD（MiniLLM 思路）严谨移植到连续动作专家，免 rollout 特性对真实机器人 VLA 后训练有直接工程价值；但 composite 任务与长时程上绝对成功率仍低（多在 10% 以下或明显低于教师），说明分解近似在难任务上的收益有限（据论文表格推断）。

## 来源链接

- arXiv 摘要页：https://arxiv.org/abs/2610.00317v1
- arXiv PDF：https://arxiv.org/pdf/2610.00317
- arXiv TeX 源码（e-print）：https://arxiv.org/e-print/2610.00317
- arXiv HTML 全文：https://arxiv.org/html/2610.00317v1
- 官方项目页：https://yj-jun.github.io/DriftOPD/
