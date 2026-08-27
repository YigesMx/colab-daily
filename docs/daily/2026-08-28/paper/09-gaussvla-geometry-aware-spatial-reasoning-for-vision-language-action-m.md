---
candidateId: "arxiv--2608.24959"
businessCandidateId: "arxiv--2608.24959"
date: "2026-08-28"
category: Paper
title: "GaussVLA: Geometry-Aware Spatial Reasoning for Vision-Language-Action Model"
authors: ["arxiv.org"]
summary: "GaussVLA用高斯空间tokenizer把冻结语义与深度特征提升为带置信度的三维token，再以DA-CoT和Mamba流匹配动作头做非自回归几何推理，在空间敏感操作中以较小模型取得较强结果。"
provisionalKeywords: ["视觉语言动作模型", "机器人操作"]
keywords: ["视觉语言动作模型", "机器人操作"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.24959v1"}
previewImage: "/daily/2026-08-28/assets/arxiv--2608.24959/preview.jpg"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 9
groupScore: 82
scoreScale: "paper-v2"
emphasis: false
---

# GaussVLA: Geometry-Aware Spatial Reasoning for Vision-Language-Action Model

## 研究问题与贡献

**GaussVLA: Geometry-Aware Spatial Reasoning for Vision-Language-Action Model** 的一句话结论是：把平坦2D patch和标量深度改成带均值、尺度与置信度的三维高斯token，并把深度感知推理直接接入动作解码，可提升空间敏感操作。论文指出普通VLA视觉token没有内在几何结构，逐像素深度只给距离，不给表面朝向和可靠性；自回归CoT主要停留在2D并带来时延。GaussVLA的贡献是Gaussian Spatial Tokenizer、Depth-Aware Chain-of-Thought和线性时间Mamba统一框架。

## 方法与系统

模型用冻结SigLIP提取语义patch、冻结Depth Anything V2提取深度，并对单目深度做可学习仿射校正后按相机内参反投影。每个patch预测三维均值偏移、三轴尺度和opacity，形成各向异性高斯原语；opacity通过加权深度一致性损失间接学习几何可靠性。128个可学习空间查询按opacity偏置做cross-attention pooling，压缩为GST token。DA-CoT用4个推理查询在语言与flow-time条件下交叉注意GST，非自回归生成结构化空间摘要。Mamba主干融合语言、GST、推理与动作token，流匹配头输出7自由度、10步动作chunk。总损失为flow matching、GST深度一致性与DA-CoT辅助速度预测。

## 实验设置与数据

评测覆盖LIBERO、LIBERO-PRO、Meta-World难度分层、CALVIN ABCD->D和SO-101真实机器人。LIBERO每任务40次rollout；真实SO-101使用6自由度臂、平行夹爪与RealSense 640x480/60Hz相机，控制15Hz，每任务50条遥操作示范，动作horizon为10。实现使用128个GST查询、4个DA-CoT查询、512维主干、5个Mamba块与10步Euler采样；摘要和实现段落称总参数约200M、可训练约179M，推理12.97ms/步。需注意论文表格中GaussVLA参数量显示为1B，与摘要和实现文字的200M不一致，本综述按摘要/实现段落记录，并把该不一致列为待复核。

## 结果、限制与结论

论文报告LIBERO平均93.5%，Spatial 100%、Object 95.8%、Goal 95.3%、Long 83.0%，作者称相对SpatialVLA平均提升19.7%相对值。Meta-World平均54.9%，Easy 92.7%；CALVIN平均完成序列1.474。真实SO-101多任务平均58.8%，高于SpatialVLA 46.3%与ACT 35.7%；Pick-Place ID 81.0%、OOD 46.7%。消融显示vanilla为LIBERO 78.1%、LIBERO-PRO 11.2%；仅GST为90.5%/29.0%；全模型93.5%/33.3%。限制：LIBERO-PRO平均仅0.33，位置与任务级扰动显著失败；单目深度与opacity置信度仍是间接估计；参数量表述存在前述不一致；CALVIN五连续任务完成率为0。未知项：多视角标定误差、更宽本体和复杂接触任务中的稳定性未充分验证。

## 来源链接

- [arXiv论文](https://arxiv.org/abs/2608.24959v1)
- [项目页面](https://gaussvla.github.io/GaussVLA/)
