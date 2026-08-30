---
candidateId: "arxiv--2608.26701"
date: "2026-08-30"
category: Paper
title: "Accelerating Scientific Research with Gemini in the Real-World"
authors: ["arxiv.org", "arxiv.org", "arxiv.org", "jiqizhixin.com"]
summary: "Google 团队将 Co-Scientist 扩展为执行接地的研究伙伴：在材料、生物和计算机科学中完成实验闭环，单次生长 MoS2/MoSe2/WS2，预测大肠杆菌群体形态，并在 HealthBench 与论文可靠性评估中给出系统结果。"
keywords: ["科学发现", "多模态生成", "AI安全"]
sources:
  - {"name":"arxiv.org","url":"https://arxiv.org/abs/2608.26701"}
  - {"name":"arxiv.org","url":"https://arxiv.org/pdf/2608.26701"}
  - {"name":"arxiv.org","url":"https://arxiv.org/e-print/2608.26701"}
  - {"name":"jiqizhixin.com","url":"https://www.jiqizhixin.com/articles/2026-08-29-7"}
previewImage: "/daily/2026-08-30/assets/arxiv--2608.26701/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 84
scoreScale: "paper-v2"
emphasis: true
---

# Gemini Co-Scientist 的真实世界科研加速验证

## 研究问题与贡献

论文是 Google 团队对 Co-Scientist 的扩展与真实世界验证。此前系统主要面向假设生成，本版本关注从假设、实验、结果解释到论文写作的闭环。贡献包括：连接半自动化学气相沉积反应器进行材料合成；用稀疏成像数据预测工程化大肠杆菌的群体形态；自动发现推理时架构；以及用双盲评审量化生成论文的幻觉、抄袭与安全。

## 方法与系统

Co-Scientist 采用多智能体工作流，包含假设生成、实验模块、代码生成、结果分析和论文写作。系统引入日志验证、抄袭惩罚、幻觉惩罚和两层安全架构；在材料实验中通过 Gemini 3 Deep Think 进行快速推理和硬件控制，把实验室约束转化为可执行生长参数。对医学生成任务，系统自动发现 Agent_H 架构，并用盲评医生评估潜在临床危害。

## 实验设置与数据

材料实验针对 MXene 和三类二维过渡金属硫属化物；生物实验使用工程化 E. coli K-12 MG1655，在不同 IPTG 梯度下比较预测与未发表湿实验室形态测量。计算机科学任务在 HealthBench Hard 与 Professional 上与六个前沿模型比较。论文评估召集 30 名领域专家，对 150 篇端到端生成稿件做 450 次双盲评审。

## 结果、限制与结论

系统为 Ti3C2Tx MXene 选择非危险前驱体路线，生成与目标晶格相似的层状二维材料，但作者明确说明仍需进一步实验确认原子结构；在本地实验室无历史配方条件下，单次尝试生长出单层 MoS2、MoSe2 和 WS2。生物学任务中预测与未观察诱导剂梯度下的形态定量匹配。Agent_H 在 HealthBench Hard 原始分 0.420，长度调整后在 Hard 和 Professional 均为最高，并在盲评中降低潜在临床危害。450 次评审显示可靠性模块降低严重结果幻觉与抄袭，安全系统拒绝 98.7% 有害研究指令。限制在于材料结构尚未原子级确认，安全与幻觉减少不能外推为科研可信度自动保证。

## 来源链接

- [arXiv 摘要页](https://arxiv.org/abs/2608.26701)
- [PDF 全文](https://arxiv.org/pdf/2608.26701)
- [TeX source](https://arxiv.org/e-print/2608.26701)
- [机器之心报道](https://www.jiqizhixin.com/articles/2026-08-29-7)
