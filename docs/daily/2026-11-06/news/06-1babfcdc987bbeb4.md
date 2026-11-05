---
schemaVersion: 3
candidateId: "url--aiera.com.cn-d7af75aa275b3ee9e6e0aff1469ef233"
date: "2026-11-06"
category: "News"
groupRank: 6
title: "Anthropic未发布模型，挖出Linux系统级致命漏洞！"
authors: ["新智元"]
summary: "Anthropic在官方文章《Discovering and exploiting vulnerabilities in critical, real-world software with Claude》（10月27日）中披露：其用未发布的内部研究模型验证出五条攻击链，其中Linux内核网络栈零点击RCE（CVE-2026-98432，NVD记录CVSS 9.8）可向开启MPTCP监听的服务器发送数据包、无凭据无交互地以root执行任意命令；概念验证中泄露内核指针需48分钟、再5分钟到达shell。该UAF源于ipv4握手路径inet_opt/ireq_opt的RCU释放问题，10月15日已上游修复并回移稳定分支。Go 1.24起Linux监听套接字默认启用MPTCP扩大暴露面；Ubuntu 22.04/24.04/26.04修复内核一度仍在测试。新智元部分表述（如AI未发现漏洞）与官方原文有出入，已标注。"
keywords: ["大语言模型", "AI安全", "AI智能体"]
sources: [{"name": "Anthropic", "url": "https://www.anthropic.com/research/discovering-vulnerabilities-with-claude"}, {"name": "NVD", "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-98432"}, {"name": "oss-security", "url": "https://www.openwall.com/lists/oss-security/2026/10/30/1"}, {"name": "Atlas Security", "url": "https://atlasum.net/blog/cve-2026-98432-linux-ipv4-tcp-uaf"}, {"name": "新智元", "url": "https://aiera.com.cn/2026/11/05/other/admin/122392/anthropic%e6%9c%aa%e5%8f%91%e5%b8%83%e6%a8%a1%e5%9e%8b%ef%bc%8c%e6%8c%96%e5%87%balinux%e7%b3%bb%e7%bb%9f%e7%ba%a7%e8%87%b4%e5%91%bd%e6%bc%8f%e6%b4%9e%ef%bc%81/"}]
previewImage: "/daily/2026-11-06/assets/url--aiera.com.cn-d7af75aa275b3ee9e6e0aff1469ef233/preview.png"
---

## 事件概述

Anthropic 在官方研究栏目发表文章《Discovering and exploiting vulnerabilities in critical, real-world software with Claude》（2026 年 10 月 27 日），披露其用一款未发布的内部研究模型（Claude）在浏览器、操作系统等广泛使用的软件中验证出五条攻击链，其中第五条为 Linux 内核网络栈的零点击远程代码执行：向开启 Multipath TCP（MPTCP）监听的 Linux 服务器发送特定数据包，即可在无凭据、无用户交互的情况下以 root 权限执行任意命令。该漏洞编号 CVE-2026-98432，NVD 记录 CVSS 9.8 分（网络可达、无需特权、无需交互），已于 10 月 15 日在上游修复并回移至各维护中的稳定内核分支。新智元以《Anthropic未发布模型，挖出Linux系统级致命漏洞！》为题报道，本篇以 Anthropic 官方文章、NVD 记录与 oss-security 邮件列表为准成稿。

## 已确认事实与证据

以下事实由 Anthropic 官方文章、NVD 记录及邮件列表公告直接确认：

- Anthropic 称其过去数月用未发布的内部研究模型在部分全球使用最广的软件中寻找关键漏洞，本文分享五条攻击链细节；每个漏洞均按其协同披露政策先报告给受影响厂商（90 天修补期，再加 45 天后才公开更多细节）。
- Linux 漏洞利用细节（Anthropic 口径）：Claude 编写的利用针对存在 MPTCP 监听器的 Linux 服务器；底层是内核网络栈中竞态条件引发的释放后重用（UAF）。利用分两步：第一步远程破解 KASLR（利用竞态让内核按攻击者控制的长度字段多拷贝并回传字节，从中获得内核指针）；第二步劫持控制流（利用同一 UAF 溢出缓冲区并覆盖回调指针，内核调用回调时执行已在内核内存中预置的载荷，最终以 root 运行攻击者指定的 shell 命令）。竞态失败仅导致握手失败、系统不崩溃，攻击者可无限重试。概念验证中泄露一个内核指针需 48 分钟，再花 5 分钟到达 shell 命令执行。
- NVD 官方记录（kernel.org CNA 分配）：CVE-2026-98432，2026 年 10 月 15 日发布，CVSS 3.1 评分 9.8（AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H），问题描述为 ipv4 路径中 inet_opt 与 ireq_opt 需在 RCU 宽限期后释放——tcp_v4_syn_recv_sock 在未复制的情况下把 ireq_opt 所有权转移给子套接字，另一 CPU 并发处理重传时触发；修复提交见于 kernel.org 稳定分支。
- Go 语言影响面（golang-announce 经 oss-security 转发）：自 Go 1.24 起，Go 程序在 Linux 上默认为监听套接字启用 MPTCP；官方建议的最佳修复方式是升级到已修补内核，并指出底层缺陷并非 MPTCP 特有，无 MPTCP 监听器的系统也可能受类似攻击。
- 补丁状态（Atlas Security 11 月 5 日更新口径）：上游已于 10 月 15 日修复并回移（6.12.113、6.18.56、7.2.10 等版本）；Debian、RHEL、AlmaLinux、SUSE 系、Oracle、Amazon Linux 及 Ubuntu 26.10 已有修复内核，Ubuntu 22.04/24.04/26.04 的修复内核彼时仍在测试中。

以下为新智元报道口径、与一手材料存在出入或未经确认的内容：报道称「AI 并没有发现漏洞，只是把已知 UAF 转成利用链」——Anthropic 原文称其让 Claude 识别高风险问题时「发现了这一可远程利用的漏洞」，两种表述存在差异（以官方原文为准）；「漏洞自 Linux 4.4 起存在」「全球数百万至上千万台服务器裸奔」「已观察到 MPTCP 端口探测流量上升」等说法出自报道推测或转述，当前材料未确认。

## 影响与后续观察

- 「公开漏洞到可用利用」的时间窗口被急剧压缩：Anthropic 概念验证中从发送数据包到 root shell 约 53 分钟，且失败竞态可无限重试；报道担忧的「从数周到数小时」武器化速度虽为推断，但该演示给出了实证下界。
- 修复节奏与暴露面：上游与多数发行版已有补丁，但 Ubuntu 长期支持版本的修复内核一度仍在测试；默认开启 MPTCP 的 Go 1.24 及以后服务端程序显著扩大了潜在暴露面，运维侧需盘点 MPTCP 监听并升级内核后重启。
- 观察点一：Ubuntu 22.04/24.04/26.04 修复内核的正式发布进度，以及云厂商负载均衡器透传 IP 选项时的受影响情况（当前材料未确认各大云厂商口径）。
- 观察点二：Anthropic 所称「五条攻击链」中其余四条（含 Chrome 一步点击 RCE 等）对应漏洞的逐个披露节奏与其 90+45 天披露时钟。
- 观察点三：未发布模型驱动的漏洞研究与「负责任地 withheld 利用细节」之间的边界——Anthropic 未公开利用代码，但同类能力扩散的治理讨论将持续。

## 来源链接

- [Anthropic 官方文章：Discovering and exploiting vulnerabilities in critical, real-world software with Claude](https://www.anthropic.com/research/discovering-vulnerabilities-with-claude)
- [NVD 漏洞记录：CVE-2026-98432](https://nvd.nist.gov/vuln/detail/CVE-2026-98432)
- [oss-security：Protecting against CVE-2026-98432 when using Go programs](https://www.openwall.com/lists/oss-security/2026/10/30/1)
- [Atlas Security 技术分析](https://atlasum.net/blog/cve-2026-98432-linux-ipv4-tcp-uaf)
- [新智元报道原文](https://aiera.com.cn/2026/11/05/other/admin/122392/anthropic%e6%9c%aa%e5%8f%91%e5%b8%83%e6%a8%a1%e5%9e%8b%ef%bc%8c%e6%8c%96%e5%87%balinux%e7%b3%bb%e7%bb%9f%e7%ba%a7%e8%87%b4%e5%91%bd%e6%bc%8f%e6%b4%9e%ef%bc%81/)
