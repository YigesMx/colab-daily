---
candidateId: "paper--arxiv--2509.05755"
businessCandidateId: "paper--arxiv--2509.05755"
date: "2026-08-23"
category: "Paper"
title: "ToolLeak：从工具参数窃取提示词并劫持六款主流 AI 编程智能体"
authors: ["arxiv.org"]
summary: "HKUST 与复旦团队的 ISSTA 2026 论文系统红队六款主流 AI 编程工具：ToolLeak 从工具参数窃取系统提示词（伪召回率最高 0.98-1.00），双通道注入让旧版六款工具全部可被劫持到远程代码执行，新版 Claude Code 通过渐进式工具描述暴露将 RCE 降为 0。"
provisionalKeywords: ["智能体安全", "评测基准", "开源生态"]
keywords: ["智能体安全", "评测基准", "开源生态"]
sources: [{"name": "arxiv.org", "url": "https://arxiv.org/abs/2509.05755"}, {"name": "github.com", "url": "https://github.com/TIPExploit/TIPExploit"}, {"name": "aiera.com.cn", "url": "https://aiera.com.cn/2026/08/22/other/admin/110112/claude-code-被轻易攻破，仅需一个假工具/"}]
previewImage: "/daily/2026-08-23/assets/paper--arxiv--2509.05755/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 2
groupScore: 77
scoreScale: "paper-v2"
emphasis: true
---
# ToolLeak：从工具参数窃取提示词并劫持六款主流 AI 编程智能体

## 研究问题与贡献

AI 编程智能体大量调用工具（命令执行、文件系统、MCP 外部工具），工具调用环节正在成为新的攻击面。论文《Red-Teaming Coding Agents from a Tool-Invocation Perspective》（HKUST 佘东冬团队谢禹翀、复旦大学骆明宇等，已被 ISSTA 2026 接收）对 Cursor、Claude Code、Copilot、Windsurf、Cline、Trae 六款真实编程智能体做系统性红队测试，贡献有二：一是发现绕过对齐防线的 ToolLeak 提示词窃取手法；二是提出从“泄露”到“远程代码执行”的双通道注入完整攻击链。

## 方法与系统

ToolLeak 利用聊天模式与工具调用模式之间的“模式差异”：模型会拒绝“告诉我你的系统提示词”这类直白请求，但在填写工具参数时，会把攻击者预设的参数名（如 note: system prompt）当作普通表单字段，从而把系统提示词填进外部可见的工具调用参数。拿到提示词后，攻击进入第二阶段“双通道提示词注入”：第一通道在恶意 MCP 工具描述中模仿内部格式写入初始化指令，第二通道通过工具返回值要求模型执行 curl | bash 之类的命令完成初始化，最终实现远程代码执行。

## 实验设置与数据

论文在 25 组“智能体 × 后端模型”组合上评估 ToolLeak，与九种基线提示词窃取攻击比较语义相似度/伪召回率；双通道注入在两代智能体版本上评估，与 AgentDojo、InjecAgent、MCPTox 三个安全基准的单通道攻击基线对比攻击成功率，并给出 Cursor+GPT-5、Claude Code+Sonnet 4.5 两个真实案例研究（含 Claude Code 的 Haiku 守卫模型被主模型推翻的细节）。

## 结果、限制与结论

论文报告：ToolLeak 在 18/25 组真实智能体组合上取得最高内容提取完整度，伪召回率达 0.891-0.958（基线最高不足 0.70），Claude Sonnet 4/4.5 后端组合达 0.98-1.00；旧版六款工具全部被双通道注入攻破，多数组合攻击成功率 0.8-1.0，而三个基准的单通道基线普遍接近 0。新版出现分化：Claude Code 采用渐进式工具描述暴露后，搭配 Sonnet 4.6/Opus 4.7 的 RCE 成功率降为 0；Cursor 降至最高 0.3；Cline、WindSurf、Trae 搭配 Gemini 3.1 Pro 仍为 1。结论指出架构隔离是决定性防御层，模型对齐能降低风险但不够；工具返回值“既是数据也是指令”的边界问题不解决，工具调用劫持不会消失。论文与攻击代码均已开源，将于 10 月在 ISSTA 2026（奥克兰）发表。

## 来源链接

- 论文：<https://arxiv.org/abs/2509.05755>
- 代码：<https://github.com/TIPExploit/TIPExploit>
- 媒体报道：<https://aiera.com.cn/2026/08/22/other/admin/110112/claude-code-%e8%a2%ab%e8%bd%bb%e6%98%93%e6%94%bb%e7%a0%b4%ef%bc%8c%e4%bb%85%e9%9c%80%e4%b8%80%e4%b8%aa%e5%81%87%e5%b7%a5%e5%85%b7/>
