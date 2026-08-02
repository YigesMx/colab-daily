---
candidateId: sample-20260723-001
date: 2026-07-23
rank: 1
title: "递归研究智能体：从回答生成走向证据审计"
authors:
  - Colab Daily Sample Desk
summary: 一份示例精读，讨论研究智能体如何把初稿拆成可验证主张，围绕证据缺口发起后续检索，并保留完整审计轨迹。
keywords:
  - 智能体
  - 深度研究
  - 可验证性
  - 长上下文
score: 98.7
sources:
  - name: arXiv
    url: https://arxiv.org/
  - name: Hugging Face
    url: https://huggingface.co/papers
previewImage: "/daily/2026-07-23/assets/research-audit.svg"
---

# 递归研究智能体：从回答生成走向证据审计

> 本文是用于验证 Colab Daily 发布结构与界面能力的示例内容，不代表真实论文或正式编辑结论。

## 核心内容

多数研究型智能体擅长一次性汇总，却难以判断回答中哪些主张仍然缺乏可靠证据。这个示例方案把工作流拆成初稿、主张抽取、证据审计和定向补充四个环节，让后续搜索由明确缺口驱动。

## 关键技术与数据

系统首先生成带引用的初稿，然后将关键结论转换为独立的检查项。审计器逐项判断来源是否直接支持结论、不同来源是否相互矛盾，以及时间敏感信息是否已经过期。

当检查失败时，系统只针对缺口构造下一轮查询，并将新增证据附加到已有轨迹，而不是重新开始整个研究过程。这种设计更适合长链路、可恢复的编辑工作流。

## 结果与结论

- 审计轨迹让人工编辑可以快速定位证据薄弱处。
- 定向检索降低重复搜索和无效上下文消耗。
- 真正落地仍需要可靠的引用解析与来源质量判断。

## 来源链接

- [arXiv](https://arxiv.org/)
- [Hugging Face Daily Papers](https://huggingface.co/papers)
