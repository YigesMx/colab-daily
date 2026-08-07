---
candidateId: "arxiv--2607.27703"
category: "Paper"
date: "2026-08-01"
rank: 8
title: "SpatialCLI：先学习调用空间工具，再把感知能力内化到 VLM"
authors:
  - "Yang Zhou"
  - "Zixuan Huang"
  - "Sunzhu Li"
  - "Zhuo Yang"
  - "Chen Zhang"
  - "Shunian Chen"
  - "Caijun Yan"
  - "Jianyao Xu"
  - "Shunyu Liu"
  - "Weijie Fu"
  - "Peiliang Li"
  - "Xiaozhi Chen"
  - "Yuxiang Cai"
summary: "SpatialCLI 将定位、分割、深度和姿态专家模型包装为空间工具，通过冷启动 SFT 与 agentic RL 学会组合调用，再把成功工具轨迹逐步转写为可追溯感知推理，联合训练有工具与无工具两种能力。"
keywords:
  - "空间推理"
  - "多模态感知"
  - "视觉语言模型"
score: 79
sources:
  - name: "arXiv TeX source"
    url: "https://arxiv.org/src/2607.27703v1"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2607.27703"
previewImage: "/daily/2026-08-01/assets/arxiv--2607.27703/preview.png"
---

## 核心内容

SpatialCLI 针对的是通用 VLM 与专用视觉模型之间的能力错位：VLM 能理解任务、拆解步骤，却常在精确定位、轮廓、度量深度和姿态上出错；SAM 3、Depth Anything 3、VGGT 等专家模型能提供局部感知证据，却不会判断任务需要哪些工具，也不会把多个输出组合成最终决策。论文提出 Call、Learn、Internalize 三阶段流程，不仅让 VLM 在推理时调用专家，还尝试把成功调用产生的证据转成模型自身能力。

Call 阶段提供四类结构化工具：Locate 返回目标框，Segment 返回多边形边界，Depth 返回查询点的度量深度，Pose 返回物体朝向或跨视角相机运动。模型沿 ReAct 式循环保留跨轮推理，并在每次工具响应后看到剩余预算。Learn 阶段先用 Qwen3.5-397B-A17B 生成并过滤合法、正确的多轮轨迹，做 Cold-Start SFT；再用 GRPO 按最终答案奖励训练完整交互，使模型改进工具选择、参数生成、结果利用和终止。

Internalize 阶段只使用成功的 RL 轨迹。第一步逐轮整合新工具证据，并要求每条感知陈述可回指当前工具结果、显式视觉观察或先前证据，且不向抽取器透露正确答案；第二步将整条证据轨迹压缩为不引入新实体或关系的任务级推理链。最终采用双视图训练：无工具视图监督模型直接生成感知推理与答案，有工具视图保留原始调用结构，二者联合优化以降低内化造成的工具遗忘。

## 关键技术与数据

作者新建 SpatialCLI-Bench：516 个英文六选一视觉问答，要求组合定位、分割、深度与姿态能力。构建流程先由 Gemini 3.1 Pro 盘点实体与关系，再以专家工具验证证据并过滤缺失、矛盾或歧义样本，随后生成问题、正确答案和五个干扰项，最后由人类专家独立作答，仅保留与生成答案一致的题目。评估还包括 MindCube、MMSI、DA-2K 与 BOPASK，每个模型均测试有工具和无工具两种模式。

SpatialCLI 分别基于 Qwen3-VL-8B-Instruct、Qwen3.6-35B-A3B 和 Qwen3.6-27B 训练，SFT/RL 使用 verl。论文将 GPT-5.6 Sol、Gemini 3.1 Pro、Qwen3.7-Plus、Qwen3.5-397B-A17B，以及 SpaceTools、AlloSpatial 纳入比较。结构化返回消融表明，在 8B 基座上，只返回可视化边框的 SpatialCLI-Bench 得分为 45.9，结构化加可视化为 66.0，仅结构化为 66.5；作者据此认为坐标、多边形等显式返回更适合当前 VLM 使用和转写。

预览图是论文方法总览图，按 Call、Learn、Internalize 展示工具增强、agentic fine-tuning、轨迹逐步转写和双视图训练的完整关系，来自 TeX source 的原始 PDF figure。

## 结果与结论

在 SpatialCLI-Bench 上，Qwen3-VL-8B-Instruct 基线为 35.3，直接加 SpatialCLI 工具为 66.5；训练后的 SpatialCLI-8B 无工具达到 72.7，有工具达到 91.3。MindCube 上对应结果从 29.3 提高到无工具 73.8、有工具 84.6。27B 模型在 SpatialCLI-Bench 上达到无工具 76.3、有工具 91.7；35B-A3B 为 75.0/91.9。论文还报告 GPT-5.6 Sol 从无工具 48.8 提高到加工具 72.9，但工具在 BOPASK 的 ObjRrr 子集上从 56.4 降到 49.5，说明外部工具并非所有子任务都稳定增益。

内化消融更直接展示两目标的冲突：只训练无工具内化视图可得 71.1/62.6（无工具/有工具），只训练工具视图为 42.2/89.0；单遍转写加双视图为 64.5/90.2，完整逐步转写加双视图为 72.7/91.3。训练动态中，不经 SFT 的工具 RL 将平均调用次数从 3.36 增至 6.74，而有 SFT 的版本维持约 2.56，支持冷启动对调用效率的作用。

保守解读是，论文较有力地证明了“结构化专家工具轨迹可以同时改善工具调用和无工具空间问答”，但“内化了专家感知能力”仍主要由基准分数和作者定义的 CII 衡量，并不意味着模型内部复现了专家模型的全部感知机制。当前工具覆盖和可靠性限制结论范围，任务也以感知推理为主，尚未包含 VLA 级实际动作执行；基准生成过程大量依赖模型和专家工具，尽管有人类一致性过滤，仍需要独立复现评估其分布偏差。

## 来源链接

- arXiv TeX 原始源码：https://arxiv.org/src/2607.27703v1
- arXiv 摘要页：https://arxiv.org/abs/2607.27703
- arXiv PDF：https://arxiv.org/pdf/2607.27703
