---
candidateId: "arxiv--2608.04842"
category: "Paper"
date: "2026-08-07"
rank: 15
title: "RORA：从单段静态视频构建可关节运动的真实感仿真资产"
authors:
  - "Hyesung Lee"
  - "Youngseon Lee"
  - "Kyutae Lee"
  - "Dongjun Lee"
  - "Yongseok Lee"
summary: "RORA 从单一静态配置视频重建 3D Gaussian Splatting 与网格混合资产，以凸分解、少量人工分组和几何关节建议恢复多关节及链式结构并导出 URDF。"
keywords:
  - "具身仿真"
  - "三维空间理解"
  - "灵巧操作"
score: 75.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.04842v1"
previewImage: "/daily/2026-08-07/assets/arxiv--2608.04842/preview.jpeg"
---

## 核心内容

真实感 3DGS 能缩小仿真视觉差距，但静态重建不包含门、抽屉和旋钮等内部运动学。RORA 只拍摄物体一个静态配置的视频，同时生成负责渲染的 Gaussian Splatting 和负责碰撞交互的网格。系统用几何提出部件与关节候选，让用户做轻量分组和轴选择，而不是要求采集多个关节状态。

## 关键技术与数据

流程包括 GS2Mesh 初始重建、网格修复、近似凸分解、人工语义分组、自动关节建议和导出。Gaussian 点通过近邻投票绑定到网格部件；关节建议从部件边界循环及局部 SVM 分隔平面估计轴，对多个连接界面再生成补充候选。用户确认 fixed/revolute/prismatic 类型和少量偏移后，系统导出统一 URDF，并把 3DGS 注册到各运动链。

## 结果与结论

PartNet-Mobility 的 6 个单关节、6 个多关节和 4 个链式对象上，RORA 只用单状态 48 视图；基线分别需要 15 秒动态视频或五状态 240 视图。链式类别中类型错误为 0、轴角误差 0.849 度、位置误差 0.028 m，PSNR 29.606、SSIM 0.983、LPIPS 0.017。平均总流程 7 分 23 秒，其中人工交互 42 秒。论文在 Unreal 和 Isaac Sim 展示灵巧手/人形机器人遥操作，但尚未报告用这些资产训练后真实机器人成功率；非凸出微小部件、透明和反射表面仍会使几何流程失败。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.04842v1)
- [arXiv PDF](https://arxiv.org/pdf/2608.04842v1)
