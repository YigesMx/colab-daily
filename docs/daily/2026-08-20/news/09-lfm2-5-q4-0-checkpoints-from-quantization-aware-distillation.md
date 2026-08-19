---
candidateId: "url--https%3A%2F%2Fhuggingface.co%2Fblog%2FLiquidAI%2Fqad"
businessCandidateId: "url--https%3A%2F%2Fhuggingface.co%2Fblog%2FLiquidAI%2Fqad"
date: "2026-08-20"
category: "News"
title: 'LFM2.5 Q4\_0 Checkpoints from Quantization-Aware Distillation'
authors: ["huggingface.co"]
summary: "Liquid AI 发布 LFM2.5 四个模型的 QAD Q4_0 GGUF 检查点，称平均可恢复 97% 的 BF16 量化平均精度损失。"
provisionalKeywords: ["模型部署", "产业落地"]
keywords: ["模型部署", "产业落地"]
sources: [{"name": "huggingface.co", "url": "https://huggingface.co/blog/LiquidAI/qad"}]
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 9
groupScore: 75
scoreScale: "news-v3"
emphasis: false
---

<div data-raw-title="LFM2.5 Q4\_0 Checkpoints from Quantization-Aware Distillation"></div>
# Liquid AI 发布 LFM2.5 QAD Q4_0 检查点

## 事件概述

8月19日，Liquid AI 通过 Hugging Face 发布 LFM2.5-230M、350M、1.2B-Instruct 与 2.6B 的 QAD Q4_0 GGUF 检查点。

## 已确认事实与证据

官方博客说明，QAD 使用高精度教师模型向量化学生模型蒸馏，保留 Q4_0 的内存占用与吞吐。四个检查点分别保留 BF16 基线性能的 97.1%、96.5%、97.4% 与 96.6%，评测覆盖 GPQA Diamond、MMLU-Pro、IFEval、IFBench、Multi-IF 与 BFCLv4。博客还报告了 MacBook、NucBox、Galaxy S26 Ultra 与 Raspberry Pi 5 的边缘吞吐。

## 影响与后续观察

该工作让小型模型在 4 bit 内存与速度约束下更接近全精度能力，有利于端侧代理部署。后续应关注长上下文稳定性、工具调用可靠性和不同推理runtime兼容性。

## 来源链接

- [Hugging Face / Liquid AI 官方博客](https://huggingface.co/blog/LiquidAI/qad)
