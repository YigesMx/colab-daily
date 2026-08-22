---
candidateId: "paper--arxiv--2608.20251"
businessCandidateId: "paper--arxiv--2608.20251"
date: "2026-08-22"
category: "Paper"
title: "Video2DoorTraversal: Push Door Traversal via Simulated Door Twins"
authors: ["arxiv.org"]
summary: "上海交大提出单视频 real-to-sim-to-real 框架 Video2DoorTraversal：从一段真实门 RGB 视频重建实例对齐、带铰链的仿真门数字孪生，由仿真内 agent 自动生成并迭代修正参数化技能程序产出专家轨迹，训练双深度策略 ArticuACT 完成开门与穿越。五个真实门平均成功率 96.57%，结构相似未见门零样本成功率 80.95%。"
provisionalKeywords: ["具身智能", "机器人操作"]
keywords: ["具身智能", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.20251"}, {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.20251v1"}]
previewImage: "/daily/2026-08-22/assets/paper--arxiv--2608.20251/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 9
groupScore: 74
scoreScale: "paper-v2"
emphasis: false
---
# Video2DoorTraversal：用单视频门数字孪生实现轮腿机器人开门穿越

## 研究问题与贡献

开门并穿越门框是典型长程、接触丰富的全身 loco-manipulation 任务，需要接近、解锁把手、协调底盘与机械臂并避免碰撞。既有工作或只做开门、或依赖预建门资产与人工任务结构。本文提出从单段 RGB 视频构建真实门的仿真孪生，并在其上自动生成专家演示、训练闭环策略，实现全流程开门穿越。

## 方法与系统

DoorTwin 从视频恢复度量几何与相机运动（DAGE，玻璃反光区域用 LingBot-Depth 精化），SAM3 分割门组件，把多帧掩码几何聚合成门点云并估计全局坐标系；把门尺寸与把手相对位置作为度量约束交给 Articraft 生成带铰链的程序化资产，经参考视角渲染-批评循环校验轮廓、把手类型与铰链侧，再用 Tripo 3D 迁移外观。仿真内 agent 把恢复的关节结构转成参数化技能程序（接近距离、抓取偏置、把手旋转、底盘速度、相位时长等），失败时依据诊断与多视角关键帧有界修正，仅保留成功 rollout 作为演示。ArticuACT 基于 ACT，输入前视/腕双深度图与状态，输出底盘速度、六臂关节与夹爪指令，引入机器人中心 Plücker 条件与交互状态监督。

## 实验设置与数据

在 Isaac Gym 中并行执行技能程序并做域随机化（初始位姿、摩擦、阻尼、开门阻力、相机外参，深度噪声/孔洞/模糊），在仿真与真机轮腿移动操作平台上验证，并与依赖预建资产或外部几何输入的方法对比。

## 结果、限制与结论

论文报告：全部感知与策略推理在机载完成时，五个真实门平均成功率 96.57%，完整接近-开门-穿越平均约 13 秒；结构相似的未见门零样本成功率 80.95%。限制是当前聚焦单门实例任务、重建质量依赖几何估计，穿越行为在高度动态环境中的鲁棒性未验证。该工作展示了实例级 real-to-sim-to-real 在全身移动操作上的完整闭环。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.20251>
- 项目页：<https://video2doortraversal.github.io/>
- Hugging Face：<https://huggingface.co/papers/2608.20251>
