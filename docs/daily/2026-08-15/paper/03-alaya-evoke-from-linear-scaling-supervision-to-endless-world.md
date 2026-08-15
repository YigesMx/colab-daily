---
candidateId: "arxiv--2608.13546"
date: "2026-08-15"
category: "Paper"
title: "Alaya-EVOKE: From Linear-Scaling Supervision to Endless World"
authors:
  - "Yuanyang Yin 等"
summary: "Alaya-EVOKE 用外部相机索引几何状态、线性复杂度长时教师和 30 秒分布匹配监督，训练可开放生成且上下文有界的三步交互式视频世界模型。"
provisionalKeywords:
  - "交互式世界模型"
  - "外部记忆"
  - "长时生成"
  - "线性注意力"
  - "内容漂移"
keywords:
  - "视觉世界模型"
  - "空间记忆"
  - "长时一致性"
sources:
  - name: "Hugging Face"
    url: "https://huggingface.co/papers/2608.13546"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.13546"
  - name: "PDF"
    url: "https://arxiv.org/pdf/2608.13546"
  - name: "TeX source"
    url: "https://export.arxiv.org/e-print/2608.13546"
previewImage: "/daily/2026-08-15/assets/arxiv--2608.13546/preview.png"
schemaVersion: 2
ratingTrack: "paper"
groupRank: 3
groupScore: 90
scoreScale: "paper-v2"
---

# Alaya-EVOKE: From Linear-Scaling Supervision to Endless World

> Alaya-EVOKE 用外部相机索引几何状态、线性复杂度长时教师和 30 秒分布匹配监督，训练可开放生成且上下文有界的三步交互式视频世界模型。

## 研究问题与贡献

交互式世界模型同时需要持久记忆、低延迟交互和长时生成，但把历史放在 denoiser context 或 KV cache 中会使成本随会话增长，而少步学生又受教师监督范围限制。论文提出 EVOKE，用外部几何世界状态和专门设计的长时教师解决这两个瓶颈，使三步学生能持续响应相机与文本控制。

## 方法与系统

模型把生成分成固定形状的 1.5 秒 chunk。每步先从相机索引的 world state bank 读取当前视角相关几何，再结合短局部历史和可变文本条件生成下一 chunk，并把观测写回外部状态。教师使用 chunk-wise 分组、远距帧检索和线性注意力全局状态，使激活内存与计算线性增长；30 秒长时分布匹配在 self-forced rollout 中训练三步学生，使其无需 CFG 也能抑制局部合理但长期漂移的内容。

## 实验设置与数据

论文评测 WBench、VBench-Long 和 VBench-2.0，并做 pose-addressed recall、timed text control、几何记忆成本和 teacher 消融。会话实验报告小时级生成和单张 H200 上 384×640 分辨率的表现；还检查 leave-and-return 相机轨迹与已锚定/未锚定内容的文本控制差异。

## 结果、限制与结论

Evoke 在 WBench 达到 SOTA，并在 VBench-Long、VBench-2.0 保持有竞争力的视觉质量；单个 1.5 秒 chunk 在 H200 上生成 2.11 秒。几何召回在保留窗口覆盖离开时间时提高 2.3-3.2 dB，达到 15.4-17.8 dB；中途新内容文本指令 67% 可实现，但需要改写已锚定几何时仅 4%。作者明确指出当前几何状态主要保留粗场景结构，细粒度物体身份、外观和动态状态仍受限，实时交互也需继续加速。

## 来源链接

- [Hugging Face](https://huggingface.co/papers/2608.13546)
- [arXiv](https://arxiv.org/abs/2608.13546)
- [PDF](https://arxiv.org/pdf/2608.13546)
- [TeX source](https://export.arxiv.org/e-print/2608.13546)

