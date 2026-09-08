---
candidateId: "arxiv--2609.04355"
date: "2026-09-08"
category: Paper
title: "VLA-Precision：面向 VLA 模型高效真实世界在线强化学习的非对称协同自举"
authors: ["Chenyu Su", "Zhaolong Shen", "Yuan Qian", "Chen Qian", "Rui Zhang", "Feng Yan", "Weixing Chen", "Fei Zhang", "Jiamin Wang", "Shuang Cong", "Weiwei Shang（共 11 位作者）"]
summary: "预训练视觉-语言-动作（VLA）模型在精度与可重复性要求高的任务上不可靠；论文提出 VLA-Precision，用 ACoB 非对称协同自举算法与 ACoB-Stream 流式架构把真实世界在线 RL 高效部署到大型 VLA 后训练：9 个高精度化学操作任务平均成功率 98.3%，吞吐/计算效率最高提升 10.9 倍。"
keywords:
  - 具身智能
  - VLA 模型与机器人操作
  - 机器人学习与强化学习
sources:
  - { "name": "arxiv", "url": "https://arxiv.org/abs/2609.04355v1" }
previewImage: "/daily/2026-09-08/assets/arxiv--2609.04355/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 83.0
scoreScale: "paper-v2"
emphasis: true
---
# VLA-Precision：面向 VLA 模型高效真实世界在线强化学习的非对称协同自举

## 研究问题与贡献

预训练 VLA 模型靠模仿学习获得泛化操作能力，但在精度与可重复性要求高的任务（论文以化学操作为代表）上不可靠。真实世界在线强化学习（RL）本可让机器人在演示数据之外自主试错改进，但直接用于大型 VLA 后训练有两大瓶颈：不可靠的价值信号导致策略漂移；大型 VLA 的推理开销限制经验吞吐与样本效率。论文贡献是把「干预引导的快速行为学习」与「自主经验的价值校准」组织进一个可部署的真实世界在线 RL 框架 VLA-Precision，并在 4 种机器人本体、9 个高精度任务上完成系统验证。

## 方法与系统

核心算法 ACoB（Asymmetric Co-Bootstrapping，非对称协同自举）跨时间尺度组合两条学习路径：早期引入人类干预引导的行为学习，快速抬高策略水平并提高后续在线经验的质量；随着自主经验积累，全局回报传播加局部偏好排序逐步校准价值估计，得到相对动作优势，再用「参考正则化」的方式改进策略、抑制漂移——改进被约束在当前策略的邻域内，避免不可靠价值信号把策略带偏。系统侧的 ACoB-Stream 以「不变状态解耦」与「按需流式」为设计原则构成闭环经验-策略回路，使 ACoB 能以流式方式部署在大型 VLA 上，吞吐量与计算效率最高提升 10.9 倍。项目主页：https://vla-precision.github.io。

## 实验设置与数据

论文报告 9 个高精度化学操作任务（分 4 大类），跨 4 种机器人本体验证（页面列出 UR5e-DHGripper、UR5e-DexHand、Franka-DHGripper、Dual UR5e-DHGripper 等，含主动 UR5e 同构主从臂采集侧）；对比 VLA 基线与 RL 基线（具体基线名称以全文表格为准，摘要页未完整列出）。

## 结果、限制与结论

论文报告：9 任务平均成功率 98.3%，平均每任务 45.8 分钟完成训练；单次 episode 27.6 秒，速度约为 VLA 基线的 1.2 倍、RL 基线的 1.8 倍；吞吐/计算效率最高提升 10.9 倍。任务集中于化学操作域，泛化到其他高风险精密操作域（如手术、微装配）尚待验证；人类干预引导在部署初期的成本与安全边界论文未在摘要层报告，需全文确认。总体上，这篇工作把「在线 RL 后训练大型 VLA」从概念推进到可在多本体上真实运行的系统方案。

## 来源链接

- arXiv 页面：https://arxiv.org/abs/2609.04355
- HTML 全文：https://arxiv.org/html/2609.04355v1
- 项目主页：https://vla-precision.github.io
- PDF：https://arxiv.org/pdf/2609.04355
