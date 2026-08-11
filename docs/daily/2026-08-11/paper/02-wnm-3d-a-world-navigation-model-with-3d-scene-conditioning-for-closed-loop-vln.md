---
schemaVersion: 2
candidateId: "arxiv--2608.07267"
date: "2026-08-11"
title: "WNM-3D: A World Navigation Model with 3D Scene Conditioning for Closed-Loop VLN"
authors:
  - "Yuehao Huang"
  - "Yunzi Wu"
  - "Xiaotao Zhang"
  - "Xinhai Li"
  - "Jiankun Dong"
  - "Jiajun Lv"
  - "Chi Zhang"
  - "Chenjia Bai"
  - "Yong Liu"
  - "Xuelong Li"
summary: "WNM-3D 将单目自我视角历史交给冻结的几何编码器和可训练的 3D Scene-to-Token Adapter，形成同时条件化未来视图与导航动作的固定长度场景前缀。GN-Bench 上，论文报告其在 Seen 和 Unseen 划分分别达到 81.3% 和 46.8% 成功率。"
keywords:
  - "视觉导航系统"
  - "长时程机器人操作"
category: "Paper"
ratingTrack: "paper"
groupRank: 2
groupScore: 88
scoreScale: "paper-v2"
sources:
  - name: "arXiv TeX source archive"
    url: "https://arxiv.org/abs/2608.07267v1"
previewImage: null
---

## 研究问题与贡献

连续视觉语言导航中的 VLA 往往从当前自我视角和指令直接预测动作，却没有显式建模动作执行后视觉观测应如何变化。已有世界-动作模型虽联合生成未来视图和动作，但论文指出它们没有把历史中推断出的几何表征作为两种预测的共同条件。WNM-3D 的贡献是使用冻结的前馈几何编码器处理单目 RGB 历史，再把几何特征映射为世界动作 Diffusion Transformer 的固定长度前缀，使未来视觉和动作共享持久几何上下文。

## 方法与系统

在每次重规划时，模型接收语言指令和 K 个单目自我视角 RGB 历史观测，联合预测 B 个未来视觉块及其对齐的导航动作块。WNM-3D 用冻结 VGGT-Omega 几何编码器提取多层历史特征，3D Scene-to-Token Adapter 依次执行多层特征融合、结构化查询、锚定可变形重采样和因子化时空细化，输出固定长度场景前缀。世界动作 DiT 采用按时间块的因果注意力：前缀可被所有块看到，每个视觉-动作块内部双向交互，但不能访问未来块。对照 WNM-2D 保持相同骨干、目标、注意力、训练流程和推理方式，只将几何前缀替换为 VAE 编码的 RGB 历史。

训练分三阶段：Stage I 用 A* 生成的专家示范做世界-动作监督微调；Stage II 在策略访问状态上查询 A* 专家，做 DAgger 风格数据聚合和监督微调；Stage III 从 Stage II 开始，用 DanceGRPO 对视觉、导航和停止奖励作闭环策略优化。推理采用 receding horizon，只执行首个动作块并重新规划。

## 实验设置与数据

实验使用 GN-Bench 的 Seen 和 Unseen 划分，指标为 Navigation Error、Oracle Success、Success Rate、Trajectory Length 和 SPL；论文比较 CMA、NaVid、UniNaVid、InternNav(S2)、GN-BAE 及其可用的 GN-Matrix 监督版本，并以 WNM-2D 作为同骨干控制。实现使用 33 帧历史、4 个动作块、每块 8 个动作；Stage I 使用 16K 个 A* 示范，Stage II 在同一组导航任务上采集策略特定 DAgger 数据。原文未报告所有基线的完整训练超参数和 WNM-3D 的全部公开数据规模，不能据此补写。

## 结果、限制与结论

在 GN-Bench Seen 上，WNM-3D 报告 NE 2.0、OS 87.2%、SR 81.3%、SPL 78.3%；在 Unseen 上为 NE 4.4、OS 54.1%、SR 46.8%、SPL 43.5%。相对 WNM-2D，Seen 的 SR/SPL 提升 5.7/5.4 个百分点，Unseen 提升 0.9/0.7 个百分点。DAgger 将 WNM-3D Seen SR 从 49.6% 提升到 80.6%，Unseen SR 从 39.7% 提升到 45.7%；直接从 Stage I 做 DanceGRPO 反而使 Seen SR 降到 39.4%、Unseen SR 降到 35.6%，说明闭环奖励优化依赖先覆盖策略诱导状态。固定近目标 STOP 集上，WNM-3D 三阶段的 flow-action consistency 均高于 WNM-2D，差值为 0.0151、0.0157 和 0.0172；该分析只覆盖 XY 运动。

证据限制是，论文的完整实验结果依赖本地 TeX 源码；同目录 HTML/text 导出本身是 arXiv 无 HTML 的占位页，但 archive 中已读取摘要、方法、实验和结论章节。作者明确指出 flow-action 分析不评估偏航或完整未来视图保真度，且 DAgger 机制解释仍需直接测量组内动作多样性和奖励分布来验证。导航结果也仅支持 GN-Bench 范围内的闭环结论。

## 来源链接

- 原始论文：https://arxiv.org/abs/2608.07267v1
