---
candidateId: "url--https%3A%2F%2Fhuggingface.co%2Fblog%2Famazon%2Fstrands-lerobot-streaming-data-loop"
date: "2026-08-15"
category: "News"
title: "Record, train, and deploy from one place with Strands Agents, LeRobot, and Hugging Face Storage Buckets"
authors:
  - "Amazon / Hugging Face"
summary: "Amazon 与 Hugging Face 展示 Strands Robots、LeRobot 和 Storage Buckets 的一体化记录、流式训练与部署回路。"
provisionalKeywords:
  - "机器人数据回路"
  - "LeRobot"
  - "对象存储"
  - "流式训练"
  - "具身智能工具链"
keywords:
  - "机器人数据管线"
  - "机器人操作"
  - "智能体外层系统"
sources:
  - name: "Hugging Face 官方博客"
    url: "https://huggingface.co/blog/amazon/strands-lerobot-streaming-data-loop"
  - name: "Hugging Face 博客 feed"
    url: "https://huggingface.co/blog/feed.xml"
previewImage: "/daily/2026-08-15/assets/url--https_3a_2f_2fhuggingface.co_2fblog_2famazon_2fstrands-lerobot-streaming-data-loop/preview.png"
schemaVersion: 2
ratingTrack: "news_policy"
groupRank: 2
groupScore: 90
scoreScale: "news-policy-v2"
---

# Record, train, and deploy from one place with Strands Agents, LeRobot, and Hugging Face Storage Buckets

> Amazon 与 Hugging Face 展示 Strands Robots、LeRobot 和 Storage Buckets 的一体化记录、流式训练与部署回路。

## 事件概述

Hugging Face 官方博客发布 Amazon 团队文章，介绍 Strands Robots、LeRobot 与 Hugging Face Storage Buckets 组成的 streaming data loop：同一智能体记录机器人示教、把数据放入 bucket、从 Hub 流式读取训练，并把策略部署回硬件。

## 已确认事实与证据

官方文章说明，Strands Robots 是 AWS 的 Apache 2.0 开源 SDK，把机器人抽象、仿真和 LeRobot 栈作为 AgentTools 组合进一个 Strands agent；Robot() factory 支持 SO-100/SO-101 等多种本体。LeRobot 数据格式在 Hub 上已有 90,000+ 数据集和模型、8,000+ 发布者，因此记录无需转换即可被生态读取。Storage Buckets 是 2026 年 3 月宣布的 mutable、非版本化、Xet-backed 对象存储，位于 hf:// 命名空间并复用 hf CLI；每次同步只上传变化字节，训练可直接流式读取帧并解码相机视频，避免完整下载。文章还警告 pickle 权重风险，建议信任组织、优先 safetensors 并设置 STRANDS_TRUST_REMOTE_CODE=1。

## 影响与后续观察

该工作流把机器人数据采集、训练与部署放进同一受管存储层，可能降低重复传输和数据版本负担，尤其适合连续采集活动。但也引入 bucket 权限、数据治理、云端成本、可复现实验锁定和 checkpoint 供应链安全问题。文章给出可运行 notebook 和资源链接，但未报告端到端训练精度提升或企业生产案例；这些需要另行验证。

## 来源链接

- [Hugging Face 官方博客](https://huggingface.co/blog/amazon/strands-lerobot-streaming-data-loop)
- [Hugging Face 博客 feed](https://huggingface.co/blog/feed.xml)

