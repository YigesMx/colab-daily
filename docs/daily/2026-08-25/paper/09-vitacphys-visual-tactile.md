---
candidateId: "arxiv--2608.21355"
businessCandidateId: "arxiv--2608.21355"
date: "2026-08-25"
category: "Paper"
title: "ViTacPhys：从人类视触演示学习质量、刚度与摩擦"
authors: ["arxiv.org"]
summary: "ViTacPhys 用60个日常物体的人类视触抓取数据预测质量、操作刚度和摩擦系数；held-out object 上质量准确率 87.5%、摩擦准确率 97.5%，下游自适应抓取 OOD clean success 比 ACT 高 38.9 个百分点。"
provisionalKeywords: ["触觉感知", "机器人操作", "具身智能"]
keywords: ["触觉感知", "机器人操作", "具身智能"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.21355v1"}]
previewImage: "/daily/2026-08-25/assets/arxiv--2608.21355/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 9
groupScore: 80
scoreScale: "paper-v2"
emphasis: false
---
# ViTacPhys：从人类视触演示学习质量、刚度与摩擦

## 研究问题与贡献

视觉动作模型难以判断外观相似但质量、刚度或摩擦不同的物体。论文提出 ViTacPhys，用同步的人类视觉-触觉演示学习操作相关物理属性，并把这些预测作为机器人自适应抓取策略的条件。

贡献包括60个物体、1800次人类抓取的同步数据集，联合预测质量、操作刚度和摩擦系数的多任务框架，以及迁移到7-DoF机械臂和6-DoF灵巧手的真实部署。

## 方法与系统

数据采集记录手腕相机、头部相机、GelSight 类触觉图和手指力信号，使用标定协议为每个物体标注质量、操作刚度和硅胶接触摩擦系数。模型结合视觉流、触觉流、文本语义先验和时序编码，输出质量/摩擦类别和连续刚度。多任务损失使用 GradNorm 平衡，质量与摩擦采用有序回归。

下游策略以 ViTacPhys 的滚动预测为条件，控制频率 30 Hz。论文报告在 Jetson Orin 上 ViTacPhys 和策略分别约 9ms 与 10ms；VLM 语义初始化在接触前完成，约需 10 秒。

## 实验设置与数据

预测评估使用 in-distribution、held-out-object 和 one-shot 三种划分，各三次训练。真实下游实验选择40个可机器人抓取物体作为 ID，另设6对视觉相似但物理不同的 OOD 物体，每物体3次，对比 ACT 和 ViTacFormer。指标包括 clean success、过力成功、总成功和与人类遥操作力的相似度。本次 refine 已读取 PDF、TeX、teaser 图和结果表。

## 结果、限制与结论

论文报告 held-out object 上质量准确率 87.5%，摩擦准确率 97.5%，刚度 MAPE 9.08%，Pearson r 0.947；one-shot 下质量与摩擦准确率降至 49.2% 和 56.9%。下游抓取中，ViTacPhys 预测条件策略的 ID clean success 比 ACT 高 12.5 个百分点，OOD 高 38.9 个百分点；OOD 总成功高 19.5 个百分点。在共同成功的 OOD 物体上，相对 ACT 力绝对误差降低 19.7%。

限制包括触觉图主要捕捉法向压力，质量和摩擦被离散化，刚度是操作级测量而非材料常数；数据来自单一参与者，OOD 物体和真实试验数量有限，接触前 VLM 调用带来约10秒初始化延迟。

## 来源链接

- 论文：https://arxiv.org/abs/2608.21355
- PDF：https://arxiv.org/pdf/2608.21355
- arXiv 源码：https://arxiv.org/e-print/2608.21355
