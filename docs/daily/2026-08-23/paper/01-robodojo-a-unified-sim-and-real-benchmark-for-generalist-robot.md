---
candidateId: "paper--arxiv--2607.04434"
businessCandidateId: "paper--arxiv--2607.04434"
date: "2026-08-23"
category: "Paper"
title: "RoboDojo：面向通用机器人操作的仿真-真机统一评测基准"
authors: ["arxiv.org"]
summary: "港大牵头的 RoboDojo 基准把 42 个仿真任务与 18 个真机任务纳入同一评测协议，接入 30 个策略建立公开排行榜，为通用机器人操作提供可比较、防作弊的仿真-真机统一评测基础设施。"
provisionalKeywords: ["具身智能", "机器人操作", "评测基准", "数据基础设施"]
keywords: ["具身智能", "机器人操作", "评测基准", "数据基础设施"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2607.04434"}, {"name": "robodojo-benchmark.com", "url": "http://robodojo-benchmark.com/"}, {"name": "github.com", "url": "https://github.com/RoboDojo-Benchmark/RoboDojo"}, {"name": "www.hku.hk", "url": "https://www.hku.hk/press/press-releases/detail/29297.html"}, {"name": "theaiinsider.tech", "url": "https://theaiinsider.tech/2026/08/22/hku-researchers-develop-unified-benchmark-for-physical-ai/"}]
previewImage: "/daily/2026-08-23/assets/paper--arxiv--2607.04434/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 83
scoreScale: "paper-v2"
emphasis: true
---
# RoboDojo：面向通用机器人操作的仿真-真机统一评测基准

## 研究问题与贡献

通用机器人操作策略的进步缺少可比较、可复现的评测基础：不同工作使用不同硬件、仿真环境和打分方式，结果难以横向比较，也无法判断仿真成绩能否迁移到真实机器人。RoboDojo 的贡献是把仿真评测与标准化真机评测纳入同一基准，覆盖泛化、记忆、长程、精度与开放性等能力维度，并配套公开排行榜与防作弊治理协议。项目由香港大学 MMLab 牵头，联合约 20 所高校（含 UC Berkeley、清华）共同完成；HKU 称其为首个由香港牵头的仿真-真机统一具身智能基准。

## 方法与系统

基准分为两大部分。仿真部分包含 42 个操作任务，强调泛化、记忆、长程与精度四类能力，并提供训练数据设定与统一评测协议；平台层做了异构并行仿真与物理校验的数字资产库。真机部分 RoboDojo-RealEval 提供标准化真机评测流程，包含 18 个真机任务。系统还提供 XPolicyLab 策略接入层，论文已把 30 个机器人策略接入并在统一协议下评测。排行榜由非营利组织 AI MMLab Club 维护，采用官方远程评测、重复仿真评测、多本体真机评测、隐藏验证与开源工件验证发布等防作弊协议，避免提交者针对评测环境过拟合。

## 实验设置与数据

论文在 42 个仿真任务与 18 个真机任务上对 30 个接入策略进行系统评测，公开仿真与真机两个排行榜，并分析评测效率（仿真评测效率、真机评测效率）与评测稳定性（含真机评测稳定性附录），同时给出与既有基准的对比。真机侧包含公开评测视频与闭源 track，训练与评测细节在附录中给出。

## 结果、限制与结论

论文报告：在统一评测下，现有通用操作策略在仿真与真机之间可以以较小的策略侧适配迁移，但不同能力维度差距明显；排行榜显示最强模型与人类表现仍有可观差距（HKU 新闻稿口径）。评测效率与稳定性分析说明统一协议可以在可控成本内得到可比较结果。限制方面：基准任务集仍是有限快照，真机评测受平台与本体约束；排行榜依赖持续治理，论文未报告全部 30 个策略在每个能力维度的完整细项（当前材料未确认）。总体上，该工作为具身智能提供了从“演示视频”走向“可测量进展”的基础设施。

## 来源链接

- 论文：<https://arxiv.org/abs/2607.04434>
- 项目主页：<http://robodojo-benchmark.com/>
- 代码：<https://github.com/RoboDojo-Benchmark/RoboDojo>
- HKU 新闻稿：<https://www.hku.hk/press/press-releases/detail/29297.html>
- 媒体报道：<https://theaiinsider.tech/2026/08/22/hku-researchers-develop-unified-benchmark-for-physical-ai/>
