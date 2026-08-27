---
candidateId: "url--https%3A%2F%2Fblogs.nvidia.com%2Fblog%2Fnvlink-fusion-nvhbm-custom-high-bandwidth-memory%2F"
businessCandidateId: "url--https%3A%2F%2Fblogs.nvidia.com%2Fblog%2Fnvlink-fusion-nvhbm-custom-high-bandwidth-memory%2F"
date: "2026-08-28"
category: News
title: "NVIDIA NVLink Fusion Expands With NVHBM Custom High-Bandwidth Memory"
authors: ["blogs.nvidia.com"]
summary: "NVIDIA官方宣布NVLink Fusion扩展NVHBM定制高带宽内存，称相对标准HBM4E提升内存带宽、降低功耗并释放XPU计算面积。"
provisionalKeywords: ["AI基础设施", "芯片与算力"]
keywords: ["AI基础设施", "芯片与算力"]
sources:
  - {"name": "blogs.nvidia.com", "url": "https://blogs.nvidia.com/blog/nvlink-fusion-nvhbm-custom-high-bandwidth-memory/"}
previewImage: "/daily/2026-08-28/assets/url--https_3a_2f_2fblogs.nvidia.com_2fblog_2fnvlink-fusion-nvhbm-custom-high-bandwidth-memory_2f/preview.jpg"
schemaVersion: 3
ratingTrack: "news"
groupRank: 3
groupScore: 91
scoreScale: "news-v3"
emphasis: false
---

# NVIDIA NVLink Fusion 扩展 NVHBM 定制高带宽内存

## 事件概述

2026年8月26日，NVIDIA官方博客宣布扩展NVLink Fusion生态，推出NVHBM下一代高带宽内存技术。NVIDIA称，该技术面向超大规模云厂商和AI创新者的半定制AI基础设施，将由多家内存伙伴验证和供应；Amazon Annapurna Labs将率先参与合作。

## 已确认事实与证据

NVIDIA称，传统HBM架构把内存控制器放在XPU芯片上，占用可用于计算的硅面积。NVHBM将NVIDIA定制内存控制器集成到HBM base die中，与NVIDIA未来GPU使用的同源技术为基础。相对标准HBM4E，官方口径为最高30%内存带宽提升、HBM功耗降低15%，并最多释放25%的XPU计算芯片面积。

NVIDIA同时表示将建立由多个内存供应商提供的标准NVHBM实现，降低客户跨供应商集成与认证内存的工程成本。Amazon Annapurna Labs将从下一代Trainium4开始支持NVLink Fusion与NVLink scale-up架构，使Amazon定制芯片与NVIDIA GPU能够在共同机架级架构中协作。Annapurna Labs副总裁Nafea Bshara称，这项技术合作将服务于未来AWS基础设施设计。

官方文章还说明，NVLink Fusion允许伙伴将定制XPU和CPU接入NVIDIA机架级平台，访问NVLink chiplets、NVLink-C2C、NVLink Switch和MGX系统，并与CPU伙伴、ASIC设计方和系统制造商协作。

## 影响与后续观察

NVHBM把内存控制器从计算芯片移入3D堆栈，若量产和认证顺利，可为半定制XPU留出更多计算面积，并降低多家内存供应商的集成成本。对AI工厂而言，带宽、功耗和机架级互连的协同设计会直接影响大规模推理和训练效率。

后续需要观察NVHBM的实际产品规格、供货时间、内存伙伴名单、良率与成本，以及Trainium4与NVIDIA GPU共同机架架构的实测性能和软件成熟度。NVIDIA给出的30%、15%和25%均为特定对比条件下的官方声称，尚无独立测试。

## 来源链接

- [NVIDIA: NVIDIA NVLink Fusion Expands With NVHBM Custom High-Bandwidth Memory](https://blogs.nvidia.com/blog/nvlink-fusion-nvhbm-custom-high-bandwidth-memory/)
