---
candidateId: "arxiv--2608.22869"
businessCandidateId: "arxiv--2608.22869"
date: "2026-08-26"
category: "Paper"
title: "UniMem: Unifying Multimodal Memory and Control for Vision-Language-Action Models"
authors: ["arxiv.org"]
summary: "UniMem 在同一 VLA 主干内统一事件驱动的文本记忆、关键帧记忆和动作控制，降低分层记忆系统瓶颈。"
provisionalKeywords: ["VLA模型", "智能体", "机器人操作"]
keywords: ["VLA模型", "智能体", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.22869v1"}]
previewImage: "/daily/2026-08-26/assets/arxiv--2608.22869/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 6
groupScore: 83
scoreScale: "paper-v2"
emphasis: false
---

# UniMem: Unifying Multimodal Memory and Control for Vision-Language-Action Models

## 研究问题与贡献

论文研究 VLA 在非马尔可夫任务中的记忆问题。当前帧和指令相同的“感知混叠”状态可能要求不同动作；只靠文本里程碑会丢失空间信息，固定间隔采样历史帧又可能引入无关视觉干扰并带来额外延迟。既有层级式方案通常用另一个 VLM 管理记忆并向下层 VLA 发子任务，形成瓶颈和割裂训练管线。

UniMem 把文本事件记忆与视觉关键帧记忆放进同一 π 0.5 主干，让记忆模块和控制模块共享表征。贡献包括事件驱动的多模态记忆、关键帧缓存以维持接近单帧推理延迟，以及在五个仿真和四个硬件任务上的系统对比与文本/视觉记忆消融。

## 方法与系统

模型在 π 0.5 的最终 latent 表征上追加轻量 MLP 事件分类器。预测到非 null 事件时，系统把事件以自然语言追加到文本记忆，并保存当时的腕部和外部视角关键帧；分类器本身条件于既有文本与视觉历史，因此后续事件检测会利用先前里程碑。关键帧历史上限为仿真 3 个、硬件 4 个里程碑，超过时丢弃最旧帧。

视觉侧在 SigLIP 编码器中周期性插入因果时间注意力，让当前图像查询历史关键帧；缓存历史帧的中间表征并只移动位置编码，避免每步重复空间编码。训练数据由 agent 生成脚本根据动作签名自动标注事件窗口，人在子集上核对并可迭代修正脚本；为避免泄露未来目标，文本记忆只在事件窗口结束后更新。目标函数保持 π 0.5 的 action chunking/flow-matching 损失，并加入类别加权事件交叉熵，null 类降权到 0.02 以避免多数类坍缩。

## 实验设置与数据

仿真使用 robosuite 与 7-DoF Franka Panda，五个任务覆盖单次/三次拿起放下、遮挡后选择容器、回到原始位置和回忆四个盘子中哪个曾有盒子，每任务 25 次。硬件使用 UFactory xArm6、腕部和外部相机，约 10 Hz real-time chunking，四个任务为卷尺测量锤宽、三勺豆子、清理桌面原位置和八杯中的人指杯子取豆倒豆，每任务 15 次。基线包括 π 0.5 加固定 6 秒视频编码、无记忆、仅文本、仅关键帧，以及硬件上的 MemER 层级系统。另有 RTX 4090 延迟基准。

## 结果、限制与结论

论文报告 UniMem 仿真平均成功率 93.4%，高于固定窗口视频基线 68.2%、无记忆 29.6%、仅文本 65.4% 和仅关键帧 72.6%。硬件平均 80.0%，高于 MemER 43.5%、无记忆 5.0%、仅文本 21.8% 和仅关键帧 36.8%；BeanScoop、TableClean 和 TapScoopPour 分别为 93%、80% 和 60%。消融显示计数任务依赖文本事件，空间任务依赖关键帧，二者结合最稳。论文称系统保持约 90 ms 推理并比层级记忆基线快约 6 倍；16 个关键帧、4 相机流时缓存只增加约 25 ms。

限制包括事件词表预定义、事件标注依赖离线自动脚本和人工抽样核对，关键帧最多 3-4 个且尚无剪枝或合并机制；论文未评估数十分钟到数小时的超长任务、完全自主事件发现、短期/长期记忆分层或从错误中学习的记忆。更复杂环境中的错误记忆修复当前材料未确认。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.22869v1)
- [PDF 全文](https://arxiv.org/pdf/2608.22869v1)
- [项目网站](https://losterberg3.github.io/unimem-vla/)
