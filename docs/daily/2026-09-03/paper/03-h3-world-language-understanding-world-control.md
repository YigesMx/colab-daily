---
candidateId: "arxiv--2609.01560"
date: "2026-09-03"
category: Paper
title: "H3-World: Turning Language Understanding into World Control"
authors: ["arxiv.org", "arxiv.org", "huggingface.co", "arxiv.org", "arxiv.org", "danzer1xxxxchan.github.io", "arxiv.org"]
summary: "腾讯实习研究（通讯 Yeying Jin）发布 H3-World，把 33B 的 MiniMax-H3 视频生成器改造成可交互世界模型：角色/相机控制写成组合式文本指令（9 种角色子句 × 16 种相机子句），与视频 latent 区间逐段对齐，\"单出口\"注意力路由保证每条指令只作用于其时间区间、动作效果经视频间注意力传播，LoRA 仅训练 0.199% 参数（rank-32、1 万步）。仅用 8000 段 ABot-World 游戏样本，模型即可执行时间精确的镜头调度（左右切换时光流 +52.7→−106.0 正确反转，而冻结 H3 的全局提示和零 LoRA 接口均失败），泛化到训练中未出现的动作组合和风格迥异的初始画面，并保留生成质量。文本动作接口优于加性偏置/FiLM 直接注入。局限：短视野、定性为主的评测、键位粒度动作空间，无持久世界状态与实时交互。"
keywords:
  - 世界模型
  - 视频生成
  - 具身智能
sources:
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2609.01560v1"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2609.01560v1"}
  - {"name": "huggingface.co", "url": "https://huggingface.co/papers/2609.01560"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/pdf/2609.01560"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/abs/2609.01560"}
  - {"name": "danzer1xxxxchan.github.io", "url": "https://danzer1xxxxchan.github.io/H3-World/"}
  - {"name": "arxiv.org", "url": "https://arxiv.org/html/2609.01560v1"}
previewImage: "/daily/2026-09-03/assets/arxiv--2609.01560/preview.png"
schemaVersion: 3
ratingTrack: "paper"
groupRank: 3
groupScore: 85
scoreScale: "paper-v2"
emphasis: true
---

# H3-World: Turning Language Understanding into World Control

**一句话结论**：腾讯实习研究（通讯 Yeying Jin）把 33B 的 MiniMax-H3 视频生成器改造成可交互世界模型：不加专用动作模块，而是把角色/相机控制写成组合式文本指令，与视频 latent 区间逐段对齐，用"单出口注意力路由 + LoRA"学习时间精确的世界控制——仅 8000 段游戏样本、1 万步 LoRA、0.199% 可训练参数，就让镜头调度在切换时刻按指令反转（水平光流 +52.7 → −106.0），并泛化到未见动作组合与风格迥异的初始画面。

## 研究问题与贡献

大视频生成器能力越强，语言越像控制世界的天然接口：MiniMax-H3 已能零样本响应自然语言的角色行为与镜头运动指令，但这种响应是粗粒度的——一条全局指令作用于整段生成，无法指定"前半左移、后半右移"这类时间结构。论文要回答：能否把这种粗糙语言接口升级为精确、有时间接地、可组合的世界控制，同时不破坏预训练视频模型本身的生成质量与泛化能力？

贡献（原文报告）：提出 H3-World——语义动作接口（角色+相机控制→组合文本指令）、latent 对齐时间绑定（每条指令对齐一个视频 latent 区间）、单出口路由（每条指令只直接作用于匹配的视频 latent）+ 低秩适配（LoRA 只改自注意力 QKV/输出投影与两层 token refiner，主干全部冻结）；用极小数据/参数代价把预训练视频生成器变成可交互世界模型。

## 方法与系统

**语义动作接口**。外部控制是离散键位状态（8 个角色/相机键 + 1 个相机速度标志），按 H3 的 VAE 时间划分聚合成 latent 级状态，对冲键先抵消。动作写成 a_k=(u_k, c_k)——角色子句（9 种）与相机子句（16 种）拼接成一句短指令（如"the man walks backward and strafes left, camera pans right slowly"），直接放进 H3 原生文本条件空间，保留动作空间的因子化结构。135 个结构有效组合中训练只覆盖 83 个，头部 20 个组合占 71.4% 提示——天然构成组合泛化测试场。

**Latent 对齐时间绑定**。每个视频 latent 区间配一条独立动作提示，经共享 H3 编码器 + 两层 token refiner（块对角注意力：同一动作 span 内双向、跨 span 隔离）；动作 span 与匹配的视频 latent 共享镜像时间位置（文本侧位置区间的相对偏移一致），为每对动作-latent 提供稳定时间对齐线索。

**单出口路由 + LoRA**。确定性注意力掩码：动作 span A_k 作为 key 时只允许被同 span token 和匹配的视频 latent V_k 读到；作为 query 时可读静态上下文、首帧条件、音频上下文与匹配 latent，但屏蔽其他动作 span 和未匹配视频 latent。所有视频 latent 保留 H3 原生双向注意力，动作的视觉效果只能从唯一入口 V_k 进入视频流再经视频间注意力传播——既保全程运动连续性，又给每条指令唯一的时间入口。LoRA rank-32 学习允许路径上的动作条件化动态；路由掩码本身零参数，训练保留 H3 原生去噪目标。

## 实验设置与数据

训练/评测数据来自 ABot-World-Explorer-500h：7872 段游戏片段训练、128 段留出评测，每段 124 帧 @24fps、832×480，按时间划分提供 37 个 latent 对齐动作提示。训练：rank-32 LoRA、1 万步、lr 1e-4；推理 124 帧 50 步去噪。评测用两组配对协议——受控干预（固定初始观测/种子/采样配置只换动作）与留出片段跟随（用记录动作序列条件生成，用 Farneback 稠密光流的累计水平分量诊断镜头运动方向）。对比三个基线：冻结 H3 + 单条全局运动指令；零 LoRA 的逐 latent 接口；以及加性偏置 / FiLM 两种"直接动作注入"变体（ReactiveGWM 式投影加偏置、AdaLN 后 scale-shift）。

## 结果、限制与结论

**预训练先验与适配的作用（论文报告值）**：镜头"先急左后急右"切换调度下，全局提示的冻结 H3 切换前光流 0.0、切换后仅 −17.3（左移完全缺失）；零 LoRA 逐 latent 接口几乎静止（±0.1，平均绝对光流 0.003）；H3-World 切换前 +52.7、切换后 −106.0，两个方向都执行且落在各自区间。反转指令顺序结论相同（−58.7 / +121.0）。恒定动作时全局提示与 H3-World 方向分离度几乎一样（301.8 vs 300.5）——说明冻结 H3 本来就能响应粗运动指令，缺的是时间绑定；逐 latent 接口若无 LoRA 也无法工作。

**接口对比**：把键位状态编码成向量直接注入（加性/FiLM）在记录控制变化时只产生微弱或不一致的响应；文本接口产生贯穿全序列的角色+相机协同变化——支持"动作走预训练文本通路"的设计选择。

**跟随与干预**：留出片段上 H3-World 能按记录控制再现主要角色位移与视点变化并保留场景布局/主体外观；固定观测只换指令时，静止/前进、左右平移、快慢摇镜产生可区分且方向正确的运动变化。

**泛化**：未见组合（前进+摇镜俯仰，两子句各自在训练中出现但从未同现）在留出游戏画面与分布外画面上都能正确执行；六个与训练风格迥异的初始观测（第三/第一人称、室内外、奇幻/科幻、多样渲染风格）上同一接口仍产生所求角色/相机响应且保留画面风格。

**限制（论文自述）**：当前只做短视野生成，组合泛化与视觉迁移主要靠代表性示例展示，缺跨动作组合/场景/随机种子的系统性量化；模型生成固定长度片段，尚无持久世界状态、实时交互、规划或策略学习。track 补充：评测以定性图 + 光流诊断为主，无大规模用户研究或帧级保真度指标；键位粒度的动作空间（9×16 子句）远小于连续控制空间，向低层密集控制的延伸原文未报告。

## 来源链接

- arXiv 摘要页：https://arxiv.org/abs/2609.01560v1
- arXiv PDF：https://arxiv.org/pdf/2609.01560v1
- arXiv HTML 全文：https://arxiv.org/html/2609.01560v1
- Hugging Face Papers：https://huggingface.co/papers/2609.01560

