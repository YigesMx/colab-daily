---
candidateId: "arxiv--2608.16889"
businessCandidateId: "arxiv--2608.16889"
date: "2026-08-19"
category: "Paper"
title: "Don't Drop the BATON: Long-Horizon Robot Manipulation via Agentic Subtask Exploration and Transition-aware Memory"
authors: ["arxiv.org"]
summary: "BATON 把长时程探索拆成子任务并显式记录调用、交接和前瞻转移，论文报告在 RoboMemArena 上比最强报告基线分别高 11.6 个 TSR 点和 14.9 个 CSR 点。"
provisionalKeywords: ["机器人操作", "长时程任务", "智能体记忆", "VLA"]
keywords: ["视觉语言动作", "机器人操作", "多智能体系统"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.16889v1"}]
previewImage: "/daily/2026-08-19/assets/arxiv--2608.16889/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 86
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.16889 -->
# BATON：用子任务探索与转移感知记忆衔接长时程机器人操作

## 研究问题与贡献

论文指出，长时程操作的瓶颈常不在单个接触技能，而在技能之间的衔接。VLA 可以分别完成开抽屉、取罐头和放置罐头，但把上千步任务串起来时，误差累积、入口状态漂移和“本子任务成功却让下一子任务不可行”的耦合会造成整链失败。

BATON 的贡献有两点。第一，它把探索单位从整条任务改为短时程子任务，使 K 阶段任务的探索代价从论文刻画的约 T^K 次整链尝试降为 T·K 次子任务尝试，并让失败能定位到具体阶段或边界。第二，它提出转移感知记忆，把调用、交接和前瞻三类转移写成可检查的语言级合同，不更新任何模型参数。

## 方法与系统

系统沿用“LLM coding agent + 冻结 VLA”的分工：解析基元负责自由空间运动、重置和传送，冻结 VLA 只在接触密集片段被调用。探索器把任务分解为子任务，在短时程内尝试不同 staging、预接触姿态、调用时机和终止阈值；只有经过验证的单元被提升进记忆。验证器用腕部图像等证据判断场景是否满足 VLA 调用条件，失败尝试也写入失败记忆。

转移感知记忆显式建模三类边界。调用转移决定何时把控制交给 VLA；交接转移记录下一子任务的入口条件，并在前置子任务留下残差时恢复场景；前瞻转移反向约束当前子任务的执行策略，使当前成功形态能被后续子任务继承。调度器据此在多个可竞争的粗轨迹中选择既完成当前目标又不阻断后续目标的方案。

## 实验设置与数据

实验在 RoboMemArena 上进行。该基准包含 26 个厨房长时程任务，平均超过 1,000 步、3-9 个验证阶段，其中 68.9% 子任务被标记为依赖记忆；任务分为转移、遮挡、计数和序列四类。所有探索均在参考配置 seed 50 上完成，评估使用 held-out 配置 seeds 51 和 52 并取平均。

基线包括论文报告的 π0.5、HiF-VLA、MemoryVLA、MemER、PrediMem、FrameSamp+Modul 和无操作 harness 的 GPT-5.4，以及作者自行运行的未修改 Harness VLA。指标为任务成功率（TSR）和累计阶段成功率（CSR）。BATON 底层使用冻结 π0 系列 VLA，并由 LLM agent 负责探索、验证和调度。

## 结果、限制与结论

论文报告，BATON 平均达到 57.7% TSR 和 78.8% CSR，比最强报告系统分别高 11.6 和 14.9 个百分点，也超过具有真实记忆记录的 oracle 平均值。未修改 Harness VLA 在同一探索预算下平均 TSR 仅 26.9%，主要因为整链探索难以在遮挡任务上首次成功；BATON 在遮挡和计数类别上提升最大，并把完成阶段转化为完整任务的比例提高到 73%。作者还说明，转移类别中一个任务的 BDDL 场景定义在 held-out seed 上有错误，导致无论执行如何都计为零，影响该类别比较。

限制方面，BATON 依赖可用的解析基元、冻结 VLA、腕部验证信号和较可靠的子任务分解；论文没有更新参数，但语言记忆和合同仍可能随任务族变化。本文分析认为，该结果有力支持“边界是长时程瓶颈”的假设，但评测集中在 RoboMemArena，真实硬件、开放场景和其他 VLA 后端的复现仍未在论文中充分验证。结论是，显式表示和检查子任务转移，比只增强单技能或只补充回顾式记忆更直接地针对组合失败。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.16889v1)

