let graphData = null;
let fileIndex = null;

const typeColors = {
    'topic': '#ff6b6b',
    'expert': '#4ecdc4',
    'tool': '#45b7d1',
    'process': '#96ceb4',
    'conclusion': '#ffeaa7',
    'literature': '#a29bfe'
};

const typeNames = {
    'topic': 'AI评测热点',
    'expert': '评测专家',
    'tool': '评测工具',
    'process': '评测流程',
    'conclusion': '评测结论',
    'literature': '学术文献'
};

const categoryNames = {
    'expert-profile': '评测专家',
    'tool-description': '评测工具',
    'process-document': '评测流程',
    'conclusion-report': '评测报告',
    'other': '其他文档'
};

const categoryIcons = {
    'expert-profile': '👤',
    'tool-description': '🔧',
    'process-document': '📋',
    'conclusion-report': '📊',
    'other': '📄'
};

async function loadGraphData() {
    try {
        const response = await fetch('assets/data/3d-graph-data.json');
        graphData = await response.json();
        updateStats();
    } catch (error) {
        console.warn('3D图谱数据加载失败，使用默认数据');
        graphData = getDefaultGraphData();
        updateStats();
    }
}

async function loadFileIndex() {
    try {
        const response = await fetch('assets/data/file-index.json');
        fileIndex = await response.json();
        displayRecentFiles();
    } catch (error) {
        console.warn('文件索引加载失败');
        fileIndex = { files: [] };
        displayRecentFiles();
    }
}

function updateStats() {
    const counts = { expert: 0, tool: 0, process: 0, conclusion: 0 };
    
    if (graphData && graphData.nodes) {
        graphData.nodes.forEach(node => {
            if (counts.hasOwnProperty(node.type)) {
                counts[node.type]++;
            }
        });
    }
    
    const expertEl = document.getElementById('expert-count');
    const toolEl = document.getElementById('tool-count');
    const processEl = document.getElementById('process-count');
    const reportEl = document.getElementById('report-count');
    
    if (expertEl) expertEl.textContent = counts.expert;
    if (toolEl) toolEl.textContent = counts.tool;
    if (processEl) processEl.textContent = counts.process;
    if (reportEl) reportEl.textContent = counts.conclusion;
}

function displayRecentFiles() {
    const container = document.getElementById('recent-files');
    if (!container || !fileIndex || !fileIndex.files) return;
    
    const recentFiles = fileIndex.files.slice(0, 5);
    
    if (recentFiles.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted);">暂无文件</p>';
        return;
    }
    
    container.innerHTML = recentFiles.map(file => `
        <div class="file-item" onclick="window.location.href='file-browser.html?file=${file.id}'">
            <div class="file-item-title">${file.title}</div>
            <div class="file-item-meta">${getTypeName(file.type)} · ${file.date}</div>
        </div>
    `).join('');
}

function getTypeName(type) {
    return categoryNames[type] || type;
}

function getDefaultGraphData() {
    return {
        nodes: [
            { id: 1, name: '大语言模型评测', type: 'topic', description: '当前AI评测最热门的方向' },
            { id: 2, name: 'GPT-4评测', type: 'topic', description: 'OpenAI最新模型的评测研究' },
            { id: 3, name: 'Claude评测', type: 'topic', description: 'Anthropic模型的评测分析' },
            { id: 4, name: '图像识别评测', type: 'topic', description: '计算机视觉评测方向' },
            { id: 5, name: '李开复', type: 'expert', description: 'AI领域知名专家', expertise: ['大模型评测', 'AI应用'] },
            { id: 6, name: '周志华', type: 'expert', description: '机器学习领域专家', expertise: ['算法评测', '理论分析'] },
            { id: 7, name: 'OpenAI Evals', type: 'tool', description: '官方评测框架', features: ['开源', '可定制'] },
            { id: 8, name: 'LM-Eval', type: 'tool', description: '统一评测基准', features: ['多模型支持', '标准化'] },
            { id: 9, name: 'HELM', type: 'tool', description: '斯坦福评测工具', features: ['全面评测', '学术标准'] },
            { id: 10, name: '指令跟随评测', type: 'process', description: '评估模型指令理解能力' },
            { id: 11, name: '安全对齐评测', type: 'process', description: '评估模型安全性' },
            { id: 12, name: 'MMLU评测', type: 'conclusion', description: '大规模多任务理解', accuracy: '85%' },
            { id: 13, name: 'HumanEval', type: 'conclusion', description: '代码生成评测', accuracy: '80%' }
        ],
        links: [
            { source: 1, target: 2 }, { source: 1, target: 3 }, { source: 1, target: 4 },
            { source: 2, target: 7 }, { source: 2, target: 8 }, { source: 3, target: 7 },
            { source: 4, target: 9 }, { source: 5, target: 1 }, { source: 5, target: 10 },
            { source: 6, target: 1 }, { source: 6, target: 12 }, { source: 7, target: 10 },
            { source: 8, target: 12 }, { source: 9, target: 13 }, { source: 10, target: 12 },
            { source: 11, target: 13 }
        ]
    };
}

function initFileBrowser() {
    loadFileBrowserData();
    
    document.getElementById('date-filter')?.addEventListener('change', filterFiles);
    document.getElementById('type-filter')?.addEventListener('change', filterFiles);
    document.getElementById('tag-filter')?.addEventListener('input', debounce(filterFiles, 300));
    document.getElementById('search-input')?.addEventListener('input', debounce(filterFiles, 300));
}

async function loadFileBrowserData() {
    try {
        const response = await fetch('assets/data/file-index.json');
        fileIndex = await response.json();
        renderFileTree(fileIndex.files);
        
        const urlParams = new URLSearchParams(window.location.search);
        const typeFilter = urlParams.get('type');
        if (typeFilter) {
            document.getElementById('type-filter').value = typeFilter;
            filterFiles();
        }
    } catch (error) {
        console.error('加载文件索引失败:', error);
    }
}

function renderFileTree(files) {
    const container = document.getElementById('file-tree');
    if (!container || !files) return;
    
    const categories = {};
    files.forEach(file => {
        if (!categories[file.type]) {
            categories[file.type] = [];
        }
        categories[file.type].push(file);
    });
    
    let html = '';
    const categoryOrder = ['expert-profile', 'tool-description', 'process-document', 'conclusion-report', 'other'];
    
    categoryOrder.forEach(type => {
        if (!categories[type]) return;
        
        const folderId = `folder-${type}`;
        html += `
            <div class="folder-item">
                <div class="folder-header" onclick="toggleFolder('${folderId}')">
                    <span class="folder-icon">▼</span>
                    <span>${categoryIcons[type]} ${categoryNames[type]}</span>
                    <span style="color: var(--text-muted); margin-left: auto;">${categories[type].length}</span>
                </div>
                <div id="${folderId}" class="folder-content">
                    ${categories[type].map((file, idx) => `
                        <div class="file-tree-item" data-id="${file.id}" onclick="viewFile(${fileIndex.files.findIndex(f => f.id === file.id)})">
                            <span class="file-icon">📄</span>
                            <span class="file-name">${file.title}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html || '<p style="color: var(--text-muted); padding: 12px;">暂无文件</p>';
}

function toggleFolder(folderId) {
    const folder = document.getElementById(folderId);
    const header = folder.previousElementSibling;
    
    if (folder.style.display === 'none') {
        folder.style.display = 'block';
        header.classList.remove('collapsed');
    } else {
        folder.style.display = 'none';
        header.classList.add('collapsed');
    }
}

function viewFile(index) {
    const file = fileIndex.files[index];
    if (!file) return;
    
    document.querySelectorAll('.file-tree-item').forEach(item => item.classList.remove('active'));
    const activeItem = document.querySelector(`.file-tree-item[data-id="${file.id}"]`);
    if (activeItem) activeItem.classList.add('active');
    
    document.getElementById('file-header').innerHTML = `<h2>${file.title}</h2>`;
    
    const contentDiv = document.getElementById('file-content');
    
    if (file.path) {
        fetch(file.path)
            .then(res => res.text())
            .then(content => {
                contentDiv.innerHTML = marked.parse(content);
            })
            .catch(() => {
                contentDiv.innerHTML = `
                    <h3>${file.title}</h3>
                    <p><strong>类型:</strong> ${getTypeName(file.type)}</p>
                    <p><strong>日期:</strong> ${file.date}</p>
                    <p><strong>标签:</strong> ${file.tag ? file.tag.join(', ') : '无'}</p>
                    <p style="margin-top: 20px;">${file.description || '暂无详细内容'}</p>
                `;
            });
    } else {
        contentDiv.innerHTML = `
            <h3>${file.title}</h3>
            <p><strong>类型:</strong> ${getTypeName(file.type)}</p>
            <p><strong>日期:</strong> ${file.date}</p>
            <p><strong>标签:</strong> ${file.tag ? file.tag.join(', ') : '无'}</p>
            <p style="margin-top: 20px;">${file.description || '暂无详细内容'}</p>
        `;
    }
    
    const downloadBtn = document.getElementById('download-btn');
    const editBtn = document.getElementById('edit-btn');
    const actionsDiv = document.getElementById('file-actions');
    
    if (file.path) {
        downloadBtn.href = file.path;
        editBtn.href = file.path;
        actionsDiv.classList.remove('hidden');
    } else {
        actionsDiv.classList.add('hidden');
    }
}

function filterFiles() {
    const dateFilter = document.getElementById('date-filter')?.value || '';
    const typeFilter = document.getElementById('type-filter')?.value || '';
    const tagFilter = document.getElementById('tag-filter')?.value.toLowerCase() || '';
    const searchFilter = document.getElementById('search-input')?.value.toLowerCase() || '';
    
    let filtered = [...fileIndex.files];
    
    if (dateFilter) {
        const days = parseInt(dateFilter);
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - days);
        filtered = filtered.filter(f => new Date(f.date) >= cutoff);
    }
    
    if (typeFilter) {
        filtered = filtered.filter(f => f.type === typeFilter);
    }
    
    if (tagFilter) {
        filtered = filtered.filter(f => 
            f.tag && f.tag.some(t => t.toLowerCase().includes(tagFilter))
        );
    }
    
    if (searchFilter) {
        filtered = filtered.filter(f => 
            f.title.toLowerCase().includes(searchFilter)
        );
    }
    
    renderFileTree(filtered);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    loadGraphData();
    loadFileIndex();
});
