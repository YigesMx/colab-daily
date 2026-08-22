---
candidateId: "paper--arxiv--2608.14022"
businessCandidateId: "paper--arxiv--2608.14022"
date: "2026-08-22"
category: "Paper"
title: "ForgeWM: Progressive Causal Training for Few-Step Action-Conditioned Video World Models"
authors: ["huggingface.co"]
summary: "ForgeWM 提出四阶段渐进训练框架，把双向动作条件视频生成器转换为 1/2/4 步因果世界模型，并在训练与蒸馏全程保持帧率键盘-鼠标控制接口。在 Minecraft 控制任务上，其各预算变体在七项质量/控制指标中六项领先 Matrix-Game 2.0 与 HY-WorldPlay，一步版本取得最高实测生成吞吐。"
provisionalKeywords: ["世界模型", "模型推理加速"]
keywords: ["世界模型", "模型推理加速"]
sources: [{"name": "huggingface.co", "url": "https://huggingface.co/papers/2608.14022"}, {"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.14022"}, {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.14022"}]
previewImage: "/daily/2026-08-22/assets/paper--arxiv--2608.14022/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 10
groupScore: 73
scoreScale: "paper-v2"
emphasis: false
---
# ForgeWM：少步动作条件视频世界模型的渐进因果训练

## 研究问题与贡献

交互式部署要求视频世界模型具备因果生成、持续动作响应与足够少的去噪步数以闭合控制回路。激进压缩采样会把视觉、动作与缓存误差注入后续块，使保真度、可控性与多块稳定性耦合恶化。ForgeWM 的贡献是给出一条从双向生成器到少步因果世界模型的渐进转换路径，并在其中保留游戏原生键盘-鼠标控制接口，提供 1/2/4 步质量-延迟工作点。

## 方法与系统

框架分四阶段：双向域适配学习视觉与控制先验并保留真实去噪器；teacher-forced 因果训练用块级因果注意力在干净历史上学习执行模式；在线因果一致性蒸馏让少步学生在相邻噪声级间匹配教师单步推进；最后做 on-policy 分布匹配，学生在自回归自 rollout 分布上由真实/伪去噪器的分歧方向监督。动作接口上，离散键盘状态走交叉注意力、连续鼠标运动与视觉特征融合，VAE 每 4 帧压 1 潜帧，rollout 时维护视觉与键盘/鼠标缓存的对齐更新协议。

## 实验设置与数据

从 Matrix-Game 2.0 公开谱系初始化，在 GF-Minecraft 构建的 40000 个片段上训练；用 77 帧共享初始帧与控制的 rollout 与 Matrix-Game 2.0、HY-WorldPlay 比较，报告 VBench 质量/美学/主体一致性、LPIPS、光流轮廓相似度、鼠标精度与键盘反事实符号测试，并做固定 checkpoint 的步数扩展分析与 41 人用户研究。

## 结果、限制与结论

论文报告：三个 ForgeWM 变体在七项质量/控制列中六项取得最佳值，ForgeWM-1 实测生成吞吐最高；性能对去噪预算并非单调，固定 checkpoint 的测试时步数扩展不能替代按预算专门训练；保存草稿的 replay 精化可在保留已交互轨迹的同时提升离线质量。限制是实验域以 Minecraft 与少数 FPS 素材为主，游戏控制结论向机器人动作空间的迁移未验证。作为少步交互式世界模型的训练配方，其对具身世界模型的推理加速有直接参考价值。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.14022>
- Hugging Face：<https://huggingface.co/papers/2608.14022>
