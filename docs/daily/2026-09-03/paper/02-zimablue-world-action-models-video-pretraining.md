---
candidateId: "arxiv--2609.00188"
date: "2026-09-03"
category: Paper
title: "ZimaBlue: Evolving Generalizable World Action Models through Scalable Video Pre-training"
authors: ["arxiv.org", "arxiv.org", "huggingface.co", "arxiv.org", "arxiv.org", "zimablue-wam.github.io", "arxiv.org", "github.com"]
summary: "Joy Future Academy 发布世界动作模型 ZimaBlue：用 12 万小时第一人称视频做因果具身预训练（改造 Wan2.2-TI2V-5B 视频基座），再用 DROID/AgiBot/Galaxea/RoboMIND2 四本体轨迹做视频-动作中训练（统一 100 维状态-动作表示），最后目标机器人后训练并引入 Slow-Fast 双系统——5B Slow DiT 提供世界模型 K/V 表征，0.5B Fast DiT 复用其缓存以 30 Hz 生成动作，RTX 4090 上闭环延迟 33 ms（13.6× 加速）。真机零样本 12 任务成功率随数据从 36.1% 单调升到 77.8%，扰动场景 +22.5 点提升最陡；RoboTwin 2.0 平均 94.5%，RoboCasa365 平均 49.5%（仅次于用 10 万小时真机数据的 Xiaomi-Robotics-1），未见长程组合任务 16.5% 翻倍于次优 WAM。视角扰动与扰动场景纠错仍是短板。"
keywords:
  - 世界模型
  - 机器人基础模型
  - 具身智能
  - 机器人操作
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2609.00188v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2609.00188v1"}
  - {"name": "huggingface.co", "url": "https://huggingface.co/papers/2609.00188"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2609.00188"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2609.00188"}
  - {"name": "zimablue-wam.github.io", "url": "https://zimablue-wam.github.io/"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2609.00188v1"}
  - {"name": "github.com", "url": "https://github.com/ZimaBlue-WAM/ZimaBlue"}
previewImage: "/daily/2026-09-03/assets/arxiv--2609.00188/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 88
scoreScale: "paper-v2"
emphasis: true
---

# ZimaBlue: Evolving Generalizable World Action Models through Scalable Video Pre-training

**一句话结论**：Joy Future Academy 团队发布 ZimaBlue，用"12 万小时第一人称视频预训练 + 跨本体视频-动作中训练 + 目标机器人后训练"三级课程，把文本到视频扩散基座改造成世界动作模型（WAM），配合异步 Slow-Fast 双系统在 RTX 4090 上实现 33 ms/30 Hz 闭环控制；真机零样本评测显示数据从仅目标机器人数据扩展到 12 万小时视频时成功率从 36.1% 单调升到 77.8%，扰动场景提升最陡（+22.5 点），未见长程组合任务成功率翻倍到 16.5%。

## 研究问题与贡献

通用操作机器人的瓶颈不是策略架构，而是可扩展的具身经验来源：动作标注的机器人轨迹昂贵且多样性有限，而第一人称人类视频包含丰富的物体可供性、工具使用、接触事件与长程任务结构却没有动作标签。VLA 模型继承语义先验但泛化受限于动作监督数据；世界动作模型（WAM，联合预测未来视觉状态与动作）提供了另一条路线——先从无标注视频学因果视觉动力学，再用少量动作数据接地。论文同时指出直接拿通用视频生成器当 WAM 骨干有三个错配：通用视频模型面向"描述性提示下的视觉合理重建"而非"动作相关的指令条件预测"；整段注意力和长块生成不符合部署时只能条件于历史的因果约束；网络视频含动画/特效等非物理内容会稀释接触密集操作所需先验。

贡献（原文报告）：把视频规模化为 WAM 的实用扩展轴并给出实证；三级训练框架（自我中心视频预训练 → 多本体视频-动作中训练 → 目标机器人后训练）+ 统一 100 维状态-动作表示；Slow-Fast 双系统 WAM 架构实现 30 Hz 真机闭环。

## 方法与系统

**统一表示**。各本体原生控制接口（单臂笛卡尔、双臂+躯干+移动底盘+灵巧手）映射到 100 维语义状态-动作空间，每个坐标跨本体保持一致物理含义（末端位姿 9 维：3 平移 + 6D 旋转；其余槽位为夹爪/关节/躯干/底盘/灵巧手），配二值有效性掩码。状态与动作同槽布局，动作是未来控制块。

**Slow-Fast 双系统**。Slow DiT（5B，初始化自 Wan2.2-TI2V-5B 文生视频基座）维护视频中心世界模型：输入 RGB、本体状态、语言指令与加噪的未来视频/动作 token，预测未来视频 latent 并抽取多层 K/V 特征；动作监督只作为训练期辅助对齐信号，不用于运行时。Fast DiT（0.5B）是专职动作生成模块：复用 Slow 前 12 层的视频 K/V 缓存作条件，读取最新观测 latent 与状态 token，流匹配生成最终动作序列——这样控制器能抢在 Slow 之前对最新视觉/本体反馈做出反应，同时持续享受 Slow 的时空表征。耦合发生在自注意力层内部（Fast 的动作 query 交叉注意 Slow 视频 K/V），不需要显式生成完整未来视频。

**三阶段课程**。Stage I 视频预训练（仅训 Slow）：混合自我中心人类视频（EPIC-KITCHENS、EgoDex、Egocentric-100K 等）、仿真轨迹与机器人演示，两阶段从最广混合收窄到操作中心精选子集；8K+1 帧分块，块级因果 teacher-forcing 注意力允许多个未来视频块并行去噪同时保持自回归信息流；三行垂直画布统一单/多视角输入，视角有效性掩码屏蔽填充相机。Stage II 视频-动作中训练：DROID/AgiBot/Galaxea/RoboMIND2-Franka 四个本体族全部投影到统一接口，视觉上下文与 24 步动作块严格同时段对齐；视频与动作噪声级别在去噪步内耦合，加噪未来视频与动作 token 互相注意——视频流生成"条件于预测动作的合理未来"，动作流推断"驱动该视觉转变的控制序列"。Stage III 后训练：Slow 特化到目标域（真机 DROID 或仿真基准，未见基准只加轻量接口编解码器），冻结后训 Fast（动作专用流匹配，随机时间偏移 δ 模拟异步闭环、前缀 teacher-force 保证动作连续性）。

**加速**。异步执行把端到端延迟从 449.6 ms 降到 145.6 ms（3.1×）；DMD 蒸馏 + CUDA graph 编译进一步降到 33.0 ms（整体 13.6×），蒸馏后整体成功率 75.0%（比未蒸馏低 2.8 点）。

## 实验设置与数据

真机零样本：7 自由度 Franka，12 个训练中未见任务分 Standard（8 任务：语言条件目标选择、搬运堆叠、关节物体交互、接触密集家电操作）与 Perturbed（4 任务：动态光照/眩光闪烁、桌布背景+未见过干扰物）；每任务 10 次（Toys 为 30 次放置），任务宏平均。四个累积预训练配置（仅目标机器人 / +6K 小时多本体 / +60K / +120K 视频）共享相同 DROID 后训练（Slow 60K 步、Fast 160K 步、8 步去噪推理），外部对比 π0.5 与 DreamZero 官方 DROID 后训练 checkpoint。仿真：LIBERO-Plus（七类扰动鲁棒性）、RoboTwin 2.0（双臂域随机化）、RoboCasa365（365 任务 2500 厨房环境，50 任务协议含 16 个 Composite-Unseen，每任务 50 rollout）。

## 结果、限制与结论

**真机零样本（论文报告值）**：整体成功率随数据单调上升：仅目标机器人 36.1% → +多本体 46.1% → +60K 视频 66.9% → +120K 视频 77.8%（Standard 87.9%、Perturbed 57.5%），大幅超过 π0.5 与 14B 的 DreamZero。两类数据作用不同：多本体动作轨迹主要强化可执行控制（微波炉关门 0/10→9/10、空气炸锅开盖 6/10→9/10）；自我中心视频主要提升视觉泛化与观测偏移鲁棒性（60K→120K 时 Standard 仅 +5.0 点但 Perturbed +22.5 点，四个扰动任务全部明显改善）。

**双系统消融**：同配置下 Slow→Slow-Fast 使 Standard 80.8%→87.9%、Perturbed 30.0%→57.5%，增益集中在需要频繁视觉反馈与场景状态恢复的任务（Basket/Air Fryer/Toys/Microwave）。

**基准（论文报告值）**：LIBERO-Plus 零样本平均 86.7%（七维扰动中 Camera 最弱 58.1、Robot/Layout 88.9/86.1）；RoboTwin 2.0 平均 94.5%（Clean 94.7 / Randomized 94.3，超过全部对比 VLA/WAM）；RoboCasa365 平均 49.5%，仅次于依赖 10 万小时真机数据的 VLA 系统 Xiaomi-Robotics-1，但只用 6000 小时动作标注轨迹；Composite-Unseen 16.5%，是次优 WAM（ABot-M0.6 的 7.9%）的两倍多——论文把这归因于 120K 小时视频预训练（为 ABot-M0.5 的 16 倍、GigaWorld-Policy 0.1 的 26 倍）。

**限制（track 依据原文整理）**：作者自列四个未来方向中第一条即"扩展评测"——当前真机评测集中在单一 Franka 平台 12 任务，每任务仅 10 次 rollout，作者承认存在采样噪声；Perturbed 上全配置仍只有 5/10-7/10，失败集中在"无法从正确中间态推进"和"局部交互错误"，作者明确说更宽的视觉先验需要配合进度感知重规划与响应式纠错；LIBERO-Plus Camera 扰动 58.1 明显偏弱，视角泛化仍是短板；真实部署依赖 8 步去噪与蒸馏，进一步降延迟与保持质量的权衡原文未完全量化。

## 来源链接

- arXiv 摘要页：https://arxiv.org/abs/2609.00188v1
- arXiv PDF：https://arxiv.org/pdf/2609.00188v1
- arXiv HTML 全文：https://arxiv.org/html/2609.00188v1
- 项目页：https://zimablue-wam.github.io/
- 代码：https://github.com/ZimaBlue-WAM/ZimaBlue
- Hugging Face Papers：https://huggingface.co/papers/2609.00188

