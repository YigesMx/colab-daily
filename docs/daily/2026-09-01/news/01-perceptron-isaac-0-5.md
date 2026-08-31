---
candidateId: "url--https%3A%2F%2Ftheaiinsider.tech%2F2026%2F08%2F31%2Fperceptron-ai-launches-open-weight-robotics-model-called-isaac-0-5%2F"
date: "2026-09-01"
category: News
title: "Perceptron AI 发布开放权重具身基础模型 Isaac 0.5"
authors: ["github.com", "huggingface.co", "theaiinsider.tech"]
summary: "Perceptron AI 发布 36B 参数开放权重具身基础模型 Isaac 0.5，将视频理解、具身推理与机器人控制整合进同一稀疏模型。官方模型卡确认模型在超 35 个机器人系统、10 万小时机器人经验、100 万小时通用视频与 3 万亿多模态 token 上训练，权重（Hugging Face）、技术报告与微调/推理代码（GitHub）同步开放。公司报告 LIBERO 平均成功率 97.2%，并给出通用视频可将遥操作数据需求降低约 210 倍的缩放规律（均为发布方口径）。"
keywords: ["具身智能", "机器人基础模型", "视觉-语言-动作模型", "世界模型"]
sources:
  - {"name": "theaiinsider.tech", "url": "https://theaiinsider.tech/2026/08/31/perceptron-ai-launches-open-weight-robotics-model-called-isaac-0-5/"}
  - {"name": "huggingface.co", "url": "https://huggingface.co/PerceptronAI/Isaac-0.5"}
  - {"name": "github.com", "url": "https://github.com/perceptron-ai-inc/isaac"}
previewImage: "/daily/2026-09-01/assets/url--https_3a_2f_2ftheaiinsider.tech_2f2026_2f08_2f31_2fperceptron-ai-launches-open-weight-robotics-model-called-isaac-0-5_2f/preview.png"
schemaVersion: 3
ratingTrack: "news"
groupRank: 1
groupScore: 92
scoreScale: "news-v3"
---

# Perceptron AI 发布开放权重具身基础模型 Isaac 0.5

## 事件概述

Perceptron AI（华盛顿州公司）宣布发布 Isaac 0.5：一个 360 亿参数的开放权重具身基础模型，将视频理解、具身推理与机器人控制整合进同一系统。发布方为模型配套开放了权重（Hugging Face）、技术报告与微调/推理代码（GitHub），面向制造、物流、仓储、安防与移动等场景的机器人与自动化团队。

## 已确认事实与证据

以下事实由 Perceptron 官方 Hugging Face 模型卡（Isaac-0.5）与 AI Insider 全文报道交叉确认：

- 模型规模与架构：Perceptron 称 Isaac 0.5 为 36B 参数稀疏模型，基于 Qwen 系视觉-语言骨干，采用混合专家结构（每层 256 个可学习专家加空路由，每个 token 可路由 0-8 个专家）；文本、视觉、时间、机器人状态与动作历史进入同一共享序列。
- 控制接口：公司称模型同时支持离散控制（2048 个 FAST 动作 token 词表）与连续控制（专用 Flow expert 与 36 块 diffusion transformer 生成动作块），并支持在当前动作块执行期间预测下一块的实时闭环控制。
- 训练数据：官方模型卡写明 Isaac 0.5 在超过 35 个机器人系统、10 万小时机器人经验、100 万小时通用视频和 3 万亿多模态 token 上训练。
- 数据缩放规律：Perceptron 报告称，在目标动作损失 2.50 下，使用 1000 小时通用视频训练约需 5900 小时遥操作数据，而使用 100 万小时通用视频仅需约 28 小时，即遥操作需求下降约 210 倍。该数字为公司实验口径，未经第三方复现。
- 基准结果：公司报告 Isaac 在 LIBERO 机器人操作基准上平均成功率 97.2%，其对比表给出 NVIDIA GR00T N1.7 为 97.0%、π0.5 为 96.9%；单次遍历单条专家示范后，模型在三个未见任务上误差下降 7-10.5 倍（公司口径，同期对比中 π0.5 为 2.3-3.1 倍）。以上为发布方自报结果。
- 开放内容：权重发布于 Hugging Face（PerceptronAI/Isaac-0.5）；动作训练、微调与推理代码、LeRobot 集成、参考 policy server、评测代码与复现指南位于 GitHub 仓库 perceptron-ai-inc/isaac。官方模型卡注明该 checkpoint 需通过 Perceptron Isaac 仓库（兼容 commit be6507b）使用，暂不支持直接用 Transformers 或原生 LeRobot 加载。
- 公司表态：联合创始人兼 CEO Armen Aghajanyan 在公告中称“企业需要前沿性能、能快速学会新任务并适配其硬件的模型”；联合创始人兼 CTO Akshat Shrivastava 称“系统必须理解所见、判断关键所在并把决策连接到动作”。

事件时间：AI Insider 报道发布于 2026-08-31（冻结窗口内）；Perceptron 官方模型卡与权重仓库已在线可访问。

## 影响与后续观察

- 对具身智能社区而言，这是头部具身公司一次可核验的开放权重发布：36B 级模型连同训练/推理代码、评测工具与复现指南一并放出，降低了其他团队复用与对比的门槛。
- 官方给出的“通用视频换遥操作数据”缩放规律若成立，对机器人数据成本结构有直接影响；但该结论目前仅来自公司自述实验，尚需独立复现。
- LIBERO 97.2% 等数字均为发布方口径，对比对象（GR00T N1.7、π0.5 等）的评测条件是否完全一致未经第三方核验。
- 待观察：技术报告全文中的完整基准表与消融；checkpoint 对硬件/推理成本的真实要求；公司所称“与客户在制造、物流、仓储、安防、移动场景适配”的落地进展；社区复现结果。

## 来源链接

- Perceptron Isaac 0.5 官方模型卡（Hugging Face）：https://huggingface.co/PerceptronAI/Isaac-0.5
- Perceptron Isaac 官方代码仓库（GitHub）：https://github.com/perceptron-ai-inc/isaac
- AI Insider 报道：https://theaiinsider.tech/2026/08/31/perceptron-ai-launches-open-weight-robotics-model-called-isaac-0-5/
- Perceptron 官网：https://www.perceptron.ai/
