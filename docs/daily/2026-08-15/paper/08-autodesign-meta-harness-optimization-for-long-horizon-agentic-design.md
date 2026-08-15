---
candidateId: "arxiv--2608.13560"
date: "2026-08-15"
category: "Paper"
title: "AutoDesign: Meta-Harness Optimization for Long-Horizon Agentic Design"
authors:
  - "Yaxin Luo 等"
summary: "AutoDesign 将论文到海报视为模型-harness 系统的长时设计过程，用 meta-harness optimizer 根据轨迹和评审反馈递归优化设计 harness。"
provisionalKeywords:
  - "智能体外层系统"
  - "多模态设计"
  - "递归优化"
  - "论文海报"
  - "长时任务"
keywords:
  - "智能体外层系统"
  - "多模态推理"
  - "结构化知识表示"
sources:
  - name: "Hugging Face"
    url: "https://huggingface.co/papers/2608.13560"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.13560"
  - name: "PDF"
    url: "https://arxiv.org/pdf/2608.13560"
  - name: "项目主页"
    url: "https://autodesign.designanything.ai/"
previewImage: "/daily/2026-08-15/assets/arxiv--2608.13560/preview.png"
schemaVersion: 2
ratingTrack: "paper"
groupRank: 8
groupScore: 85
scoreScale: "paper-v2"
---

# AutoDesign: Meta-Harness Optimization for Long-Horizon Agentic Design

> AutoDesign 将论文到海报视为模型-harness 系统的长时设计过程，用 meta-harness optimizer 根据轨迹和评审反馈递归优化设计 harness。

## 研究问题与贡献

把多模态材料压缩成结构化媒体输出需要长期规划、工具调用和反复修订，而现有系统多为静态 workflow，难以积累设计经验。AutoDesign 提出双层循环：内层在固定 design harness 下生成和修改 artifact，外层根据多条任务轨迹与评分修改 harness 本身。

## 方法与系统

初始 harness 只有 designer 和 critic 两个抽象模块。外层每次执行 rollout、评估、更新 proposal 和接受：一个 coding agent 分析执行轨迹、渲染诊断和参考海报，提出一次只修改一个组件的 harness 更新；接受机制防止局部改进破坏已有能力。优化时 evaluator 结合规则检查和 VLM 判断，最终系统比较使用冻结 PosterBench 协议，避免优化目标与测试目标混同。

## 实验设置与数据

论文提出 PosterBench Main Track，包含 100 篇论文、五个学科，以及可控的 10 篇 mini 子集。评估维度覆盖 faithfulness、coverage、density、visual evidence、layout、readability 和 aesthetics，并与 Claude Design、OpenDesign、商业/代码智能体和人工 workflow 比较，还做系统盲人类偏好研究。

## 结果、限制与结论

Main Track 上 AutoDesign 得 78.32，比 Claude Design 高 7.45；七个 code-agent-model 配置加入学习到的 DesignHarness 后平均分从 54.99 升至 67.39。mini 上 AutoDesign+Codex 81.46 对 75.87，AutoDesign+Claude Code 74.56 对 69.55。全自主长时循环执行 253 次工具调用、11 轮编辑，40 分钟内成本低于 3 美元，人类盲评获得最高偏好。结论是 harness 经验可迁移，但主要验证场景仍是论文海报，评估器与人类偏好的长期漂移、跨设计任务的泛化和成本边界还需更多数据。

## 来源链接

- [Hugging Face](https://huggingface.co/papers/2608.13560)
- [arXiv](https://arxiv.org/abs/2608.13560)
- [PDF](https://arxiv.org/pdf/2608.13560)
- [项目主页](https://autodesign.designanything.ai/)

