---
candidateId: "arxiv--2607.29596"
category: "Paper"
date: "2026-08-04"
rank: 13
title: "FibVLA：采用斐波那契采样的高效时序视觉语言动作模型"
authors:
  - "Li Lin"
  - "Wujun Xu"
  - "Weiwei Meng"
  - "Kaiwen Xia"
  - "Kang Hao Cheong"
  - "Shuai Wang"
summary: "FibVLA 用对数回溯采样同时保留近期高频运动和远期低频任务状态，用通道级时序编码压缩历史视觉，再用斐波那契递归推理复用动作块中的历史特征，目标是在长上下文下保持实时响应。"
keywords:
  - "高效时序建模"
  - "视觉语言动作"
  - "模仿学习"
score: 81.0
sources:
  - name: "arXiv full text"
    url: "https://arxiv.org/html/2607.29596"
  - name: "arXiv abstract"
    url: "https://arxiv.org/abs/2607.29596v1"
previewImage: "/daily/2026-08-04/assets/arxiv--2607.29596/preview.png"
---

## 核心内容

长历史能缓解 VLA 的部分可观测问题，但直接把帧和本体状态全部编码会带来 token 爆炸和推理成本。FibVLA 观察到机器人任务的信息密度不均匀：近期帧适合细粒度控制，远期帧更适合任务进展，因此采用逐渐变稀疏的历史采样并让下一次推理复用上一次动作块中的缓存特征。

## 关键技术与数据

对数回溯采样构造单调时间索引，并加入递归稀疏约束 ki≥ki-1+ki-2；通道级时序编码计算稀疏帧差分和运动历史图，将 Near/Mid/Far 特征映射到 RGB 通道，再与当前帧一起送入 PaliGemma。动作专家采用 flow matching，推理将动作块长度绑定到 Fibonacci 项，使 KV cache 与采样位置对齐。论文在 LIBERO、MIKASA-Robo、SimplerEnv-Bridge/Fractal 与 Piper 真实数据上评估。

## 结果与结论

论文报告 LIBERO 平均成功率 96.8%，LIBERO-Long 95.2%，SimplerEnv-Fractal 总体 72.1%，Bridge 67.3%，MIKASA-Robo 46.5%。真实实验对比图给出 FibVLA 平均分 85.7，比 π0 高 11.4；推理效率分析称其在真实评估中更快。方法仍有较多结果依赖附录和分项协议，且“无需重训大视觉编码器”的说法不等于整个策略无需训练。

## 来源链接

- [本次精读原文](https://arxiv.org/html/2607.29596)
- [arXiv 摘要页](https://arxiv.org/abs/2607.29596v1)
- [arXiv PDF](https://arxiv.org/pdf/2607.29596v1)
