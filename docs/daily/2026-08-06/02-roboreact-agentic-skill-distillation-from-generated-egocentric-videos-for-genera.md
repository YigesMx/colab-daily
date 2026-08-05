---
candidateId: "arxiv--2608.03387"
date: "2026-08-06"
rank: 2
title: "RoboReact: Agentic Skill Distillation from Generated Egocentric Videos for Generalizable Whole-Body Manipulation"
authors:
  - "Shuliang He"
  - "Shuai Wang"
  - "Bo Yue"
  - "Junchi Teng"
  - "Changyu Wang"
  - "Guiliang Liu"
summary: "RoboReact 从单个第一视角 RGB-D 观察生成并重定向人形机器人全身操作技能，再通过对象重定位和视觉语言反馈进行在线修正。"
keywords:
  - "具身数据合成"
  - "人形机器人"
  - "机器人操作"
score: 81
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.03387v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.03387v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.03387/preview.png"
---

## 核心内容

RoboReact 试图降低人形机器人收集多样操作演示的成本。它把生成的人类操作视频当作技能来源，而不是直接把视频动作当作可执行控制；中间经过深度感知三维重建、交互关键帧提取和机器人重定向，最后在执行中继续根据对象和几何偏差修正技能。

## 关键技术与数据

系统从单个 egocentric RGB-D 观察生成操作视频，提取保持手物几何关系的关键帧，将其重定向到高自由度人形平台，并使用对象中心重定位和 VLM 引导的 refinement loop 处理执行偏差。最终由全身控制器执行。作者在真实人形机器人、多种对象配置和扰动恢复场景中评估。

## 结果与结论

作者报告系统能够在不使用遥操作或人工示范的前提下执行多种全身操作，并能在扰动后恢复。该结果说明生成视频可以作为技能蒸馏的中间媒介，但摘要和全文中可见的验证仍集中在特定平台、对象和任务范围；生成视频的物理可行性、重定向失败模式和更大任务分布的稳定性仍需进一步实验。

## 来源链接

- https://arxiv.org/pdf/2608.03387v1
- https://arxiv.org/abs/2608.03387v1
