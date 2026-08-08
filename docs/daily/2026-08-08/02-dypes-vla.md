---
candidateId: "arxiv--2608.06374"
category: "Paper"
date: "2026-08-08"
rank: 2
title: "DyPES-VLA：共享动力学先验与具身专用控制的跨机器人策略"
authors:
  - "Junfeng Li"
  - "Junjie He"
  - "Zhide Zhong"
  - "Yangyang Zheng"
  - "Pingyue Sheng"
  - "Jiayu Dong"
  - "Ruixin Li"
  - "Haodong Yan"
  - "Jiaguan Zhu"
  - "Tianran Zhang"
  - "Runze Yu"
  - "Wen Chen"
  - "Liuqing Yang"
  - "Yuxiang Gao"
  - "Haoang Li"
summary: "DyPES-VLA 以未来帧生成迫使共享查询表示学习物体运动、接触和场景变化，再用静态路由的具身专用 MoE 将该表示映射到不同机器人的原生动作空间，无需手工统一动作格式。"
keywords:
  - "未来状态预测"
  - "视觉语言动作控制"
score: 93.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.06374"
previewImage: "/daily/2026-08-08/assets/arxiv--2608.06374/preview.png"
---

## 核心内容

跨机器人训练的难点不只是数据格式不同，而是应共享什么、又应保留哪些身体特有控制语义。DyPES-VLA 将两者分开：通过预测未来帧，在单臂、双臂和人形数据间学习与具体关节定义无关的物体运动、接触和场景演化；再由具身专用动作专家生成每个平台自己的原生动作，不要求先做逆运动学或坐标对齐。

模型把视觉、指令、文字化的机器人类型/数据源/控制频率以及 96 个可学习查询 token 输入 Qwen3-VL-2B。查询状态同时条件化未来生成头和动作头。未来头只在训练时使用，部署时移除；因此该方法使用未来预测塑造共享表示，但并不在推理时先生成图像再求动作。

## 关键技术与数据

未来头采用 SANA-600M 和冻结自编码器，以 rectified flow 预测主相机在动作时间跨度末端的未来帧潜变量。动作头是 16 层 flow-matching DiT：跨具身共享自注意力、交叉注意力和时间结构，而每层 FFN、输入编码器与输出解码器按具身元数据静态路由到三个专家之一。每个平台可保留不同的动作维度和块长度，论文设置单臂为 8、人形为 16、双臂为 50；策略不使用本体状态。

训练分两阶段。第一阶段以 EgoDex 及三个仿真基准的无动作视频训练未来预测，采样比例为 50%/20%/20%/10%；第二阶段在 RoboTwin 2.0、RoboCasa-GR1 与 LIBERO 动作示范上联合训练，比例为 40%/40%/20%。两阶段分别训练 10 万和 20 万步，有效 batch size 512，使用 16 张 H100。真实世界微调使用三个任务、三个具身共 1800 条示范，训练 5000 步。

## 结果与结论

一个联合检查点在 RoboTwin 2.0、RoboCasa-GR1 和 LIBERO 分别达到 89.02%、59.25% 和 98.0% 成功率。真实 FR3、COBOT Magic 和 G1 上，每个任务/具身评估 25 次，共九种组合；统一策略平均成功率 75.6%，对比共同微调的 GR00T-N1.6 为 59.6%，按任务独立训练的 ACT 为 32.4%。线性探针中，完整模型对未来接触开始的 AUPRC 为 86.3%，去掉未来预测后为 70.8%。

消融显示，去掉未来预测在 RoboTwin 和 RoboCasa 上分别下降 2.35 和 2.50 个百分点；共享稠密动作头替代 MoE 后分别下降 1.17 和 2.08 点；去掉具身元数据的降幅较小。结论支持“共享动力学、专用控制”的拆分，但专家数量与训练中的三类具身一一对应，扩展到更多身体仍会增加专用参数；真实任务只有三类桌面操作，尚不足以证明对开放世界具身集合的任意扩展。

## 来源链接

- arXiv 原文：https://arxiv.org/abs/2608.06374
- arXiv TeX 源码：https://arxiv.org/src/2608.06374
- 项目页：https://livfour.github.io/DyPES-VLA_RELEASE/
