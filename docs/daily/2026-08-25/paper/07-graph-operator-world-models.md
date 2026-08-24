---
candidateId: "arxiv--2608.20936"
businessCandidateId: "arxiv--2608.20936"
date: "2026-08-25"
category: "Paper"
title: "GraphOp-WM：用图算子建模形态参数变化下的世界模型"
authors: ["arxiv.org"]
summary: "GraphOp-WM 把 articulated robot 表示为图，将转移分解为形态无关局部动力学基和形态条件结构算子，并给出 MuJoCo interpolation/extrapolation/composition 基准；当前版本侧重结构与基准，完整量化对比未在正文报告。"
provisionalKeywords: ["世界模型", "运动控制", "具身智能"]
keywords: ["世界模型", "运动控制", "具身智能"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.20936v1"}]
previewImage: null
schemaVersion: 3
ratingTrack: "paper"
groupRank: 7
groupScore: 82
scoreScale: "paper-v2"
emphasis: false
---
# GraphOp-WM：用图算子建模形态参数变化下的世界模型

## 研究问题与贡献

连续控制世界模型通常针对固定物理系统训练；当连杆长度、质量、阻尼或驱动参数改变时，仅把这些参数作为条件输入并不能说明转移模型中哪部分应复用、哪部分应随形态变化。论文提出 Graph-Operator World Models（GraphOp-WM），显式研究同族 articulated robot 的形态参数泛化。

贡献包括图结构世界模型、形态条件结构算子和 MuJoCo 形态参数基准。基准区分 interpolation、extrapolation、held-out parameter combination 和 composition，用于检验预测与规划在几何、质量、阻尼和驱动变化下的泛化。

## 方法与系统

系统将 body 作为节点、joint 和 actuator 作为边。共享 body encoder 产生不含静态形态属性的动态节点 token；morphology encoder 只读取静态图属性，输出节点系数、边系数和少量 node-aligned 全局模式。

转移被分解为形态无关的局部动力学基与结构算子：node-local modulation 表达局部响应，incidence-matrix coupling 沿运动树传播耦合，low-rank correction 表示躯干-肢体等非局部残差。训练使用 basis normalization、架构信息分离和 paired-morphology supervision。作者将 TD-MPC2 的向量 encoder/MLP transition 替换为 packed graph modules，同时保留 MPPI/CEM 规划和 TD 目标。

## 实验设置与数据

基准使用 MuJoCo 的 Hopper、Walker2d 和 HalfCheetah，通过确定性 MJCF 修改缩放 link geometry、body/torso mass、joint damping 和 actuator gear，并按缩放几何与质量重算惯性。训练形态来自 maximin Latin-hypercube 采样；不同形态的动作张量在各自规划调用中实例化，不要求全局最大动作维度。论文给出参数范围与划分，但当前正文未给出完整对比表格。

## 结果、限制与结论

论文的结构结论是：局部动力学、运动树耦合和低阶全局校正承担不同角色，可为同族形态参数变化提供紧凑结构先验。当前版本的主要限制也很明确：它是针对相关 articulated family 的参数泛化方法，不宣称成为跨任意拓扑的通用控制器；正文没有提供完整训练/ baseline 成功率或预测误差表，量化优势尚不能独立确认。

后续应关注作者补充的实验结果、基准代码、跨形态规划表现，以及与 morphology-conditioned world model 和 multi-embodiment policy 方法的同预算比较。

## 来源链接

- 论文：https://arxiv.org/abs/2608.20936
- PDF：https://arxiv.org/pdf/2608.20936
- arXiv 源码：https://arxiv.org/e-print/2608.20936
