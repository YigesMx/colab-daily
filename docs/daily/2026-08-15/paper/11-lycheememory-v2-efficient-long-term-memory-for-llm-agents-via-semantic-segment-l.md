---
candidateId: "arxiv--2608.12990"
date: "2026-08-15"
category: "Paper"
title: "LycheeMemory V2: Efficient Long-Term Memory for LLM Agents via Semantic Segment-Level Consolidation"
authors:
  - "Dongfang Li 等"
summary: "LycheeMemory V2 用语义段落而非每轮对话触发记忆构建，生成自包含类型化记录并做多路线规划检索，在两个长对话基准上同时提高准确率并降低构建 token。"
provisionalKeywords:
  - "智能体记忆"
  - "语义分段"
  - "长期记忆"
  - "证据检索"
  - "成本效率"
keywords:
  - "模块化记忆"
  - "结构化知识表示"
  - "智能体外层系统"
sources:
  - name: "Hugging Face"
    url: "https://huggingface.co/papers/2608.12990"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.12990"
  - name: "PDF"
    url: "https://arxiv.org/pdf/2608.12990"
  - name: "TeX source"
    url: "https://export.arxiv.org/e-print/2608.12990"
previewImage: "/daily/2026-08-15/assets/arxiv--2608.12990/preview.png"
schemaVersion: 2
ratingTrack: "paper"
groupRank: 11
groupScore: 82
scoreScale: "paper-v2"
---

# LycheeMemory V2: Efficient Long-Term Memory for LLM Agents via Semantic Segment-Level Consolidation

> LycheeMemory V2 用语义段落而非每轮对话触发记忆构建，生成自包含类型化记录并做多路线规划检索，在两个长对话基准上同时提高准确率并降低构建 token。

## 研究问题与贡献

长时 LLM 智能体需要跨会话保留事实、偏好、时间和事件证据。逐轮 eager consolidation 成本随对话增长，粗摘要又可能丢失细粒度证据。论文提出以语义 segment 为单位的记忆构建，兼顾构建频率和事件边界。

## 方法与系统

在线语义分割计算新交互与当前段 centroid/近期轨迹的语义 surprise，并在语义饱和或主题转换时触发一次编码。每个完成段被转换为带实体、主题、时间范围和 provenance 的类型化、上下文独立记录，并进入 append-only evidence store；实体、主题、时间、event-frame 和 entity-topic 索引支持查询规划。检索时 planner 把问题拆成类型化 recall routes，再融合、重排和多样性选择成紧凑证据上下文。

## 实验设置与数据

论文评估 LoCoMo 的 10 段约 600 轮、1,540 个保留问题，以及 LongMemEval-S 的 500 段平均 115K token 对话。基线包括 Full Context、Naive RAG、Mem0、A-Mem、MemoryOS、MemOS、Nemori、LightMem、TiMem、MemU；主干为 GPT-4.1-Mini 与 GPT-4o-Mini，embedding 用 text-embedding-3-small，重排用 bge-reranker-v2-m3。

## 结果、限制与结论

GPT-4.1-Mini 下 LycheeMemory V2 在 LoCoMo 达 89.22%、LongMemEval-S 达 92.20%，分别超过 Full Context 84.80 和 TiMem 75.80。构建 token 在 LoCoMo 为 204.1K，较 A-Mem 低 86.0%、较 Mem0 低 86.6%；LongMemEval-S 为 304.7K，较 A-Mem 低 75.9%。消融显示 eager 构建使准确率降至 81.88 且 token 增至 849.9K；固定窗口为 82.40；去除融合/重排/多样性选择降至 66.62。结论是记忆粒度本身决定准确率-成本 trade-off，但实验仍以文本对话 QA 为主，多模态记忆和治理未覆盖。

## 来源链接

- [Hugging Face](https://huggingface.co/papers/2608.12990)
- [arXiv](https://arxiv.org/abs/2608.12990)
- [PDF](https://arxiv.org/pdf/2608.12990)
- [TeX source](https://export.arxiv.org/e-print/2608.12990)

