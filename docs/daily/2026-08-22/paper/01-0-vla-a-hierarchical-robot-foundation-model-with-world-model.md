---
candidateId: "paper--arxiv--2608.16885"
businessCandidateId: "paper--arxiv--2608.16885"
date: "2026-08-22"
category: "Paper"
title: "τ0-VLA: a Hierarchical Robot Foundation Model with World-Model-Guided Test-Time Computation"
authors: ["huggingface.co"]
summary: "上海创新研究院、Agibot Finch 与港中文提出分层机器人基础模型 τ0-VLA：高层策略用世界模型引导的测试时搜索改进子任务决策，低层策略在 40115 小时多本体真机数据上以掩码流匹配训练。四个长程家务任务上，分层系统平均成功率 45%，明显高于 π0.5 的 22.5%。"
provisionalKeywords: ["VLA 模型", "机器人操作", "世界模型"]
keywords: ["VLA 模型", "机器人操作", "世界模型"]
sources: [{"name": "huggingface.co", "url": "https://huggingface.co/papers/2608.16885"}, {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.16885"}, {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.16885"}]
previewImage: "/daily/2026-08-22/assets/paper--arxiv--2608.16885/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 88
scoreScale: "paper-v2"
emphasis: true
---
# τ0-VLA：世界模型引导测试时计算的分层机器人基础模型

## 研究问题与贡献

长程机器人操作要求模型既能可靠执行单个技能，又能在扩展任务中保持子任务序列的一致性。多数分层 VLA 在每个决策点只做一次前向计算，难以为困难或后果重大的选择分配更多推理资源。τ0-VLA 的贡献是把高层子任务生成定义为一个可按预算扩展的测试时推理问题，并用执行记忆和世界模型引导的搜索来改进决策；低层策略则跨固定基座、移动与双臂本体执行动作生成。

## 方法与系统

系统由高层与低层策略组成。高层策略包含提案模型、世界模型、价值模型与反思模型：提案模型更新执行记忆并给出直接子任务提案；自适应路由在低置信时触发测试时搜索。搜索对候选子任务序列做束搜索，用世界模型预测候选执行后的头部相机终态图像，价值模型以五级质量评分评估该结果，最终由反思模型综合保留分支与真实观测上下文生成当前子任务。低层策略用视觉语言骨干加 Mixture-of-Transformers 动作专家，把异构本体映射到共享 40 维状态/动作空间，并用掩码流匹配只监督有效动作通道。训练上，低层在 40115 小时真机数据与多模态数据上做知识隔离联合训练、端到端联合训练与任务适配三阶段；高层各模型从机器人预训练 VLM 初始化，世界模型以子任务对齐的首末帧监督。

## 实验设置与数据

评测在 AGIBOT G1、ARX AC One 与双臂 Franka Research 3 三类平台进行，覆盖 Clean Room、备菜、番茄炒蛋、奶茶制作等长程任务及较短的收衣、整理化妆台任务。主表每任务 10 次独立真机试验，报告成功率与里程碑进度；测试时计算实验在开环子任务预测与闭环真机执行两种设置下评估，并与 GR00T N1.7、LingBot-VLA、π0.5 对比。

## 结果、限制与结论

论文报告：分层系统在四个长程任务上平均成功率 45%、平均进度 87.85%，高于 π0.5 的 22.5%/73.05%；测试时搜索在分布外图书整理任务上把子任务预测准确率从 50.0%（Plan Once）提高到 74.0%，并提升闭环成功率与进度。限制方面，长程任务绝对成功率仍低（番茄炒蛋仅靠分层达到 4/10），接触密集的最终操作（盖杯盖、插吸管）仍是瓶颈；作者未报告搜索延迟对整体执行节拍的影响细节。整体上，该工作展示了把测试时计算引入 VLA 高层决策的可行路径。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.16885>
- 项目页：<https://tau0-vla.github.io/>
- Hugging Face：<https://huggingface.co/papers/2608.16885>
