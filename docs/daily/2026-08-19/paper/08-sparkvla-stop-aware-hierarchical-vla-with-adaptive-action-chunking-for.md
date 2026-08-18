---
candidateId: "arxiv--2608.16172"
businessCandidateId: "arxiv--2608.16172"
date: "2026-08-19"
category: "Paper"
title: "SparkVLA: Stop-Aware Hierarchical VLA with Adaptive Action Chunking for Long-Horizon Manipulation"
authors: ["arxiv.org"]
summary: "SparkVLA 把 Stop 和所有动作前缀长度放入同一排序候选集，论文报告 RoboCerebra 47.12% 成功率、真实多步任务 69.3% 成功率，停止准确率消融达到 96.65%。"
provisionalKeywords: ["VLA", "长时程任务", "动作块", "分层控制"]
keywords: ["视觉语言动作", "模型与推理"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.16172v1"}]
previewImage: "/daily/2026-08-19/assets/arxiv--2608.16172/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 8
groupScore: 82
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.16172 -->
# SparkVLA：把停止决策与自适应动作块长度统一排序的分层 VLA

## 研究问题与贡献

分层 VLA 在每个重观测边界需要同时回答两个问题：当前子任务是否应终止，以及本轮 proposed action chunk 应执行多长。论文认为这两个决策相互依赖：最优停止点取决于即将执行的计划，最优执行长度又取决于子任务边界。把停止检测和 chunk 长度拆成两个模块，会让双方都缺少关键上下文。

SparkVLA 的贡献是构造一个统一候选集，让 Stop 与所有 action-prefix 长度在同一评分头中竞争，从而消除停止阈值调参，并只用离线偏好监督训练。论文报告，在 RoboCerebra 上达到 47.12% 成功率，比官方分层基线高 30.57 个百分点，比最强可复现方法高 26.83 个百分点。

## 方法与系统

系统从预训练 π0.5 派生两个分支：高层 VLM planner 生成自然语言子任务并承载选择器，低层完整 VLA executor 生成动作块。每个子任务开始时，planner 根据全局指令、历史子任务命令和当前观测生成新命令，并把倒数第二层的原始 anchor 与历史 anchor 池做 self-attention 融合，形成历史感知锚点。

Anchor-Conditioned Context Encoding 用该锚点引导视觉 token 剪枝，使选择器关注任务相关区域。Stop-Aware Action-Prefix Selection 只在 chunk 边界调用，对 Stop 和长度 1 到 H 的每个前缀做共享自注意力评分并选择最高分项。训练先监督子任务命令，再冻结基础分支，用离线偏好排序损失训练统一选择器；无需在线奖励或逐步停止监测。

## 实验设置与数据

主要评测为 RoboCerebra，包含 Dynamic、Memory、Mix 和 Ideal 等条件；基线包括 OpenVLA-OFT、SmolVLA、π0.5、官方 HPE 和作者复现的 Mem-0，另有 SparkVLA 与 OpenVLA-OFT、SmolVLA 组合的版本。论文还在 LIBERO 四个任务套件上做任务级评估，并在 RoboCerebra 上消融 chunk 选择、停止集成、上下文编码、选择器位置和推理调度。

真实机器人使用 AirbotPlay 双臂平台、两只腕部相机和一只头部相机，评估 Shelf Arrangement、Drawer Restocking 和 Tea Preparation 三个多子任务任务，分别有 6、6 和 12 个子任务。每任务收集 50 条演示并评估 50 次，初始状态匹配，成功要求完成全部子任务和终态条件。

## 结果、限制与结论

论文报告，SparkVLA 在 RoboCerebra 平均 47.12%，高于 π0.5 的 12.29%、HPE 的 16.55% 和 Mem-0 的 20.29%；在动态观测和记忆实验条件上提升最大。使用 OpenVLA-OFT 或 SmolVLA 作为低层 executor 时也能达到 24.15% 和 25.32%，说明高层接口有一定 executor 无关性。消融显示，把 Stop 并入统一候选集后停止准确率从 80.37% 升至 96.65%，成功率从 42.53% 升至 47.12%。LIBERO 平均 98.5%，真实三任务平均 69.3%，比 π0.5 高 21.3 个百分点；12 步泡茶任务为 56%，比 π0.5 高 30 个百分点。

论文明确说明当前评估集中在固定物体类别的桌面操作和离线训练，开放世界、在线适应以及更多 planner-executor 组合仍待研究。本文分析认为，统一排序的直接收益已被停止准确率消融清楚支持，但 LIBERO 多数强基线接近饱和，不能作为主要区分证据；真实任务仍为受控初始状态和固定流程，长期语义记忆与扰动下的稳健性未知。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.16172v1)
- [官方项目页](https://icr-lab.github.io/SparkVLA)

