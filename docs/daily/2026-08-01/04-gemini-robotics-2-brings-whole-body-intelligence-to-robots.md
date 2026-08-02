---
candidateId: "url--42a1992e4b242ffc"
date: "2026-08-01"
rank: 4
title: "Gemini Robotics 2 brings whole body intelligence to robots"
authors:
  - "Carolina Parada"
summary: "Google DeepMind 发布 Gemini Robotics 2、ER 2 和 On-Device 2：分别覆盖全身及双臂 VLA 控制、分钟级具身任务编排与多机器人协作、以及少于 200 个样例的跨本体本地适配，同时公开若干任务成功率和新的安全评测。"
keywords:
  - "视觉语言动作"
  - "机器人控制"
  - "跨本体泛化"
score: 87
sources:
  - name: "Google DeepMind"
    url: "https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/"
previewImage: "/daily/2026-08-01/assets/url--42a1992e4b242ffc/preview.jpg"
---

## 核心内容

Google DeepMind 将 Gemini Robotics 2 描述为三模型组成的机器人智能层，而不是一个覆盖所有层级的单模型。Gemini Robotics 2 是视觉-语言-动作模型（VLA），直接把视觉和语言输入转换为电机控制，可驱动完整人形机器人和双臂平台；Gemini Robotics ER 2 是高层具身推理 VLM，负责理解人类指令、观察环境、拆分持续数分钟的任务、协调 VLA 执行并跟踪进度；Gemini Robotics On-Device 2 则面向低延迟或断网场景，在机器人本地运行并针对新本体快速适配。

全身控制把此前以上半身桌面操作为主的能力扩展到行走、下蹲、伸展和搬运组合。例如 Apptronik Apollo 2 接到把浇水壶放入底层绿色箱子的指令后，需要走到桌前拾取、移动到货架并完成放置。模型也控制五指、22 自由度 SharpaWave 手执行系结、封闭自封袋等操作，并控制 Franka Duo 的双二指夹爪完成紧密装箱等任务。官方同时明确指出移动速度仍需提升，多指精细操作仍然困难。

ER 2 侧重点是长时任务管理：它能判断任务何时开始和结束、定位关键事件、在步骤失败后自我纠正，并让异构机器人通信协作。On-Device 2 继承 motion transfer 思路，用数小时数据、通常少于 200 个例子适配形状、传感器和自由度差异明显的新双臂平台。这里披露的是官方产品与研究文章；VLA 和 On-Device 仍仅向 early-access partners 开放，ER 2 可在 Google AI Studio 试用并在企业平台私有预览。

## 关键技术与数据

第一方文章没有给出网络结构、参数量、训练语料规模、训练损失或完整基线设置，因此不能据此重建模型。可核验的系统分工是：ER 2 负责高层任务编排和人机沟通，VLA 负责动作执行，On-Device 2 面向本地推理与新本体微调。ER 2 的任务序列可持续数分钟并包含数百次决策；On-Device 2 的适配通常使用少于 200 个示例。

官方图表给出同一 Gemini Robotics 2 checkpoint 在 Apollo 2 配 Inspire 手、Apollo 2 配 SharpaWave 手及 Franka Duo 配 Robotiq 夹爪上的表现。Apollo/Inspire 的全身取物任务成功率分别为：桌面 68.4%、地面 45.7%、货架 76.3%。Apollo/Sharpa 的多指任务分别为：拧入灯泡 36%、拧出灯泡 92%、系垃圾袋 44%、使用簸箕 32%、封闭自封袋 40%。Franka Duo 的通用抓放、工具配套和精确插入分别为 74.2%、78.9% 和 89.6%。文章说明多数柱为同类多任务平均，多指任务则展示单任务表现，但未公开试验次数、方差数值、对照模型或统计显著性。

安全方面，团队发布 ASIMOV-Agentic 基准，用于测试高层代理拒绝来自 VLA 的不安全工具调用、判断任务是否可行，以及不确定时主动请求人类介入。官方称 ER 2 在安全约束遵循和人类接近基准上是其当前最安全的机器人模型，可检测附近人员、触发安全工具调用并停车；更完整的方法和结果需查看单独的 Safety Technical Report，不能由这篇发布文章本身推断。

## 结果与结论

这次发布最实质的进展是把“机器人智能”拆成互补层级，并显示同一个 VLA checkpoint 能覆盖多种末端执行器和本体。量化结果也暴露出明显不均衡：货架取物 76.3% 高于地面取物 45.7%，拧出灯泡达到 92%，但拧入灯泡、簸箕和自封袋只有 32% 至 40%。这支持跨任务能力扩大，但离稳定、通用的人类级灵巧性仍有距离。

多机器人协作、数百决策长任务和少样本新本体适配具有实际意义，但文章主要提供演示与内部评测，没有公布可复现实验协议、失败分布、训练数据或与外部方法的统一对照。On-Device 的“少于 200 个例子”也表示适配成本下降，并非严格零样本跨本体。模型可用性目前受预览和伙伴计划限制。

因此，保守结论是 Gemini Robotics 2 扩大了 Google 机器人栈的全身控制、任务编排和本地适配范围，并通过官方数字展示了部分任务的中高成功率；它还没有证明开放环境中长期无人监督运行、全面多指可靠性或跨任意机器人即插即用。安全声明同样应以独立技术报告和外部复核为准。

## 来源链接

- Google DeepMind 第一方发布文章：https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/
- Gemini Robotics 2 Safety Technical Report：https://storage.googleapis.com/deepmind-media/gemini-robotics/Gemini-Robotics-2-Safety.pdf
- ASIMOV-Agentic：https://huggingface.co/datasets/google/asimov_agentic/blob/main/README.md
