---
candidateId: "arxiv--2608.30935"
date: "2026-09-02"
category: Paper
title: 'LightNav-0: Eliciting VLM Spatial Intelligence for Generalist Embodied Navigation'
authors: ["arxiv.org", "huggingface.co"]
summary: 'Light Origins 团队基于 Qwen3-VL-4B 构建紧凑通才导航模型 LightNav-0，用双通道 pointing 前缀和 RVQ 动作 tokenizer 统一指令跟随、开放词表目标导航与视觉跟踪三类任务。单共享检查点在 10 个公开仿真设置上取得最强单目成功率，并零样本迁移到四种实体机器人平台。'
keywords:
  - 具身导航
  - 视觉-语言-动作模型
  - 强化学习
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.30935v1"}
  - {"name": "huggingface.co", "url": "https://huggingface.co/papers/2608.30935"}
previewImage: "/daily/2026-09-02/assets/arxiv--2608.30935/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 86
scoreScale: "paper-v2"
emphasis: false
---
# LightNav-0: Eliciting VLM Spatial Intelligence for Generalist Embodied Navigation

**一句话结论**：LightNav-0 证明一个 4B 紧凑 VLM（Qwen3-VL-4B-Instruct）不改架构、不加任何任务专用预测头，仅靠"双通道 pointing 前缀 + 三级残差向量量化动作 token"这一统一 token 接口，配合 ER 中训练、SFT 和在线 RL 三段训练，就能在指令跟随、开放词表物体导航和视觉跟踪三类具身导航任务上同时取得最强单目（仅前向 RGB、无深度无里程计）成绩，并零样本部署到人形、四足、 aerial、轮式四种实体平台。

## 研究问题与贡献

论文针对具身导航系统的碎片化现状：多数现有系统为单一任务或基准优化，依赖 waypoint 预测器、拓扑图或专用动作头等专门组件。这限制了开放词表迁移、阻碍推理能力跨平台复用，也把具身导航隔离在现代 VLM 的规模红利之外。作者的论点是：现代 VLM 已编码开放词表识别、空间推理、指令理解和视频时序解释等导航所需能力，一个紧凑 VLM 就可以作为通用具身导航的共享推理骨干。

三项核心贡献：一是提出以 pointing（指向）作为连接 VLM 与异构导航策略的中间表示——它既在图像平面上空间有意义，又独立于任何特定动作空间；二是设计双通道 pointing（可行方向/自由空间 waypoint 的 affordance 通道 + 定位任务目标的 object 通道）与 RVQ 动作 tokenizer 组成的统一接口，同一骨干、同一 token 词表、同一目标函数覆盖全部任务；三是完整训练配方（ER 中训练 → 含 DAgger 的 SFT → GRPO 在线 RL），在 10 个公开仿真设置、8 个空间推理基准和四类真机平台上验证。

## 方法与系统

**架构**。以 Qwen3-VL-4B-Instruct 为底座（原生分辨率 ViT + 36 层语言模型），仅扩充词表加入索引化的 $\langle\mathrm{apos}\_i\rangle$、$\langle\mathrm{opos}\_i\rangle$ 和 RVQ 动作 token。每个决策步的完整输出序列只有 5 个 token：一个 affordance 点、一个 object 点、三个 RVQ 动作码，全部经原始自回归语言模型头解码，无 waypoint 预测器、任务专用动作头或本体专用专家。

**时间感知视觉历史压缩**。历史帧按艾宾浩斯遗忘曲线式的形式压缩：帧采样率随年龄指数衰减 $f\_s(i)=f\_s^{\max}\exp(-\Delta T\_i/\tau\_s)$，空间池化步长 $s\_i=\max(1,\lfloor\exp(\Delta T\_i/\tau\_p)\rfloor)$ 同样随年龄增长。近期观测保留高采样率与细分辨率，远期观测贡献更少更粗的 token，当前观测保持最细视觉细节，时间戳 token 保留时序。压缩器在视觉 transformer 之后运行，支持 256K/576K/1M 像素预算的可变长原生分辨率输入。

**双通道 pointing**。投影像素点 $(u,v)$ 用共享网格索引编码为单个通道专属 token（而非水平垂直两个坐标 token），affordance 与 object 用不同 token 家族，保留索引表示原地转向、停止、目标不可见等情况。因果注意力使这个紧凑前缀成为条件化轨迹生成的显式潜空间空间推理痕迹；同一网格索引方案被导航、pointing 和空间 VQA 监督共享，使导航训练能复用骨干的视觉接地能力。

**RVQ 动作 tokenizer**。每个动作块表示为 10 步未来 SE(2) waypoint，用 3 级各 256 词的码本残差量化：第一级捕获粗轨迹，后两级逐步精化残差。任意非空前缀都解出可执行轨迹——算力或延迟紧张时可只生成 1-2 个 token 换取更低自回归成本。全集 3 token 表示 $256^3$ 种码组合，平均位移误差 0.72 cm，对比单级 K=4096 的 VADv2 式规划词表的 2.48 cm。轨迹距离用 ADE + λ·航向误差（λ=0.3）度量。

**训练配方**。三阶段：ER 中训练用 36 个来源的任务平衡混合（pointing 35.14%、单图 VQA 25.05%、视频推理 19.81%、通用推理 20.00%），学习率 1e-5、约 170 H100 GPU 小时；SFT 用 16 个导航源 + 33 个辅助源（激活采样下 77.6% 样本带导航动作监督），含 DAgger 采集，动态打包约 8.6 样本/8192 token 序列，约 950 H100 GPU 小时；在线 RL 用 GRPO（组大小 G=8、每迭代 32 个种子、clip 0.2、KL 系数 0.01，8×H100 单节点），rollout 与优化解耦（每个仿真进程驻留一个场景，场景哈希把同种子的 G 条轨迹分到同场景进程），训练集按 always-solved/mixed/never-solved 分箱并以 mixed 为主。任务专属终局奖励各不相同：EVT 用平顶轴承带+双侧距离带的质量项加碰撞惩罚，且用常数 $T\_0=300$ 归一化把早停计为低质量以奖励持续性；VLN 用 $(1+\mathrm{nDTW})\cdot\mathbb{1}[\text{success}]$ 加高斯近距离核，防止无视指令的捷径；ObjectNav 用 $(1+0.25\mathrm{PL})\cdot\mathbb{1}[\text{success}]$ 加分级接近项。

**数据**。导航语料覆盖 2K+ 场景、4K+ 小时具身轨迹；导航数据全程相机随机化（FOV 90°-130°、高度 0.5-1.5m、俯仰 ±15°）。停止监督仅在末帧且目标可见时保留，且封顶混合的 2%；轨迹簇最大占比 5% 防止常见运动模式主导。

## 实验设置与数据

单一共享检查点、无基准专用微调，评测 10 个公开仿真设置：指令跟随在 VLN-CE 的 R2R/RxR val-unseen；物体目标导航在 MP3D、HM3D v1/v2、HM3D-OVON；视觉跟踪在 EVT-Bench 的 STT/DT 分割；另有 INSIGHT-Bench（1,097 episodes、210 场景，共享前向 120° 480×270 RGB、300 步预算，室内 2m/室外 3m 成功半径），对 6 个开源导航策略（JanusVLN、NaVid、Uni-NaVid、TAMP-Nav、InternVLA-N1、StreamVLN）用同一动作接口重跑。ER 检查点在 8 个空间推理基准上与 Qwen3-VL、Qwen3.5-4B、8B Molmo2-ER 对比。所有导航结果显式标注单目 RGB/全景/深度/里程计的使用。

## 结果、限制与结论

**ER 基准**（论文报告值）：LightNav-ER 在 8 基准中 4 项第一、4 项第二，完整集平均 67.4，超最强基线 Qwen3-VL-4B 的 63.1（+4.3）和 8B Molmo2-ER（+4.6），参数量仅为其一半。相对初始化基线提升 7/8 项，最大增益在 Where2Place（+12.6）和 RefSpatial（+11.9）。

**VLN**（论文报告值）：R2R 上 SR 68.5（此前最佳单目 66.9，+1.6）、SPL 62.8、NE 3.91m（-0.14m）、OS 73.7；RxR 上 SR 73.6（+0.2 对 Qwen-RobotNav-8B）、SPL 64.5、NE 3.66m（-0.43m），但 nDTW 67.4 仍低于 DualVLN 的 70.0——作者承认更高的成功与终端精度未均匀转化为轨迹保真度。

**ObjectNav/OVON**（论文报告值）：MP3D SR 53.3（CogNav 46.6，+6.7）、SPL 21.2；HM3D v1 SR 74.5、SPL 43.9；HM3D v2 SR 79.5、SPL 43.7。RGB-only 还超过多视角系统：MP3D 上 SR 超 Qwen-RobotNav-4B 1.1 点，HM3D v1 上超深度+里程计辅助的 WMNav +16.4 SR。OVON val synonyms SR 增益 +8.3（18.4%）、unseen +6.2（15.2%），SPL 在 seen 上 +6.8（28.8%）。

**INSIGHT-Bench**（论文报告值）：SR 从 JanusVLN 的 27.4 升至 43.7（+16.3，59.5%），SPL 41.5（+17.5），NE 3.88m。指令轴上 Direction 从 NaVid 29.7 升至 57.7（+28.0，94.3%），且是唯一超过自身 Base 分数（45.1）的指令类型——全部 6 个基线加自中心方位词后都低于 Base；Extremum 最难（37.2）。场景轴上户外从 16.7 升至 34.2（+104.8%）。交叉矩阵显示 House-Direction 74.0% 对 Institution-Extremum 18.0%，跨度 56 点远大于单轴跨度，困难语言与场景歧义复合。

**EVT-Bench**（论文报告值）：单目标 SR 91.7（ReferTrack 89.4，+2.3），干扰跟踪 SR 82.6（+9.3 对 73.3），且超过最佳多视角 CoMaTrack 的 74.2（+8.4）；干扰 CR 从 5.51 降至 4.62。ReferTrack 仍保持最高 TR，专家跟踪器的持续视觉锁定仍是互补强项。

**消融与 scaling**（论文报告值）：ER 初始化使 8 设置平均 SR 60.8→63.1（+2.4）；去掉双通道 pointing 使平均 SR 63.1→54.7（-8.4）、SPL -5.7，HM3D v1 掉幅最大（SR -13.5）。模型 scaling 上 2B→4B 增益 6.6-9.6 点，4B→8B 混合（R2R SR 反降 1.6）；数据 scaling 单调但 1/2→全量只加 0.8-1.4 点；环境覆盖是测试范围内最可靠的 scaling 轴（1/8→全量 +16.2-21.1 点）。真机零样板上追踪了训练中从未见过的动态目标类（人形机器人、轮式机器人、推车），并跨 Counter-Strike、VizDoom、Minecraft、Trigger Rally 四个游戏域给出定性 rollout。

**限制**：论文未设独立 Limitations 节；从 track 视角指出：RxR nDTW 落后全景方法，说明路径保真度未完全对齐；跨游戏域与真机实验为定性演示（作者自己说明虚拟与物理环境无标准化动作空间与成功协议，不做定量对比）；8B 检查点 scaling 不一致的原因（原文未报告）；INSIGHT-Bench 上对 TAMP-Nav 限制了原本的 4 相机 360° 输入，比较条件不完全公平（论文已注明）；推理延迟 4ms/token 基于 RTX 4090 单卡（原文未报告整机端到端控制频率）。

## 来源链接

- arXiv 摘要页：https://arxiv.org/abs/2608.30935v1
- arXiv PDF：https://arxiv.org/pdf/2608.30935v1
- arXiv TeX 源码：https://arxiv.org/src/2608.30935
- 项目页：https://www.lightorigins.com/en/blog/lightnav-0
- HuggingFace 论文页：https://huggingface.co/papers/2608.30935
