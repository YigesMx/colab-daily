---
schemaVersion: 2
candidateId: "arxiv--2608.11739"
date: "2026-08-14"
category: "Paper"
ratingTrack: "paper"
groupRank: 1
groupScore: 95
scoreScale: "paper-v2"
title: "G0.5: One Autoregressive Stream for Robot Reasoning and Action"
authors: ["Yicheng Liu", "Zibin Dong", "Baijun Ye", "Tianyuan Yuan", "Tao Jiang", "Anqi Yang", "Shicheng Cao", "Haonan Liu", "Yue Sun", "Zihan Guo", "Xiao Liu", "Dong Ke", "Changxun Pan", "Chenru Wu", "Tailai Cheng", "Xiaoshu Ren", "Xinlei Zhang", "Jianning Cui", "Zijie Zhao", "Haoyu Zhang", "Kaiming Xu", "Haodong Yang", "Bowen Zhang", "Jiahui Niu", "Shaoting Zhu", "Shiduo Zhang", "Hang Zhao"]
summary: "G0.5 用单一自回归 Transformer 统一生成推理与动作 token，并以跨本体动作编码器、原生推理流和视觉记忆支撑多机器人、长时任务与零样本迁移。"
provisionalKeywords: ["视觉语言动作模型", "自回归控制", "跨本体泛化", "机器人推理", "视觉记忆"]
keywords: ["视觉语言动作", "跨本体泛化", "长时记忆"]
sources:
  - name: "原始来源 1"
    url: "https://arxiv.org/pdf/2608.11739v1"
  - name: "原始来源 2"
    url: "https://export.arxiv.org/e-print/2608.11739v1"
  - name: "原始来源 3"
    url: "https://ar5iv.labs.arxiv.org/html/2608.11739"
previewImage: "/daily/2026-08-14/assets/arxiv--2608.11739/preview.png"
---

# G0.5: One Autoregressive Stream for Robot Reasoning and Action

> G0.5 用单一自回归 Transformer 统一生成推理与动作 token，并以跨本体动作编码器、原生推理流和视觉记忆支撑多机器人、长时任务与零样本迁移。

## 研究问题与贡献

主流 VLA 往往让视觉语言模型只做上下文编码，再交给独立的 flow-matching 动作专家。论文追问：能否让同一个预训练 VLM 继续充当决策者，用一个自回归序列同时产生推理和机器人动作，而不牺牲高频控制效率。G0.5 的核心贡献是把异构机器人动作、任务分解、目标框、二维轨迹、动作提示和最终控制统一到一个 next-token 目标中，并在多种仿真和真实平台上验证。

## 方法与系统

系统首先用可学习的 ActionCodec 把不同自由度、频率和形态的连续动作映射到共享离散词表，并按活动部件省略静止控制组，减少自回归长度。推理侧允许在动作 token 前或之间插入 Subtask、BBox、Trace 和 ActionHint；这些中间量与动作共享解码器、参数和训练目标。视觉记忆模块把多秒历史通过视觉编码器注入当前决策。作者还保留可选 flow-matching 头用于加速，但论文主张的主体是统一自回归骨干。

## 实验设置与数据

全文覆盖七类设置：DROID 后训练后在未见环境与新物体上的 Franka 真机零样本评测；Bridge-SimplerEnv 四项 WidowX 操作；RoboTwin 2.0 超过 50 个双臂任务；LIBERO 四套任务；2025 BEHAVIOR Challenge 的 50 个长时家庭移动操作任务；R1-Lite/R1-Pro 真机微调；以及语言跟随 Pick-and-Place。DROID 每任务 10 次，LIBERO 每任务 50 次，RoboTwin 在 clean/randomized 下每任务 100 次。论文将 G0.5 与 π0/π0.5、GR00T、LingBot、Fast-WAM 等同类方法比较。

## 结果、限制与结论

论文报告：DROID 未见环境与物体平均成功率 82.5%，对比 π0.5-DROID 的 57.5% 与 MolmoAct2-DROID 的 52.0%；SimplerEnv 平均 87.3%，RoboTwin 2.0 平均 93.3%，LIBERO 平均 98.9%。BEHAVIOR 中单一 checkpoint 的 Task Success Score 从 1 epoch 的 0.2904 提升到 4 epoch 的 0.3136。真机分析也暴露出对低对比、半透明抽屉定位较敏感：加高对比标记后毛巾入抽屉从 60% 升到 100%。此外，预训练数据组成和长期文本记忆的完整实现仍未充分报告；结果主要来自作者设定，跨机构复现与统一算力下的更多验证待进一步核验。

## 来源链接

- [arXiv](https://arxiv.org/abs/2608.11739)
- [PDF](https://arxiv.org/pdf/2608.11739v1)
- [项目主页](https://opengalaxea.github.io/G05/)
