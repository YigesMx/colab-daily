---
schemaVersion: 2
candidateId: "arxiv--2608.10623"
date: "2026-08-13"
category: "Paper"
ratingTrack: paper
groupRank: 8
groupScore: 89
scoreScale: paper-v2
title: "When Your State Estimator Has Lost The Plot: Detecting Estimator Failures Via Spectral Analysis"
authors:
  - "Christian Lanegger"
  - "Helen Oleynikova"
  - "Roland Siegwart"
  - "Michael Pantic"
summary: "Reliable onboard state estimation is essential for safe robotic operation, yet unmodeled disturbances, such as sensor aliasing or out-of-distribution noise, still cause estimators to degrade or fail completely. While many methods aim to improve estimator robustness, only a few provide introspective mechanisms to assess estimate quality. Existing uncertainty measures, such as covariances, rely on idealized assumptions and tend to be overconfident, and more recent data-driven approaches are typically tied to their training data distributions. We propose a sensor-agnostic introspective method that assesses estimator health by analyzing the frequency-domain power distribution of recent velocity estimates. The method is evaluated using outdoor flight data from an aerial robot running visual-inertial, LiDAR-inertial, and radar-inertial odometry. The dataset includes multiple estimator failures, enabling analysis of several frequency-domain indicators, such as signal power, spectral bandwidth"
provisionalKeywords:
  - "具身智能"
  - "世界模型"
  - "机器人学习"
keywords:
  - "数据集与基准"
  - "安全与可靠性"
  - "世界模型"

sources:
  - name: "原始来源"
    url: "https://arxiv.org/abs/2608.10623v1"
previewImage: "/daily/2026-08-13/assets/arxiv--2608.10623/preview.png"
---

# When Your State Estimator Has Lost The Plot: Detecting Estimator Failures Via Spectral Analysis

## 研究问题与贡献

Reliable onboard state estimation is essential for safe robotic operation, yet unmodeled disturbances, such as sensor aliasing or out-of-distribution noise, still cause estimators to degrade or fail completely. While many methods aim to improve estimator robustness, only a few provide introspective mechanisms to assess estimate quality. Existing uncertainty measures, such as covariances, rely on idealized assumptions and tend to be overconfident, and more recent data-driven approaches are typically tied to their training data distributions. We propose a sensor-agnostic introspective method that assesses estimator health by analyzing the frequency-domain power distribution of recent velocity estimates. The method is evaluated using outdoor flight data from an aerial robot running visual-inertial, LiDAR-inertial, and radar-inertial odometry. The dataset includes multiple estimator failures, enabling analysis of several frequency-domain indicators, such as signal power, spectral bandwidth, and entropy. We observe consistent spectral power differences between healthy and degraded estimates, allowing detection of 51%-58% of labeled failures with 60%-84% precision across three fundamentally different state estimation frameworks. Our results show that even a simple frequency-domain analysis of a state estimator's output can serve as a lightweight introspective tool to complement existing robustness techniques in real-world robotic deployments, and opens promising avenues for future investigation.

## 方法与系统

Healthy Failure Abstract—Reliable onboard state estimation is essential for safe 0.25 robotic operation, yet unmodeled disturbances, such as sensor 0.75 aliasing or out-of-distribution noise, still cause estimators to DLIO 1.25 degrade or fail completely. While many methods aim to improve estimator robustness, only a few provide introspective mecha- 1.75 nisms to assess estimate quality. Existing uncertainty measures, 2.25 Velocity bin upper limit [m/s] such as covariances, rely on idealized assumptions and tend to 0.25 be overconfident, and more recent data-driven approaches are 0.75 typically tied to their training data distributions. RIO 1.25 We propose a sensor-agnostic introspective method that as- 1.75 sesses estimator health by analyzing the frequency-domain power arXiv:2608.10623v1 [cs.RO] 11 Aug 2026 distribution of recent velocity estimates. The method is evaluated 2.25 using outdoor flight data from an aerial robot running vi- 0.25 sual–inertial, LiDAR–inertial, and radar–inertial odometry. The 0.75 dataset includes multiple estimator failures, enabling analysis RoVIO 1.25 of several frequency-domain indicators, such as signal power, 1.75 spectral bandwidth, and entropy. We observe consistent spectral 2.25 power differences between healthy and degraded estimates, al- lowing detection of 51 %–58 % of labeled failures with 60 %–84 % 0 5 10 15 20 25 30 35 40 45 50 5 10 15 20 25 30 35 40 45 50 precision across three fundamentally different state estimation Frequency [Hz] log10(PSD) frameworks. Our results show that even a simple frequency- domain analysis of a state estimator’s output can serve as a −5 −4 −3 −2 −1 0 lightweight introspective tool to complement existing robustness techniques in real-world robotic deployments, and opens promis- Fig. 1. Power spectral density (PSD) over the 0–50 Hz frequency range for ing avenues for future investigation. three different state estimators. The PSD is shown for healthy and failure- labeled data across different velocities, revealing clear differences in power I. I NTRODUCTION distribution for faulty estimates for all estimators. DLIO contains no healthy data above 2.25 m/s in the dataset, and RoVIO is limited to a maximum PSD When sitting in a stationary train that is about to depart, resolution of 15 Hz; corresponding values are crossed out. briefly observing a neighboring train begin to move can create a

## 实验设置与数据

RoVIO 1.25 of several frequency-domain indicators, such as signal power, 1.75 spectral bandwidth, and entropy. We observe consistent spectral 2.25 power differences between healthy and degraded estimates, al- lowing detection of 51 %–58 % of labeled failures with 60 %–84 % 0 5 10 15 20 25 30 35 40 45 50 5 10 15 20 25 30 35 40 45 50 precision across three fundamentally different state estimation Frequency [Hz] log10(PSD) frameworks. Our results show that even a simple frequency- domain analysis of a state estimator’s output can serve as a −5 −4 −3 −2 −1 0 lightweight introspective tool to complement existing robustness techniques in real-world robotic deployments, and opens promis- Fig. 1. Power spectral density (PSD) over the 0–50 Hz frequency range for ing avenues for future investigation. three different state estimators. The PSD is shown for healthy and failure- labeled data across different velocities, revealing clear differences in power I. I NTRODUCTION distribution for faulty estimates for all estimators. DLIO contains no healthy data above 2.25 m/s in the dataset, and RoVIO is limited to a maximum PSD When sitting in a stationary train that is about to depart, resolution of 15 Hz; corresponding values are crossed out. briefly observing a neighboring train begin to move can create a moment of confusion. Although no accelerating forces are felt, visual cues suggest motion, and the assumption of a conditions. Illumination, visual and geometric features, avail- static environment implies that one must be moving. This able free space, and GNSS visibility can change drastically disagreement between sensory inputs pushes us to further over time and across environments. No single sensing modality inspect the surroundings until the inconsistency is resolved and operates reliably across all such conditions, making multi- it becomes clear that the other train is in motion. This ability sensor state estimation essential, but also more susceptible to to reason about conflicting sensory information and reassess sensor degradation and unmodeled disturbances. the reliability of one’s perception is a form of introspection Deploying complex mobile robots outside controlled lab- that humans rely on to handle unforeseen disturbances. oratory environments therefore requires state estimators that Robotic systems, in contrast, often lack such introspective fuse heterogeneo

## 结果、限制与结论

domain analysis of a state estimator’s output can serve as a −5 −4 −3 −2 −1 0 lightweight introspective tool to complement existing robustness techniques in real-world robotic deployments, and opens promis- Fig. 1. Power spectral density (PSD) over the 0–50 Hz frequency range for ing avenues for future investigation. three different state estimators. The PSD is shown for healthy and failure- labeled data across different velocities, revealing clear differences in power I. I NTRODUCTION distribution for faulty estimates for all estimators. DLIO contains no healthy data above 2.25 m/s in the dataset, and RoVIO is limited to a maximum PSD When sitting in a stationary train that is about to depart, resolution of 15 Hz; corresponding values are crossed out. briefly observing a neighboring train begin to move can create a moment of confusion. Although no accelerating forces are felt, visual cues suggest motion, and the assumption of a conditions. Illumination, visual and geometric features, avail- static environment implies that one must be moving. This able free space, and GNSS visibility can change drastically disagreement between sensory inputs pushes us to further over time and across environments. No single sensing modality inspect the surroundings until the inconsistency is resolved and operates reliably across all such conditions, making multi- it becomes clear that the other train is in motion. This ability sensor state estimation essential, but also more susceptible to to reason about conflicting sensory information and reassess sensor degradation and unmodeled disturbances. the reliability of one’s perception is a form of introspection Deploying complex mobile robots outside controlled lab- that humans rely on to handle unforeseen disturbances. oratory environments therefore requires state estimators that Robotic systems, in contrast, often lack such introspective fuse heterogeneous sensing modalities and, more importantly, capabilities. Yet, as robots are increasingly deployed outside can handle sensor failures and measurement degeneracies. controlled environments, the ability to assess the reliability of Existing approaches mainly address robustness to Gaussian their own state estimates becomes critical. This challenge is noise or expected degeneracies, yet they often remain vulner- particularly pronounced for aerial robots, which are gradually able to

## 来源链接

- https://arxiv.org/abs/2608.10623v1
- https://arxiv.org/pdf/2608.10623v1
