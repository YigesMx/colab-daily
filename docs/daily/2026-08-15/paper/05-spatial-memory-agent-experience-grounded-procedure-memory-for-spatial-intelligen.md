---
candidateId: "arxiv--2608.12743"
date: "2026-08-15"
category: "Paper"
title: "Spatial Memory Agent: Experience-Grounded Procedure Memory for Spatial Intelligence"
authors:
  - "Haokai Zhang 等"
summary: "Spatial Memory Agent 把经 verifier 验证的空间经验沉淀为可迁移教训，并用访问证据校准的 Transfer Reliability Score 检索，从而不更新冻结 VLM 参数。"
provisionalKeywords:
  - "空间智能"
  - "程序记忆"
  - "冻结模型"
  - "可靠检索"
  - "经验迁移"
keywords:
  - "空间记忆"
  - "智能体外层系统"
  - "多模态推理"
sources:
  - name: "Hugging Face"
    url: "https://huggingface.co/papers/2608.12743"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.12743"
  - name: "PDF"
    url: "https://arxiv.org/pdf/2608.12743"
  - name: "项目主页"
    url: "https://aim-uofa.github.io/SMA/"
previewImage: "/daily/2026-08-15/assets/arxiv--2608.12743/preview.png"
schemaVersion: 2
ratingTrack: "paper"
groupRank: 5
groupScore: 88
scoreScale: "paper-v2"
---

# Spatial Memory Agent: Experience-Grounded Procedure Memory for Spatial Intelligence

> Spatial Memory Agent 把经 verifier 验证的空间经验沉淀为可迁移教训，并用访问证据校准的 Transfer Reliability Score 检索，从而不更新冻结 VLM 参数。

## 研究问题与贡献

论文提出一个介于空间后训练和外部空间工具之间的路线：冻结 VLM 能否通过可复用经验自我提升，并在推理时不依赖专家空间工具。SMA 将已验证 rollout 反思为任务摘要和可迁移教训，构建程序记忆库，再用可靠性感知检索指导新问题。

## 方法与系统

经验采集阶段，SMA 检索候选记忆、调用冻结 VLM、由 verifier 给奖励，并把成功/失败经验写成严格 JSON 记忆卡，禁止复述答案。默认 one-pass 写入，后续只更新检索可靠性。每张卡维护访问次数、累计奖励和 Transfer Reliability Score；查询先用任务语义过滤，再用相似度与 TRS 组合排序取 top-k。部署阶段记忆库只读，不写回。

## 实验设置与数据

论文在 RoboSpatial、ERQA、Omni3D、SAT 和 EmbSpatial 五个空间基准上评估四个冻结 VLM，包括 Qwen3.5-9B、Qwen3.5-122B-A10B、Qwen3.6-35B-A3B 和 Qwen3.6-27B。对比 No memory、RAG、MemP、MemRL-R、MemRL-GT，并做组件、超参、模型迁移、基准迁移和 SpatialEvo 比较。

## 结果、限制与结论

SMA 在每个模型块都取得最佳宏平均：68.8、66.7、69.8、63.5；相对最强非 SMA 基线提升 2.6-2.9 点。Qwen3.6-27B 上 RoboSpatial 从 54.1 升至 68.5，Omni3D 从 41.6 至 47.6。去除语义过滤、可迁移教训或 reward-only 反思分别降 5.8、3.5、5.5 点；模型和基准迁移探针均为正，但幅度依赖源目标相似性。结论是外部程序记忆是有效的免参数更新路线，不过评测主要限于所选基准和模型，TRS 趋势也可能受题目难度混杂影响。

## 来源链接

- [Hugging Face](https://huggingface.co/papers/2608.12743)
- [arXiv](https://arxiv.org/abs/2608.12743)
- [PDF](https://arxiv.org/pdf/2608.12743)
- [项目主页](https://aim-uofa.github.io/SMA/)

