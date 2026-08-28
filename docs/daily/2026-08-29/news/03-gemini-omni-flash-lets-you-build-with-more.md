---
candidateId: "url--https%3A%2F%2Fblog.google%2Finnovation-and-ai%2Ftechnology%2Fdevelopers-tools%2Fbuild-with-gemini-omni-1-1-flash%2F"
businessCandidateId: "url--https%3A%2F%2Fblog.google%2Finnovation-and-ai%2Ftechnology%2Fdevelopers-tools%2Fbuild-with-gemini-omni-1-1-flash%2F"
date: "2026-08-29"
category: News
title: "Gemini Omni 1.1 Flash lets you build with more control"
authors: ["blog.google"]
summary: "Google DeepMind 发布 Gemini Omni 1.1 Flash，支持最多 40 秒场景延长、首尾帧插值、360p 低成本草稿、4K 输出和最多 3 秒视频参考。"
provisionalKeywords: ["多模态生成", "实时推理", "产业合作"]
keywords: ["多模态生成", "实时推理", "产业合作"]
sources:
  - {"name": "blog.google", "url": "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/"}
previewImage: "/daily/2026-08-29/assets/url--https_3a_2f_2fblog.google_2finnovation-and-ai_2ftechnology_2fdevelopers-tools_2fbuild-with-gemini-omni-1-1-flash_2f/preview.png"
schemaVersion: 3
ratingTrack: "news"
groupRank: 3
groupScore: 91
scoreScale: "news-v3"
emphasis: false
---
# Google 发布 Gemini Omni 1.1 Flash

## 事件概述

Google DeepMind 于 2026 年 8 月 27 日发布 Gemini Omni 1.1 Flash，面向开发者和创作工具提供更强的生成视频控制能力。官方将这次更新定位为生产可用的 Omni 1.1 能力扩展，可通过 Google AI Studio、Gemini Enterprise Agent Platform 和 Google Flow 使用。

## 已确认事实与证据

官方公告确认，Omni 1.1 Flash 支持场景延长，可在参考最多 10 秒前文的基础上按 10 秒增量延续画面，总长度最高 40 秒；支持指定首帧和尾帧以生成连续转场或镜头运动；支持 360p 低成本草稿、最高 4K 输出，以及在多模态输入中引用最多 3 秒视频。官方称 360p 草稿基于系统吞吐量相比 720p 最多快 60%，成本约为三分之一；该性能口径为官方声明，具体工作负载结果未在公告中逐项给出。

官方页面还列出 Adobe、Figma Weave、GMI Cloud 和 Runway 等客户使用情况，并说明 Gemini AI Plus、Pro 和 Ultra 订阅用户可在 Google Flow 中使用，场景延长也进入 Gemini App。客户评价属于厂商引用，不构成本文对产品优劣的独立判断。对应用开发者而言，关键是确认现有 Omni 交互 API 能否复用 `previous_interaction_id`、首尾帧和视频引用参数，同时监控不同分辨率下的配额、失败率和输出稳定性。

## 影响与后续观察

这次更新主要提升生成视频的可控性、迭代成本和输出规格，可能加速创意工具、广告制作、故事板和交互式媒体工作流集成。相比单纯提高分辨率，首尾帧约束和长前文参考更直接影响叙事一致性与可编排性。后续需要观察 40 秒长镜头的一致性、多参考视频的身份保持、4K 输出的真实成本，以及平台间内容溯源与授权机制。对开发者而言，API 迁移成本和不同分辨率下的失败率仍需实测。

## 来源链接

- [Google 官方发布](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/)