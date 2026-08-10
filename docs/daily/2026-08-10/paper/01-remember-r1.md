---
schemaVersion: 2
candidateId: "arxiv--2608.01314"
date: "2026-08-10"
title: "Remember-R1：用过程奖励缓解长链多模态推理中的视觉遗忘"
authors:
  - "Jianmin Chen"
  - "Jiaqi Tang"
  - "Wei Wei"
  - "Xiaogang Xu"
  - "Jiafei Wu"
  - "Zhe Liu"
  - "Qianzhou Wang"
  - "Yingying Yan"
  - "Botong Geng"
  - "Yuyang Xia"
  - "Lei Zhang"
  - "Qifeng Chen"
summary: "Remember-R1 在不改变推理阶段流程的前提下，直接对原始多模态推理轨迹施加视觉词汇、视觉记忆和关键区域三类过程奖励；论文在两个 Qwen2.5-VL 规模和七个基准上报告了持续改进，并用注意力与消融分析支持其缓解视觉遗忘的机制解释。"
keywords:
  - "视觉遗忘"
  - "多模态长链推理"
  - "过程奖励"
  - "视觉注意力"
  - "视觉证据标注"
category: "Paper"
ratingTrack: "paper"
groupRank: 1
groupScore: 72
scoreScale: "paper-v2"
sources:
  - name: "arXiv HTML full article"
    url: "https://arxiv.org/html/2608.01314v1"
  - name: "arXiv TeX source"
    url: "https://arxiv.org/src/2608.01314v1"
  - name: "arXiv abstract record"
    url: "https://arxiv.org/abs/2608.01314"
previewImage: "/daily/2026-08-10/assets/arxiv--2608.01314/preview.png"
---

## 研究问题与贡献

多模态大模型在长链推理中会逐渐减少对图像证据的依赖，后续 token 更容易被已经生成的文字推动。论文把这种早期仍能读取图像、随后却偏离视觉事实的现象称为长上下文视觉遗忘。已有方法通常在推理时重新引入图像或插入视觉声明代理，前者增加计算与显存开销，后者的监督落在额外交互而非原始回答轨迹上。

Remember-R1 的核心贡献是把过程级视觉监督直接施加到目标 rollout，同时保持推理流程不变。作者将持续视觉依赖拆成三项互补目标：覆盖已标注的视觉词汇、抑制生成后段的视觉注意力衰减、把视觉注意力集中到与问题相关的区域。论文在两个模型规模、七个基准上验证该设计，并通过注意力曲线、定性样例和消融实验检查改进是否与视觉证据保持有关。

## 方法与系统

训练数据基于 ViRL39K。作者用 Qwen-VL-Max 为每个图像抽取物体、属性、数量和短空间关系等视觉关键词，并结合图像、问题和答案标注关键区域框；答案只参与一次性外部标注，不提供给策略模型。经过人工删除无依据词、修正框和过滤歧义样本后，得到 38,657 个带视觉关键词和关键区域框的训练样本。

总奖励由答案正确性与三项过程奖励相加。视觉词汇奖励对回答中的严格词组匹配计分，并按最后出现位置加权，使更广的证据覆盖和更晚的视觉事实引用得到更高回报；论文明确不做同义词扩展。视觉记忆奖励从最后一层注意力提取每一步指向视觉 token 的质量，比较首尾窗口均值，惩罚后段显著衰减。视觉关键区域奖励把标注框映射到视觉 patch token，计算关键区域注意力占全部视觉注意力的比例，并对后续生成步骤赋更高权重。策略优化使用 GRPO，以组内标准化奖励形成优势、采用 clipped surrogate，并加入相对参考策略的 KL 正则。

这一设计监督的是原始推理轨迹，而不是在推理中重新送入图像。它因此不增加部署时的视觉重编码步骤，但训练需要访问模型注意力并依赖额外的关键词、区域标注与人工校验流程。

## 实验设置与数据

作者分别以 Qwen2.5-VL-3B 和 Qwen2.5-VL-7B 为基础模型，在增强后的 ViRL39K 上训练。所有训练实验使用 8 张 NVIDIA L20 GPU，学习率为 1e-5，GRPO group size 为 8，两个规模采用相同超参数。

评估覆盖七个基准。数学与逻辑推理组包括 MathVision、MathVista、LogicVista；综合多模态能力组包括 MMVet、MMMB、MMStar；视觉感知组使用 RealWorldQA。对比对象涵盖通用 MLLM、推理型 MLLM，以及 DeepSketcher-7B、TVC-7B 等视觉遗忘缓解方法。论文还比较了仅使用答案正确奖励的 GRPO 版本，并逐一移除视觉词汇、视觉记忆和关键区域奖励。

## 结果、限制与结论

相对各自的 Qwen2.5-VL 基座，Remember-R1 在两个规模的七项指标上均保持或提升。论文报告 3B/7B 在 MathVision 上分别提高 3.78/3.44 分，在 MathVista 上提高 13.60/7.50 分，在 LogicVista 上提高 2.46/1.79 分。7B 版本在 MathVision、MathVista、LogicVista、MMVet、MMMB、MMStar、RealWorldQA 上的结果依次为 26.64、69.80、49.05、72.37、83.38、64.73、69.67。3B 消融中，完整模型在七项基准上整体最稳定；去掉任一过程奖励都会在多个指标上退化，且完整模型通常优于只用答案奖励的 GRPO。

机制证据包括：LogicVista 与 MMStar 上，基础模型和 Remember-R1 的视觉注意力都会随生成推进而下降，但后者下降更慢，中后段差距更明显；定性样例中，基础模型虚构了不存在的蓝色球体，而 Remember-R1 持续跟踪形状、颜色与空间线索。作者据此认为改进与持续、局部化地使用视觉证据有关，而不只是最终答案监督。

限制也需要保守理解。注意力只是视觉依赖的代理信号，不能完整解释模型因果机制；关键词奖励使用严格匹配，可能鼓励显式复述，且视觉词与区域框来自外部模型并依赖人工校验；实验集中于图像问答和多模态基准，没有机器人、具身交互或真实长期任务评估。论文给出了训练 GPU、学习率和 group size，但正文没有报告完整训练时长、总计算量或推理吞吐对比。因此现有证据支持其在所测基准上缓解视觉遗忘，不能直接外推到具身智能系统。

## 来源链接

- [arXiv HTML 全文](https://arxiv.org/html/2608.01314v1)
- [arXiv TeX 源码](https://arxiv.org/src/2608.01314v1)
- [arXiv 论文记录](https://arxiv.org/abs/2608.01314)
- [作者公开代码](https://github.com/Ch921-cell/Remember-R1)
