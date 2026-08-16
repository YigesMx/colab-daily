---
candidateId: "url--https%3A%2F%2Fwww.anthropic.com%2Fnews%2Fclaude-text-watermark"
date: "2026-08-16"
category: News
title: "How Claude's text watermarking works"
authors:
  - "www.anthropic.com"
summary: "Anthropic 说明未来 Claude 文本水印将通过低风险词选择形成不可读模式，不额外增加 token，也不携带用户身份；该措施用于满足欧盟 AI Act 的生成内容标记要求。"
provisionalKeywords:
  - "安全与合规"
  - "模型机制"
  - "企业AI"
keywords:
  - "安全与合规"
  - "模型机制"
  - "企业AI"
sources:
  - name: "Anthropic 官方公告"
    url: "https://www.anthropic.com/news/claude-text-watermark"
previewImage: "/daily/2026-08-16/assets/url--https_3a_2f_2fwww.anthropic.com_2fnews_2fclaude-text-watermark/preview.png"
schemaVersion: 3
ratingTrack: "news"
groupRank: 1
groupScore: 88
scoreScale: "news-v3"
---
# Anthropic 解释 Claude 文本水印的实现方式

## 事件概述

Anthropic 宣布，未来 Claude 模型生成的文本将包含水印，用于估计 Claude 是否参与写作，并称此举是为了遵守欧盟 AI Act 对 AI 生成内容的标记要求。

## 已确认事实与证据

Anthropic 称，该方法利用模型采样中“对语义影响很小”的随机词选择留下统计模式：读者不可分辨，但持有密钥者可检测；文本中没有隐藏字符，不需要额外 token，速度与价格影响可忽略，也不能追溯到用户、组织或具体会话。官方还说明，文本水印不专属 Claude；检测 API 细节仍在确定中，支持文件会附 C2PA 内容凭证。编辑可能削弱水印，完全重写可移除；水印只能说明 Claude 可能参与，不能区分“写作”与“重度编辑”。

## 影响与后续观察

该机制将合规标记前移到生成过程，减少对可见标签的依赖，但检测 API 权限、误报/漏报率、重写鲁棒性和跨语言表现仍需独立验证。对企业用户而言，需要关注检测范围、审计流程以及与内部内容治理系统的对接。

## 来源链接

- [Anthropic 官方公告](https://www.anthropic.com/news/claude-text-watermark)
