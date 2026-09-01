---
candidateId: "url--https%3A%2F%2Faiera.com.cn%2F2026%2F09%2F01%2Fother%2Fadmin%2F111584%2F%25e5%2588%259a%25e5%2588%259a%25ef%25bc%258c%25e5%2585%25a8%25e6%2596%25b0%25e5%259b%25bd%25e4%25ba%25a7lpu%25e6%258e%25a8%25e7%2590%2586%25e8%258a%25af%25e7%2589%2587%25e9%25a6%2596%25e7%25a7%2580%25ef%25bc%2581%2F"
date: "2026-09-02"
category: News
title: '寒序科技发布国产MRAM推理计算架构uHBM与uLPU：权重驻留片内计算，In-Die带宽设计值24 TB/s'
authors: ["aiera.com.cn"]
summary: '据新智元报道，国内MRAM计算公司寒序科技正式公布uHBM与uLPU推理计算架构：在同一颗Compute-Memory Die内集成Persistent MRAM与矩阵向量计算，让模型权重长期驻留、Decode阶段不再逐Token跨存储接口搬运，首代架构In-Die读带宽设计值为24 TB/s。产品路线从单Die延伸到2U Tray与Rack级推理系统，公司同时宣布面向全球扩招核心研发人才。'
keywords:
  - 算力与基础设施
  - AI 产业与应用
sources:
  - {"name": "aiera.com.cn", "url": "https://aiera.com.cn/2026/09/01/other/admin/111584/%e5%88%9a%e5%88%9a%ef%bc%8c%e5%85%a8%e6%96%b0%e5%9b%bd%e4%ba%a7lpu%e6%8e%a8%e7%90%86%e8%8a%af%e7%89%87%e9%a6%96%e7%a7%80%ef%bc%81/"}
previewImage: null
schemaVersion: 3
ratingTrack: "news"
groupRank: 4
groupScore: 73
scoreScale: "news-v3"
emphasis: false
---
## 事件概述

9 月 1 日，新智元报道，寒序科技正式公布 uHBM® 与 uLPU™ 推理计算架构。公司成立于 2023 年 8 月，自称国内首家 MRAM 计算公司，此次是两套架构三年来的首次完整亮相。其核心主张针对大模型 Decode 阶段的权重搬运瓶颈：每生成一个 Token 都要反复读取巨量模型权重，对 FFN/GEMV 这类 memory-bound 负载，真正限制推理速度的往往不是乘法器数量，而是权重必须一次次穿过存储接口抵达计算单元。报道以一颗 FP4 权重只有 4 bit 作比：单次搬运微不足道，但当几十亿颗权重为每个 Token 一遍遍移动时，最终变成带宽、功耗、延迟和散热，变成一整排服务器与一张越来越大的电费账单。寒序的答案是把 Persistent MRAM 与矩阵向量计算集成在同一颗 Compute-Memory Die 内，让权重"住在计算发生的地方"，公司称之为 Weight-Resident Compute，并概括为"重新发明 HBM"。报道还指出，过去十年行业从 DDR 走到 HBM3E、从 PCIe 走到 NVLink，一直是在把存储与计算之间的路修得更宽，寒序换了一个问法：如果权重根本不用反复上路呢。

## 已确认事实与证据

- 据报道，uHBM® 将 Persistent MRAM 与矩阵向量计算集成在同一颗 Compute-Memory Die 内：模型权重完成加载后长期驻留，每轮 Decode 只让激活向量流入，在 Die 内完成权重读取、矩阵向量乘与局部归约。报道强调，uHBM® 是寒序对 Compute-Memory 产品架构的命名，不对应 JEDEC HBM 的新一代 DRAM 标准。首代架构给出的 In-Die Read Bandwidth 设计值为 24 TB/s；报道特别说明该数字描述 Die 内权重读取能力，与行业常见的存储 Stack 与 GPU 间外部接口带宽不是同一测试口径，不能直接写成性能倍数，且属架构设计值、仍待硅片实测。
- 产品路线方面，报道给出 uHBM® → uLPU™ → uLPU™-Tray → uLPU™-Rack 的展开：端侧 uLPU™ Edge 将四颗 uHBM® 与 NPU 集成，NPU 负责 Prefill、Attention、KV Cache、动态算子与系统控制，高带宽敏感的 FFN/GEMV 留在 uHBM® 内执行，报道强调它不是用存内计算替代一切，而是把最需要带宽的部分放回权重身边；云端 uLPU™ Cloud 将四颗 uHBM® 与 uIO Die 组合，通过 UCIe 完成 Scale-Up，并面向 112G/224G SerDes 构建 Scale-Out 互联；按当前规划 16 个 uLPU™ 组成一个 2U Tray，多个 Tray 组成 Rack 级推理系统。
- 具身智能方面，报道称寒序正瞄准 Qwen-VLA 一类具身模型 >2,000 Tokens/s 的工程目标。量级参照是 NVIDIA 公布的 Jetson AGX Thor 单并发测试中 Qwen2.5-VL 3B 为 71.7 Tokens/s；报道明确两者并非同模型、同精度测试，该目标是面向 4B 多模态主干 Decode 的工程目标，不等同于完整 Qwen-VLA 动作解码或机器人控制频率。
- 背景与验证方面，报道将寒序路线与 Hot Chips 2026 上的两条路线并列：三星公布 LPDDR5X-PIM 把计算进一步推入 DRAM，NVIDIA 展示 Groq 3 LPX 与 Vera Rubin 的异构推理路径（GPU 处理 Attention 与 KV Cache、LPX 将权重保留在片上 SRAM 执行 FFN）。寒序此前完成高带宽推理验证芯片 SpinPU-ED01 的流片、回片与第三方检测，样片集成 120 个 MRAM Bank，实测片上访存带宽密度 0.105 TB/(mm²·s)，并完成端到端模型推理与连续 24 小时稳定运行；2026 年 3 月提交两项高带宽推理发明专利申请，6 月陆续公开。

## 影响与后续观察

报道认为，三星走 DRAM-PIM、Groq 走 SRAM LPU、寒序走 Persistent MRAM，三条器件与系统形态完全不同的路线都在追问同一件事：为什么每生成一个 Token，权重都要重新搬一次。若 Weight-Resident Compute 路线成立，机器人等 Physical AI 场景中"延迟就是动作本身"的约束有望从几十 Tokens/s 推到新的数量级。以下事项仍待观察：首代完整工程产品目前处于流片前收敛阶段，工艺、容量、功耗、完整带宽与模型性能均需硅片回答；24 TB/s 为设计值而非实测；MRAM 计算存储的良率、成本与软件栈成熟度未见第三方信息；报道来自公司口径的架构发布，无独立评测。公司同步启动全球核心研发招募，覆盖 SoC 架构、AI 编译器与 Runtime、UCIe/SerDes 互联、先进封装与 Rack 级系统等方向，支持北京、上海、深圳、横琴多地协同。

## 来源链接

- 新智元报道：https://aiera.com.cn/2026/09/01/other/admin/111584/%e5%88%9a%e5%88%9a%ef%bc%8c%e5%85%a8%e6%96%b0%e5%9b%bd%e4%ba%a7lpu%e6%8e%a8%e7%90%86%e8%8a%af%e7%89%87%e9%a6%96%e7%a7%80%ef%bc%81/
