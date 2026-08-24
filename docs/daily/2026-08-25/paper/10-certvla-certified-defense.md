---
candidateId: "arxiv--2608.20791"
businessCandidateId: "arxiv--2608.20791"
date: "2026-08-25"
category: "Paper"
title: "CertVLA：为连续闭环VLA动作提供可认证防御"
authors: ["arxiv.org"]
summary: "CertVLA 用确定性双掩码和保形动作一致性校验，为连续时序相关的 VLA 控制提供 query 和 rollout 级证书；OpenVLA-OFT 在 patch 攻击下平均 Defense/Certified 均为94%，真实机器人 Certified 成功率为30%。"
provisionalKeywords: ["模型安全", "视觉语言动作模型", "机器人操作"]
keywords: ["模型安全", "视觉语言动作模型", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.20791v1"}]
previewImage: "/daily/2026-08-25/assets/arxiv--2608.20791/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 10
groupScore: 82
scoreScale: "paper-v2"
emphasis: false
---
# CertVLA：为连续闭环VLA动作提供可认证防御

## 研究问题与贡献

物理贴片和对抗纹理可能改变 VLA 的视觉输入，进而破坏整段闭环轨迹。已有 certified defense 多针对离散标签，难以直接认证连续且时序相关的动作。论文提出 CertVLA，将掩码恢复与动作一致性校验结合，为 VLA 控制建立可验证边界。

贡献包括位置归一化动作一致性、双掩码确定性覆盖、query 级保形校验和 episode 级条件证书，以及在 LIBERO 与真实双臂平台上的物理攻击实验。

## 方法与系统

CertVLA 构造覆盖 mask family，保证任意有界支持物理扰动至少被一个 mask 完全擦除。对每个候选动作，系统用第二个掩码检查动作一致性；归一化分数通过保准分位数形成阈值。若存在一行所有检查均通过，则选择对应 anchor mask 的动作。

证书分两层：Theorem 2 认证可观察动作序列的一致性；当任务满足额外 rollout correctness 条件时，才进一步推出任务成功。因此 Defense 与 Certified 分开报告，不把经验恢复误当作证明。

## 实验设置与数据

仿真使用 LIBERO 四个套件、每套10个任务，评估 OpenVLA、OpenVLA-OFT、π0 和 π0.5，攻击为物理 patch 和对抗物体纹理，并报告 Defense 与 Certified 成功率。真实实验使用双臂 Piper 平台、两台 RGB 相机和一个 pick-and-place 任务，每设置 10 次。参数默认 patch 38x38、mask 75x75、mask set 8x8、β=0.95、α=0.5。本次 refine 已读取 PDF、TeX、框架图和结果表。

## 结果、限制与结论

论文报告 OpenVLA-OFT 在 patch 攻击下平均 Defense 和 Certified 均为94%，OpenVLA 双掩码微调版为94%和82.5%；纹理攻击中 π0.5 平均 Defense 94.5%、Certified 88.5%。真实 patch 攻击把 π0.5 成功率从90%降到40%，CertVLA Defense 恢复到60%，其中30%通过全部 query 证书。

限制是证书依赖有界支持攻击模型、mask 覆盖配置和校准质量；Certified 表示动作一致或在附加条件下的任务成功，不等同于无条件鲁棒性。更大的 patch、更密集遮挡、动态光照和感知噪声下的效用-证书权衡仍需扩展。

## 来源链接

- 论文：https://arxiv.org/abs/2608.20791
- PDF：https://arxiv.org/pdf/2608.20791
- arXiv 源码：https://arxiv.org/e-print/2608.20791
