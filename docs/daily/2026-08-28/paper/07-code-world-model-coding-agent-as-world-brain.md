---
candidateId: "arxiv--2608.25927"
businessCandidateId: "arxiv--2608.25927"
date: "2026-08-28"
category: Paper
title: "Code World Model: Coding Agent as World Brain"
authors: ["arxiv.org", "huggingface.co"]
summary: "Code World Model把持久世界状态和规则交给可执行代码，把高保真视觉呈现交给视频模型，并用粗proxy视频连接两者，为开放式世界演化提供了一条代码与生成模型分工的路线。"
provisionalKeywords: ["世界模型", "智能体", "具身智能"]
keywords: ["世界模型", "智能体", "具身智能"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.25927v1"}
  - {"name": "huggingface.co", "url": "https://huggingface.co/papers/2608.25927"}
previewImage: "/daily/2026-08-28/assets/arxiv--2608.25927/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 7
groupScore: 86
scoreScale: "paper-v2"
emphasis: false
---

# Code World Model: Coding Agent as World Brain

## 研究问题与贡献

**Code World Model: Coding Agent as World Brain** 的一句话结论是：将世界演化与视觉实现分离，让编码智能体维护可执行状态，让视频模型渲染观察，可避免纯视频世界模型只从可见结果推断隐藏机制的低效。论文认为复杂世界的核心在于不可见或长期传播的因果后果；视频仅保留规则执行的输出，难以支撑离屏状态、关系变化和长期规划。贡献包括agent-code持久世界状态、proxy状态到视频模型的条件接口，以及游戏与真实视频的proxy-observation对齐数据管线。

## 方法与系统

世界状态分为executable state与visual state。编码智能体处理稀疏但复杂的语义决策，选择或修改可复用机制；代码则高频执行位置、朝向、碰撞、冷却、伤害与触发等确定性更新，二者形成读状态、写代码、执行、反馈的循环。proxy从世界状态提取相机、实体位置、姿态、轨迹与空间关系，经轻量确定性编译器渲染为低分辨率proxy视频；它不是最终3D资产，而是给视频模型的白盒时空提示。文本描述身份、外观与语义，proxy约束逐帧位置与相机，MiniMax-H3 Ref2VA负责最终视觉细节。proxy分辨率为目标的1/4边长，视觉token约为1/16。

## 实验设置与数据

训练数据来自157个GTA V gameplay片段，约5.6小时，采样9,420个5秒片段；每个目标为124帧、1344x768、24fps，对齐proxy为124帧、336x192，多模态编码器读取11个proxy帧。模型对MiniMax-H3 Ref2VA全50个transformer块做rank-128 LoRA，约596M可训练参数，用8张H800训练3个epoch、3,534步。真实数据概念验证使用KITTI-360的RGB、相机位姿、语义三维重建和物体标注离线编译proxy，不需要动作标签。推理时GPT-5.6 Sol基于既有游戏模板扩展可执行世界，GPT Image 2生成首帧外观锚点，视频模型输出124帧。

## 结果、限制与结论

论文的实验主要是定性结果：适配后的视频模型在少量游戏数据上能跟随proxy指定的实体位置、运动、场景布局与相机轨迹，并保持角色、环境与动作的视觉细节；真实KITTI-360管线证明可从已有重建离线构造对齐条件。作者明示系统仍处于原型：训练规模受算力限制，未实现自回归实时生成；当前编码智能体难以从零可靠实现复杂游戏机制，需要AAA场景与逻辑模板；定量对比主要指向项目页视频而非论文中的统一数值表。proxy Figure 1本身标注为AI生成说明图，本文预览使用的是论文真实源文件中的该图。未知项：持久状态一致性、开放世界交互正确性、推理延迟、与可玩神经模拟器的定量比较均未在正文中完成。

## 来源链接

- [arXiv论文](https://arxiv.org/abs/2608.25927v1)
- [项目页面](https://buaacyw.github.io/cwm/)
