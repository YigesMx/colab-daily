---
candidateId: "arxiv--2607.28624"
category: "Paper"
date: "2026-08-01"
rank: 2
title: "PhiZero: A World Model Built Around Physical Language"
authors:
  - "Shuyao Shang"
  - "Yuqi Wang"
  - "Ruopeng Gao"
  - "Xu Chen"
  - "Tieniu Tan"
  - "Lue Fan"
  - "Zhaoxiang Zhang"
summary: "PhiZero 用离散“物理语言”把状态转移推理与像素渲染分开：先从首帧和动作意图预测 256 个转移符号，再由视频扩散模型生成未来视频，并在多项物理生成与理解基准上报告领先或有竞争力的结果。"
keywords:
  - "世界模型"
  - "视频生成"
  - "机器人控制"
score: 89
sources:
  - name: "arXiv TeX source"
    url: "https://arxiv.org/src/2607.28624v1"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2607.28624v1"
  - name: "Project page"
    url: "https://phi-zero.github.io/"
previewImage: "/daily/2026-08-01/assets/arxiv--2607.28624/preview.png"
---

## 核心内容

PhiZero 试图改变视频世界模型的内部接口。常规方法直接在高维像素或视频 latent 中预测未来，动力学知识虽然可能存在，却与外观生成混在同一个预测器中。论文提出“物理语言”：从视频中自监督学习的一组离散状态转移符号。模型采用 reason-then-render 分解，先根据当前首帧和文字动作意图预测未来的物理语言序列，再把该序列交给视频扩散模型渲染成未来画面。

系统由 Physical Language Tokenizer 和 Physical Language Reasoner 两部分组成。Tokenizer 用时空编码器处理视频，再对相邻 latent 状态使用共享的 transition-level Q-Former；每个相邻区间被压缩为若干查询特征，经有限标量量化（FSQ）形成离散序列。首帧作为静态外观条件直接送入预训练扩散解码器，使容量受限的离散瓶颈更集中地保存“发生了什么变化”，而不是重复编码背景和纹理。Reasoner 从预训练 Qwen3-VL-4B 初始化，扩展 25K 个物理语言符号的词表，自回归预测状态转移序列。

这一分解还提供复用接口：同一状态转移序列可以与编辑后的首帧组合，把倒液体、移动、手部或全身运动渲染到不同外观、场景或 embodiment 中。论文进一步把动作轨迹映射到物理语言，用于细粒度驾驶和机器人夹爪控制，以及连续控制下的交互式 rollout。这里展示的是生成式视觉迁移与模拟能力，并不等同于在真实机器人上执行经验证的闭环策略。

## 关键技术与数据

Tokenizer 的时空编码器采用 Wan2.2 VAE 架构并从其权重初始化，扩散解码器来自 Wan2.2-5B，以 rank 32 的 LoRA 微调。FSQ 各维量化级别为 `(8,5,5,5,5,5)`，得到 25K 符号；Q-Former 使用 32 个查询。33 帧视频被编码为 9 个时间 latent，每个相邻对产生 32 个符号，最终序列长度为 `(9-1)×32=256`。训练先加入 pure-noise warm-up，避免预训练扩散模型绕过新条件，仅依靠部分目标信息和自身去噪先验。

数据整理从约 50K 小时真实视频开始，去重并过滤压缩缺陷、损坏帧、水印、时长/分辨率异常和镜头切换后，得到约 10K 小时用于 tokenizer 预训练。更严格的美学、运动幅度和状态变化可观察性过滤，加上约 1K 小时模拟视频，形成约 5M 个四秒片段用于 tokenizer SFT 和 reasoner 继续预训练；进一步筛选出约 1M 个运动丰富、物理信息明显的片段做 reasoner SFT。训练分辨率从 256×448 提升至 512×896，片长课程从 1 秒逐步增加到 4 秒。

评估覆盖 Physics-IQ Verified、PhyGround、WorldModelBench 三项生成基准，以及 IntPhys2、LikePhys、YoCausal 三项理解基准。理解任务不是让模型生成，而是比较一对有效/无效视频对应物理语言序列在 Reasoner 下的似然。Tokenizer 另在 500 个四秒、8 FPS、512×896 的真实视频上测试重建。

## 结果与结论

作者报告 PhiZero 在 Physics-IQ Verified 的 IQ-Score 为 41.2，高于表中 Cosmos3-Super 的 39.5；在 PhyGround 的 Physics Score/Overall 为 3.01/2.97，在 WorldModelBench 的 Physics Adherence/Total 为 4.88/8.19。理解侧，IntPhys2 总体为 56.34；LikePhys 平均错误率为 41.7，但分项并非全部领先，例如 fluid 项为 53.15；YoCausal 的聚合排名为 2.0。因各基准可能使用规则指标或模型评审，这些数字支持“基准上更强”，不应扩大为掌握一般物理定律。

Tokenizer 用 256 个离散符号表示未来转移，在重建实验中达到 PSNR 28.9、SSIM 0.903、LPIPS 0.087，优于表中其他高压缩 tokenizer，但仍明显低于使用 44,800 连续视觉 token 的 Wan2.2 VAE（PSNR 37.7）。消融显示去掉扩散先验解码器、transition-level Q-Former 或 pure-noise warm-up 都会降低重建；Reasoner 消融中完整模型的 41.2 也高于去模拟数据的 37.7 和去两阶段训练的 39.2。

论文的限制很关键：这些符号是经验性状态转移表征，不是可解释的符号物理定律；主要依赖可见视频，触觉和微观粒子等视觉歧义过程覆盖不足；当前模型与数据规模相对物理世界多样性仍小，且主要处理固定时长片段。跨 embodiment 和 sim-to-real 结果是基于编辑首帧的视频生成演示，尚不能证明控制策略能安全迁移到真实硬件。

## 来源链接

- arXiv TeX 原始源码：https://arxiv.org/src/2607.28624v1
- arXiv 论文页：https://arxiv.org/abs/2607.28624v1
- 项目主页：https://phi-zero.github.io/
