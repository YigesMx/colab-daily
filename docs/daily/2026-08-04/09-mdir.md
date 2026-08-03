---
candidateId: "arxiv--2607.29271"
date: "2026-08-04"
rank: 9
title: "MDIR：面向接触丰富遥操作的任务流形阻抗重定向"
authors:
  - "Liu Jiahao"
  - "Kento Kawaharazuka"
  - "Tasuku Makabe"
  - "Kei Okada"
summary: "MDIR 研究从一次固定笛卡尔阻抗示范生成可执行的任务通道可变阻抗控制器，将任务响应分解为 work、exertion、support 和被动残差，再以约束优化降低力峰值、冲量和功率。"
keywords:
  - "阻抗控制"
  - "模仿学习"
  - "机器人操作"
score: 85.0
sources:
  - name: "arXiv full text"
    url: "https://arxiv.org/html/2607.29271"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29271v1"
previewImage: null
---

## 核心内容

固定笛卡尔阻抗能帮助接触操作推进和保持接触，却会同时带来冲击和力波动。MDIR 把保留对象定义为示范附近的任务通道响应，而不是逐点复刻整条姿态轨迹：work 表示进展，exertion 表示接触加载，support 表示功能性支撑，剩余空间保留为被动柔顺。

## 关键技术与数据

TMIR 在与控制链一致的 Λ_ctrl 度量下构造切向和力的对偶基；C2M 解析地投影原控制器响应并用 attractor offset 补偿阻尼泄漏；MPO 在任务通道 RI、稳定接触 RMS、工作阻尼下界和参数盒约束内优化刚度、阻尼和偏移。实验用 Franka Panda、腕部 F/T 和 Geomagic Touch，在平面擦拭、抓取放置、推物三个任务中，每任务 5 个独立示范-重定向-执行试验。

## 结果与结论

MDIR 在 15 次执行全部通过 Task Check；平面擦拭、抓取放置和推物分别降低了报告的力峰值、冲量、力方差上尾和名义功率指标。代表性结果包括擦拭冲量降低 29.6±7.7%、抓取放置力峰值降低 75.9±10.5%、推物力方差上尾降低 48.8±24.5%。消融表明去掉 work、exertion、support、被动残差、控制链度量或约束会导致轨迹漂移、失去接触或任务失败。

## 来源链接

- [本次精读原文](https://arxiv.org/html/2607.29271)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29271v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29271v1)
