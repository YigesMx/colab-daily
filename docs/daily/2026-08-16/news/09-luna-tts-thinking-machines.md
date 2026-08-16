---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F08%2F15%2Fother%2Fadmin%2F109207%2F%25e5%2585%25a8%25e7%2590%2583%25e7%25ac%25ac%25e4%25b8%2580%25ef%25bc%258c%25e7%25a2%25be%25e5%258e%258b%25e8%25b0%25b7%25e6%25ad%258c%25ef%25bc%2581%25e4%25b8%25ad%25e5%259b%25bd%25e7%2589%2588thinking-machines%25e8%25af%259e%25e7%2594%259f%25ef%25bc%258c%25e8%25af%25ad%25e9%259f%25b3%25e8%25b5%259b%25e9%2581%2593%2F"
date: "2026-08-16"
category: News
title: "全球第一，碾压谷歌！中国版Thinking Machines诞生，语音赛道变天了"
authors:
  - "aiera.com.cn"
summary: "VUI Labs 的 Luna-TTS 采用扩散式语音生成与实时分支；报道称其在 Hugging Face TTS Arena 登顶，并在 Artificial Analysis Speech Arena 获得全球第三。"
provisionalKeywords:
  - "语音生成"
  - "多模态推理"
  - "模型发布"
keywords:
  - "语音生成"
  - "多模态推理"
  - "模型发布"
sources:
  - name: "新智元报道"
    url: "https://aiera.com.cn/2026/08/15/other/admin/109207/%e5%85%a8%e7%90%83%e7%ac%ac%e4%b8%80%ef%bc%8c%e7%a2%be%e5%8e%8b%e8%b0%b7%e6%ad%8c%ef%bc%81%e4%b8%ad%e5%9b%bd%e7%89%88thinking-machines%e8%af%9e%e7%94%9f%ef%bc%8c%e8%af%ad%e9%9f%b3%e8%b5%9b%e9%81%93%e5%8f%98%e5%a4%a9%e4%ba%86%2F"
  - name: "Luna-TTS arXiv"
    url: "https://arxiv.org/abs/2608.11593"
  - name: "Demo page"
    url: "https://vuilabs-ai.github.io/luna-tts"
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 9
groupScore: 72
scoreScale: "news-v3"
---
# VUI Labs 发布 Luna-TTS，扩散语音生成进入实时分支

## 事件概述

新智元报道称，宇生月伴（VUI Labs）发布 Luna-TTS 与 Luna-TTS Realtime，并称该模型在 Hugging Face TTS Arena 排名第一、在 Artificial Analysis Speech Arena 排名第三。

## 已确认事实与证据

报道称，Luna-TTS 将语音离散化后由基于 Qwen3 改造的 Diffusion LM 并行预测语音 token，实时版按块生成以降低首包延迟。技术报告称其在 Seed-TTS-Eval 的四项语音质量指标，以及首包延迟和实时率两项效率指标上取得第一；报道还提及音色、语气与呼吸等表现力控制。项目提供 arXiv 报告与 demo page。

## 影响与后续观察

若榜单与延迟结果可复现，扩散式 TTS 可能改变语音 Agent 的交互延迟和表现力折中。后续需核对评测样本、评分显著性、跨语言稳定性、克隆 consent 与反滥用措施，以及真实流式服务的 p95 延迟。

## 来源链接

- [新智元报道](https://aiera.com.cn/2026/08/15/other/admin/109207/%e5%85%a8%e7%90%83%e7%ac%ac%e4%b8%80%ef%bc%8c%e7%a2%be%e5%8e%8b%e8%b0%b7%e6%ad%8c%ef%bc%81%e4%b8%ad%e5%9b%bd%e7%89%88thinking-machines%e8%af%9e%e7%94%9f%ef%bc%8c%e8%af%ad%e9%9f%b3%e8%b5%9b%e9%81%93%e5%8f%98%e5%a4%a9%e4%ba%86%2F)
- [Luna-TTS arXiv](https://arxiv.org/abs/2608.11593)
- [Demo page](https://vuilabs-ai.github.io/luna-tts)
