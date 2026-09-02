---
candidateId: "url--https%3A%2F%2Fblog.google%2Finnovation-and-ai%2Fmodels-and-research%2Fgemini-models%2Fintroducing-agentic-video-in-gemini%2F"
date: "2026-09-03"
category: News
title: "Introducing agentic video understanding with Gemini"
authors: ["blog.google"]
summary: "Google DeepMind 9 月 1 日为 Gemini 3.7/3.6 Flash 与 3.5 Flash-Lite 上线智能体式视频理解：模型动态决定看什么、多快、经哪种模态查看视频，替代固定帧率整段读取。官方基准称成本最高降 66%、token 消耗最高降 88%、准确率最高升 7%，长视频增益最显著；支持亚秒级时刻检索、多小时大海捞针问答、异常检测与动作计数，当日经 Gemini API 可用、不加功能费，后续将登陆 Gemini 应用与 YouTube Ask 功能。"
keywords:
  - 多模态大模型
  - 视频生成
  - 智能体
sources:
  - {"name": "blog.google", "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/"}
previewImage: "/daily/2026-09-03/assets/url--https_3a_2f_2fblog.google_2finnovation-and-ai_2fmodels-and-research_2fgemini-models_2fintroducing-agentic-video-in-gemini_2f/preview.png"
schemaVersion: 3
ratingTrack: "news"
groupRank: 6
groupScore: 79
scoreScale: "news-v3"
emphasis: false
---

## 事件概述

9 月 1 日，Google DeepMind 在官方博客宣布为 Gemini 3.7 Flash、3.6 Flash 与 3.5 Flash-Lite 三款模型上线"智能体式视频理解"（agentic video understanding）。与按固定帧率（默认 1 FPS）整段读取视频的静态处理不同，模型以目标驱动的方式动态决定看什么、以什么速度、经哪种模态（视觉帧、音频或转写文本）查看，只在需要时加载视频的相关片段。官方口径称：在标准视频分析基准上，分析成本最高降低 66%、token 消耗最高降低 88%、准确率最高提升 7%；功能当日即在 Google AI Studio 与 Gemini Enterprise Agent Platform 的 Gemini API 中可用。

## 已确认事实与证据

- 发布主体与时间：Google DeepMind 官方博客 2026 年 9 月 1 日发布（官方博客全文已由 crawler 完整保存，本文事实均出自官方原文）；作者为高级产品经理 Rohan Doshi 与研究总监 Mario Lučić。
- 功能机制（官方口径）：agentic video understanding 将模型核心推理与原生视频工具结合，通过智能体循环调用内部工具加载视频文件的相关部分，动态搜索、扫描、检查目标片段；与此前"静态处理"（固定 FPS 读取整段视频）相对。
- 效果（官方基准口径）：标准视频分析基准上成本最高降 66%、token 消耗最高降 88%、准确率最高升 7%；增益在长视频（10 分钟教学、90 分钟课程到数小时录像）上尤其显著。官方示例包括 LongVideoBench 长视频基准上 3.7 Flash 开启前后的 token 缩减与准确率提升，以及动态 FPS 下对快速动作的准确计数。官方称开启后 Gemini 3.7 Flash 处于视频理解"精度-成本帕累托前沿"。
- 能力用例（官方口径）：亚秒级时刻检索（精准定位快速状态变化与剪辑边界，支持自动视频剪辑）、多小时视频的"大海捞针"问答、异常检测（对感兴趣时间窗以更高 FPS 重采样）、随时间精确计数动作与物体。
- 可用性（官方口径）：当日上线，覆盖视频上传与 YouTube 视频两类输入，经 Google AI Studio 与 Gemini Enterprise Agent Platform 的 Gemini API 提供；使用标准 Gemini API token 定价、无额外功能费；API 配置中将 processing 设为 "agentic" 即可启用。
- 产品路线（官方口径）：该能力将很快滚动到 Gemini 应用全体用户的 Flash 与 Flash-Lite 模型；未来数月将支撑 YouTube 视频页的 "Ask YouTube" 功能。

## 影响与后续观察

- 长视频理解的成本结构可能因此改变：token 消耗降近九成意味着多小时视频分析从"高成本或丢细节"的二选一变为常态可行，对视频检索、监控异常检测、媒体资产处理等智能体应用是直接利好；与 agentic vision（代码执行+图像理解）组合构成 Google 的"智能体感知"路线。
- 待观察：66%/88%/7% 均为官方基准口径，第三方任务上的复现待验证；动态加载在高并发下的延迟表现、对非英文视频转写的依赖程度未披露；与竞品（如其他厂商的视频理解 API）的同任务成本对比待观察；消费端 Gemini 应用与 Ask YouTube 的实际上线时间未定。
- 后续验证建议：阅读官方开发者指南并实测长视频问答的 token 消耗与准确率。

## 来源链接

- Google 官方博客：https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/

