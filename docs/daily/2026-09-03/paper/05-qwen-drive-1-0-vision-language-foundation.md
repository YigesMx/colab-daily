---
candidateId: "arxiv--2609.00111"
date: "2026-09-03"
category: Paper
title: "Qwen-Drive-1.0: An Initial Step towards a Vision-Language Foundation Model for Autonomous Driving"
authors: ["arxiv.org", "arxiv.org", "huggingface.co", "arxiv.org", "arxiv.org", "arxiv.org", "huggingface.co", "modelscope.cn", "github.com"]
summary: "Qwen 团队（华中科技大学）发布自动驾驶视觉语言基础模型 Qwen-Drive-1.0-4B：在 Qwen3.5-4B 上外挂 BEV 感知头（3D 检测/语义占用/地图分割，兼作预训练表征的 3D 探针）与 1.1B 流匹配 Planning Expert（缓存 VLM 注意力 K/V，50 waypoint/5s 轨迹），架构零改动。四阶段训练（感知头预训练→感知+VQA 联合适配→规划专家预训练→低频子空间随机化强化学习），2.83M 公开样本。结果：nuScenes 43.95 mAP、驾驶 VQA 平均 69.43（因果推理整体准确率 41.26，近次优 7 倍）、通用 VL 能力保持 1 点内；NAVSIM PDMS 90.7、WOD-E2E 测试集 RFS 7.91、AlpaSim 闭环 off-road 率减半。面向座舱-驾驶单模型部署；权重开放。短板：跨源占用标注负迁移、轨迹多样性偏窄、仅仿真闭环。"
keywords:
  - 具身智能
  - 多模态大模型
  - 技能学习
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2609.00111v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2609.00111v1"}
  - {"name": "huggingface.co", "url": "https://huggingface.co/papers/2609.00111"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2609.00111"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2609.00111"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2609.00111v1"}
  - {"name": "huggingface.co", "url": "https://huggingface.co/Qwen/Qwen-Drive-1.0-4B"}
  - {"name": "modelscope.cn", "url": "https://modelscope.cn/models/Qwen/Qwen-Drive-1.0-4B"}
  - {"name": "github.com", "url": "https://github.com/QwenLM/Qwen-Drive-1.0"}
previewImage: "/daily/2026-09-03/assets/arxiv--2609.00111/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 5
groupScore: 81
scoreScale: "paper-v2"
emphasis: false
---

# Qwen-Drive-1.0: An Initial Step towards a Vision-Language Foundation Model for Autonomous Driving

**一句话结论**：Qwen 团队（华中科技大学）在 Qwen3.5-4B 上外挂 BEV 感知头与流匹配 Planning Expert，不改预训练 VLM 架构就统一了 3D 感知（nuScenes 43.95 mAP/60.99 map mIoU）、驾驶 VQA（平均 69.43，因果推理整体准确率 41.26 是次优的近 7 倍）与运动规划（NAVSIM PDMS 90.7、WOD-E2E 测试集 RFS 7.91），同时通用视觉语言能力保持在基线 1 点以内——面向"座舱-驾驶单模型单算力"部署场景。

## 研究问题与贡献

现有驾驶 VLA 方法多用 VQA 式语言监督改造通用 VLM，有两个结构性限制：文本目标不直接约束 3D 布局/深度/占用——纯 VQA 适配的模型可能场景描述流畅但 3D 空间不精确；大规模领域适配会灾难性遗忘预训练获得的通用知识，而罕见/分布外场景恰恰依赖这些知识。此外量产趋势是座舱-驾驶共计算平台：单一模型需要同时覆盖多轮对话、指令跟随、开放视觉理解与驾驶能力，用通用能力换驾驶性能的模型失去这一部署红利。

论文的设计要求：预训练 VLM 架构不变；显式感知探针暴露并评测 3D 场景信息而非只靠文本空间推理；获得驾驶场景理解的同时保留大部分通用能力。贡献（原文报告）：据其所知第一个在单一预训练 VLM 内统一 3D 感知、驾驶 VQA 与运动规划的视觉语言基础模型；外部 BEV 感知头联合学习 3D 检测/语义占用/BEV 地图分割（同时是 3D 探针）；统一跨数据集标签、重写 VQA 响应、轨迹统一 waypoint 表示的分阶段训练与数据配方；条件化 VLM 表征的流匹配 Planning Expert。模型 4B，权重开放（HuggingFace/ModelScope/GitHub）。

## 方法与系统

**输入序列化**。视图标签（八个方向）+ 帧标签标注每张图的来源；VQA 用帧主序、规划用视图主序（同视图连续观测相邻以暴露时序变化）；全部用普通词表 token，无架构改动。

**BEV 感知头**。单帧环视 3D 感知（6/8 视图）：读两路互补特征——视觉编码器特征 F^v（进 VLM 前的低层外观）与穿越完整 VLM 后的图像 token 特征 F^m（场景语义）；轻量深度网络（无深度监督）预测逐像素深度分布，把 F^v 沿相机射线 lift 成 3D 体素；F^m 经特征金字塔扩展后由 query 式 BEV transformer 聚合（query 用体素高度塌缩特征初始化，提供几何先验），自注意力 + 可变形交叉注意力交替。三分支：DETR 式 3D 检测、体素语义占用（F^m 与 V 融合恢复竖直结构后 3D UNet）、UNet 式地图分割。感知损失反向传播穿过 F^m，给视觉编码器额外梯度路径。

**Planning Expert**。32 层 diffusion transformer（~1.1B 参数），预测 50 个 waypoint（5s@10Hz，ego 系纵向/横向/朝向，跨数据集按 165m/25m/π-2 归一）；缓存 VLM 全部八层 grouped-query softmax 注意力的 RoPE 后 K/V，每四层 Planning Expert 共享一组缓存并与轨迹 token 拼接做联合注意力；共享 AdaLN 注入流时间、导航指令与自车状态；流匹配 x-prediction 参数化，可选文本规划理由作条件。

**四阶段训练**。S1 冻结 VLM 只训 BEV 头；S2 感知+VQA 联合训练（BEV 头学习率为 VLM 的 20×，每 minibatch 混两类样本、非活动分支用哑输入保持计算图一致，通用 VL 数据防遗忘）；S3 冻结表征训 Planning Expert（含/不含规划理由两类样本）；S4 强化学习只调 Planning Expert：任务级奖励（NAVSIM PDMS、WOD-E2E RFS、共享位移项），把确定性流采样改造成随机策略——共享初始噪声、在最后三步 Euler 积分注入低频余弦子空间（M=6 模式）扰动并配高斯恢复 score，policy gradient 在低维基坐标上评估似然。

## 实验设置与数据

感知：nuScenes 与 OpenScene（标签语义/标注管线统一后混合训练）；VQA：LingoQA、SURDS、Ego3D、CoC 因果推理等，对照组含 Qwen3.5-4B、Gemma4-12B、Cosmos-Reason2-32B、Alpamayo-1.5-10B、InternVL3.5-8B 等；通用能力：10 项知识/推理/识别基准 + 空间理解/grounding 基准；规划：WOD-E2E（开环，验证集供 RL 奖励、测试集看泛化）、PAI-AV（6 轨迹质量+多样性，含无泄漏 700 帧子集）、NAVSIM v1.1 navtest（伪闭环 PDMS）、AlpaSim 916 场景（闭环，PAI-AV-NuRec 26.02，自车偏移记录日志时有新视角）。规划训练 2.83M 样本全部来自公开数据。

## 结果、限制与结论

**3D 感知（论文报告值）**：nuScenes 43.95 mAP/60.99 map mIoU、OpenScene 43.45 mAP/71.27 map mIoU。仅训头（冻结 VLM）性能受限——证明预训练特征支持视觉-文本对齐但不直接暴露 3D 结构；S2 联合适配让 nuScenes mAP/map mIoU 提升 10.46/9.84 点。跨数据集标注语义残余差异造成占用任务负迁移（混合训练 nuScenes 占用 mIoU 降 26.6%），这是它检测/地图领先但占用不领先的原因。

**驾驶 VQA**：平均 69.43（Qwen3.5-4B 63.52，+5.91，全场最高）；Ego3D 距离估计 RMSE 降 40.9% 至 7.78；CoC 因果推理平均 58.30 对次优 22.05，关键物体/决策/整体准确率提升 56.45/46.42/38.68 点。**通用能力**：知识/推理/识别组平均 66.41（基线 67.40，差 1 点内，MMStar/RealWorldQA 最佳），空间理解组 53.96 反超基线 52.99——驾驶适配后通用能力基本完整，符合座舱-驾驶单模型诉求。

**运动规划（论文报告值）**：WOD-E2E 测试集 RFS 7.91（RL 后，超强化 MindVLA-U1 0.04 点；验证集 8.45 超人类司机参考 8.13 但论文明确说明这是奖励在训练分布内的对齐而非超越人类泛化）；NAVSIM PDMS 90.7（对比方法中最高）；AlpaSim 闭环中 RL 把 off-road 率减半，代价是 PAI-AV 开环误差增加 3-5 cm；PAI-AV 上 3s 平均 ADE 0.42 m 略逊 Alpamayo-1.5 的 0.36 m（后者用 8 万小时轨迹 + 3M CoC 轨迹，本文仅 ~900 原始小时）。

**限制（track 依据原文整理）**：占用任务受跨源标注伪影响；PAI-AV 轨迹多样性偏窄（minADE 0.39 vs 平均 0.42 候选集中）；RL 的开环-偏好权衡；闭环只在仿真 AlpaSim 验证，真实道路闭环与延迟/算力预算数字原文未报告；感知头只做单帧环视，时序感知未纳入。

## 来源链接

- arXiv 摘要页：https://arxiv.org/abs/2609.00111v1
- arXiv PDF：https://arxiv.org/pdf/2609.00111v1
- arXiv HTML 全文：https://arxiv.org/html/2609.00111v1
- Hugging Face 权重：https://huggingface.co/Qwen/Qwen-Drive-1.0-4B
- ModelScope：https://modelscope.cn/models/Qwen/Qwen-Drive-1.0-4B
- GitHub：https://github.com/QwenLM/Qwen-Drive-1.0
- Hugging Face Papers：https://huggingface.co/papers/2609.00111

