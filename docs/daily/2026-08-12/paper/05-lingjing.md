---
schemaVersion: 2
candidateId: "arxiv--2608.08045"
date: "2026-08-12"
category: "Paper"
authors:
  - "Source record"
sources:
  - name: "Original source"
    url: "https://arxiv.org/abs/2608.08045v1"
ratingTrack: "paper"
groupRank: 5
groupScore: 90
scoreScale: "paper-v2"
title: "Lingjing: A Simulation Testbed for Multi-Agent Embodied Tasks in Open-Ended Cities"
summary: "已读取 arXiv PDF 全文；以下仅陈述论文原文能够核验的主张。"
keywords: ["具身智能","机器人操作","世界模型"]
previewImage: null
---

## 研究问题与贡献

论文原文摘要摘录（来源：arXiv PDF）：

> Xiaohe Li, Yiru Wang, Junhao Fan, Mingyuan Liu, Jie Huang, Kaixin Zhang, Jiahao Li School of Artificial Intelligence the Key Laboratory of Target Shanghai Jiaotong University Cognition and Application Technology qianc@sjtu.edu.cn Aerospace Information Research Institute Urban embodied intelligence requires coordination among heterogeneous agents (e.g., UAVs, ground robots, and autonomous vehicles) in dynamic cities. Simulators therefore provide a scalable foun- dation for developing and evaluating such coordination. Existing platforms nevertheless isolate different embodiments and decouple them from task design and evaluation. We present Lingjing, a simulation platform for heterogeneous multi-agent embodied intelligence in open-ended urban environments. Lingjing reconstructs and renders evolving cities from geographic data, synchronizes multiple physics engines, and exposes shared physical and structured urban state to agents. Its Gym-like interface supports user-defined ReAct agents and single- or multi-agent natural-language missions with configurable star or broadcast communication and resource constraints. Each episode becomes an attribution-ready replay that links agent trajectories and communication to relation-graph changes, resource consumption, and engine-based evaluations for systematic diagnosis. We evaluate

该工作的问题设定、贡献边界和结论以论文全文为准；未在摘录或正文中确认的外推不作陈述。

## 方法与系统

全文方法/系统段落摘录：

> We present Lingjing, a simulation platform for heterogeneous multi-agent embodied intelligence in dynamic cities. Figure 1 illustrates its city-scale environment and agent loop across perception, reasoning, action, and communication. Lingjing unifies three capabilities. First, Lingjing provides a realistic, evolving urban substrate grounded in streamed geographic data, extending beyond fixed scene boundaries and coupling high-fidelity 3D environments with structured, queryable state. It represents residential, industrial, commercial, campus, logistics, and coastal districts together with dynamic traffic, weather, communication coverage, resource budgets, and mission events. The environment supports UAVs, ground robots, autonomous vehicles, fixed infrastructure, and optional wide-area sensing, while integrating AirSim [31], CARLA [8],

## 实验设置与数据

全文实验、数据集或评测协议摘录：

> a simulation platform for heterogeneous multi-agent embodied intelligence in open-ended urban environments. Lingjing reconstructs and renders evolving cities from geographic data, synchronizes multiple physics engines, and exposes shared physical and structured urban state to agents. Its Gym-like interface supports user-defined ReAct agents and single- or multi-agent natural-language missions with configurable star or broadcast communication and resource constraints. Each episode becomes an attribution-ready replay that links agent trajectories and communication to relation-graph changes, resource consumption, and engine-based evaluations for systematic diagnosis. We evaluate twelve vision-language models on nine urban tasks under a shared engine-in-the-loop protocol.

## 结果、限制与结论

全文结果/结论段落摘录：

> task-dependent coordination trade-offs and diminishing returns from added capacity, while heavier workloads further reduce success. Lingjing provides a unified testbed that enables reproducible end-to-end evaluation and systematic failure diagnosis in urban multi-agent embodied intelligence. Multimodal large language models (MLLMs) [1, 13, 24, 5] have accelerated the development of embodied agents, supporting tasks such as vision-language navigation (VLN), complex manipulation, and environmental inspection. Increasingly, the object of study is shifting from a single robot [20, 42] operating in a static room toward coordinated operation across an entire city [11, 39]. City-scale applications such as delivery, infrastructure inspection, and emergency response require heterogeneous mobile and fixed assets to coordinate across urban blocks. The challenge extends beyond perception and low-level control. For example, agents may need to adapt to traffic and weather disruptions under limited communication and resource budgets while accounting for how their decisions affect one another and the

限制：本文仅报告 PDF 中可核验的实验和作者结论；跨数据集、跨硬件或部署效果若未被原文证明，保留为未知。

## 来源链接

- https://arxiv.org/abs/2608.08045v1
