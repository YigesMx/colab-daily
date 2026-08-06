---
candidateId: "arxiv--2608.04575"
date: "2026-08-07"
rank: 14
title: "PhysMind：把视频重建成可编辑、可执行的物理世界"
authors:
  - "Chen Yang"
  - "Shenxiang Zeng"
  - "Haoyang Zhao"
  - "Zhouyuan Xu"
  - "Youquan He"
  - "Haoyu Li"
  - "Mingyi Deng"
  - "Jiansheng Fan"
  - "Chen Wang"
summary: "PhysMind 在不针对 benchmark 训练的情况下，从视频恢复对象身份、网格和 6D 轨迹，拟合连续时间动力学，再通过检查、续演或编辑世界回答解释、预测与反事实问题。"
keywords:
  - "具身仿真"
  - "可控世界模型"
  - "反事实推理"
score: 75.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.04575v1"
previewImage: "/daily/2026-08-07/assets/arxiv--2608.04575/preview.png"
---

## 核心内容

直接视频问答往往从视觉模式或文字推理猜测物理结果，尤其难回答移除物体、改变碰撞等未在视频中发生的反事实。PhysMind 先为每段视频建立一个与问题无关的世界：持久对象、网格、相机、6D 轨迹和隐含物理参数。收到问题后再选择检查现状、继续动力学或克隆并编辑世界，以执行结果作为答案证据。

## 关键技术与数据

系统组合 SAM 3 跟踪、MoGe-2 内参、Video Depth Anything、SAM 3D Objects 网格和 FoundationPose。VLM 负责语义、工具和约束选择；连续时间系统辨识以解析轨迹描述运动模式，把碰撞处理为瞬时状态转换，避免在长时间步进仿真中反复传播离散误差。默认 Gemini-3-Flash 作为 agent VLM，一次重建服务同视频的多个问题；整个流程不在 CLEVRER 或 Physion++ 上微调。

## 结果与结论

CLEVRER 每题准确率 72.55%，比同骨干 CoT 高 38.23 点、比 GPT-5.5 高 5.31 点；反事实比 GPT-5.5 高 19.25 点。Physion++ 总体 59.64%，比同骨干高 8.08 点。把解析辨识换成固定步长积分，100 场景子集总体从 73.10% 降到 30.80%；只用轨迹、不执行世界时反事实从 71.89% 降到 16.22%。117 个错误中 92.31% 源于感知、位姿、动力学、轨迹精度或可见性等世界构建阶段，说明显式模型增强可审计性，也把上游重建误差变成主要瓶颈。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.04575v1)
- [arXiv PDF](https://arxiv.org/pdf/2608.04575v1)
