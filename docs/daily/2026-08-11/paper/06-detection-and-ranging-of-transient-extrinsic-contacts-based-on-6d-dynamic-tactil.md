---
schemaVersion: 2
candidateId: "arxiv--2608.07075"
date: "2026-08-11"
title: "Detection and Ranging of Transient Extrinsic Contacts Based on 6D Dynamic Tactile Sensing"
authors:
  - "Haowen Zheng"
  - "Yinghao Wu"
  - "Fuyuan Liu"
  - "Yichen Li"
  - "Yitian Shao"
summary: "TECDAR 用嵌入夹爪指尖的单个 6D IMU 捕获接触冲击和瞬时旋转，通过微分运动学约束与扩展卡尔曼滤波定位被抓物体与环境的外部接触。论文报告 7 kHz、84 KB/s 和约 7 mm 平均定位误差，并展示了触觉闭环轨迹修正。"
keywords:
  - "动态触觉接触定位"
  - "闭环机器人控制"
category: "Paper"
ratingTrack: "paper"
groupRank: 6
groupScore: 86
scoreScale: "paper-v2"
sources:
  - name: "arXiv full HTML"
    url: "https://arxiv.org/html/2608.07075v1"
previewImage: null
---

## 研究问题与贡献

论文研究抓取物体与环境发生短暂、细微碰撞时，机器人如何在视觉被遮挡的情况下快速检测并定位接触。高分辨率视觉触觉传感器可获得空间细节，但可能体积大、数据量高，不适合毫秒级控制。TECDAR 的贡献是用一个紧凑的 6 轴 IMU 读取指尖形变的瞬态加速度和角速度，再结合机器人本体位姿估计接触点，并将定位用于约束操作和纯触觉环境映射。

## 方法与系统

传感器是嵌入 PDMS 指尖的 ST LSM6DSR 6 轴 IMU，尺寸约 2.5x3x0.8 mm，安装在 15x10x12 mm 指尖结构中。加速度通道检测碰撞 onset，陀螺仪捕获指尖扭转；机器人编码器提供低漂移 TCP 位置/速度。系统用事件触发 EKF，状态含 TCP 位置、速度和外部接触点，观测模型直接使用微分约束 v_g = omega x (p_g-p_c)，避免对角速度长时间积分造成的漂移。标定 apparent transmission coefficient 以补偿 PDMS 形变和微滑移，默认 30 N 握力时使用 eta_app=2.0。二维平面任务还把模型投影到可观测平面。

## 实验设置与数据

实验包含 2D 平面物理仿真、PLA 几何物体的受控线接触、持续运动碰撞、3D 点接触、笔/纸刀/书的家庭任务和纯触觉环境映射。受控实验每个配置做 5 次；半径测试为 2-12 cm、握力为 20/30/40 N、探测速度为 0.01/0.02/0.03 m/s。仿真向 IMU 加入 0.01 rad/s 角速度噪声和 0.5 mm TCP 位置噪声，采样率分别为 7 kHz 和 65 Hz。比较包含几何约束 SVD/GD 和微分约束优化器。完整家庭任务的总试验数和全部表格数值在当前文章正文中未完整列出，记为 not_reported。

## 结果、限制与结论

论文摘要报告平均定位误差约 7 mm、接触检测约 180 ms 内达到毫米级精度；正文进一步报告持续运动碰撞在 30 ms 时 RMSE 11 mm，受约束静止起始场景在同一时间窗口为 50 mm，稳态约 8 mm。3D 点接触十次实验的轴向误差均值+标准差为 x -4.17+/-1.01 mm、y 2.38+/-0.77 mm、z -9.77+/-2.00 mm。与几何约束方法相比，EKF 避免积分漂移并抑制微分信号噪声导致的振荡；系统还以 20 ms 控制响应周期展示了纸刀轨迹修正。

限制是刚体运动假设不适用于柔性/可变形物体，稳定接触假设会被滑移、低摩擦或碰撞反弹破坏；当探测速度方向指向旋转轴时，旋转激励不足会产生低信噪比和慢收敛。标定还在避免 gross slip 的载荷范围内进行。因此，结果支持接触丰富、刚性物体和受控触觉闭环，不应外推为对软物体或任意滑移条件的定位保证。

## 来源链接

- 原始论文全文：https://arxiv.org/abs/2608.07075v1
- 项目页：http://humitlab.github.io/TECDAR/
