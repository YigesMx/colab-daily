---
candidateId: "arxiv--2607.26637"
category: "Paper"
date: "2026-08-01"
rank: 9
title: "文件系统式 Agent 记忆：组织形态会变化，但主要收益是检索经济性"
authors:
  - "Sizhe Zhou"
  - "Sheldon Yu"
  - "Hui Wei"
  - "Junda Wu"
  - "Siru Ouyang"
  - "Yizhu Jiao"
  - "Shijia Pan"
  - "Julian McAuley"
  - "Yu Zhang"
  - "Tong Yu"
  - "Jiawei Han"
summary: "该研究将 Markdown 文件树形式的 Agent 记忆拆为管理、检索和执行角色，在长对话与 ALFWorld 程序性技能上系统改变组织方式、模型能力、规模和工具 harness；结果显示组织稳定降低大规模检索成本，却没有一种目录形态持续提高答案质量。"
keywords:
  - "Agent记忆"
  - "智能体系统"
score: 78
sources:
  - name: "arXiv TeX source"
    url: "https://arxiv.org/src/2607.26637v1"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2607.26637"
previewImage: "/daily/2026-08-01/assets/arxiv--2607.26637/preview.png"
---

## 核心内容

许多已部署的 LLM Agent 把长期记忆直接保存为目录中的 Markdown 文件，但“Agent 能持续整理增长的文件树”和“整理后任务表现会更好”通常只是工程默认。论文将这种记忆定义为带根路径的文件集合：文件路径、单行描述、正文标题共同构成可逐层导航的 taxonomy。作者给出五条组织原则，包括同级可区分、同级相关、父节点覆盖子节点、树上距离反映语义相关性，以及只在有助检索时增加结构。

实验系统把行为拆成三个角色。管理 Agent 读取连续输入，允许创建、重写、合并、拆分、移动和删除文件；检索 Agent 在固定 store 上回答问题并给出文件/行引用；程序性记忆设置中另有执行 Agent，将过去任务轨迹蒸馏为技能并在后续任务中使用。工具 harness 也是变量：通用文件操作、增加 BM25 的版本和沙箱 shell 会改变 Agent 能看到和执行的操作，因此不被视为中性接口。

对话记忆比较无记忆、BM25 RAG、逐 session 原样 dump、只移动文件的 foldered、允许重写的 reorganized，以及从空目录持续建设的 curated store。程序性记忆则比较无记忆、原样轨迹文件、蒸馏技能、带正向经验门控的技能/笔记，以及由检索 Agent 读取记忆后针对当前任务合成指导。研究的问题不是寻找一个固定目录模板，而是测量不同内容、模型、增长规模和 harness 下，store 形态、答案/任务成功率、引用正确性、token 与工具成本如何共同变化。

## 关键技术与数据

对话评估覆盖 LoCoMo（158 个问题，排除 adversarial 类）、PersonaMem 32k（3 段对话、32 题）与 128k（1 段对话、42 题），以及 RealTalk 的 21 天真实消息（85 题）。LoCoMo 中 4 个与原对话矛盾的 gold 被登记，排除后不改变结论。管理和检索主设置使用 gpt-5.4-mini，并另做 nano/mini/gpt-5.4 的 builder 和 searcher 梯度；正确性由冻结配置的 judge 评估，PersonaMem 使用选项精确匹配，引用支持度单独评分。

程序性设置使用 ALFWorld 140 个 held-out 家庭任务，覆盖六类目标。三链协议在链间重置 store，全链协议按固定交错顺序累计 140 项，并在每项后快照。执行 Agent 分 gpt-4.1 和 gpt-4.1-mini 两档，环境成功信号直接评分，无 judge。作者同时统计文件、目录、section、交叉引用、层级形状、每次模型调用 token、工具轮次与成本，并用 paired sign test 比较同一任务上的差异。

预览图是论文的系统总览：执行经验流入管理 Agent 形成同一文件系统，检索 Agent 再返回带引用的答案或技能，两个角色都通过可替换 harness 操作 store。它是 TeX 正文第一张信息性架构图，而非社交缩略图。

## 结果与结论

组织形态高度依赖内容、模型与工具。PersonaMem 128k 的同一对话，在 nano、mini、gpt-5.4 管理 Agent 下分别形成 122、2、105 个文件；mini 把层级集中在两个文件的 210 个标题中，gpt-5.4 则用 233 个交叉引用连接 105 个文件。尽管形态相差一个数量级，固定 mini 检索 Agent 的正确率仅在 66.7 至 73.8 之间且不随 builder 强度单调变化。相反，固定 store 后增强检索 Agent，平均正确率约从 62 升到 71、再到 79，说明该对话设置中“读”的模型能力比“写”的能力更直接影响答案。

组织最稳定的收益是检索成本。PersonaMem 32k/128k 中，reorganized 和 curated store 的单题搜索价格比原样 dump 降低一半或更多，原因是虽然工具调用次数更多，每次目标读取的 token 更少；在较小的 LoCoMo 等材料上差距很小。正确性则没有普遍赢家：仅移动原文件的 foldered 方案最稳定，curated 在 PersonaMem 32k 甚至从 dump 的 78.1 降至 37.5；默认重组时的细节丢失可让 RealTalk 正确率从保留全部事实版本的 77.6 降到 41.2。

ALFWorld 结果进一步说明消费者能力决定最佳形式：强执行 Agent 下原样轨迹最高为 87.1%，弱执行 Agent 下任务特定 guidance synthesis 以 76.4% 领先原样轨迹的 66.4%，且其无效动作率增长更小。全链中所有记忆方案后 35 项都好于前 35 项，没有在 140 项内出现性能退化；但原样 store 增至 140 个文件、检索成本随规模上升，而强管理 Agent 的 curated store 很早趋于稳定并继续原地维护。

这是一项覆盖多设置的大规模系统研究，但每个 store 通常只有一次建设抽样，作者也观察到相同配置重建可从 2 个文件变成 29 个文件，因此文件数量应视为行为样本而非确定规律。对话规模只到单段 128k，程序性增长只到 140 项，不能证明月级或年级持久记忆的可持续性。最稳妥结论是：文件系统组织确实改变检索路径并可显著节省大材料的读取成本，但组织形态本身不保证答案更好，内容保真、检索模型能力和最终消费者同样关键。

## 来源链接

- arXiv TeX 原始源码：https://arxiv.org/src/2607.26637v1
- arXiv 摘要页：https://arxiv.org/abs/2607.26637
- arXiv PDF：https://arxiv.org/pdf/2607.26637
