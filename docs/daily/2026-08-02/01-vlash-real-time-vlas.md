---
candidateId: "arxiv--2512.01031"
date: "2026-08-02"
rank: 1
title: "VLASH：用未来状态感知实现实时 VLA 异步控制"
authors: ["Jiaming Tang", "Yufei Sun", "Yilong Zhao", "Shang Yang", "Yujun Lin", "Zhuoyang Zhang", "James Hou", "Yao Lu", "Zhijian Liu", "Song Han"]
summary: "VLASH 通过把机器人状态沿已下发动作前滚到下一段动作真正开始执行的时刻，缓解异步 VLA 的预测与执行错位；论文在 Kinetix、LIBERO 和真实机器人任务上报告更低反应延迟、更平滑控制及更好的速度-精度权衡。"
keywords: ["Vision-Language-Action", "异步推理", "机器人控制", "未来状态感知", "动作量化"]
score: 94
sources:
  - name: "arXiv full paper"
    url: "https://arxiv.org/html/2512.01031v2"
  - name: "AI Insider"
    url: "https://theaiinsider.tech/2026/08/01/mit-method-helps-robots-think-ahead-and-move-faster/"
previewImage: "/daily/2026-08-02/assets/arxiv--2512.01031/7c373d584c9bfebd.png"
---

## 核心内容

现有视觉-语言-动作模型通常同步运行：模型先完成一次推理，机器人再执行一段动作。动作块之间会出现停顿，而且在执行期间机器人无法基于新观察及时重规划。直接把推理和执行并行化虽然消除了停顿，却会产生时间错位：模型在时刻 `t` 看到的机器人状态，对应动作真正开始执行的时刻已经变成 `t + Δ`。

VLASH 利用上一动作块中将在推理延迟期间执行的已知动作，把当前机器人状态前滚到新动作块接管时的状态，再把当前视觉观察和这个前滚状态共同输入 VLA。微调阶段联合偏移状态与动作目标并固定视觉观察，使模型必须依赖状态；高效版本把共享观察的多个偏移分支打包到一次块稀疏注意力计算中。

## 关键技术与数据

论文覆盖 Kinetix 的 12 个动态任务、LIBERO 四组共 40 个任务，以及 Galaxea R1 Lite 和 LeRobot SO-101 两类真实平台。真实任务包括拾取放置、堆叠、分拣、乒乓球和打地鼠。共享观察微调在 4 张 H100 上每步约 129.29 ms，标准微调约 420.99 ms；到 30K steps 时，两者 LIBERO 平均成功率分别为 96.6% 和 96.8%。

## 结果与结论

作者报告 VLASH 最多降低 11.8 倍反应延迟，并在动作量化后实现 1.5-2.0 倍任务速度提升。动态真实任务中，VLASH 的乒乓球命中为 11/20，打地鼠平均 28.8 分，同步方案分别为 0/20 和 3.2 分。方法仍无法直接获得未来环境图像，且动作量化存在速度与精度权衡。

## 来源链接

- https://arxiv.org/html/2512.01031v2
- https://arxiv.org/abs/2512.01031
- https://github.com/mit-han-lab/vlash
- https://theaiinsider.tech/2026/08/01/mit-method-helps-robots-think-ahead-and-move-faster/
