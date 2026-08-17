---
candidateId: "url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-08-16-11"
date: "2026-08-17"
category: "Paper"
title: "AI宣布森多夫猜想告破！陶哲轩发现它隐藏的更强结果"
authors:
  - "www.proofatlas.ai"
summary: "Lech Mazur 发布计算机辅助 Sendov 猜想证明；陶哲轩消化、简化后指出同一论证可推出更强的 Phelps-Rodriguez 结论。"
provisionalKeywords:
  - "数学证明"
  - "模型能力"
  - "基准评测"
keywords:
  - "数学证明"
  - "模型能力"
  - "基准评测"
sources:
  - name: "www.proofatlas.ai"
    url: "https://www.proofatlas.ai/formalizations/sendov-conjecture/"
  - name: "www.proofatlas.ai"
    url: "https://www.proofatlas.ai/papers/sendov-conjecture/SENDOV_CONJECTURE_PROOF_AUGUST_5_2026.pdf"
  - name: "terrytao.wordpress.com"
    url: "https://terrytao.wordpress.com/2026/08/12/a-digestion-of-the-proof-of-sendovs-conjecture/"
  - name: "www.x-techcon.com"
    url: "https://www.x-techcon.com/article/175409.html"
previewImage: null
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 72
scoreScale: "paper-v2"
---

# AI宣布森多夫猜想告破！陶哲轩发现它隐藏的更强结果

## 研究问题与贡献

Sendov 猜想关注闭单位圆盘内复多项式零点与临界点的距离关系。Lech Mazur 的论文宣布对所有次数给出计算机辅助证明，并披露 GPT-5.6 Pro 参与数学探索、证明开发、计算测试、对抗审计和表述；作者负责设计编排与验证流程并承担结论责任。

## 方法与系统

证明先将假想反例归一化为 obstruction，再通过倒数临界坐标构造原函数多项式，得到无除法系数计算与有限乘积误差界。5 至 499 次的有限部分由精确有理算术认证，大次数部分使用初等估计和一个紧致精确认证积分，2 至 5 次由加权 AM-GM 比较。论文另附 Lean 4 形式化，主声明不依赖 sorryAx 或项目自定义公理。

## 实验设置与数据

论文提供精确检查脚本、突变测试、固定 Lean 与 Mathlib 版本、审计文件以及公开 reproducibility bundle。陶哲轩随后消化、简化并重新形式化论证，报告可将约 9 万行形式化代码缩减到约 1.5 万行，并指出同一论证可推出更强的 Phelps-Rodriguez 结论。

## 结果、限制与结论

原文关键证据摘录：- The AI system used was OpenAI GPT-5.6 Pro.
- Separately, an accompanying Lean 4 development proves Theorem 1.1 itself.
- SENDOV’S CONJECTURE 3 3.
- Further directions — The Sendov and Phelps–Rodriguez conjectures are now resolved, but several related conjectures remain open.

论文声称 Sendov 猜想成立，陶哲轩的消化稿进一步称 Phelps-Rodriguez 猜想随之解决。限制在于 AI 参与过程难以完整还原，相关 Borcea、Schmeisser 与 Smale 等强化问题仍未解决；Lean 形式化也未逐行验证所有辅助 Python 程序实现。

## 来源链接

- https://www.proofatlas.ai/formalizations/sendov-conjecture/
- https://www.proofatlas.ai/papers/sendov-conjecture/SENDOV_CONJECTURE_PROOF_AUGUST_5_2026.pdf
- https://terrytao.wordpress.com/2026/08/12/a-digestion-of-the-proof-of-sendovs-conjecture/
- https://www.x-techcon.com/article/175409.html
