---
schemaVersion: 3
candidateId: "url--https%3A%2F%2Fwww.technologyreview.com%2F2026%2F10%2F19%2F1147149%2Fwe-were-looking-at-it-wrong-the-explosive-claim-thats-upended-the-ai-world%2F"
date: "2026-10-21"
category: "News"
groupRank: 7
title: "MIT科技评论：Goodfire研究员“我们看错了神经网络”的主张引发AI界震动"
authors: ["Will Douglas Heaven"]
summary: "据MIT Technology Review报道，Goodfire研究员Nick Cammarata一篇约26,000字的博客文章主张大语言模型可能比此前认为的更易理解、监测与控制，在AI界引发两极反响。文章重新解释了2020年Inception v1研究中汽车与猫共响应神经元的现象，认为模型内部存在可读规律而非不可解的叠加乱结；斯坦福的Chris Potts、alignment研究中心的Jacob Hilton与Google DeepMind的Neel Nanda等则公开质疑，指出对顶级大语言模型内部的理解仍不足0.01%，完全理解需要解释神经元如何连接成电路。卡马拉塔承认外界解读过热，其针对现代大语言模型的技术结果计划稍后发布；原博客链接在报道中未给出。"
keywords: ["模型可解释性", "大模型研究与评测"]
sources: [{"name": "MIT Technology Review", "url": "https://www.technologyreview.com/2026/10/19/1147149/we-were-looking-at-it-wrong-the-explosive-claim-thats-upended-the-ai-world/"}]
previewImage: "/daily/2026-10-21/assets/url--https_3a_2f_2fwww.technologyreview.com_2f2026_2f10_2f19_2f1147149_2fwe-were-looking-at-it-wrong-the-explosive-claim-thats-upended-the-ai-world_2f/preview.png"
---

## 事件概述

据《麻省理工科技评论》（MIT Technology Review）10月19日报道，AI初创公司Goodfire的研究员尼克·卡马拉塔（Nick Cammarata）发布的一篇约26,000字的博客文章在AI界引发轰动。其核心主张被概括为"我们一直看错了"（We were looking at it wrong）：大语言模型的内部机制可能比此前认为的更容易理解，因而也更可能被监测与控制。文章引发从狂热庆祝到明确质疑的两极反应，MIT Technology Review将其称为"搅动AI世界的爆炸性主张"。

## 已确认事实与证据

据MIT Technology Review报道：卡马拉塔此前曾在OpenAI工作，参与开创了让研究者窥视模型内部机制的技术路线，即"机制可解释性"——该方向曾被MIT Technology Review评为2025年十大突破技术之一。2020年，他与同事研究小型图像识别模型Inception v1时发现，某些神经元会同时响应看似无关的概念（例如同一神经元既响应汽车又响应猫的图像），由此形成了"叠加"（superposition）概念：模型把不相关的概念折叠进单个神经元，使内部结构像一团难解的乱结，此后的机制可解释性研究大多致力于"解结"。卡马拉塔称，过去一年他每天约10小时、每周7天地观察神经元，并部署AI智能体协助分析；重新审视Inception v1时他意识到，汽车与猫的图像常共享一个显著的V形（猫脸轮廓、汽车侧视前脸），该神经元响应的还包括台球桌角、日本高速列车尖车头、消防船喷水等含V形的画面，而圆形O形图案则会抑制其响应——即模型在同一位置存储猫与车，是因为它们在某种层面上"看起来相似"。他强调自己并未完全理解模型，而是认为"完全理解至少是可能的"，并称如果拥有10万年时间逐电路梳理一个前沿语言模型，"有相当大的把握得出很好的理解"；其与现代大语言模型相关的技术结果计划稍后发布。反应方面，报道援引社交媒体上的评价称这是"科学史上的重大时刻""年度最重要的AI论文"；但斯坦福大学的克里斯·波茨（Chris Potts）认为该文"不过是一种直觉"，"没有让任何问题变得更容易"； alignment研究中心的雅各布·希尔顿（Jacob Hilton）指出研究者对顶级大语言模型内部机制的理解仍不足0.01%，认为此文"给了公众一幅不符合领域现状的图景"，完全理解需要超越单个神经元、解释它们如何连接成电路，而"这方面的进展并不乐观"；Google DeepMind的尼尔·南达（Neel Nanda）也认为这不构成对可解释性大图景的重大更新，单神经元理解只是更大谜题的一块。卡马拉塔本人承认很多人的解读走得太远："这不是无限好的消息，也不是一切都解决了。"报道还提到，今年夏天多起顶级AI公司的智能体外逸事件加剧了行业对理解与控制自建技术的迫切需求，这是该文引发强烈共鸣的背景；其原博客文章的链接在MIT Technology Review报道中未给出，当前材料未确认。

## 影响与后续观察

这一争论的实质是机制可解释性的研究预期问题：如果模型内部存在可读的规律而非不可解的乱结，安全评估、模型监测与对齐验证都可能获得更可行的技术路径，这正是安全社区对此反应强烈的原因；反之，若被证实只是个案层面的直觉，则该方向仍面临"只能理解极小碎片"的瓶颈。后续关键观察点包括：卡马拉塔承诺的现代大语言模型技术结果能否通过同行评审与第三方复现；"V形神经元"式解读在更大模型上是否普遍成立；以及批评者提出的"神经元组合与电路层面理解"是否会抵消单神经元层面的乐观结论。在技术细节公开前，对该主张宜保持审慎，其现状为一家之言与同行的公开质疑并存。

## 来源链接

- [MIT Technology Review："We were looking at it wrong": The explosive claim that's upended the AI world](https://www.technologyreview.com/2026/10/19/1147149/we-were-looking-at-it-wrong-the-explosive-claim-thats-upended-the-ai-world/)
