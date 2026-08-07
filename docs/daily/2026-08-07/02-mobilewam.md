---
candidateId: "arxiv--2608.04657"
category: "Paper"
date: "2026-08-07"
rank: 2
title: "MobileWAM：用因果前瞻链协调移动与操作"
authors:
  - "Zehua Fan"
  - "Junjie He"
  - "Wenxuan Song"
  - "Xi Wang"
  - "Wenqi Lyu"
  - "Linge Zhao"
  - "Fuhao Li"
  - "Zihan You"
  - "Yifei Yang"
  - "Kaiming Xu"
  - "Qi Jiang"
  - "Yue Jiang"
  - "Haoang Li"
  - "Cheng Chi"
  - "Bailin Li"
  - "Yan Wang"
summary: "MobileWAM 将视频生成式世界动作模型扩展到移动操作，以 Chain-of-Foresight 提供串行未来监督，并用共享、移动、操作三专家软路由协调全身动作；训练期前瞻在部署时删除。"
keywords:
  - "世界动作模型"
  - "移动操作"
score: 85.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.04657v1"
previewImage: "/daily/2026-08-07/assets/arxiv--2608.04657/preview.png"
---

## 核心内容

移动操作不是简单把导航和桌面抓取拼接起来：相机随底盘持续运动，底盘与机械臂存在多种可行协同路径，而且早期移动误差会在后续抓取中放大。MobileWAM 把预训练视频扩散 Transformer 作为世界专家，通过逐层联合注意力连接轻量动作专家，让互联网视频中的运动先验参与全身控制。

## 关键技术与数据

动作专家的前馈层改造成共享、locomotion、manipulation 三专家混合，由动作 token 中的运动意图软路由。Chain-of-Foresight 从不同深度的中间表征抽取 belief state，串行预测多个未来 latent chunk，使后一步以前一步为条件；它只通过训练梯度塑造表征。视频和动作采用解耦去噪，部署时删除 CoF 和视频生成分支，仅缓存当前帧特征并去噪动作。ManiSkill-HAB 使用七个 SetTable 子任务，每任务 1,000 条过滤示范，RGB 输入、单阶段训练。

## 结果与结论

MobileWAM 在 ManiSkill-HAB 的平均成功率为 73.0%，比 AC-DiT 高 17.4 个百分点，并在七项中的五项领先。组件消融中，普通 WAM 为 65.4%，加入 CoF 为 68.9%，再加入移动 MoE 为 73.0%；Transformer 串行 CoF 优于并行监督和 MLP 链。动作-only 推理相对 Motus 和 LingBot-VA 分别加速 5.3 倍与 8.7 倍。ARX Lift2 的五项实机任务均优于相同数据微调的 π0.5，但最长复合任务也仅达到 15%，表明长程移动操作仍远未解决；论文验证范围集中于一个模拟套件和一个实机平台。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.04657v1)
- [arXiv PDF](https://arxiv.org/pdf/2608.04657v1)
