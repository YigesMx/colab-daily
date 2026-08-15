---
candidateId: "arxiv--2608.12313"
date: "2026-08-15"
category: "Paper"
title: "AVA-Encoder: Towards Agent-Native Video Representation Learning"
authors:
  - "Chuyue Li 等"
summary: "AVA-Encoder 把影片转换为带多模态资产层的文本知识图，并通过重建误差驱动的文本梯度双循环优化编码策略和每个视频的表示。"
provisionalKeywords:
  - "视频知识图"
  - "智能体原生表示"
  - "视频重建"
  - "文本梯度"
  - "可控编辑"
keywords:
  - "结构化知识表示"
  - "多模态推理"
  - "智能体外层系统"
sources:
  - name: "Hugging Face"
    url: "https://huggingface.co/papers/2608.12313"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.12313"
  - name: "PDF"
    url: "https://arxiv.org/pdf/2608.12313"
  - name: "TeX source"
    url: "https://export.arxiv.org/e-print/2608.12313"
previewImage: "/daily/2026-08-15/assets/arxiv--2608.12313/preview.png"
schemaVersion: 2
ratingTrack: "paper"
groupRank: 6
groupScore: 87
scoreScale: "paper-v2"
---

# AVA-Encoder: Towards Agent-Native Video Representation Learning

> AVA-Encoder 把影片转换为带多模态资产层的文本知识图，并通过重建误差驱动的文本梯度双循环优化编码策略和每个视频的表示。

## 研究问题与贡献

创意智能体难以直接从高质量影片中学习，因为缺少既忠实于影片内容又可被智能体查询、推理和编辑的结构化视频表示。AVA-Encoder 提出 agentic auto-encoding：将视频编码为文本中心知识图，再重建回视频，用重建差异反向优化表示。

## 方法与系统

编码器在 film、shot、keyframe 三层执行自适应分割和粗到细理解，维护角色、场景、物体、风格、镜头和音频等状态节点。知识图的 Story-Event-Shot 层级保存结构化文本，生成图像、音频和视频放在链接资产层，typed edges 保持文本与资产依赖。文本梯度双循环分别优化数据无关的 shot 级编码策略和数据相关的当前 KG，并使用防退化与防遗忘 gate。

## 实验设置与数据

论文使用 6 段 pseudo-training 视频和 18 段不重叠评估视频，覆盖动画、AI 短片和经典电影。固定基础模型包括 Gemini-3.1-Pro-Preview、Qwen-3.7-Max、Nano Banana Pro 和 HappyHorse 1.0；评估比较 VideoAnalyzer、Storyboard Studio 和 soap2soap，并用四方向、八维度重建协议与人类对齐研究。

## 结果、限制与结论

AVA-Encoder Overall 重建分数 49.0%，比最强外部基线 28.3% 高 20.7 个百分点。策略-only 设置中 pseudo-trained shot policy 45.8%，超过人工 44.4%，且系统提示 token 减少 74.3%；双循环较两者均关闭提升 6.6 点，两个 gate 从 43.5 提升到 49.0。知识图支持角色、风格、剧情和镜头语言联动编辑，并改善多个下游生成框架。限制在于评估集仅 18 段视频且依赖固定 VLM 评审/生成栈，长期身份一致性和复杂音频语义仍待更广测试。

## 来源链接

- [Hugging Face](https://huggingface.co/papers/2608.12313)
- [arXiv](https://arxiv.org/abs/2608.12313)
- [PDF](https://arxiv.org/pdf/2608.12313)
- [TeX source](https://export.arxiv.org/e-print/2608.12313)

