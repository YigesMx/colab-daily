---
schemaVersion: 3
candidateId: "arxiv--2609.15213"
date: "2026-09-16"
category: "Paper"
groupRank: 1
title: "X-WBC：跨本体人形全身控制基础模型"
authors: ["Juntong Zhang", "Chun Gu", "Li Zhang"]
summary: "X-WBC 把人形全身控制训练单元从单机器人改为多机器人联合动作跟踪：人类运动中心命令 token 对齐人体动作、机器人参考与 VR 观测，共享 Transformer + 轻量本体模块在 9 个仿真本体与 4 台真机上联合训练，G1 跟踪成功率 98.6%。"
keywords: ["具身智能", "人形机器人", "机器人学习", "强化学习"]
sources: [{"name": "arXiv 论文页", "url": "https://arxiv.org/abs/2609.15213"}, {"name": "项目主页", "url": "https://logosroboticsgroup.github.io/x-wbc/"}]
previewImage: "/daily/2026-09-16/assets/arxiv--2609.15213/preview.png"
---

## 研究问题与贡献

X-WBC（同济大学、复旦大学、上海创新研究院 LOGOS Robotics Group，CoRL 2026）研究的问题是：人形机器人全身控制（WBC）能否像人类一样，把"运动语义"与"身体执行"分离，使一个策略骨干可以跨多个机器人本体复用。现有 WBC 系统（H2O、OmniH2O、HumanPlus 等）通常一台机器人训练一个策略，AMASS、LAFAN1、BONES-SEED 等大规模人类动作数据在逐平台重定向后变成孤立的机器人专属数据。论文的核心贡献是把训练单元从"单机器人策略"改为"多机器人联合动作跟踪"：以人类动作为中心的命令 token 空间对齐完整人体动作、机器人参考动作与稀疏 VR 观测三种视图，使不同本体的 rollout 共同监督一个共享时序骨干。该方向直接属于团队关注的具身智能与人形机器人基础模型方向。

## 方法与系统

框架由三部分组成：（1）人类运动中心命令 token：把人体动作、重定向后的机器人参考轨迹和稀疏 VR 追踪视为同一运动意图的不同视图，进入统一的命令空间；（2）共享因果 Transformer 骨干：从混合多机器人 rollout 中学习跨本体可复用的时序运动结构，使用 32 步历史、50 Hz 控制频率；（3）轻量机器人专属模块：把共享表征映射到各机器人本体感知与动作空间（关节序、动力学与执行约束不同）。训练采用单一 PPO 批混合所有机器人的转移，配合命令 token 对齐与自适应动作采样稳定联合优化。系统在 Isaac Lab 中用 8 张 H100 训练约两天。

## 实验设置与数据

训练覆盖 9 个仿真人形本体（Unitree G1 系列、H1、H1-2、R1、H2、Fourier GR3、Booster T1、Adam Lite），使用约 200 小时 BONES-SEED 动作数据（50 Hz 重采样），并改造 GMR 重定向管线。评测包括：BONES-SEED 训练域内跟踪（G1 29DoF 与 H2），100STYLE 外部动作泛化网格（100 种风格 × 8 类运动，共 800 段、133 分钟），token 空间检索分析，以及 4 台真实人形机器人上的 VR 遥操作部署。指标为成功率（SR）、平均关键点误差、身体速度误差与根部位姿误差，使用统一的终止判据与确定性 rollout 协议。

## 结果、限制与结论

论文报告：BONES-SEED 上 G1 成功率 98.60%、H2 为 93.22%，联合训练的共享 Transformer 在跟踪精度与成功率上优于同架构单机器人训练（Single robot：H2 SR 92.22%、速度误差 0.4417 vs 联合 0.4172）；VR、机器人参考、人类动作三种命令源表现一致（G1 98.21–98.66%），说明对齐命令空间支持多源一致控制；冻结策略在 100STYLE 外部动作上保持竞争力，token 空间检索展现结构化语义。局限方面：论文自身说明 BONES-SEED 评测属于训练分布内的拟合行为评测，外部泛化依赖 100STYLE 单演员数据集；逐机器人仍需专属模块与重定向参数；跟踪误差指标受早停截断影响需与 SR 联合解读。对团队的启示：多机器人联合训练是把异构人形数据变成共享监督的可行路线，命令 token 对齐思路可迁移到遥操作与技能学习接口。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2609.15213)
- [项目主页](https://logosroboticsgroup.github.io/x-wbc/)
- [代码仓库](https://github.com/LogosRoboticsGroup/x-wbc)
