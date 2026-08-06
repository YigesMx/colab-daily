---
candidateId: "arxiv--2608.04196"
date: "2026-08-07"
rank: 5
title: "SiMDex：从三千二百万第一视角样本中精准挖掘灵巧操作数据"
authors:
  - "Nie Lin"
  - "Takehiko Ohkawa"
  - "Sijin Chen"
  - "Ruoshi Wen"
  - "Zhuohang Li"
  - "Liqun Huang"
  - "Zhengming Zhu"
  - "Yiming Bao"
  - "Yunfei Li"
  - "Minjie Cai"
  - "Xiao Ma"
  - "Wei Xu"
  - "Yoichi Sato"
summary: "SiMDex 把跨形态人类视频筛选视为推荐问题，以召回、运动排序和光流重排从约 3,203 万样本中选出不足 5%，在不改 VLA 架构的情况下提高实机灵巧操作后训练效果。"
keywords:
  - "视觉语言动作模型"
  - "灵巧操作"
  - "数据筛选"
score: 82.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.04196v1"
previewImage: "/daily/2026-08-07/assets/arxiv--2608.04196/preview.png"
---

## 核心内容

大规模第一视角人类视频并不天然适合目标机器人任务。SiMDex 对每条机器人示范寻找动作相似的人类片段，把数千万级数据选择改写成工业推荐系统式的逐层缩小问题。它只改变后训练所用的人类数据，不改变 VLA 架构、损失或机器人监督，因此实验能较清楚地隔离数据选择的价值。

## 关键技术与数据

人手和机器人手先被映射到腕坐标系下的五指尖位置与六维腕增量，形成与关节结构无关的 42 维双手动作。第一阶段按语言 embedding 与初始手形召回；第二阶段比较腕平移、旋转、指尖与腕轨迹并去重；第三阶段用光流做视觉运动核验。人类池来自 EgoDex 的约 3,203 万个一秒窗口，最终检索约 149 万；训练以 1:1 混合约 135 万机器人帧样本和人类样本，所有超参数与随机采样基线一致。

## 结果与结论

三个实机任务总体成功率从 47.7% 提升到 61.1%。Flick Wheel 从 24.5% 到 45.5%，Pick & Place 从 54.0% 到 83.4%，但 Drill 从 64.5% 降到 54.5%。缩放实验显示优势在机器人数据较少时最大，约 6 小时机器人数据可匹配随机基线约 25 小时的表现。限制也很明确：仅覆盖一个工业装配场景、三个任务和一种主要形态；收益依赖人类池中是否有对应技能；纯运动学相似度不含接触力与物体状态，光流重排还带来非平凡计算成本。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.04196v1)
- [arXiv PDF](https://arxiv.org/pdf/2608.04196v1)
