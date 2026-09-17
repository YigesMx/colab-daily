---
schemaVersion: 3
candidateId: "arxiv--2609.18430"
date: "2026-09-18"
category: "Paper"
groupRank: 10
title: "StrucPhysVideo: Learning Physical Dynamics from Structured Captions and Robot Actions"
authors: ["paper authors as listed on arXiv"]
summary: "StrucPhysVideo 通过物理接地的数据整理与标注改造视频世界模型：管线对视频做运动感知分割、质量与内容过滤、物理相关性过滤，再用结构化字幕标注参与物体、材料属性、时序交互与区别于相机运动的物体运动；30B 骨干（Qwen3-VL-32B 条件编码 + Wan VAE，LingBot-Video 初始化）在 2 万小时数据上以动态比例课程训练，Physics-IQ Verified 达 45.5%，字幕消融显示物理聚焦语言监督优于原始字幕；IA2V 扩展支持动作条件视频预测。"
keywords: ["世界模型与动作预测", "机器人数据与预训练"]
sources: [{"name": "arXiv", "url": "https://arxiv.org/abs/2609.18430"}, {"name": "arXiv HTML", "url": "https://arxiv.org/html/2609.18430"}, {"name": "论文首图", "url": "https://arxiv.org/html/2609.18430v1/teaser.png"}]
previewImage: "/daily/2026-09-18/assets/arxiv--2609.18430/preview.png"
---

## 研究问题与贡献

视频是学习物理世界表征的天然介质，但训练数据需保留有意义的物理交互、标注需落在物理事件上、建模需捕捉动作如何驱动场景演化。乱剪的片段会切断抓取-抬起的过程，遮幅横幅与瓶身标签需区别对待，"机器人处理杯子"式的字幕无法定位是哪个杯子、推还是抬、状态如何变化。StrucPhysVideo 的贡献：物理接地数据管线（时间连续性、视觉质量、内容上下文的过滤 + 结构化字幕与物理现象标签）；TI2V/IA2V 两个设定的 30B 视频世界模型；以及物理聚焦监督有效性的消融证据。

## 方法与系统

TI2V 设定下冻结 Qwen3-VL-32B 联合编码字幕与参考图，冻结 Wan VAE 编码视频，可训练骨干在流匹配路径上预测潜速度场；双路参考条件（语义路 + 首帧潜码边界条件）保持主体与布局一致。IA2V 设定接入成对动作-视频数据，把机器人指令与场景演化连接起来。数据课程以 70/30 → 40/60 → 20/80 的比例从通用域过渡到物理聚焦池。

## 实验设置与数据

训练使用各 1 万小时物理聚焦与高质量通用域互联网视频，4×8-H200 节点，81 帧/15fps/480×832；评测含 Physics-IQ（66 实验 396 视频的物理复现）与跨骨干（两个视频骨干）的字幕消融，IA2V 评测动作条件下的 rollout 保真。

## 结果、限制与结论

论文报告 Physics-IQ Verified 45.5%，两个骨干上的消融一致显示结构化物理字幕优于原始字幕；IA2V 实验迈出交互式视频世界模型第一步。限制：长时程滚动一致性、推理延迟（作者提出一到两步生成方向）、动作空间丰富度与跨具身泛成仍待解决；Physics-IQ 分数与真实物理理解的等价性也应谨慎解读。对本组，该工作示范了"数据标注结构决定世界模型物理性"的路线，与 3D 动力学预训练互补。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2609.18430)
- [arXiv HTML 全文](https://arxiv.org/html/2609.18430)
- [Figure 1 首图](https://arxiv.org/html/2609.18430v1/teaser.png)
