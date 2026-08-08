---
candidateId: "arxiv--2608.05987"
category: "Paper"
date: "2026-08-08"
rank: 12
title: "AgentOPSD：以递归自蒸馏重分配长程智能体信用"
authors:
  - "Zi-Han Wang"
  - "Zhengxi Lu"
  - "Zhiyuan Yao"
  - "Jinyang Wu"
  - "Jie Wu"
  - "Zhengzhou Cai"
  - "Yueqing Sun"
  - "Ziang Ye"
  - "Linji Hao"
  - "Qi Gu"
  - "Xunliang Cai"
  - "Yongliang Shen"
  - "Yujiu Yang"
summary: "AgentOPSD针对长程智能体强化学习中终局奖励被均匀广播到所有轮次的问题，把训练期特权技能带来的师生对数概率差聚合成轮级证据，再通过递归贝叶斯式信念更新构造有界、保号的轮级优势权重。论文在ALFWorld、WebShop和Search-QA上以Qwen2.5-3B/7B验证了方法，并通过组件消融区分轮级聚合、递归更新、符号方向和先验锚定的贡献。"
keywords:
  - "长程信用分配"
  - "在线自适应优化"
score: 84.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.05987v1"
previewImage: "/daily/2026-08-08/assets/arxiv--2608.05987/preview.png"
---

## 核心内容

GRPO等无评论器算法通常把一条轨迹的终局优势赋给轨迹内所有token或行动轮次，因此无法区分真正扭转任务结果的关键行动与例行操作。已有在线策略自蒸馏可以从带训练期特权信息的“自教师”获得密集师生差异，但token级局部差异并不天然等于序列信用：同样的证据在结果尚不确定时可能关键，在前序证据已使信念饱和后则可能冗余。

AgentOPSD把每轮行动看作对“轨迹最终成功”这一命题提供的新证据。它先把同一行动轮中的token级教师-学生对数概率差求和，再从组内成功率初始化一个成功信念，在log-odds空间递归累积证据。真正用于信用重分配的不是局部差值本身，而是相邻信念状态的变化量。终局验证器仍决定更新方向，递归信念只改变每轮更新幅度，因此方法不引入单独的评论器、奖励模型或额外rollout。

## 关键技术与数据

自教师和学生共享参数并评价同一条学生轨迹，区别是教师额外读取训练期检索到的任务技能。每轮证据是该行动全部token的教师与学生对数似然差之和。累积状态按 `c_k = gamma * c_(k-1) + e_k` 更新，初始信念由同一GRPO组的成功比例给出；信念变化再乘终局优势符号，经过轨迹内标准化、带宽裁剪和混合系数，得到每轮优势。论文证明该重塑在给定参数范围内有界、保持原GRPO优势的符号，并在混合系数为零时退化回GRPO；同时明确指出自教师差值只是理想贝叶斯因子的近似，依赖技能条件分支接近成功行为等假设。

实验使用Qwen2.5-3B/7B-Instruct，在ALFWorld、WebShop和Search-QA上统一训练150步。组大小为8，学习率 `1e-6`，策略裁剪范围0.2/0.24，KL系数0.01；AgentOPSD采用混合权重0.5、乘数带宽0.2和证据衰减0.95。ALFWorld、WebShop和Search-QA最长交互轮数分别为50、15和4。基线覆盖原始模型、技能提示、GRPO、OPSD、GRPO+OPSD、Skill-SD、RLSD、SDAR与StepOPSD，主要比较成功率、问答准确率及WebShop分数/成功率。

## 结果与结论

在7B模型上，AgentOPSD取得ALFWorld 89.1%成功率、Search-QA 49.2%平均准确率以及WebShop 90.2分/79.7%成功率；相应GRPO结果为81.2%、42.0%和80.9/72.6。3B模型上，AgentOPSD为84.4%、46.7%和90.4/69.5。作者还用ALFWorld子任务平均轮数作描述性回归：AgentOPSD每增加一轮下降0.54个百分点，而GRPO和RLSD分别下降2.91和3.59个百分点，但该分析只有六个子任务点，不能作为因果证据。

ALFWorld 7B消融显示，完整方法为89.1%；改为token级累积降至85.9%，用局部差值替代递归信念修订降至82.8%，去掉结果对齐符号降至80.5%，去掉组成功率先验降至78.9%。这些结果支持“局部差异不等于序列信用”的主张。限制也很清楚：证据代理依赖可用且相关的训练期技能，自教师差异不是真实成功条件分布；方法对优势作有偏重塑；实验只覆盖三种环境、两个模型规模和固定训练预算。因此它更像一种计算开销较低的实用信用塑形方案，而非对每轮因果贡献的无偏识别。

## 来源链接

- [arXiv论文](https://arxiv.org/abs/2608.05987v1)
- [项目代码](https://github.com/ZethWang/AgentOPSD)
