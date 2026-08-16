---
candidateId: "arxiv--2608.03913"
date: "2026-08-16"
category: Paper
title: "至知研究院提出大模型可解释性新路线：拆权重，数据成本不到1%"
authors:
  - "www.qbitai.com"
summary: "Sparse Weight Decomposition 把稠密预训练投影分解为稀疏读写因子，让瓶颈单元可直接参与 sufficiency/necessity 电路提取；在 GPT-2、Qwen2.5 与 Qwen3.5-27B 上以少于基线的数据达到相近保真度，并以更少活跃边达到相同电路阈值。"
provisionalKeywords:
  - "可解释性"
  - "模型机制"
keywords:
  - "可解释性"
  - "模型机制"
sources:
  - name: "arXiv 论文页"
    url: "https://arxiv.org/abs/2608.03913"
  - name: "arXiv PDF"
    url: "https://arxiv.org/pdf/2608.03913"
  - name: "arXiv TeX source"
    url: "https://arxiv.org/e-print/2608.03913"
  - name: "代码仓库"
    url: "https://github.com/Veri-Safe/SWD"
  - name: "量子位报道"
    url: "https://www.qbitai.com/2026/08/473876.html"
previewImage: "/daily/2026-08-16/assets/arxiv--2608.03913/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 1
groupScore: 82
scoreScale: "paper-v2"
---
# Sparse Weight Decomposition：从预训练权重直接提取可检验电路

## 研究问题与贡献

论文研究如何绕开训练替代网络的高数据成本，把已有稠密语言模型的线性投影转化为可寻址、可干预的稀疏计算路径。作者提出 Sparse Weight Decomposition（SWD），将稠密矩阵 W 近似分解为两个稀疏因子 A 与 B，即 W≈AB。每个中间坐标成为一个瓶颈单元：它通过 A 的一列读取输入，再通过 B 的一行写回输出，自然形成一条固定 rank-one 路径。贡献包括：把稀疏权重分解改造成电路提取表面；证明瓶颈单元可独立评分、保留和消融；在单矩阵和全模型替换中比较 SWD、Transcoder、VPD、精确 SVD 等基线；并提出不需要校准激活的 zero-data 变体。

## 方法与系统

SWD 的关键不是简单低秩分解，而是把稀疏约束放在读写边上。默认目标在校准激活分布上最小化重建误差，使有限非零预算优先服务模型真实遇到的输入方向；没有激活时可将 Gram 矩阵设为单位阵，退化为权重空间的 Frobenius 分解。求解采用 Double Sparse Factorization 启发式：交替更新 A/B，内部用 ADMM、硬阈值和局部重拟合维护非零预算。电路提取时，作者按任务 margin 的一阶归因对瓶颈单元排序，评估只保留集合的 sufficiency 与消融集合的 necessity，并用 selected units 和 active edges 度量电路成本。全模型替换时，所有 48 个 attention/MLP 权重矩阵同时分解，局部误差会累积，因此 SWD-FT 固定稀疏支撑、只微调非零因子值。

## 实验设置与数据

实验覆盖 GPT-2 Small、Qwen2.5 0.5B/1.5B/3B，以及 Qwen3.5-27B 的单矩阵替换；另在 GPT-2 Small 上同时替换 12 个 Transformer block 的 48 个 attention 与 MLP 权重矩阵，而 embedding、LayerNorm、非线性和输出头保持不变。替换质量用 FineWeb-Edu 校准/训练与留出评估上的 cross-entropy delta、激活误差等衡量；电路任务使用 greater-than、IOI、docstring 与 gendered-pronoun 数据集，并在训练 split 排序、留出 split 评估。基线包括 Transcoder、VPD-Recon-CI、VPD-KL、稀疏预训练和精确稠密 SVD/Random-B 控制。

## 结果、限制与结论

论文报告，SWD 在 GPT-2 单矩阵替换中用数千 token 即达到低 CE 漂移，而训练基线约需 10^6 token；在相近替换保真度下，SWD 用更少 selected units 和 active edges 达到相同 sufficiency/necessity 阈值，优势扩展到 Qwen2.5 与 Qwen3.5-27B。全 GPT-2 Small 替换后，SWD-FT 以 20.6M token（4.19M 校准 + 16.38M 固定支撑微调）达到 CE 3.44，略优于使用 2.884B token 的稀疏预训练基线 CE 3.45，并在四个任务电路上保持有效。zero-data SWD 在权重空间更接近原矩阵，但校准版本在激进稀疏下更好保持行为。作者明确限制：电路是任务和协议相关的局部解释，不保证全局覆盖或唯一性；Qwen3.5-27B 只覆盖一个矩阵，全模型验证仅限 GPT-2 Small；一阶排序、消融方式、校准分布和稀疏预算都会影响结果。结论是 SWD 让稠密模型的局部电路假设更便宜、更可检验，但不能替代更全面的行为与安全验证。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.03913)
- [arXiv PDF](https://arxiv.org/pdf/2608.03913)
- [arXiv TeX source](https://arxiv.org/e-print/2608.03913)
- [代码仓库](https://github.com/Veri-Safe/SWD)
- [量子位报道](https://www.qbitai.com/2026/08/473876.html)
