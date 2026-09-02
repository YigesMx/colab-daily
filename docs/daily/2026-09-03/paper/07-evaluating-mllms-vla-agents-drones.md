---
candidateId: "arxiv--2609.01404"
date: "2026-09-03"
category: Paper
title: "Evaluating Multimodal LLMs as Generalist Vision-Language-Action Agents for Drone Control: Commanding, Approaching, Tracking and Searching"
authors: ["arxiv.org", "arxiv.org", "huggingface.co", "arxiv.org", "arxiv.org", "github.com", "arxiv.org"]
summary: "NAVER Cloud 无人机 AI 团队发布 DroneCATS-Agent 与 DroneCATS 基准：把 MLLM 直接放进无人机控制回路，动作空间全部用自然语言声明在提示中（go/rotate/think/finished 四原语，零微调零函数调用），\"何时看、何时想、何时结束\"都成为模型自己的决策；agent 固定、模型是唯一变量。100 个 AirSim episode（接近/搜索/跟踪/搜索跟踪 × 单机/四机指挥）用同一\"5 米内到达声明\"判据。核心发现：失败在动作协议而非导航——Qwen3.5-9B 进入成功圈比例 90% 超所有前沿模型却只转化 35% 成功，2B 版在 1.28 倍起始距离就宣布到达；四机指挥中小模型 70% 情况把同一坐标复制到四个视图。最简单的接近任务最佳也只有 65%，具身特化模型无优势；think 慎思动作被调用 1797 次但不改变结局。全部仿真、层级指挥未评估。"
keywords:
  - 无人机
  - 多模态大模型
  - 视觉语言导航
  - 具身智能
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2609.01404v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2609.01404v1"}
  - {"name": "huggingface.co", "url": "https://huggingface.co/papers/2609.01404"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2609.01404"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2609.01404"}
  - {"name": "github.com", "url": "https://github.com/naver-ai/DroneCATS"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2609.01404v1"}
previewImage: "/daily/2026-09-03/assets/arxiv--2609.01404/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 7
groupScore: 81
scoreScale: "paper-v2"
emphasis: false
---

# Evaluating Multimodal LLMs as Generalist Vision-Language-Action Agents for Drone Control: Commanding, Approaching, Tracking and Searching

**一句话结论**：NAVER Cloud 无人机 AI 团队提出 DroneCATS-Agent + DroneCATS 基准：把 MLLM 直接放进无人机控制回路，动作空间完全用自然语言声明在提示里（go/rotate/think/finished 四原语，无微调、无函数调用 schema），把"何时看、何时想、何时结束"都交给模型——100 个 AirSim episode 的评测揭示核心悖论：小模型导航进 5 米成功圈的比例（Qwen3.5-9B 达 90%）超过所有前沿模型，却因"到得太早宣布到达"或"从不宣布"输掉整局；失败在动作协议的持续遵守，不在空间感知或控制。

## 研究问题与贡献

以往 MLLM 无人机系统不断收窄模型决策面：pointing 接口（见-指-飞 SPF 类）只能表达"飞向已见目标"，无法表达"目标不在视野内时往哪看"、"是否值得多花算力再决策"、"任务何时完成"——第三个最关键，因为 termination 由模型看不到的距离阈值在外部决定，这种代理既无法知道自己完成了，也就无法被委托（舰队指挥的根基）。本文反过来把决策面拉宽：模型是可插拔组件，agent（提示/解析器/几何控制器）固定，模型是唯一变量。

贡献（原文报告）：DroneCATS-Agent（四动作原语 + 规则几何控制器，模型与机体之间无任何模型特定成分）；DroneCATS 基准（任务轴：接近/搜索/跟踪/搜索跟踪 × 组织轴：单机/4 机指挥，共 100 episodes，全部用同一"到达声明"判据）；跨前沿与开源（含 2B 小模型）的系统评测与失败分类。

## 方法与系统

**动作空间**。go（点 + 深度，图像坐标归一 0-1000；深度是模型自己的单目估计而非读数，控制器用已知 FOV 反投影成 3D 位移——深度被当作"步长提案"而非标定度量）；rotate（偏航 ±90°/步，让视野外搜索可表达）；think（物理上是悬停，让测试时计算成为可调用动作而非环境性开销；默认关闭扩展推理，仅在上一步是 think 时开启一次）；finished（同样是悬停，但声明本身不结束任务——scaffold 记录声明、继续飞行、事后由验证器判定）。模型唯一传感器是 ego RGB。

**执行**。模型每步返回一个 JSON 对象；规则控制器把像素+深度几何提升为 setpoint，飞控级联持续跟踪——从 JSON 到旋翼无任何模型特定环节。约 2 Hz 闭环（最小模型服务速率）。

**判据**。成功 = 存在一次声明时刻：三维距离 ≤δ=5 m 且目标对相机可见。声明计数而非只看最后一条（吸收"恰在 δ 内但目标瞬时未检出"与"刚说完就飘进 δ"两类无辜失败）；穿过目标区不算成功——未声明失败中 61/337 曾进入 δ，若按轨迹邻近记分会虚增 182 次成功的三分之一。episode 上限 300 s。指挥设置：N=4 视图按固定顺序放入一个上下文，模型单次响应给出每机一条命令；场景含多个同类资产（车牌/标牌只在近距可辨），指令点名目标；任何一机合规声明即全队成功。

## 实验设置与数据

AirSim/Unreal 双地图（住宅区、校园）+ Blocks；单机四任务 ×20 episodes（每地图 10），指挥 +20；目标手工放置并核查相机通路清晰、起始 12-48 m。模型阵容：GPT-5、Claude Opus 5、Gemini 3.7 Flash、Gemini Robotics-ER 2、Qwen3.5 27B/9B/4B/2B、Cosmos3-Edge-2B 等。指标：成功率 SR、oracle SR（轨迹曾入 δ 的比例，诊断用）、导航误差 NE、最小距离、接近比、声明距离比起（暴露过早声明）。方差检查：Gemini 3.7 Flash 三次全量复飞，逐格标准差 1.7-2.5 次（9-13 点），与二项期望吻合，同层相邻排序不应过度解读。

## 结果、限制与结论

**主结果（论文报告值）**：最简单的接近任务也未解决——最佳 65%（13/20）；目标初始不可见（搜索）无一模型超 40%。模型排序跨任务不稳定：GPT-5 接近 60 vs Gemini 3.7 Flash 65（差一个 episode），但跟踪只有 15% vs Flash 的 80%。具身特化模型无优势：Gemini Robotics-ER 2 四格平均 47.5% vs 通用姊妹 Flash 57.5%。Qwen3.5 规模单调：27B/9B/4B/2B = 33.8/21.3/12.5/0%。

**失败在声明，不在导航**：前沿模型"进入 δ/声明/成功"三条曲线贴合（GPT-5 入圈 65% 转化 60%）；小模型三条曲线解耦——Qwen3.5-9B 进圈 90%（超过所有前沿模型）却只转化 35%（平均在 0.63 倍起始距离处声明）；Qwen3.5-2B 在 1.28 倍起始距离就宣布到达、一次未成；Cosmos3-Edge-2B 会飞（进圈 25%）但从不声明。2B/4B 仍能关闭 57%/62% 初始距离——瓶颈是长 episode 中维持已声明动作协议并使用那个"结束动作"的纪律，而非感知或控制；既有系统在模型外决定 termination，恰是这个差距没出现在其数字里的原因。

**指挥（N=4）放大分裂**：两个 Gemini 保住协议（Flash 65%→80%）；GPT-5 60%→20%（失败全部耗尽 300 s 预算，16 team-steps/episode vs Gemini 45）；Qwen3.5-27B/2B 反向失败（声明 100%/85% 但到达仅 15%/5%）；Qwen3.5-9B 在 70% 的全机 go 步骤给四个视图发同一个坐标（27B 为 58%），前沿模型从不犯此错（Flash 1%）。单机排序不预测指挥表现。

**测试时慎思**：think 被调用 1797 次，但步级观测显示其后三步仅 +0.03 m/步增益，打破停滞频率（1/230）低于普通步（103/8401）——物理 agent 的测试时慎思形态是开放问题。**限制（论文自述）**：全部仿真（作者指出 setpoint 与真实自驾仪 offboard 模式兼容，硬件飞行是下一步）；层级指挥未评估；20 episode/格的噪声（±9-13 点）内邻位排序不可靠。track 补充：模型阵容截至投稿时的前沿版本，数字时效性有限；think 的"不奏效"是观测性结论而非消融。

## 来源链接

- arXiv 摘要页：https://arxiv.org/abs/2609.01404v1
- arXiv PDF：https://arxiv.org/pdf/2609.01404v1
- arXiv HTML 全文：https://arxiv.org/html/2609.01404v1
- Hugging Face Papers：https://huggingface.co/papers/2609.01404

