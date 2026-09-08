---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F09%2F07%2Fother%2Fadmin%2F112478%2F%25e8%25b0%25b7%25e6%25ad%258c%25e8%25ae%25a9ai%25e4%25ba%2592%25e6%2580%25bc%25e5%2587%25a0%25e5%25a4%25a9%25ef%25bc%2581%25e5%25b0%258f%25e6%25a8%25a1%25e5%259e%258b%25e7%25ab%259f%25e5%25a4%258d%25e7%258e%25b03%25e9%2581%2593%25e5%258d%259a%25e5%25a3%25ab%25e7%25ba%25a7%25e9%259a%25be%25e9%25a2%2598%2F"
date: "2026-09-08"
category: News
title: "谷歌 Teamwork：让 AI 互相「抬杠」数日，Gemini 3.7 Flash 首次以 Flash 级模型做出博士级数学成果"
authors: ["新智元"]
summary: "谷歌 Antigravity 团队发布 Teamwork 长时程协作模式：候选方案各配专职 falsifier「抬杠」、子问题拓扑拆解、内部锦标赛、跨轮学习。Gemini 3.7 Flash 完整复现 3 项博士级开放难题，TCSBench 71% 刷新纪录；还向 Eigen/ParlayHash 提交了被人类维护者合并的开源优化。"
keywords:
  - 多智能体协作
  - AI 数学与形式化验证
  - 大模型能力与效率
sources:
  - { "name": "ai_info_source", "url": "https://aiera.com.cn/2026/09/07/other/admin/112478/%e8%b0%b7%e6%ad%8c%e8%ae%a9ai%e4%ba%92%e6%80%bc%e5%87%a0%e5%a4%a9%ef%bc%81%e5%b0%8f%e6%a8%a1%e5%9e%8b%e7%ab%9f%e5%a4%8d%e7%8e%b03%e9%81%93%e5%8d%9a%e5%a3%ab%e7%ba%a7%e9%9a%be%e9%a2%98/" }
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 6
groupScore: 72.0
scoreScale: "news-v3"
emphasis: false
---
# 谷歌 Teamwork：让 AI 互相「抬杠」数日，Gemini 3.7 Flash 首次以 Flash 级模型做出博士级数学成果

## 事件概述

新智元 9 月 7 日报道谷歌 Antigravity 团队 8 月 27 日发布的 Teamwork 技术长文：让多个 AI 实例以「竞争策略搜索 + 专职反驳者 + 内部锦标赛」的方式持续协作数小时到数天。成果层面，小模型 Gemini 3.7 Flash 在 3.1 Pro 引导下完整复现 3 项博士级数学难题——谷歌官方定调「Flash 级模型第一次做出博士级数学研究成果」。

## 已确认事实与证据

- Teamwork 四步机制（官方博客口径）：(1) 竞争策略搜索——孵化多候选方案，各配一名唯一 KPI 是驳倒方案的 falsifier；(2) 精准拆解——策略拆成带依赖的子问题拓扑图并行推进；(3) 内部锦标赛——子问题内淘汰赛，候选+批评揉出升级版；(4) 跨轮学习——失败草稿留给下一轮，验证器踩坑记入「陷阱登记簿」。通过 /teamwork-preview 启动。
- 数学成果：Flash 完整复现 3 项开放难题（ℓp 子空间近似 coreset 构造、最大内积嵌入维度下界、Hadamard 量化领先常数压低约 5.93 倍）；另有 4 项仅由 3.1 Pro 完成（含 Knuth's Cycles——给出偶数情形两个新构造、40+ 页 Lean 形式化验证与 70+ 页长证明；断网条件下独立重现 Erdős 单位距离问题）。
- TCSBench：3.7 Flash + 3.1 Pro 组合 71%，超越上一代 67.7% 纪录。
- 工程成果：Gemini 3.7 Flash 从零构建 RISC-V 周期级乱序执行模拟器（明确为软件模拟器而非 RTL 设计），与 BOOM 硬件平均周期误差 0.71%；Eigen SIMD 快速路径与 ParlayHash Swiss Table 优化（64 线程初始插入吞吐翻倍、单线程 +1.5 倍、省 25% 内存）两处改动被上游人类维护者合并。
- 官方博客：https://antigravity.google/blog/teamwork-when-ai-becomes-a-research-partner；Knuth 论文：www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf。

## 影响与后续观察

- 「AI 团队做开放研究问题」从口号走向可复现流程：falsifier 机制与跨轮记忆是值得借鉴的智能体协作设计；开源贡献被人类维护者合并是「AI 生成代码达到工程可用」的强信号。
- 待观察：Teamwork 的算力成本与适用任务边界；TCSBench 等评测的第三方复现；与 Anthropic/DeepMind 同类长时程协作系统的横向对比。
- 风险提示：成果均为谷歌官方口径，独立复现尚未见。

## 来源链接

- 新智元报道：https://aiera.com.cn/2026/09/07/other/admin/112478/
- 谷歌博客：https://antigravity.google/blog/teamwork-when-ai-becomes-a-research-partner
- Knuth 论文：https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf
