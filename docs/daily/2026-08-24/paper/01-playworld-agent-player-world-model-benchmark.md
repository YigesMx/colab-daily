---
candidateId: "url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-08-23-5"
businessCandidateId: "url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-08-23-5"
date: "2026-08-24"
category: "Paper"
title: "让AI Agent「试玩」世界模型，长程目标评测有了新基准PlayWorld"
authors: ["arxiv.org","kxding.github.io","www.jiqizhixin.com"]
summary: "PlayWorld 提出 171 个长程目标案例，用多模态 Agent Player 在线调整动作并评测 9 个世界模型的几何一致性、交互真实性、视野外演化和洞察演化；论文报告持续状态演化与全局空间一致性仍是主要瓶颈。"
provisionalKeywords: ["世界模型","智能体系统","评测基准","长程任务"]
keywords: ["世界模型","智能体系统","评测基准","长程任务"]
sources: [{"name":"www.jiqizhixin.com","url":"https://www.jiqizhixin.com/articles/2026-08-23-5"},{"name":"arxiv.org","url":"https://arxiv.org/abs/2608.13552"},{"name":"kxding.github.io","url":"https://kxding.github.io/project/PlayWorld/"}]
previewImage: "/daily/2026-08-24/assets/url--https_3a_2f_2fwww.jiqizhixin.com_2farticles_2f2026-08-23-5/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 88
scoreScale: "paper-v2"
emphasis: true
---

# PlayWorld：用 Agent Player 评测世界模型的长程目标能力

## 研究问题与贡献

PlayWorld 针对“视频世界模型如何被公平评测”这一问题提出新基准。作者指出，既有视频生成评测多关注画质、时序一致性或文本对齐，而已有世界模型评测常依赖为每个案例预写的固定动作或相机轨迹。不同模型的动作粒度和响应速度不同，同一条命令在一个模型中可能完成一整圈旋转，在另一个模型中只转一部分，因此固定轨迹可能把“轨迹没有执行到位”和“世界几何不一致”混在一起。

论文的核心贡献是把评测单位从固定动作序列提升为场景相关的长程目标。基准包含 171 个人工标注案例、50 多种动作模式、10 到 60 秒 rollout，并覆盖几何一致性、交互真实性、视野外演化和洞察演化四个能力维度。作者报告，对 9 个代表性世界模型的评测得到超过 1,400 条交互视频和 820 多个任务条件化 VQA 问题。上述数字均为论文和项目材料报告；本次 refine 已下载并通读 PDF、arXiv 源码、项目页、GitHub README 和 Hugging Face 数据集元数据，确认材料存在且相互对应，但没有复跑评测或独立重算分数。

## 方法与系统

PlayWorld 的关键组件是 Agent Player：它由可替换的多模态 agent 模型和模型适配接口组成。每个案例提供人类标注的基础动作序列，只作为共同初始参考；Agent Player 在每一步观察当前生成帧、动作历史、场景描述和长程目标，然后决定 Keep、Stop、Extend、Correct 或 End，以适应不同世界模型的动作粒度。接口层把决策转换为各模型的原生控制，对 Genie 3、HappyOyster 等网页模型使用浏览器自动化，对开源模型使用本地分块生成接口，从而形成闭环交互。

评测器分为两层。第一层是任务特定 VQA rubric verifier：先用轨迹有效性、主体可及性等条件确认该案例确实测到了目标能力，再由 Gemini 3.1 Pro 回答样本相关的结构化问题，并在四个维度上得到 1 到 5 分。第二层是基础能力指标，包括 VBench 图像质量、运动平滑、时序闪烁等，以及基于相机位姿估计的平移和旋转可控性通过率。这种设计让“是否到达目标状态”和“画面本身是否好看”可以分开解释。

## 实验设置与数据

论文评测了 9 个代表性世界模型：Genie 3、HappyOyster、LingBot-World、LingBot-World2、HY-World2、SANA-WM、Hunyuan-GameCraft、HY-WorldPlay 和 Matrix-Game-3.0。所有模型接收相同初始世界、相同长程目标和相同基础动作序列；由同一个 Agent Player 在线调整执行。案例初始图像来自 Pexels 和 Google Images，人工筛选后由 Gemini 3.1 Pro 生成环境描述，再由人工校订。作者还用 600 个有效成对偏好判断检查自动指标与人类偏好的相关性。

本次可独立核验的事实包括：arXiv v2 PDF、TeX 源码、项目页、GitHub 代码仓库、Hugging Face 数据集和 leaderboard 链接均公开可访问；GitHub README 描述的 Agent_player、metrics、数据下载和测试结构与方法章节对应。论文中所有模型名次、分数和相关性数值属于作者报告结果；本次未重新运行生成、VQA、轨迹验证或人类研究。

## 结果、限制与结论

论文报告的结果显示，Genie 3 在几何一致性、交互真实性、视野外演化和 Overall 上均为最高，Overall 为 2.12；LingBot-World2 在洞察演化上最高，HappyOyster Overall 排第二。作者认为主要瓶颈不是单帧画质，而是持续世界演化：视野外目标可能原样重现、出现在错误位置，或被替换为另一个实体；长程回访会暴露地标被重复生成、空间唯一性缺失的问题。交互方面，简单碰撞处理相对可靠，但入水、复杂物理反馈和第一人称穿模仍常见。

论文还报告，轨迹控制能力与世界模型能力会分离：SANA-WM 的整体轨迹验证通过率达到 80.4%，但 rubric 分数仍低，说明它常能到达目标区域却不能维持记忆、空间一致或物理合理交互。HappyOyster 基础能力分数最高，为 76.4%，但这不等于长程世界建模最强。人工验证报告四个维度及 Overall 的 Spearman 相关系数为正，具体区间和方法细节当前材料未报告为可直接复用的完整统计表。

限制方面，VQA verifier 依赖 Gemini 3.1 Pro，自动评分仍可能受视觉问答模型偏差影响；论文用人类偏好做相关性验证，但 600 个成对判断只覆盖该研究设置，不能证明所有生成失败模式都被可靠识别。网页闭源模型的浏览器自动化依赖具体接口，系统可复现性可能受平台变化影响。本次未验证各模型生成成本、部署日期后的接口稳定性，也未检查数据集中所有样本；这些属于当前材料未确认。

## 来源链接

- 论文：https://arxiv.org/abs/2608.13552
- PDF：https://arxiv.org/pdf/2608.13552
- arXiv 源码：https://arxiv.org/e-print/2608.13552
- 项目页：https://kxding.github.io/project/PlayWorld/
- GitHub：https://github.com/kxding/PlayWorld
- 数据集：https://huggingface.co/datasets/jocelynd/playworld-bench
- Leaderboard：https://huggingface.co/spaces/jocelynd/PlayWorld-Leaderboard

