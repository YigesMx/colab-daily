---
candidateId: "url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-08-30-6"
date: "2026-08-31"
category: News
title: "Perplexity 发布本地优先智能体 Portable Computer：Qwen 3.8 27B 端侧运行，本地推理不产生 API 费用"
authors: ["www.jiqizhixin.com"]
summary: "据机器之心 2026-08-30 报道，Perplexity 发布本地优先智能体 Portable Computer，默认将模型、框架、对话和轨迹全部运行在用户本地设备上，基于 Qwen 3.8 27B 等可本地部署的开源模型，本地推理不产生 API 费用，网络搜索与云端顾问模型仅在用户许可时按需调用。Perplexity 公布的多项基准显示其在 BrowseComp、ParseBench-100 与内部本地知识工作台上优于开源通用框架 Pi 和 Hermes，后训练模型 PPLX 27B 将内部基准得分提升至 85.4%，相关数据均未经第三方独立复现。官方博客原文抓取时受 Cloudflare 防护（403），本文事实为报道转述的官方表述，产品开放范围、定价与模型开放情况原文未报告，列入后续观察。"
keywords: ["Perplexity", "端侧推理", "智能体"]
sources:
  - {"name":"www.jiqizhixin.com","url":"https://www.jiqizhixin.com/articles/2026-08-30-6"}
previewImage: "/daily/2026-08-31/assets/url--https_3a_2f_2fwww.jiqizhixin.com_2farticles_2f2026-08-30-6/preview.png"
schemaVersion: 3
ratingTrack: "news"
groupRank: 6
groupScore: 68
scoreScale: "news-v3"
---

# Perplexity 发布本地优先智能体 Portable Computer：Qwen 3.8 27B 端侧运行，本地推理不产生 API 费用

## 事件概述

2026 年 8 月 30 日，据机器之心报道，AI 搜索公司 Perplexity 发布了名为 Portable Computer 的本地优先（local-first）智能体产品。与默认接入一线大模型 API 的通用智能体框架（Harness）不同，Perplexity 称 Portable Computer 的整个技术栈默认在用户本地计算机上运行——模型、框架、对话和轨迹都保留在设备端——并基于 Qwen 3.8 27B 这类可本地部署的开源模型驱动，本地推理不产生 API 推理费用。网络搜索、外部连接器以及向云端更强"顾问"模型升级等需要跨越设备边界的功能，仅在必要时由用户控制调用。Perplexity 表示，这是其继今年 6 月推出首个混合本地-服务器推理编排器之后，在端侧智能体方向的进一步动作，其官方博客发布了配套技术文章，并预告将发布技术报告。

## 已确认事实与证据

主要证据来自机器之心 2026 年 8 月 30 日的原创报道（经其官方文章库 API 获取全文），该报道转述了 Perplexity 官方博客文章《A local-first agent for private and cost-effective knowledge work》的内容。抓取时该官方博客页面返回 Cloudflare 防护页（HTTP 403），以下事实均为报道转述的 Perplexity 官方表述，基准数据未经第三方独立复现。

**产品定位与架构**

- Perplexity 称，Portable Computer 默认将模型、框架、对话与轨迹全部置于用户计算机本地运行；敏感数据未经许可不会离开设备，本地模型不产生推理费用。网络搜索、连接器或云端顾问模型升级仅在用户启用并批准时调用。
- 其设计思路是"框架与模型协同设计"：框架针对设备端模型的能力特性量身定制，模型再经后训练以适配框架。框架的协调器是确定性代码而非大模型，负责维护执行循环、构建上下文并执行策略；本地模型只提出下一步操作。
- 上下文效率方面，Perplexity 称实验发现 Qwen 3.8 27B 虽提供 26 万 token 上下文窗口，但 token 数超过 10 万后性能开始下降，因此框架保持最小系统提示与核心工具集，其余能力模块化为可按需加载/卸载的技能，并支持长轨迹的上下文压缩。
- 连接器方面，Perplexity 将最常用的 MCP 服务器（如 Gmail、GitHub、Outlook、Google Calendar 等）转换为简洁的命令行工具，以减少庞大工具定义对上下文窗口的占用。
- 安全方面，工具调用在用户设备的 OS 级沙箱中执行，按策略限制进程、文件系统路径和网络访问；Perplexity 称沙箱不可用时框架会禁用自身而非降级为非沙箱执行，隔离始终默认开启。
- 自我验证机制：模型可自行触发验证，或由监控轨迹健康状况的钩子触发；Perplexity 称验证虽增加步骤，但能显著改善结果并缩小与前沿模型的差距。

**评测结果（均为 Perplexity 公布、报道转述，未经独立验证）**

- 网络搜索：使用 1266 个 BrowseComp 任务、Qwen 3.8 27B 运行于 NVIDIA DGX Spark，Portable Computer 准确率 66.7%，开源框架 Pi 与 Hermes 分别为 50.2% 和 43.9%；其平均运行时间与 token 消耗也为三者最低。
- 设备端多模态文档理解：在 ParseBench-100（100 任务子集）上，Portable Computer 平均得分 65.1%，Hermes 与 Pi 分别为 34.6% 和 13.9%，且耗时与 token 用量最少。
- 顾问升级：在 Terminal Bench 2.1（89 个编码任务）上，纯本地 Qwen 3.8 27B 得分 59.6%；允许按需升级到 Claude Opus 5 顾问后提升至 73.0%，每次部署 API 成本估计约 0.415 美元；单独运行 Claude Opus 5 的前沿基线为 82.4%，成本约 0.65 美元。
- 模型后训练：Perplexity 称基于合成强化学习环境对 Qwen 3.8 27B 进行两阶段训练（拒绝采样微调 + 强化学习），得到 PPLX 27B 模型；在其内部"本地知识工作台"（Local Knowledge Work Bench，53 个任务）上，Qwen 3.8 27B 基础模型下 Portable Computer 得分 82.6%，PPLX 27B 将其提升至 85.4%。Perplexity 表示将很快发布技术报告，并计划开源该评估基准。

## 影响与后续观察

Perplexity 将此次发布定位为"智能体从远程基础设施转向个人本地设备"这一更大趋势的一部分：其主张是，强大的开源小模型（如 Qwen 3.8 27B、NVIDIA Nemotron 3.5 Lightning、Qwen 3.6 等）与本地推理硬件（如 NVIDIA DGX Spark、M5 Ultra Mac Studio）的进步，使完全在设备端处理真实知识工作变得可行，从而同时回应推理成本攀升与私有数据/知识产权外泄两类问题。需要注意，报道标题中的"零成本推理"仅指本地模型推理不产生 API 费用；一旦调用云端顾问模型仍会产生费用，Perplexity 自己也承认在高难度编码任务上本地模型仍落后于前沿模型，顾问升级只能缩小、不能完全消除差距。

原文未报告或当前材料未确认、留待后续观察的事项：

- Portable Computer 的开放范围、获取方式与定价，原文未报告。
- PPLX 27B 模型是否会开放权重，原文未报告。
- 技术报告的具体发布时间与"本地知识工作台"基准开源的落地情况，需跟踪 Perplexity 官方渠道。
- 全部基准得分均为 Perplexity 自测并经媒体报道转述，尚无第三方独立复现；官方博客原文在抓取时受 Cloudflare 防护（403），待可访问后应做原文核验。

## 来源链接

- 机器之心原创报道（2026-08-30）：https://www.jiqizhixin.com/articles/2026-08-30-6
- Perplexity 官方博客原文（报道引用；抓取时返回 Cloudflare 403 防护页）：https://www.perplexity.ai/hub/blog/a-local-first-agent-for-private-and-cost-effective-knowledge-work
