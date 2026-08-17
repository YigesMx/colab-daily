---
candidateId: "url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-08-16-5"
date: "2026-08-17"
category: "Paper"
title: "AI生产力越高，碳排放越高？问题不只在数据中心"
authors:
  - "www.nature.com"
summary: "Nature 子刊研究估计 AI 生产力增益通过化石能源扩张产生的排放可能超过可再生能源收益，净增 0.47–1.8 Gt 年度 CO₂。"
provisionalKeywords:
  - "AI可持续性"
  - "模型能力"
  - "产业观察"
keywords:
  - "AI可持续性"
  - "模型能力"
  - "产业观察"
sources:
  - name: "www.nature.com"
    url: "https://www.nature.com/articles/s44168-026-00411-0"
  - name: "github.com"
    url: "https://github.com/geldner/enabled_emissions_CGE"
  - name: "www.jiqizhixin.com"
    url: "https://www.jiqizhixin.com/articles/2026-08-16-5"
previewImage: "/daily/2026-08-17/assets/url--https_3a_2f_2fwww.jiqizhixin.com_2farticles_2f2026-08-16-5/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 68
scoreScale: "paper-v2"
---

# AI生产力越高，碳排放越高？问题不只在数据中心

## 研究问题与贡献

论文研究 AI 生产力提高如何通过能源系统形成“可避免排放”和“可使能排放”。作者认为只统计数据中心用电不足以覆盖二阶效应：AI 若提高化石能源开采、炼化或发电效率，会降低成本并扩大使用；若提高可再生能源效率，则可能替代化石能源。净效应取决于两条路径的相对增益。

## 方法与系统

研究使用全球能源经济可计算一般均衡模型，把 AI-mediated productivity shock 施加到化石与可再生能源供给路径，比较 64 个经验情景、基准与参数敏感性。模型包含能源替代、需求反弹与贸易反馈，并公开模型配置和输出数据仓库。

## 实验设置与数据

实验按低、中、高采用率及并行采用情景分解化石、可再生与燃料中性路径，报告年度 CO₂ 变化。论文还把模型结果与 IEA 数据中心一阶估计区分开，避免不同分析框架直接相加；敏感性分析覆盖能源结构、冲击幅度与基线假设。

## 结果、限制与结论

原文关键证据摘录：- Under parallel adoption scenarios, net annual CO₂ emissions increase by 0.47–1.8 gigatonnes (1.2–4.8% of 2024 global energy-related CO₂ emissions).
- Avoided emissions exceed enabled emissions only when renewables productivity gains outpace fossil gains by 4–5×.
- Code availability All model code, simulation scripts, experiment configurations, and output data are available in the accompanying GitHub repository https://www.github.com/geldner/enabled_emissions_CGE , archived at Zenodo ( https://doi.org/10.5281/zenodo.21540204 ).
- Fuel-neutral productivity gains are excluded.

在并行采用情景中，研究估计净增年度 CO₂ 0.47–1.8 Gt，相当于 2024 年全球能源相关排放的 1.2–4.8%；化石路径可使能 0.6–2.4 Gt 年度排放。要达到净排放持平，可再生生产力增益需超过化石增益约 4–5 倍。限制是未完整建模材料、硬件生命周期、需求转移与区域政策影响。

## 来源链接

- https://www.nature.com/articles/s44168-026-00411-0
- https://github.com/geldner/enabled_emissions_CGE
- https://www.jiqizhixin.com/articles/2026-08-16-5
