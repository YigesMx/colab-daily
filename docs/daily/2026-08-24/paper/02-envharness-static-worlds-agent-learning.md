---
candidateId: "url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-08-23"
businessCandidateId: "url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-08-23"
date: "2026-08-24"
category: "Paper"
title: "Google：和agent一样，环境也可以有Harness"
authors: ["arxiv.org","github.com","www.jiqizhixin.com"]
summary: "EnvHarness 在不改内部代码和原 verifier 的前提下，用 Stage/Contract/Chain 包装静态环境，EnvRigger 从策略 rollout 诊断弱点并写组件验证；论文报告五个基准上一致超过原始环境技能，held-out 最高提升 9.0 点。"
provisionalKeywords: ["智能体系统","AI基础设施","评测基准","长程任务"]
keywords: ["智能体系统","AI基础设施","评测基准","长程任务"]
sources: [{"name":"www.jiqizhixin.com","url":"https://www.jiqizhixin.com/articles/2026-08-23"},{"name":"arxiv.org","url":"https://arxiv.org/abs/2608.19880"},{"name":"github.com","url":"https://github.com/google-research/envharness"}]
previewImage: "/daily/2026-08-24/assets/url--https_3a_2f_2fwww.jiqizhixin.com_2farticles_2f2026-08-23/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 78
scoreScale: "paper-v2"
emphasis: true
---

# EnvHarness：把静态环境包装成面向智能体学习的可控环境

## 研究问题与贡献

EnvHarness 研究智能体学习中的环境供给问题。论文认为，许多环境是人工构建且静态的：它们不知道目标智能体的弱点，也难以随智能体进步持续提供有效训练信号。已有环境生成方法往往需要领域专属流水线，或依赖昂贵、不可靠的验证器，甚至仍生成静态环境。作者提出，与其重建环境，不如在冻结环境外面包一层可编程组件。

论文的核心类比是把“agent harness”移到环境侧：agent harness 用工具、记忆和执行循环增强冻结 LLM，EnvHarness 则用插件组件包装既有环境，改变初始状态、暴露的动作/观察和转移逻辑，同时不改内部代码并保留原任务 verifier。作者报告，在五个基准、四个领域上，EnvHarness 环境中提取的技能超过原始环境技能，held-out 任务最高提升 9.0 点，执行步数减少 9.8%，并能为强化学习提供更好的优化信号。这些结果均为论文报告；本次 refine 下载并通读了 PDF、TeX 源码、GitHub README 和项目页，确认论文、代码和网页公开且内容对应，但没有复跑任何基准。

## 方法与系统

论文定义 EnvHarness 为环境接口层变换。形式上，它把环境元组中的初始状态、动作空间、观察空间和转移机制映射为新的环境，但底层模拟器和原 verifier 不变。论文给出三类组件：Stage 通过在 reset 后执行一段合法动作序列改变初始状态，例如把杯子先藏进抽屉以强迫搜索；Contract 改写动作、转移或观察，例如限制传送类导航命令、阻止未持物清洗、截断长观察；Chain 组合另一个环境和组合逻辑，把任务串接、交错或按条件转移。组件可叠加，但嵌套顺序影响最终约束。

自动化部分由 EnvRigger 完成。它把目标策略视为黑盒，先在基础任务上收集 rollout，再从失败和成功边界诊断系统性弱点，例如重复动作循环、长观察解析失败或工具约束误读；随后写出 EnvHarness 组件，并用新鲜策略 rollout 验证。候选若不可解、没有挑战性或信号尺度不合适，会被拒绝或修订；通过验证的组件才加入当前环境。这个 write-and-validate 循环使环境定制与具体策略弱点相关，而不是简单扩充相似训练样本。

本次独立核验还发现，公开 GitHub README 使用 Setup、Rule、Link 三个发布名，对应论文中的 Stage、Contract、Chain。README 说明设计器会生成真实 Python 规则子类并在隔离子进程中编译执行，坏变更会留下记录而不是终止整个运行；这支持代码实现存在，但不构成实验结论的外部复现。

## 实验设置与数据

论文评测 ALFWorld、WebArena、SWE-bench Verified、OfficeQA 和 SpreadsheetBench。训练与评测 episode 严格不相交；EnvRigger 和目标策略在每个基准使用同一模型骨干，ALFWorld 与 WebArena 使用 Gemini-3.1-Flash-Lite，其余使用 Gemini-3.5-Flash。主要实验比较无技能、原始环境技能、领域专属生成基线（GenEnv、VeriEnv 或 SWE-smith）和 EnvHarness 技能，基线共享种子实例、环境数、技能抽取流程和策略模型。强化学习分析使用 Qwen3-8B-base 和 GRPO，在 ALFWorld 与 WebShop 上比较原始环境与 EnvHarness 环境训练。

本次可独立验证的事实是：arXiv v1 PDF、TeX 源码、`google-research/envharness` 仓库、README 和项目网页均可访问，仓库描述与论文方法、基准和公开实现结构一致。所有成功率、分数、步数和 RL 曲线属于作者报告，本次没有下载全部训练数据或执行测试。

## 结果、限制与结论

论文报告 EnvHarness 在所有五个基准上超过原始环境技能：ALFWorld 平均从 62.4 提到 68.3，OOD 提升 9.0；WebArena 平均从 38.5 提到 41.6；SWE-bench Verified 成功率从 49.88 提到 52.58，平均步数从 55.01 降到 49.61；OfficeQA EM 从 54.40 提到 56.20；SpreadsheetBench Pass@1 从 45.88 提到 49.15。相对 SWE-smith，作者报告成功率高 2.46 点且少 5.11 步。RL 分析中，EnvHarness 训练在 ALFWorld in-distribution、WebShop score 和 success rate 上更高，ALFWorld OOD 从 89.6 降到 88.8。Chain 单独训练可把平均步数降到 41.96，但成功率略低于原始环境；与 Stage/Contract 技能合并后报告达到 54.30 成功率和 43.12 步。

论文附录明确列出限制：设计循环需要 rollout 和推理算力，弱设计器可能需要更多迭代；系统要求可 reset 的 gym 式文本动作/观察接口，因此不能覆盖真实账户、已发送邮件或物理机器人等不可复位环境；Chain 目前主要是串行组合，缺乏子任务语义相关性和分支/共享中间状态表达。当前材料未报告全部环境的生成成本、每个候选组件的平均修订轮数或公开复现实验的完整硬件配置，这些不能外推为实际部署收益。

## 来源链接

- 论文：https://arxiv.org/abs/2608.19880
- PDF：https://arxiv.org/pdf/2608.19880
- arXiv 源码：https://arxiv.org/e-print/2608.19880
- GitHub：https://github.com/google-research/envharness
- README：https://raw.githubusercontent.com/google-research/envharness/main/README.md
- 项目页：https://www.envharness.com/

