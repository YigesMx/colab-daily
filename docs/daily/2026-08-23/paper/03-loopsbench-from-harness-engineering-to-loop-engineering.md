---
candidateId: "paper--arxiv--2608.00267"
businessCandidateId: "paper--arxiv--2608.00267"
date: "2026-08-23"
category: "Paper"
title: "LoopsBench：把 Coding Agent 评测从 Harness 工程推进到 Loop 工程"
authors: ["arxiv.org"]
summary: "Microsoft 等机构发布 LoopsBench：以自包含任务包（工作区快照、需求、依赖 DAG、Docker 元数据、验证器）评测 coding agent 的长程循环能力，指标覆盖 Resolve Rate、回归率、依赖深度与 token 消耗，推动评测从 harness 工程转向 loop 工程。"
provisionalKeywords: ["评测基准", "智能体技术", "开源生态"]
keywords: ["评测基准", "智能体技术", "开源生态"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.00267"}, {"name": "huggingface.co", "url": "https://huggingface.co/datasets/LoopsBench/LoopsBench"}, {"name": "www.jiqizhixin.com", "url": "https://www.jiqizhixin.com/articles/2026-08-22-5"}]
previewImage: "/daily/2026-08-23/assets/paper--arxiv--2608.00267/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 63
scoreScale: "paper-v2"
emphasis: true
---
# LoopsBench：把 Coding Agent 评测从 Harness 工程推进到 Loop 工程

## 研究问题与贡献

当前 coding agent 评测大多测量单轮任务完成率，而真实智能体是在“规划-编码-测试”的长程循环中持续工作。来自 Microsoft、南京大学、UCL 与上海交大的 LoopsBench 论文提出：智能体基础设施正在从 harness engineering（搭好单次运行脚手架）转向 loop engineering（设计可持续多轮循环），评测也应随之改变。贡献包括一套长程终端编码任务流水线、可复用的任务包格式与配套评测指标，并以 Hugging Face 数据集形式发布。

## 方法与系统

LoopsBench 的任务包（task bundle）自包含：智能体可见的工作区快照、单元级需求、恢复的任务内依赖图（DAG）、Docker 执行元数据、公开验证器文件与维护者使用的金标补丁。流水线从真实仓库采集任务，经预处理、任务选择、任务内关系恢复与插桩（instrumentation）生成任务包；评测协议围绕长程循环设计，指标包括 Resolve Rate、Test Pass Rate、Dependency Depth、Regression Rate 与 Token 消耗，并对输入侧匿名化、记忆化与模型截止时间做污染检查。

## 实验设置与数据

论文围绕三个研究问题组织实验：RQ1 循环能维持多久的进展；RQ2 循环如何维护计划、代码与测试状态；RQ3 哪些 loop 工程因素影响长程执行。实验比较固定循环实现下的模型与配置，报告各指标的量化结果与逐任务 token 消耗，附录给出任务池统计、任务 schema、物化任务示例与评测适配器细节。

## 结果、限制与结论

论文报告：长程循环中的进展会随深度衰减，回归（先前通过的测试再次失败）与计划漂移是主要失败形态，loop 层设计（规划/测试状态维护）对结果的影响与模型本身相当；各配置的 Resolve Rate 与 Dependency Depth 具体数值以论文表格为准（当前材料未逐一核验）。限制在于任务集偏向终端编码场景，指标依赖恢复的依赖图质量。对智能体工程团队的价值是提供了一套可复现的长程评测协议，把“循环设计”变成可测量对象。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.00267>
- 数据集：<https://huggingface.co/datasets/LoopsBench/LoopsBench>
- 媒体报道：<https://www.jiqizhixin.com/articles/2026-08-22-5>
