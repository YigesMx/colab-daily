---
candidateId: "arxiv--2608.03295"
category: "Paper"
date: "2026-08-06"
rank: 7
title: "GraspMeanFlow: SE(3)-Equivariant MeanFlow for Few-Step 6-DoF Grasp Generation"
authors:
  - "Jiyong Kwon"
  - "Yikun Bai"
  - "Amirhossein Mollaali"
  - "Guang Lin"
summary: "GraspMeanFlow 以 SE(3) 等变 MeanFlow 学习有限时间段的平均速度，在少量函数调用下生成六自由度抓取姿态。"
keywords:
  - "灵巧抓取"
  - "三维几何"
  - "实时控制"
score: 79
sources:
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.03295v1"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2608.03295v1"
previewImage: "/daily/2026-08-06/assets/arxiv--2608.03295/preview-main.png"
---

## 核心内容

迭代流模型通常需要多次函数评估，限制了实时抓取。GraspMeanFlow 直接学习有限时间区间的平均速度，并用刚体运动的时间有序指数保证平均速度流仍保持 SE(3) 等变性，使少步采样不牺牲物体旋转和平移一致性。

## 关键技术与数据

模型在点云条件下预测六自由度抓取分布，时间对被提升为等变向量，训练使用 flow-matching boundary term 与 differential MeanFlow identity 或不需要 JVP 的 semigroup loss。实验在 ACRONYM 上比较迭代 SE(3) flow、少步生成质量和抓取成功率。

## 结果与结论

作者报告一次函数评估可达到迭代 SE(3) flow 五步时的 EMD；另一实例在 few-step 设置下将抓取成功率提升最多 24.3 个百分点，并保持对物体刚体变换的精确等变。论文的证据主要来自离线抓取数据集和有限生成设置，真实闭环感知、遮挡和碰撞恢复不在这些结果中，因此少步采样优势仍需实体部署验证。

## 来源链接

- https://arxiv.org/pdf/2608.03295v1
- https://arxiv.org/abs/2608.03295v1
