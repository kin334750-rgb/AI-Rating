# 🤖 AI评测功能网站

基于开源代码全流程自动化构建，整合多个高质量平台信息源，聚焦追踪最火评测专家、评测工具、评测流程、评测结构及结论等信息。

## ✨ 特性

- 📊 **权威信息聚合** - 严格筛选多个高质量平台信息源
- 📁 **结构化文件归档** - 按时间线、信息类型分类展示
- 🌐 **3D知识图谱** - 可视化呈现AI评测生态关联
- 🚀 **GitHub Pages一键部署** - 纯静态网页架构
- 🔄 **全流程可复现** - 配套开源代码Prompt和配置文件

## 🏗️ 项目架构

```
AI-Rating/
├── .github/workflows/    # GitHub Actions部署配置
├── assets/              # 静态资源
│   ├── css/            # 样式文件
│   ├── js/             # 交互脚本
│   └── data/           # 核心数据
├── docs/               # 归档文件
│   ├── expert-profiles/      # 评测专家
│   ├── tool-descriptions/   # 评测工具
│   ├── process-documents/   # 评测流程
│   ├── conclusion-reports/  # 评测报告
│   └── other-related/       # 其他文档
├── templates/          # 可复现模板
├── index.html          # 网站首页
├── 3d-graph.html       # 3D知识图谱
└── file-browser.html   # 文件浏览器
```

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/yourusername/ai-rating.git
cd ai-rating
```

### 2. 本地预览
使用任意静态服务器：
```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

### 3. 部署到GitHub Pages
1. 推送代码到GitHub仓库
2. 进入 Settings > Pages
3. Source选择 "GitHub Actions"
4. 等待自动部署完成

## 📖 使用指南

### 文件浏览
访问 `file-browser.html` 查看所有归档文件，支持按时间、类型、标签筛选。

### 3D知识图谱
访问 `3d-graph.html` 交互式查看AI评测生态：
- 🖱️ 左键拖拽：旋转图谱
- 🔄 滚轮：缩放
- ✋ 右键拖拽：平移
- 👆 点击节点：查看详情

## 🤝 贡献指南

1. Fork本仓库
2. 创建特性分支：`git checkout -b feature/xxx`
3. 提交修改：`git commit -m "feat: 添加xx功能"`
4. 推送分支：`git push origin feature/xxx`
5. 发起Pull Request

## 📄 许可证

MIT License - 允许自由使用、修改、分发

## 🙏 致谢

- Three.js - 3D渲染库
- marked.js - Markdown解析
- GitHub Pages - 免费托管服务
