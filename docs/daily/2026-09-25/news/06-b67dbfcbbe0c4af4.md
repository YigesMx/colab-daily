---
schemaVersion: 3
candidateId: "url--https%3A%2F%2Fdeepmind.google%2Fblog%2Fadvancing-private-ai-compute-with-secure-server-side-memory%2F"
date: "2026-09-25"
category: "News"
groupRank: 6
title: "Advancing Private AI Compute with secure, server-side memory"
authors: ["Google Private AI Compute Team"]
summary: "Google DeepMind 公布 Private AI Compute 新架构：云端加密持久记忆配合设备端持有密钥与安全飞地临时解密，实现跨设备 AI 记忆且数据对 Google 亦不可访问，同步发布更新技术白皮书、服务端软件防篡改公开记录与独立审计结果。"
keywords: ["隐私安全计算", "大语言模型"]
sources: [{"name": "Google DeepMind 官方博客", "url": "https://deepmind.google/blog/advancing-private-ai-compute-with-secure-server-side-memory/"}, {"name": "Private AI Compute 技术白皮书（PDF）", "url": "https://services.google.com/fh/files/misc/private_ai_compute_technical_brief.pdf"}]
previewImage: "/daily/2026-09-25/assets/url--https_3a_2f_2fdeepmind.google_2fblog_2fadvancing-private-ai-compute-with-secure-server-side-memory_2f/preview.png"
---

## 事件概述

2026 年 9 月 23 日，Google DeepMind 在官方博客发布 Private AI Compute 架构的技术更新：为其 Private AI Compute 平台引入私有、服务端持久记忆层。该设计宣称把"端侧隐私标准"带到云端规模的记忆能力——用户数据封存在云端专用加密存储中，而解密密钥只保存在用户个人设备上，即使是 Google 也无法访问。官方同时发布了更新的技术白皮书（PDF）、服务端软件的防篡改公开记录，以及一家头部网络安全公司独立审计的结果。

## 已确认事实与证据

以下事实均可在 Google DeepMind 官方博客原文（Google Private AI Compute Team，2026 年 9 月 23 日）及官方技术白皮书 PDF 中查证：

要解决的问题。此前的 Private AI Compute（以及业界同类方案）严格"无状态"——任务一结束即清除全部上下文；让 AI 保存一份个人事实与偏好清单的变通做法，不足以支撑人们对个人 AI 期望的连续体验。前沿 AI 模型需要的算力又远超单设备能力，因此必须解决"使用云端算力的同时让个人数据如同从未离开设备一样受保护"的矛盾。

架构机制（官方描述）。新的持久记忆层如云端"安全数字保险库"：协助用户所需的信息封存于专用加密存储；解锁所需的密钥仅由用户个人设备持有。当 AI 模型需要访问信息时，经认证的端到端加密通道把用户设备连接到云端受保护的隔离环境（secure enclave，安全飞地）；该隔离环境在隔离内存中临时解密数据以处理请求、保存新上下文，并立即重新加密。整体由硬件强制隔离的安全飞地、加密通道、以设备派生加密钥保护的每用户数据库三者组合构成。

透明度与可验证性。官方同步发布：更新的 Private AI Compute 技术白皮书（含系统架构、安全证明与验证协议，PDF 已公开可下载）；服务端软件的防篡改公开记录——运行 Private AI Compute 的设备可在发送任何个人数据前验证 Google 软件真实且未被篡改；以及独立网络安全审计的结果更新。官方邀请更广泛的隐私社区验证其保护措施。

研究归属。该研究由 Google DeepMind、Platforms & Devices、Core 与 Cloud 团队共同完成；Four Flynn、Jay Yagnik 与 David Kleidermacher 提供了管理层支持。

## 影响与后续观察

对个人 AI 的影响。跨设备连续性是个人助手的分水岭能力——官方设想的场景包括：在笔记本电脑上调出此前通过智能眼镜查看的组装说明、在移动端与网页端之间延续复杂对话。若"密钥在端、密文在云"的记忆架构被证明可用，云端大模型与端侧隐私不再互斥，可能成为行业隐私架构的参照设计。

需要区分的口径。以上为 Google 方面的技术公告，属于"将要/设计将支持"的表述（"will be able to function like"）；官方博客未给出该记忆层的正式上线时间、首批支持的产品与地区——原文未报告。独立审计的完整结论细节也在白皮书与审计材料中，博客正文仅概述。

后续观察点。其一，持久记忆层在 Google 具体产品（助手类、Gemini 相关产品线）中的落地时间表——当前材料未确认。其二，隐私与安全社区对白皮书、安全证明与防篡改记录的公开复核意见——原文未报告。其三，该架构对延迟、成本与模型能力（如记忆容量上限、跨设备同步一致性）的实际影响——原文未报告。

## 来源链接

- Google DeepMind 官方博客：Advancing Private AI Compute with secure, server-side memory：https://deepmind.google/blog/advancing-private-ai-compute-with-secure-server-side-memory/
- 官方技术白皮书 PDF：https://services.google.com/fh/files/misc/private_ai_compute_technical_brief.pdf
