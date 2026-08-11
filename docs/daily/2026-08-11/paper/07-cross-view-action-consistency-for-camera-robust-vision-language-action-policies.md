---
schemaVersion: 2
candidateId: "arxiv--2608.06965"
date: "2026-08-11"
title: "Cross-View Action Consistency for Camera-Robust Vision-Language-Action Policies"
authors:
  - "Bingqi Huang"
  - "Bingchuan Wei"
  - "Xuan Wang"
  - "Yingkai Cai"
  - "Zhaokui Wang"
summary: "该工作不改变单场景 RGB、语言和本体感知的推理接口，而是在动作等价的相机视图对之间直接约束 flow policy 的动作速度场。LIBERO-Plus 相机扰动成功率达到 87.2+/-0.4%，相同配对数据的 FM-only 对照为 79.8+/-0.8%，真实机器人留出相机成功率从 53.3% 提升到 74.4%。"
keywords:
  - "跨视角动作一致性"
  - "相机鲁棒视觉动作"
category: "Paper"
ratingTrack: "paper"
groupRank: 7
groupScore: 86
scoreScale: "paper-v2"
sources:
  - name: "arXiv full HTML"
    url: "https://arxiv.org/html/2608.06965v1"
previewImage: null
---

## 研究问题与贡献

固定场景相机上微调的 VLA 可能在相机移动后失败，即使任务、物体、语言和机器人状态不变。论文把问题聚焦为动作层面的视角鲁棒性，而不是中间视觉表征不变性；部署接口严格只用场景 RGB、语言和本体感知，不用相机标签、外参、深度或点云，并全程屏蔽 wrist stream。贡献是对 flow-based VLA 中实际被积分生成动作块的 velocity field 加跨视图一致性约束。

## 方法与系统

训练样本是同一物理状态的名义/扰动相机图像对，共享指令、本体状态和示范动作。模拟器把原 LIBERO 示范重置到同一 MuJoCo 状态后重新渲染；真实机器人用同步相机在同一时间戳采集。两视图都使用普通 flow matching，另外在相同 flow 坐标和噪声采样点上最小化 active action dimensions 的速度预测差异，且两分支双向传梯度。论文给出局部 Lipschitz 条件下速度差异控制积分动作块发散的定性/理论动机。错误配对控制把扰动视图跨状态打乱，但保留各自 flow matching 标签，用于区分真正的动作等价监督与泛化平滑。

## 实验设置与数据

模拟训练从四个 LIBERO 套件构造 338,575 个同状态配对，训练 10,000 步，最终方法每对采样 K=2 个 flow 点、lambda_CV=0.10、flow time 服从 Beta(2,3)，使用 seeds 42-44。LIBERO-Plus 测试有 1,599 个相机扰动实例、4,797 次 rollout，分 C1 距离/尺度、C2 球面位置和 C3 端点朝向。对照包括 nominal-only、naive mixed-camera SFT 和同数据 FM-only。真实实验为 Battery box、Laptop lid、Headphone stand 三项桌面任务，训练使用三台同步相机，见/留出相机每个任务-位置单元 10 次 rollout。

## 结果、限制与结论

LIBERO-Plus 相机轨迹上，方法为 87.2+/-0.4%，同配对数据 FM-only 为 79.8+/-0.8%，naive mixed-camera SFT 的提升差为 12.5 个百分点；名义相机 ID 均值保持 95.0%。错配控制在 K=2 时降至 25.8%，说明收益依赖 action-equivalent pairing。真实留出相机结果为 67/90（74.4%），FM-only 为 48/90（53.3%）；见相机分别为 79/90 和 80/90。Laptop lid 留出相机达到 30/30，但 Headphone stand 仅从 5/30 提升到 14/30，失败集中在细小耳机带的遮挡和接近角误差。

主要限制是需要真正的同状态视图对，这排除了大多数单相机机器人数据集；非等价配对会把状态相关动作拉向边际均值。单 RGB 仍无法恢复被遮挡或深度线索不足的几何。硬件研究只覆盖三项桌面任务、静态外部相机、三个见/三个留出位置和每单元 10 次 rollout，未验证移动相机、光照、杂乱、透明/可变形物体、移动底盘或离散 token VLA。

## 来源链接

- 原始论文全文：https://arxiv.org/abs/2608.06965v1
