---
candidateId: "arxiv--2607.29169"
category: "Paper"
date: "2026-08-04"
rank: 5
title: "ActFovea：通过时空视觉动作一致性保护 VLA 策略运行时"
authors:
  - "Wenda Yu"
  - "Tianshi Wang"
  - "Fengling Li"
  - "Xin Li"
  - "Jingjing Li"
  - "Lei Zhu"
summary: "ActFovea 是不修改、不重训底层 VLA 的运行时保护框架，联合视觉、机器人本体状态和动作历史检测空间遮挡、视觉延迟、动作漂移及冻结观测，并在可恢复与不可恢复风险之间选择修复或安全失败。"
keywords:
  - "运行时安全"
  - "视觉语言动作"
  - "机器人操作"
score: 92.0
sources:
  - name: "arXiv full text"
    url: "https://arxiv.org/html/2607.29169"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29169v1"
previewImage: "/daily/2026-08-04/assets/arxiv--2607.29169/preview.png"
---

## 核心内容

论文将多类运行时干扰统一看作视觉内容、本体状态和动作轨迹不再描述同一物理转变。ActFovea 根据动作和运动学预测接触区域与运动走廊，检测视觉运动、观测新鲜度和动作执行之间的一致性；可恢复时尝试候选观测并验证动作块，观测持续冻结时则停止恢复并进入有界安全失败。

## 关键技术与数据

框架包含动作条件 foveation、一致性监测、干扰条件候选观测、动作块验证和风险自适应执行。它使用机器人运动学投影接触中心和运动走廊，结合视觉、时间戳、本体状态、动作漂移与历史重放证据形成风险状态；验证器比较动作方向、端点、幅度、平滑度和 chunk drift，并可缩短执行视窗、阻尼动作或清零运动。评估在 π0 和四个 LIBERO 套件的 2,000 episode 对照中进行。

## 结果与结论

在局部视觉覆盖下，基础 VLA 成功率从 49.3% 提升到 90.3%，闭合 93.7% 的性能缺口；动作漂移和视觉延迟分别提升 7.0 和 9.8 个百分点，并保持干净任务表现。冻结观测重放的 2,000 个 episode 全部及时进入安全失败，没有未保护失败。作者明确指出，这不是形式化的碰撞规避保证，且评估干扰是受控实例。

## 来源链接

- [本次精读原文](https://arxiv.org/html/2607.29169)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29169v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29169v1)
