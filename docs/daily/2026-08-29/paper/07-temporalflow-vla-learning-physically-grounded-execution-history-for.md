---
candidateId: "arxiv--2608.26821"
businessCandidateId: "arxiv--2608.26821"
date: "2026-08-29"
category: Paper
title: "TemporalFlow-VLA: Learning Physically Grounded Execution History for Long-Horizon Robot Manipulation"
authors: ["arxiv.org"]
summary: "TemporalFlow-VLA 用机器人表面时间流离线监督两个历史查询，让 VLA 在多阶段操作中利用有序执行历史，并以异步缓存避免额外历史编码延迟。"
provisionalKeywords: ["视觉语言动作", "机器人操作", "具身智能"]
keywords: ["视觉语言动作", "机器人操作", "具身智能"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.26821v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.26821"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2608.26821"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/e-print/2608.26821"}
previewImage: "/daily/2026-08-29/assets/arxiv--2608.26821/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 7
groupScore: 85
scoreScale: "paper-v2"
emphasis: false
---
# TemporalFlow-VLA：学习物理接地的执行历史用于长时程机器人操作

## 研究问题与贡献

多阶段操作中，视觉相似状态可能对应不同执行阶段，仅依赖当前画面会让策略误判局部任务相位、忽略上一动作块结果或重复已执行行为。论文发现普通历史帧基线对历史顺序不敏感：打乱三帧历史几乎不改变动作损失。TemporalFlow-VLA 的贡献是用物理接地的机器人表面时间流监督紧凑历史查询，并让历史内容与顺序真正影响动作。

## 方法与系统

训练时，系统用记录的关节状态、URDF 几何和相机标定，将机器人表面点从过去帧转换到当前帧，生成 16×16×2 的机器人表面流目标。并行时间模块接收 t-15、t-8 和 t 的头相机观测，学习 Q15 与 Q8 两个查询；动作 token 只能通过这两个查询访问历史图像，而不能直接读取历史 patch。部署时几何渲染和流重建头均不运行。异步特征缓存在执行当前动作块时预编码历史帧，使推理临界路径只需当前帧编码。

## 实验设置与数据

LIBERO 四个 suite 联合训练 30K steps，每 GPU batch 32，用 8 张 H100，报告 3 个 seed、每 suite/seed 500 次 rollout。RoboTwin 2.0 训练 12 个任务 60K steps，每任务 50 条 clean 和 500 条随机示教，各设置评估 100 次。加入时间模块和辅助流解码使训练 wall-clock 约增加 20%。真实迁移在 AgiBot A3 上评估两个三阶段任务。

## 结果、限制与结论

模型在 LIBERO 平均成功率 97.63±0.26%，LIBERO Long 为 96.60±0.87%；RoboTwin 12 任务 clean/randomized 为 85.5%/84.2%， randomized 比已比较基线最高结果高 8.0 点，且 H2/H3 增益最大。移除或打乱历史都会增加动作损失，说明内容与顺序都被利用。异步缓存将平均服务端采样延迟从 68.10 ms 降至 62.78 ms，15 次重规划累计减少 7.8%。限制是历史窗口与采样间隔为固定设计，系统尚未研究不同任务的最优时间尺度。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2608.26821v1)
- [PDF 全文](https://arxiv.org/pdf/2608.26821)
- [HTML 全文](https://arxiv.org/html/2608.26821)
- [TeX source](https://arxiv.org/e-print/2608.26821)
