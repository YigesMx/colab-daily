---
candidateId: "arxiv--2608.05369"
category: "Paper"
date: "2026-08-08"
rank: 4
title: "W2-VLA：从全局任务语境预测腕部局部未来以提升精细操作"
authors:
  - "Yuhao Pan"
  - "Haosong Peng"
  - "Zhengshen Zhang"
  - "Zhengyang Yan"
  - "Yalun Dai"
  - "Fushuo Huo"
  - "Chujie Wang"
  - "Tianyu Qi"
  - "Xiucheng Wang"
  - "Nan Cheng"
  - "Wenchao Xu"
summary: "W2-VLA 不再把主相机与腕部相机视为等价输入，而用固定长度潜在接口把全局任务上下文传给腕部未来潜变量预测器，再以预测到的局部接触演化条件化动作生成。"
keywords:
  - "未来状态预测"
  - "视觉语言动作控制"
score: 93.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.05369"
  - name: "Project Page"
    url: "https://yyyyu120.github.io/W2-VLA/"
previewImage: "/daily/2026-08-08/assets/arxiv--2608.05369/preview.png"
---

## 核心内容

主相机擅长提供场景布局、目标关系和任务阶段，腕部相机则直接观察夹爪附近快速变化的接触、对齐与释放。W2-VLA 据此把“未来预测”缩小到动作最相关的腕部局部区域：当前多视角图像和指令先在 VLM 中形成固定长度的任务条件接口，再结合腕部历史预测未来腕部潜变量，最后将这些潜变量压缩为动作头的未来感知上下文。

为让潜在接口理解正在进行的操作阶段，作者构造 W2-CoT 辅助标注，固定包含 Subtask、Reasoning 和 Wrist 三栏，分别描述进度、物理转移线索和腕部局部证据。该文字只在训练时作为监督；推理时既不需要真实未来图像，也不自回归生成 CoT，从而避免语言推理延迟。

## 关键技术与数据

模型基于 Qwen3-VL-4B-Instruct 和 DiT-B flow-matching 动作头，总参数约 4.97B。16 个潜在建模 token 形成接口；冻结的 V-JEPA 2.1 ViT-L/384 将腕部历史与未来目标编码为潜变量，四层双向 Transformer 预测未来，L1 损失只回传到预测器和接口。Q-Former 风格适配器以 32 个查询提取未来腕部上下文，并对预测潜变量 stop-gradient，避免动作损失反向改变预测器。

LIBERO 用 1693 条轨迹覆盖 40 个任务，动作块和腕部预测跨度为 8；RoboTwin 2.0 使用 2500 条干净示范，动作块为 16。真实 CoBoT Magic 上有桌面清理、遮挡放置和双臂插头插入三项任务，每项 100 条遥操作轨迹。W2-CoT 从夹爪开合、末端运动、动作变化和同步关键帧分段，再经物理一致性、释放前置条件、左右腕局部性和时间顺序校验。训练损失权重为 CoT 0.1、腕部预测 0.2。

## 结果与结论

W2-VLA 在 LIBERO 四套件平均成功率 98.5%，其中 Spatial/Object/Goal 为 99.6%/99.8%/99.2%，Long 为 95.2%；RoboTwin Easy/Hard 为 60.71%/18.21%。真实任务每种方法在标准和 OOD 条件各做 30 次，完整模型平均成功率为 70.00% 和 52.22%，分别比 VLA-JEPA 高 15.56 和 14.44 个百分点；最难的双臂插入在 OOD 下为 33.33%，VLA-JEPA 为 10.00%。16 步动作块耗时 183 ms，即按块内动作摊销为 87.43 Hz。

去掉腕部预测后 LIBERO 平均值从 98.5% 降至 97.5%，Long 降幅最大；去掉 CoT 后为 98.0%。腕部预测器在 500 个 LIBERO episode 上的潜变量 MSE 为 0.749，复制当前表示基线为 2.183。结果说明局部未来预测有效，但增益在饱和的 LIBERO 上较小，RoboTwin Hard 绝对成功率仍只有 18.21%，真实评估也仅限同一双臂平台和三项任务。预测潜变量与真实接触成功之间的因果关系还需要更直接的独立验证。

## 来源链接

- arXiv 原文：https://arxiv.org/abs/2608.05369
- arXiv TeX 源码：https://arxiv.org/src/2608.05369
- 项目页：https://yyyyu120.github.io/W2-VLA/
