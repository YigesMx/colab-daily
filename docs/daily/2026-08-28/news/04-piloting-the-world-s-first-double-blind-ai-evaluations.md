---
candidateId: "url--https%3A%2F%2Fdeepmind.google%2Fblog%2Fpiloting-the-worlds-first-double-blind-ai-evaluations%2F"
businessCandidateId: "url--https%3A%2F%2Fdeepmind.google%2Fblog%2Fpiloting-the-worlds-first-double-blind-ai-evaluations%2F"
date: "2026-08-28"
category: News
title: "Piloting the world's first double-blind AI evaluations"
authors: ["deepmind.google"]
summary: "Google DeepMind宣布与新加坡AI安全研究所、OpenMined、AVERI和MLCommons试点全球首个专有前沿模型双盲评测，用机密计算防止模型和题库互相泄露。"
provisionalKeywords: ["模型评测", "AI安全"]
keywords: ["模型评测", "AI安全"]
sources:
  - {"name": "deepmind.google", "url": "https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations/"}
previewImage: "/daily/2026-08-28/assets/url--https_3a_2f_2fdeepmind.google_2fblog_2fpiloting-the-worlds-first-double-blind-ai-evaluations_2f/preview.webp"
schemaVersion: 3
ratingTrack: "news"
groupRank: 4
groupScore: 90
scoreScale: "news-v3"
emphasis: false
---

# Google DeepMind 试点全球首个双盲AI评测

## 事件概述

2026年8月27日，Google DeepMind宣布正在试点其对专有前沿模型的双盲评测。官方称，此次与新加坡AI安全研究所、OpenMined、AVERI和MLCommons合作，在隐私保护环境中使用机密基准测试Gemini Flash Lite，以降低基准污染并提升外部评测可信度。

## 已确认事实与证据

DeepMind称，高级AI模型如果在训练或部署前已经见过评测题，可能得到被污染的高分。传统外部评测通常需要在两个风险之间取舍：评测方交出测试题，模型提供方可能提前看到；或模型方交出权重，知识产权可能暴露。双盲评测试图用加密环境同时保护双方资产。

技术实现上，项目使用Google Cloud Confidential Computing中的Confidential Space。DeepMind称，该环境可密码学验证外部评测数据和专有模型分别保持私密：评测方看不到Gemini模型权重，Google看不到评测方的测试提示。官方称这是首个针对专有前沿级模型的双盲评测，对网络安全或政府机构使用的敏感评测尤其重要。

官方文章说明，Google仍会在模型开发和部署过程中进行内部评估，并与专业研究实验室、公民社会组织和国家AI安全/security研究所合作寻找盲点。此次试点希望为更独立的模型监督建立方法。

## 影响与后续观察

如果双盲评测可复用，外部机构可以在不泄露题库、也不取得模型权重的情况下测试前沿模型，增强基准结果的独立性和数据主权。这可能影响安全评测、政府采购和高风险能力评估的流程设计。

后续需要阅读技术报告中的密码学证明、日志策略和失败模式，确认评测题目是否确实无法进入后续训练，以及第三方能否验证执行环境。官方所称的“全球首个”和实际防护强度仍需独立审查。

## 来源链接

- [Google DeepMind: Piloting the world's first double-blind AI evaluations](https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations/)
