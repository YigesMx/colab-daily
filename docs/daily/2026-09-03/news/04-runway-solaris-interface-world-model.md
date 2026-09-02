---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F09%2F02%2Fother%2Fadmin%2F111693%2Frunway%25e6%258a%258a%25e4%25bb%25a3%25e7%25a0%2581%25e5%25b9%25b2%25e6%258e%2589%25e4%25ba%2586%25ef%25bc%2581%25e9%25a6%2596%25e4%25b8%25aa%25e7%2595%258c%25e9%259d%25a2%25e4%25b8%2596%25e7%2595%258c%25e6%25a8%25a1%25e5%259e%258b%25ef%25bc%258cui%25e8%2587%25aa%25e5%25b7%25b1%25e9%2595%25bf%25e5%2587%25ba%25e6%259d%25a5%2F"
date: "2026-09-03"
category: News
title: "Runway把代码干掉了！首个界面世界模型，UI自己长出来"
authors: ["aiera.com.cn", "runwayml.com"]
summary: "Runway 发布界面世界模型家族首个模型 Solaris：基于 Gen-4.5 视频模型改造，把点击、拖拽、输入作为生成下一帧的条件，实时逐帧生成可交互界面，去掉 HTML/CSS/JS 中间层。经自回归+蒸馏+自输出训练三步达到交互速度、720p 会话质量；250 人近 7500 次盲测中指令遵循 61% 对 24%、自然流畅度 71% 对 21% 大胜 Claude Opus 5 代码界面，官方承认文字渲染、幻觉与长程连贯性仍是短板。"
keywords:
  - 世界模型
  - 视频生成
  - 智能体
sources:
  - {"name": "aiera.com.cn", "url": "https://aiera.com.cn/2026/09/02/other/admin/111693/runway%e6%8a%8a%e4%bb%a3%e7%a0%81%e5%b9%b2%e6%8e%89%e4%ba%86%ef%bc%81%e9%a6%96%e4%b8%aa%e7%95%8c%e9%9d%a2%e4%b8%96%e7%95%8c%e6%a8%a1%e5%9e%8b%ef%bc%8cui%e8%87%aa%e5%b7%b1%e9%95%bf%e5%87%ba%e6%9d%a5/"}
  - {"name": "runwayml.com", "url": "https://runwayml.com/news/research/introducing-solaris"}
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 4
groupScore: 85
scoreScale: "news-v3"
emphasis: false
---

## 事件概述

9 月 2 日，Runway 发布"界面世界模型"（Interface World Models）家族的首个模型 Solaris（官方页面已直接核验）。Solaris 建立在 Runway 的 Gen-4.5 视频生成模型之上并延续 GWM-1 通用世界模型路线：不再先把界面设计翻译成 HTML/CSS/JavaScript，而是把用户的点击、拖拽、输入作为生成下一帧的条件，实时逐帧生成可交互界面。据新智元当日报道，官方盲测中 Solaris 生成的交互界面在指令遵循与自然流畅度上大幅领先 Claude Opus 5 生成的代码界面；联合创始人 Cristóbal Valenzuela 以"视频是通用界面"为其定调。

## 已确认事实与证据

- 发布主体与时间：Runway 于 2026 年 9 月 2 日在官方博客发布 Solaris（官方页面标题"Introducing Solaris"，发布于当日）；新智元 9 月 2 日 00:01 UTC 发文报道。
- 定位（官方口径）：Solaris 是新家族"Interface World Models"的第一个模型，官方提出的问题设定是"当操作系统在你使用时才生成应用与网站会发生什么"；官方称其将"渲染画面"与"响应操作"合为一件事。
- 技术路径（官方口径）：Solaris 基于 Gen-4.5 视频生成模型改造，使其（1）理解交互、（2）实时响应；遵循 GWM-1 开出的世界模型路线。用户输入与文本、图像一样作为下一帧生成的条件；为达到交互速度，官方分三步将其改造为实时引擎——自回归逐帧生成（新动作可即时进入生成链路）、把多步去噪蒸馏为少步、用模型自身输出继续训练以稳定长交互的视觉质量。官方称可在整个会话中保持 720p 视觉质量。
- 双脑系统（媒体报道）：LLM 负责推理（理解请求、决定场景演进），Solaris 负责渲染，二者分离"推理"与"渲染"。
- 评测（官方口径）：其一，要求多模态大模型（含 Claude Fable 5）从单张截图重建网页，覆盖 30 种界面，结果显示即便最强模型，重建质量也随视觉复杂度增加而断崖式下降，佐证"界面经由语言/代码转译的信息损失"；其二，250 名参与者、近 7500 次两两盲测中，Solaris 对 Claude Opus 5 生成的代码界面，指令遵循胜率 61% 对 24%，自然流畅度 71% 对 21%。官方同时承认短板：清晰文字生成、幻觉与长程连贯性。
- 愿景（官方与联创口径）：Valenzuela 定义"界面世界模型"——未来视频是通用界面，所有 UI 都将变成聊天和手势输入、聊天和视频输出；Solaris 是第一步。媒体报道还指出它为训练 Agent 提供了动态环境生成的新途径。

## 影响与后续观察

- 若逐帧生成的交互质量与延迟达到产品水准，"App 作为预置软件"的形态可能被"按意图实时长出界面"替代；对 Agent 而言，这类模型还提供了生成动态交互环境的训练场。对具身智能侧的间接价值在于实时世界模型工程化（蒸馏、自回归、自输出训练）的示范。
- 待观察：交互延迟、并发成本与商业化（API/定价、开放范围）官方未披露；评测均为 Runway 自测盲测，第三方复现待发布；文字渲染、幻觉与长程连贯性短板的改进节奏未知；与 Claude/GPT 前端代码生成路线的实测对比需独立验证。
- 后续验证建议：关注 Runway 官方博客的 Solaris 后续版本与开发者实测。

## 来源链接

- Runway 官方博客：https://runwayml.com/news/research/introducing-solaris
- 新智元报道：https://aiera.com.cn/2026/09/02/other/admin/111693/runway%e6%8a%8a%e4%bb%a3%e7%a0%81%e5%b9%b2%e6%8e%89%e4%ba%86%ef%bc%81%e9%a6%96%e4%b8%aa%e7%95%8c%e9%9d%a2%e4%b8%96%e7%95%8c%e6%a8%a1%e5%9e%8b%ef%bc%8cui%e8%87%aa%e5%b7%b1%e9%95%bf%e5%87%ba%e6%9d%a5/

