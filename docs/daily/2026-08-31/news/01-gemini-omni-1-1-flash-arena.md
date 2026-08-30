---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F08%2F30%2Fother%2Fadmin%2F111352%2F%25e5%2588%259a%25e5%2588%259a%25ef%25bc%258c%25e8%25b0%25b7%25e6%25ad%258c%25e6%2596%25b0%25e6%25a8%25a1%25e5%259e%258b%25e5%2585%25a8%25e7%2590%2583%25e7%2599%25bb%25e9%25a1%25b6%25ef%25bc%2581%2F"
date: "2026-08-31"
category: News
title: "Google 更新 Gemini Omni 1.1 Flash：文生视频登顶 Arena，新增场景延展、首尾帧与 4K 放大"
authors: ["aiera.com.cn"]
summary: "Google 官方博客宣布 Gemini Omni 1.1 Flash 面向开发者生产可用，新增场景延展（回看 10 秒上下文、累计最长 40 秒）、首尾帧、360p 草稿、4K 放大与视频参考五项能力，并已在 Google AI Studio、Agent Platform 及订阅产品中开放。据新智元报道，该模型冲上 Arena 文生视频全球第一、图生视频第二（1488 分），此榜单成绩当前仅见媒体转述。该发布本身已被前一期日报覆盖，本期增量为榜单表现与能力细节。"
keywords: ["Google DeepMind", "视频生成", "多模态模型"]
sources:
  - {"name":"aiera.com.cn","url":"https://aiera.com.cn/2026/08/30/other/admin/111352/%e5%88%9a%e5%88%9a%ef%bc%8c%e8%b0%b7%e6%ad%8c%e6%96%b0%e6%a8%a1%e5%9e%8b%e5%85%a8%e7%90%83%e7%99%bb%e9%a1%b6%ef%bc%81/"}
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 1
groupScore: 74
scoreScale: "news-v3"
---

# Google 更新 Gemini Omni 1.1 Flash：文生视频登顶 Arena，新增场景延展、首尾帧与 4K 放大

## 事件概述

Google 于 2026 年 8 月 27 日发布官方博客《Gemini Omni 1.1 Flash lets you build with more control》，宣布生成式视频模型 Gemini Omni 1.1 Flash 面向开发者进入生产可用状态，可通过 Google AI Studio 的 Gemini API 和 Gemini Enterprise Agent Platform 接入。据新智元 8 月 30 日报道，更新后的 Gemini Omni 1.1 Flash 冲上 Arena 文生视频榜单全球第一，图生视频位列全球第二（1488 分）。该模型的正式发布已被前一期日报覆盖，本期的新增信息是其 Arena 榜单表现与场景延展、首尾帧、360p 草稿、4K 放大、视频参考等能力细节。

## 已确认事实与证据

以下来自 Google 官方博客与 Google AI Studio 官方 X 账号，属发布方宣布的内容：

- **场景延展（Scene extension）**：模型可回看最多 10 秒的先前画面继续生成，官方称此前模型只能参考最后一秒；可按 10 秒为一段续拍，累计最长 40 秒，官方宣称视觉一致性与叙事连贯性得到提升。
- **首尾帧（First and last frames）**：用户指定起始帧与结束帧，模型生成两帧之间的连续运动，官方称适用于复杂运镜、变焦转场与无缝循环。
- **360p 草稿**：官方称 360p 预览生成相比 720p 最多快 60%（官方注明该数据基于 360p 与 720p 的系统吞吐对比），成本约为三分之一，用于快速原型与分镜迭代。
- **4K 放大**：成片可输出 1080p 或 4K 分辨率，面向专业制作交付。
- **视频参考**：支持将最多 3 秒的参考视频与图片、文字一起混入多模态输入，用于保持视觉上下文与角色一致性。
- **接入与生态**：模型即日起在 Google AI Studio 开放，企业可通过 Gemini Enterprise Agent Platform 的 Agent Platform API 构建；同时向全球 Google AI Plus、Pro、Ultra 订阅用户在 Google Flow 中开放，场景延展能力也在 Gemini app 内向上述订阅用户开放。官方博客展示了 API 调用示例，并给出 Transition Studio（首尾帧转场）、看房应用（镜头在房间间推拉环绕）与 Draft Room（360p 多变体并行草稿）三个应用示例。Adobe 已将 Gemini Omni Flash 集成进 Adobe Firefly；Figma Weave 创意总监 Itay Schiff 在官方博客中称该更新让团队从"生成视频"走向"真正地导演视频"；Runway 与 GMI Cloud 亦给出官方引述。

以下来自新智元报道（媒体转述，非官方确认）：

- Arena 文生视频全球第一、图生视频全球第二（1488 分）的榜单表现；当前材料未包含榜单页的独立核验。
- 按秒计费四档价格：360p 每秒 0.03 美元、720p 每秒 0.10 美元、1080p 每秒 0.15 美元、4K 每秒 0.30 美元；官方博客确认存在价格表，但具体档位数字当前材料未从官方页面逐项确认。

## 影响与后续观察

- 官方将本次更新定位为生成式视频从"画质竞争"转向"可导演的工业化工作流"：首尾帧定分镜、360p 出草稿、视频参考锁角色、场景延展接戏、4K 放大交片，覆盖了一条完整制作流水线。这一判断属发布方与官方引述方的表述，实际效果待第三方验证。
- Adobe Firefly、Figma Weave、Runway 等主流创作工具已接入或表态，表明该模型在创作工具生态中的渗透，但各集成的具体可用范围与上线时间原文未详细报告。
- 待观察事项：Arena 文生视频第一、图生视频第二（1488 分）的榜单成绩当前仅见媒体报道，需以 LMArena/WebDev Arena 榜单页独立核验；四档按秒价格需与 Google 官方定价页核对；续拍 40 秒的一致性、首尾帧转场质量与 4K 放大的实际画质宣称（"studio-quality"）均为发布方表述，缺乏独立评测；360p"最多快 60%、成本三分之一"为官方基于系统吞吐的口径，实际成本受计费方式影响。

## 来源链接

- Google 官方博客：https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/
- Google AI Studio 官方 X 账号发布：https://x.com/googleaistudio/status/2093008678118998298
- 新智元报道：https://aiera.com.cn/2026/08/30/other/admin/111352/%e5%88%9a%e5%88%9a%ef%bc%8c%e8%b0%b7%e6%ad%8c%e6%96%b0%e6%a8%a1%e5%9e%8b%e5%85%a8%e7%90%83%e7%99%bb%e9%a1%b6%ef%bc%81/
