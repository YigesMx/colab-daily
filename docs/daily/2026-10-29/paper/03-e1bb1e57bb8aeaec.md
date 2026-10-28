---
schemaVersion: 3
candidateId: "arxiv--2610.37666"
date: "2026-10-29"
category: "Paper"
groupRank: 3
title: "ThinkWorld: World Imagination Reinforces Chain-of-Dynamics Reasoning"
authors: ["Chaehyun Kim", "Chi-Pin Huang", "Jisoo Kim", "Min-Hung Chen", "Yu-Chiang Frank Wang", "Seungryong Kim", "Fu-En Yang"]
summary: "ThinkWorld（高丽大学、台湾大学等）把动作思考表示为跨本体共享的 Chain-of-Dynamics（CoD）离散运动 token（FAST 风格 tokenizer 的归一化增量末端位姿），基于 Qwen3-VL-2B 与 MolmoAct2 动作专家，在冻结 DINOv3 特征空间预测 CoD 引起的未来，并以想象未来与观察未来的一致性（运动增强相似度）作 GRPO 奖励，让 EgoDex/EgoVerse 等无动作标注人类视频直接监督机器人动作推理。LIBERO 平均 97.3%、LIBERO-PRO 平均 55.6%（任务/环境漂移分别超 VLA-JEPA 11.1/19.9 个百分点），真机双臂 YAM 的 OOD 三任务保持最高成功率，并能从人类演示组合出机器人数据中从未演示过的技能序列；部署时不生成 CoD 也不做未来预测。"
keywords: ["世界模型", "机器人学习", "多模态大模型"]
sources: [{"name": "arXiv 摘要页", "url": "https://arxiv.org/abs/2610.37666v1"}, {"name": "arXiv HTML 全文", "url": "https://arxiv.org/html/2610.37666v1"}, {"name": "arXiv PDF", "url": "https://arxiv.org/pdf/2610.37666v1"}, {"name": "Hugging Face 论文页", "url": "https://huggingface.co/papers/2610.37666"}, {"name": "官方项目页", "url": "https://thinkworld-project.github.io/"}]
previewImage: "/daily/2026-10-29/assets/arxiv--2610.37666/preview.png"
---

## 研究问题与贡献

一句话结论：ThinkWorld 把"动作思考"表示为跨本体共享的 Chain-of-Dynamics（CoD）离散运动 token 序列，并用"想象未来与观察未来的一致性"作为强化学习奖励，让无动作标注的人类视频也能直接监督机器人动作推理，实现人类到机器人的技能迁移与更强的 OOD 泛化。

VLA 模型受限于动作标注演示数据的覆盖面；人类视频经验广得多却缺动作标签。本文（高丽大学、台大等合作）的方案是让动作推理扎根于世界动态：CoD 描述从当前世界到未来状态之间的中间动态，成为人与机器人共用的动作语言。

## 方法与系统

CoD：把机器人动作与带标注的人手轨迹统一映射为归一化增量末端位姿表示，用 FAST 风格运动 tokenizer 离散化为共享词表，VLM 自回归生成 CoD。未来想象：在 CoD 后接可学习的未来 query，轻量解码器输出未来视觉表征；目标在冻结 DINOv3 特征空间中取自真实未来帧，避免像素级重建。训练两阶段：SFT 联合 CoD 生成与未来预测损失；RL 阶段对同一视觉上下文采样多个候选 CoD（K=4），用运动增强的特征相似度（对变化大的区域加权）作为世界想象奖励，以 GRPO 归一化更新 VLM，同时回放保持运动接地；部署时既不生成 CoD 也不做未来预测，连续控制由动作专家使用被塑造的表征完成。实现为 Qwen3-VL-2B 主干+MolmoAct2 动作专家，SFT/RL 分别用 128/64 块 H100。

## 实验设置与数据

预训练语料：人类第一视角 EgoDex、EgoVerse，机器人演示 MolmoAct2-DROID/BimanualYAM、Bridge/RT-1、BC-Z、RoboCOIN，辅以 VQA 数据防遗忘。本体后训练：ThinkWorld-LIBERO（标准 LIBERO 训练集）与 ThinkWorld-YAM（双臂 YAM 平台，一个顶视+双腕三相机，纯 RGB）。真机评估三项任务（杯子上挂、颜色匹配、物体分拣）各含 6+ 物体配置、ID/OOD 各多设置、每设置 5 次试验；仿真评估 LIBERO 与 LIBERO-PRO（无扰动暴露直接评测）。

## 结果、限制与结论

论文报告值：LIBERO 平均成功率 97.3%，LIBERO-PRO 平均 55.6%，其中任务漂移 31.9%、环境漂移 60.9%，分别超过 VLA-JEPA 11.1 与 19.9 个百分点。真机 ID 各方法接近，OOD（新颜色/新类别/未见轨迹）下 ThinkWorld 保持最高成功率，优于 MolmoAct2 与 LaWAM。技能组合实验：只给原子技能（开、关、左放、右放）的机器人演示加一段人类完整任务视频，模型即可在单次 rollout 中组合执行从未在机器人数据中演示过的完整序列。

### 限制与结论

结论：把动作思考扎根于其引起的世界变化，可从人机混合经验学到可迁移的推理空间。原文未单列局限章节；评估以 5 次试验/设置的小样本为主，奖励依赖 DINO 特征一致性而非物理正确性，跨本体迁移以末端位姿空间为界，这些是组内复现评估时需要确认的边界。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2610.37666v1)
- [arXiv HTML 全文](https://arxiv.org/html/2610.37666v1)
- [项目页](https://thinkworld-project.github.io/)
- [Hugging Face 论文页](https://huggingface.co/papers/2610.37666)
