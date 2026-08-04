---
candidateId: "arxiv--2607.29231"
date: "2026-08-04"
rank: 7
title: "TacPrint：用于人到机器人接触复现的可穿戴指尖触觉传感器"
authors:
  - "Yongxi Liu"
  - "Chaofan Zhang"
  - "Xingyu Zhang"
  - "Xiangyin Bao"
  - "Boyue Zhang"
  - "Shaowei Cui"
  - "Shuo Wang"
summary: "TacPrint 是一个带 24 个电容 taxel 的可穿戴指尖传感器，通过 real-to-sim-to-real 学习从稀疏电容信号恢复 35×26 接触深度图，并验证了触觉补偿对人到机器人复现和闭环抓取的帮助。"
keywords:
  - "触觉感知"
  - "机器人操作"
  - "模仿学习"
score: 87.0
sources:
  - name: "arXiv full text"
    url: "https://arxiv.org/html/2607.29231"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29231v1"
previewImage: "/daily/2026-08-04/assets/arxiv--2607.29231/preview.png"
---

## 核心内容

论文要解决的是视觉和运动学示范缺少局部接触状态的问题。TacPrint 把硅胶皮肤内侧的凸点与 24 个电容 taxel 一一对应，兼顾佩戴性、低成本和局部接触转导；随后把时序电容测量映射成稠密接触深度，用于复现时的法向补偿和抓取时的接触位置调整。

## 关键技术与数据

传感器由 Shore 20A 硅胶皮肤、24 通道电容单元和 3D 打印支架组成，额外增加约 7.8 mm 指尖厚度，成本约 50 美元。模型使用 9 帧、24 通道输入，经单层单向 LSTM 和空间解码器生成 35×26 深度图；标签通过 TacFlex/Isaac Gym/Flex 重现受控接触配置得到。实验包括 40 次受控压入、果实抓取和白板擦拭复现，以及 8 个位置各 5 次的闭环橙子抓取。

## 结果与结论

相对模拟标签，接触区域 RMSE 为 0.223±0.161 mm、质心误差 1.213±2.379 像素、IoU 0.829±0.169；实测输入的中心深度 MAE 为 0.085±0.057 mm。触觉补偿把果实抓取和白板擦拭成功率从 0 分别提高到 91.67% 和 90%；稠密深度闭环抓取总体 87.5%、边缘接触 85%，原始 taxel 对应为 67.5% 和 45%。作者指出 24 通道限制细节重建，物理评估也不等价于完整真实弹性形变验证。

## 来源链接

- [本次精读原文](https://arxiv.org/html/2607.29231)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29231v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29231v1)
