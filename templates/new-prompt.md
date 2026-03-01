# AI评测功能网站 - 全流程复现终极Prompt

## 任务目标
基于以下信息源，生成AI评测领域的完整内容，包括文档归档和3D图谱数据。

## 信息源
1. **知名AI社区**: Hugging Face, Reddit r/LocalLLaMA, Reddit r/MachineLearning
2. **专业评测网站**: AI2, Stanford HAI, Papers with Code
3. **AI公司官方**: OpenAI, Anthropic, Google DeepMind
4. **学术期刊**: arXiv, NeurIPS, ICML, ICLR

## 关注领域
[请指定具体领域，如：自然语言处理、计算机视觉、多模态、代码生成等]

## 输出要求

### 1. 评测专家介绍 (docs/expert-profiles/)
生成至少3位评测领域专家介绍，包含：
- 专家基本信息
- 研究方向
- 重要贡献
- 代表性评测工作

### 2. 评测工具说明 (docs/tool-descriptions/)
生成至少3个评测工具说明，包含：
- 工具名称和简介
- 核心功能
- 使用方法
- 适用场景

### 3. 评测流程文档 (docs/process-documents/)
生成至少2个评测流程文档，包含：
- 流程概述
- 详细步骤
- 注意事项
- 最佳实践

### 4. 评测结论报告 (docs/conclusion-reports/)
生成至少3个评测报告，包含：
- 评测对象
- 评测方法
- 评测结果
- 分析结论

### 5. 3D图谱数据 (assets/data/3d-graph-data.json)
生成完整的3D图谱JSON数据：
- 节点：包含所有专家、工具、流程、结论
- 边：建立节点间的关联关系
- 节点属性：包含名称、类型、描述等

### 6. 文件索引 (assets/data/file-index.json)
生成完整的文件索引JSON，包含所有生成的文档信息

## 格式要求
- Markdown文件使用UTF-8编码
- JSON文件必须为合法格式
- 所有日期使用YYYY-MM-DD格式
- 所有路径使用相对路径

## 执行步骤
1. 信息采集：调研指定领域
2. 内容生成：按类别生成文档
3. 数据生成：构建3D图谱
4. 索引生成：创建文件索引

## 启动指令
请按以下格式启动：
```
启动复现流程 + AI功能评测 + [具体领域]
```

例如：
```
启动复现流程 + AI功能评测 + 自然语言处理
```
