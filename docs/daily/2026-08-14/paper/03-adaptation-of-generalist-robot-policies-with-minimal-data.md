---
schemaVersion: 2
candidateId: "arxiv--2608.11363"
date: "2026-08-14"
category: "Paper"
ratingTrack: "paper"
groupRank: 3
groupScore: 92
scoreScale: "paper-v2"
title: "Adaptation of Generalist Robot Policies with Minimal Data"
authors: ["Shreyas Kowshik", "Sreyas Venkataraman", "Leo Wang", "Niharika Pant", "Max Simchowitz", "Aviral Kumar"]
summary: "MiDAS 以单条或少量示范锚定预训练 VLA，再用残差策略和值函数在线强化学习，让机器人在自主交互中继续提升。"
provisionalKeywords: ["机器人强化学习", "少样本适配", "离线到在线学习", "视觉语言动作模型", "自主改进"]
keywords: ["视觉语言动作", "少样本适配", "离线到在线学习"]
sources:
  - name: "原始来源 1"
    url: "https://arxiv.org/pdf/2608.11363v1"
  - name: "原始来源 2"
    url: "https://export.arxiv.org/e-print/2608.11363v1"
  - name: "原始来源 3"
    url: "https://ar5iv.labs.arxiv.org/html/2608.11363"
previewImage: "/daily/2026-08-14/assets/arxiv--2608.11363/preview.jpg"
---

# Adaptation of Generalist Robot Policies with Minimal Data

> MiDAS 以单条或少量示范锚定预训练 VLA，再用残差策略和值函数在线强化学习，让机器人在自主交互中继续提升。

## 研究问题与贡献

完全从稀疏奖励自主探索新任务对现有机器人策略过于困难。论文研究“最小数据适配”：预训练通用策略只获得一条或少量人类示范，随后必须依靠在线交互学习。MiDAS 给出一套 offline-to-online 配方，用极少人工指导解决初始探索，并让策略在训练分布之外继续形成成功行为。

## 方法与系统

第一阶段在目标任务的一条/少量示范上用行为克隆微调基础 VLA。第二阶段冻结或保留基础策略作为锚点，学习残差 actor 与 critic ensemble；在线数据进入 replay buffer，并对成功轨迹做平衡采样。策略改进采用 critic 引导的动作候选优化与蒸馏，残差参数化限制早期更新幅度，同时允许逐步突破基础策略的动作支持。

## 实验设置与数据

论文在 LIBERO 与 RoboCasa 进行单示范适配，跨三随机种子报告成功率，并测试对象交换、形状、位置、视觉与语言扰动；还在双臂 YAM 真机上从单示范得到的脆弱策略出发，进行约 6 小时在线交互。对比包括仅行为克隆、直接在线强化学习及其他适配方案，附录提供数据量、成功样本比例、phase-out 和位置扰动课程等消融。

## 结果、限制与结论

全文报告 MiDAS 在多项 LIBERO/RoboCasa 任务上从一条示范恢复较强成功率，并在真实双臂系统上提高鲁棒性、学出示范之外的成功行为；具体提升随任务差异较大，论文的主表以三种子均值和标准差报告。扰动实验显示对象交换等结构变化仍可能使所有方法降到 0%，说明少样本在线适配并未解决因果混淆和组合泛化。真机结果仅覆盖一个平台、少数任务和约 6 小时训练，安全约束、长期稳定性和人机成本尚未充分报告。

## 来源链接

- [arXiv](https://arxiv.org/abs/2608.11363)
- [PDF](https://arxiv.org/pdf/2608.11363v1)
