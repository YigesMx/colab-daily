---
candidateId: "arxiv--2608.13049"
date: "2026-08-15"
category: "Paper"
title: "H2R-Bench: Benchmarking Human-to-Robot Manipulation Video Generation in World Models"
authors:
  - "Dingyi Rong 等"
summary: "H2R-Bench 把自我中心人类操作视频转换到指定机器人本体，用目标、动作、功能接触、本体正确性和视频质量五维评估跨本体生成能力。"
provisionalKeywords:
  - "跨本体迁移"
  - "操作视频生成"
  - "功能接触"
  - "具身评测"
  - "世界模型"
keywords:
  - "具身评测"
  - "机器人操作"
  - "视觉世界模型"
sources:
  - name: "Hugging Face"
    url: "https://huggingface.co/papers/2608.13049"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.13049"
  - name: "PDF"
    url: "https://arxiv.org/pdf/2608.13049"
  - name: "TeX source"
    url: "https://export.arxiv.org/e-print/2608.13049"
previewImage: "/daily/2026-08-15/assets/arxiv--2608.13049/preview.png"
schemaVersion: 2
ratingTrack: "paper"
groupRank: 2
groupScore: 91
scoreScale: "paper-v2"
---

# H2R-Bench: Benchmarking Human-to-Robot Manipulation Video Generation in World Models

> H2R-Bench 把自我中心人类操作视频转换到指定机器人本体，用目标、动作、功能接触、本体正确性和视频质量五维评估跨本体生成能力。

## 研究问题与贡献

机器人示教数据昂贵且难以扩展，而自我中心人类操作视频包含丰富的任务目标、动作事件、物体响应和功能接触。论文关注如何评估视频世界模型能否把这类证据迁移到平行夹爪或灵巧手机器人本体。H2R-Bench 的贡献是定义源条件下的 human-to-robot 视频生成任务，构造 240 个转移案例，并提出以功能接触和本体正确性为核心的 H2RCore 指标。

## 方法与系统

每个实例由人类示范视频、目标本体约束和生成提示组成；模型输出后，三个 MLLM 评审分别检查目标状态完成、动作事件完成、功能接触转移和本体正确性，另有任务无关视频质量指标。H2RCore 按 0.15/0.15/0.30/0.30/0.10 加权五项，使接触与本体占 60%，防止只生成漂亮但错误的人类或错误机器人视频获得高分。

## 实验设置与数据

基准从 EgoDex test split 选出 120 条人类操作视频，覆盖刚性物体搬运/重排、机构 actuation、插入/附着、可变形物体配置、散料转移/混合、表面或材料变化六族，每条分别配平行夹爪与灵巧手，形成 240 例。论文评估 Seedance 2.0、Wan2.7、Kling-V3、Veo 3.1、Grok Imagine Video、Wan2.2、LTX-2.3、HunyuanVideo、SkyReels、LongCat 和 Mitty 等 11 个模型，并使用 Gemini 3.5 Flash、Qwen3.7-Plus 和 GPT-5.4 三评审。

## 结果、限制与结论

Seedance 2.0 在平行夹爪和灵巧手上分别取得 77.3 和 84.6 H2RCore，排名第一；Wan2.7 为 76.5/83.1，Kling-V3 为 74.5/81.7。Veo 3.1 虽有最高平行夹爪目标完成 0.725，但本体正确性仅 0.100/0.227；HunyuanVideo 视频质量最高，接触仅约 0.185 且本体近零。自动转移分数与人类评分的 aggregate Pearson 相关为 0.930。结论是当前模型在接触、本体一致性和任务执行上仍明显不足；评测依赖 MLLM 评审和原生接口，模型侧采样差异需在解释排名时保留边界。

## 来源链接

- [Hugging Face](https://huggingface.co/papers/2608.13049)
- [arXiv](https://arxiv.org/abs/2608.13049)
- [PDF](https://arxiv.org/pdf/2608.13049)
- [TeX source](https://export.arxiv.org/e-print/2608.13049)

