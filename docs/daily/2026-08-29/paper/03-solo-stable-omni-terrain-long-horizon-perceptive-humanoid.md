---
candidateId: "arxiv--2608.26583"
businessCandidateId: "arxiv--2608.26583"
date: "2026-08-29"
category: Paper
title: "SOLO: Stable Omni-terrain Long-Horizon Perceptive Humanoid Locomotion"
authors: ["arxiv.org"]
summary: "SOLO 用逐高度图单元查询重建和轨迹感知蒸馏解决长时程人形运动中的地形细节丢失与短视模仿，零样本完成 1.5 公里连续室外路线。"
provisionalKeywords: ["具身智能", "机器人操作", "实时推理"]
keywords: ["具身智能", "机器人操作", "实时推理"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.26583v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.26583"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2608.26583"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/e-print/2608.26583"}
previewImage: "/daily/2026-08-29/assets/arxiv--2608.26583/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 90
scoreScale: "paper-v2"
emphasis: true
---
# SOLO：稳定全地形长时程感知人形运动

## 研究问题与贡献

感知人形策略在长距离部署中会因感知和控制误差累积而变脆弱。SOLO 针对两个来源：稠密地形重建会平滑落脚点边界；逐状态模仿缺乏轨迹级信用分配。目标是让机器人只用机载深度和本体感知，在连续室内外地形上长期稳定行走。

## 方法与系统

系统采用教师-学生强化学习。Query Reconstructor 给每个高度图单元一个 Fourier 编码查询，让该单元直接从深度-本体感知 token memory 检索证据，从而保留楼梯边缘和踏脚石边界。Trajectory-Aware MSE Distillation 把下一时刻教师-学生分歧加入 PPO 奖励，经 GAE 把未来分歧惩罚传回先前动作，为长时程动作提供轨迹级信用。部署端只使用胸部深度相机和本体感知。

## 实验设置与数据

论文在 Omni 人形平台上做零样机部署。室外路线包含自然楼梯、坡道、草地和不平地面；室内混合路线包含上楼、踏脚石、间隙、下楼和可移动障碍。七种隔离地形各做十次试验；重建实验在相同教师、任务、课程、训练预算和蒸馏目标下比较 START/DPL 风格重建器。

## 结果、限制与结论

QR 将最高难度高度图平均 L1 误差从 START/DPL 的 7.59/9.26 cm 降至 2.29 cm，为 3.3-4.0 倍降低；TA-MSE 课程达到约 5.5 的上限。固定 TA-MSE 后，QR 将压力测试平均成功率从 75.0-75.6% 提高到 97.5%，踏脚石成功率从 0-3% 提高到 96%。真实隔离地形总成功 69/70，并完成连续 1.5 km 室外路线和室内混合路线。限制包括需要人类平面速度命令、前方深度存在后向盲区，以及 2.5D 高度图难以表示透明/反射或多层表面。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2608.26583v1)
- [PDF 全文](https://arxiv.org/pdf/2608.26583)
- [HTML 全文](https://arxiv.org/html/2608.26583)
- [TeX source](https://arxiv.org/e-print/2608.26583)
- [项目主页](https://sunpihai-up.github.io/solo)
