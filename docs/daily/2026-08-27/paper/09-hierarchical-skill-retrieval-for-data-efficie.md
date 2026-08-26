---
candidateId: "arxiv--2608.24042"
businessCandidateId: "arxiv--2608.24042"
date: "2026-08-27"
category: "Paper"
title: "Hierarchical Skill Retrieval for Data-Efficient Adaptation of Vision-Language-Action Models"
authors: ["arxiv.org"]
summary: "HSR 面向少样本 VLA 适配：目标任务只有少量演示，但已有大规模异构数据。直接按完整任务语言检索常失败，因为长时程任务的完整指令很少在先验数据中原样出现，而可复用子技能大量存在。作者先从先验数据任务指令中聚类出技能集合，用 LLM 把目标任务分解为技能序列，再为每个子技能检索演示；计划评分同时考虑 LLM 语义合理性和每个技能在先验数据上的可模仿置信度。随后用语言检索加行为特征重排，最后采用先学通用技能、再目标微调的两阶段适配。"
provisionalKeywords: ["视觉语言动作", "机器人数据集", "机器人操作"]
keywords: ["视觉语言动作", "机器人数据集", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.24042v1"}]
previewImage: "/daily/2026-08-27/assets/arxiv--2608.24042/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 9
groupScore: 83
scoreScale: "paper-v2"
emphasis: false
---



# Hierarchical Skill Retrieval for Data-Efficient Adaptation of Vision-Language-Action Models

## 研究问题与贡献

HSR 面向少样本 VLA 适配：目标任务只有少量演示，但已有大规模异构数据。直接按完整任务语言检索常失败，因为长时程任务的完整指令很少在先验数据中原样出现，而可复用子技能大量存在。作者先从先验数据任务指令中聚类出技能集合，用 LLM 把目标任务分解为技能序列，再为每个子技能检索演示；计划评分同时考虑 LLM 语义合理性和每个技能在先验数据上的可模仿置信度。随后用语言检索加行为特征重排，最后采用先学通用技能、再目标微调的两阶段适配。

## 方法与系统

系统对 Dprior 的任务描述做 BERT 嵌入与 K-means 聚类；对每个技能簇，在训练/验证切分上微调预训练 VLA，用验证集行为克隆损失和平均轨迹长度构造 Skill Confidence Score，避免昂贵 rollout。Qwen3-VL-4B 根据目标指令与可用技能生成 10 个计划，最终得分是计划语义分乘以各组成技能置信度。检索时先按子任务语言取前 10% episode，再用 VAE 行为特征比较候选帧与目标演示的 latent 距离，保留最高 30%。仿真两阶段先在语言检索 episode 上预训练，再在目标数据加重排帧上微调；真实任务因跨本体差距，第二阶段只用目标演示。基础策略为 SmolVLA-450M，只训练约 100M action expert 参数。

## 实验设置与数据

模拟实验用 LIBERO 长时程 10 任务，每任务 5 条目标演示，Dprior 为 LIBERO-90 的 90 任务×50 演示；每任务 50 次评估、3 个种子。真实实验在 7-DoF xArm 上做抽屉、垃圾桶、杯-抽屉、杯-茶四项任务，每任务 20 条演示与 20 次评估；Dprior 从 DROID 随机抽取 10k 轨迹。基线包括目标 BC、随机、全量、语言检索、Flow Retrieval、STRAP、Behavior Retrieval 和 IWR。

## 结果、限制与结论

论文报告 LIBERO 平均成功率 43.5%，比最强基线 BR 的 33.2% 高 10.3 个百分点；Mug-M 任务较 STRAP 高 27.3 点。真实任务 HSR 48/80 成功，BC 与 BR 均为 27/80，杯-茶从 3/20 提高到 9/20。消融显示去掉任务分解、行为重排或两阶段训练均降低表现；LLM+技能集 37.7%，完整评分 HSR 43.5%，接近人工计划 44.9%。局限是实验仅覆盖操作任务和单一 VLA 骨干，真实与 DROID 的跨本体差距使第二阶段不能直接合并目标数据；技能置信度用 BC loss 代理而非执行成功率，LLM 规划尚未闭环，失败后不能在线重规划。它对数据工程仍有直接价值：把大规模数据复用从“相似任务”推进到“可组合技能”。

## 来源链接

- 论文：https://arxiv.org/abs/2608.24042
- PDF：https://arxiv.org/pdf/2608.24042
- 项目页：https://hoar012.github.io/HSR-Project
