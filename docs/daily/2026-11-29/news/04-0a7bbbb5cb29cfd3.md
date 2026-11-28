---
schemaVersion: 3
candidateId: "url--aiera.com.cn-bd4bf08deca998b7496f4590c0b30392"
date: "2026-11-29"
category: "News"
groupRank: 4
title: "Gemini 4 Carbon点亮8颗太阳！70年几何悬案告破，只用6页神级证明"
authors: ["AIERA"]
summary: "2026年11月24日，Dror Aiger、Sariel Har-Peled与Goran Žužić在arXiv发布论文，无条件证明任意三维凸体都可被8个更小的自身正位似副本覆盖，解决了1957年提出的三维哈德维格覆盖猜想。arXiv摘要官方确认：证明借助基于Gemini 4 Carbon的实验框架“发现”，并在Lean 4中完成形式化验证；证明路径为“2+6=8”——两颗太阳照南北、晨昏线切成6段各用一颗照明，配合平分差体John位置与赫利定理收尾。据新智元报道，正文仅约6页，形式化工程含34个文件、13725行Lean 4代码且未引入自定义假设。四维及以上情形仍未解决。"
keywords: ["形式化验证", "AI辅助科研"]
sources: [{"name": "新智元报道", "url": "https://aiera.com.cn/2026/11/28/other/admin/125680/gemini-4-carbon%e7%82%b9%e4%ba%ae8%e9%a2%97%e5%a4%aa%e9%98%b3%ef%bc%8170%e5%b9%b4%e5%87%a0%e4%bd%95%e6%82%ac%e6%a1%88%e5%91%8a%e7%a0%b4%ef%bc%8c%e5%8f%aa%e7%94%a86%e9%a1%b5%e7%a5%9e%e7%ba%a7%e8%af%81/"}, {"name": "arXiv论文", "url": "https://arxiv.org/abs/2611.32334"}, {"name": "arXiv HTML全文", "url": "https://arxiv.org/html/2611.32334v2"}]
previewImage: "/daily/2026-11-29/assets/url--aiera.com.cn-bd4bf08deca998b7496f4590c0b30392/preview.png"
---

## 事件概述

2026年11月24日，论文《Hadwiger's Covering Conjecture in Three Dimensions》出现在arXiv（编号2611.32334，11月24日提交、25日修订），作者为Dror Aiger、Sariel Har-Peled与Goran Žužić。论文无条件证明：任意三维凸体都可以被8个更小的自身正位似副本覆盖，从而解决了1957年由瑞士数学家Hugo Hadwiger提出的"第20号难题"——三维哈德维格覆盖猜想。论文摘要明确写道：证明是借助基于Gemini 4 Carbon的实验框架"发现"的，并在Lean 4中完成了形式化验证。谷歌研究员Goran Žužić随即在X上宣布了这一结果（据媒体报道）。

## 已确认事实与证据

- arXiv官方摘要确认核心结论：对任意含非空内部的三维紧凸集，存在缩放系数与8个平移向量，使8个缩小副本的并集覆盖原集合；证明在Boltyanski等价的边界照明表述下进行，且完全自含（self-contained）。
- 摘要同时确认证明骨架：平行六面体直接由8个2/3缩放的自身副本覆盖；对非平行六面体的凸体，将其对称化的平分差体置于John位置，证明其支撑函数的球面平均严格小于12（仅正交立方体取等），再结合外多面体逼近、柯西平面周长公式与曲线变分的下半连续性，找到一个方向使其在凸体本身上的晨昏线（阴影边界）是S长度严格小于12的连续闭合曲线；将其切成6段S长度各严格小于2的弧，用三维赫利定理逐段照明，加上正负主方向共8个方向完成覆盖。
- arXiv页面确认作者为Dror Aiger、Sariel Har-Peled（伊利诺伊大学）与Goran Žužić三人；页面标注论文提交于11月24日、修订于11月25日。
- 据新智元报道：证明正文仅约6页；形式化验证工程包含34个文件、共13725行Lean 4代码，只调用Mathlib中"紧致""凸集""内部"等基础定义，未引入多余自定义假设，卡拉西奥多里定理、赫利定理等基础命题由智能体从头自证；在谷歌内部基于Gemini 4 Carbon搭建的实验框架于Dror Aiger与Goran Žužić的极少人工引导下发现证明，三位作者核实数学细节并撰写论文。行数、页数与协作分工细节当前材料未直接核验，以论文原文为准。
- 历史脉络（据报道）：1957年Hadwiger提出该猜想；1984年Lassak证明中心对称凸体8个副本足够；1999年Papadoperakis把一般三维凸体的界限压到16；2023年Prymak改进到14；正方体等平行六面体恰好需要8个。四维及以上维度猜想仍未解决（Hadwiger猜想四维需16个）。
- 报道还解释了该问题的技术难点：所需副本数量在豪斯多夫度量下只是上半连续而非下半连续，光滑替身逼近正方体时所需"太阳数"会从4跳到8，因此不能在光滑替身上证明后取极限（该解释为报道转述，当前材料未核验）。

## 影响与后续观察

- 这一案例再次展示了"AI提出证明骨架、人类研究员掌舵修正、Lean 4形式化验证把关"的数学研究范式：猜想悬置近70年，最终由人机协作在几天内完成收敛并附机器可检查代码。
- 对凸几何与离散几何而言，三维哈德维格猜想的解决清掉了一个长期开放问题；证明中"晨昏线切段+赫利定理收尾"的构造也可能成为处理更高维问题的模板。
- 后续观察：数学界对论文的审读、可能的简化与推广；四维情形（理论上界16）能否沿同样思路推进；相关形式化代码在Mathlib等库中的整合。
- 原文未报告：论文是否已投稿期刊及同行评审状态。

## 来源链接

- [新智元：Gemini 4 Carbon点亮8颗太阳！70年几何悬案告破，只用6页神级证明](https://aiera.com.cn/2026/11/28/other/admin/125680/gemini-4-carbon%e7%82%b9%e4%ba%ae8%e9%a2%97%e5%a4%aa%e9%98%b3%ef%bc%8170%e5%b9%b4%e5%87%a0%e4%bd%95%e6%82%ac%e6%a1%88%e5%91%8a%e7%a0%b4%ef%bc%8c%e5%8f%aa%e7%94%a86%e9%a1%b5%e7%a5%9e%e7%ba%a7%e8%af%81/)
- [arXiv：Hadwiger's Covering Conjecture in Three Dimensions](https://arxiv.org/abs/2611.32334)
- [arXiv HTML全文](https://arxiv.org/html/2611.32334v2)
