---
candidateId: "policy-03-a5eb9d4cf0c9"
businessCandidateId: "url--https%3A%2F%2Faipolicydaily.org%2Farchive%2Fdaily%2F2026-08-26%2F%23story-0010"
date: "2026-08-27"
category: "Policy"
title: "[Exec] GSA seeks device fingerprinting for Login.gov to screen out agentic AI and bots"
authors: ["aipolicydaily.org"]
summary: "2026年8月24日，美国总务管理局（GSA）联邦采购服务局技术转型服务在SAM.gov发布编号`47QPCA26RFI01`的信息请求（RFI），题目为“Request for Information (RFI) - Login.gov Device Fingerprinting Solution”。官方采购记录说明，GSA正在对定向设备智能和指纹识别能力及相关风险指标开展市场调研。 该RFI已经发布，但官方文本明确其为“仅通知”，不是要约邀请或建议书请求，也不代表政府承诺发布正式招标或授予合"
provisionalKeywords: ["AI政策治理", "开放生态"]
keywords: ["AI政策治理", "开放生态"]
sources: [{"name": "aipolicydaily.org", "url": "https://aipolicydaily.org/archive/daily/2026-08-26/#story-0010"}]
previewImage: "/daily/2026-08-27/assets/policy-03-a5eb9d4cf0c9/preview.png"
schemaVersion: 3
ratingTrack: "policy"
groupRank: 3
groupScore: 80
scoreScale: "policy-v3"
emphasis: false
---



# GSA 为 Login.gov 征询设备指纹方案以识别智能体和机器人

## 政策行动

2026年8月24日，美国总务管理局（GSA）联邦采购服务局技术转型服务在SAM.gov发布编号`47QPCA26RFI01`的信息请求（RFI），题目为“Request for Information (RFI) - Login.gov Device Fingerprinting Solution”。官方采购记录说明，GSA正在对定向设备智能和指纹识别能力及相关风险指标开展市场调研。

该RFI已经发布，但官方文本明确其为“仅通知”，不是要约邀请或建议书请求，也不代表政府承诺发布正式招标或授予合同。因此，程序状态是“已决定开展市场调研、无采购约束力、后续待定”。

## 适用范围与约束力

行动指向GSA运营的共享登录服务Login.gov，具体执行主体为联邦采购服务局技术转型服务。潜在响应方是能够提供设备指纹识别、风险指标和自动化流量治理能力的供应商。

RFI本身不创设采购要求、合同义务或用户政策。若未来形成采购或部署，相关能力可能影响联邦数字身份和登录流程中的自动化访问控制、风险评分与反欺诈策略。官方文件要求有意向者按附件提交能力声明，不响应不会影响未来采购参与资格。

## 关键条款

官方RFI和附件草案要求显示，GSA关注的能力包括：

- 通过浏览器、设备和网络信号识别访客，而不是仅依赖IP地址或Cookie。
- 保持跨会话的持久设备标识，支持高准确率识别、低延迟返回和低碰撞率。
- 抵抗VPN、隐身模式、设备属性伪造、住宅代理和数据中心代理等规避方式。
- 识别自动化浏览器、无头浏览器和Selenium、Puppeteer、Playwright等自动化框架。
- 区分合法授权自动化、恶意自动化和真人访问。
- 检测以ChatGPT、Claude、Gemini等大模型为基础的智能体，以及自主浏览智能体、企业自定义智能体和带AI能力的RPA工具。
- 为检测到的智能体提供类别、提供方、目的、请求来源等元数据。
- 支持按智能体类别或提供方进行允许、阻止、限速和审计日志等策略执行。

官方正文列出的威胁场景包括账户接管、合成身份欺诈、自动化机器人活动、住宅代理滥用和新兴智能体AI威胁。

## 时间线

- 2026年8月24日：SAM.gov发布RFI和两份公开PDF附件。
- 2026年9月11日7:00（太平洋时间）：RFI响应截止。
- 2026年9月26日：采购记录计划自动归档。
- 后续待定：GSA是否发布正式招标、选择技术方案或更新Login.gov隐私和可访问性控制。

## 影响与待观察事项

若能力落地，Login.gov将把智能体流量从普通用户流量中区分出来，为联邦服务建立面向AI访问的身份与风险控制先例。这会影响智能体产品接入政府服务的方式，也涉及设备指纹的准确性、误拒率、隐私通知、无障碍访问和审计边界。

需要观察四点：第一，官方是否把智能体识别结果与账户限制直接绑定；第二，供应商方案如何处理浏览器反指纹设置和辅助技术用户；第三，GSA是否发布后续招标；第四，联邦身份系统对授权智能体的认证或委托机制是否同步发展。

## 来源链接

- [SAM.gov 官方机会：47QPCA26RFI01](https://sam.gov/workspace/contract/opp/a6de63ce78ec4f28b250d3d3c8cf34de/view)
- [FedScoop：Login-dot-gov explores more device fingerprinting](https://fedscoop.com/login-dot-gov-device-fingerprinting-fraud/)
- [AI Policy Daily 原始条目](https://aipolicydaily.org/archive/daily/2026-08-26/#story-0010)
