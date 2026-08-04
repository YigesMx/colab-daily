---
candidateId: "arxiv--2607.28993"
date: "2026-08-04"
rank: 4
title: "ST-WAM：面向视觉分布偏移下鲁棒操作的语义时序世界动作模型"
authors:
  - "Mingxin Wang"
  - "Bin Hu"
  - "Bin Qian"
  - "Kaitao Jiang"
  - "Haoning Wu"
  - "Feng Yan"
  - "Bowen Jing"
  - "Ruiyang Hao"
  - "Enyi Wang"
  - "Kangning Niu"
  - "Yandan Yang"
  - "Mu Xu"
  - "Yan Wang"
  - "Houde Liu"
  - "Tianlun Li"
summary: "ST-WAM 发现视频生成式世界动作模型在视觉分布偏移时会把未来预测拉回训练域，并用 DINOv3 的语义特征补充 VAE 的细粒度动力学。论文在 LIBERO、RoboTwin 2.0、LIBERO-Plus 和真实机器人上报告了更强的偏移鲁棒性。"
keywords:
  - "世界动作模型"
  - "视觉几何表征"
  - "机器人操作"
score: 92.0
sources:
  - name: "arXiv full text"
    url: "https://arxiv.org/html/2607.28993"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.28993v1"
previewImage: "/daily/2026-08-04/assets/arxiv--2607.28993/preview.png"
---

## 核心内容

论文将训练分布幻觉定义为：输入背景、光照或视角发生变化后，模型预测的未来反而生成训练域内容，而不是忠实跟随当前场景。ST-WAM 的思路不是修复生成后的视频，而是让未来预测和历史检索都利用对视觉变化更稳定、又能区分任务状态的语义特征。

## 关键技术与数据

Dual-Space Future Experts 在 Wan VAE 潜变量和 DINOv3 特征空间中联合预测未来，并通过三分支 Mixture-of-Transformers 与动作专家交互；Current-Anchored Intent Retrieval 用当前图像语言上下文从近期 DINO 历史检索任务相关证据。训练时未来分支使用 flow matching，推理时省略未来生成分支，仅保留动作输出。实验使用 H=32 动作块、K=8 未来帧、M=4 历史帧，并在 LIBERO、LIBERO-Plus、RoboTwin 2.0 和 Agilex Piper 上评估。

## 结果与结论

原文报告 ST-WAM 在 LIBERO 平均 98.7%，RoboTwin 2.0 平均 92.77%，LIBERO-Plus 总体 72.8%，比 Fast-WAM 高 21.3 个百分点；A100 上生成 32 步动作块平均 756.17 ms。真实任务标称条件平均成功 79.3%，视觉偏移下 61.5%，Fast-WAM 对应 25.8%。去掉语义未来专家或 CAIR 后偏移条件分别降至 41.0% 和 43.7%。

## 来源链接

- [本次精读原文](https://arxiv.org/html/2607.28993)
- [arXiv 摘要页](https://arxiv.org/abs/2607.28993v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.28993v1)
