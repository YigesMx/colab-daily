---
candidateId: "arxiv--2607.28227"
date: "2026-08-01"
rank: 13
title: "Qwen-UI-Agent：从沙箱训练走向真实设备的统一 GUI 智能体"
authors:
  - "Hanzhang Zhou"
  - "Panrong Tong"
  - "Xu Zhang"
  - "Steven Hoi"
summary: "Qwen-UI-Agent 统一移动端、桌面、网页与深度搜索环境中的截图、CLI 和 API 观察及 GUI、CLI、API 动作，通过智能体驱动数据飞轮、动作级强化学习和大规模在线强化学习提升真实设备与长流程执行。"
keywords:
  - "智能体系统"
  - "视觉语言动作"
  - "视觉语言模型"
score: 76
sources:
  - name: "arXiv source"
    url: "https://arxiv.org/src/2607.28227v1"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2607.28227"
previewImage: "/daily/2026-08-01/assets/arxiv--2607.28227/preview.png"
---

## 核心内容

Qwen-UI-Agent 将移动端、桌面、网页和 DeepSearch 统一为交互式数字任务。每一步观察可同时包含截图、命令行结果和 API 返回，动作空间则覆盖点击、输入、拖拽等 GUI 操作，以及 `cli_command`、`api_call`、`ask_user` 和终止动作。一次模型决策还能输出有序动作批次，在不需要中间反馈时连续执行，减少重复观察与推理。系统因此不是单一“看屏幕点坐标”的策略，而是能在同一轨迹中交错 GUI 和 CLI，并把敏感或信息不足的操作交回用户。

能力构建采用智能体驱动的数据飞轮。强模型先分析领域知识和能力树，生成任务、环境状态和可执行 verifier，再从失败轨迹中区分模型、环境、任务与验证器问题，针对高频弱点生成下一轮数据。训练包括按领域训练并合并专家的 SFT、针对六类常见局部错误的 Action RL，以及以完整任务终态 verifier 奖励训练的 Online RL。后者使用动态课程：成功率适中的任务进入主训练池，当前过难或已掌握任务保留小预算监控，随策略能力变化重新激活。

## 关键技术与数据

报告评估 27B、35B-A3B 和 4B 三个版本，27B 是跨领域主模型。长轨迹 SFT 将每条轨迹切为 5 步窗口、步长 4，并遮蔽重叠边界步的损失，以减少重复处理视觉上下文。Action RL 为动作格式、类型、参数质量、敏感操作和重复循环构造结构化奖励。Online RL 使用面向 GUI 轨迹的 GRPO 变体，部署最多 10,000 个并发沙箱；真实手机的虚拟屏机制使同一设备并行多个会话，作者报告集群吞吐约提升 20 倍。自动合成与执行验证形成约 10,000 个 task-verifier 对。

真实设备评测 MobileWorld-Real 包含 104 个应用上的 409 个任务，覆盖 7 个日常领域。由于第三方应用内部状态难以读取，作者用 5 个独立 VLM 多数投票的 AutoJudge 判定 pass、failed 或 env_error；在 666 条专家标注轨迹上精确匹配率为 92.8%。其他评测覆盖 MobileWorld、AndroidDaily、OSWorld、WebArena、DeepSearch 和 GUI grounding。需要注意，部分 WebArena 官方答案和脚本由作者人工修正，多个通用智能体基准也采用了不同于官方默认的 judge 或运行时。

## 结果与结论

27B 模型在 50 步 MobileWorld 上报告 82.1%，增加到 100 步时为 85.5%；MobileWorld-Real 为 92.2%，AndroidDaily 为 97.5%。桌面端 OSWorld-Verified 为 79.5%，OSWorld-v2 的 partial progress 为 40.0%、二元完成率 13.9%。WebArena 为 73.6%，ScreenSpot-Pro 无缩放为 76.6%、缩放后 81.5%。OSWorld 两项测试中，CLI 动作分别占 40.7% 和 55.1%，批量动作占 39.6% 和 41.6%，说明混合动作空间在实际轨迹中被大量使用。

这些结果显示统一动作空间、真实设备基础设施和分阶段后训练能组成高性能 GUI 智能体，但不能忽略评测边界。AutoJudge 仍有约 7.2% 的不一致，真实应用会随时间改变；报告明确承认自动化能力开发仍需大量人工监督，35B-A3B 的部分训练也尚未完成。因而最稳妥的判断是该系统在广泛但由作者维护的评测环境中表现强劲，而不是已经证明无人监督、跨任意设备的可靠自治。

## 来源链接

- arXiv 原文：https://arxiv.org/abs/2607.28227
- arXiv TeX 源码：https://arxiv.org/src/2607.28227v1
- arXiv PDF：https://arxiv.org/pdf/2607.28227
- 项目主页：https://tongyi-mai.github.io/Qwen-UI-Agent/
