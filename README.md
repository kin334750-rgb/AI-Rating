# 🤖 AI-Rating | AI评测信息实时收集平台

> English follows below | English version below

[![Website](https://img.shields.io/badge/Website-AI--Rating-blue)](https://kin334750-rgb.github.io/AI-Rating/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## ✨ 关于 | About

**AI-Rating** 是一个AI评测信息实时收集平台，实时追踪全球AI模型的评测动态。

**AI-Rating** is a real-time AI evaluation information collection platform that tracks global AI model evaluation dynamics.

### 🎯 功能特点 | Features

| 功能 | Feature |
|------|---------|
| 实时信息源面板 | Real-time information source panel |
| AI模型综合评分 | AI model comprehensive scoring |
| 3D球形拓扑图 | 3D spherical topology graph |
| 评测专家/工具/报告 | Evaluation experts/tools/reports |
| 趋势分析 | Trend analysis |

---

## 📱 主要页面 | Main Pages

### 页面1：首页 | Page 1: Home
- 顶部：网站标题 + 简介（多源实时抓取、综合能力打分、行业趋势分析）
- Top: Website title + introduction
- 左侧：实时信息源面板（B站/GitHub/X/知乎等）
- Left: Real-time information panel (Bilibili/GitHub/X/Zhihu)
- 右侧：AI模型综合评分条形图
- Right: AI model comprehensive scoring bar chart
- 底部：「Click here 了解更多」按钮
- Bottom: "Click here to learn more" button

### 页面2：3D球形拓扑图 | Page 2: 3D Graph
- 球形力导向布局，可旋转/拖拽/缩放
- Spherical force-directed layout, rotatable/draggable/zoomable
- 同一家公司模型自动聚合成群落
- Models from the same company automatically clustered
- 点击模型弹出详细信息浮层
- Click model to show detailed popup
- 左侧侧边栏：评测专家/工具/报告/趋势
- Left sidebar: experts/tools/reports/trends

---

## 📊 追踪的AI模型 | Tracked AI Models (2026)

| 厂商 | Company | 模型 | Model | 核心优势 | Core Strength |
|------|---------|------|-------|----------|---------------|
| OpenAI | OpenAI | GPT-5.2 Codex | GPT-5.2 Codex | 推理最强 (ARC-AGI-2: 52.9%) | Best reasoning |
| Anthropic | Anthropic | Claude Opus 4.6 | Claude Opus 4.6 | 编程最强 (SWE-bench: 80.9%) | Best coding |
| Anthropic | Anthropic | Claude Sonnet 4.6 | Claude Sonnet 4.6 | 性价比之王 | Best cost-performance |
| Google | Google | Gemini 3.1 Pro | Gemini 3.1 Pro | 12项基准第一 | 12 benchmarks #1 |
| 月之暗面 | Moonshot AI | Kimi K2.5 | Kimi K2.5 | 中国开源旗舰 | China flagship |
| DeepSeek | DeepSeek | V3.2 | V3.2 | MIT开源/价格最低 | MIT open source/lowest price |
| 阿里云 | Alibaba Cloud | Qwen3 | Qwen3 | 生态最完善 | Best ecosystem |
| 智谱AI | Zhipu AI | GLM-5 | GLM-5 | 学术能力强 | Strong academic |

---

## 🔬 主流Benchmark | Main Benchmarks

| Benchmark | 用途 | Usage | 代表模型 | Representative Model |
|-----------|------|-------|---------|---------------------|
| SWE-bench Pro | 编程/代码修复 | Coding/Fix | Claude Opus 4.6 (80.9%) |
| ARC-AGI-2 | 抽象推理 | Abstract Reasoning | GPT-5.2 (52.9%) |
| AIME 2025 | 数学竞赛 | Math Competition | GPT-5.2 (100%) |
| GPQA | 科学研究 | Scientific Research | Kimi K2.5 (87.6%) |
| MMLU | 多任务理解 | Multi-task | 90%+ |

> ⚠️ 2026变化：SWE-bench Verified已退役，新基准SWE-bench Pro/SWE-rebench崛起

---

## 🛠️ 评测工具 | Evaluation Tools

| 工具 | Tool | 类型 | Type | 特点 | Features |
|------|------|------|------|------|----------|
| OpenCompass | OpenCompass | 中国开源 | China Open Source | 70+数据集 | 70+ datasets |
| EvalScope | EvalScope | 阿里 | Alibaba | 全类型评测 | Full type evaluation |
| FlagEval | FlagEval | 智源 | Beijing AI | 8万+题目 | 80k+ questions |
| Artificial Analysis | Artificial Analysis | 第三方 | Third Party | AI指数排名 | AI index ranking |
| 302.AI | 302.AI | 第三方 | Third Party | 独立实测 | Independent testing |

---

## 🚀 快速开始 | Quick Start

```bash
# 克隆项目 | Clone project
git clone https://github.com/kin334750-rgb/AI-Rating.git
cd AI-Rating

# 本地预览 | Local preview
python -m http.server 8000
# 或 | or
npx serve .

# 访问 | Visit
# http://localhost:8000
```

---

## 📁 项目结构 | Project Structure

```
AI-Rating/
├── index.html          # 首页 | Home page
├── 3d-graph.html      # 3D拓扑图 | 3D topology graph
├── assets/
│   ├── css/          # 样式 | Styles
│   ├── js/           # 脚本 | Scripts
│   └── data/         # 数据 | Data
├── docs/             # 文档 | Documents
└── README.md         # 说明 | Documentation
```

---

## 🖥️ 技术栈 | Tech Stack

- **Three.js** + **OrbitControls** - 3D渲染与交互 | 3D rendering & interaction
- **自定义力导向算法** - 物理模拟 | Custom force-directed algorithm
- **Vanilla JS** - 前端逻辑 | Frontend logic
- **CSS3** - 现代UI样式 | Modern UI styling
- **GitHub Pages** - 免费托管 | Free hosting

---

## 📄 许可证 | License

MIT License - 允许自由使用、修改、分发 | Free to use, modify, distribute

---

## 🙏 致谢 | Acknowledgments

- [Three.js](https://threejs.org/) - 3D渲染 | 3D rendering
- [OrbitControls](https://threejs.org/examples/jsm/controls/OrbitControls.html) - 3D交互控制 | 3D interaction controls
- [GitHub Pages](https://pages.github.com/) - 免费托管 | Free hosting
- 各AI模型厂商及评测机构 | AI model vendors and evaluation institutions

---

**更新于 | Updated**: 2026-03-01
