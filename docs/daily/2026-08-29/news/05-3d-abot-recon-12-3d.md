---
candidateId: "url--https%3A%2F%2Fwww.qbitai.com%2F2026%2F08%2F480208.html"
businessCandidateId: "url--https%3A%2F%2Fwww.qbitai.com%2F2026%2F08%2F480208.html"
date: "2026-08-29"
category: News
title: "高德发布首个无长程依赖的万帧级流式3D重建模型ABot-Recon，以12帧重建万帧3D场景"
authors: ["qbitai.com"]
summary: "高德发布 ABot-Recon，用固定 12 帧局部上下文做万帧级流式 3D 重建；项目报告称 Oxford Spires ATE 4.35 米、RPE-R 0.12 度、KITTI-02 24.45 FPS、峰值显存 6.71GB。"
provisionalKeywords: ["具身智能", "实时推理", "开源生态"]
keywords: ["具身智能", "实时推理", "开源生态"]
sources:
  - {"name": "qbitai.com", "url": "https://www.qbitai.com/2026/08/480208.html"}
  - {"name": "amap-cvlab.github.io", "url": "https://amap-cvlab.github.io/ABot-Recon-html"}
  - {"name": "github.com", "url": "https://github.com/amap-cvlab/ABot-Recon/blob/main/ABot-Recon-Tech-Report.pdf"}
  - {"name": "modelscope.cn", "url": "https://modelscope.cn/studios/amap_cvlab/ABot-Recon/"}
previewImage: "/daily/2026-08-29/assets/url--https_3a_2f_2fwww.qbitai.com_2f2026_2f08_2f480208.html/preview.png"
schemaVersion: 3
ratingTrack: "news"
groupRank: 5
groupScore: 89
scoreScale: "news-v3"
emphasis: false
---
# 高德发布 ABot-Recon 流式 3D 重建模型

## 事件概述

阿里巴巴旗下高德于 2026 年 8 月 28 日发布 ABot-Recon，定位为无长程依赖的万帧级流式 3D 重建模型。该项目主页和技术报告称，模型只使用固定 12 帧局部上下文，通过局部位姿预测和残差优化在线组合长序列轨迹与三维场景，显存和单帧计算复杂度不随总序列长度线性膨胀。

## 已确认事实与证据

量子位报道和高德项目技术报告均确认，ABot-Recon 的实现只缓存当前帧及前 11 帧 KV 特征，预测当前相机坐标系下的点图、置信度图和相邻帧相对位姿，再链式恢复全局位姿与几何。技术报告给出 Oxford Spires 平均轨迹误差 4.35 米、相对旋转误差 0.12 度，称相较代表方法约降低 40%；KITTI-02 上吞吐为 24.45 FPS，峰值 GPU 显存约 6.71GB。

报道还称模型只需单目 RGB 视频，不依赖额外深度传感器或已知相机参数，可用于私域建图、具身智能、自动驾驶和 3D 内容生产。项目已开源推理与评测代码及权重，并在魔搭社区提供体验入口。上述“首个”“SOTA”和业务适用性判断主要来自高德供稿与项目方报告，独立复现结果尚未取得。

## 影响与后续观察

ABot-Recon 的价值在于把长序列重建的全局一致性约束转化为局部预测与在线组合，可能降低机器人、移动测绘和空间理解系统的部署成本。若单目 RGB、固定 12 帧窗口和约 6.71GB 峰值显存能在业务环境中复现，消费级 GPU 上的边缘部署门槛也会明显下降。后续应关注开放数据集之外的真实室内外场景误差、动态物体和光照变化表现、传感器退化条件，以及 12 帧窗口在强回环或大尺度场景中的边界。

## 来源链接

- [高德项目主页](https://amap-cvlab.github.io/ABot-Recon-html)
- [技术报告 PDF](https://github.com/amap-cvlab/ABot-Recon/blob/main/ABot-Recon-Tech-Report.pdf)
- [魔搭体验](https://modelscope.cn/studios/amap_cvlab/ABot-Recon/)
- [量子位报道](https://www.qbitai.com/2026/08/480208.html)