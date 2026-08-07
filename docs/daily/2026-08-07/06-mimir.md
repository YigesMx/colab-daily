---
candidateId: "arxiv--2608.04933"
category: "Paper"
date: "2026-08-07"
rank: 6
title: "Mimir：把世界记忆与任务进度绑定到当前具身目标"
authors:
  - "Haoming Xu"
  - "Zhenlin He"
  - "Hengyi Wang"
  - "Jiafeng Xu"
  - "Hao Dong"
summary: "Mimir 将对象位置与证据组成的世界记忆、目标议程与执行状态组成的任务记忆分开维护，并在每次动作前针对当前目标动态检索和落地。"
keywords:
  - "具身记忆"
  - "视觉语言动作模型"
score: 82.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.04933v1"
previewImage: "/daily/2026-08-07/assets/arxiv--2608.04933/preview.jpg"
---

## 核心内容

长程具身任务的困难不只是保存历史帧，而是同时知道世界当前是什么状态、任务完成到哪里，以及哪条旧证据支持眼前目标。Mimir 将这两个状态拆开：世界记忆记录实体、位置、属性与观察证据；任务记忆保存有序目标、pending/completed/blocked 状态、手中物体、失败绑定和约束。当前目标只检索有限相关实体，再绑定对象、来源、目标与证据后规划。

## 关键技术与数据

任务记忆用显式议程和后置条件更新，动作成功不自动等于子目标完成。世界记忆是 episode 级树状实体关系和证据存储，观察与交互效果分别更新位置、状态和手持关系。动态 grounding 在每步先更新世界、选出最早未完成目标、召回候选，再输出与具体 embodiment 适配的动作；失败假设被记录以避免重复。系统不依赖固定 3D scene graph，而把第一视角观察、记忆快照和任务状态序列化给 VLM。

## 结果与结论

在 EB-ALFRED 和 EB-Habitat 的 13 个多模态骨干设置中，Mimir 平均成功率增益 23.0 个百分点，最大 42.5 点。Qwen2.5-VL-72B 匹配比较中，EB-Habitat 成功率达 90.0%；Qwen3-VL-32B 在 Long-horizon 子集达 86.0%。消融显示环境依赖不同：EB-Habitat 去掉世界记忆会从 71.5% 跌到 12.5%，EB-ALFRED 去掉任务记忆损失更大。系统仍无法弥补输入中从未出现的对象证据，也会被含糊目标、多实例歧义、严重遮挡和不现实环境配置限制。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.04933v1)
- [arXiv PDF](https://arxiv.org/pdf/2608.04933v1)
