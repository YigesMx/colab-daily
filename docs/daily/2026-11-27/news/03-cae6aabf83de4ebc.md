---
schemaVersion: 3
candidateId: "url--aiera.com.cn-d149155c5ee02bcc1975f448de558e5e"
date: "2026-11-27"
category: "News"
groupRank: 3
title: "黎曼猜想之后，代数版P≠NP证明了！"
authors: ["AIERA"]
summary: "2026年11月23日（北京时间11月24日凌晨），Anthropic在GitHub仓库anthropics/formal-math公开论文《VP ≠ VNP over every field》及Lean 4形式化证明，署名Claude（Anthropic）、无人类作者：对任意域证明哈密顿回路多项式及特征非2域上的积和式需要超多项式规模算术电路，故VP不等于VNP（Valiant猜想，代数版P≠NP），但不解决布尔P与NP问题；README声明证明由AI发现与书写、无人类数学家检查，CI以独立内核nanoda复核。约四小时后OpenAI在openai/math公开同日版论文《VP and VNP are different》，给出exp(Omega((log n)^(5/4)))的border下界并附Lean证明。新智元报道了70页/7.3万行Lean与30页/44万行Lean等细节（媒体口径）；社区第三方复核仓库已出现，两份证明均未经同行评审。"
keywords: ["形式化证明", "大语言模型"]
sources: [{"name": "Anthropic formal-math仓库（vp-vnp）", "url": "https://github.com/anthropics/formal-math/tree/main/vp-vnp"}, {"name": "OpenAI math仓库（VP-and-VNP-are-different）", "url": "https://github.com/openai/math/tree/main/preprints/VP-and-VNP-are-different-November-23-2026"}, {"name": "新智元（aiera.com.cn）报道", "url": "https://aiera.com.cn/2026/11/26/other/admin/125372/%e9%bb%8e%e6%9b%bc%e7%8c%9c%e6%83%b3%e4%b9%8b%e5%90%8e%ef%bc%8c%e4%bb%a3%e6%95%b0%e7%89%88p%e2%89%a0np%e8%af%81%e6%98%8e%e4%ba%86%ef%bc%81/"}]
previewImage: "/daily/2026-11-27/assets/url--aiera.com.cn-d149155c5ee02bcc1975f448de558e5e/preview.png"
---

## 事件概述

2026年11月23日（北京时间11月24日凌晨），Anthropic 在 GitHub 仓库 anthropics/formal-math 的 vp-vnp 目录公开了论文《VP ≠ VNP over every field》及其 Lean 4 形式化证明，论文署名为「Claude（Anthropic）」，无人类作者署名。约四个小时后（北京时间11月24日上午，据新智元报道为3小时47分钟），OpenAI 也在 openai/math 仓库公开了同日版本（November 23, 2026 edition）的论文《VP and VNP are different》及其 Lean 证明。两家公司以不同路线先后宣布证明了代数复杂度理论中的瓦利安特猜想（Valiant's conjecture）：VP 不等于 VNP——常被称为「代数版 P 不等于 NP」。

需要强调：这一结果并不等于证明了布尔电路意义下的 P 不等于 NP，两个官方 README 与论文摘要均明确说明「does not settle P vs NP」。

## 已确认事实与证据

以下事实由 Anthropic 与 OpenAI 的官方 GitHub 仓库 README 及论文直接确认：

- Anthropic 侧（anthropics/formal-math，vp-vnp 目录，Apache 2.0 许可）：
  - 对任意域，计算哈密顿回路多项式的算术电路，以及特征不为2的域上计算积和式（permanent）的电路，其门数下界为 m 的 c 乘以 (log m) 的 1/3 次幂这一超多项式量级（m^(c(log m)^(1/3))），对所有足够大的 m 成立；对近似（border）电路同样成立。因此 VP 是 VNP 的真子集，且 VNP 不包含于 VP 的闭包。
  - 该结果由一个内部研究用 Claude 模型发现；论文与 Lean 4 形式化均由 AI 模型写成，官方 README 明确声明「没有人类数学家检查过该证明」。
  - 仓库 CI 运行更完整的校验：用 Comparator 对照 Challenge.lean 的命题陈述，并以第二个独立编写的内核 nanoda 复核证明；允许的公理仅为 propext、Classical.choice 与 Quot.sound。
  - 论文共70页，完整证明在其附录中（页面元数据与 PDF 均可确认）。
- OpenAI 侧（openai/math，preprints/VP-and-VNP-are-different-November-23-2026）：
  - 定理 1.1 给出显式 VNP 族在任意域上的 border 算术电路规模下界 exp(Omega((log n)^(5/4)))；推论 1.2 将其转移到任意域上的有向哈密顿回路多项式与特征不为2的域上的积和式。
  - 精确（非 border）VP-VNP 分离的 Lean 证明在同仓库提供；论文附 LaTeX 源码与 TikZ 图。
  - README 说明 2026年11月24日的系列379预印本（欧氏张量几何及其应用）已涵盖本预印本的结果，并给出两篇后续预印本链接。
- 双方均为研究工件（research artifact），Anthropic 侧明确「不维护、不接受贡献」。

以下细节来自新智元报道（媒体口径，官方页面未直接确认）：Anthropic 版本约7.3万行 Lean 代码、OpenAI 版本约44万行；两家合入时间相差3小时47分钟；OpenAI 在更新记录中自称11月6日已得到该结果但未给出证据，并在 README 中表示先后归属交由数学界判断。行数与时间线数据未经官方仓库直接核实。

此外，GitHub 上已出现多个第三方复核仓库，对 Anthropic 仓库的提交做了独立重放核验并报告通过；此类社区核验属第三方结论，尚不构成同行评审。

## 影响与后续观察

- 数学影响：VP 与 VNP 的分离是代数复杂度理论四十七年来的核心开放问题（Valiant 1979 年提出），此前一般电路下界的最好结果长期停留在 Strassen 与 Baur-Strassen 的量级。本次两家给出的均为超多项式下界，但具体指数不同，说明「内门」P 与 NP（布尔世界）仍未打开。
- 验证边界：Lean 内核校验只保证「代码中的定理成立」，不保证定理陈述与论文宣称完全一致、前提无遗漏；两篇论文均无人类数学家通读，也未经同行评审。官方 README 已坦承这一点，人类数学家的逐条核对是下一个必要步骤。
- 事件属性值得注意：证明的发现、书写与机器验证均由 AI 模型完成，人类角色后移为「核对陈述与流程」。先后顺序之争（媒体称 OpenAI 自称11月6日已获结果但无证据）尚无公开材料裁决。
- 后续观察点：数学界对两份证明陈述与论文正文一致性的核对意见；Lean 社区（Mathlib 等）对形式化质量的评估；两家是否发布更完整的说明或撤回修订；该事件对「AI 参与前沿数学证明」规范的长期影响。

## 来源链接

- [Anthropic formal-math 仓库 vp-vnp 目录（论文与 Lean 证明）](https://github.com/anthropics/formal-math/tree/main/vp-vnp)
- [OpenAI math 仓库 VP-and-VNP-are-different 预印本（2026-11-23 版）](https://github.com/openai/math/tree/main/preprints/VP-and-VNP-are-different-November-23-2026)
- [新智元报道：黎曼猜想之后，代数版P≠NP证明了！](https://aiera.com.cn/2026/11/26/other/admin/125372/%e9%bb%8e%e6%9b%bc%e7%8c%9c%e6%83%b3%e4%b9%8b%e5%90%8e%ef%bc%8c%e4%bb%a3%e6%95%b0%e7%89%88p%e2%89%a0np%e8%af%81%e6%98%8e%e4%ba%86%ef%bc%81/)
- [Anthropic 论文 PDF：VP ≠ VNP over every field](https://raw.githubusercontent.com/anthropics/formal-math/main/vp-vnp/paper.pdf)
