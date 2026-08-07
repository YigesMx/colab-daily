---
candidateId: "arxiv--2608.04653"
category: "Paper"
date: "2026-08-07"
rank: 10
title: "CoCo：用反事实一致性抑制可控世界模型的统计捷径"
authors:
  - "Yuhong Shi"
  - "Zhenhao Chu"
  - "Jie Wei"
  - "Jun Hao"
  - "Jianyi Liu"
  - "Jingwen Fu"
summary: "CoCo 通过正向、逆动作、零动作循环与镜像场景-动作等变约束，让视频世界模型必须响应控制而非依赖视觉惯性，并提出 ARC 与 DE 直接评估可控性。"
keywords:
  - "可控世界模型"
  - "反事实推理"
score: 78.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.04653v1"
previewImage: "/daily/2026-08-07/assets/arxiv--2608.04653/preview.png"
---

## 核心内容

动作条件世界模型可能生成很真实的视频，却几乎不根据动作改变未来：数据中的视觉惯性和常见运动足以降低重建误差。CoCo 要求模型在干预下保持结构一致。时间上，原动作后接逆动作应近似回到初态，零动作应保持状态；空间上，同时镜像画面和左右动作，预测也应相应镜像。

## 关键技术与数据

MSC2 联合参考 rollout、逆动作循环和零动作漂移损失，在多步预测中约束方向与幅度；ASC2 以水平镜像为数据依赖的近似等变正则。论文同时提出 Action Response Consistency 衡量参考/逆动作对应关系，Drift Energy 衡量零动作时的虚假运动，并构造每个状态配左、右、前三动作的 Mini-SSMB。进一步在 BAIR、RoboNet 视频预测、VP2 视觉规划和 MetaWorld 模型式强化学习中测试。

## 结果与结论

Mini-SSMB 上完整模型 ARCinv 0.412、ARCref 0.483，DE 相对基线降低 17.07%。BAIR 上相对 iVideoGPT，FVD 73.46 降至 71.27、LPIPS 5.88 降至 4.84、PSNR 23.33 升至 28.35；RoboNet 的 DE 从 0.945 降至 0.091。VP2 归一化平均规划成功率 73.1%，比 SAMPO 高 0.9 点。MetaWorld 多项收益的置信区间重叠且 Coffee Push 无明确优势。反事实分支增加训练计算，预定义逆动作和镜像对不可逆接触或复杂语义动作可能无定义，这是应用到真实机器人前的主要边界。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.04653v1)
- [arXiv PDF](https://arxiv.org/pdf/2608.04653v1)
