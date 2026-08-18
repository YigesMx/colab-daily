---
candidateId: "arxiv--2608.13605"
businessCandidateId: "arxiv--2608.13605"
date: "2026-08-18"
category: "Paper"
title: "Active Perception for Embodied Disambiguation"
authors:
  - "arxiv.org"
summary: "该论文把主动观察作为具身目标消歧的信息获取主干，用 VLM 在继续观察、请求澄清和提交选择之间决策。"
provisionalKeywords:
  - "具身智能"
  - "自主导航"
  - "模型与推理"
keywords:
  - "具身智能"
  - "自主导航"
  - "模型与推理"
sources:
  - name: "arxiv.org"
    url: "https://arxiv.org/abs/2608.13605v1"
previewImage: "/daily/2026-08-18/assets/arxiv--2608.13605/preview.jpg"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 8
groupScore: 80
scoreScale: "paper-v2"
---

<!-- businessCandidateId: arxiv--2608.13605 -->
# Active Perception for Embodied Disambiguation

## 研究问题与贡献

目标歧义可能来自用户意图不清，也可能来自当前视角缺少可判别物理证据，例如遮挡、文字不可读或目标未进入视野。论文贡献是把 active observation、grounded clarification 和 target selection 组成连续闭环，而不是默认向用户提问。

## 方法与系统

VLM 读取指令、当前 RGB-D、历史观察和澄清对话，输出继续观察、提问或选择目标。主动观察通过眼在手相机改变视角；每次新观察后重新评估场景。若场景已足够但偏好未知，则基于已获得的名称、标签或属性向用户提问。

## 实验设置与数据

实验使用 PiPER 六自由度机械臂与 DABAI DC1 RGB-D 相机，采用相同物理场景、相同初始视角和同一指令的 matched comparison。评估覆盖 A1–A5 已在局部观察中的目标、A6–A7 需澄清偏好、A8–A9 初始候选集外搜索，并比较 Passive、Greedy Asking 与 Static Asking。

## 结果、限制与结论

真实机器人案例显示，主动观察能恢复被遮挡表面、读取药盒与书本标签、扩大有效候选范围，并让后续问题更具体；固定视角基线在超出视野或关键文字不可见时无法解决。论文也强调若缺失的是用户偏好，观察不能替代澄清。限制是样例规模小，未报告大规模量化统计，且仅在一个平台上验证。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.13605v1>
