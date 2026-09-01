---
candidateId: "arxiv--2608.29749"
date: "2026-09-02"
category: Paper
title: 'DriftingVLA: Native One-Step Vision-Language-Action Generation via Per-Dimension Temporal Drifting'
authors: ["arxiv.org"]
summary: 'DriftingVLA 把预训练 pi_0.5 的流匹配动作接口改为原生单步噪声到动作生成器，并提出按动作通道完整时间轨迹组织漂移几何的 PDTD。动作块延迟从 227.61ms 降到 67.67ms（3.36 倍加速），LIBERO 98.32%、RoboTwin 2.0 81.09%、真机六任务 77.67% 均超过 10-NFE pi_0.5 与单步基线。'
keywords:
  - 视觉-语言-动作模型
  - 机器人操作
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.29749v1"}
previewImage: "/daily/2026-09-02/assets/arxiv--2608.29749/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 5
groupScore: 85
scoreScale: "paper-v2"
emphasis: false
---
# DriftingVLA: Native One-Step Vision-Language-Action Generation via Per-Dimension Temporal Drifting

**一句话结论**：DriftingVLA 把 VLA 的动作生成从"部署时迭代求解流场"改为"训练时分布漂移、部署时一次前向"——保留 $\pi\_{0.5}$ 预训练 VLM 骨干但重新初始化动作专家为直接噪声到动作块的生成器，并提出按每个动作通道的完整时间轨迹独立定义漂移几何的 PDTD，在 LIBERO、RoboTwin 2.0 和六项真机任务上以单次网络评估（1 NFE）超过原始 10-NFE $\pi\_{0.5}$，动作块延迟降低 3.36 倍。

## 研究问题与贡献

论文针对流匹配 VLA（$\pi\_0$、$\pi\_{0.5}$）的部署成本：每个动作块要通过数值积分学到的向量场恢复，需要多次串行评估动作专家，这些重复计算直接落在机器人控制的关键路径上。现有加速路线要么保留迭代生成器只做重叠执行/近期动作优先，要么（如 SnapFlow 蒸馏捷径预测器、MeanFlowVLA 区间平均速度）其单步生成器仍派生自流匹配固有的输运过程。

作者选择另一条路：用分布漂移（Drifting Models/DBPO 一系）把分布精化从推理时样本演化搬到优化时生成器学习——漂移场在训练期指定分布级修正并逐步吸收进生成器参数，部署时单样本单评估。把 DBP 扩展到预训练流式 VLA 有两个耦合难题：一是生成接口适配（动作专家原本特化于局部速度预测，原生漂移需要直接噪声到动作的生成器）；二是分布几何（VLA 预测结构化的时间扩展动作块 $\mathbf{A}\in\mathbb{R}^{H\times D}$，时间轴与动作轴语义不同）。DBP 考虑的 Chunk-wise（整块展平）与 Step-wise（按时间切片）组织各有缺陷：前者保留完整视野但让平移、旋转、夹爪等异构通道共享同一距离尺度（跨通道几何干扰），后者降低组维度但把每条通道的完整时间轨迹切碎到 $H$ 个独立归一化的问题里。

三项贡献：把原生漂移生成扩展到预训练流式 VLA（保留并联合适配多模态骨干、重学流式动作接口为直接条件生成器）；提出 PDTD（Per-Dimension Temporal Drifting），以每通道完整时间轨迹为漂移单元，分离异构通道几何而不分解联合动作生成器；在 LIBERO、RoboTwin 2.0 与六项真机单/双臂任务上完成扩展评测与 VLA 适配、漂移几何、部署效率的受控研究。

## 方法与系统

**直接条件生成**。控制步 $t$ 上部署策略为 $\widehat{\mathbf{A}}\_t=f\_\theta(\mathbf{Z}\_t,\mathbf{c}\_t)$，$\mathbf{Z}\_t\sim\mathcal{N}(0,\mathbf{I})$ 是动作形状的潜在噪声，$f\_\theta$ 输出直接解释为最终动作块。这区别于把常规训练的流策略只用一步欧拉求解：后者只改求解器而保留为局部输运训练的速度估计器；DriftingVLA 改变被学习的函数本身，单步性是训练公式的性质而非推理近似。

**保留预训练表示**。参数分为 $(\theta\_{\mathrm{VLM}},\theta\_{\mathrm{AE}})$：VLM 从预训练 $\pi\_{0.5}$ 初始化并保留，动作专家及其连续动作输入输出投影全新初始化，后训练时两部分联合优化——既不丢掉预训练语义感知先验，也不让新生成器被旧速度场参数化束缚。

**共享上下文兄弟生成**。分布漂移需要训练期从当前条件生成器采多个样本：对每个训练对 $(\mathbf{c}\_i,\mathbf{A}\_i)$ 采 $G$ 个独立潜在块，多模态上下文只编码一次 $\mathbf{P}\_i=E\_{\theta\_{\mathrm{VLM}}}(\mathbf{c}\_i)$，各兄弟仅做动作侧生成 $\widehat{\mathbf{A}}\_i^{(g)}=F\_{\theta\_{\mathrm{AE}}}(\mathbf{Z}\_i^{(g)};\mathbf{P}\_i)$，所有兄弟损失的梯度联合更新 VLM。昂贵上下文每条件算一次，$G$ 增大主要扩展动作侧计算。

**PDTD 几何**。漂移单元为 $\mathcal{G}\_{\mathrm{PDTD}}(\mathbf{A})=\{\mathbf{A}\_{:,d}\}\_{d=1}^{D}$，即每个动作维度的完整 $H$ 步轨迹；Chunk-wise/Step-wise/PDTD 的组维度分别为 $HD$、$D$、$H$。关键区分：PDTD 分解的是漂移几何而非动作生成器——完整动作块先由共享 VLA 联合生成，分组只在其后用于构造训练信号；既不假设也不强制各通道条件分布独立，逐维漂移损失更新的是同一个联合生成器，跨维依赖（协同多轴多关节控制所需）仍可表达。

**逐维漂移目标**。对每个条件 $\mathbf{c}\_i$ 和通道 $d$，参考集含 $G$ 条兄弟轨迹加演示轨迹。每通道先估计独立距离标尺 $s\_d$（由当前生成-参考关系估计），归一化距离反映该通道内的轨迹变异而非整块聚合尺度。由归一化距离构造多尺度吸引-排斥交互：对每条生成轨迹，一个 Softmax 在候选参考上归一化、另一个在竞争兄弟上归一化，二者几何均值的平方根为权重，由带宽 $\rho\in\mathcal{R}$ 控制多尺度；自连接置 $+\infty$ 排除。演示轨迹产生吸引目标、其他兄弟产生排斥目标，合成 detached 目标联合后训练 VLM 与动作专家（仅统计有效时间坐标，填充项排除）。

## 实验设置与数据

仿真：LIBERO 四套件（Spatial/Object/Goal/Long 各 10 任务）每任务 100 episodes；RoboTwin 2.0 全部 50 任务在 Easy（demo_clean）与域随机化 Hard（demo_randomized）两种设置下各 100 episodes。所有模型用 3 个随机种子（42/43/44）训练 50k 步，8×A800 80GB、每卡 batch 4，DriftingVLA 默认 $G=8$。真机：六任务（两单臂 Cylinder to Cup、Bottle in Cup + 四双臂 Block Alignment、Tabletop Cleanup、Liquid Pouring、Block Stacking），平台为两台 UR5、两个腕部 RealSense L515 和一个头部 Orbbec Gemini；每任务 100 条遥操作演示、50k 步、3 种子、每种子每任务 50 次试验（合计每种子 300 次试验），推理在 RTX 3090。对照：10-NFE $\pi\_{0.5}$、$\pi\_{0.5}$-1step（单步欧拉截断诊断对照）、SnapFlow 与 MeanFlowVLA（按发表描述复现），几何研究用 DriftingVLA-Chunk/-Step 替换分组方式；全部用同一 LeRobot $\pi\_{0.5}$ 基础实现、匹配数据与优化预算。

## 结果、限制与结论

**LIBERO**（论文报告值）：DriftingVLA 总体 98.32%，超 10-NFE $\pi\_{0.5}$（97.10%）1.22 点、超最强单步基线 SnapFlow（97.48%）0.84 点；最不饱和的 LIBERO-Long 上 94.33% 对 $\pi\_{0.5}$ 的 92.40% 和 SnapFlow 的 93.07%。单步欧拉截断的 $\pi\_{0.5}$-1step 只有 94.02%——单步推理预算本身解释不了直接生成器的性能。

**RoboTwin 2.0**（论文报告值）：总体 81.09%，超 10-NFE $\pi\_{0.5}$ 1.51 点、SnapFlow 2.56 点；Hard 分割 77.56% 对 76.23%/75.25%。同预算截断下 $\pi\_{0.5}$ 跌至 63.76%（Hard 仅 53.29%）。MeanFlowVLA 在两个基准上都被大幅拉开。

**真机**（论文报告值）：总体 77.67% 对 $\pi\_{0.5}$ 的 74.22%（+3.45），超 SnapFlow 8.23 点、MeanFlowVLA 12.56 点；六任务中五项最佳（T4 Tabletop Cleanup 上 $\pi\_{0.5}$ 76.67% 略高）。单臂子集 86.00%→89.67%（+3.67），双臂子集 68.34%→71.67%（+3.33）——PDTD 分解几何不阻碍双臂协同控制。真机几何对照：Chunk 67.78%、Step 66.11%，PDTD 分别 +9.89/+11.56，Step\<Chunk\<PDTD 排序与仿真一致。观察到的失败模式包括物体定位错误、抓取不稳、滑移、碰撞、错位、放置不稳，双臂任务另有臂分配、顺序、臂间碰撞与协调失败，倒水任务有对齐不准、转移不足、洒出。

**消融**（论文报告值）：几何上 PDTD 超 Chunk-wise 3.04（LIBERO）/6.92（RoboTwin）点，超 Step-wise 5.22/10.66 点，更大基准上优势更明显。VLA 适配上：流预训练动作专家热启动只得 93.33%（新接口全新初始化 98.32%），支持重学生成接口；冻结 VLM 只训动作专家 94.57%，联合后训练再加 3.75 点。

**效率**（论文报告值）：A800 单卡、batch 1、$H=50$ 上，动作块平均延迟 227.61ms→67.67ms（3.36 倍加速、降 70.3%）。训练开销：$G$ 从 2 到 8，训练成本 87.92→91.24 GPU 小时（+3.78%），峰值显存 45.99→50.38 GiB（+9.54%）；默认 $G=8$ 的 91.24 GPU 小时仍低于对应 $\pi\_{0.5}$ 的 108.49。

**限制**：论文自认训练期多兄弟采样带来额外计算与显存（部署期不存在）；评测集中于操作任务；动作空间采用固定的逐维时间分组，未来可探索自适应或学习式漂移几何、扩展到更大异构动作空间多本体 VLA、更广长程交互场景。从 track 视角补充：LIBERO 已近饱和（基线 97.1%），区分度主要来自 Long 子集与 RoboTwin；SnapFlow/MeanFlowVLA 为作者复现而非官方实现，绝对数可能有差（论文已注明）；延迟剖析基于 A800 单卡 batch 1，真机 RTX 3090 上的绝对延迟数字（原文未报告）可能不同；与 Async-VLA/RTC 等重叠执行路线的直接比较未包含（原文未报告）。

## 来源链接

- arXiv 摘要页：https://arxiv.org/abs/2608.29749v1
- arXiv PDF：https://arxiv.org/pdf/2608.29749v1
- arXiv TeX 源码：https://arxiv.org/src/2608.29749
