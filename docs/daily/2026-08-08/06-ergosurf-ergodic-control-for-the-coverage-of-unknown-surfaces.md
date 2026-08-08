---
candidateId: "arxiv--2608.06208"
category: "Paper"
date: "2026-08-08"
rank: 6
title: "ErgoSurf: Ergodic Control for the Coverage of Unknown Surfaces"
authors:
  - "Stefan Schneyer"
  - "Timo Bachmann"
  - "Maged Iskandar"
  - "Korbinian Nottensteiner"
  - "Alin Albu-Schäffer"
  - "Freek Stulp"
  - "João Silvério"
summary: "ErgoSurf 将基于触觉接触的 GPIS 在线曲面重建与 HEDAC 遍历控制结合起来，在没有 CAD 或预扫描的情况下，一边学习未知曲面，一边按任务分布进行覆盖。局部切平面点云负责可计算的控制域，热扩散势场负责沿曲面引导运动；仿真和 7 自由度机械臂实验显示重建误差与遍历代价都能下降。"
keywords:
  - "触觉曲面遍历"
  - "在线自适应优化"
score: 88.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.06208"
previewImage: "/daily/2026-08-08/assets/arxiv--2608.06208/preview.png"
---

## 核心内容

ErgoSurf 针对检查、清洁、打磨等需要稳定接触并系统覆盖曲面的任务。传统遍历控制假设曲面几何已知，视觉预扫描又会受到遮挡、透明材质、反光和光照变化影响。论文提出把几何学习和任务驱动覆盖放进同一个在线控制回路：机器人通过力/力矩接触得到接触点与法向，GPIS 持续重建全局曲面；与此同时，局部切平面采样形成轻量控制域，机器人沿当前曲面估计执行 HEDAC 遍历动作。

方法采用双重表示。GPIS 是带不确定性的连续隐式曲面，既用于重建，也提供法向；切平面采样点经过 GPIS 零水平集投影后，用于离散计算目标分布、覆盖分布和热扩散势场。用户不需要知道曲面几何，只需在工作空间中指定热源式任务目标；目标热量先按距离衰减投射到已观测曲面，再沿曲面扩散，推动轨迹走向目标高、覆盖低的区域。

## 关键技术与数据

- 接触观测：动量观测器从关节测量中解耦重力、惯性、科氏项等自身动力学，结合末端力/力矩传感器得到外部接触力和力矩。假设刚体、可忽略切向摩擦和单点接触，由力作用线与工具几何求接触点及曲面法向（`main.tex`，Contact Observation，约 349-403 行）。
- GPIS：每个接触提供零值函数观测和法向梯度观测；距离过近的新观测被跳过，并用 Cholesky 更新避免每次重算完整核矩阵（`main.tex`，Surface Representation，约 408-413 行）。论文使用逆多二次核，实验长度尺度 `l=0.05`；噪声参数为 bunny `0.001`、chair/backpanel `0.1`（`main.tex`，实验指标与参数表，约 678-696、1028-1063 行）。
- 控制域与势场：在接触点的 GPIS 法向定义局部切平面，从高斯分布采样点；样本按最近邻距离约束保留，并迭代沿 GPIS 估计法向投影到零水平集。HEDAC 的欧氏 Laplacian 替换为曲面的 Laplace-Beltrami 离散算子，使用质量矩阵和 Laplacian 矩阵求温度场，再用局部线性最小二乘估计梯度并投影到切平面（`main.tex`，Point Cloud、Potential Field、Gradient，约 415-496、519-630 行）。
- 实验数据：bunny 仿真 10000 步、3249 个点云点和 1651 个观测点；chair 实验 3000 步、874 个点云点和 293 个观测点；backpanel 实验 3000 步、1472 个点云点和 417 个观测点。另在 bunny、mustard bottle、spot、torus 四种对象上各进行 20 次随机热源/起点实验（`main.tex`，Experiments、Multi-Run Robustness，约 673-790 行）。

## 结果与结论

作者报告 bunny 的遍历代价从 `9.2e-3` 降到 `2.6e-6`，Chamfer 距离从 `143.6` 降到 `8.7`，目标加权 Chamfer 从 `125.2` 降到 `8.1`；chair 的对应数值为 `1.0e-2 -> 1.4e-5`、`44.1 -> 2.5`、`35.5 -> 2.5`；backpanel 为 `8.3e-3 -> 1.2e-5`、`35.5 -> 3.3`、`29.2 -> 2.7`。在 bunny 对比中，作者称不确定性梯度策略重建质量相近，但第 5000 步遍历代价约为 ErgoSurf 的 21 倍，且没有任务分布驱动机制。

真实机器人使用带球形探头的 7 自由度机械臂，控制更新最高 4 Hz，低层控制超过 1 kHz；chair 在第 1000 步的总单步时间为 107 ms，仍在 250 ms 的 4 Hz 预算内。作者同时报告 chair 与 backpanel 上曲面重建和任务覆盖稳定收敛。保守地说，证据支持该方法在所测的平滑曲面、单机器人和给定核参数范围内有效；论文明确指出尖锐不连续边缘、薄物体两侧近邻错误连接、自适应核参数以及大规模高分辨率扩展仍是限制。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.06208)
- [arXiv TeX 源码](https://arxiv.org/e-print/2608.06208)
