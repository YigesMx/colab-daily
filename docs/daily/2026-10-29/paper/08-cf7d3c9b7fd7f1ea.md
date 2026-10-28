---
schemaVersion: 3
candidateId: "arxiv--2610.36270"
date: "2026-10-29"
category: "Paper"
groupRank: 8
title: "Learning Multi-Phase Robot Loco-Manipulation via Phase-Conditioned Policy Optimization"
authors: ["Simone Manni", "Annika Wollschläger", "Dario Bellicoso", "Abel Gawel", "Marco Hutter", "Simon Le Cleac'h", "Jan Brüdigam"]
summary: "ETH Zurich 等团队把 PPO 扩展为阶段条件策略优化：阶段条件评论家、阶段门控奖励与多阶段重置课程，配合解耦层级控制（底层全身平衡策略+高层阶段执行），不用人体运动数据即可在 Unitree G1 人形与带臂 Boston Dynamics Spot 上纯靠环境交互学出多阶段全身移动操作（滚轮胎、双手抬箱）。训练在 GPU 加速 mjlab 仿真，经执行器延迟随机化、摩擦课程与力矩限制等 sim-to-real 工程实现零/少动捕真机部署（ArUco+板载状态估计），并以消融验证辅助阶段预测、多阶段初始化与价值拓扑的作用。局限：任务需人工阶段切分，阶段数扩展与模拟器接触保真度受限。"
keywords: ["机器人操作", "机器人学习", "强化学习", "具身智能"]
sources: [{"name": "arXiv 摘要页", "url": "https://arxiv.org/abs/2610.36270v1"}, {"name": "arXiv HTML 全文", "url": "https://arxiv.org/html/2610.36270v1"}, {"name": "arXiv PDF", "url": "https://arxiv.org/pdf/2610.36270v1"}]
previewImage: "/daily/2026-10-29/assets/arxiv--2610.36270/preview.png"
---

## 研究问题与贡献

一句话结论：ETH Zurich 等团队把 PPO 扩展为"阶段条件策略优化"——阶段条件评论家、阶段门控奖励与多阶段重置课程——在 Unitree G1 人形与带臂 Boston Dynamics Spot 上纯靠环境交互学出多阶段全身移动操作技能（滚轮胎、双手抬箱等），并通过解耦层级控制保证跨平台可移植。

复杂长程全身操作要求单一策略内串起蹲伏、抓取、行走等多种行为；现有路线多依赖人体运动数据与人形平台，数据处理开销大且绑定平台。本文改为利用任务先验结构直接塑形 RL 行为。

## 方法与系统

三项 PPO 扩展：阶段条件评论家（value 网络以行为阶段为条件，全局与局部价值分量结合）；阶段门控奖励（各阶段只在自身门控内计分）；多阶段重置课程（从任务中段状态重置以引导探索）。环境以状态机经局部成功条件（距离阈值等）划分阶段。跨硬件采用解耦层级架构：底层全身策略专注平衡动力学（含 IK 关键点保持训练稳定），高层策略只处理阶段执行与物体状态（本体系局部坐标），两平台共用同一算法框架。仿真为 GPU 加速的 mjlab（MuJoCo Warp），策略 ONNX 导出经 exploy 部署，ROS2 框架上机。

## 实验设置与数据

硬件任务：Spot 的 spot_tire_rolling（地面滚轮胎到目标）；G1 的 g1_lift_carry_box / g1_lift_box（双手抓取-搬运箱子）。真机适配三项关键工程：随机化执行器延迟（至 5 物理步）抑制手臂振荡；摩擦课程（应对 MuJoCo 软接触的持续微滑移）；力矩限制（防夹持过紧电机过热）。消融覆盖辅助阶段预测、多阶段回合初始化与价值网络拓扑；另验证免动捕执行（ArUco 标记+板载状态估计）。

## 结果、限制与结论

论文报告值：两平台硬件上完成多阶段移动操作技能并通过设计消融验证各组件必要性；免动捕执行与双手抓取 sim-to-real 成功。论文未给出单一汇总成功率数字，以任务演示与消融为主（原文未报告统一成功率指标）。

### 限制与结论

作者自述局限：阶段数增多与更长视野带来表征挑战（全局价值分量可能淹没细粒度局部价值变化）；任务需人工阶段切分与奖励微调，换箱形要手工更新重置关键帧，跨任务扩展性受限；模拟器接触建模精度制约真机迁移。未来方向：off-policy 采样效率、多机器人协作、从离线数据自动发现阶段结构。对组内价值：不用人体数据的跨平台 loco-manipulation RL 配方与真实 sim-to-real 工程清单。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2610.36270v1)
- [arXiv HTML 全文](https://arxiv.org/html/2610.36270v1)
- [exploy 导出工具](https://github.com/rai-opensource/exploy)
