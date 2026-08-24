---
candidateId: "arxiv--2608.20546"
businessCandidateId: "arxiv--2608.20546"
date: "2026-08-25"
category: "Paper"
title: "Koala Gripper：共同设计数据采集器和执行夹爪"
authors: ["arxiv.org"]
summary: "Koala 将手持数据采集设备和机器人夹爪作为同一平台设计，用3自由度非平行爪和可换拇指恢复多种抓取；采集设备和机器人执行端在10-40mm厚度下的指尖力差异最大约10%。"
provisionalKeywords: ["机器人操作", "具身智能", "触觉感知"]
keywords: ["机器人操作", "具身智能", "触觉感知"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.20546v1"}]
previewImage: "/daily/2026-08-25/assets/arxiv--2608.20546/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 6
groupScore: 83
scoreScale: "paper-v2"
emphasis: false
---
# Koala Gripper：共同设计数据采集器和执行夹爪

## 研究问题与贡献

扩大机器人操作数据集常依赖手持采集器，但许多采集器只是把机器人夹爪改给人握，牺牲人机工学和采集效率；反过来，舒适的数据设备又可能难以迁移到机器人执行。论文提出 Koala，把数据采集设备和执行夹爪共同设计为一个配对平台。

核心贡献是3自由度非平行爪形态、双拇指/手指机构、可互换指甲和拇指模块，以及从手持采集到 Franka FR3 策略执行的验证。作者目标是让数据分布更接近采集者能力，同时保持机器人可执行性。

## 方法与系统

Koala 使用可反驱的旋转驱动和四连杆触发路径，降低采集者负担；3-DoF 形态包含手指开合、拇指和腕/末端自由度，非平行爪面和指甲提高小物体、薄物体和异形工具抓取。设计流程同时考虑人手 ergonomics、夹爪输出力和机器人执行约束。

机器人执行端复用相同机构，并在 Franka FR3 上用阻抗控制执行扩散策略。论文为 pasta straining 和 cup destacking 分别采集 250 条手持和 100 条遥操作示范。

## 实验设置与数据

硬件验证包括反驱性能、10-40mm 厚度下采集设备与机器人夹爪的指尖力对比，每厚度 10 次，使用 Biometrics P200 载荷单元；另展示 YCB 和日常物体的抓取范围与形态。策略验证训练共享视觉编码器的 diffusion policy，并在真实 FR3 上执行两个任务。本次 refine 已读取 PDF、TeX、设计图和结果表。

## 结果、限制与结论

论文报告 10、20、30、40mm 厚度下采集设备与机器人执行端平均指尖力差异分别为 -3.17%、4.36%、8.11%、10.15%。Koala 可抓取钉子、钥匙、卡片、盘子、锤子、电钻等物体，最大 power grasp 直径 115mm，最小抓取直径 7mm。策略示范显示可完成 pasta straining 和 cup destacking。

限制是3自由度形态缺少可内收拇指，小物体重定向等能力受限；当前数据不含力/力矩状态，学习策略难以利用高输出力；操作者疲劳和任务规模也限制扩展。论文未提供跨任务成功率的完整统计表，策略结果主要是定性可行性验证。

## 来源链接

- 论文：https://arxiv.org/abs/2608.20546
- PDF：https://arxiv.org/pdf/2608.20546
- arXiv 源码：https://arxiv.org/e-print/2608.20546
