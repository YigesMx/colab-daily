---
candidateId: "arxiv--2607.28362"
date: "2026-08-01"
rank: 5
title: "ShadowDancer: Teaching Video World Models Any Action by Learning Unified Dynamics Representations from a Video and Its Shadow"
authors:
  - "Jin Cao"
  - "Zian Meng"
  - "Kaipeng Zhang"
summary: "ShadowDancer 通过同一动力学、不同外观的 shadow pairs 和跨 shadow 预测，把示范视频压缩成统一动力学表示与可复用动作资产，驱动块因果视频世界模型跨场景重放人类、游戏、相机和机器人动作。"
keywords:
  - "video world model"
  - "latent action"
  - "cross-shadow prediction"
  - "action transfer"
  - "interactive simulation"
score: 85
sources:
  - name: "arXiv TeX source"
    url: "https://arxiv.org/src/2607.28362"
  - name: "arXiv"
    url: "https://arxiv.org/abs/2607.28362"
  - name: "Project page"
    url: "https://ShadowDancer-1.github.io"
previewImage: "/daily/2026-08-01/assets/arxiv--2607.28362/5f3e483a626411049fa96122fc8bdbdebb1fa10a94605b49c1adc6f545e1d938.png"
---

## 核心内容

ShadowDancer 关注交互式视频世界模型的控制接口：文字或按键容易获取，但对动作展开过程描述粗糙；骨架、相机轨迹等结构化信号精确，却只适用于特定动作族且采集成本高。示范视频天然包含逐帧动力学，但普通 latent action model 往往把人物、场景、材质和相机等外观因素一起编码，导致动作换到新环境后泄漏源外观或产生扭曲。

论文把视频写成动力学 `d` 与外观 `c` 的渲染 `R(d,c)`，并构造 shadow pair：两段视频逐帧共享同一动力学，但独立重采样外观。这里“动力学”和“外观”由配对协议操作性定义。例如重放人体动作并改变相机时，相机属于外观；重放相机轨迹并改变场景时，相机运动属于动力学。配对中保留什么，模型就把什么当作可控动作；因此同一个框架可覆盖人体、第一/第三人称游戏、相机移动和机器人操作。

Cross-shadow prediction 让 inverse encoder 从源视频相邻帧提取 32 维 latent action `z`，但 forward decoder 用这个 `z` 和另一段 shadow 的前一帧预测其下一帧。源外观与目标外观独立，额外源外观信息不能帮助预测；在 KL 瓶颈压力下，表示被鼓励保留双方共享的动力学。冻结 LAM 后，视频扩散模型同时接收低维 `z` 和由 3D-VAE 编码的源动作细节 `s`，二者组成可保存、拼接、重放的 action asset。生成器被改造成跨 block 因果、block 内双向的模型，利用 KV cache 按块向前 rollout。

## 关键技术与数据

LAM latent 维度为 32，`beta=0.01`，以世界模型一半空间分辨率训练。世界模型基于 SkyReels-V2-1.3B I2V DiT，以 flow matching 微调并进行 block-causal 转换。`z` 通过时间步嵌入和专用 cross-attention 注入；源细节流既在输入卷积通道拼接，也作为额外 cross-attention context。模型训练使用 NVIDIA H200 GPU，但正文没有给出总 GPU 数、训练时长或总算力。

Shadow Library 包含 Blender 重渲染的 SMPL-X 人体动作、ManiSkill 机器人操作、第一人称开放世界游戏、第三人称 Unreal 场景和 DL3DV 相机轨迹。OpenX 机器人数据与互联网视频无法提供严格 shadow，只作为 `x=x̃` 的退化 self-pair，贡献真实视觉分布而非动力学可识别信号。因而方法对真实世界的识别性主要仍依靠合成配对。

动作迁移在五类 held-out shadow pairs 上测试：人体、第一人称战斗、第三人称动作和机器人操作使用逐帧 PSNR/LPIPS，相机控制使用 VGGT 恢复轨迹后的 ATE/RPE。基线 Olaf-World 使用相同训练数据、世界模型 backbone 和注入路径。长时 rollout 则把离散命令映射为 canonical action assets，与 Olaf-World、Yume-1.5、LingBot-World 2.0 通过盲化二选一比较；评审者为 Fable 5 VLM，评价动作控制、动作忠实度和长时一致性，不评视觉质量。

## 结果与结论

在动作迁移表中，ShadowDancer 对 Olaf-World 的人体 PSNR/LPIPS 为 22.4/0.184 对 18.2/0.288；第一人称战斗为 17.0/0.354 对 13.0/0.532；第三人称动作 17.4/0.309 对 12.6/0.506；相机 ATE/RPE 0.005/0.003 对 0.072/0.021；机器人操作 22.6/0.116 对 14.0/0.478。消融中完整模型 PSNR 16.35、LPIPS 0.376，优于仅未配对 latent 加资产的 14.92/0.428；这支持 shadow pairing 的贡献不只是来自高带宽源资产。

长时 rollout 的盲化偏好中，相对 Olaf-World，动作控制/忠实度/长时一致性偏好率为 94%/95%/94%；相对 Yume-1.5 为 88%/86%/91%；相对 LingBot-World 2.0 为 78%/83%/64%。这些是 VLM judge 的系统级偏好，不是带真实目标视频的客观误差，而且各系统接收不同原生控制接口，不能解释为同输入预算下的严格算法排名。论文还展示训练后才加入的 mod 角色和双手剑动作可在新地图重放，但属于定性迁移演示。

限制有两项根本性前提：部署前必须先录制或制作动作资产；严格 shadow pairs 在游戏和模拟器中容易生成，在现实中难以重复同一动力学并独立改变外观，因此真实视频目前只作为 self-pair。表示可识别的理论保证还依赖动力学可从源观测、条件独立重采样和不同动力学具有可区分结果等假设，并不保证有限样本或 SGD 必然恢复。由此，ShadowDancer 展示的是一个强有力的视频动作迁移接口，但还不是无需示范、无需模拟或经过真实机器人闭环验证的通用动作模型。

## 来源链接

- arXiv TeX 原始源码：https://arxiv.org/src/2607.28362
- arXiv 论文页：https://arxiv.org/abs/2607.28362
- 项目主页：https://ShadowDancer-1.github.io
