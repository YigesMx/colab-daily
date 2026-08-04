---
candidateId: "arxiv--2608.01826"
date: "2026-08-05"
rank: 10
title: "Multi-View Unified Camera Fields: Geometry-Shaped Action-Facing Representations for RGB-Only Multi-Camera VLA Policies"
authors:
  - "Jiarui Yang"
  - "Yehao Lu"
  - "Yuning Su"
  - "Yufeng Xie"
  - "Yu Zhong"
  - "Haiyu Lan"
  - "Tianjing Hao"
  - "Kaixiang Lu"
  - "Peiwen Lin"
  - "Chuang Wang"
  - "Enyu Li"
  - "Junwei Liang"
summary: "MVUCF 在训练期向多相机 VLA 的动作表征注入可恢复度量深度和跨视图同点一致性，部署时恢复为不带深度和标定输入的 RGB-only 图。"
keywords:
  - "多视角几何"
  - "视觉语言动作模型"
  - "机器人泛化"
score: 77
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.01826v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.01826v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.01826/preview.png"
---

## 核心内容

MVUCF 质疑仅拼接多相机 token 是否足以让动作模块建立共同几何场。它将深度可恢复性与跨视图物理点对应直接约束在随后供动作头使用的隐藏网格，而不是另建一个部署期几何分支。

## 关键技术与数据

以 GR00T-N1.6 为骨干，训练期只更新第 8-15 层并读取第 15 层动作向隐藏网格。coordinate-query depth head 在连续 grid 位置预测度量深度；对应损失先在原始标定相机坐标中由深度反投影和跨相机重投影产生正样本，再通过完整预处理映射到 token 格。两项辅助头在几何注入后删除，随后只用 RGB 训练动作模块。评估包含表征 probe、LIBERO、LIBERO-Plus、六项 RoboTwin 和两任务人形实机 pilot。

## 结果与结论

作者报告匹配 GR00T 比较中 LIBERO 平均从 97.4% 到 98.9%，LIBERO-Plus 总体从 42.8% 到 65.2%，RoboTwin 六任务从 38.6% 到 61.9%。表征诊断给出深度 MAE 从 4.9 cm 到 0.44 cm、2 cm 内比例从 44% 到 97%；60 次实机 trial 中为 49 次成功，对照 40 次。作者同时指出方法假定训练期标定准确，对被破坏或噪声标定的鲁棒性尚未测试，因此不应把 RGB-only 部署理解为摆脱训练几何质量的依赖。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.01826v1
- arXiv 摘要页：https://arxiv.org/abs/2608.01826v1
