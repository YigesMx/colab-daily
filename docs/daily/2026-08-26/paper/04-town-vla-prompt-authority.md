---
candidateId: "arxiv--2608.23224"
businessCandidateId: "arxiv--2608.23224"
date: "2026-08-26"
category: "Paper"
title: "Think Only When Needed: Prompt-Authority Control for Selective Slow-Path Intervention in Vision-Language-Action Manipulation"
authors: ["arxiv.org"]
summary: "TOWN-VLA 发现检索文本会引发提示形式坍塌，提出 fail-closed 提示权限接口，仅在兼容时改写冻结 VLA 的执行提示。"
provisionalKeywords: ["VLA模型", "机器人操作", "模型部署"]
keywords: ["VLA模型", "机器人操作", "模型部署"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.23224v1"}]
previewImage: "/daily/2026-08-26/assets/arxiv--2608.23224/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 85
scoreScale: "paper-v2"
emphasis: false
---

# Think Only When Needed: Prompt-Authority Control for Selective Slow-Path Intervention in Vision-Language-Action Manipulation

## 研究问题与贡献

论文研究冻结 VLA 策略的输入边界：检索器、规划器或外部记忆生成的候选文本一旦进入被执行 prompt，就变成对闭环控制的干预。作者在固定策略、初始状态和执行协议的审计中发现，原始追加文本把平均成功率从 92.47% 降到 3.00%；在 500 个匹配状态中，有意义追加和长度匹配的无意义追加均为 0/500。这种现象被称为 prompt-form collapse，说明失败主要来自模板形式变化而非语义质量。

TOWN-VLA 的贡献是把“候选生成”和“授权改变 prompt”分离。系统只允许通过固定兼容性检查的候选渲染为紧凑规范指令，否则逐字节恢复原 Base prompt，并为每次路由记录候选、分数、拒绝原因和 prompt hash，使外部干预可审计、可回退。

## 方法与系统

TOWN-VLA 包裹冻结的 OpenVLA-OFT，不改变参数、动作空间、控制频率或唯一动作生成器。系统先用 CLIP 从 48 条演示轨迹记忆中检索 top-5 候选；一个冻结文本解析器提取任务和候选上下文中的 object/target，按 CLIP 相似度、结构重叠、上下文重叠、冲突惩罚和检索排名重排。

Top-2 fail-closed cascade 最多检查前两个候选：若候选对象或目标非空但与任务零重叠则拒绝；通过者用固定模板渲染为规范紧凑指令，否则恢复原始指令。整个 rollout 只解析一次 prompt。Task-Prior Admission 仅作为 oracle 控制实验，用预冻结路由表估计可节省的慢路径调用，不参与主要结果。系统保证每 episode 最多一次检索、5 个兼容性分数、2 个检查、1 次渲染和 1 次 prompt 解析。

## 实验设置与数据

主实验在匹配初始状态和同一冻结 OpenVLA-OFT 上进行。LIBERO-Plus 覆盖 28 个 suite-axis 单元、每方法 10,030 个 episode，报告七轴和四 suite 成功率；500 状态 factorial 控制区分 prompt 形式与语义，900 路由审计检查授权与精确恢复。另在空间/物体偏移、5 个发布 checkpoint 和五个 suite manifest 上做受限 OOD 与组件消融。

物理实验使用 PiPER、双 RealSense D405 和冻结 π 0.5 checkpoint，在无干扰、黄色杯和红色圆柱三个场景中每场景-方法 50 次、共 150 次每方法；两组随机交错，统一 10 action-step 重规划、速度比例、60 秒限制和“目标在绿色托盘直立保持两秒”的人工成功标准。

## 结果、限制与结论

论文报告 TOWN-VLA 把 LIBERO-Plus 从 69.46% 提高到 73.07%，增加 362 次成功，配对 cell bootstrap 95% CI 为 1.89-5.45 个百分点，并在 7 个扰动轴中的 6 个和全部 4 个 suite 上改善。900 路由审计中，525 条路由恢复 hash 相同的 Base prompt，375 条授权 prompt 全部保留任务签名。PiPER 成功率从 52.7% 提高到 78.7%，Fisher 精确检验 p = 3.16e-6。oracle 路由可在保持 2,826 次成功的同时减少 50% 慢路径调用，但已评估的 oracle-free gate 未能可靠识别应跳过哪些调用。

限制在于实验刻意使用 48 条同域记忆、纯文本兼容性规则和单一任务/单一操作者的物理研究；Q1 增益到具体路由的归因、更大跨域记忆、视觉条件化 admission和更广盲测机器人试验仍是后续工作。真实部署中的长期稳定性和跨任务校准当前材料未确认。

## 来源链接

- [arXiv 论文页](https://arxiv.org/abs/2608.23224v1)
- [PDF 全文](https://arxiv.org/pdf/2608.23224v1)
