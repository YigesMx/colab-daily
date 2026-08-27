---
candidateId: "url--https%3A%2F%2Fwww.qbitai.com%2F2026%2F08%2F479919.html"
businessCandidateId: "url--https%3A%2F%2Fwww.qbitai.com%2F2026%2F08%2F479919.html"
date: "2026-08-28"
category: News
title: "神秘「牛来」模型果然是智谱！GLM首个原生多模态，还用的国产卡"
authors: ["qbitai.com"]
summary: "量子位报道称智谱发布并开源GLM-5.3 Flash，称其为5系列首个原生多模态模型，采用320B总参数/18B激活参数架构并由国产芯片承载线上请求。"
provisionalKeywords: ["多模态模型", "芯片与算力"]
keywords: ["多模态模型", "芯片与算力"]
sources:
  - {"name": "qbitai.com", "url": "https://www.qbitai.com/2026/08/479919.html"}
previewImage: "/daily/2026-08-28/assets/url--https_3a_2f_2fwww.qbitai.com_2f2026_2f08_2f479919.html/preview.webp"
schemaVersion: 3
ratingTrack: "news"
groupRank: 5
groupScore: 88
scoreScale: "news-v3"
emphasis: false
---

# 智谱发布并开源GLM-5.3 Flash，量子位称其为首个原生多模态5系列模型

## 事件概述

2026年8月26日，量子位报道，此前在海外热议的匿名模型“牛来”/Ox Alpha由智谱认领，真身为已发布并开源的GLM-5.3 Flash。报道称，该模型是智谱5系列首个原生多模态模型，线上请求由国产芯片承载。

## 已确认事实与证据

量子位报道称，GLM-5.3 Flash总参数为320B，实际激活参数18B，层数从GLM-4.5的92层降至45层，使用30T Token多模态预训练语料，上下文长度为1M。架构上采用线性注意力与稀疏注意力混合，并通过IndexPool压缩索引器缓存向量；报道援引智谱口径称，相对GLM-5.3注意力计算量降低3.01倍，KV Cache缩小4.44倍。

性能方面，报道称GLM-5.3 Flash在AA榜单得到57分，与Claude Opus 4.8持平；在OpenRouter匿名测试期间登上榜首并刷新单日token用量纪录，OpenCode称其终结了DeepSeek连续56天霸榜。报道还称，模型定价为GLM-5.3的十分之一，限时折扣为二十分之一，并低于DS-V4-Flash。上述榜单、调用量和价格比较均来自量子位或其引用平台，本文未独立复核。

量子位还报道称，智谱为Visual Coding构建数据合成流水线，使模型能查看页面、交互和3D场景并根据视觉反馈修改；服务侧采用Encode-Prefill-Decode分离式架构、Layer Split和混合缓存量化，相较同一硬件初始基线端到端性能提升3倍。模型权重已开放，并接入ZCode和开放API。

## 影响与后续观察

GLM-5.3 Flash的关键点在于把原生多模态、稀疏激活架构、低成本推理和开源权重组合在一起。如果报道中的多模态编码、长上下文和视觉反馈能力可复现，它会降低复杂Agent和3D/界面生成任务的使用门槛；国产芯片承载真实流量的说法也值得关注。

后续需要核对智谱或BigModel官方模型卡、权重许可、上下文和计费口径，并等待独立基准复测、长任务稳定性和并发服务数据。匿名测试期间的榜单热度不能直接等同于通用能力领先。

## 来源链接

- [量子位：神秘「牛来」模型果然是智谱！GLM首个原生多模态，还用的国产卡](https://www.qbitai.com/2026/08/479919.html)
