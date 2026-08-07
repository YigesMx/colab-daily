---
candidateId: "arxiv--2608.03116"
category: "Paper"
date: "2026-08-06"
rank: 6
title: "Shooting for Contact: Contact-Implicit Multiple Shooting for Dynamic Motion Retargeting"
authors:
  - "Sergio A. Esteban"
  - "Jason H. K. Siu"
  - "Derrick Mach"
  - "Junheng Li"
  - "Vince Kurtz"
  - "Joel W. Burdick"
  - "Aaron D. Ames"
summary: "DSMS 将运动重定向从只追求运动学相似改为在可微仿真中同时满足接触、摩擦、碰撞和驱动约束。"
keywords:
  - "仿真到现实"
  - "人形机器人"
  - "实时控制"
score: 80
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.03116v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.03116v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.03116/preview-main.png"
---

## 核心内容

人类动作或动画经过运动学重定向后可能脚底滑动、穿透、碰撞或需要不可实现的力矩，导致下游模仿强化学习同时承担纠正参考轨迹和学习稳定控制的负担。DSMS 在训练前把参考动作优化成目标机器人动力学可行的全身轨迹。

## 关键技术与数据

方法把可微分模拟器嵌入 nonlinear program，采用 contact-implicit direct simulation-based multiple shooting，内部处理接触、摩擦、冲击、自碰撞、关节限位和驱动约束，不预设接触时序。优化后的轨迹用于运动模仿 RL；论文评估速度条件接触丰富爬行和 180 度跳转。

## 结果与结论

作者报告 DSMS 生成的参考轨迹能加速模仿强化学习并降低跟踪误差，并在 Unitree G1 上实现零样本仿真到现实的接触丰富爬行和 180 度跳转。结论支持在策略训练前解决动力学可行性；但优化依赖模拟器、模型参数和任务约束，现实硬件的接触差异和更大动作库仍是主要外推风险。

## 来源链接

- https://arxiv.org/pdf/2608.03116v1
- https://arxiv.org/abs/2608.03116v1
