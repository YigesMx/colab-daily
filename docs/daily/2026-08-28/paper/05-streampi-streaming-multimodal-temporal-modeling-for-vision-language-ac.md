---
candidateId: "arxiv--2608.26067"
businessCandidateId: "arxiv--2608.26067"
date: "2026-08-28"
category: Paper
title: "StreamPI: Streaming Multimodal Temporal Modeling for Vision-Language-Action Models"
authors: ["arxiv.org", "huggingface.co"]
summary: "StreamPI以指令锚定的原子时序单元、块内双向注意和跨块因果注意扩展π0.5，不新增参数即获得跨帧记忆与更精确空间感知，并用随机间隔训练适配异步真实部署。"
provisionalKeywords: ["视觉语言动作模型", "机器人推理与学习", "机器人操作"]
keywords: ["视觉语言动作模型", "机器人推理与学习", "机器人操作"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.26067v1"}
  - {"name": "huggingface.co", "url": "https://huggingface.co/papers/2608.26067"}
previewImage: "/daily/2026-08-28/assets/arxiv--2608.26067/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 5
groupScore: 89
scoreScale: "paper-v2"
emphasis: false
---

# StreamPI: Streaming Multimodal Temporal Modeling for Vision-Language-Action Models

## 研究问题与贡献

**StreamPI: Streaming Multimodal Temporal Modeling for Vision-Language-Action Models** 的一句话结论是：把每个视觉观测与语言指令绑定为一个原子时序单元，并通过KV缓存做因果流式推理，可以在零新增参数下为单帧π0.5补上时序记忆与几何线索。论文指出现有多帧VLA常因全序列注意力带来线性增长的推理成本、视觉token稀释指令、固定间隔训练与异步部署不匹配，以及新视频编码器破坏原表征。StreamPI的贡献是指令锚定时序建模、随机间隔训练和完全继承π0.5预训练权重。

## 方法与系统

每个时间步的输入是三视角视觉观测与同一语言指令组成的原子单元；单元内图像与文本token双向注意，单元间仅允许当前与历史单元因果注意。位置嵌入随扩展token序列延伸，不引入新参数。训练时从流式buffer按基础间隔加均匀扰动采样历史帧，间隔限制在3到7；同时随机遮蔽最早若干帧，模拟在线增量可见性。推理时新帧编码后与缓存KV交互，历史表征不需重复编码，滚动buffer保留最近T个观测-指令对。默认训练T为3或5，仿真推理间隔5，真实部署间隔从3到7随机。

## 实验设置与数据

LIBERO按Spatial/Object/Goal/Long四个套件，每套件10任务、每任务50次；同时评测CALVIN最多5个连续任务。真实机器人任务分为记忆依赖与精确感知依赖两类：滚动目标抓取和杯下藏物取物，以及窄瓶插笔与杯套插杯。训练基于π0.5并保持相同优化器与学习率，LIBERO用8张H100、batch 256训练30k步，真实任务batch 128训练50k步。

## 结果、限制与结论

论文报告T=5时LIBERO平均98.3%，高于π0.5的96.9%；LIBERO-Long为95.0%，提升2.6个百分点，Spatial无提升。真实机器人相对π0.5在滚动目标抓取提升36.6个百分点、杯下藏物提升33.3个百分点、窄瓶插笔提升26.7个百分点、杯套插杯提升32.0个百分点。CALVIN平均序列长度4.547，高于π0.5的4.313和MemoryVLA的4.090；第5个任务成功率85.0%。消融中，T=5时单元内因果注意使平均从98.3%降至95.5%；固定间隔δ=1为97.0%，随机间隔为98.3%。限制：训练仍需载入全部帧，极长时序训练成本高；随机间隔不能覆盖极端异步；论文未报告真实任务绝对基线数值或跨硬件延迟。未知项：超过100帧的长时序、缓存裁剪和OOD真实场景仍未验证。

## 来源链接

- [arXiv论文](https://arxiv.org/abs/2608.26067v1)
- [项目页面](https://happinesslz.github.io/projects/StreamPI)
