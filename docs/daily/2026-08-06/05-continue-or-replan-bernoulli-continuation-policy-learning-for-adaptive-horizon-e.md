---
candidateId: "arxiv--2608.03483"
date: "2026-08-06"
rank: 5
title: "Continue or Replan? Bernoulli-Continuation Policy Learning for Adaptive Horizon Execution"
authors:
  - "Weichen Xu"
  - "Zhenhua Liu"
  - "Lin Luo"
  - "Yaobo Liang"
  - "Chengtang Yao"
  - "Qingyu Mei"
  - "Jian Cao"
  - "Xixin Cao"
  - "Xing Zhang"
  - "Jiaolong Yang"
  - "Baining Guo"
summary: "BCP 将固定动作执行窗口改为逐步 continue-or-replan 决策，用强化学习和重规划效率奖励在关键操作阶段刷新 VLA 观察。"
keywords:
  - "视觉语言动作模型"
  - "动作分块"
  - "自适应重规划"
score: 81
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.03483v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.03483v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.03483/preview.png"
---

## 核心内容

固定执行 horizon 会让重规划边界与任务阶段错位，精细抓取或挂取动作可能继续使用已经过时的动作块。BCP 保持基础 VLA 冻结，单独学习每个动作块应该继续执行还是立即重规划，使执行边界随任务进度变化。

## 关键技术与数据

继续决策被组织成具有序关系和前缀共享结构的 Bernoulli-Continuation head，避免把候选 horizon 当成互相独立的分类。由于单块停止标签不可观测，训练使用轨迹级强化学习；Replanning-Efficiency Reward 同时考虑成功和 VLA 调用成本，避免成功奖励驱使策略过度频繁重规划。实验覆盖 RoboTwin 2.0、LIBERO、LIBERO-PRO 和 AGIBOT G1。

## 结果与结论

在 RoboTwin 2.0 的 50 个任务上，LingBot-VLA 平均成功率从 89.88% 提升到 93.94%，随机设置从 88.78% 提升到 92.84%；13 个低成功任务提升 11.08%。LIBERO 和 LIBERO-PRO 也有提升，真实机器人抓取瓶子从 74% 到 92%，挂杯从 44% 到 84%。附录消融显示效率奖励和 Bernoulli 结构都有效；局限是任务和基础 VLA 依赖明显，跨平台长期稳定性还未验证。

## 来源链接

- https://arxiv.org/pdf/2608.03483v1
- https://arxiv.org/abs/2608.03483v1
