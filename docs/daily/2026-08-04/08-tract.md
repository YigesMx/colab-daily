---
candidateId: "arxiv--2607.29285"
date: "2026-08-04"
rank: 8
title: "TRACT：面向接触丰富操作的时序路由动作块"
authors:
  - "Jiahao Liu"
  - "Kento Kawaharazuka"
  - "Tasuku Makabe"
  - "Kei Okada"
summary: "TRACT 将当前控制阶段与未来动作块中的阶段边界分开建模，用任务局部图约束阶段顺序，并用因果响应亏损积分器处理接触导致的动作意图与实际运动不匹配。"
keywords:
  - "动作块"
  - "模仿学习"
  - "机器人操作"
score: 87.0
sources:
  - name: "arXiv full text"
    url: "https://arxiv.org/html/2607.29285"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29285v1"
previewImage: "/daily/2026-08-04/assets/arxiv--2607.29285/preview.png"
---

## 核心内容

常规 phase conditioning 把当前阶段附着到整个未来动作块，但动作块可能跨越程序边界。TRACT 先由 chronological phase authority 接受当前阶段，再在未来窗口内只预测一次 CURRENT 到合法 NEXT 的边界，并以单调门控将查询和动作路径切换到下一阶段。

## 关键技术与数据

边界预测输出 k∈[0,H] 的分布，使用累积概率构造不可逆的单调门控；任务局部图限制合法后继，阶段特定 query/action 路径和共享时序主干共同解码动作。执行闭环只使用有 ACK 的命令响应 lineage，比较期望方向与真实运动，累积响应亏损并在恢复后衰减，只修改手臂补偿而保留阶段、路由和夹爪语义。实验是在 Franka Panda、Franka Hand、30 Hz 策略和 1000 Hz 低层控制上的 6 个变体，每个 10 次完整试验。

## 结果与结论

完整 TRACT 达到 10/10 全序列成功、中位擦拭完成率 99.00% [88.75,100.00]、0 次阶段歧义和 0 次停滞。关闭积分器的 routed variant 为 6/10、77.08% 和 4/10 停滞；flat phase-conditioned package 为 3/10、8.03% 和 7/10 停滞。作者强调 flat 与 routed 的包级对比没有隔离路由本身，证据仅来自一个固定场景任务和每条件 10 次试验。

## 来源链接

- [本次精读原文](https://arxiv.org/html/2607.29285)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29285v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29285v1)
