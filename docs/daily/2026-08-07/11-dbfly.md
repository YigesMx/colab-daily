---
candidateId: "arxiv--2608.04825"
category: "Paper"
date: "2026-08-07"
rank: 11
title: "DBFly：先做空间机动推理，再预测无人机航点"
authors:
  - "Fanfu Xue"
  - "En Yu"
  - "Bohang Liu"
  - "Hongjun Wang"
  - "Yang Yang"
  - "Xindi Wang"
  - "Jiande Sun"
summary: "DBFly 在无人机 see-and-reach 中加入目标方向锚定、空间诊断和机动决策链，以隐式飞行走廊纠偏，并结合目标邻近与短期运动收敛判断停止。"
keywords:
  - "无人机导航"
  - "安全导航"
  - "三维空间理解"
score: 78.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.04825v1"
previewImage: "/daily/2026-08-07/assets/arxiv--2608.04825/preview.png"
---

## 核心内容

语言目标已经出现在初始视野时，无人机仍需把语义目标转成连续三维机动，并在接近后可靠停止。直接从视觉语言特征回归航点容易出现语义与控制错位。DBFly 让模型先输出目标方向、当前空间诊断、机动类别和停止判断，再生成机体系航点，使高层意图显式约束低层轨迹。

## 关键技术与数据

空间机动决策链依次完成 target-direction anchoring、空间诊断和 maneuver decision。初始目标方向被转换为持续的隐式飞行走廊，在线状态标记居中、左右偏离或向下接近，用作软几何参考。停止策略同时要求预测末端接近成功半径，并且短期航点位移足够小且呈收敛趋势。基础模型为 Qwen3-VL-8B，以 LoRA 训练两轮，并对非前进机动重采样以平衡类别。

## 结果与结论

在 seen、未见对象和未见场景三组测试中，DBFly 成功率分别为 62.50%、51.83%、49.13%，比最强 3DG-VLN 高 23.68、23.78、27.74 个百分点。去掉完整空间推理下降约 20-24 点，去掉决策链平均下降 33.22 点，去掉停止策略平均下降 13.45 点。论文展示两组真实飞行，但未给出与模拟同等规模的实机统计。作者明确指出方法不预测动作条件未来来检查航点可行性，后续需与世界模型和闭环可行性评估结合。

## 来源链接

- [arXiv 摘要与论文](https://arxiv.org/abs/2608.04825v1)
- [arXiv PDF](https://arxiv.org/pdf/2608.04825v1)
