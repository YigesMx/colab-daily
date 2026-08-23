---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F08%2F23%2Fother%2Fadmin%2F110191%2F25%25e5%25b2%2581%25e5%25b9%25bf%25e5%25b7%259e%25e5%25a5%25b3%25e5%25ad%25a9%25e7%2594%25a8ai%25e9%25aa%258c%25e6%2588%2590%25e4%25ba%2586%25ef%25bc%2581%25e4%25b8%25a4%25e5%25a4%25a7%25e8%258f%25b2%25e5%25b0%2594%25e5%2585%25b9%25e5%25a5%2596%25e5%25be%2597%25e4%25b8%25bb%25e5%25bf%2583%25e8%25a1%2580%25ef%25bc%258c%2F"
businessCandidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F08%2F23%2Fother%2Fadmin%2F110191%2F25%25e5%25b2%2581%25e5%25b9%25bf%25e5%25b7%259e%25e5%25a5%25b3%25e5%25ad%25a9%25e7%2594%25a8ai%25e9%25aa%258c%25e6%2588%2590%25e4%25ba%2586%25ef%25bc%2581%25e4%25b8%25a4%25e5%25a4%25a7%25e8%258f%25b2%25e5%25b0%2594%25e5%2585%25b9%25e5%25a5%2596%25e5%25be%2597%25e4%25b8%25bb%25e5%25bf%2583%25e8%25a1%2580%25ef%25bc%258c%2F"
date: "2026-08-24"
category: "News"
title: "25岁广州女孩用AI验成了！两大菲尔兹奖得主心血，无误"
authors: ["aiera.com.cn"]
summary: "Axiom Math 宣布 AxiomProver 完成 246 素数间距定理的 Lean 4 形式化验证，并公开论文与代码；该工作验证人类已有证明，不是发现新定理。"
provisionalKeywords: ["形式化验证","AI安全","开源生态"]
keywords: ["形式化验证","AI安全","开源生态"]
sources: [{"name":"aiera.com.cn","url":"https://aiera.com.cn/2026/08/23/other/admin/110191/25%e5%b2%81%e5%b9%bf%e5%b7%9e%e5%a5%b3%e5%ad%a9%e7%94%a8ai%e9%aa%8c%e6%88%90%e4%ba%86%ef%bc%81%e4%b8%a4%e5%a4%a7%e8%8f%b2%e5%b0%94%e5%85%b9%e5%a5%96%e5%be%97%e4%b8%bb%e5%bf%83%e8%a1%80%ef%bc%8c/"}]
previewImage: "/daily/2026-08-24/assets/url--https_3a_2f_2faiera.com.cn_2f2026_2f08_2f23_2fother_2fadmin_2f110191_2f25_25e5_25b2_2581_25e5_25b9_25bf_25e5_25b7_259e_25e5_25a5_25b3_25e5_25ad_25a9_25e7_2594_25a8ai_25e9_25aa_258c_25e6_2588_2590_25e4_25ba_2586_25ef_25bc_2581_25e4_25b8_25a4_25e5_25a4_25a7_25e8_258f_25b2_25e5_25b0_2594_25e5_2585_25b9_25e5_25a5_2596_25e5_25be_2597_25e4_25b8_25bb_25e5_25bf_2583_25e8_25a1_2580_25ef_25bc_258c_2f/preview.jpg"
schemaVersion: 3
ratingTrack: "news"
groupRank: 7
groupScore: 78
scoreScale: "news-v3"
emphasis: false
---

# Axiom Math 称完成素数间距定理形式化验证

## 事件概述

Axiom Math 于 8 月 17 日宣布，其 AxiomProver 系统完成了素数间距“246 定理”的形式化验证，结论为人类证明成立且 Lean 4 检查通过。新智元报道称，该工作验证的是既有人类数学成果，不是由 AI 发现新的素数间距定理。

## 已确认事实与证据

“246 定理”指存在无穷多对素数，其间距不超过 246。报道梳理其历史：张益唐 2013 年证明存在无穷多对间距不超过 7000 万的素数；James Maynard 随后将界限大幅缩小；Maynard、陶哲轩和 Polymath8b 协作团队进一步推进到 246。Axiom Math 公开了验证论文和 PrimeGapsLib 代码仓库，称证明分为 14 章、132 页，底层依赖 Bombieri-Vinogradov 定理和带误差项的素数定理等外部结果，其余中间结果由 Lean 4 形式化。

Axiom Math 创始数学家 Ken Ono 在报道中称，该定理代表当前人类对素数理解的一个高点。报道还介绍公司称 AxiomProver 由自动形式化、猜想生成、证明搜索和反向解释等模块组成，可将论文转换为机器可检查代码并辅助数学家审核。验证工作由公司公开，尚需社区独立审查和运行仓库确认。

## 影响与后续观察

这项工作的直接价值在于为复杂数论证明提供可检查的形式化链路，也为 AI 辅助验证关键软件和密码学相关代码提供案例。它不表示 AI 已突破孪生素数猜想，也不意味着形式化验证已经普遍适用于所有数学领域。

后续应关注 Lean 社区对该仓库的审查结果、外部定理假设和数值证书是否被接受、验证系统的可复现成本，以及 AxiomProver在其他证明与代码验证任务中的表现。

## 来源链接

- [Axiom Math 验证论文](https://primegaps.axiommath.ai/paper/)
- [PrimeGapsLib](https://github.com/AxiomMath/PrimeGapsLib)
- [IEEE Spectrum 报道](https://spectrum.ieee.org/axiom-math-246-theorem-formalization)
- [新智元报道](https://aiera.com.cn/2026/08/23/other/admin/110191/25%e5%b2%81%e5%b9%bf%e5%b7%9e%e5%a5%b3%e5%ad%a9%e7%94%a8ai%e9%aa%8c%e6%88%90%e4%ba%86%ef%bc%81%e4%b8%a4%e5%a4%a7%e8%8f%b2%e5%b0%94%e5%a5%96%e5%be%97%e4%b8%bb%e5%bf%83%e8%a1%80%ef%bc%8c/)

