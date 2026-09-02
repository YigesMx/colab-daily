---
candidateId: "arxiv--2609.00920"
date: "2026-09-03"
category: Paper
title: "VerNav: Verifier-First Low-Latency Vision-and-Language Navigation"
authors: ["arxiv.org", "arxiv.org", "arxiv.org"]
summary: "电子科技大学团队提出 VerNav：把 LLM 视觉语言导航的每步自回归生成换成\"验证器优先\"接口——对全部候选动作做批处理二元验证、只取\"Yes\"单 token logit 作动作偏好，0.08 秒/步。先做 token 归因发现 CoT 导航输出中 47% 是输入复述、9% 是格式化，决策本质是候选比较、状态更新跨步高度冗余；据此仅当验证分数归一化熵超阈值时才调用生成器产出紧凑状态证据重打分。两阶段训练：VPO 用标注/恢复上下文的 chosen-rejected 动作对做静态偏好对齐（SR 从 0.39 提到 37.25），步级 GRPO 式 RFT 加\"靠近目标/新地标 +1、重访视点罚\"密集奖励再提到 39.63（R2R val-unseen）。Qwen2.5-3B+LoRA 单卡 H100 训练，延迟比 NavCoT 低 12.3×、SR 相当。局限：延迟测量不含在线视觉描述、val-unseen SR 与最强专用方法仍有差距、RFT 后 SPL 略降。"
keywords:
  - 视觉语言导航
  - 具身智能
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2609.00920v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2609.00920v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2609.00920v1"}
previewImage: "/daily/2026-09-03/assets/arxiv--2609.00920/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 9
groupScore: 78
scoreScale: "paper-v2"
emphasis: false
---

# VerNav: Verifier-First Low-Latency Vision-and-Language Navigation

**一句话结论**：电子科技大学团队提出 VerNav，用"验证器优先"替代 LLM 视觉语言导航中每步自回归生成：验证器对全部候选动作做批处理二元验证（只取"Yes"单 token logit），熵超阈值时才调用自适应生成器产出紧凑状态证据并重打分，配合 VPO 静态偏好对齐 + 步级强化微调两阶段训练——Qwen2.5-3B 验证器在 R2R val-unseen 取得 39.63 SR，决策延迟 0.08 s/步，比 NavCoT 类方法低 12.3×而 SR 相当。

## 研究问题与贡献

LLM-based VLN 用显式推理组织路线进度、显式化中间线索，能提升指令理解与语义接地，但每步自回归生成在多步导航中累积巨大决策延迟。作者先做归因研究：用 DeepSeek-V4-Pro 分解四种 CoT 导航接口（MapGPT/NavGPT/DiscussNav/DeepSeek CoT）在 500 条 R2R val-unseen 轨迹上的可见输出 token，功能角色平均占比为：输入复述 47.36%、决策 29.39%、状态更新 13.91%、通用格式化 9.32%——一半以上 token 是复述与格式化，决策 token 本质是"在当前上下文下比较候选动作"的偏好，且相邻步的状态更新高度冗余。据此把不同功能分给不同模块：复述/格式化交给固定验证模板，决策交给验证器批量打分，状态更新只在困难决策时按需刷新。

贡献（原文报告）：验证器优先动作接口（批处理验证 + "Yes" logit 动作偏好）；熵触发生成器-验证器协作；VPO + 步级 RFT 两阶段导航导向验证器对齐。

## 方法与系统

**验证器优先接口**。每步对每个候选动作（含 stop）构造验证查询 ρ_t(a)=P(I, H_t, D_t, a)（指令、导航历史、候选视图文本描述、被查动作），同一步全部查询共享上下文只差动作，一个批处理前向取"Yes" token logit 作验证分数 s_t(a)，选最高者执行。遵循既有 LLM-based VLN 把观测转文本描述的做法，延迟对比聚焦 LLM 推理本身。

**熵触发协作**。验证分数 softmax 归一成候选分布后计算归一化熵 u_t；熵高对应"候选描述更相似、验证器与教师动作不一致"的状态（R2R 上的分析证实）。u_t>γ 时调用生成器 G_φ 产出紧凑状态证据（视觉语义线索摘要）供验证器重打分，否则走纯验证器路径——状态证据不做均匀刷新，大多数 episode 只需少量生成器调用，后期决策阶段触发率更高。

**两阶段训练**。(1) VPO 静态对齐：从标注轨迹构造 chosen-rejected 动作对（标注上下文选循路动作拒其余；恢复上下文选"从一步偏离回到标注路径"的动作），共享上下文只差候选动作，用带 margin 的对比排序损失优化分数偏好。(2) 步级 RFT 动态精修：GRPO 式目标上叠加可局部验证的步级奖励——靠近目标或揭示指令提及的新地标 +1、重访先前视点 −λ_loop，与按指令采样的 episode 级成功优势组合（步级组 N_S=16、episode 组 N=4）；奖励只在训练期使用。验证器为 Qwen2.5-3B-Instruct + LoRA（rank 16），单张 H100 训练。

## 实验设置与数据

R2R val-seen/val-unseen（Matterport3D 观测），标准指标 TL/NE/OSR/SR/SPL；对照 NavCoT、MapGPT、NavGPT、DiscussNav、A2Nav 等 LLM-based VLN（原论文 SR + 统一协议下实测每步 LLM 决策时间）；同骨干消融（全部方法换 Qwen2.5-3B）分离"接口收益"与"骨干大小收益"；三变体验证器训练消融（Raw/VPO/VPO+RFT，生成器关闭）；自适应生成分析（调用频率、步位分配、难度条件化、重打分与触发策略效果）。

## 结果、限制与结论

**主结果（论文报告值）**：VerNav 用最小的 3B 验证器取得列表中最低每步决策延迟；VPO+RFT 验证器在 val-seen 上 OSR/SR 最佳，val-unseen 39.63 SR 与代表性基线相当。**效率**：纯验证器路径 0.08 s/步；相对 NavCoT 延迟降 12.3×而 SR 相近；同 Qwen2.5-3B 骨干下，各生成式方法延迟 2.60-26.61 s，VerNav 完整版（含生成器触发）0.294 s 仍远低。

**对齐消融（论文报告值）**：Raw 验证器 SR≈0.39（近乎随机）→ VPO 提到 37.25（val-unseen）→ RFT 再到 39.63（val-seen 43.10，OSR 53.48/51.26）——局部 chosen-rejected 监督提供强排序信号，rollout 级 RFT 改善到达目标行为；val-unseen 上 SPL 略降说明 RFT 提升到达性但损失部分路径效率。**自适应生成**：多数轨迹只需少量生成器调用，触发集中在后期与更难的 episode；证据条件重打分优于纯验证器骨干；熵触发策略在 SR/SPL 上优于固定策略（图 6/7 分析）。

**限制（track 依据原文整理）**：val-unseen 39.63 SR 与最强专用 VLN 方法仍有差距（论文定位是与 LLM-based 代表性方法"competitive"而非 SOTA）；决策延迟测量基于预生成文本观测，不含在线视觉描述生成开销（作者声明该聚焦是刻意设计，但端到端部署延迟会更高）；SPL 在 RFT 后下降；验证器依赖视图文本描述管线，多模态直接观测接口与真机迁移原文未报告；3B 骨干下验证，更大验证器的收益-延迟权衡未探索。

## 来源链接

- arXiv 摘要页：https://arxiv.org/abs/2609.00920v1
- arXiv PDF：https://arxiv.org/pdf/2609.00920v1
- arXiv HTML 全文：https://arxiv.org/html/2609.00920v1

