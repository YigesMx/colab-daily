---
candidateId: "paper--arxiv--2608.19574"
businessCandidateId: "paper--arxiv--2608.19574"
date: "2026-08-22"
category: "Paper"
title: "HiTac-WAM: A Hierarchical Tactile World Action Model for Contact-Rich Robot Manipulation"
authors: ["arxiv.org"]
summary: "中科院自动化所、ImprintX 与北京智源提出分层触觉世界-动作模型 HiTac-WAM，把每个候选动作块的触觉未来分解为接触状态、3D 形变场与滑移风险的定向层级，用触觉预测引导动作选择并在执行中校验。平均接触 F1 达 0.921，层级结构使 3D 位移误差降低 17.6%、滑移 AUPRC 提升 60.4%，三个接触密集任务平均真机成功率从 31.1% 提升至完整系统的 72.2%。"
provisionalKeywords: ["触觉感知", "机器人操作"]
keywords: ["触觉感知", "机器人操作"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2608.19574"}, {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2608.19574v1"}]
previewImage: "/daily/2026-08-22/assets/paper--arxiv--2608.19574/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 4
groupScore: 81
scoreScale: "paper-v2"
emphasis: false
---
# HiTac-WAM：面向接触密集操作的分层触觉世界-动作模型

## 研究问题与贡献

视觉 rollout 难以直接观察末端与环境之间的接触状态：遮挡下多个候选动作的视觉未来可能同样合理，实际却对应错过接触、压力不足、滑移或侧向卡阻等不同结果。HiTac-WAM 提出在执行前预测每个候选动作块的触觉后果，并把触觉状态按物理依赖组织成定向层级，用于候选排序与执行期校验。

## 方法与系统

模型把触觉预测分解为接触状态、接触条件下的 3D 形变场与滑移风险三个阶段，前级输出经 stop-gradient 条件传给后级；定向注意力掩码允许触觉 query 关注候选的视觉-动作上下文，但禁止视觉/动作 query 关注触觉 token。规划时按触觉预测与任务进度估计对候选动作块排序；执行时保留被选中的触觉预测作为参考，预测与观测的持续偏差触发纠正性重规划。

## 实验设置与数据

在薯片抓取、黑板擦除与 USB 插入三个接触密集任务上评估，每任务 30 次试验（主对比 360 次试验），比较 DreamZero、反应式触觉、任务进度排序等基线，报告接触 F1、3D 位移 L2、滑移 AUPRC 与真机成功率。

## 结果、限制与结论

论文报告：平均接触 F1 为 0.921；相同训练预算下，定向层级相对纯形变预测器降低 3D 位移 L2 误差 17.6%，相对纯滑移预测器提升滑移 AUPRC 60.4%；触觉预测引导的候选选择把三个任务平均真机成功率从 31.1% 明显提升，带执行期校验的完整系统达到 72.2%。限制在于任务集仍以受控接触操作为主，触觉传感器类型与层级设计绑定较紧，开放场景泛化未验证。

## 来源链接

- 论文：<https://arxiv.org/abs/2608.19574>
- Hugging Face：<https://huggingface.co/papers/2608.19574>
