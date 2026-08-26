---
candidateId: "arxiv--2608.15875"
businessCandidateId: "arxiv--2608.15875"
date: "2026-08-27"
category: "Paper"
title: "GigaBrain-0.7: Scaling Embodied Foundation Models to Emergent Capabilities with a Three-System Architecture"
authors: ["huggingface.co"]
summary: "GigaBrain-0.7 研究一个具身基础模型的核心问题：理解、预测与连续控制能否在一个可扩展系统中协同，而不是被压缩成单一 VLA 输出。作者把系统分成三个部分：System 2 使用 PaliGemma2 3B 做场景理解与子任务规划；System 3 基于 GigaWorld-1 扩展为 5B World Value Model，预测短未来视频并估计任务进度；System 1 是 PaliGemma2 3B 加 0.5B Action Expert 的 VLA，把规划、本体状态、预测子目"
provisionalKeywords: ["具身智能", "机器人操作", "机器人数据集"]
keywords: ["具身智能", "机器人操作", "机器人数据集"]
sources: [{"name": "huggingface.co", "url": "https://huggingface.co/papers/2608.15875"}]
previewImage: "/daily/2026-08-27/assets/arxiv--2608.15875/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 89
scoreScale: "paper-v2"
emphasis: true
---



# GigaBrain-0.7: Scaling Embodied Foundation Models to Emergent Capabilities with a Three-System Architecture

## 研究问题与贡献

GigaBrain-0.7 研究一个具身基础模型的核心问题：理解、预测与连续控制能否在一个可扩展系统中协同，而不是被压缩成单一 VLA 输出。作者把系统分成三个部分：System 2 使用 PaliGemma2 3B 做场景理解与子任务规划；System 3 基于 GigaWorld-1 扩展为 5B World Value Model，预测短未来视频并估计任务进度；System 1 是 PaliGemma2 3B 加 0.5B Action Expert 的 VLA，把规划、本体状态、预测子目标和价值条件合成为连续动作。贡献包括 37K 小时以上异构具身预训练、离散 NTP 与连续 flow matching 的一阶段联合训练、跨本体共享 Action Expert 与本体专属投影，以及部署后离线/在线经验强化接口。

## 方法与系统

System 2 输出链条式场景分析和当前子任务。System 3 对当前观察、本体状态和子任务生成与动作块同期的短未来，提取末帧作为子目标图像，并将任务进度值转成二值 advantage token。System 1 采用 Mixture-of-Transformers：视觉语言流保持因果注意力，Action Expert 双向访问两个流的上下文，但两流 FFN 分离；Soft Knowledge Insulation 对连续动作梯度进入 VLM 骨干的比例做衰减，以兼顾控制学习与语言视觉能力。异构机器人状态通过有效性掩码、Robot ID 和本体专属输入输出投影对齐，动作旋转使用 6D 表示。预训练同时优化语言、子任务、离散动作和连续动作块；任务后训练冻结 System 3，只优化 System 1/2，并用条件 dropout 降低依赖。之后由 HIL 干预数据、进度判别器和 actor-critic 循环继续改进部署经验。

## 实验设置与数据

预训练语料包含真实机器人、UMI、EGO、世界模型生成与物理仿真数据，超过 37K 小时、16 种机器人形态。作者对数据做轨迹平滑性、信息密度、跨模态一致性与可执行性过滤，并把 UMI/EGO 映射到统一动作语义与坐标系。实验平台包括 AgileX PiPER/PiPER-X 和自研 Maker H01，基线含 π0.5、GigaBrain-0.1、Xiaomi-Robotics-1、Galaxea G0.5 等；模拟评测覆盖 RoboTwin 2.0、EBench、RoboColiseum。真实任务通常每配置 10-20 次，报告任务成功率、平均进度分和完成时间，并区分 ID/OOD。

## 结果、限制与结论

论文报告，多任务语言跟随中 Maker H01 的平均成功率由 GigaBrain-0.1 的 69.6% 提升到 84.2%；RoboTwin 2.0、EBench、RoboColiseum 上均取得最佳或领先成绩。System 3 消融显示预测子目标与价值条件在复杂任务中带来收益， clothes folding 已饱和到 100% 时收益有限。经验驱动 RL 在选定复杂任务上逐阶段提高成功率。限制也很明显：许多核心评测是作者自建或内部平台协议，外部复现成本高；37K 小时数据管线包含自动标注与世界模型生成，质量依赖多层过滤但难以独立审计；权重和训练代码当时仍为“将发布”，且长时序、安全和失败恢复证据不足。作为方向观察，它代表从单一 VLA 转向“理解-预测-行动-改进”系统级具身模型的清晰路线。

## 来源链接

- 论文：https://arxiv.org/abs/2608.15875
- PDF：https://arxiv.org/pdf/2608.15875
- 项目页：https://gigaai.cc/blog/gigabrain07
