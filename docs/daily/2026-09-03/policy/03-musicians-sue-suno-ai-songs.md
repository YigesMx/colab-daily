---
candidateId: "url--https%3A%2F%2Faipolicydaily.org%2Farchive%2Fdaily%2F2026-09-02%2F%23story-0013"
date: "2026-09-03"
category: Policy
title: "Four musicians sue Suno over AI songs retrieved by artist name"
authors: ["aipolicydaily.org", "news.bloomberglaw.com", "au.rollingstone.com"]
summary: "以 Jason Isbell 为首的四位音乐人 8 月 31 日向马萨诸塞州联邦法院对 AI 音乐公司 Suno 提起拟议集体诉讼，主张其以艺人姓名作为\"检索键\"生成模仿艺人声音与风格的音乐，侵犯形象公开权，且过滤机制易于绕过。原告诉求不依赖输出与特定录音的相似性。Suno 回应称训练元数据不含艺人姓名，并将相关提示词重定向至描述性特征。案件尚待集体认证。"
keywords:
  - AI 政策与治理
  - 数据合规与隐私
sources:
  - {"name": "aipolicydaily.org", "url": "https://aipolicydaily.org/archive/daily/2026-09-02/#story-0013"}
  - {"name": "news.bloomberglaw.com", "url": "https://news.bloomberglaw.com/us-law-week/suno-ai-draws-singers-class-action-over-name-indexed-voices"}
  - {"name": "au.rollingstone.com", "url": "https://au.rollingstone.com/music/music-news/jason-isbell-suno-lawsuit-artist-identities-100519/"}
previewImage: "/daily/2026-09-03/assets/url--https_3a_2f_2faipolicydaily.org_2farchive_2fdaily_2f2026-09-02_2f_23story-0013/preview.jpg"
schemaVersion: 3
ratingTrack: "policy"
groupRank: 3
groupScore: 65
scoreScale: "policy-v3"
emphasis: false
---

## 政策行动

2026 年 8 月 31 日（周一），以 Jason Isbell 为首的四位音乐人向美国马萨诸塞州联邦地区法院提起拟议集体诉讼，控告 AI 音乐生成公司 Suno 侵犯艺人的形象公开权（right of publicity）。据 Bloomberg Law 报道，原告方主张 Suno 将"无数"歌手与音乐人的身份特征"编码"进其 AI 模型，并在未经同意的情况下以艺人姓名作为"检索键"（retrieval key），按需生成体现其标志性声音与风格的音乐，借此获取"可观的商业利益"。

本案与此前针对 AI 音乐公司的版权诉讼路径不同：原告明确表示其主张不依赖任何单个输出与特定受版权保护录音的相似性，而是主张无论录音版权归属如何，身份权属于表演者本人。诉讼请求为"追回被挪用身份的价值，并停止对其持续的商业利用"。目前该案为已递交起诉状的拟议集体诉讼，尚未获得集体认证，法院尚未作出实体裁决，不构成对 Suno 或行业的约束性结论。

## 适用范围与约束力

本案是私人提起的联邦民事诉讼，当前对 Suno 之外的主体没有约束力；若未来获得集体认证并作出判决或和解，将直接约束 Suno 及入选集体成员，并可能为"姓名作为检索键"式 AI 产品的身份权责任树立先例。

原告方主张的法律基础是形象公开权——即个人对自身姓名与身份特征商业使用的控制权，这在美国主要属于州法范畴，与联邦版权法保护的录音复制权相互独立。诉讼同时指控 Suno 的防护机制（过滤以艺人姓名为提示词的请求）易于绕过，例如使用艺人本名代替艺名、或在姓名字母间加空格。

## 关键条款

- **核心指控**：Suno 将特定音乐人的可识别属性转化为模型中的"token"，使输入艺人姓名即可生成令人联想到该艺人实际作品的声音、描述与图像，构成未经同意的身份商业利用。
- **诉状举例**：输入"Jason Isbell"生成了一首名为"Paper Bell"的美式乡村（Americana）歌曲，模仿其清澈男声与乡村腔调，Suno 将其描述为"当代美式乡村创作歌手配以指弹原声吉他"，并配以乡村场景图像；输入"Buddy Guy"生成"Stone Blues in My Shoes"；输入"Carly Simon"生成被描述为"柔软的 70 年代告白式流行"的歌曲；输入"Less Than Jake"生成" Parking Lot Anthem"并被指模仿其专辑封面风格。
- **绕过指控**：使用说唱歌手 Common 的本名 Lonnie Rashid Lynn 据称可绕过过滤；在姓名每个字母间加空格（如"m i c h a e l j a c k s o n"）据称生成了两首名为"Glovebox Moonwalk"的歌曲，描述为"1980 年代流行放克舞曲"，歌词含太空步与白手套意象。
- **原告阵容**：Jason Isbell（主唱原告）、David Lowery（Camper Van Beethoven）、创作歌手 Guy Forsyth、爵士萨克斯手 Ed Calle。
- **被告回应**：Suno 发言人 Rachel Racusen 表示公司不在训练元数据中使用艺人姓名，并将引用特定艺人的提示词重定向至描述性音乐特征；Suno CEO Mikey Shulman 此前在博客中称"我们从不允许针对特定艺人或受版权歌曲的提示词"。截至 Rolling Stone 发稿，诉状中的示例歌曲在 Suno 平台上仍可获取。

## 时间线

- 2026 年 3 月：音乐人曾以生物识别隐私为由测试对 AI 公司的诉讼路径（Bloomberg Law 案例索引）。
- 2026 年 4 月：Sony 版权诉讼驳回动议获法院支持继续审理（Bloomberg Law 案例索引背景）。
- 2026 年 8 月：Suno CEO Mikey Shulman 发表博客，重申不允许特定艺人提示词的立场。
- 2026 年 8 月 31 日：四音乐人在马萨诸塞州联邦地区法院递交拟议集体诉讼起诉状。
- 2026 年 9 月 1 日至 2 日：Bloomberg Law、Rolling Stone 相继报道；Suno 公开回应。
- 后续程序：集体认证申请、被告答辩与证据开示（原文未报告具体日程）。

## 影响与待观察事项

本案是"身份权而非版权"路径挑战生成式 AI 的代表性案例。若法院接受"姓名即检索键、token 即身份编码"的理论，AI 音乐乃至更广泛的生成式 AI 产品（声音克隆、风格模仿、角色生成）都需要重新评估提示词过滤与训练数据设计的责任边界；若法院认定公开权不覆盖此类间接风格关联，则现有过滤机制或将维持现状。

待观察事项：法院是否认证集体及其范围；Suno 是否提出驳回动议及法院对"检索键"理论的态度；诉举示例歌曲的下架情况；与同期 Sony 版权诉讼等案件的相互影响；公开权在音乐身份场景的损害量化方式（原文未报告）。本文不构成对任何个案的法律意见。

## 来源链接

- Bloomberg Law: https://news.bloomberglaw.com/us-law-week/suno-ai-draws-singers-class-action-over-name-indexed-voices
- Rolling Stone（澳大利亚版转载）: https://au.rollingstone.com/music/music-news/jason-isbell-suno-lawsuit-artist-identities-100519/
- AI Policy Daily: https://aipolicydaily.org/archive/daily/2026-09-02/#story-0013

