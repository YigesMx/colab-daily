---
candidateId: "arxiv--2608.02326"
date: "2026-08-05"
rank: 11
title: "ChainVLA: Chaining Vision-Language-Action Queries through a Unified Execution State for Long-Horizon Manipulation"
authors:
  - "Yuzhi Huang"
  - "Weijue Bu"
  - "Ziyi Xiong"
  - "Jie Wu"
  - "Fanding Huang"
  - "Jingyan Jiang"
  - "Zhi Wang"
summary: "ChainVLA 用包含任务进度和未执行动作尾部的可修订执行状态连接连续 VLA 查询，以改善长程操作中的记忆与动作边界衔接。"
keywords:
  - "长程操作"
  - "视觉语言动作模型"
  - "动作分块"
score: 77
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.02326v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.02326v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.02326/preview.png"
---

## 核心内容

论文将重规划断点中丢失的信息分成两类：过去观察中已经形成但当前画面不可见的任务进度，以及前一预测尚未执行的运动续段。ChainVLA 认为两者不能只靠后处理 temporal ensemble 补齐，因此让它们在下一次解码前共同参与状态构建。

## 关键技术与数据

Progress Context 由 recurrent Working State 和 Sparse Event Memory 组成：工作状态每个 query 更新，事件记忆保存锚点与阶段相关证据并按当前状态检索。Motion Tail 是前一 action horizon 的未执行 suffix，既作为 working state 的 token，又通过对齐均值初始化新的条件流 decoder；新 query 仍可依当前观测重写整个 horizon。训练按 episode query 顺序展开、传递 detached tail，并用 stage 监督与 overlap consistency 正则。模型为 1.2B，主诊断是 RMBench，另以四套 LIBERO 检验广度。

## 结果与结论

作者报告 RMBench 平均 62.8%，五项中 Progress Context 和 Motion Tail 任一完整移除分别降至 3.0% 与 11.2%，两者都移除为 1.6%；LIBERO 平均为 98.8%。与 FIFO observation history 加 temporal ensemble 的替代方案为 35.6%。作者还给出边界诊断，认为 Motion Tail 可降低不连续，但明确将其视为关联而非组件级因果证明。结果主要建立在固定 query 率和指定记忆基准上，尚不能证明复杂开放任务中全部状态设计都会同样获益。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.02326v1
- arXiv 摘要页：https://arxiv.org/abs/2608.02326v1
