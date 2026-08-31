---
candidateId: "arxiv--2608.27549"
date: "2026-09-01"
category: Paper
title: "Code as Worlds: Agentic Discovery of Executable World Representations for Physical Reasoning"
authors: ["arxiv.org", "github.com", "huggingface.co"]
summary: "MirroS 技术报告提出 Code-as-World 范式：用可执行代码表示物理世界的组成、动态演化与视觉外观，并通过溯因式 agentic 发现循环（提出—实例化—执行—渲染—验证）从文本或真实视频中恢复该表示。论文报告以此构造的物理监督训练的 Code-as-World-VL 在 QuantiPhy 定量物理推理上达到 SOTA，9B 变体平均 MRA 55.4 超过 Gemini-3.1-Flash 的 54.8。该范式为世界模型与具身数据基础设施提供了可查询、可干预、可验证的代码化世界表示。"
keywords: ["世界模型", "强化学习", "具身智能基础设施"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.27549v1"}
  - {"name": "huggingface.co", "url": "https://huggingface.co/papers/2608.27549"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.27549v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.27549"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.27549"}
  - {"name": "mirros-lab.github.io", "url": "https://mirros-lab.github.io/code-as-world"}
  - {"name": "github.com", "url": "https://github.com/mirros-lab/code-as-world"}
  - {"name": "mirros.ai", "url": "https://mirros.ai/blog/representing-physical-world"}
previewImage: "/daily/2026-09-01/assets/arxiv--2608.27549/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 8
groupScore: 71
scoreScale: "paper-v2"
---

# Code as Worlds: Agentic Discovery of Executable World Representations for Physical Reasoning

一句话结论：MirroS 技术报告提出 Code-as-World 范式——用可执行代码表示物理世界的组成、动力学与外观，并通过"提出—实例化—执行—渲染—验证"的 agentic 发现循环从文本或真实视频中恢复这种表示；论文报告称以此为物理监督训练的 Code-as-World-VL 在 QuantiPhy 定量物理推理基准上达到 SOTA，9B 模型超过 Gemini-3.1-Flash。

## 研究问题与贡献

物理智能的核心是泛化：在一个场景中获得的物理知识应当在物体、配置或观察方式变化后仍然有效。作者指出现有世界表示各有缺口——像素级视频预测不区分观察变化的底层原因（相机运动还是物体运动），3D 重建保存信息但不揭示物理机制，自然语言描述紧凑却无法精确表达连续、定量的物理状态。这构成论文所称的"现象—机制二分"：VLM 能描述发生了什么，却缺乏对物体状态、物理参数与支配动力学等机制的显式表示。

论文的主要贡献（作者声称）：

1. **可执行世界表示（Executable World Representation, EWR）**：提出 Code-as-World 范式，把任务相关的物理世界表示为可执行代码，统一描述物理组成、动态演化与视觉外观，兼具紧凑性、定量基础与可控性。
2. **Agentic 发现循环**：把世界表示构建表述为溯因（abductive）发现而非一次性预测，设计了"propose–instantiate–execute–render–verify"迭代循环，从自然语言描述或真实视频中搜索与证据一致且尽量简洁的可执行世界假设。
3. **面向 VLM 的物理监督**：用验证后的可执行世界为定量物理推理（尺寸、位移、速度、加速度等可测量量）提供可扩展监督，训练出 Code-as-World-VL 系列模型，论文报告其在 QuantiPhy 上达到 SOTA 并超过领先的闭源模型。

该工作与组内世界模型、具身基础设施方向直接相关：它把"世界模型"显式化为可查询、可干预、可验证的代码对象，并展示了其在物理数据生成与监督信号构造上的用途。

## 方法与系统

**表示形式**：一个 EWR 记为 $p=(\mathcal C,\mathcal E,\mathcal A)$。$\mathcal C$（物理组成）描述场景中的物体、几何、度量尺寸、质量、摩擦、重力等稳定属性，地板、桌面等环境结构也作为可参与支撑/碰撞的物理实体表示；$\mathcal E$（动态演化）描述物体初始状态、随时间变化、关键事件与仿真时长，可展开为完整状态轨迹；$\mathcal A$（视觉外观）描述相机参数、背景、材质、光照、帧率、分辨率与渲染配置，只决定物理轨迹如何被观察而不改变物理过程。各组件可独立检查、修改与执行。

**Agentic 发现循环**：给定多模态证据（文本或真实视频），agent 先经模态特定适配器构造证据——文本路径提取实体、空间关系、物理事件与预期结果作为语义证据；视频路径用 SAM3 提取实例掩码与图像平面轨迹、VGGT-Omega 估计深度与相机几何、SAM3D 为每个物体生成 mesh，组装视觉证据。随后进入共享迭代循环：agent 提出/更新 EWR，编译为仿真器可执行参数，仿真产生完整状态轨迹，渲染并投影回输入视角（RGB、深度、掩码、轨迹），在关键帧上与证据对比，差异聚合为结构化反馈用于下一轮局部修订；接受则返回该 EWR，预算（$K=5$）耗尽则拒绝。论文报告在匹配评估预算下，该循环在 Visual Alignment、Object IoU、Traj-ADE、Accuracy@2%D 等指标上优于 Best-of-5 独立采样。

**仿真与渲染**：实现基于 MuJoCo 平台，支持两个可互换执行引擎——动画引擎（按时间变化的位姿/轨迹做运动学描述）与物理引擎（由力、接触、约束推导运动）。仿真渲染后经 Wan2.2-VACE 与一个内部视频生成模型做真实感重渲染（sim-to-real），在保持物理轨迹的前提下丰富物体、材质、背景与光照。

**下游训练（两阶段课程）**：第一阶段用 RefCOCO/RefCOCO+/RefCOCOg/RefCLEF 的包围盒与 GOT-10K 的稠密轨迹构造像素级定量问答，SFT 建立图像空间测量能力；第二阶段从文本驱动与视频驱动两类可执行世界中采样同步视频与物理状态轨迹，生成带精确世界空间标签的 VQA，用 GRPO 强化学习训练，奖励为尺度归一化数值精度 $\exp(-|\hat y-y|/(|y|+\epsilon))$ 加单位正确性与格式辅助奖励。训练使用 8 张 NVIDIA H100；推理与训练统一从每个视频采样 16 帧。

## 实验设置与数据

- **世界构建评估**：视频驱动重建取自 WISA-80K，经面向运动的过滤（保留显著刚体运动/碰撞片段，剔除相机大幅运动、物体运动不足、剪辑严重或物理事件不完整的视频）并人工复核；指标为 Visual Alignment、Object IoU、Traj-ADE、Velocity-ADE、Accuracy@2%D（距离按帧对角线 $D$ 归一化），对比 one-shot 与 Best-of-5。
- **图像空间测量**：RefCOCO、RefCOCO+、RefCOCOg、RefCLEF 四个指代表达数据集（物体尺寸）与 GOT-10K（尺寸与运动量），指标为 MRA（Mean Relative Accuracy）。
- **定量物理推理**：开源 QuantiPhy-validation 集，按官方协议报告 2S、2D、3S、3D 子集与宏平均 MRA；对比 Gemini-3.1-Flash、ChatGPT-5.1、Gemini-2.5 Pro、Grok 4.1 等闭源模型与 Qwen3-VL、InternVL-3.5 等开源模型。
- **模型变体**：Code-as-World-VL-4B 与 9B（直接作答），以及 27B（Reasoning，先输出推理链再作答）。论文未在正文中明确说明各变体初始化的具体基座模型名称。

## 结果、限制与结论

论文报告的主要结果（QuantiPhy-validation 平均 MRA）：Code-as-World-VL-4B 50.6、9B 55.4、27B（Reasoning）58.6；最强闭源基线 Gemini-3.1-Flash 为 54.8，ChatGPT-5.1 48.4，最强开源基线 Qwen3-VL-32B-Instruct 为 40.2。即 9B 直接作答变体已超过参数量未公开但更大的 Gemini-3.1-Flash，4B 变体亦超过全部评估的开源模型。图像空间评测上，完整模型相对仅经第一阶段的 Image-Space 变体在全部基准上进一步提升。可控重仿真案例显示修改物理量（如保龄球初速度方向）或相机配置后可生成物理一致的反事实视频。

作者明确承认的限制：当前实现主要覆盖刚体动力学，真实世界物理条件超出仿真器建模范围时，发现循环可能收敛到局部合理但机制上不准确的 EWR；QuantiPhy 只评估单目尺度校准下有限物理子集（尺寸、位移、速度、加速度），不含流体、形变、摩擦、长时多物体交互等；Code-as-World-VL 只从发现循环的"结果"学习，未将假设构造、仿真与修订过程内化；27B 结果中模型规模与作答协议同时变化，作者将其视为框架可扩展性的证据而非推理本身的受控估计。此外，视频驱动重建依赖 SAM3/VGGT-Omega/SAM3D 等外部工具链的质量，真实感重渲染依赖内部视频生成模型，这些组件的可复现性原文未完整报告。

对组内的启示：该工作把世界模型从隐式潜变量拉回到可读、可执行、可验证的代码对象，为"世界模型 + 仿真监督"路线提供了具体工程范式；其发现循环产出的验证世界可直接作为物理数据基础设施（数据生成、可验证奖励构造），与具身智能数据与评测方向高度相关。

## 来源链接

- 论文（arXiv）：https://arxiv.org/abs/2608.27549v1
- PDF：https://arxiv.org/pdf/2608.27549v1
- 项目主页：https://mirros-lab.github.io/code-as-world
- 官方博客：https://mirros.ai/blog/representing-physical-world
- 代码仓库：https://github.com/mirros-lab/code-as-world
- Hugging Face Papers：https://huggingface.co/papers/2608.27549
