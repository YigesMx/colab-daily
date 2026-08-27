---
candidateId: "arxiv--2608.26058"
businessCandidateId: "arxiv--2608.26058"
date: "2026-08-28"
category: Paper
title: "One Policy, Many Embodiments: Unified Camera-Centric Action Geometry Pre-training for Heterogeneous Embodied Manipulation"
authors: ["arxiv.org"]
summary: "UCAG-P用相机坐标系中的腕部/抓取中心锚点运动统一机器人、仿真与人类手部数据，再由几何条件翻译器生成特定本体可执行命令，单一checkpoint覆盖多种操作形态。"
provisionalKeywords: ["跨本体学习", "视觉语言动作模型", "机器人操作"]
keywords: ["跨本体学习", "视觉语言动作模型", "机器人操作"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.26058v1"}
previewImage: "/daily/2026-08-28/assets/arxiv--2608.26058/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 93
scoreScale: "paper-v2"
emphasis: true
---

# One Policy, Many Embodiments: Unified Camera-Centric Action Geometry Pre-training for Heterogeneous Embodied Manipulation

## 研究问题与贡献

**One Policy, Many Embodiments: Unified Camera-Centric Action Geometry Pre-training for Heterogeneous Embodied Manipulation** 的一句话结论是：把动作表示从机器人原生控制命令改成相机可观测的锚点几何，可让单臂、双臂、人形与人类手部示范在同一策略中联合预训练。论文要解决的是数据形态、相机配置、 proprioception 与低层动作空间异质导致的联合学习瓶颈。UCAG-P的贡献包括共享相机中心动作空间、把人类示范作为独立本体直接使用、几何条件动作翻译器和无需基准专属微调的统一验证。

## 方法与系统

共享动作空间使用语义锚点对：p0表示腕部或末端执行器，p1表示机器人夹爪中心或人类拇指-食指中点。每个双臂步骤用左右锚点的相机坐标系三维位移、面内旋转、夹爪/手开度与相机运动组成30维几何动作。策略主干为Qwen3-VL-4B-Instruct，共享运动头输出几何动作chunk；几何条件翻译器结合相机-基座变换、局部Jacobian、机器人状态与本体几何token，把几何动作映射到80维稀疏可执行命令布局，仅激活目标本体的槽位。训练分三阶段：先学相机中心几何，再隔离训练几何到命令翻译，最后联合机器人与人类数据，缺失标签用mask排除。

## 实验设置与数据

预训练语料包含1,020,672条episode、6,373.586小时和11个数据子集。真实机器人266.348小时，仿真3,767.511小时，人类手部2,339.727小时；人类数据占36.71%，由VITRA、EgoDex和EgoVerse提供。评测使用同一最终checkpoint，不进行基准专属微调，覆盖LIBERO、LIBERO-Plus、RoboTwin Easy/Hard、RoboCasa GR-1、ALOHA到ARX的仿真本体替换，以及Piper真实机器人面包抓取、开抽屉和双臂叠碗。

## 结果、限制与结论

论文报告单一checkpoint在LIBERO 98.3%、RoboTwin Easy 88.7%、Hard 89.2%、LIBERO-Plus零样本82.0%、RoboCasa GR-1 62.0%。真实任务中面包抓取60%、开抽屉90%、双臂叠碗75%，对应π0.5为20%、85%、65%；ALOHA直接替换为ARX的零样本成功率为35.0%。作者明示限制：相机标定、深度估计、运动学与MediaPipe手部关键点误差会传播到几何目标和翻译器；35.0%的跨本体结果说明形态与运动学差异仍未消除；真实评测规模刻意受控，覆盖任务、相机与物体类别有限。未知项：论文未验证更长时序、非受控场景、低成本标定误差或不同控制频率下的稳定性。

## 来源链接

- [arXiv论文](https://arxiv.org/abs/2608.26058v1)
- [项目页面](https://public-bots.github.io/UCAG-P)
