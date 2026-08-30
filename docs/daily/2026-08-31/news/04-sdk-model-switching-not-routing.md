---
candidateId: "url--https%3A%2F%2Fpub.towardsai.net%2Fswitching-ai-models-in-production-isnt-routing-only-3-parameters-are-spelled-the-same-01863d5848be"
date: "2026-08-31"
category: News
title: "Towards AI 实测四大官方 SDK：仅 3 个请求字段拼写一致，生产环境切换 AI 模型并非“改一行配置”"
authors: ["pub.towardsai.net"]
summary: "2026 年 8 月 30 日，Towards AI 的 Decoding AI 专栏发布可复现测量：解析 openai 7.5.0、@anthropic-ai/sdk 0.118.0、@google/genai 2.17.1、@mistralai/mistralai 2.6.3 四个官方 SDK 的请求声明，88 个顶层字段中仅 model、temperature、tools 三个拼写完全一致，归并同义词后也仅 13/36（36.1%）个能力为四家共有。文章据此论证生产环境切换模型不是路由问题，网关无法保留供应商特有参数行为。文章同时转述 Stripe 超 70 亿美元收购 OpenRouter 的时间线（8 月 16-19 日，属本周期窗口之前的既有背景）。四个 SDK 版本已经官方 npm registry 元数据独立核验。"
keywords: ["AI 基础设施", "开发者工具"]
sources:
  - {"name":"pub.towardsai.net","url":"https://pub.towardsai.net/switching-ai-models-in-production-isnt-routing-only-3-parameters-are-spelled-the-same-01863d5848be"}
previewImage: "/daily/2026-08-31/assets/url--https_3a_2f_2fpub.towardsai.net_2fswitching-ai-models-in-production-isnt-routing-only-3-parameters-are-spelled-the-same-01863d5848be/preview.png"
schemaVersion: 3
ratingTrack: "news"
groupRank: 4
groupScore: 71
scoreScale: "news-v3"
---
# Towards AI 实测四大官方 SDK：仅 3 个请求字段拼写一致，生产环境切换 AI 模型并非“改一行配置”

## 事件概述

2026 年 8 月 30 日（UTC），技术媒体 Towards AI 发表了其 "Decoding AI" 专栏的技术测量文章《Switching AI Models in Production Isn't Routing — Only 3 Parameters Are Spelled the Same》。文章称，团队于 2026 年 8 月 19 日从 npm registry 拉取当时最新发布的四家主要模型供应商官方 SDK——openai 7.5.0、@anthropic-ai/sdk 0.118.0、@google/genai 2.17.1、@mistralai/mistralai 2.6.3——解析各自"生成响应"请求类型的顶层字段，对"换个模型只需改路由配置"这一行业常见说法做了可复现的量化检验。

文章的核心结论是：生产环境中切换 AI 模型不是一个路由问题，网关（gateway）无法解决它。作者测得四个 SDK 合计暴露 88 个不同的顶层请求字段名，手工归并同义词后对应 36 个规范能力，其中仅 13 个（约 36.1%）在四家供应商中全部存在；88 个字段名中拼写完全一致的只有 3 个：model、temperature、tools。

文章同时把这一测量放在行业背景中叙述：2026 年 8 月 16 日 Bloomberg 报道 Stripe 已敲定以超过 70 亿美元收购 AI 网关 OpenRouter，Stripe 于 8 月 19 日公开确认该协议。需要说明的是，该并购报道与确认均发生在本发布周期窗口之前，属于文章引用的既有背景，不是本期新发生的事件。

## 已确认事实与证据

以下事实来自 Towards AI 官方 RSS feed 保存的文章全文，并以官方 npm registry 元数据独立核验了文章所称的四个 SDK 版本确实存在：

- 发布方称，2026 年 8 月 19 日晚从 npm registry 获取 openai@7.5.0、@anthropic-ai/sdk@0.118.0、@google/genai@2.17.1、@mistralai/mistralai@2.6.3，解析各自主请求类型（ChatCompletionCreateParamsBase、MessageCreateParamsBase、GenerateContentParameters 及 GenerateContentConfig、ChatCompletionRequest）的 TypeScript 声明，只统计顶层字段。经 npm registry 元数据核对，这四个包及对应版本号均真实存在。
- 发布方报告的原始计数：openai 7.5.0 有 37 个顶层字段、归并后 30 个能力、4 个独有；@anthropic-ai/sdk 0.118.0 有 19 个字段、19 个能力、0 个独有；@google/genai 2.17.1 有 37 个字段、27 个能力、2 个独有；@mistralai/mistralai 2.6.3 有 23 个字段、22 个能力、1 个独有。四家并集为 88 个不同字段名、36 个规范能力，其中 7 个能力仅存在于一家供应商。
- 发布方称，88 个字段名中拼写完全一致的只有 model、temperature、tools 三个；即便宽松地把同义词归并（如 max_tokens、max_completion_tokens、maxOutputTokens 视为同一能力），也只有 13 个能力（36.1%）为四家共有，包括模型、对话输入、temperature、top-p、最大输出 token、停止序列、工具、工具选择、结构化输出、推理控制、提示缓存、服务档位和元数据。
- 发布方称，仅比较 OpenAI 与 Anthropic 时，16 个能力可迁移、14 个仅为 OpenAI 具备、3 个仅为 Anthropic 具备；并指出这种不对称意味着"改一个模型字符串"会静默降级行为而非报错。文章还称，OpenAI 内部较新的 responses 端点（30 个顶层字段）与其 chat.completions（37 个字段）字段集也显著分化，同一厂商跨端点迁移本身已是一项工程。
- 发布方明确列出测量局限：只测量了请求面，未计入响应结构、流式事件类型、错误分类、限流头和分词器差异；只统计顶层字段，而工具定义 schema、消息内容部件、多模态载荷等嵌套结构差异更大；同义词归并是"偏宽容"的人工判断，以结构化输出为例，四家的字段名可对应但 JSON Schema 关键字支持和违规处理并不相同。作者因此把 36.1% 定性为"对可移植性最乐观的读数"，并称提取脚本随文章草稿一并提供以便复现（脚本公开位置当前材料未确认）。
- 关于背景并购，文章转述：OpenRouter 于 2026 年 5 月完成 1.13 亿美元 B 轮融资、据报道估值 13 亿美元；华尔街日报 2026 年 7 月报道收购谈判；Bloomberg 8 月 16 日报道交易敲定、金额超 70 亿美元；Stripe 8 月 19 日在其 newsroom 公开确认。以上并购信息均为文章内转述，本次抓取未独立获取 Stripe 公告原文。
- 发布方的分析判断（属其观点而非验证事实）：网关真正提供的是统一凭证与账单、故障切换和跨模型支出遥测，而非可移植性抽象；Stripe 的超 70 亿美元出价更应被读作对计量与结算能力的押注。

## 影响与后续观察

- 对在生产环境通过网关聚合多家模型的团队，文章给出的工程含义是：路由器能把调用转发成功并返回合法响应，但供应商特有参数（推理预算、缓存键、结构化输出方言、服务端会话状态等）在换模型时会被静默丢弃、取默认值或原样透传，行为变化不会以报错形式暴露。文章建议团队自行盘点代码中的供应商特有字段、在自有仓库维护意图到参数的翻译层、把需求钉在能力而非模型名上、在切换前跑带评分的 eval，并把切换成本计入 cheaper model 的收益测算。这些是发布方的建议，其效果原文未提供量化验证。
- 当前材料未确认的事项，留待后续观察：36.1% 等计数尚未见第三方独立复现，作者所称随稿提供的提取脚本的公开获取位置未确认；Stripe 收购 OpenRouter 的最终条款、监管审批与交割进展当前材料未确认，且该事件发生在本周期窗口之前，本文不作为新增并购事件报道；文章未测量的响应面、流式协议和嵌套 schema 差异的实际切换成本仍无量化数据。
- 值得跟踪的方向：主要供应商是否会在网关流量激励下进一步收敛请求接口（文章提到 tools 与 tool_choice 的趋同即为一例），以及 OpenAI responses 与 chat.completions 的分化是否代表行业接口进一步碎片化。

## 来源链接

- Towards AI 原文：https://pub.towardsai.net/switching-ai-models-in-production-isnt-routing-only-3-parameters-are-spelled-the-same-01863d5848be
- 发布方官方 RSS feed：https://pub.towardsai.net/feed
- 版本核验（官方 npm registry）：https://registry.npmjs.org/openai/7.5.0 、https://registry.npmjs.org/@anthropic-ai/sdk/0.118.0 、https://registry.npmjs.org/@google/genai/2.17.1 、https://registry.npmjs.org/@mistralai/mistralai/2.6.3
