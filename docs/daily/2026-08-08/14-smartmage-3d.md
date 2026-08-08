---
candidateId: "arxiv--2608.05137"
category: "Paper"
date: "2026-08-08"
rank: 14
title: "SmartMage：面向3D场景理解的动态模态编排"
authors:
  - "Yue Zhang"
  - "Yingzhao Jian"
  - "Yunqiu Xu"
  - "Xiaoxiao Sun"
  - "Hehe Fan"
summary: "SmartMage不再为所有3D问题固定堆叠RGB、深度、BEV、点云和体素，而是先由SMART根据问题语义、跨模态相似度和输入质量选择辅助模态，再由MAGE用模态先验约束稀疏专家路由。论文在五个3D问答、描述和定位基准上报告了领先结果，并用ScanFacet分析问题类型与模态选择的对应关系。"
keywords:
  - "空间场景建模与路由"
  - "视觉语言动作控制"
score: 83.0
sources:
  - name: "arXiv"
    url: "https://arxiv.org/abs/2608.05137"
previewImage: "/daily/2026-08-08/assets/arxiv--2608.05137/preview.png"
---

## 核心内容

3D场景问题依赖的证据随语义变化：颜色与材质更需要RGB，形状、位置和空间关系更依赖深度、点云、BEV或体素。固定输入全部模态不仅增加计算，还可能让无关模态带来语义噪声。SmartMage把多模态推理拆成“选什么”和“如何处理”两层：SMART在输入侧决定每个问题应保留哪些辅助模态；MAGE在语言模型内部把不同模态token路由给具有模态偏好的专家。

系统先把32帧RGB-D、BEV、8192点点云和稀疏体素编码到统一的4096维空间。RGB始终作为主模态，SMART综合文本语义先验、文本与各模态的语义相似度、以及模态质量分数形成路由概率，并按累计概率选择最多3个辅助模态。MAGE则在Qwen3-VL的若干前馈层中插入稀疏MoE，通过token模态预测和可学习的模态-专家亲和矩阵，给原始专家门控提供结构化先验。

## 关键技术与数据

SMART包含语义先验估计器、语义相似度评分器和模态质量评估器，并用RGB证据门调节主模态。训练时采用温度0.5的Gumbel-Softmax，推理时确定性选择累计概率超过0.8的最小辅助模态集合。MAGE插在语言模型第8、12、16、20、24和28层，每层8个专家、top-2路由；专家由预训练FFN初始化。训练目标由语言建模损失、语义相关/区分损失、模态归属、专家校准和负载均衡项共同组成。

训练语料由ScanNet衍生的ScanQA、SQA3D、Scan2Cap、ScanRefer和Multi3DRefer组成。模型基于Qwen3-VL-8B-Instruct，AdamW学习率 `2e-5`，训练1轮，批量64，使用2张H800。输入包括32帧128x123的RGB-D、同尺寸BEV、8192点和0.02米体素。论文还构建ScanFacet，把ScanQA和SQA3D的7936个问题分成颜色、位置、材质、数量、形状、类型、空间关系和其他八类；标签经多次LLM分类、自一致性过滤和少量人工复核，人工修正低于3%。

## 结果与结论

SmartMage在ScanQA和SQA3D分别达到32.6和66.8 EM@1；Scan2Cap达到93.8/88.7 CIDEr@0.25/0.5；ScanRefer达到65.9/59.5 Acc@0.25/0.5；Multi3DRefer达到65.4/60.7 F1@0.25/0.5。相对Ross3D，ScanRefer的Acc@0.5提高5.1分，Multi3DRefer的F1@0.5提高6.4分。组件消融中，只有SMART为29.8/63.4/82.5/57.1/56.2，只有MAGE为30.7/64.5/83.8/57.8/57.2，两者联合达到32.6/66.8/88.7/59.5/60.7，说明两个路由层次有互补作用。

固定模态组合并非越多越好，而自适应设置在五项3D指标上均最佳；ScanFacet分析也显示颜色和材质偏向RGB或RGB+深度，计数与空间问题更偏向深度和体素。效率方面，论文报告每次训练迭代47.44秒，快于Video-3D LLM的91.61秒和Ross3D的125.2秒，但端到端推理538.2 ms只与这些方法相当，并未同步获得明显推理加速。应注意，训练和主评测都建立在ScanNet衍生室内数据上，动态路由对开放世界、传感器严重失真和真实机器人闭环的泛化仍未验证；ScanFacet也重组自既有问答集，而非独立采集的新场景分布。

## 来源链接

- [arXiv论文](https://arxiv.org/abs/2608.05137)
- [项目页面](https://yuecheong.github.io/SmartMage/)
