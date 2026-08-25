---
candidateId: "arxiv--2608.22678"
businessCandidateId: "arxiv--2608.22678"
date: "2026-08-26"
category: "Paper"
title: "RACO: Reliability-Aware Coarse-Goal Optimization for Inspection-Oriented UAV Vision-Language Navigation"
authors: ["arxiv.org"]
summary: "RACO 把粗目标视为运行时假设，通过对象锚点校正和尺度自适应细化提升巡检导向无人机视觉语言导航可靠性。"
provisionalKeywords: ["无人机导航", "具身智能", "智能体"]
keywords: ["无人机导航", "具身智能", "智能体"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.22678v1"}]
previewImage: "/daily/2026-08-26/assets/arxiv--2608.22678/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 8
groupScore: 81
scoreScale: "paper-v2"
emphasis: false
---

# RACO: Reliability-Aware Coarse-Goal Optimization for Inspection-Oriented UAV Vision-Language Navigation

## 研究问题与贡献

论文指出 UAV-VLN 常用导航误差、成功率和 SPL 评价“到达坐标附近”，但巡检部署还要求无人机停在有效观察区域、确认正确对象并避免把邻近相似对象误认为目标。两阶段 coarse-to-fine 策略中的粗目标若本身漂移到同类干扰物附近，后续局部细化也难以恢复。

作者贡献了 LG-UVI 评测设置和 RACO 框架。LG-UVI 在保留 CityNav/CityRefer episode 的基础上加入目标对象、同类候选、硬干扰物和类型感知巡检区域，并报告 Zone-SR、OSA、ISR 和 FVR。RACO 把粗目标视为运行时假设，在阶段前后用对象级候选锚点验证和修正，并对终端近距离失误做有界尺度自适应修正。

## 方法与系统

RACO 不修改 HETT 导航主干，而是围绕预测粗目标从固定场景对象图中检索最多若干个类型兼容候选锚点。轻量语言-类型解析器从指令提取类别线索；锚点特征包含与粗目标的空间兼容性、语义一致性、候选分数、间隔和阶段上下文。Pre-stage 门判断是否替换初始粗目标；Stage 1 到 Stage 2 边界再用轨迹、端点和局部锚点分布判断交接状态，必要时替换目标并做有界重规划。

终端精化只处理 20-35 m 的近距离误差：先按残距映射 5/10/15 m 基础移动，再由离线训练的策略在 0、0.5、0.75、1.0、1.25 的离散尺度中选择，0 表示放弃修正。推理只使用可观察几何、语言类型线索、模型候选分数、阶段状态、已执行轨迹和终端几何，不访问真值对象身份、目标坐标、硬干扰物标签或 unseen split 标注。

## 实验设置与数据

LG-UVI 包含 train-seen 21,878、val-seen 2,470、val-unseen 2,697 和 test-unseen 5,281 个 episode，对象类型覆盖建筑、车、地面区域和停车场；汽车用 20 m 中心半径区，其他类型用 20 m 轮廓缓冲区。每个 episode 平均约 30 个候选和 14-15 个硬干扰物。

实验在同一在线协议下评估 reproduced HETT、去除运行时修正的 RACO-Base 和完整 RACO；可靠性门和终端策略只训练于 train-seen，阈值在 held-out 子集选择，val/test 只用于评估。硬件为四张 RTX 4090D。消融比较 pre-stage、boundary、二者组合、去除类型过滤，以及地图扰动和路径长度变化。

## 结果、限制与结论

论文报告 RACO 在 val-unseen 把 SR 从 reproduced HETT 的 18.06 提高到 27.59，test-unseen 从 25.73 提高到 33.71，分别增加 9.53 和 7.98 个百分点；NE 同步下降，OSR 与 SPL 上升。巡检诊断中，val-unseen 和 test-unseen 的 Zone-SR 分别提高 6.08 和 6.14 个百分点，FVR 分别下降 19.51 和 15.09 个百分点。相对 RACO-Base，完整 RACO 在三个 split 上提高 SR 5.23-8.20 个百分点。

对象级确认仍是明显难点：OSA 与 ISR 在三个 split 上表现混合，说明视觉相似干扰物下的最终对象绑定还不稳定。方法依赖固定场景对象图，对对象位置噪声比中等删除或类别污染更敏感；真实无人机、在线地图更新和更强视觉验证当前材料未确认。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.22678v1)
- [PDF 全文](https://arxiv.org/pdf/2608.22678v1)
