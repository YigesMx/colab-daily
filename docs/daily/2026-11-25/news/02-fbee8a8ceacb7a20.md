---
schemaVersion: 3
candidateId: "url--aiera.com.cn-c7d93f76ffcf4cce9ceeb34455366607"
date: "2026-11-25"
category: "News"
groupRank: 2
title: "斯坦福博士零AI苦研黎曼猜想12年，公开8小时反遭AI挑错！"
authors: ["新智元"]
summary: "2026 年 11 月 20 日黎曼猜想同日收到两份成果：Anthropic 的 Levent Alpöge 发布与 Claude 合作、约 1700 万行 Lean 代码的证明，次日获 Lean FRO 与 Mathlib Initiative 联合声明确认；独立数学家 Alessandro Masullo 纯人工研究约 12 年的广义黎曼猜想草稿由 Ravi Vakil 匆忙公开，约 8 小时后即被多人在不同 AI 模型协助下发现问题，具体漏洞内容未公开。"
keywords: ["AI数学证明与形式化验证", "智能体"]
sources: [{"name": "Lean 社区博客：Lean verification of the Riemann Hypothesis", "url": "https://leanprover-community.github.io/blog/posts/riemann-hypothesis/"}, {"name": "Ravi Vakil 博客：Hurried Announcement: Alessandro Masullo GRH", "url": "https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/"}, {"name": "新智元报道", "url": "https://aiera.com.cn/2026/11/24/other/admin/124936/%e6%96%af%e5%9d%a6%e7%a6%8f%e5%8d%9a%e5%a3%ab%e9%9b%b6ai%e8%8b%a6%e7%a0%94%e9%bb%8e%e6%9b%bc%e7%8c%9c%e6%83%b312%e5%b9%b4%ef%bc%8c%e5%85%ac%e5%bc%808%e5%b0%8f%e6%97%b6%e5%8f%8d%e9%81%adai%e6%8c%91/"}]
previewImage: "/daily/2026-11-25/assets/url--aiera.com.cn-c7d93f76ffcf4cce9ceeb34455366607/preview.png"
---

## 事件概述

2026 年 11 月 20 日，悬置 160 余年的黎曼猜想（Riemann Hypothesis）在同一天收到两份性质截然不同的成果发布。其一：Anthropic 研究者 Levent Alpöge 发布了与 Claude 合作完成的黎曼猜想证明，形式为一个约 1700 万行代码的 Lean 库；次日（11 月 21 日），Lean FRO 与 Mathlib Initiative 发布联合声明，对该证明给出"完全有信心"（full confidence）的正式认证。其二：斯坦福数学博士、独立数学家 Alessandro Masullo 公开了纯人工完成、据称历时约 12 年的广义黎曼猜想（GRH）证明草稿；草稿由斯坦福教授 Ravi Vakil 匆忙发布，约 8 小时后 Vakil 更新称，已有多人在不同 AI 模型的协助下于其中发现了问题。一份证明被机器确认，另一份被机器挑错——数学研究的生产与审稿节奏正在被同时压缩。

## 已确认事实与证据

来自官方一手来源（均已抓取原文留档）的确认：

- **Lean 社区官方博客（2026 年 11 月 21 日）**：Lean FRO 与 Mathlib Initiative 联合声明确认，2026 年 11 月 20 日，Levent Alpöge 以 Lean 库形式发布了黎曼猜想证明，代码量 1700 万行，直接依赖仅为 Mathlib。声明写道："我们对 Alpöge 的黎曼猜想证明正确性具有完全信心（We have full confidence that Alpöge's proof of the Riemann Hypothesis is correct）"，并确认该命题的陈述与证明均正确、满足社区此前提出的四项核验标准；Lean 与 Mathlib 社区在过去一天内集中完成了验证。
- **Ravi Vakil 博客（2026 年 11 月 20 日 10:18 发布，11 月 22 日更新）**：Alessandro Maria Masullo 提出了广义黎曼猜想（GRH）的一个候选证明，斯坦福数论学家 Brian Conrad 已密切审阅数月并给出大量反馈（正在整合），"到目前为止在他看来是不错的"（it was so far looking good to him）；Vakil 明确说明该工作"完全是人类的，没有使用 AI"。原计划是让 Masullo 与 Conrad 合作一年打磨文稿、经足够多人审阅后再正式宣布，因同期事件冲击而改为提前放出当前版本（处于修订中）。发布约 8 小时后 Vakil 更新："已有数人联系我，报告在这个候选证明中发现了问题，且是在不同 AI 模型的协助下识别的"；他强调所有问题都必须解决到让学界满意，该证明才可能被接受，并声明本人不对证明思路的正确性作任何担保。

来自媒体报道（新智元，2026 年 11 月 24 日）的补充细节，官方页面未直接确认：Alpöge 与 Claude 的合作始于 10 月 6 日、全程约 41 天；成果形式为 4 页人类说明《Remark》加约 1700 万行 Lean 代码，另有超 25 万页 AI 草稿尚未公开；Masullo 草稿约 940 页；Conrad 为安德鲁·怀尔斯的学生；Vakil 为美国数学学会主席；OpenAI 9 月曾宣布约 1 万个 AI 智能体用 88 小时找到带外力三维 Navier-Stokes 方程的奇点；陶哲轩等 25 位菲尔兹奖得主 9 月联署《AI 在数学领域的严重错位》宣言；菲尔兹奖得主吴宝珠就本事件在 Facebook 发表长帖。以上细节当前材料未能在官方来源中核实，需谨慎对待。

## 影响与后续观察

- Lean 社区的联合认证使 Alpöge 证明成为首个获得形式化社区联合确认的黎曼猜想证明，这是"AI 参与产出 + 机器形式化验证"路线的标志性成果。但据媒体报道（官方未确认），1700 万行 Lean 代码与超 25 万页未公开解释材料对人类理解构成巨大挑战，克雷数学研究所（Clay）千禧年大奖的评审流程也尚未开始。
- Masullo 的纯人类 GRH 证明已被报告存在问题，具体漏洞内容目前未公开；其能否修复、以何种形式修复尚无结论。Vakil 已表示除非有重大新进展，这将是他对该主题的最后一次更新，后续数学问题请联系 Brian Conrad。
- 该事件的深层影响在于研究节奏的双重改变：解题速度与审稿速度同时被 AI 压缩。最纯粹的人类证明最先被 AI 审完，而 AI 生成的证明反而需要人类花数年去读懂——两种"理解赤字"将长期并存。
- 后续可关注：Masullo 草稿的修订与社区核查进展；Alpöge Lean 库的公开、文档化与人类可读摘要的发布；克雷研究所是否以及如何启动评审；数学界围绕 AI 发表规范（署名、数据使用、仓促发布）的制度回应。

## 来源链接

- Lean 社区博客：Lean verification of the Riemann Hypothesis：https://leanprover-community.github.io/blog/posts/riemann-hypothesis/
- Ravi Vakil 博客：Hurried Announcement: Alessandro Masullo GRH：https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/
- 新智元报道：https://aiera.com.cn/2026/11/24/other/admin/124936/%e6%96%af%e5%9d%a6%e7%a6%8f%e5%8d%9a%e5%a3%ab%e9%9b%b6ai%e8%8b%a6%e7%a0%94%e9%bb%8e%e6%9b%bc%e7%8c%9c%e6%83%b312%e5%b9%b4%ef%bc%8c%e5%85%ac%e5%bc%808%e5%b0%8f%e6%97%b6%e5%8f%8d%e9%81%adai%e6%8c%91/
