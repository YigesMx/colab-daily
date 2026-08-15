---
candidateId: "arxiv--2608.13552"
date: "2026-08-15"
category: "Paper"
title: "PlayWorld: Benchmarking World Models with Agent Players over Long-Horizon Objectives"
authors:
  - "Kaixin Ding 等"
summary: "PlayWorld 让多模态 Agent Player 按长时目标自适应交互，从几何一致性、交互忠实、视野外演化和洞见演化评估 171 个世界模型场景。"
provisionalKeywords:
  - "世界模型评测"
  - "智能体交互"
  - "空间一致性"
  - "持久状态"
  - "长时目标"
keywords:
  - "具身评测"
  - "视觉世界模型"
  - "长时一致性"
sources:
  - name: "Hugging Face"
    url: "https://huggingface.co/papers/2608.13552"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.13552"
  - name: "PDF"
    url: "https://arxiv.org/pdf/2608.13552"
  - name: "项目主页"
    url: "https://kxding.github.io/project/PlayWorld/"
previewImage: "/daily/2026-08-15/assets/arxiv--2608.13552/preview.png"
schemaVersion: 2
ratingTrack: "paper"
groupRank: 4
groupScore: 89
scoreScale: "paper-v2"
---

# PlayWorld: Benchmarking World Models with Agent Players over Long-Horizon Objectives

> PlayWorld 让多模态 Agent Player 按长时目标自适应交互，从几何一致性、交互忠实、视野外演化和洞见演化评估 171 个世界模型场景。

## 研究问题与贡献

固定动作序列难以公平比较交互式世界模型，因为不同模型执行同一目标所需的动作可能不同，而人类玩家会根据观察调整行为。论文提出 PlayWorld，用多模态 Agent Player 追踪长时目标并自适应修改动作，从真实交互过程而非单帧质量评估模型。

## 方法与系统

Agent Player 由可替换的多模态模型和接口组成，接收目标、基础动作序列、当前帧、历史和场景描述，可执行 keep、stop、extend、correct 或 end。接口把 W/A/S/D、方向键和 WAIT 翻译为各世界模型原生控制，浏览器模型通过自动化派发并截取帧，最多 40 步。基准包含初始世界、场景目标、动作序列和 VQA rubric，覆盖 171 个场景、50 种动作模式和 10-60 秒 rollout。

## 实验设置与数据

论文评估 Genie 3、HappyOyster、LingBot-World/2、HY-World2、SANA-WM、Hunyuan-GameCraft-2、HY-WorldPlay、Matrix-Game-3.0 等 9 个模型；核心维度为几何一致性、交互忠实、视野外演化、洞见演化，另有视频质量和可控性指标。人类验证使用 600 个成对判断，并比较 preset-only、agent-only 与 preset+agent 控制策略。

## 结果、限制与结论

Preset+Agent 在 Genie 3 和 HappyOyster 上分别取得 1.08/1.12 trajectory score，人类偏好 65.6%/67.4%，优于固定或全在线规划。Genie 3 在几何、交互、视野外演化和 Overall 领先，LingBot-World2 在 insight evolution 领先，HappyOyster Overall 第二；但视野外与洞见演化整体仍低，绕行或重访时地标可能复制到不同位置。结论是持久状态、全局空间唯一性和因果演化仍是当前世界模型瓶颈。Agent Player 本身依赖所选多模态模型，虽然做了替代模型检查，仍是评测系统的潜在偏差源。

## 来源链接

- [Hugging Face](https://huggingface.co/papers/2608.13552)
- [arXiv](https://arxiv.org/abs/2608.13552)
- [PDF](https://arxiv.org/pdf/2608.13552)
- [项目主页](https://kxding.github.io/project/PlayWorld/)

