---
candidateId: "arxiv--2608.26947"
businessCandidateId: "arxiv--2608.26947"
date: "2026-08-29"
category: Paper
title: "4DSynth: Controllable Procedural World Synthesis for Dynamic Embodied Simulation"
authors: ["arxiv.org"]
summary: "4DSynth 把文本、mask 或单张照片编译成可编辑 4D 环境，统一几何、动画角色、相机轨迹和 OpenUSD 物理状态，并生成 333 个动态导航任务暴露 VLM 失败模式。"
provisionalKeywords: ["仿真与数据", "具身智能", "世界模型"]
keywords: ["仿真与数据", "具身智能", "世界模型"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.26947v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.26947"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2608.26947"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/e-print/2608.26947"}
previewImage: "/daily/2026-08-29/assets/arxiv--2608.26947/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 9
groupScore: 83
scoreScale: "paper-v2"
emphasis: false
---
# 4DSynth：可控程序化世界合成用于动态具身仿真

## 研究问题与贡献

具身智能需要视觉多样、可物理交互且随时间变化的环境，但程序化仿真、语言生成、4D 动态和真实转仿真通常分散在不同表示和管线中。4DSynth 的目标是把自然语言、蓝图 mask 或单张照片转换为一个可编辑 4D 环境，其中几何、角色轨迹、相机轨迹和物理仿真状态保持一致。

## 方法与系统

系统先解析场景、角色、动作、空间目标和相机意图，形成 schema 校验的 4D specification。四条场景实现路径包括原生室内生成、原生室外生成、文本/mask 布局合成和单图 real-to-sim 编译，最终都落到共享 Stage：显式几何、可行走区域和场景内容。动画阶段在完成几何上规划碰撞-free 角色轨迹，相机规划也在同一几何上验证；持久 WorldState 保存中间结果与来源，并导出渲染视频、OpenUSD 物理场景和导航任务。

## 实验设置与数据

4DSynth-Nav 使用 122 个启用物理的 Infinigen Indoors 场景，在 NVIDIA Isaac Sim 4.5.0 中模拟。任务生成经过场景探测、任务生成和 spawn 验证，最终得到 333 个任务：L1 113 个、L2 110 个、L3 110 个，包含单阶段导航、两路点导航和取放。动态障碍覆盖单人跑步、双人跑步和跑步-舞蹈/跳跃。论文评估 Qwen3-VL-30B-A3B-Thinking 与 Gemini 3.1 Pro，每 episode 最多 150 个动作或 50 次 VLM 调用。

## 结果、限制与结论

Qwen3-VL 全部任务成功率 13.2%、子任务进度 22.4%；Gemini 3.1 Pro 分别为 33.3% 和 40.7%。Gemini 在盲启动 L1 达到 57.5% 成功率，但两阶段 L3 仍只有 18.2%。两个模型都常在完成第一阶段后停滞或绕离目标，碰撞与轨迹诊断揭示了成功率之外的失败。作者说明两模型架构、训练和服务栈不同，因此结果是诊断而非受控比较；下一阶段会量化路线保真度、加入可响应人和铰接对象并测试更广泛智能体。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2608.26947v1)
- [PDF 全文](https://arxiv.org/pdf/2608.26947)
- [HTML 全文](https://arxiv.org/html/2608.26947)
- [TeX source](https://arxiv.org/e-print/2608.26947)
