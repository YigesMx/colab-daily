---
schemaVersion: 3
candidateId: "arxiv--2609.05994"
date: "2026-09-10"
category: "Paper"
groupRank: 7
title: "GLoRI: Closed-Loop Whole-Body Tracking with Global-Local Reference Interaction for Humanoid Loco-Manipulation"
authors: ["Qingyao Xu", "Sheng Yin", "Zibo Zhou", "Ya Zhang", "Siheng Chen", "Yue Hu"]
summary: "GLoRI 用全局-局部交叉注意力融合局部运动结构与世界系校正线索，人形 loco-manipulation 全身跟踪在留出 HuMoTo 动作上 g-MPJPE 6.44 厘米（比 CLOT 降 45.6%），真机 Unitree G1 自主设定 9 次试验完成 7 次。"
keywords: ["人形机器人", "机器人操作"]
sources: [{"name": "arXiv 摘要页", "url": "https://arxiv.org/abs/2609.05994"}, {"name": "论文 PDF", "url": "https://arxiv.org/pdf/2609.05994"}]
previewImage: "/daily/2026-09-10/assets/arxiv--2609.05994/preview.png"
---

## 研究问题与贡献

GLoRI 面向人形机器人"行走-操作"（loco-manipulation）中的全身运动跟踪：局部参考能保持运动结构，却缺乏对世界系绝对位置的约束，微小的根部与末端偏差会累积成全局位移、导致抓取失败；已有的全局感知方案又以遥操作为中心，依赖人类在线纠正。论文提出闭环全身控制器 GLoRI，将结构化全局参考与反馈同局部运动引导显式结合，为自主 loco-manipulation 提供精确的世界系全身跟踪。

## 方法与系统

GLoRI 跟踪由根部、头部与双手组成的稀疏未来位姿参考——这一紧凑任务空间接口可直接接收来自自我中心视觉运动模型或 VLA 模型的目标，无需稠密全身动作输入。参考观测被分解为局部与全局两路：局部参考在局部坐标系编码头部与手部位姿以捕捉协同运动结构；全局参考提供世界系与当前根部系的关键点目标、位姿误差与根部轨迹反馈。策略网络 GLoRI-Net 用全局-局部交叉注意力（GLCA）以全局校正线索精炼局部关键点特征，兼顾运动结构与全局放置精度；真机部署用便携式 VIVE 跟踪器提供根部位姿反馈闭合全局控制回路。

## 实验设置与数据

在 Unitree G1 上完成仿真与真机评测：仿真在 HuMoTo 留出动作集上对比 CLOT 等基线，并做 Isaac Gym 到 MuJoCo 的直接迁移（不微调）与 GLCA 消融；真机采用与操作者无关的自主 loco-manipulation 设定——离线录制动作提供全局根部轨迹与稀疏头/手参考，无在线人类指令，单一策略与多样未见物体交互（搬箱子、拿包、拿枕头三类任务、共 9 次试验）。

## 结果、限制与结论

论文报告：留出 HuMoTo 动作上动作完成率 100%，g-MPJPE 从 CLOT 的 11.84 厘米降至 6.44 厘米（相对降低 45.6%）；消融显示 GLCA 比直接特征融合再降 17.1%；Isaac Gym 到 MuJoCo 无微调直接迁移仍保持精度；真机 G1 在无在线人类纠正的自主设定下 9 次试验完成 7 次。论文将其定位为面向自主运动生成工作流集成的全局跟踪基础，尚未报告与高层 VLA 规划器的端到端闭环集成结果。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2609.05994)
- [论文 PDF](https://arxiv.org/pdf/2609.05994)
