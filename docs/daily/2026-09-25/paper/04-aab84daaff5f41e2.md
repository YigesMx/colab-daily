---
schemaVersion: 3
candidateId: "arxiv--2609.24308"
date: "2026-09-25"
category: "Paper"
groupRank: 4
title: "HappyWorld-Bench"
authors: ["Zhiqi Bai", "Junai Cai", "Yixin Chen", "Jingrun Du", "Tao Feng", "Wei Gong", "Siyuan Huang", "Xiao Lin", "Jiaheng Liu", "Jun Luo", "Yongzhe Lyu", "Liya Ma", "Zenan Meng", "Lin Qu", "Wenbo Su", "Jiaming Wang", "Qinghe Wang", "Shaofei Wang", "Yanghai Wang", "Zequn Wang", "Ziming Wang", "Hu Wei", "Jiangtao Wu", "Ruiqi Wu", "Jiaxin Xie", "Yuchi Xu", "Ze Xu", "Chengting Yu", "Liangyu Yuan", "Gang Zeng", "Yawen Zeng", "Xingyao Zhang", "Zizheng Zhang", "Bo Zheng", "Jiancheng Zhu", "Song-Chun Zhu"]
summary: "阿里巴巴等发布 HappyWorld-Bench，以 W1–W6 世界能力框架统一评测视频/空间/具身三赛道（1138 提示 + 300 场景 + 254 用例），论文报告 31 个系统结果显示视觉质量不等于操作可靠性：最好放置率仅 70.14%、编辑执行 73.33%，长 rollout 与干预响应仍是普遍短板。"
keywords: ["世界模型", "评测基准", "具身智能"]
sources: [{"name": "arXiv abs page", "url": "https://arxiv.org/abs/2609.24308"}, {"name": "arXiv PDF", "url": "https://arxiv.org/pdf/2609.24308"}, {"name": "Hugging Face papers page", "url": "https://huggingface.co/papers/2609.24308"}]
previewImage: "/daily/2026-09-25/assets/arxiv--2609.24308/preview.png"
---

## 研究问题与贡献

HappyWorld-Bench（arXiv:2609.24308，阿里巴巴 Token Hub 牵头、联合 BIGAI、清华、北大、南京大学等 36 位作者，HF 组织标注 alibaba，当期 HF 日榜第 3）是一个统一评测世界模型"可靠性"的大规模基准。出发点：世界模型只有在交互下保持可靠才有用——单帧好看不够，世界必须在相机移动时几何一致、交互时物理合理、长时 rollout 与回访时状态持续、控制与干预时正确响应。既有评测被模型形态割裂（视频、空间/重建、具身各自一套协议），难以共享能力框架比较。论文贡献：(1) W1–W6 六级世界能力分层框架（感知世界→交互世界→持久世界→可编程世界→可扩展共享世界→统一世界）；(2) HappyWorld-Bench 三赛道基准：1,138 条视频提示、300 个空间场景、254 个具身测试用例，共 1,692 个赛道级实例；(3) HappyWorld-Arena 人工 A/B 对比平台 + 每赛道自动指标；(4) 对 14 个视频世界模型、9 个空间系统、8 个具身候选的系统实证，揭示当前模型在交互模拟、状态持久、可编程动力学上的显著缺口。

## 方法与系统

W1–W6 每级在上级之上增加要求：W1 从多模态输入构建语义正确、空间连贯、短时序连续的世界表示；W2 模拟动作条件化的状态转移并保持局部几何/物理/因果一致；W3 在长时交互、视角变化、遮挡与回访中维持全局结构与物体同一性；W4 支持对物体/事件/行为/世界规则的显式干预且影响因果传播；W5 生成无限可扩展、多智能体共享同步的世界状态；W6 统一生成、模拟、持久状态、交互与规划。三个赛道各自实例化该框架的子集：视频赛道评测"输入之外观测的时空一致性"（控制序列指定运动方向与时间区间、自然语言指定动作/规则编辑）；空间赛道评测导出场景能否支撑物理操作（导航网格、支撑面放置、编辑、扩展保持）；具身赛道以第一人称视角评测机器人/场景/物体对动作的演化预测（原子动作、多阶段序列、动作对）。视频赛道数据管线覆盖九大应用域，rollout 从短交互到 60 秒，首帧分辨率低于 1MP 到高于 8MP。评测协议为 Arena 人工两两对比产出 Elo + 各级自动指标（如视频赛道的感知/一致性/因果/可控交互维度，空间赛道的可导航率/放置率/编辑执行率，具身赛道的动作响应断言）。

## 实验设置与数据

视频赛道评测 14 个交互世界模型（Genie 3、HappyOyster、JoyAI-Echo、Alaya-EVOKE、LingBot-World-v2、NVIDIA Cosmos3、Yume-1.5、Lyra 2.0、DreamX-World、Matrix-Game 3.0、SANA-WM、Matrix-Game 2.0、ABot-World、Open-Oasis），W1 另加 5 个视频生成基线（HappyHorse 1.1、Kling 3.0、MiniMax-H3、Seedance 2.5、Wan 3.0）；W4 干预设置仅 HappyOyster 与 LingBot-World-v2 支持。空间赛道 9 系统（WorldGen、HYWorld-1.0/2.0、Marble、GPT-6-Astra、FlashWorld、Lyra 变体等），300 场景中 266 用于质量/物理/一致性/编辑、34 用于扩展。具身赛道 8 个模型（MiniMax-H3、Cosmos 3、Seedance 2.5、Grok Imagine Video 1.5、HappyHorse 1.1、Kling 3、Sora 2、Wan 3.0），以生成视频为评测接口，指标归一化到 [0,100]。

## 结果、限制与结论

论文报告：视频赛道 HappyOyster Arena Elo 1263 最高、Genie 3 1206 次之；分级看 Genie 3 W1 最高（82.8 vs 82.4），HappyOyster W2/W3 最高（78.0/76.8），W4 仅两家可比（66.7 vs 59.3）；即使最强系统在长 rollout 与回访一致性、动作响应与物理规则遵循上仍明显退化。空间赛道最好放置率 70.14%、最好编辑执行率 73.33%（均由 HYWorld-2.0 取得），FlashWorld/Lyra 变体可渲染但几乎无可导航面积与成功放置；可导航面积大也不保证支撑面可靠（WorldGen 导航接近最高但放置远落后）。具身赛道模型难以跨多步动作保持状态，对改变的动作条件与物理规则响应不精确；论文归纳三类失败：规定接触未发生、交互无预期效果、规则改变后演化不遵从。总结论：视觉生成质量与几何完整性不等于操作可用性，世界模型距离"重复变化下可靠的状态"仍有实质差距。局限：Elo 依赖人工偏好、跨赛道指标不可直接互比、部分能力（W5/W6）当前无模型完整支持。对本组启示：为世界模型选型或自评时应把"状态持久 + 干预响应"置于首帧画质之上；该基准三赛道指标体系可直接用作内部评测参照。

## 来源链接

- 论文（arXiv abs）：https://arxiv.org/abs/2609.24308
- 论文 PDF：https://arxiv.org/pdf/2609.24308
- TeX e-print：https://arxiv.org/e-print/2609.24308
- Hugging Face 论文页：https://huggingface.co/papers/2609.24308
