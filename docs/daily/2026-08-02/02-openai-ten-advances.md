---
candidateId: "url--openai-ten-advances"
date: "2026-08-02"
rank: 2
title: "OpenAI 披露 Astra 生成十项数学与理论计算机科学结果"
authors: ["OpenAI"]
summary: "OpenAI 披露内部 Astra 模型为十个长期开放的数学与理论计算机科学问题生成论证，随后由人类借助模型整理手稿，并为每项结果发布 Lean 形式化证书；这是 AI 参与开放问题研究和可机器检查验证的重要通用观察项。"
keywords: ["AI for Science", "数学推理", "Lean", "形式化验证", "Astra"]
score: 81
sources:
  - name: "OpenAI official publication"
    url: "https://openai.com/index/ten-advances-in-mathematics"
  - name: "Lean certificates"
    url: "https://github.com/openai/ten-proofs"
previewImage: null
---

## 核心内容

OpenAI 公布十项数学与理论计算机科学结果，覆盖高维球堆积、编码理论、群论、算术电路复杂度、量子复杂度、格密码和极值组合等方向。官方称内部 Astra 模型生成论证，人类借助同一模型整理手稿，随后模型为每项结果生成 Lean 证书。

这项发布没有直接具身连接，因此归为通用 AI 观察项。其价值在于把模型能力主张从普通基准扩展到长期开放问题，并提供论文、推理讲解和机器可检查形式化，而不只是给出最终答案。

## 关键技术与数据

公开仓库按十项结果提供独立 Lean 4 文件，使用 Lean 4.32.0、mathlib 和 Lake，并给出构建全部形式化与 Comparator 独立检查的说明。官方估算发现这些解答所需 token 按 Sol API 价格约为 2,000 美元。本次试运行确认了官方完整发布与证书仓库结构，但未本地重建全部 Lean 证明。

## 结果与结论

若论文与形式化经数学共同体复核成立，这批结果将是 AI 参与原创研究的重要信号。保守解读仍应区分官方能力主张、公开产物存在和全部结论获得独立确认这三个层次，不能因证书已发布就宣称本次试运行验证了所有数学结果。

## 来源链接

- https://openai.com/index/ten-advances-in-mathematics
- https://cdn.openai.com/pdf/ten-proofs-oai.pdf
- https://cdn.openai.com/pdf/reasoning-walkthroughs.pdf
- https://github.com/openai/ten-proofs
