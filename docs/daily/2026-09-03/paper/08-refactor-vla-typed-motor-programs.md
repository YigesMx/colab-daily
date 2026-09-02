---
candidateId: "arxiv--2609.01215"
date: "2026-09-03"
category: Paper
title: "REFACTOR-VLA: Unsupervised Library Learning of Typed Motor Programs"
authors: ["arxiv.org", "arxiv.org", "arxiv.org"]
summary: "Apple 提出 REFACTOR-VLA：wake/sleep 架构的无监督技能库学习。Sleep 相用行为等价核 BEK（潜世界模型 rollout 的价值差 + k 步分布 Wasserstein-2 组合，2.4M Siamese 摊销器蒸馏）聚类动作片段；Wake 相在 Hindley-Milner 类型化 λ 词表上生成类型化程序，库条件化整流流解码器生成 16 步动作块；抽象需同时过 BEK 音效性、回报保持（32 rollout、ε=0.05）与 MDL >4 nats 三重门。LIBERO 全套件两个预注册发现：世界模型 188M→430M 使聚类 NMI 四套件全降（容量假设证伪，蒸馏 MSE 反而更低——更大模型编码\"不同\"而非\"更好\"的划分）；Phase A 加 InfoNCE 四套件全升（平均 +0.252，对最强基线 4/4 胜 +0.184，7B OpenVLA 特征只有 0.409）。语言槽找到 3 个抽象（最高频匹配\"拿起放入篮子\"模板），电机原语子空间 0 抽象（如实报告的负结果）。局限：LIBERO 无奖励使回报门未激活、跨 provider 0.70 门临界、真机迁移未做。"
keywords:
  - VLA 模型
  - 技能学习
  - 机器人操作
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2609.01215v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2609.01215v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/e-print/2609.01215v1"}
previewImage: "/daily/2026-09-03/assets/arxiv--2609.01215/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 8
groupScore: 80
scoreScale: "paper-v2"
emphasis: false
---

# REFACTOR-VLA: Unsupervised Library Learning of Typed Motor Programs

**一句话结论**：Apple 提出 REFACTOR-VLA，用"wake/sleep"架构做无监督技能库学习：sleep 相用基于潜世界模型 rollout 的行为等价核（BEK）聚类动作片段，wake 相在 Hindley-Milner 类型化 λ 词表上生成类型化程序并由库条件化整流流动作解码器执行，抽象必须同时通过 MDL 压缩增益与回报保持门；LIBERO 全套件上的两个预注册发现——把世界模型从 188M 扩到 430M 在 4/4 套件上降低技能聚类质量（容量假设被证伪），而 Phase A 加辅助 InfoNCE 在 4/4 套件上提升（平均 NMI +0.252），目标形状而非容量才是关键杠杆。

## 研究问题与贡献

主流 VLA（OpenVLA、π0、RT-2、RDT-1B）是"单体"的：直接生成原始电机指令或短动作序列，不把行为组织成可复用抽象，长程任务表现差且难解释。现有技能发现方法回避了核心问题——"两个动作序列何时行为等价"：AtomicVLA/AtomSkill 靠对比嵌入聚类，BLADE/LRLL 靠 LLM 判断但 LLM 未按机器人自身动力学校准。REFACTOR-VLA 把等价性显式定义在学习到的世界模型上，并用程序归纳的语言（类型化 λ 项 + 库学习）组织技能。

贡献（原文报告）：BEK（世界模型 rollout 的价值差 + k 步潜分布 Wasserstein-2 距离的组合核，附簇恢复定理）；类型程序发射器 TPE + 库条件化动作解码器 LCAD；wake/sleep 交替循环（BEK 蒸馏 → 语法反统一库重构 → 三重准入门）；LIBERO 矩阵上的容量证伪与目标形状验证。

## 方法与系统

**潜世界模型 M_φ**。DreamerV3 式分层世界模型 + 冻结 DINOv2-base 视觉编码器；因果 Transformer 处理 [img,state,action] 交错 token，posterior/prior 双头，DINOv2 特征空间重建，可选回报头（LIBERO 无奖励标注，w_ret=0，回报保持门在 LIBERO 上在场但不激活）。默认 188M 总参/101.58M 可训练。

**BEK**。D_φ(τ,τ') = w_R·E|V_φ^τ(s)−V_φ^τ'(s)| + w_E·E W₂(P_φ^k(·|s,τ), P_φ^k(·|s,τ'))：插入片段后的期望回报差 + k 步潜 rollout 分布的 Wasserstein 距离（不声称 PSD/Mercer 性质）。逐对蒙特卡洛是 O(B²) rollout，用 2.4M Siamese Transformer 摊销器 k_χ 蒸馏（对冻结 M_φ 的片段编码做 MSE，无任务标签），余弦核 = 1−⟨k_χ(τ),k_χ(τ')⟩；固定 k 的 KMeans 聚类，k 与各套件任务数对齐。

**TPE + LCAD**。TPE 是类型化词表（Twist/Wrench/GripperPhase/Pose/Lang 五型签名，14 个 LIBERO 动词原语）上的因果解码 Transformer，每步用 Robinson 合一（含 occurs-check）做类型检查过滤非法扩展；LCAD 为 4 层 Transformer（10.9M），输入类型化项 + 当前状态，rectified-flow 生成 16 步动作块（10 步 Euler）。库条件化：语法编译器把语言串/动作序列重写成层次化库条件目标，按 MDL 增益降序贪婪改写连续原语 span 为子程序调用。

**Wake/Sleep 循环与三重准入门**。Wake 训 TPE/LCAD；Sleep 训 BEK 头；库重构对解析程序语料做自顶向下句法反统一，候选项须同时通过：(i) BEK 音效性 ε_t 内、(ii) 回报保持（32 次验证 rollout、α=0.05、ε=0.05）、(iii) MDL 增益 >4 nats；最多收 8 个、剪低使用项。附引理：门内抽象重写策略的真实期望回报损失 ≤ (ε+2η)/(1−γ)。

## 实验设置与数据

全部用真实 LIBERO 数据（LeRobot v3 四套件：object/spatial/goal/10-long），8×H100 DDP bfloat16 各相 4000 步。Phase C 用留出 1024 片段探针、KMeans-NMI 对 task_index 评估；四种监督模式对比（task_index 监督上界 / 无标签 M_φ 蒸馏 / 蒸馏+Phase A 加 InfoNCE / episode 内对比）；四个已发表基线（AtomicVLA、AtomSkill、BLADE、LRLL）在同探针同核下复评；跨 provider 种子收敛 n=12；容量探针 430M（学习率重调后 Phase A 损失 0.3555 < 188M 的 0.4176，排除欠训练）。

## 结果、限制与结论

**容量证伪（论文报告值）**：固定目标形状、188M→430M 使四套件 NMI 全降（object 0.285→0.245、spatial 0.475→0.329、goal 0.493→0.475、10 0.736→0.646）；430M 监督者蒸馏 MSE 一致更低（2-6×10⁻⁴）——BEK 头拟合得很好，但更大 M_φ 编码的是"不同"而非"更好"的片段划分。

**目标形状（论文报告值）**：Phase A 加 SupCon InfoNCE 后四套件全升（object 0.285→0.462、spatial 0.475→0.867、goal 0.493→0.915、10 0.719→0.754），平均 +0.252（+50.7%），σ≤0.025，恢复 26-98.5% 的监督上界差距；对最强基线 4/4 胜（平均 +0.184；spatial +0.250、goal +0.201）。7B OpenVLA 冻结特征提取只有 0.4094（比 BEK+InfoNCE 的 10 套件低 0.345，参数量 37 倍）。

**库学习**：语言槽上找到首批结构化抽象——libero_object 3 个抽象/1211 nats，最高频（arity 2、672 nats、占 MDL 增益 55%）匹配"拿起 X 放入篮子"模板；3 抽象语法把 256/256 演示全部改写且 LCAD 速度误差仅 −0.0059（库条件化不改变动作分布）。**反例**：电机原语子空间在全部 5 个 MDL 阈值下 0 抽象，DTW 预对齐也救不回——BEK 是语义聚类而严格 token 反统一需要句法对齐，作者如实报告该负结果并把连续原型方案留给未来。

**其他（论文报告值）**：无标签窗口条件正采样（episode_contrast）3/4 套件成功但 10 套件失败（长 episode 混合抓前/抓后相位），四分之一窗口恢复；去掉 W₂ 项使 object NMI −0.175（−61%）过预注册阈值；跨 provider n=12 自助均值 0.705、CI [0.683,0.729]——点估计过 0.70 门但 CI 下界差 0.017（临界）、稳过 0.60 实质底线。

**限制（论文自述与 track 整理）**：回报保持门在 LIBERO 上不激活（无奖励），其实际约束力未测；0.70 跨 provider 门 n=12 仍临界；电机库学习失败使"技能库"目前只在语言槽成立； separable 实现仍落后 legacy_cosine −0.062 NMI；全部结论在 LIBERO 仿真数据上，真机迁移（RoboCasa）与更大队列是未来工作；论文未报告下游任务成功率的端到端提升（评测聚焦聚类 NMI 与程序指标）。

## 来源链接

- arXiv 摘要页：https://arxiv.org/abs/2609.01215v1
- arXiv PDF：https://arxiv.org/pdf/2609.01215v1
- arXiv TeX 源码：https://arxiv.org/e-print/2609.01215v1

