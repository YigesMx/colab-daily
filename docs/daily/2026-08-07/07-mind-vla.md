---
candidateId: "arxiv--2608.04633"
date: "2026-08-07"
rank: 7
title: "Mind-VLA：让三维监督聚焦语言指定的目标物体"
authors:
  - "Xingyu Ding"
  - "Yuzhong Zhao"
  - "Yang Wu"
  - "Chaoyang Zhao"
  - "Chunhai Zhao"
  - "Yifan Zhang"
  - "Jian Cheng"
summary: "Mind-VLA 不再把整幅场景统一对齐到三维特征，而是在训练期预测语言目标物体的三视图 latent 并对齐 VGGT 特征，从而增强细粒度定位与遮挡鲁棒性。"
keywords:
  - "视觉语言动作模型"
  - "三维空间理解"
score: 80.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.04633v1"
previewImage: "/daily/2026-08-07/assets/arxiv--2608.04633/preview.png"
---

## 核心内容

现有三维感知 VLA 往往对整个场景提供点云输入或全局几何监督，却没有根据指令区分真正要操作的对象。Mind-VLA 先从语言中确定目标物体，再构造其顶部、正面、侧面规范视图，让模型在训练时明确保存目标几何，而非平均编码背景和干扰物。辅助模块推理时移除，因此输入仍是普通图像、语言和状态。

## 关键技术与数据

主干包含场景、对象、动作三组 query：场景 query 预测 patch RGB 与二维运动，对象 query 预测目标三视图的 Stable Diffusion VAE latent，并在四个中间层对齐冻结 VGGT 从同一三视图提取的几何特征；动作 query 条件化扩散 Transformer 预测后三步动作。模型为 345M 参数，在 LIBERO-90 预训练后按 suite 微调；实机使用 xArm 6、静态与腕部 RealSense，每个物体需一次约一分钟的三视图拍摄。

## 结果与结论

Mind-VLA 在 LIBERO 平均 93.9%，接近 3B π0 的 94.2%；CALVIN ABC-D 平均完成长度 4.47。目标三视图 VGGT 对齐比整场景对齐平均高 1.1 点，并在 LIBERO-Object 高 4 点。实机正常五项平均 69%，约 25% 遮挡下从 67% 降至 54%，而整场景对齐从 57% 降至 28%。代价是每个目标对象需要预先准备规范三视图、一次只映射一个目标，因而不支持任意未见对象零样本部署；长程套件也略逊于保留全场景建模的 DreamVLA。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.04633v1)
- [arXiv PDF](https://arxiv.org/pdf/2608.04633v1)
