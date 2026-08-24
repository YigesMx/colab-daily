---
candidateId: "url--https%3A%2F%2Fblogs.nvidia.com%2Fblog%2Fnvlink-fusion-xpu-ai-factory%2F"
businessCandidateId: "url--https%3A%2F%2Fblogs.nvidia.com%2Fblog%2Fnvlink-fusion-xpu-ai-factory%2F"
date: "2026-08-25"
category: "News"
title: "NVLink Fusion把定制XPU接入NVIDIA AI工厂架构"
authors: ["blogs.nvidia.com"]
summary: "NVIDIA称NVLink Fusion用第六代NVLink连接定制XPU与Vera CPU/NVL72生态，72-XPU域内XPU到XPU延迟比商用以太网方案低3倍、包率高10倍，并支持未来1152加速器域。"
provisionalKeywords: ["AI基础设施", "芯片与算力", "推理优化"]
keywords: ["AI基础设施", "芯片与算力", "推理优化"]
sources: [{"name": "blogs.nvidia.com", "url": "https://blogs.nvidia.com/blog/nvlink-fusion-xpu-ai-factory/"}]
previewImage: "/daily/2026-08-25/assets/url--https_3a_2f_2fblogs.nvidia.com_2fblog_2fnvlink-fusion-xpu-ai-factory_2f/preview.jpg"
schemaVersion: 3
ratingTrack: "news"
groupRank: 4
groupScore: 89
scoreScale: "news-v3"
emphasis: false
---
# NVLink Fusion把定制XPU接入NVIDIA AI工厂架构

## 事件概述

NVIDIA官方发布NVLink Fusion的AI工厂定位：把超大规模厂商和AI原生公司的定制XPU接入NVIDIA NVLink scale-up域、MGX机架、散热电源和管理生态，形成半定制AI工厂。官方强调AI工厂的经济性由token/s、token/watt、每token成本、利用率和uptime决定，而不是单个加速器峰值。

## 已确认事实与证据

NVIDIA称第六代NVLink在72-XPU域内提供高带宽低时延互联，XPU到XPU端到端延迟相比商用以太网方案低3倍，包率高10倍；NVLink-C2C连接XPU与Vera CPU等CPU，能效称最高为PCIe的6倍。未来路线包括最多1152个加速器的域和共封装光互联。

NVLink Fusion还提供MGX机架架构、供应链、液冷参考设计、NCCL、Dynamo、NIXL和Mission Control等软件。 NVIDIA引用Intel、MediaTek、GUC、QCT/Quanta和Amazon Annapurna Labs代表的说法说明生态采用意向。

## 影响与后续观察

该方案的价值在于让自研XPU厂商复用成熟机架、网络、散热和管理栈，缩短定制芯片进入数据中心的路径，并让GPU与XPU系统共享设施建设。对智能体和推理工厂而言，scale-up互联利用率会直接影响长上下文和MoE模型成本。

后续应关注真实半定制系统公开性能、XPU兼容限制、软件栈开放程度、故障域与供应链锁定，以及厂商是否实际共享机架设计而非只停留在合作声明。

## 来源链接

- [NVIDIA官方博客](https://blogs.nvidia.com/blog/nvlink-fusion-xpu-ai-factory/)
- [NVIDIA RSS](https://blogs.nvidia.com/feed/)
