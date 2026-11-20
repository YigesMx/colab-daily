---
schemaVersion: 3
candidateId: "arxiv--2611.24161"
date: "2026-11-20"
category: "Paper"
groupRank: 9
title: "AVTR: Adaptive Multimodal Reasoning with Visual Imagination"
authors: ["Xiaoqian Shen", "Yunyang Xiong", "Changsheng Zhao", "Saksham Suri", "Chong Zhou", "Zechun Liu", "Zhipeng Cai", "Zhuang Liu", "Qi Qian", "Wei Wen", "Hongyu Xu", "Hanxian Huang", "Ernie Chang", "Yanbei Chen", "Vikas Chandra", "Raghuraman Krishnamoorthi", "Mohamed Elhoseiny", "Lemeng Wu"]
summary: "Meta AI 与 KAUST 提出自适应视觉-文本推理 AVTR：视觉重放+视觉反思两阶段用生成式监督（SANA-1.6B，训练期使用、推理移除）让 64 个视觉查询形成问题条件化的视觉状态，想象引导 SFT 教模型利用该状态作答；推理模态选择形式化为学习型路由（视觉/文本双门，四条路线，软路由目标按路线奖励减成本，路线条件化 GRPO 优化内容）。16 基准上较 Qwen3.5 基线平均 +4.5 分且时延降 33%（视觉想象仅增 0.6 秒）；空间推理 +8.3（VSI-Bench +13.8 到 71.0）；2B 底座 +6.3 分。消融：生成式监督优于特征对齐（11 基准 10 胜 1 平）、去视觉重放降幅最大、任何固定路线不如 auto 路由。局限：视觉状态不渲染像素、路由训练需 16 rollout/问题，未涵盖具身控制。"
keywords: ["多模态推理", "大语言模型"]
sources: [{"name": "arXiv 摘要页", "url": "https://arxiv.org/abs/2611.24161"}, {"name": "arXiv HTML 全文", "url": "https://arxiv.org/html/2611.24161v1"}, {"name": "arXiv PDF", "url": "https://arxiv.org/pdf/2611.24161"}, {"name": "项目页", "url": "https://xiaoqian-shen.github.io/AVTR/"}, {"name": "GitHub 仓库", "url": "https://github.com/xiaoqian-shen/AVTR"}, {"name": "HuggingFace Papers", "url": "https://huggingface.co/papers/2611.24161"}]
previewImage: "/daily/2026-11-20/assets/arxiv--2611.24161/preview.png"
---

## 研究问题与贡献

论文《AVTR: Adaptive Multimodal Reasoning with Visual Imagination》（arXiv:2611.24161，v1 2026-11-18）由 Meta AI 与 KAUST 合作（Xiaoqian Shen 等 18 位作者，Yunyang Xiong、Mohamed Elhoseiny、Lemeng Wu 为项目负责人）。一句话结论：提出自适应视觉-文本推理 AVTR——把"视觉想象"作为文本思考之外的互补推理模态，通过训练期生成式监督让模型在潜空间中重访并蒸馏任务相关的视觉证据（推理时无需像素生成），并把推理模态选择形式化为学习型路由问题，按每条输入的感知/推断需求在直接回答、视觉想象、文本推理及其组合间自适应选择。

研究问题：VLM 观察是多模态的，推理却几乎完全在文本 token 中进行。这有两个根本限制：(1) 纯文本推理限制视觉中心问题的感知能力——例如 Qwen3.5-9B 在 MMSI-Bench 上仅 34.7%（人类 97%），开启文本思考也只提 0.3 分到 35.0%，说明视觉感知本身是瓶颈；(2) 对所有输入统一施加文本推理，忽视问题相关的模态与深度差异，产生冗长而不必要的推理轨迹。已有补救各有代价：外部视觉工具（缩放/裁剪）需推理期额外视觉处理；统一理解-生成模型很少用生成来反哺感知；潜空间视觉推理存在表征鸿沟与自回归生成的时延。贡献：(1) 视觉想象作为中间推理模态（训练期生成式监督、推理期只用连续视觉状态）；(2) 自适应多模态推理 = 视觉想象与文本推理之上的学习型路由（单个策略按输入选择/组合四条路线）；(3) 16 个基准上验证：相对 Qwen3.5 基线平均 +4.5 分且推理时延降 33%，并有效缩放到 2B 底座（+6.3 分）。

## 方法与系统

视觉重放（Stage 0）：n=64 个可学习视觉查询 Q 与图像、提示一起单次前向送入冻结 VLM，取查询位置末层隐状态 H_Q，经 6 层 connector 映射到视觉生成器（SANA-1.6B，512×512）的条件空间，用流匹配重建损失（目标为输入自身，5M 带字幕图像）联合优化查询、connector 与生成器——建立 VLM 表示空间与视觉生成空间的接口，且查询并行处理、无自回归潜 token 生成。视觉反思（Stage 1）：复用同一架构，把提示换成问题、重建目标换成问题相关的视觉目标（图像的显著区域/证据，视频的含忠实证据帧；178K 个问题条件目标，附录含目标定位、验证与增益过滤）——使 H_Q 聚焦答题所需证据。想象引导 SFT（Stage 2）：目标序列 y=[imagine 开标记; Q; imagine 闭标记; a]，联合优化响应损失与生成损失 L_SFT=L_resp+0.2·L_imag，教会模型利用视觉状态生成答案；connector 与生成器仅作训练期监督，推理时完全移除。自适应路由（Stage 3）：两个门 token——视觉门 imagine 开/闭标记与文本门 think 开/闭标记 定义路线空间 {Direct, Visual, Textual, Visual+Textual}；每条输入强制执行全部四条路线、每路线 g=4 个续写（共 16 个 rollout），以各路线平均答案奖励减路线成本 C(m)（成本从低到高依次为 Direct、Visual、Textual、Visual+Textual（Direct=0））做软路由目标 p(m|x)=Softmax(R_m−C(m)) 直接监督门 token；内容优化用路线条件化 GRPO（优势只在与同路线 rollout 之间中心化，避免路线效用差异污染内容更新，门位置与连续查询被 mask；20K 问题训练），总目标 L=L_GRPO+0.02·L_gate。

## 实验设置与数据

底座 Qwen3.5-9B 与 Qwen3.5-2B。16 个基准：高分辨率图像理解（V*、HR-Bench-4K/8K、BLINK）、空间推理（ERQA、MMSI-Bench、VSI-Bench、RealWorldQA）、视频理解（MVBench、Video-MME、LongVideoBench、MLVU，官方准确率）与时序定位（Charades-STA、QVHighlights、ActivityNet-Captions、NExT-QA，mIoU）。统一协议：相同提示、贪心解码、最多 20K 视觉 token、视频 2fps 采 256 帧、新生成 token 上限 8192（为推理成本公平，思考型模型不用底座官方 224K 长视频设置）。对比：GPT-5、Gemini 2.5 Pro、GPT-5 mini 等闭源模型，InternVL3.5、Cambrian-S、LLaVA-OneVision-2、JoyAI-Image-Und 等开源模型，以及 Video-R1、Time-R1、VITAL、VideoChat-R1.5、VideoAuto-R1 等视频推理模型。消融覆盖视觉监督形式（无/特征对齐/生成式）、组件（去重放/去反思/去路由）与固定路线 vs 自适应路由。

## 结果、限制与结论

论文报告：AVTR-9B 相对直接回答（w/o Think）在 8 个图像/空间基准上平均 67.1→73.2（+6.1），空间推理 +8.3（VSI-Bench +13.8 至 71.0，超过所有对比模型包括 Gemini 2.5 Pro 的 53.6 与 GPT-5 的 55.0）；V* 89.5、HR-Bench-4K 89.4、BLINK 75.2、ERQA 54.2、RealWorldQA 81.5，全面超过 Qwen3.5-9B w/Think。视频理解平均 +3.3（MVBench 72.4、Video-MME 76.9、LongVideoBench 70.5、MLVU 81.7），时序定位平均 +4.2（Charades-STA 64.7、QVHighlights 71.5 等）——注意开启文本思考的底座在四个时序定位基准上全部劣于直接回答，进一步支持自适应路由。2B 底座平均 +6.3 分，超过 Gemma 4 E2B、MiniCPM-V 4.6、InternVL3.5-2B。模态互补分析：视觉想象在度量、几何、视角敏感感知上更强，文本推理在时序排序、计数、离散关系推理上更强。消融：无视觉监督/特征对齐监督均逊于生成式监督（11 个基准中 10 胜 1 平）；去视觉重放降幅最大（说明反思依赖良好对齐的接口）；任何固定路线都不如 auto 路由。效率：视觉想象仅增 0.6 秒时延（查询并行处理 + 推理期无像素解码），视觉推理时延 50ms vs 先前潜空间方法 83–437ms；自适应路由较固定文本思考平均分 +4.5 同时降时延 4.3 秒。

限制与未验证点：推理期视觉状态不渲染为像素，其可解释性依赖事后可视化（论文图 4 渲染仅为展示）；路由学习需要 16 个 rollout/问题的路由训练成本；基准以视觉理解为主，未涵盖文档 OCR、3D 重建或具身控制任务，具身/机器人场景迁移性当前材料未确认；生成器容量（SANA-1.6B、512 分辨率）对高保真视觉证据的约束原文未深入分析。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2611.24161)
- [arXiv HTML 全文](https://arxiv.org/html/2611.24161v1)
- [arXiv PDF](https://arxiv.org/pdf/2611.24161)
- [项目页](https://xiaoqian-shen.github.io/AVTR/)
- [GitHub 仓库](https://github.com/xiaoqian-shen/AVTR)
- [HuggingFace Papers 页](https://huggingface.co/papers/2611.24161)
