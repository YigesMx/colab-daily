---
candidateId: "arxiv--2608.06088"
category: "Paper"
date: "2026-08-08"
rank: 8
title: "IcFuzz: Fuzzing Isaac Sim with Semantic Stage Guidance and Multi-level Mutation"
authors:
  - "Zhixiang Chen"
  - "Zhuangbin Chen"
  - "Ruoxi Jia"
  - "Zeqin Liao"
  - "Wei Li"
  - "Jinyang Liu"
  - "Zibin Zheng"
summary: "IcFuzz 面向 Isaac Sim 的 standalone Python 脚本设计模糊测试流程：先用 LLM 将脚本分成语义阶段，再按阶段约束对象选择，以保持上下文有效性；随后在对象、操作和参数三个层次变异，并用 UCB 多臂老虎机按覆盖增长和崩溃反馈调度算子。三轮 12 小时实验中，默认 GPT-5-mini 配置平均覆盖 20,771 行、发现 3.7 个独立崩溃，长期活动报告 11 个 bug。"
keywords:
  - "机器人仿真模糊测试"
  - "空间场景建模与路由"
score: 88.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.06088"
previewImage: "/daily/2026-08-08/assets/arxiv--2608.06088/preview.png"
---

## 核心内容

Isaac Sim 是具身 AI 的重要机器人仿真基础设施，但其对象语义依赖执行上下文、控制接口层次复杂，随机输入很容易在浅层就被拒绝，难以触达深层状态。IcFuzz 将完整 standalone Python 程序作为测试输入，而不是只变异平坦字节或少数手工指定函数。它的中心观察是典型仿真脚本具有从启动、场景设置到交互、导出和关闭的生命周期结构；把这类结构显式化，可以同时提高输入有效性和变异覆盖面。

系统先建立有效 seed 池并用 LLM 做语义阶段分割，再根据阶段允许的对象类型选择新增或替换对象。生成候选变异后，规则分析和 LLM 可行性分析先过滤不可能执行的结果；可执行脚本进入 Isaac Sim，覆盖、有效性和崩溃反馈回到 UCB 算子选择器。当前 oracle 聚焦执行崩溃，因此不能覆盖不崩溃的传感器数值错误或物理约束违规。

## 关键技术与数据

- 语义约束：五个主阶段为 Simulator Startup、Scene Setup、Interacting、Export、Simulator Shutdown，Scene Setup 还细分创建/设置场景、添加对象、物理属性、高层对象管理和传感器。作者从官方脚本与参考架构抽象阶段，并用 GPT-5-mini 等 LLM 对 seed 做分割（`section/03-methodology.tex`，约 81-147 行）。
- 对象选择：文档中的 object type 映射到可添加/替换阶段，例如 Materials 用于物理属性阶段，Robots、Controllers、Grippers 等用于高层管理。三位作者独立标注映射，遇到歧义执行最小脚本并讨论解决（`section/03-methodology.tex`，约 245-285 行）。
- 多级变异：对象层有 addition、replacement、deletion；操作层对方法调用增删改；参数层直接对 AST 做默认参数删除、置空或数值/布尔替换。对象和操作层用程序分析与 LLM 生成上下文一致代码，参数层不使用 LLM（`section/03-methodology.tex`，约 335-452 行）。
- 反馈和数据：UCB 奖励为覆盖增长指示量乘 `w_cov` 加崩溃指示量乘 `w_crash`；默认权重为 1 和 5。初始 seed 为 116 个成功独立运行的官方脚本，覆盖 20 个包、8 个功能类别、9 个机器人平台和 6 种传感器模态（`section/03-methodology.tex`，约 43-67、541-581 行）。实验使用 Windows 10、i5-13400F、32 GB RAM、RTX 3060，覆盖 Isaac Sim 5.0.0/5.1.0（`section/04-evaluation.tex`，约 18-46 行）。

## 结果与结论

三轮独立 12 小时运行中，默认 GPT-5-mini 的 IcFuzz 平均发现 7 个总崩溃、3.7 个独立崩溃，覆盖 20,771 行；Atheris 为 10,136 行且 0 个崩溃，适配后的 GzFuzz 为 10,940.7 行且 0 个崩溃。论文称 IcFuzz 覆盖约为 Atheris 的 205%、GzFuzz 的 190%，差异具有统计显著性。不同 LLM 的覆盖范围为 18,903.3-20,771 行，独立崩溃为 2.3-4.3 个。

长期约四个月活动中，IcFuzz 报告 11 个 bug，其中 7 个已由开发者确认、5 个已修复，2 个等待回应，2 个在开发分支中已先行修复而被视为 stale。消融显示上下文感知对象选择提高独特类/替换对覆盖，三种变异层共同带来最高覆盖 16,532 行，UCB 相对随机算子选择增加 1,200.7 行覆盖。外部效度仍有限：阶段不是 Isaac Sim 所有工作流的穷尽描述，迁移到其他仿真器还需要重建 seed、阶段映射、文档抓取、提示规则和执行 harness。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.06088)
- [arXiv TeX 源码](https://arxiv.org/e-print/2608.06088)
