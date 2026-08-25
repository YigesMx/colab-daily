---
candidateId: "arxiv--2608.22296"
businessCandidateId: "arxiv--2608.22296"
date: "2026-08-26"
category: "Paper"
title: "TONAV: Task-Oriented Navigation and Action-Velocity Chunk Learning for Articulated Object Quadrupedal Mobile Manipulation"
authors: ["arxiv.org"]
summary: "TONAV 将任务导向导航、自适应接近和速度监督动作块结合，让四足机器人在铰接物体操作前进入可操作位姿并保持稳定接触。"
provisionalKeywords: ["具身智能", "机器人操作", "智能体"]
keywords: ["具身智能", "机器人操作", "智能体"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.22296v1"}]
previewImage: "/daily/2026-08-26/assets/arxiv--2608.22296/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 7
groupScore: 82
scoreScale: "paper-v2"
emphasis: false
---

# TONAV: Task-Oriented Navigation and Action-Velocity Chunk Learning for Articulated Object Quadrupedal Mobile Manipulation

## 研究问题与贡献

论文针对四足移动操作中的两个连续缺口：导航系统常常只到达目标附近 1-2 米，却没有到达下游操作可行的基础位姿；操作策略多以关节位置表示动作 chunk，缺少速度与运动趋势，导致响应滞后、抖动和持续接触不稳。作者认为目标接近和操作就绪必须按任务联合优化。

TONAV 的贡献包括把高层指令分解为导航子目标的 Perception-Planning Chain-of-Thought、逐步精调基础位姿的 Adaptive Approach Module、把位置和速度参考耦合进阻抗遥操作的 AVTF，以及同时预测未来关节位置与速度的 action-velocity chunk 学习。

## 方法与系统

PP-CoT 先让 MLLM 根据全局图像和任务提取目标、候选地标与可通行区域，再基于该任务条件化感知结果规划可见路线并输出基于地标的导航子指令。AAM 用开放词汇检测器定位目标、用 SAM2 传播 mask，结合 mask 中位数像素和有效深度反投影目标 3D 点；针对异步视觉结果延迟，使用带自身运动的 Kalman 估计器把旧观测变换到当前相机系并维护位置-速度状态。控制器根据水平对齐误差和工作空间相关的期望距离在角度对齐与距离接近模式间调整，感知不可靠或安全约束触发时停止。

AVTF 在 220 Hz 控制环中把主臂关节位置和限幅后的关节速度一起交给 MIT-style 阻抗控制器，减少主从跟踪滞后；记录线程以 30 Hz 保存相机、跟随臂反馈、专家位置和速度。操作策略使用 ACT-style CVAE，ResNet-18 编码图像，双头预测长度 30 的位置与速度 chunk，并用位置模仿、速度监督、位置差分与预测速度的一致性和 KL 正则共同训练。

## 实验设置与数据

实验平台为 Unitree Go2-W 和两条 Piper 臂。任务包括关抽屉、开灯和放下马桶盖；导航阶段每任务 5 次，与 StreamVLN 和 InternNav 比较，并消融 PP-CoT 与不同 MLLM。操作阶段所有方法共享同一导航就绪配置，比较无位置-速度控制的 ACT/DP/TONAV、使用位置-速度演示的 ACT/DP/TONAV，并给出关节轨迹定性分析。训练使用 100,000 步 AdamW、batch size 8，在两张 RTX 3090 上完成。

## 结果、限制与结论

论文报告 TONAV 导航总体成功率 60.00%，高于 StreamVLN 13.33% 和 InternNav 26.67%；三个任务分别为 80%、60% 和 40%。使用 Qwen-3.7-Max 与 PP-CoT 时为 60%，去掉 PP-CoT 降到 26.67%。完整移动操作总体成功率 80.00%，三个任务均为 4/5；无位置-速度控制时 TONAV 为 53.33%，ACT 和 DP 分别为 46.67% 和 26.67%。轨迹分析显示更少振荡和更稳定的受限接触。

限制是每项任务只有 5 个真实试验，样本规模较小；评估集中于三类铰接物体和固定场景布局，触觉反馈、更长时程扰动恢复、不同初始配置与场景泛化仍待验证。论文未报告真实部署失败、能耗或控制器安全边界，当前材料未确认。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.22296v1)
- [PDF 全文](https://arxiv.org/pdf/2608.22296v1)
- [项目网站](https://haochen611.github.io/TONAV)
