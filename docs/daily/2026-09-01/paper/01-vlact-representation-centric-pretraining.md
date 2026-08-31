---
candidateId: "arxiv--2608.27550"
date: "2026-09-01"
category: Paper
title: "Beyond Data Scaling: Representation-Centric Continued Pre-training for Vision-Language-Action Models"
authors: ["arxiv.org", "huggingface.co", "starvla.github.io"]
summary: "VLAct 提出以表示为中心的 VLA 继续预训练：在固定机器人数据预算下，通过浅层冻结+caption 混合保留 VLM 先验、OFT/PI/GR00T 多连续头共监督避免头特定坍缩、部分统一跨本体动作空间与 wrap-aware 损失对齐动作语义，把有限轨迹转化为可迁移骨干表示。论文报告 LIBERO-Plus 82.6%、RoboTwin 2.0 Base 最强、RoboDojo 成功率第 6，并在未见过的人形 GR-1 上仅用 20% 下游数据超过全量 GR00T-N1.6；全部使用开源数据与 16 GPU。"
keywords: ["视觉-语言-动作模型", "机器人基础模型", "机器人操作"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.27550v1"}
  - {"name": "huggingface.co", "url": "https://huggingface.co/papers/2608.27550"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.27550v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.27550"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.27550"}
  - {"name": "starvla.github.io", "url": "https://starvla.github.io/VLAct"}
previewImage: "/daily/2026-09-01/assets/arxiv--2608.27550/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 84
scoreScale: "paper-v2"
emphasis: true
---

# Beyond Data Scaling: Representation-Centric Continued Pre-training for Vision-Language-Action Models

**一句话结论**：论文提出 VLAct——一个以“表示为中心”的 VLA 继续预训练方案，在固定机器人数据预算下通过保护 VLM 先验、多连续动作头共监督和部分统一的跨本体动作空间，把有限轨迹转化为可迁移的视觉-动作表示；论文报告其在 LIBERO-Plus（82.6%）、RoboTwin 2.0（92.5%）等基准上超过多个工业级 VLA 系统，且仅用 16 张 GPU 和全开源数据完成。

## 研究问题与贡献

VLA（Vision-Language-Action）模型自然继承了“扩大数据规模”的范式，但机器人轨迹无法像网页图文那样从网络抓取：它们来自物理世界中的具身执行，采集昂贵，且物理交互空间（场景、物体、任务、本体、接触动力学）是组合式、连续的，任何机器人数据集都只是该空间的稀疏采样。论文据此提出核心问题：**在固定的机器人数据预算下，VLA 继续预训练如何学到能泛化到训练轨迹之外的强表示？**

这与本组核心方向直接相关：机械臂 VLA、机器人基础模型、跨本体泛化与具身数据基础设施。论文的主要贡献（按论文表述）：

1. **问题重述**：把 VLA 继续预训练从“大规模动作拟合”重新定义为“把轨迹蒸馏为骨干网络中可复用的视觉-动作知识”，主张预训练配方（recipe）是独立于数据规模的 VLA 进步轴。
2. **Pilot 实验揭示的两个失败模式**（固定 Qwen3-VL-4B 骨干、只换动作头）：离散 FAST token 监督可跨头迁移但因离散化丢失细粒度时序/幅值信息；单一连续头（如 OFT）监督会导致“头特定的表示坍缩”——骨干特征几何向预训练头倾斜，换用 PI/GR00T 头时性能显著下降，说明同头高分高估了骨干可复用性。
3. **VLAct 方案**：面向 VLA 的 VLM 骨干继续预训练配方，由三个仅用于预训练阶段的设计组成（见下一节），微调时丢弃预训练头、重新初始化任务头。
4. **可验证的结果主张**：论文报告 VLAct 在 LIBERO-Plus 达 82.6%（超最强自研基线 Qwen3VL-OFT 7.6 个点、超阿里 ABot-M0 2.1 个点），RoboTwin 2.0 Base 设定最强、Data Scaling 设定有竞争力，RoboDojo 官方榜单（2026-08-24 快照）35 个策略中成功率第 6、平均分第 8，并在未见过的 GR-1 人形本体上仅用 20% 下游数据即超过全量数据的 GR00T-N1.6 基线。

## 方法与系统

VLAct 从已预训练的 VLM（Qwen3-VL-4B）出发，在任务微调之前于多本体机器人轨迹上做继续预训练，基于 StarVLA 训练代码库构建。三个核心设计都只作用于预训练阶段，用于塑造骨干表示：

1. **保留 VLM 先验（prior preservation）**：继续预训练时冻结整个视觉编码器和 LLM 的下半层，只更新上层 LLM 与动作头，保护低层视觉处理和早期视觉-语言对齐特征（论文报告该冻结策略在 LIBERO-Plus 上带来 +3.7%、在 Agilex 上 +3.4%）；同时在训练中混入 caption 数据，用稠密的物体/属性/空间关系监督锚定可训练层，作者消融发现 caption 类数据比其它 VLM 数据混合更能稳住下游性能。

2. **多连续动作头共监督（multi-head co-supervision）**：在同一骨干的共享 latent z 上并行挂 OFT、PI、GR00T 三个代表性连续动作头，对同一真值动作 chunk 分别计算损失并求和（L_action = L_OFT + L_PI + L_GR00T）。由于三个头的解码几何和归纳偏置不同，骨干无法只按某一个头的方式组织动作信息，从而避免头特定坍缩；作者称该设计既提升跨头迁移，也在同头微调下优于单头预训练。多头只增加轻量的头特定计算，不重复骨干前向。

3. **部分统一的跨本体动作空间 + wrap-aware 损失**：对比“每本体私有头”和“朴素全统一空间（padding 到公共维度）”两种做法，VLAct 采用单一共享头、仅沿物理可比的维度统一动作空间——夹爪开/合维度跨本体共享，运动学不兼容的手臂维度保持本体特定并在不活跃时 mask。对周期性关节角采用 wrap-aware 损失（残差按 360° 取模），避免把 179° 与 -179° 当作相差 358°。

**微调协议**：下游微调时丢弃三个预训练头与 caption 流，重新初始化任务特定的连续动作头，并严格沿用各基线的下游数据、优化器与训练预算；论文强调所有对比中唯一变化的是骨干权重，因此 7.6–21.4 个点的提升可归因于骨干表示本身。

## 实验设置与数据

- **预训练数据**：全开源机器人数据集 DROID、InternA1、RoboCoin、MolmoAct，外加 caption 数据；数据清洗细节在附录。预训练本体只覆盖 Franka 单臂与 AgileX 双臂；GR-1 人形与 ARX X5 平台在预训练中完全留出。
- **训练资源**：骨干 Qwen3-VL-4B，全部实验在 16 张 GPU 上完成；真机微调为每个模型 50k 步、8 张 H800。作者承诺开源训练脚本与模型权重（截至本文成稿，仓库可见性未由 track 独立核验）。
- **仿真基准与协议**：
  - *LIBERO-Plus*（单臂 Franka 鲁棒性）：相机视角、机器人状态、视觉噪声、物体布局、指令扰动等 7 个轴；与 π0、π0.5、ABot-M0、OpenVLA-OFT 等比较，基线数字取自 LIBERO-Plus 原论文。
  - *RoboTwin 2.0*（双臂 AgileX）：Base（每任务 50 条干净轨迹）与 Data Scaling（再加 500 条官方域随机化专家轨迹）两个设定，Clean/Random 两种评测条件，50 任务 × 每任务 100 episode；对手包括 LingBot-VLA、InternVLA-A1、Being-H0.7、Motus、Fast-WAM、HoloBrain-0 等。
  - *RoboDojo*（ARX X5，42 任务）：泛化/精度/长程/记忆/开放五类，每任务 50 episode，使用 2026-08-24 官方榜单快照。
  - *RoboCasa-GR1*（未见过的 GR-1 人形）：固定下游协议，按 20%/50%/100% 下游轨迹比例做数据效率曲线。
- **真机实验**：Franka Research 3 七自由度臂，四类任务（ID 短程、ID 长程、双臂协调、OOD 泛化），每任务 10 次试验计成功率，对照为未做继续预训练的 Qwen3VL-4B-OFT。

## 结果、限制与结论

以下数字均为**论文报告值**，本 track 通读全文核对但未独立复现：

- **LIBERO-Plus**：VLAct 总分 82.6%，为表中最好；比 Qwen3VL-OFT（75.0%）高 7.6 点，比 ABot-M0（80.5%）高 2.1 点；在 Camera、Robot、Noise、Layout 轴提升最大，作者据此认为表示中心的预训练带来更鲁棒的视觉-空间表示。
- **RoboTwin 2.0**：Base 设定 VLAct-OFT Clean 80.5% / Random 41.5%，为比较方法中最强；Data Scaling 设定 Clean 92.5% / Random 90.8%，论文表述为与 Fast-WAM（91.9/91.8）、HoloBrain-0（91.9/92.3）接近但不声称绝对 SOTA。三个头（OFT/GR00T/PI）差距在 3.4 点内，支持“迁移的是骨干而非头”的主张。
- **真机**：单臂短程 ID 92.5% vs 基线 77.5%；OOD 新物体两项各 90.0%（基线 73.3%/65.0%）；长程任务加权分明显更高（如 scoop beans 80.0% vs 33.3%）；双臂协调平均 72.0% vs 44.0%，尽管预训练只用单臂数据。
- **跨本体**：RoboCasa-GR1 全量数据 54.0%（Qwen3VL-OFT 48.8%、GR00T-N1.6 47.6%、π0.5 37.0%）；仅用 20% 下游轨迹即达 49.5%，论文称超过全量数据 GR00T-N1.6。RoboDojo 榜单平均 10.66 分 / 成功率 7.60%，成功率第 6、超过全部 4 个指定 WAM 条目，也超过 Xiaomi-Robotics-0、LingBot-VLA、ABot-M0 等工业系统。
- **论文自承认的限制与证据缺口**：RoboDojo 上 Memory 类任务明显是短板（0.66 分）；榜单未按训练算力归一化；RoboTwin Data Scaling 各方法的训练算力、checkpoint 选择流程可能不同；真机每任务仅 10 次试验，统计强度有限；论文中主文消融表仍以附录形式给出，部分消融（caption 混合、wrap 损失等）只报告了附录引用而未在主文展开。
- **track 分析**：该工作把“预训练配方”从数据规模中分离为独立变量，论证链条（pilot 失败模式 → 三个对应设计 → 固定协议对比）清晰，且跨仿真、真机、跨本体三层证据一致；对本组的启示是：在数据预算受限时，骨干表示设计（先验保护、头多样性监督、动作空间对齐）可能比继续堆数据更具杠杆；但 20% 数据超过全量 GR00T-N1.6 的单点结论依赖单一基准与论文自报数字，外推到其它本体/任务前值得复现。

## 来源链接

- 论文（arXiv 摘要页）：https://arxiv.org/abs/2608.27550v1
- 论文 PDF：https://arxiv.org/pdf/2608.27550v1
- 项目主页（作者提供，HF 记录）：https://starvla.github.io/VLAct
- Hugging Face Papers 页面：https://huggingface.co/papers/2608.27550
- RoboDojo 官方榜单（论文引用）：https://robodojo-benchmark.com/leaderboard
