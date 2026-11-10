---
schemaVersion: 3
candidateId: "arxiv--2611.08577"
date: "2026-11-10"
category: "Paper"
groupRank: 1
title: "Meituan-Robotics-0: A Vision-Language-Action Foundation Model for Desktop Manipulation"
authors: ["Meituan Robotics Team", "Caicheng Wang", "Chen Zhao", "Chengpeng Jin", "Duo Xu", "Fengjiao Chen", "Guanglu Wan", "Heqing Yang", "Jia Wang", "Jiacong Zhou", "Jie Hu", "Jiyuan Ru", "Lingfeng Zhang", "Linjiang Huang", "Manyuan Zhang", "Ningchu Liu", "Shijie Zhou", "Si Liu", "Shuo Li", "Tianyi Zhang", "Xi Zhang", "Xin Chen", "Xuezhi Cao", "Xunliang Cai", "Yanbin Zeng", "Yang Yang", "Yang Yi", "Yanli Tan", "Yifu Xu", "Yimeng Jia", "Yuchen Tang", "Yuchen Xie", "Yuxiang Zheng", "Zerwei Chng", "Zilong Huang", "Zipeng Ye", "Ziyuan Qin", "Ziqin Wang"]
summary: "美团机器人团队的 MR0 是面向固定底座桌面操作的 VLA 基础模型与具身智能体系统：数据侧合并 1.47 亿视觉-语言样本与 15,060 小时、12 本体的机器人轨迹并做对齐清洗；训练侧采用 FAST 离散动作 token 预训练、MMDiT flow-matching 连续跨本体中训练与真机后训练三阶段配方，并提出 Rollback 数据采集把被替换策略段与人类纠正配对，供 CFG-DAgger 提供正负监督而无需价值学习；部署侧用异步动作块合并保证变延迟下的平滑执行，并用事件驱动智能体（Monitor/Memory/Planner）维护持久任务事件、支持跨任务检索与条件恢复。RoboTwin 2.0 上 93.6% 成功居比较方法首位，RoboDojo VLA 赛道第五；匹配 HG-DAgger 后处理在三个真机任务上平均成功率与进度分超过 π0.5，Ethernet 插入上 CFG-DAgger+Rollback 达 70% 成功/0.90 进度分。"
keywords: ["具身智能", "视觉-语言-动作模型", "机器人操作", "大语言模型智能体"]
sources: [{"name": "arXiv 摘要页", "url": "https://arxiv.org/abs/2611.08577v1"}, {"name": "论文 PDF", "url": "https://arxiv.org/pdf/2611.08577v1"}, {"name": "arXiv 全文 HTML", "url": "https://arxiv.org/html/2611.08577v1"}, {"name": "项目主页", "url": "https://meituan-robotics.github.io/Meituan-Robotics-0/"}, {"name": "GitHub 仓库", "url": "https://github.com/Meituan-Robotics/Meituan-Robotics-0"}, {"name": "HuggingFace 模型", "url": "https://huggingface.co/MeituanRobotics/models"}, {"name": "RoboDesk 数据集", "url": "https://huggingface.co/datasets/MeituanRobotics/RoboDesk"}]
previewImage: "/daily/2026-11-10/assets/arxiv--2611.08577/preview.png"
---

## 研究问题与贡献

美团机器人团队发布 Meituan-Robotics-0（MR0），一个面向固定底座桌面操作（desktop manipulation）的视觉-语言-动作（VLA）基础模型与具身智能体系统。论文指出，桌面通用操作不能只靠扩大动作模型：异构机器人数据格式不一致、纯成功演示缺乏错误恢复监督、反应式策略无法保留超出观测窗口的任务状态。MR0 的贡献是把三件事接成一条流水线：大规模对齐数据、三阶段训练的通用 VLA 策略，以及事件驱动的具身智能体。系统级新点包括 Rollback 数据采集机制（把被替换的策略片段与人类纠正配对，为 CFG-DAgger 提供正负监督，无需价值学习或优势标注）、统一末端执行器接口支撑 12 种本体，以及异步动作块合并保证推理延迟波动下的平滑执行。在 RoboTwin 2.0 上策略单独取得 93.6% 成功率，RoboDojo VLA 赛道排名第五；匹配 HG-DAgger 后处理时，三真机任务上平均成功率与进度分超过 π0.5。

## 方法与系统

数据侧，MR0 组合 1.47 亿视觉-语言样本（78% 通用、22% 具身）与 15,060 小时机器人轨迹（RoboDesk 开源真机 3,235 小时、授权真机 7,530 小时、开放仿真 4,295 小时，覆盖 12 种本体），经静默段过滤、运动学一致性检查、跨本体动作规范化与层级任务对齐。具身 VQA 监督类型通过 CALVIN ABC→D 受控消融确定，最终聚焦 2D 目标可供性 grounding、场景描述与 2D grounding。训练侧采用三阶段：第一阶段用 FAST 离散动作 token 与视觉-语言数据在 Qwen3.5-4B 骨干上联合预训练（50 万步、256 GPU）；第二阶段换用 MMDiT 连续动作头，以 JiT 干净样本参数化的 flow-matching 在统一末端执行器动作空间上做跨本体中训练；第三阶段真机后训练，比较 HG-DAgger、RECAP 与 CFG-DAgger，其中 Rollback 让操作员回到历史锚点采集人类替换段，与原策略段形成正负样本对。部署侧，异步动作块合并按陈旧度丢弃前缀、线性混合重叠段再拼接后缀，解耦推理与控制频率；事件驱动智能体由 Monitor（约 2 Hz、8 帧窗口）、Memory Manager（事件与关键帧持久化）与 Planner（仅在任务进度或可行性变化时触发）组成，低层电机控制始终由 VLA 策略承担。

## 实验设置与数据

仿真评测使用 RoboTwin 2.0（50 个双臂任务，clean/randomized 两个划分各 100 回合/任务，共 1 万回合/划分）与 RoboDojo（42 个双臂任务，附初始场景参考与 CD-LAM 潜动作历史增广）。真机评测三任务：字母块摆放（按序拼出 MEITUAN，进度分 k/7）、衣物折叠（120 秒内完成计成功）、网线插入（抓取-换手-插接三里程碑），每策略每任务 30 回合自治评测；后训练数据为 500/400/200 条演示加 200/400/450 条 HIL 或 Rollback 纠正。智能体部分使用 Qwen3.5-35B-A3B 驱动 Monitor、Memory Manager 与 Planner。比较对象包括 π0.5（相同任务数据、观测与推理设置）与 RECAP、HG-DAgger。

## 结果、限制与结论

RoboTwin 2.0 上 MR0 以 93.6%（Clean 93.2 / Randomized 93.9）居比较方法首位，高于 InternVLA-A1.5 的 93.2% 与 ABot-M0 的 85.6%。RoboDojo 上以约 1.36 万小时具身训练数据取得平均 Score 20.15、成功率 14.63%，VLA 赛道第五；但开放指令跟随仍弱（Score 3.59、成功率 3.38%），Align_blocks 上出现抓取偏置。真机上，SFT-only 策略在衣物折叠上零成功，说明纯成功演示覆盖不足；HIL 数据对两个骨干都带来大幅提升，且增益随任务不同先后进入平台期。Ethernet 插入上，使用全部 Rollback 数据的 CFG-DAgger 达到 70% 成功率与 0.90 进度分，高于 RECAP 的 60%/0.67，且不需要价值学习与优势标注。智能体定性演示了跨任务事件检索（钥匙被移走后仍能完成抽屉整理）与条件不满足时挂起、条件恢复后续做。论文未把开放指令、长时程失败恢复作为已解决问题，结论强调对齐数据、纠错学习与事件记忆的互补性；后续方向是让智能体与 VLA 策略更紧密地用执行反馈协同。模型、RoboDesk 数据与代码已通过主页与 GitHub 开放。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2611.08577v1)
- [论文 PDF](https://arxiv.org/pdf/2611.08577v1)
- [arXiv 全文 HTML](https://arxiv.org/html/2611.08577v1)
- [项目主页](https://meituan-robotics.github.io/Meituan-Robotics-0/)
- [GitHub 仓库](https://github.com/Meituan-Robotics/Meituan-Robotics-0)
- [HuggingFace 模型](https://huggingface.co/MeituanRobotics/models)
- [RoboDesk 数据集](https://huggingface.co/datasets/MeituanRobotics/RoboDesk)
