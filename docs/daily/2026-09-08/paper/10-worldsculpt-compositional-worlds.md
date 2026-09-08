---
candidateId: "arxiv--2609.05416"
date: "2026-09-08"
category: Paper
title: "WorldSculpt：从接地视频生成组合式世界"
authors: ["Muyao Niu", "Jixuan He", "Ruihan Yu", "Lian Fu", "Yonghao Yu", "Zheng-Hui Huang", "Yifan Zhan", "Fengbo Lan", "Yongtao Ge", "Yinqiang Zheng", "Kaipeng Zhang", "Zhixiang Wang"]
summary: "从杂乱场景的视频生成组合式 3D 表示——数百个独立物体网格放置在共享世界系中；WorldSculpt 把强单物体 3D 生成先验（Pixal3D）扩展多视角条件路径，完全在单物体规范空间微调却无需场景级训练即可泛化到大遮挡场景，并发布 UE-MeshyScene 光真实感基准；随场景复杂度与遮挡上升，相对先前方法优势更大。"
keywords:
  - 世界模型与 3D 生成
  - 生成模型
  - 具身智能
sources:
  - { "name": "arxiv", "url": "https://arxiv.org/abs/2609.05416v1" }
previewImage: "/daily/2026-09-08/assets/arxiv--2609.05416/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 10
groupScore: 73.0
scoreScale: "paper-v2"
emphasis: false
---
# WorldSculpt：从接地视频生成组合式世界

## 研究问题与贡献

许多下游应用（游戏、AR/VR、仿真、机器人）需要把杂乱场景表示为「一组独立物体网格 + 共享世界系位姿」的组合式 3D 表示。重遮挡使每个视角只暴露物体几何的一小部分：几何方法在遮挡区留下残缺，现有组合式生成方法只处理较简单场景。WorldSculpt 把该问题推进到含数百物体的重遮挡场景。

## 方法与系统

方法：把强单物体 3D 生成先验适配到多视角观测——在 Pixal3D 基础上扩展多视角条件通路，使物体生成「接地」于多个带位姿的观测。关键性质：整个模型只在规范空间的单物体数据上微调，完全没有场景级训练，却泛化到大且重遮挡的场景。演示包含把生成的 3DGS 世界（Marble、HY-World 2.0）转换为组合式网格场景。

## 实验设置与数据

三个评测设置：单物体、受控多物体、以及新发布的光真实感基准 UE-MeshyScene（数百物体密集杂乱场景、含每物体标注与真值网格）；与先前方法对比（基线名单以全文为准）。

## 结果、限制与结论

论文报告：一致优于先前方法，且场景复杂度与遮挡越高优势越大（具体指标需全文表格核验）。对具身智能的意义：为「生成的世界 → 可交互物体级资产」提供了通道，可直接服务于仿真环境与机器人数据构造。单物体先验的物体类别覆盖与超出现测视角区域的幻觉风险需全文讨论确认。主页：https://alaya-lab.github.io/WorldSculpt/；代码：https://github.com/AlayaLab/WorldSculpt。

## 来源链接

- arXiv 页面：https://arxiv.org/abs/2609.05416
- HTML 全文：https://arxiv.org/html/2609.05416v1
- 项目主页：https://alaya-lab.github.io/WorldSculpt/
- 代码仓库：https://github.com/AlayaLab/WorldSculpt
