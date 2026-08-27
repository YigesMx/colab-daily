---
candidateId: "arxiv--2608.25659"
businessCandidateId: "arxiv--2608.25659"
date: "2026-08-28"
category: Paper
title: "GaussianDream++: Efficient 3D Gaussian World Modeling for Robotic Manipulation"
authors: ["arxiv.org"]
summary: "GaussianDream++把当前三维重建和短时未来预测压缩为VLA原生的20个世界token，只在训练期使用高斯解码与渲染，部署时以较低延迟保留几何与动态监督带来的泛化收益。"
provisionalKeywords: ["视觉语言动作模型", "世界模型", "机器人操作"]
keywords: ["视觉语言动作模型", "世界模型", "机器人操作"]
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.25659v1"}
previewImage: "/daily/2026-08-28/assets/arxiv--2608.25659/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 94
scoreScale: "paper-v2"
emphasis: true
---

# GaussianDream++: Efficient 3D Gaussian World Modeling for Robotic Manipulation

## 研究问题与贡献

**GaussianDream++: Efficient 3D Gaussian World Modeling for Robotic Manipulation** 的一句话结论是：把当前世界重建与短时未来预测作为训练期高斯监督，并以20个策略原生token留在VLA中，可以在不部署在线世界模型的情况下提升几何敏感操作的稳健性。论文针对三个问题：普通VLA的动作模仿对度量三维结构和物理演化约束很弱；几何增强方法多偏当前场景，预测方法又常带来高部署成本；既有GaussianDream的1024-token外部前缀把状态、动态与动作条件纠缠在一起。作者的核心贡献是将世界表征移入PaliGemma/π0.5主干，显式分离World State Tokens与World Prediction Tokens，并用静态-动态分解约束未来变化。

## 方法与系统

模型在多视角观测与语言指令之外加入16个World State Tokens和4个World Prediction Tokens，总量20个。训练期，轻量World Representation Head把状态token解码为Current World，并结合预测token在共享高斯原型上输出耦合Future Prediction；监督包括RGB渲染、度量深度、覆盖度、三维运动与静态一致性。未来帧只用于构造监督目标，不进入策略前向。Current World通过相机参数反投影为高斯中心，几何与外观分支分离，避免光度捷径破坏度量结构；未来预测只在当前高斯模板上预测残差位移，并用运动门控抑制静态区域漂移。推理时删除表示头、渲染器、辅助目标和VGGT/TGE路径，仅保留世界token并通过原生注意力条件化Action Expert。

## 实验设置与数据

实验覆盖LIBERO四个任务套件、LIBERO-Plus七类零样本扰动，以及双臂真实机器人平台。LIBERO-Plus按官方协议在标准LIBERO训练后直接评测Camera、Robot、Language、Lighting、Background、Noise与Layout扰动。真实实验包含Bowl-Proximity与Eggplant-to-Pink-Plate，各在Standard、Layout与Camera三种条件下测试，每任务每条件20次，总计120次。直接比较以同一GaussianDream-family协议下复现的π0.5、GaussianDream与GaussianDream++为主；公开结果只作背景，不用于严格成对结论。

## 结果、限制与结论

论文报告GaussianDream++在LIBERO平均98.6%、LIBERO-Plus总体87.8%；相对复现π0.5分别提高1.7和2.3个百分点，相对GaussianDream提高0.2和0.8个百分点。Camera从73.2%到80.1%，Layout从87.7%到90.0%，Noise从89.9%到94.2%，但Robot扰动为73.0%，低于复现π0.5的77.9%。真实机器人总成功率从29.2%升至52.5%，其中Layout从25.0%升至50.0%，Camera从22.5%升至42.5%。推理延迟从286ms增至330ms，仍无需在线高斯解码或未来rollout。限制包括训练期重构细节和物体边界不完美、Robot/embodiment泛化仍弱，且GaussianDream的531ms来自原论文补充材料而非同一硬件复测，不能据此作严格加速结论。未知项：论文未提供更长真实任务、外部硬件或安全关键场景验证。

## 来源链接

- [arXiv论文](https://arxiv.org/abs/2608.25659v1)
- [代码仓库](https://github.com/TuojingAI/GaussianDream)
- [项目页面](https://tuojingai.github.io/GaussianDream-Series-project-page/)
