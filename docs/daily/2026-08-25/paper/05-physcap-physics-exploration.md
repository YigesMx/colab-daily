---
candidateId: "arxiv--2608.21031"
businessCandidateId: "arxiv--2608.21031"
date: "2026-08-25"
category: "Paper"
title: "PhysCaP：让Code-as-Policy机器人主动探索隐藏物理属性"
authors: ["arxiv.org"]
summary: "PhysCaP 将代码策略、质量/刚度感知模块和优先级规划结合，在三个真实桌面任务和 LIBERO 复现任务中减少无效交互；仿真空罐识别成功率 78%，OpenVLA 为 0%。"
provisionalKeywords: ["机器人操作", "具身智能", "触觉感知"]
keywords: ["机器人操作", "具身智能", "触觉感知"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.21031v1"}]
previewImage: "/daily/2026-08-25/assets/arxiv--2608.21031/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 5
groupScore: 83
scoreScale: "paper-v2"
emphasis: false
---
# PhysCaP：让Code-as-Policy机器人主动探索隐藏物理属性

## 研究问题与贡献

许多 VLA 和 Code-as-Policy 系统主要依赖被动视觉，但真实操作常存在视觉无法确认的隐藏属性：杯子是否为空、牛油果是否成熟、物体质量是否适合抓取。论文提出 PhysCaP，用物理信息探索补足代码策略的主动感知能力。

贡献包括训练无关的质量和刚度提取模块、物理探索规划器、交互优先级器，以及三个部分可观测真实任务和一个 LIBERO 复现任务。论文目标是让机器人在任务完成和交互成本之间做有依据的权衡。

## 方法与系统

PhysCaP 在 CaP-Agent0 上加入 PhysX 模块：质量估计利用 PiPER 机械臂电机电流和关节力矩反馈，在受控提升中推断物体质量；刚度估计通过夹爪闭合行程和关节力矩变化执行受控挤压。Coding agent 将可用的物理测量转化为可执行代码。

Planner 决定何时已有足够证据，Prioritizer 根据几何、语义和视觉启发式过滤不可能候选并排序剩余交互，避免逐个穷举。主 backbone 为 Gemini 3.1 Pro，基线共享同一模型；论文也称系统模型无关。

## 实验设置与数据

真实任务每任务 10 次：找出蓝方块、识别空罐、挑出成熟牛油果；指标为成功率、物理交互次数和执行时间。仿真在 LIBERO 中复现识别空杯任务，共 50 次，对比 OpenVLA、π0.5 和 MolmoAct2。论文还用 13g 到 963g 标定物和 3D 打印按钮机构验证物理感知。本次 refine 已读取 PDF、TeX、主图和表格。

## 结果、限制与结论

真实任务中 PhysCaP 分别取得 9/10、8/10、9/10，总体交互次数和执行时间优于带物理模块的基线；例如蓝方块任务平均交互 1.33 次、40.48 秒。仿真空罐任务成功率为 78%，高于 CaP+PhysX 的 74% 和 CaP+PhysX+Planner 的 62%，而 OpenVLA 为 0%、π0.5 为 4%。将硬件质量测量替换为真值时，真实空罐任务可达 10/10。

限制包括依赖商业 VLM API，带来成本和延迟波动；物理感知集中在质量和操作刚度，尚未覆盖摩擦、多接触动力学或传感器噪声的完整分布。真实任务每类 10 次，样本量仍有限。

## 来源链接

- 论文：https://arxiv.org/abs/2608.21031
- PDF：https://arxiv.org/pdf/2608.21031
- arXiv 源码：https://arxiv.org/e-print/2608.21031
