---
candidateId: "url--https%3A%2F%2Fwww.jiqizhixin.com%2Farticles%2F2026-09-02-8"
date: "2026-09-03"
category: News
title: "李飞飞发布Atlas，世界模型进入新时代"
authors: ["jiqizhixin.com", "qbitai.com", "worldlabs.ai", "jiqizhixin.com"]
summary: "World Labs 于 9 月 1 日发布空间智能全能世界模型 Atlas：一个多模态自回归扩散 Transformer，支持像素级相机控制视频生成（最高 1 分钟 1440p）、稀疏视角 3D 重建、时空模拟与文本生图/全景，官方称相机控制与 3D 重建任务超越 SOTA。模型已面向选定合作伙伴开放早期访问，并将成为 Marble 等产品底层模型；业界关注其为机器人 Real-to-Sim 训练环境生成带来的可能性。"
keywords:
  - 世界模型
  - 视频生成
  - 具身智能
sources:
  - {"name": "jiqizhixin.com", "url": "https://www.jiqizhixin.com/articles/2026-09-02-8?source=rss"}
  - {"name": "qbitai.com", "url": "https://www.qbitai.com/2026/09/482586.html"}
  - {"name": "worldlabs.ai", "url": "https://www.worldlabs.ai/blog/atlas"}
  - {"name": "jiqizhixin.com", "url": "https://www.jiqizhixin.com/articles/2026-09-02-8"}
previewImage: "/daily/2026-09-03/assets/url--https_3a_2f_2fwww.jiqizhixin.com_2farticles_2f2026-09-02-8/preview.jpg"
schemaVersion: 3
ratingTrack: "news"
groupRank: 1
groupScore: 89
scoreScale: "news-v3"
emphasis: false
---

## 事件概述

9 月 1 日，李飞飞创办的 World Labs 在官方博客发布新一代世界模型 Atlas，称其为"面向空间智能的全能世界模型"（omni world model for spatial intelligence）。据量子位、机器之心当日报道，Atlas 是一个多模态自回归扩散 Transformer：一张或几张输入图片即可按指定相机轨迹生成视频、从稀疏视角重建可漫游的 3D 场景、对输入视频做时空模拟，并支持文本生成图片与 360° 全景。李飞飞本人称其为 World Labs 的"里程碑式"成果；英伟达机器人主管 Jim Fan 评价这是机器人领域 Real-to-Sim 的一大步。目前 Atlas 面向部分合作伙伴开放早期访问，官方称它将成为未来版本 Marble 及其他 World Labs 产品的底层模型。

## 已确认事实与证据

- 发布主体与时间：World Labs 于 2026 年 9 月 1 日在官方博客发布 Atlas；量子位（9 月 2 日 01:07 UTC）与机器之心（9 月 2 日 05:12 UTC）当日均有报道。官方博客确认 Atlas 为"omni world model for spatial intelligence"，并已进入面向选定合作伙伴的早期访问阶段。
- 四项核心能力（官方博客口径）：相机控制生成——以一张或多张参考图生成任意指定相机位姿的新视角，最高输出 1 分钟 1440p 视频；空间重建——从 1 到数十张输入图像重建真实场景，同时生成新视角图像帧与显式 3D 输出，官方称效果超过当前专门针对 3D 重建训练的最先进模型；时空模拟——根据输入视频同时建模空间和时间，支持转视角与机器人 Real-to-Sim 工作流；图像生成——按文本生成图片与 360° 全景，官方称可遵循复杂提示词并准确渲染文字。
- 架构（媒体报道官方材料）：Atlas 为多模态自回归扩散 Transformer，文本、图像、视频、相机位姿、3D 深度图等多种输入被锚定在三维空间中形成"空间上下文"，再据此生成多模态输出；扩散部分为 Rectified Flow 校正流模型。官方称模型在设计上为 Scaling 做好准备，并已看到"能力随规模扩大继续提高"的有利证据。
- 官方称在相机控制生成与稀疏视角 3D 重建两个任务的定量评估中，Atlas 分别优于 SOTA 视频模型与表现最好的专业开源 3D 重建模型；相机轨迹越复杂优势越大。上述数字均为发布方口径，具体评测设置以官方页面为准。
- 与机器人模拟的连接（媒体报道）：只需喂 Atlas 几张照片，即可生成逼真的 RGB 和深度数据，让机器人在更多不同模拟空间中训练和测试。
- 年内脉络（媒体报道）：6 月李飞飞将世界模型分为渲染器、模拟器、规划器并强调模拟器最关键；7 月 21 日 World Labs 收购机器人仿真公司 SceniX；7 月 28 日公开 Real-to-Sim-to-Real 系统。Atlas 是这条路径上的最新一环。

## 影响与后续观察

- 对具身智能的意义：官方将 Atlas 定位为可用真实照片/视频生成机器人传感器视图与可变模拟环境的模型。若"几张照片生成可训练场景"的能力达到实用水平，将直接回应机器人训练数据昂贵、难规模化的瓶颈；对 Real-to-Sim 数据管线的实际可用性值得跟踪验证。
- 待观察：早期访问的开放范围、定价与 API 形态官方尚未公布；官方基准的第三方复现与社区评测（与同类视频/世界模型对比）待发布；"全球首个多模态世界模型"为发布方自述口径；Atlas 与 Marble 产品线的整合时间表未披露。
- 后续验证建议：关注 World Labs 官方博客与合作伙伴的实际用例，重点核对生成场景的物理一致性与深度数据的量化指标（原文未报告具体数值）。

## 来源链接

- World Labs 官方博客：https://www.worldlabs.ai/blog/atlas
- 量子位报道：https://www.qbitai.com/2026/09/482586.html
- 机器之心报道：https://www.jiqizhixin.com/articles/2026-09-02-8

