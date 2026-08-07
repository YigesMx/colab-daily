---
candidateId: "arxiv--2608.00793"
category: "Paper"
date: "2026-08-05"
rank: 6
title: "DynamicWAM: Dual-Path Motion Conditioning for World-Action Models in Dynamic Manipulation"
authors:
  - "Yunfan Lou"
  - "Hewen Gao"
  - "Xiyu Zhu"
  - "Zhuoran Qiao"
  - "Xuan Han"
  - "Yifan Yang"
  - "Yifan Ye"
  - "Boxian Yao"
  - "Zhibo Pang"
summary: "DynamicWAM 为动态目标操作结合历史光流和运动学 token，并以异步动作块执行降低实时控制中的感知-执行滞后。"
keywords:
  - "世界动作模型"
  - "动态操作"
  - "动作分块"
score: 79
sources:
  - name: "arXiv PDF"
    url: https://arxiv.org/pdf/2608.00793v1
  - name: "arXiv abstract"
    url: https://arxiv.org/abs/2608.00793v1
previewImage: "/daily/2026-08-05/assets/arxiv--2608.00793/preview.png"
---

## 核心内容

DynamicWAM 的核心判断是同一当前画面可能对应相反的目标运动，因此只看当前帧的世界动作模型无法决定正确接触时机。它将运动线索分成空间结构和量纲时间两条路径，分别服务未来视觉预测与动作生成。

## 关键技术与数据

历史路径对四段间隔计算经前后向一致性检查的 Farneback 光流，并把渲染光流帧与当前观测送入冻结视频 VAE；另一条路径为每间隔构造 12 维位移、时长、速度与加速度描述符，投影成动作专家 token。两流在世界动作注意力中交互。视频专家由 Wan2.2-TI2V-5B 蒸馏，动作块为 16 个关节位置；实机使用 Real-Time Chunking，在当前块执行期间生成下一个块。

## 结果与结论

作者在 DOMINO Level 1 上报告 38.2% success 和 53.2 manipulation score，高于表中最强基线 InternVLA-A1.5 的 29.3% 和 42.5。消融显示无 flow/motion 为 22.7%，仅 history-flow 为 27.2%，仅运动学 token 为 30.5%，两者合用为 38.2%。论文还报告 12 项实机动态任务平均 46.7%，但完整实机分项、运动估计失败和极端速度下的可靠性仍是重要不确定性；DOMINO 中模型的单次查询延迟为 173.7 ms，也意味着系统对异步执行实现有依赖。

## 来源链接

- arXiv PDF（本次精读原文）：https://arxiv.org/pdf/2608.00793v1
- arXiv 摘要页：https://arxiv.org/abs/2608.00793v1
