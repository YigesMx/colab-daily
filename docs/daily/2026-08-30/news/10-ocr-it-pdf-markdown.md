---
candidateId: "url--https%3A%2F%2Fwww.qbitai.com%2F2026%2F08%2F481075.html"
date: "2026-08-30"
category: News
title: "Firecrawl 团队开源 OCR It，20ms 完成 PDF 转 Markdown"
authors: ["qbitai.com", "github.com", "firecrawl.dev"]
summary: "Firecrawl 联合创始人 Nicolas Camara 宣布开源浏览器扩展 OCR It，可在约 20ms 内将不可复制 PDF 页面转为 Markdown，内置 Tesseract 离线运行，并称质量相当条件下比 Docling 快近 300 倍。"
keywords: ["开源生态", "云与端侧部署", "推理与系统优化"]
sources:
  - {"name":"qbitai.com","url":"https://www.qbitai.com/2026/08/481075.html"}
  - {"name":"github.com","url":"https://github.com/thiagotigaz/ocr-it"}
  - {"name":"firecrawl.dev","url":"https://www.firecrawl.dev/about"}
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 10
groupScore: 79
scoreScale: "news-v3"
---

# OCR It：浏览器里的 PDF 转 Markdown 工具

## 事件概述

Firecrawl 团队开源浏览器扩展 OCR It，支持 Chrome 与 Firefox。联合创始人 Nicolas Camara 称其可在约 20ms 内提取不可复制 PDF 页面的文字并转为 Markdown，且完全离线运行。

## 已确认事实与证据

量子位报道称，OCR It 使用捆绑 Tesseract，不需 API key 或联网；用户框选区域后可手动或自动循环执行截图、OCR 和翻页，连续两张相同页面、无法翻页、识别失败或达到 300 页上限会自动停止。开发者称在质量与 Docling 相当的前提下速度快近 300 倍。GitHub 仓库开放，浏览器内置 PDF 阅读器暂不支持自动翻页。

## 影响与后续观察

OCR It 降低了把扫描资料送入 LLM 的门槛，适合批量文献和文档处理。但社区测试也指出，标题、脚注、表格、数学公式与正文混排时仍不稳定。后续应关注版面结构保留、公式识别、多语言 OCR、隐私本地保证，以及与 MinerU、Docling、Marker 等流水线的端到端对比。

## 来源链接

- [GitHub 项目](https://github.com/thiagotigaz/ocr-it)
- [量子位报道](https://www.qbitai.com/2026/08/481075.html)
- [Firecrawl 团队](https://www.firecrawl.dev/about)
