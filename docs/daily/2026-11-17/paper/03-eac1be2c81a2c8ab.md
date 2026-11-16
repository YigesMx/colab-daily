---
schemaVersion: 3
candidateId: "arxiv--2611.17598"
date: "2026-11-17"
category: "Paper"
groupRank: 3
title: "X-Nav Technical Report: Real-World Long-Horizon Indoor-to-Outdoor Navigation on a Humanoid Robot"
authors: ["Jiaxin Huang", "Chengxing Lin", "Xiaoyu Luo", "Sirui Chen", "Jingyu Guo", "Aolin Li", "Kairui Chen", "Rui Zhen", "Cheng Wen", "Kerui Gu", "Shunyao Wang", "Zhihui Peng", "Shaoli Huang"]
summary: "AGIBOT X-Lab 的 X-Nav 据作者所知首次让双足人形（灵犀 X2）完成语言指令驱动的百米级室内到室外导航任务。数据引擎从开源场景、部署点数字孪生与真机三条路线采集；MELIOR 导航模型只用机内头部 RGB（MELIOR-A 预测动作、MELIOR-N 预测导航目标）；X-Navarch 工作流拆分子任务并处理显式目标接近与静动态避障。真机完成 96.6 米任务并支持中途更换目的地；数字孪生站点适配把 3 米内停止成功率从 40% 提到 80%；MELIOR-N 在 R2R-CE 达 70.5%。"
keywords: ["人形机器人", "机器人操作与导航", "具身智能", "数据引擎"]
sources: [{"name": "arXiv 摘要页", "url": "https://arxiv.org/abs/2611.17598"}, {"name": "arXiv PDF 全文", "url": "https://arxiv.org/pdf/2611.17598"}]
previewImage: "/daily/2026-11-17/assets/arxiv--2611.17598/preview.png"
---

X-Nav Technical Report: Real-World Long-Horizon Indoor-to-Outdoor Navigation on a Humanoid Robot

## 研究问题与贡献

人形机器人要在真实世界中工作，首先得自己走到工作地点。这份来自 AGIBOT X-Lab 的技术报告研究的是"任务级（mission）"导航：人形机器人接收一条自然语言指令，从办公楼大厅出发、穿过门、沿路行走约一百米，到达隔壁一栋楼的便利店，途中会经过室内与室外、静态与动态障碍。作者指出，VLN 基准的高分并没有转化成真机能力：基准 episode 通常只有 10-15 米、场景是扫描重建、相机固定高度、指令逐步精确执行；而真实任务中路线更长且跨室内外、相机随步态晃动、执行与指令存在偏差、路上有行人和车辆，停在目标 3 米内也不够。据作者所知，此前没有任何系统能让双足人形机器人完成跨越室内外边界的百米级语言指令任务。

X-Nav 的贡献有三：其一，据作者所知首次让双足人形机器人完成语言指令驱动的长时程室内到室外任务；其二，构建了一套数据引擎，从开源场景仿真、部署地点数字孪生、真机采集三条互补路线收集导航数据；其三，开发了只用机器人自带相机 RGB 的导航模型 MELIOR（MELIOR-A 预测动作、MELIOR-N 预测导航目标）以及把模型落到机器人上的代理式工作流 X-Navarch。

## 方法与系统

X-Nav 由三个部分构成，形成三层嵌套循环。数据引擎包含 X-Nav-Sim 仿真平台、开源场景采集（X-Nav-Syn，约 6.3M 样本量级）、部署地点数字孪生采集（X-Nav-Twin）与真机录制（X-Nav-Real）；三条路线分别提供规模与多样性、目标站点的布局与外观、以及这台机器人自己的相机视角、步态与停止行为。导航模型 MELIOR 只接收灵犀 X2 头部 RGB 相机（640×480、水平视场 79°）的图像流，无需加装额外相机；MELIOR-A 基于 Qwen3-VL-8B，每次决策最多输出四个动作，MELIOR-N 基于 Qwen3.5-4B，每次决策输出一个导航目标。部署工作流 X-Navarch 由规划器把简短指令拆分为"路线"与"目标"两类子任务：路线跟随交给 MELIOR 隐式导航，最后几米到达具名目标（如便利店入口）交给显式导航技能 MELIOR-X（维护图像中的目标掩码与机器人坐标系下的目标位置，用激光雷达点估计目标位置、近距离切换 RGB-D 相机）；导航目标经目标适配器与避障层传入运动控制器。系统不使用站点地图，激光雷达与里程计仅用于目标接近和底层控制；推理在机外 GPU 上通过网络与机器人交换帧与目标。

## 实验设置与数据

真机实验全部在灵犀 X2 双足人形机器人上进行。主任务约一百米：从办公楼大厅穿门、沿路到隔壁建筑的便利店。报告了两次完整任务：一次由 MELIOR-A 直接跟随指令（96.6 米、3 分 24 秒，途中指令被更换一次目的地），一次由 X-Navarch 驱动 MELIOR-N 并处理静态与动态障碍（在路口等待一辆汽车约 24 秒）。站点适配实验在办公楼大厅的数字孪生中进行：孪生用 3D Gaussian Splatting 渲染 RGB 并配合网格提供深度与碰撞几何，参考规划器生成 500 个任务（300 个指令跟随、100 个目标导航、100 个需求导航），划分为 400 训练、50 验证、50 测试 episode；冻结 MELIOR-A、训练 LoRA（rank 64）适配器，比较仅参考轨迹（32,404 窗口）与加入纠正窗口（48,006 窗口，含 9,601 恢复窗口与 6,001 停止边界窗口）两种设置。基准评测上，MELIOR 在 R2R-CE 与 RxR-CE 上与使用单一前向相机的近期模型对比。MELIOR-A 与 MELIOR-N 分别用约 4,450 与 3,115 GPU 小时（H20）训练。

## 结果、限制与结论

论文报告的真机结果：MELIOR-A 版本完成 96.6 米任务，室内 34.2 米、室外 62.4 米，包含"更换目的地后继续导航"的事件；X-Navarch + MELIOR-N 版本在途中通过静态与动态障碍并到达商店。站点适配方面，加入纠正窗口后，孪生闭环中 3 米内停止成功率从 40% 升到 80%（带预测停止的 STOP-SR@3m 从 34% 升到 78%），导航误差从 9.63 米降到 3.36 米，持续碰撞 episode 从 52/100 降到 3/100；但精确停在 1 米内（SR@1m 28% 对 20%）反而未改善，作者坦承精确停止仍是开放问题。基准方面 MELIOR-N 在 R2R-CE 上达到 70.5% 成功率，与近期单相机模型相当。

作者明确列出限制：本报告的任务都在同一层楼的一条路线上，楼梯、电梯与需要开门的场景不在系统范围内；站点适配只在一个站点验证。未来工作包括数据规模研究、跨任务持久的空间记忆（场景图）以及导航目标与运动控制器之间的学习型局部策略。

## 来源链接

- arXiv 摘要页：https://arxiv.org/abs/2611.17598
- arXiv PDF 全文：https://arxiv.org/pdf/2611.17598
