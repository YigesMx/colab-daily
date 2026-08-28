---
candidateId: "arxiv--2608.27406"
businessCandidateId: "arxiv--2608.27406"
date: "2026-08-29"
category: Paper
title: "CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators"
authors: ["arxiv.org"]
summary: "CLAP 用末端位姿、语言和潜动作统一人类与多机器人动作空间，通过课程式跨身体训练让视频世界模型接近或超过单身体基线，并支持零样本真实任务。"
provisionalKeywords: ["世界模型", "仿真与数据", "开源生态"]
keywords: ["世界模型", "仿真与数据", "开源生态"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.27406v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.27406"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2608.27406"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/e-print/2608.27406"}
previewImage: "/daily/2026-08-29/assets/arxiv--2608.27406/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 91
scoreScale: "paper-v2"
emphasis: true
---
# CLAP：跨身体视频世界模型作为零样本物理模拟器

## 研究问题与贡献

现有动作条件视频模型通常绑定单一机器人身体，难以利用包含人类和多机器人形态的大规模异构视频。CLAP 关注如何统一这些动作空间，并验证跨身体扩展不会牺牲高保真预测。贡献包括三类动作表示的统一、课程式跨身体训练，以及用少样本适应生成单身体高保真模型的新范式。

## 方法与系统

CLAP 同时使用末端执行器位姿、自然语言和学习的潜动作表示。末端位姿提供几何精度并支持真实部署；语言提供宽泛语义；潜动作让无动作标注的人类视频可进入训练。课程先利用潜动作从无标注视频学习物理先验，再用末端动作空间接地，使模型能在零样本部署中接收可执行几何动作。推理阶段支持 cross-policy planning 和在视频世界模型中的强化学习微调。

## 实验设置与数据

训练使用 Open X-Embodiment 与 EgoDex，跨身体模型训练 100K steps，使用 8 张 H100/H200，约二至三天。评估覆盖 DROID、Bridge、OXE-Mix、双臂 YAM 和 G1 人形等形态，指标包括 SSIM、PSNR、LPIPS、FVD、FID，并对约每个数据子集 100 条轨迹汇总。基线包括 Ctrl-World 和作者为 Bridge 训练的同架构 Bridge-Base。

## 结果、限制与结论

论文报告 CLAP 在较难的 DROID 环境接近或超过单身体 SOTA，在 OXE-Mix 上潜动作和课程模型取得最高预测精度；CLAP 相比仅用人类视频的 DreamDojo-Human 在 DROID LPIPS 上至少改善 61%。在真实任务中，CLAP 用于推理时规划和策略微调，可提高 π0.5 与 MolmoAct-2 等策略的基础成功率。作者明确指出模型仍会幻觉，未来需要不确定性检测；训练数据主要仍为单身体机器人和人类视频，双臂与人形数据扩展及推理成本是待解决问题。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2608.27406v1)
- [PDF 全文](https://arxiv.org/pdf/2608.27406)
- [HTML 全文](https://arxiv.org/html/2608.27406)
- [TeX source](https://arxiv.org/e-print/2608.27406)
- [代码仓库](https://github.com/omni-CLAP/clap)
