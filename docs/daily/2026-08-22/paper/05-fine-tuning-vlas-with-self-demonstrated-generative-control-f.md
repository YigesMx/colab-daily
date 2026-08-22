---
candidateId: "paper--arxiv--2608.19490"
businessCandidateId: "paper--arxiv--2608.19490"
date: "2026-08-22"
category: "Paper"
title: "Fine-Tuning VLAs with Self-Demonstrated Generative Control for Multi-Task Manipulation"
authors: ["arxiv.org"]
summary: "UIUC 团队针对 π0.5 类 VLA 换机部署时的本体差异与微调遗忘问题，提出用冻结零样本 VLA 在目标机器人上的在线 rollout 作为自监督排练数据，与少量专家演示 1:1 混合微调。真机 ALOHA 与 RoboTwin 仿真显示：该方案在学会新技能的同时保留指令跟随与既有行为先验，且自演示效果接近重新采集专家数据的 oracle。"
provisionalKeywords: ["VLA 模型", "机器人学习"]
keywords: ["VLA 模型", "机器人学习"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.19490"}, {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.19490v1"}]
previewImage: "/daily/2026-08-22/assets/paper--arxiv--2608.19490/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 5
groupScore: 81
scoreScale: "paper-v2"
emphasis: false
---
# Self-Demonstrated Generative Control：用零样本 VLA 的自我演示微调多任务操作策略

## 研究问题与贡献

预训练 VLA 换到相机、夹爪略有差异的新机器人时往往抓取失败；用新本体的专家演示微调虽能恢复细粒度控制，却会侵蚀原有指令跟随与行为先验。本文提出在目标机器人上 rollout 冻结的零样本 VLA，用其自身预测动作作为“自演示”排练数据，与少量专家数据联合微调，使策略同时继承先验任务、保持通用指令跟随并以更高样本效率学习新技能。

## 方法与系统

基线为连续动作分块 VLA（π0.5 类，含 VLM 骨干与流匹配动作专家）。训练目标是 FAST 离散动作 token 交叉熵与连续动作条件流匹配的加权组合。自演示阶段在预训练任务族内的一组指令上 rollout 冻结基线策略，记录每步观测与教师动作，形成无域差距的排练数据集；微调时以 1:1 均匀采样混合专家与自演示数据，并过滤明显异常的自演示轨迹。

## 实验设置与数据

在真实 ALOHA 平台评估专家任务、自监督任务与 held-out 任务（含新物体与随机布局），并贡献 RoboTwin 仿真基准与协议，测试新旧任务保持与组合泛化；对照包括专家-only、oracle 重采专家数据、LoRA/选择性冻结等消融。

## 结果、限制与结论

论文报告：专家-only 微调单一“拿起绿色方块”任务会使放置行为成功率降为 0，并出现视觉-动作捷径学习；混合自演示后在保留抓取能力的同时恢复指令跟随，自演示效果接近重新采集专家数据的 oracle；held-out 推物体技能族保持约 60% 表现；仿真中朴素微调使旧任务从 90.8% 严重退化，联合训练显著缓解遗忘。限制是自演示依赖基线策略在新本体上的可用语义相关性，且需人工过滤失败 rollout；超大任务族的扩展未验证。对部署者的启示：预训练 VLA 不只是初始化，还可作为目标机器人上的数据生成器。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.19490>
- Hugging Face：<https://huggingface.co/papers/2608.19490>
