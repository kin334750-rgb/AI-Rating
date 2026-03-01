# 🤖 AI-Rating | 智能评测平台

> 追踪全球AI模型最新评测动态

[![Website](https://img.shields.io/badge/Website-AI--Rating-blue)](https://kin334750-rgb.github.io/AI-Rating/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## ✨ 关于

**AI-Rating** 是一个实时追踪全球AI模型评测动态的平台，旨在为AI研究者、开发者和爱好者提供最新、最全面的评测信息。

### 🎯 网站介绍

AI-Rating 通过实时抓取和整合以下平台的信息：

| 信息来源 | 内容类型 |
|---------|---------|
| X (Twitter) | 热门讨论、专家观点 |
| B站 | 评测视频、深度解析 |
| GitHub | 开源模型、评测工具 |
| 独立评测机构 | Artificial Analysis、302.AI等 |
| AI资讯网站 | 行业动态、技术解读 |

### 📱 主要功能

1. **模型对比** - 实时更新GPT、Claude、Gemini、Kimi等主流AI模型评测数据
2. **Benchmark解读** - 详解SWE-bench、MMLU、ARC-AGI等评测基准
3. **工具评测** - 对比OpenCompass、EvalScope等主流评测工具
4. **趋势分析** - 追踪AI评测领域最新发展趋势
5. **3D图谱** - 可视化呈现AI评测生态关联

### 🌟 特色内容

- 2026年AI模型终极对比：GPT-5.2 vs Claude Opus 4.6 vs Gemini 3.1 Pro
- Claude Sonnet 4.6性价比之王分析
- SWE-bench退役与新基准解读
- 中国开源模型崛起：Kimi K2.5、DeepSeek V3.2、GLM-5

### 📊 数据更新

每次用户发送需求，我们将：
1. 实时搜索最新评测信息（X、B站、GitHub等）
2. 整理分析关键数据
3. 生成结构化文档
4. 更新3D知识图谱
5. 保存到本地并推送至GitHub

---

**每次更新耗时约5-10分钟，确保信息的时效性和准确性**

## ✨ 特性

- 🌐 **实时信息聚合** - 追踪X、B站、GitHub等平台最新动态
- 📊 **主流模型评测** - 覆盖GPT、Claude、Gemini、Kimi、DeepSeek等
- 🔬 **Benchmark解读** - 详解各评测基准及2026趋势变化
- 🛠️ **评测工具评测** - 主流评测工具功能对比分析
- 🌐 **3D知识图谱** - 可视化呈现AI评测生态关联
- 📁 **结构化归档** - 按类型、时间线分类展示

## 🏗️ 项目架构

```
AI-Rating/
├── .github/workflows/    # GitHub Actions部署配置
├── assets/              # 静态资源
│   ├── css/            # 样式文件
│   ├── js/             # 交互脚本
│   └── data/           # 核心数据（3D图谱、文件索引）
├── docs/               # 归档文件
│   ├── conclusion-reports/  # 评测报告
│   ├── tool-descriptions/  # 评测工具介绍
│   ├── process-documents/   # 评测流程文档
│   └── other-related/      # 其他文档
├── templates/          # 可复现模板
├── index.html          # 网站首页
├── 3d-graph.html       # 3D知识图谱
└── file-browser.html   # 文件浏览器
```

## 📈 追踪的AI模型（2026）

| 厂商 | 模型 | 核心优势 |
|------|------|---------|
| OpenAI | GPT-5.2 Codex | 推理最强 (ARC-AGI-2: 52.9%) |
| Anthropic | Claude Opus 4.6 | 编程最强 (SWE-bench: 80.9%) |
| Anthropic | Claude Sonnet 4.6 | 性价比之王 (半价 opus 性能) |
| Google | Gemini 3.1 Pro | 性价比称霸 (成本仅为竞品一半) |
| 月之暗面 | Kimi K2.5 | 中国开源旗舰 |
| DeepSeek | V3.2 | MIT开源、价格击穿底价 |
| 阿里 | Qwen3 | 开源新秀 |
| 智谱 | GLM-5 | 开源第一 |

## 🔬 主流Benchmark

| Benchmark | 用途 | 代表模型 |
|-----------|------|---------|
| SWE-bench | 编程/代码修复 | Claude Opus 4.6 (80.9%) |
| ARC-AGI-2 | 抽象推理 | GPT-5.2 (52.9%) |
| AIME 2025 | 数学竞赛 | GPT-5.2 (100%) |
| GPQA | 科学研究 | Kimi K2.5 (87.6%) |
| MMLU | 多任务理解 | 90%+ |

> ⚠️ 2026变化：SWE-bench Verified已退役，新基准SWE-bench Pro/SWE-rebench崛起

## 🛠️ 评测工具

| 工具 | 类型 | 特点 |
|------|------|------|
| OpenCompass | 中国开源 | 70+数据集 |
| EvalScope | 阿里 | 全类型评测 |
| FlagEval | 智源 | 8万+题目 |
| Artificial Analysis | 第三方 | AI指数排名 |
| 302.AI | 第三方 | 独立实测 |

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/kin334750-rgb/AI-Rating.git
cd AI-Rating
```

### 2. 本地预览
```bash
# Python
python -m http.server 8000

# 或 Node.js
npx serve .
```

### 3. 访问
打开浏览器访问：http://localhost:8000

## 📖 功能使用

### 首页
- 查看最新评测动态
- 快速了解主流模型对比
- 了解评测趋势

### 文章列表
- 按类型筛选（评测报告、工具介绍、趋势分析）
- 按时间筛选
- 标签搜索

### 3D知识图谱
- 交互式查看AI评测生态
- 节点拖拽
- 节点筛选
- 点击查看详情

## 🔄 更新日志

### 2026-03-01
- 新增2026年AI模型终极对比
- 新增评测工具全解析
- 新增Benchmark趋势分析
- 新增SWE-bench退役解读
- 支持多语言

## 📄 许可证

MIT License - 允许自由使用、修改、分发

## 🙏 致谢

- [Three.js](https://threejs.org/) - 3D渲染
- [marked.js](https://marked.js.org/) - Markdown解析
- [GitHub Pages](https://pages.github.com/) - 免费托管
- 各AI模型厂商及评测机构
