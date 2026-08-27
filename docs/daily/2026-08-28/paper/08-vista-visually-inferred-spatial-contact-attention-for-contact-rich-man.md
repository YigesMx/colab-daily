---
candidateId: "arxiv--2608.25872"
businessCandidateId: "arxiv--2608.25872"
date: "2026-08-28"
category: Paper
title: "VISTA: Visually Inferred Spatial ConTact Attention for Contact-Rich Manipulation"
authors: ["arxiv.org"]
summary: "VISTA用外部相机观察被动柔顺夹爪的三维变形场作为低成本视觉物理反馈，结合能量去噪与相对夹爪增量动作，在跨尺度抓取、开盖与书法任务上超过纯视觉和触觉基线。"
provisionalKeywords: ["机器人操作", "空间表征", "机器人推理与学习"]
keywords: ["机器人操作", "空间表征", "机器人推理与学习"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.25872v1"}
previewImage: "/daily/2026-08-28/assets/arxiv--2608.25872/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 8
groupScore: 84
scoreScale: "paper-v2"
emphasis: false
---

# VISTA: Visually Inferred Spatial ConTact Attention for Contact-Rich Manipulation

## 研究问题与贡献

**VISTA: Visually Inferred Spatial ConTact Attention for Contact-Rich Manipulation** 的一句话结论是：把柔顺夹爪可见变形提取为Visual Deformation Field，可以让不装专用触觉或力传感器的机器人获得结构化接触反馈。论文认为传统视觉策略只看到物体外观、几何与机器人运动，接触区被遮挡或形变微小时证据模糊；触觉硬件又存在磨损、成本、跨设备不一致与平面接触测量问题。VISTA的贡献包括VDF提取、空间能量去噪和变形增强策略网络。

## 方法与系统

Physics-Aware Encoding Engine基于Track-Anything重构为单步流式跟踪，结合多尺度语义分割、B样条边缘参数化与RGB-D反投影。系统沿夹爪纵向采样N个点，每点记录左右指在x/z方向的4维相对位移，形成T×N×4的VDF。Energy Aggregation Denoising先用噪声底截断单点扰动，再聚合全场有效变形能量，经sigmoid与EMA得到连续接触置信度，并用可学习neutral embedding软门控非接触期特征。策略网络用1D CNN提取单帧形变、自适应最大/平均池化捕捉峰值与分布，再用Transformer readout token聚合时序；夹爪动作改为相对增量，解除绝对孔径标签限制。

## 实验设置与数据

硬件为UR3机械臂、UMI式被动柔顺夹爪、RealSense L515全局相机与D405局部相机。基线包括全局点云DP3、加腕部点云的DP3-Wrist、商用Daimon视觉触觉TDF-DM，以及绝对动作、无能量去噪、MLP编码器等消融。除样本效率实验外默认20条专家示范；标准配置每项10次，鲁棒性每项5次。任务为跨尺度物体抓取、不同直径瓶盖旋开和不同笔/高度书法，指标包括成功率、掉落率、错位率、持笔/书写成功率和笔画质量。

## 结果、限制与结论

总体结果中，VISTA跨尺度抓取100%/掉落0、开盖90%/错位0、书法持笔100%/书写90%；DP3-Wrist分别为50%、40%、90%/40%，TDF-DM为60%、50%、80%/20%。只用4cm物体训练时，VISTA在未见尺度100%成功，DP3-Wrist为50%。多尺度训练下VISTA仍为100%，DP3-Wrist为40%。物体被扰动掉落后，VISTA 5次中4次完成二次抓取，DP3-Wrist为0。论文称柔顺夹爪成本约77美元，并经受超过1000次高强度接触试验无结构退化。限制：完全遮挡与极低光照会降低特征提取；当前VDF主要是接触状态反馈而非力估计；任务、物体与相机布置仍较受控。未知项：复杂平面接触、异形工具、力控安全边界和与VLA语义控制结合的效果未验证。

## 来源链接

- [arXiv论文](https://arxiv.org/abs/2608.25872v1)
