---
candidateId: "arxiv--2608.26103"
businessCandidateId: "arxiv--2608.26103"
date: "2026-08-29"
category: Paper
title: "Zero-WAM: In-Context World-Action Modeling from Human Videos for Open-Ended Task Generalization"
authors: ["arxiv.org"]
summary: "Zero-WAM 把人类视频作为机器人未见过任务的上下文规格，结合 HumanGen 74.2K 人机 ICL 配对和 IFP 目标，在 RoboTwin 七个未见任务上达到 46.95% 成功率。"
provisionalKeywords: ["世界模型", "机器人操作", "仿真与数据"]
keywords: ["世界模型", "机器人操作", "仿真与数据"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.26103"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.26103"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2608.26103"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/e-print/2608.26103"}
previewImage: "/daily/2026-08-29/assets/arxiv--2608.26103/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 89
scoreScale: "paper-v2"
emphasis: false
---
# Zero-WAM：从人类视频学习开放任务泛化的上下文世界动作模型

## 研究问题与贡献

论文研究零样本跨任务机器人操作：机器人没有见过某任务的机器人示教，也不能更新参数，却要根据部署时的上下文执行该任务。作者认为人类视频比语言更能直接表达目标状态变化，因此把人类演示视频作为任务规格引入因果视频-动作模型。

## 方法与系统

Zero-WAM 基于 Wan-2.2-TI2V-5B 构建 Mixture-of-Transformers：视频 Transformer 和动作 Transformer 共享注意力但保留各自参数。人类视频被前置于机器人轨迹，用高度轴 RoPE 偏移区分子上下文视频；动作分支从预测的机器人视频解码动作，而不是直接复制人类动作。In-context Future Chunk Prediction 监督多个跨步未来块，迫使模型使用人类视频而不是依赖已见任务捷径。数据侧 HumanGen 自动把任务采样机器人轨迹转成语义匹配人类视频，形成 74.2K 配对、8.6K 任务。

## 实验设置与数据

机器人预训练数据来自 AgiBot、InternData-A1、Open-X-Embodiment、RoboCOIN 和 RoboMIND，经任务级重采样得到约 6,000 任务和每 epoch 约 400K 轨迹。RoboTwin 2.0 按 43 个训练任务、7 个未见任务切分；每任务每 seed 做 100 次 rollout，报告 3 个 seed 平均。真实实验在 Franka 双臂上测试未见容器放置、三物体顺序操作和桌腿插入，各 30 次。

## 结果、限制与结论

Zero-WAM 在七个未见 RoboTwin 任务平均成功 46.95%，比 LingBot-VA 的 17.45% 高 29.50 个百分点；所有七项均优于两个视频动作基线。真实任务中，容器放置、三物体顺序操作和插入分别达到 53.3%、33.3% 和 16.7%，对应 LingBot-VA 为 43.3%、10.0% 和 0%。限制方面，实验主要面向桌面固定操作，作者提出未来需扩展到动态、非结构化、移动操作和更长时程任务。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2608.26103)
- [PDF 全文](https://arxiv.org/pdf/2608.26103)
- [HTML 全文](https://arxiv.org/html/2608.26103)
- [TeX source](https://arxiv.org/e-print/2608.26103)
- [项目主页](https://robbyant-research.github.io/Zero-WAM/)
