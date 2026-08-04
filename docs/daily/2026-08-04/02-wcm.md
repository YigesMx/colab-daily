---
candidateId: "arxiv--2607.29613"
date: "2026-08-04"
rank: 2
title: "WCM：面向视觉语言动作强化学习的世界批评模型"
authors:
  - "Senyu Fei"
  - "Xiaopeng Yu"
  - "Siyin Wang"
  - "Xianzhong Zhao"
  - "Jingjing Gong"
  - "Xipeng Qiu"
summary: "WCM 把世界预测目标加入 VLA 强化学习的 critic，使其从观测历史预测未来潜变量并同时估计价值。论文在四个仿真基准的 149 个任务和 7 个真实操作任务上报告了相对单帧 critic 的性能与泛化收益。"
keywords:
  - "世界模型"
  - "视觉语言动作"
  - "闭环策略优化"
score: 94.0
sources:
  - name: "arXiv full text"
    url: "https://arxiv.org/html/2607.29613"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29613v1"
previewImage: "/daily/2026-08-04/assets/arxiv--2607.29613/preview.png"
---

## 核心内容

论文指出，机器人操作是部分可观测过程，单帧价值回归难以表达运动、接触进展和未来演化。WCM 将 critic 表征从单纯拟合标量回报转向预测未来状态，使价值估计和时序动力学共享一个可更新的表示。

## 关键技术与数据

WCM 基于轻量 LeJEPA，由观测编码器、因果 Transformer 世界预测器、价值头和动作条件潜变量预测头组成。历史图像与语言指令被编码后，预测器输出价值和下一时刻潜变量；训练目标组合价值损失、未来潜变量预测损失和 SIGReg 防塌缩正则。系统可接入 π0、π0.5 和 OpenVLA-OFT，并分别用于 PPO/Flow-SDE 的 on-policy 以及 AWR/RECAP 的 off-policy 管线。评估覆盖 ManiSkill、MetaWorld、CALVIN、LIBERO-Plus，以及 WidowX-250S 上的 7 个任务。

## 结果与结论

作者报告在 ManiSkill 上 WCM 对 π0、π0.5 和 OpenVLA-OFT 都提升 IND/OOD 表现；OpenVLA-OFT 的 WCM 版本在表中达到 99.0 IND 和 77.9 OOD。LIBERO-Plus 的 one-shot SFT 初始化下，WCM 总体为 72.8。真实任务中，OpenVLA-OFT 的 7 项成功次数为 32/50、26/50、26/50、38/50、40/50、15/50、22/50，π0.5 为 44/50、38/50、43/50、38/50、35/50、33/50、24/50。作者也发现历史长度 3 在其任务上平均最好，并承认仍可能存在 critic 过拟合。

## 来源链接

- [本次精读原文](https://arxiv.org/html/2607.29613)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29613v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29613v1)
