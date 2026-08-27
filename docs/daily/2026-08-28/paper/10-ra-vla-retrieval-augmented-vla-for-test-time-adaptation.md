---
candidateId: "arxiv--2608.25585"
businessCandidateId: "arxiv--2608.25585"
date: "2026-08-28"
category: Paper
title: "RA-VLA: Retrieval-Augmented VLA for Test-Time Adaptation"
authors: ["arxiv.org"]
summary: "RA-VLA用动作轨迹对齐训练行为感知检索器，并以上下文 adherence 损失强制策略利用检索示范，使GR00T N1.5在完全未见任务上通过少量示范无权重更新适配。"
provisionalKeywords: ["机器人推理与学习", "视觉语言动作模型", "跨本体学习", "机器人操作"]
keywords: ["机器人推理与学习", "视觉语言动作模型", "跨本体学习", "机器人操作"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.25585v1"}
previewImage: "/daily/2026-08-28/assets/arxiv--2608.25585/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 10
groupScore: 81
scoreScale: "paper-v2"
emphasis: false
---

# RA-VLA: Retrieval-Augmented VLA for Test-Time Adaptation

## 研究问题与贡献

**RA-VLA: Retrieval-Augmented VLA for Test-Time Adaptation** 的一句话结论是：解决in-context imitation的适配瓶颈需要同时修正“检索什么”和“是否真正使用检索结果”。论文观察到现有ICIL常按表面视觉相似检索，策略又被预训练先验惯性牵引；直接拼接专家片段还会让延迟随片段数增长。RA-VLA贡献包括行为对齐检索、上下文强制执行管线和可缓存的独立编码架构。

## 方法与系统

框架先把长时序示范切成固定horizon功能片段，用冻结VLM离线编码并缓存键值。检索器是两层Transformer，训练时对同任务两条示范的动作序列做DTW对齐，得到行为对应正样本，再用对比学习让仅凭观测与语言的嵌入逼近动作结构相似性。动作头采用GR00T N1.5的flow-matching DiT；每层cross-attention只与一个专家片段配对，相关片段分配到高层做细化，避免输入序列随K线性膨胀。contextual adherence损失比较相关与随机上下文下的动作回归误差，要求相关误差至少低出margin；噪声动作初始值改为检索专家动作均值，给denoising提供行为先验。

## 实验设置与数据

LIBERO四个套件做严格留一套评测，训练三套、留一套；每任务50条专家示范，held-out任务缓冲3条，评测50次。真实UR5e有叠箱、扔垃圾、关抽屉与踩踏板四任务，每任务30条GELLO遥操作示范；leave-one-out评测时每任务4条专家示范，每任务12次。所有方法统一GR00t N1.5、双视角RGB、action horizon 16与4次去噪，默认检索1个片段。基线包括vanilla VLA、RAEA和RICL的生成/检索加权两种变体。

## 结果、限制与结论

LIBERO完全未见任务上，RA-VLA平均38.45%，动作感知检索的RICL-R为20.85%，vanilla为1.70%；Object 55.6%、Goal 53.2%，但Long仅13.0%。真实UR5e平均成功率56.25%，RICL-R为35.42%，vanilla为8.33%；叠箱、扔垃圾、关抽屉、踩踏板整体成功分别为41.7%、75.0%、66.7%、41.7%。上下文敏感性从无adherence损失的0.0353升至0.3639，对应Goal成功率从9.8%升至53.2%。由于专家片段独立预编码，推理延迟随K近似常数；缓冲从1到4时Goal从48.2%升至55.2%。限制：缓冲质量与多样性决定上限，存在被注入恶意或错误示范的风险；OOD绝对成功率仍低且对超参敏感；实验限于GR00t N1.5/flow-matching和较受控任务。未知项：跨本体、非流匹配架构、更大规模训练和无缓冲安全过滤未验证。

## 来源链接

- [arXiv论文](https://arxiv.org/abs/2608.25585v1)
