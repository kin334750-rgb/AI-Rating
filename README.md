# 🤖 AI-Rating | AI评测信息实时收集平台

> 实时追踪全球AI模型评测动态 | Real-time AI Evaluation Information Platform

[![Website](https://img.shields.io/badge/Website-AI--Rating-blue)](https://kin334750-rgb.github.io/AI-Rating/)
[![GitHub Stars](https://img.shields.io/github/stars/kin334750-rgb/AI-Rating)](https://github.com/kin334750-rgb/AI-Rating/stargazers)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📌 项目简介

**AI-Rating** 是一个专注于AI模型评测信息收集与展示的平台，致力于为AI爱好者、研究人员和从业者提供全面、及时的AI模型评测数据。

平台通过多源实时抓取、综合能力打分、趋势分析等功能，帮助用户快速了解全球AI模型的发展动态。

**访问网站**: https://kin334750-rgb.github.io/AI-Rating/

---

## ✨ 核心功能

### 🏠 首页 - AI模型综合评分展示

首页采用简洁现代的设计风格，展示以下内容：

- **顶部标题区**
  - 网站Logo与名称
  - 核心口号："多源实时抓取 · 综合能力打分 · 行业趋势分析"
  - 实时统计信息（追踪模型数、信息源数、评测基准数）

- **左侧信息源面板**
  - 支持筛选：全部 / B站 / GitHub / X / 知乎
  - 实时展示最新AI评测动态
  - 点击可查看详细信息

- **右侧评分排行榜**
  - AI模型综合评分条形图
  - 按评分高低排序
  - 悬停显示详细分数

- **底部导航**
  - 「Click here 了解更多」按钮，一键跳转3D拓扑图

---

### 🌐 3D球形拓扑图（核心页面）

采用Three.js构建的沉浸式3D交互界面，完全模仿 x.mitbunny.ai 的视觉风格。

#### 🎯 3D可视化特性

| 特性 | 说明 |
|------|------|
| 球形力导向布局 | 公司节点均匀分布在球面上，形成美观的拓扑结构 |
| 可旋转 | 鼠标拖拽或触摸滑动360°自由旋转 |
| 可拖拽 | 支持平移查看不同区域 |
| 可缩放 | 滚轮或双指缩放，近距离观察细节 |
| 自动旋转 | 默认开启自动旋转，呈现动态效果 |
| 粒子背景 | 2000+发光粒子环绕，营造科技感 |

#### 🏢 群落聚合

- **中心节点**：全球顶尖AI公司（OpenAI、Google、Anthropic等）
- **子节点**：该公司旗下的AI模型（GPT-5.2、Claude Opus 4.6、Gemini 3.1等）
- **连接线**：展示公司与模型从属关系
- **发光效果**：每个节点带有独特的公司品牌色发光

#### 👆 交互操作

- **点击模型节点**：弹出详细信息浮层
  - 模型名称与公司
  - 综合评分
  - 评测体系热度排序（按评测基准排名）
  - 每个评测包含：名称、打分、排名、描述、官方链接
- **公司节点**：显示旗下所有模型列表
- **悬停效果**：节点放大高亮，光标变为手型

#### 📱 移动端支持

- 专为手机端优化的触摸交互
- 短按轻触模拟点击事件
- 支持单指旋转、双指缩放
- 响应式布局适配各种屏幕尺寸

---

### 📋 侧边栏四大模块

点击左上字菜单按钮角三展开侧边栏：

#### 1️⃣ 评测专家

展示AI领域知名专家、博主、媒体：

| 专家 | 职位/身份 | 简介 |
|------|----------|------|
| 李开复 | 创新工场CEO | AI领域知名专家，曾任Google中国区总裁 |
| 图灵的猫 | B站科技UP主 | 专注于AI模型深度评测，发布大量实测视频 |
| Jim Fan | NVIDIA AI Scientist | 英伟达AI科学家，知名AI评测博主 |
| Andrej Karpathy | AI Researcher | OpenAI创始成员，AI教育家 |
| Yann LeCun | Meta AI Chief | 图灵奖得主，深度学习先驱 |
| Sam Altman | OpenAI CEO | OpenAI首席执行官 |
| Dario Amodei | Anthropic CEO | Anthropic联合创始人，专注AI安全 |
| 周鸿祎 | 360创始人 | AI领域知名投资人 |
| Milo | OpenRouter CTO | AI模型评测平台负责人 |
| 极客公园 | 科技媒体 | 持续产出AI深度评测报道 |

**每位专家支持的主页链接**：
- Twitter / X
- Bilibili
- YouTube
- 知乎
- 微博
- 微信
- 个人官网

#### 2️⃣ 评测工具

详细介绍各类AI评测体系：

| 工具 | 类型 | 特点 | 评测方式 |
|------|------|------|----------|
| OpenCompass | 综合评测 | 上海人工智能实验室开源，70+数据集 | 出题测试、自动评分、人工复核 |
| EvalScope | 综合评测 | 阿里魔搭社区开源 | 基准测试、性能评估、成本分析 |
| FlagEval | 中文评测 | 智源研究院开源，8万+题目 | CMMLU、C-Eval、知识测试 |
| SWE-bench | 编程能力 | 软件工程基准 | Bug修复、功能实现、代码重构 |
| MMLU | 知识能力 | 57个学科领域 | 选择题测试、知识问答、推理测试 |
| ARC-AGI | 推理能力 | 抽象推理基准 | 模式识别、逻辑推理、抽象思维 |

#### 3️⃣ 评测报告

收录最新AI模型深度评测报告：

| 报告标题 | 公司 | 核心亮点 |
|----------|------|----------|
| GPT-5.2深度评测报告 | OpenAI | ARC-AGI-2: 52.9%, AIME 2025: 100% |
| Claude 4.6编程实测 | Anthropic | SWE-bench: 80.9% |
| Kimi K2.5国产之光 | Moonshot | GPQA: 87.6%, AIME数学第二 |
| DeepSeek V3.2开源评测 | DeepSeek | 开源超越闭源，API价格最低 |
| Gemini 3.1多模态评测 | Google | MMMU多模态理解第一 |
| Qwen3.5中文能力评测 | Alibaba | CMMLU中文评测领先 |

**点击报告卡片可查看详情**：
- 评测概述
- 详细评测数据表格
- 评分、排名信息

#### 4️⃣ 趋势分析

展示AI模型评分变化趋势：

- 时间范围：2025年10月 - 2026年3月
- 追踪模型：GPT-5、Claude 4、Gemini 3、Kimi K2、DeepSeek V3
- 可视化：柱状图展示每月评分变化

---

## 📊 追踪的AI模型

### 🏭 AI公司 & 模型

| 公司 | 模型 | 综合评分 | 核心优势 |
|------|------|----------|----------|
| **OpenAI** | GPT-5.2 Codex | 97 | 推理最强 (ARC-AGI-2: 52.9%) |
| | GPT-5 Pro | 95 | 旗舰专业版 |
| | o1 Pro | 93 | 推理增强 |
| **Anthropic** | Claude Opus 4.6 | 95 | 编程最强 (SWE-bench: 80.9%) |
| | Claude Sonnet 4.6 | 89 | 平衡性能与速度 |
| | Claude Haiku 4 | 82 | 快速响应 |
| **Google** | Gemini 3.1 Pro | 93 | 12项基准第一 |
| | Gemini 2.5 Pro | 90 | 强推理能力 |
| | Gemini 2.0 Ultra | 87 | 多模态强大 |
| **Moonshot AI** | Kimi K2.5 | 91 | 国产推理之光 |
| | Kimi K2 | 85 | 长上下文 |
| **DeepSeek** | DeepSeek V3.2 | 87 | 开源最强/性价比王 |
| | DeepSeek R1 | 86 | 推理能力突出 |
| **阿里云** | Qwen3.5 | 85 | 中文开源旗舰 |
| | Qwen2.5 | 80 | 开源系列 |
| **智谱AI** | GLM-5 | 82 | 学术能力强 |
| **百度** | 文心一言4.0 | 78 | 百度旗舰 |
| **xAI** | Grok 4 | 80 | 马斯克AI |
| **Meta AI** | Llama 4 | 84 | 开源新标杆 |

---

## 🔬 主流Benchmark评测体系

| Benchmark | 用途 | 评分方式 | 顶尖模型 |
|-----------|------|----------|----------|
| **ARC-AGI-2** | 抽象推理 | 模式识别测试 | GPT-5.2 (52.9%) |
| **AIME 2025** | 数学竞赛 | 奥数题测试 | GPT-5.2 (100%) |
| **SWE-bench Pro** | 软件工程 | 真实Bug修复 | Claude Opus 4.6 (80.9%) |
| **GPQA** | 科学研究 | 研究生水平问答 | Kimi K2.5 (87.6%) |
| **MMLU** | 多任务理解 | 57学科选择 | GPT-5.2 (94.2%) |
| **HumanEval** | 代码生成 | 编程题测试 | GPT-5.2 (95%) |
| **MMMU** | 多模态理解 | 图像+文本 | Gemini 3.1 (75.2%) |
| **CMMLU** | 中文理解 | 中文选择题 | Qwen3.5 (91.2%) |

---

## 🛠️ 技术实现

### 技术栈

| 技术 | 用途 |
|------|------|
| **Three.js** | 3D渲染引擎 |
| **OrbitControls** | 3D交互控制（旋转/缩放/拖拽） |
| **自定义力导向算法** | 物理模拟，实现群落聚合效果 |
| **Shader着色器** | 节点发光效果 |
| **Canvas纹理** | 3D标签文字渲染 |
| **Vanilla JavaScript** | 前端逻辑，无框架依赖 |
| **CSS3** | 现代UI样式、动画效果 |
| **GitHub Pages** | 免费托管与CDN加速 |

### 项目结构

```
AI-Rating/
├── index.html              # 首页 - AI模型评分展示
├── 3d-graph.html          # 3D球形拓扑图页面
├── assets/
│   ├── css/
│   │   ├── main.css       # 首页样式
│   │   └── 3d-graph.css   # 3D页面样式
│   ├── js/
│   │   ├── main.js        # 首页脚本
│   │   └── 3d-graph.js    # 3D拓扑图脚本（含全部数据）
│   └── data/              # 数据文件
├── docs/                  # 文档
├── .github/
│   └── workflows/         # GitHub Actions 自动部署
└── README.md              # 项目说明
```

---

## 🚀 快速开始

### 本地预览

```bash
# 克隆项目
git clone https://github.com/kin334750-rgb/AI-Rating.git
cd AI-Rating

# 启动本地服务器
python -m http.server 8000

# 或使用 Node.js
npx serve .

# 访问
# http://localhost:8000
```

### 部署到GitHub Pages

项目已配置GitHub Actions自动化部署：

1. Fork本项目
2. 修改代码并推送
3. 自动触发部署
4. 访问 `https://你的用户名.github.io/AI-Rating/`

---

## 📖 如何更新内容

所有数据存储在 `assets/js/3d-graph.js` 文件中：

```javascript
// 修改评测专家
sidebarData.experts = [
    { name: '名字', title: '职位', desc: '简介', avatar: '图标',
      links: [{ type: 'twitter', url: '链接' }] }
];

// 修改评测报告
sidebarData.reports = [
    { title: '标题', date: '日期', desc: '描述', company: '公司',
      content: '详细内容', benchmarks: [...] }
];

// 修改AI模型数据
graphData.nodes = [
    { id: '公司ID', name: '公司名', group: 'company', color: '#颜色', desc: '描述' },
    { id: '模型ID', name: '模型名', group: 'model', parent: '公司ID', score: 评分, desc: '描述' }
];

// 修改模型评测数据
benchmarkData = { '模型ID': [...] };
```

修改后推送即可自动更新网站。

---

## 🔗 相关链接

- **网站**: https://kin334750-rgb.github.io/AI-Rating/
- **GitHub**: https://github.com/kin334750-rgb/AI-Rating
- **Three.js**: https://threejs.org/
- **x.mitbunny.ai**: https://x.mitbunny.ai (参考网站)

---

## 📄 许可证

MIT License - 允许自由使用、修改、分发

---

## 🙏 致谢

- [Three.js](https://threejs.org/) - 优秀的3D渲染库
- [OrbitControls](https://threejs.org/examples/jsm/controls/OrbitControls.html) - 3D交互控制组件
- [GitHub Pages](https://pages.github.com/) - 免费静态网站托管
- 各AI模型厂商及评测机构提供的数据
- x.mitbunny.ai 提供的设计灵感

---

**最后更新**: 2026-03-01
