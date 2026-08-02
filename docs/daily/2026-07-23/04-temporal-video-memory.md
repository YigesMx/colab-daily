---
candidateId: sample-20260723-004
date: 2026-07-23
rank: 4
title: 长视频推理中的事件级检索记忆
authors:
  - Jia Wei
  - Mina Park
  - Elena Rossi
summary: 这份示例精读关注长视频问答中的时间跨度问题，讨论事件切分、结构化记忆以及按问题动态检索相关片段。
keywords:
  - 多模态
  - 长视频
  - 检索记忆
  - 视频理解
score: 92.8
sources:
  - name: Hugging Face
    url: https://huggingface.co/papers
  - name: 机器之心
    url: https://www.jiqizhixin.com/
previewImage: null
---

# 长视频推理中的事件级检索记忆

> 本文是用于演示 Markdown 正文渲染的虚构案例。

## 核心内容

把长视频的所有帧直接放入上下文，会快速耗尽计算预算，也容易让关键事件淹没在重复画面中。事件级记忆先将视频切分为有语义边界的片段，再记录人物、动作、位置和时间关系。

## 关键技术与数据

收到问题后，系统先识别涉及的实体和时间约束，再从记忆中找出候选事件。只有这些事件对应的视觉片段会进入更昂贵的多模态推理阶段。

## 结果与结论

会议、教学和固定机位监控适合这种层级结构。快速剪辑或高度抽象的视频可能缺少稳定事件边界，需要联合音频、字幕和镜头变化信号。

## 来源链接

- [Hugging Face Daily Papers](https://huggingface.co/papers)
- [机器之心](https://www.jiqizhixin.com/)
