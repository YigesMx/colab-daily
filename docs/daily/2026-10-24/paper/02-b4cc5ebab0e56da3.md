---
schemaVersion: 3
candidateId: "arxiv--2610.30814"
date: "2026-10-24"
category: "Paper"
groupRank: 2
title: "DRILL: Training World Models to Improve Policies, Not Predict Pixels"
authors: ["Zhaolu Kang", "Tailong Luo", "Lei Wei", "Guangyuan Dong", "Sihan Liu", "Yingjie He", "Siheng Wang", "Shuaibo Li", "Rongchao Zhang", "Zhen Tian", "Richeng Xuan", "Zhichao Hu"]
summary: "腾讯混元与北京大学提出 DRILL（NeurIPS 2026）：VLA 强化学习后训练中的视频世界模型应以“策略下游回报”而非单步像素预测为目标。框架为双层优化：内层在想象 rollout 上做一步 GRPO，外层更新世界模型最大化更新后策略在目标仿真器的回报。DRILL-VWI 用策略访问频率、GRPO 组相对优势与模型置信度加权的符号化代理损失，零额外环境交互；DRILL-IMG 用 K=2 截断 Hessian-vector 积微分内层更新、每步 30 条仿真器 rollout。理论证明 VWI 是 IMG 元梯度的一阶局部近似并给出收敛率。五个操作仿真器、两个 VLA 底座上，DRILL-IMG 较 WMPO 平均 +13.1 点、较 RLVR-World +7.9 点，像素 MSE 反而高 17%；与 RLVR 预训练堆叠再 +3.2 点。PUR 诊断与下游成功率 Spearman −0.89。限制：仅仿真评估、IMG 有额外计算/显存开销；暂无公开项目页与代码。"
keywords: ["世界模型", "视觉-语言-动作模型", "强化学习"]
sources: [{"name": "arXiv 摘要页", "url": "https://arxiv.org/abs/2610.30814"}, {"name": "arXiv PDF", "url": "https://arxiv.org/pdf/2610.30814"}, {"name": "arXiv TeX 源码", "url": "https://arxiv.org/e-print/2610.30814"}, {"name": "arXiv HTML 全文", "url": "https://arxiv.org/html/2610.30814v1"}, {"name": "HuggingFace 论文页", "url": "https://huggingface.co/papers/2610.30814"}]
previewImage: "/daily/2026-10-24/assets/arxiv--2610.30814/preview.png"
---

## 研究问题与贡献

一句话结论：用于 VLA 强化学习后训练的视频世界模型不应以"下一帧像素预测"为目标，而应直接以"在其想象 rollout 中学出的策略的下游回报"为目标——DRILL 框架在五个操作仿真器、两个 VLA 底座上把平均成功率较 WMPO 提高 13.1 个百分点，尽管其世界模型的单步像素 MSE 反而高出 17%。

背景：近年来 WMPO、VLAW、WoVR、SC-VLA 等系统用离线演示训练视频世界模型，再在其中对视觉-语言-动作（VLA）策略做 GRPO 强化学习，以替代昂贵的真实环境交互。但世界模型本身仍按单步视频预测损失训练。作者指出这存在目标错配：像素 MSE 对背景、机器人本体、任务无关区域一视同仁，而策略梯度只关心当前策略访问的状态和高优势动作。论文实证了更低的像素 MSE 可以产生更差的策略梯度，而为策略效用训练的世界模型可以在像素 MSE 高 17% 的情况下产出更好的下游策略。

DRILL（Downstream-Return Imagination Learning Loop）由腾讯混元与北京大学提出，已被 NeurIPS 2026 接收。贡献包括：

- 形式化 VLA 世界模型后训练中的目标错配问题，提出双层（bilevel）框架：内层在想象 rollout 上做一步 GRPO 更新，外层更新世界模型以最大化更新后策略在目标仿真器中的回报；
- 两个实例化：DRILL-VWI（Visitation-Weighted Imagination）是用策略访问频率、GRPO 组相对优势与模型置信度加权的符号化代理损失，不需要额外仿真器 rollout；DRILL-IMG（Implicit Meta-Gradient）通过截断 Hessian-vector 积对内层更新微分，用少量真实仿真器 rollout（每次外层更新 30 条）直接估计下游回报元梯度；
- 理论上证明 DRILL-VWI 是 DRILL-IMG 元梯度在 score 兼容与小残差假设下的一阶局部近似，并给出 DRILL-IMG 在截断 BPTT 下的非渐近收敛率；
- 提出 Policy-Utility Residual（PUR）诊断指标，度量像素 MSE 梯度与策略改进方向的夹角，实验中 PUR 与下游成功率的 Spearman 相关系数达 −0.89。

## 方法与系统

问题设定：VLA 策略 πθ、视频世界模型 Wϕ（预测下一帧）、冻结的视觉-语言奖励模型 rψ，训练数据为离线演示与策略在 Wϕ 中产生的想象 rollout。标准 WMPO 流程交替执行"世界模型拟合演示像素（L2 损失）"与"在模型内 GRPO 更新策略"。DRILL 替换第一步：定义 θ+(ϕ) = θ + ηθ∇θĴ_GRPO(πθ; Wϕ) 为一次想象 GRPO 步得到的策略，训练目标变为最大化 J(πθ+(ϕ))——期望取自目标仿真器（而非世界模型自身）的轨迹分布。

DRILL-VWI 把均匀像素 MSE 换成带符号的加权代理：每个演示转移的预测误差乘以三因子权重 w(ot, at) = 访问频率估计 × 符号化组相对优势（sgn(Â)·|Â|^α，α=1 最优）× 模型置信度 s(ot)。三因子全部来自想象 GRPO 循环的副产物，因此相对 WMPO 零额外环境交互。正优势转移被"锐化"，负优势转移可被有意弱化而非更精确地拟合像素。

DRILL-IMG 直接估计元梯度 ∇ϕJ(πθ+(ϕ)) = ηθ·∇θ+J(πθ+)·∇ϕ∇θĴ_GRPO：第一因子来自目标仿真器中一小批 rollout 的策略梯度，第二因子用 K=2 步截断 BPTT 的 Hessian-vector 积计算。理论部分给出：VWI 代理与 IMG 元梯度之差被兼容残差 ϵcomp、轨迹局部性残差 R_H、演示锚定残差 R_demo 控制；IMG 的收敛保证含优化误差、随机梯度方差与几何衰减的截断偏差三项。

## 实验设置与数据

- 基准：LIBERO-Long、CALVIN ABC→D、RoboCasa、Meta-World MT50、SplerEnv 五个操作仿真器；无真机结果。DRILL-IMG 的外层梯度用每步 30 条仿真器 rollout。
- 底座与基线：π0-3B 与 OpenVLA-7B 两个 VLA 底座；基线含 Scratch-GRPO、WMPO、VLAW、RLVR-World，以及给相同仿真器预算的无模型 Sim-PPO 对照。主结果 5 个种子，消融 3 个种子，报告 Welch t 检验与置信区间。主实验约耗费 1.7 万张 NVIDIA H20 卡时（24 张 H20 约四周）。
- 世界模型规模实验覆盖 300M、1.2B、7B 参数，并测试 Ctrl-World 与 Cosmos-Predict2 风格世界模型底座的迁移。

## 结果、限制与结论

- 主结果（π0-3B，5 种子均值）：DRILL-IMG 在五个基准平均成功率较 WMPO 高 13.1 点、较 RLVR-World 高 7.9 点（如 LIBERO 81.3% vs WMPO 64.2%；DRILL-IMG+RLVR 预训练堆叠达 83.9%），同时世界模型像素 MSE 高 17%。DRILL-VWI 在 LIBERO 达 76.1%。SplerEnv 上 DRILL-VWI 与 DRILL-IMG 统计持平（64.0% vs 63.1%），与其短时域特性一致。
- OpenVLA-7B 复现保持方法排序，DRILL-IMG 平均 68.9% 对 WMPO 53.8%（+15.1 点）。
- 与 RLVR-World 正交：先做 RLVR 预训练再做 DRILL-IMG 平均再涨约 3.2 点，二者互补而非替代。
- 规模与时域：世界模型从 300M 增到 7B，DRILL-IMG 对 WMPO 的优势从 7.9 点增至 16.4 点；rollout 时域 H 从 20 到 100，IMG 对 VWI 的优势从 1.8 点增至 7.5 点（H=200 时 8.1 点但轨迹噪声增大导致回落）。建议：预算紧张或无仿真器时用 VWI，中长时域且可负担额外 rollout 时用 IMG。
- 诊断：扰动鲁棒性上 DRILL-IMG 平均相对下降 18.6%（WMPO 30.2%、RLVR-World 25.6%）；任务相关想象得分 TRPS 上 DRILL-IMG 0.81 对 WMPO 0.61；120 次盲评人试中展示任务完成度时 62% 参与者偏好 DRILL-IMG（p＜0.001）。K=2 截断 HVP 与未截断元梯度在 2D gridworld 与 MT10 上余弦相似度 0.71–0.74。
- 限制（原文自述）：评估仅限仿真，DRILL-IMG 依赖少量仿真器 rollout 而非真机交互，对真实感知噪声、执行延迟、安全约束与 sim-to-real 偏移的敏感性未知；截断 BPTT 与 HVP 带来额外计算与显存开销。项目页与代码仓库在抓取时未公开（论文 arXiv 页仅注明 NeurIPS 2026）。

对组内的启示：这条"世界模型为策略效用服务"的路线与 LaLa-World 等"世界模型为规划服务"的路线互补；PUR 指标与"像素 MSE–成功率解耦"图可作为我们评估自研世界模型时的常规诊断；若复现，建议先从 DRILL-VWI 起步（零额外 rollout、可插入 WMPO 式管线）。

## 来源链接

- arXiv 摘要页：https://arxiv.org/abs/2610.30814
- arXiv PDF：https://arxiv.org/pdf/2610.30814
- arXiv TeX 源码：https://arxiv.org/e-print/2610.30814
- arXiv HTML 全文：https://arxiv.org/html/2610.30814v1
