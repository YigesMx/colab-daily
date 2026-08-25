---
candidateId: "arxiv--2608.23138"
businessCandidateId: "arxiv--2608.23138"
date: "2026-08-26"
category: "Paper"
title: "Pointing-VLA: Typed Spatial Grounding Interfaces for Vision-Language-Action Manipulation"
authors: ["arxiv.org"]
summary: "Pointing-VLA 用类型化点、功能热图和轨迹读出头替代文本坐标，为机器人操作提供可检查的空间执行接口。"
provisionalKeywords: ["VLA模型", "机器人操作", "具身智能"]
keywords: ["VLA模型", "机器人操作", "具身智能"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.23138v1"}]
previewImage: "/daily/2026-08-26/assets/arxiv--2608.23138/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 87
scoreScale: "paper-v2"
emphasis: true
---

# Pointing-VLA: Typed Spatial Grounding Interfaces for Vision-Language-Action Manipulation

## 研究问题与贡献

论文研究 VLA 操作中的空间接口问题。许多操作子任务需要明确空间承诺：接触点、物体功能区域或短视觉轨迹；而自回归文本坐标需要生成和解析数字，Opaque action token 又隐藏了可审计的空间依据。作者主张把 embodied grounding 看成“类型化接口预测”，而不是把所有几何都序列化成文本。

Pointing-VLA 在 Embodied-R1 多模态隐藏状态上加入点、object-functional grounding heatmap 和视觉轨迹三类几何专用读出头，并用确定性 PICK/PLACE 执行合同连接高层推理与机器人执行。贡献包括类型化空间读出、阶段对齐部署合同、跨数据集与跨主干迁移、运行时效率和真实机器人验证。

## 方法与系统

模型复用一个 Embodied-R1 结构、基础权重和 Grounding Adapter 主体，同时为 Pointing、OFG 和 VTG 专家保留各自 LoRA、learned query 和解码器。Pointing 头直接输出归一化图像坐标；OFG 头用 FiLM 调制视觉特征并生成密集功能热图，其峰值作为接触位置；VTG 头用 8 个带时间编码的 waypoint query 输出归一化视觉轨迹，而不是低层机器人动作。

训练目标按几何类型监督点、热图和轨迹，并用 GRPO 式连续空间 refinement 改善点预测。pick-place 部署采用固定合同：源条件化 OFG 输出 PICK 功能接触，Pointing 输出 PLACE 目标；外部 wrapper 结合深度、相机内参和相机-机器人变换把图像坐标转换为机器人坐标，再交给 CuRobo 或既有执行器。模型头保持图像空间预测器，控制边界可审计。

## 实验设置与数据

原生 grounding 在 VABench-P、Part-Affordance-2K、AGD20K、RefCOCO 和 RoboAff 上评估点/区域命中与轨迹误差；机制实验比较 query 数、LoRA rank、refinement 和四种 PICK/PLACE 接口组合。Bridge/WidowX 评估四个任务、每任务 24 个 episode，要求完整任务完成，并开启 CuRobo 碰撞检查；基线包括 Octo-S、SpatialVLA、SoFar、MemoryVLA 和 Embodied-R1。

跨主干实验把 OFG/contact 读出迁移到冻结 NORA-1.5；已知头运行时与 Embodied-R1 文本解码在同一外部协议下比较。真实部署使用 AgileX PiPER，Pointing-VLA 保持 π 0.5 为动作策略，只在其前插入类型化空间引导，并在无干扰物、黄色圆柱干扰和红色圆柱干扰三个视觉场景中各测试 50 次。

## 结果、限制与结论

论文报告 Pointing-VLA 在 VABench-P 达到 64.3%，与 Embodied-R1 相当；Part-Affordance-2K 从 40.9% 提升到 57.3%。固定 OFG-PICK/Pointing-PLACE 合同在 Bridge/WidowX 四任务平均 72.9%，比最强替代组合高 14.6 个百分点，其中 Stack 为 100%。几何头比文本解码快 6.68-6.90 倍；NORA-1.5 迁移保持水平位姿成功率，把垂直放置从 89.0% 提高到 95.0%，并把记录的控制器时间缩短超过 20 倍。PiPER 上，π 0.5 从 52.7% 提升到 80.7%，预抓取失败从 47 降到 16。

限制方面，Spoon on towel 仅 50%，说明细薄物体接触仍是弱项；抓取后 transfer/drop 是主要残余瓶颈。论文的部署是固定 pick-place scaffold，任务相关变化、闭环几何校正、更广泛结构化任务分解和跨机器人迁移留待后续；更复杂任务族中的稳定性当前材料未确认。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.23138v1)
- [PDF 全文](https://arxiv.org/pdf/2608.23138v1)
