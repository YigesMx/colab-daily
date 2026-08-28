---
candidateId: "arxiv--2608.27384"
businessCandidateId: "arxiv--2608.27384"
date: "2026-08-29"
category: Paper
title: "FlashVLA: Streaming Action Decoding for Fast and Asynchronous VLA Inference"
authors: ["arxiv.org"]
summary: "FlashVLA 在不同噪声级别的动作块流式缓冲中联合解码并用块级因果注意力保持连续性，在单 GPU 上实现 30 Hz 以上平滑异步控制。"
provisionalKeywords: ["视觉语言动作", "实时推理", "机器人操作"]
keywords: ["视觉语言动作", "实时推理", "机器人操作"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.27384v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.27384"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2608.27384"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/e-print/2608.27384"}
previewImage: "/daily/2026-08-29/assets/arxiv--2608.27384/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 8
groupScore: 84
scoreScale: "paper-v2"
emphasis: false
---
# FlashVLA：面向快速异步 VLA 推理的流式动作解码

## 研究问题与贡献

Flow-matching VLA 的动作解码通常需要多次迭代，论文剖析 π0.5 时发现动作解码占每次推理时间约 75%。同步执行会在块边界停顿，异步执行又基于过期观测，产生动作与真实机器人状态不匹配。FlashVLA 把两个问题归因于“每个动作块孤立解码”，并用联合流式解码同时解决延迟和连续性。

## 方法与系统

模型维护多个处于不同噪声水平的动作块缓冲区；一次前向传播把所有块推进一步，稳态时每步弹出一个可执行块并追加新的噪声块。块级因果注意力允许较噪声的未来块读取较干净、即将执行的块，从而隐式条件在机器人实际会到达的轨迹上，不需要显式未来状态预测器。微调时把所有冷启动缓冲配置打包为一个样本，共享观测编码并用注意力掩码隔离缓冲配置。系统侧使用 CUDA Graph、线性层打包和编译优化。

## 实验设置与数据

仿真使用 LIBERO 四个 suite 与 RoboTwin 2.0 50 个任务的 clean/randomized 设置，主要基座为 π0.5，并在 SmolVLA 和 LingBot-VLA 上测试迁移。LIBERO 使用 chunk size 10、buffer length 4；RoboTwin 使用 chunk size 20、buffer length 4。真实部署在 7 自由度 Franka 和单张 RTX A4000 上执行取放、擦白板和清理桌面，每任务 50 条示教、15 次试验，并与同步、朴素异步和 RTC 配置比较。

## 结果、限制与结论

在一步异步 LIBERO 中，FlashVLA 平均成功率 97.8%，高于 π0.5 的 96.9%，每步时间从 53.8 ms 降至 22.1 ms，速度提升 2.43 倍；同步 RoboTwin 平均成功率从 86.0% 提高到 90.5%。真实任务平均分从同步 π0.5/RTC 的 80.0%/75.6% 配置提升到 84.4%，完成时间较同步平均提速 1.3 倍；A4000 上 67.3 ms 推理延迟通过两步异步与执行重叠，可支撑 30 Hz 控制。限制包括仍继承预训练模型的孤立块目标函数，以及每 episode 需要一次性 buffer 冷启动，短任务中更明显。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2608.27384v1)
- [PDF 全文](https://arxiv.org/pdf/2608.27384)
- [HTML 全文](https://arxiv.org/html/2608.27384)
- [TeX source](https://arxiv.org/e-print/2608.27384)
- [代码仓库](https://github.com/z-lab/flashvla.git)
