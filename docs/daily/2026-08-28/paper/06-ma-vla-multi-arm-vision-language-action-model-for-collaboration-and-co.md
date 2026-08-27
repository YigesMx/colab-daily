---
candidateId: "arxiv--2608.25864"
businessCandidateId: "arxiv--2608.25864"
date: "2026-08-28"
category: Paper
title: "MA-VLA: Multi-Arm Vision-Language-Action Model for Collaboration and Compositional Generalization"
authors: ["arxiv.org", "huggingface.co"]
summary: "MA-VLA把高层任务分解为逐臂原子动作并随机置换臂角色，使单一多臂VLA能重组已见动作处理未见协作模式，在仿真和SO101真实双臂上显著优于全局指令式基线。"
provisionalKeywords: ["多机器人协作", "视觉语言动作模型", "跨本体学习", "机器人操作"]
keywords: ["多机器人协作", "视觉语言动作模型", "跨本体学习", "机器人操作"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.25864v1"}
  - {"name": "huggingface.co", "url": "https://huggingface.co/papers/2608.25864"}
previewImage: "/daily/2026-08-28/assets/arxiv--2608.25864/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 6
groupScore: 88
scoreScale: "paper-v2"
emphasis: false
---

# MA-VLA: Multi-Arm Vision-Language-Action Model for Collaboration and Compositional Generalization

## 研究问题与贡献

**MA-VLA: Multi-Arm Vision-Language-Action Model for Collaboration and Compositional Generalization** 的一句话结论是：把协作行为显式分解为可解释的中层原子动作并分配给每条臂，再配合Arm Shuffle打破臂身份绑定，可让多臂系统重组已学动作处理未见协作结构。论文指出多数VLA把语言当作一个全局静态指令，分工只能隐式从数据推断，导致训练协作模式过拟合。MA-VLA的贡献是原子动作分配、角色无关训练、未见协作benchmark和真实双臂验证。

## 方法与系统

系统包含未微调的GPT-4.1 VLM Planner和基于Pi0的VLA Executor。规划器根据高层指令、图像与有限原子模板集合，一次性输出逐阶段、逐臂原子提示；输出被规范化到模板集合。执行器输入全局与腕部视角、所有臂状态和聚合指令，单次前向输出所有臂动作，并用flow-matching与多头投影生成平滑连续控制。训练时Arm Shuffle按概率随机置换每臂的状态、视角、提示与动作四元组，迫使模型按语义而非臂索引解释指令；View Dropout随机遮蔽部分相机视角以增强多视角稳健性，二者不改变行为克隆损失。

## 实验设置与数据

仿真使用RoboFactory的2-4臂协作任务和RoboTwin 2.0 Hard的强视觉扰动任务；每个仿真任务收集150条专家示范，规则解析器根据接触、抓取状态与物体位姿阈值生成帧级原子提示。OOD测试保持原子动作在分布内，但重组顺序、角色或交互结构。真实平台为12自由度双臂SO101，一个全局RGB相机与两个腕部相机，任务包括叠碗、放方块、传玩具和叠方块；每任务50条LeRobot遥操作示范、15,000步训练和20次评测。基线包括ACT、DP、DP3和Pi0-FAST，接口适配后在相同示范与预算下重训。

## 结果、限制与结论

RoboFactory中，MA-VLA两臂任务平均83.5%对Pi0的80.3%；三/四臂任务平均83.3%对76.5%。RoboTwin Hard平均49.0%对Pi0的41.1%。未见协作OOD中DP、Pi0-FAST与Pi0均为0，MA-VLA五项平均13.0%。真实SO101的ID结果为叠碗12/20、放方块15/20、传玩具6/20、叠方块8/20；OOD分别为10/20、8/20、2/20、2/20，而Pi0全部OOD为0。消融显示Pi0在未见顺序任务OOD 0、ID 48；加原子动作ID升至58但OOD仍0；加Arm Shuffle后OOD 7.3、ID 52；再加View Dropout为OOD 15.3、ID 53。限制：OOD绝对成功率仍低；原子模板集合和规则标签需要任务相关构造；GPT-4.1规划器未微调，规划错误的后果未系统评测；任务主要聚焦堆叠、传递与放置。未知项：更多臂、动态干扰、接触安全与更长时序协作未验证。

## 来源链接

- [arXiv论文](https://arxiv.org/abs/2608.25864v1)
- [代码、模型与数据](https://github.com/zhangzaibin/future-robots)
- [Hugging Face论文页](https://huggingface.co/papers/2608.25864)
