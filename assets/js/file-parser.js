function parseMarkdown(content) {
    if (typeof marked !== 'undefined') {
        return marked.parse(content);
    }
    return content;
}

function renderMarkdownElement(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = parseMarkdown(content);
    }
}

async function fetchMarkdownFile(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        return parseMarkdown(content);
    } catch (error) {
        console.error('Error fetching markdown file:', error);
        return '<p class="error">无法加载文件内容</p>';
    }
}

function createFileCard(file) {
    const typeIcons = {
        'expert-profile': '👤',
        'tool-description': '🔧',
        'process-document': '📋',
        'conclusion-report': '📊',
        'other': '📄'
    };
    
    const icon = typeIcons[file.type] || '📄';
    
    return `
        <div class="file-card" data-id="${file.id}" onclick="viewFile('${file.id}')">
            <div class="file-card-icon">${icon}</div>
            <div class="file-card-content">
                <h4 class="file-card-title">${file.title}</h4>
                <div class="file-card-meta">
                    <span class="file-card-date">📅 ${file.date}</span>
                    ${file.tag ? `<span class="file-card-tags">🏷️ ${file.tag.join(', ')}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function downloadFile(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || '';
    link.click();
}

function extractFrontmatter(content) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    const match = content.match(frontmatterRegex);
    
    if (match) {
        const frontmatter = {};
        const lines = match[1].split('\n');
        
        lines.forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length) {
                const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
                frontmatter[key.trim()] = value;
            }
        });
        
        return {
            frontmatter,
            content: content.slice(match[0].length)
        };
    }
    
    return { frontmatter: null, content };
}

function generateToc(content) {
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const toc = [];
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2];
        const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-');
        
        toc.push({ level, text, id });
    }
    
    return toc;
}

function renderToc(toc) {
    if (!toc || toc.length === 0) return '';
    
    let html = '<nav class="toc"><ul>';
    let currentLevel = 0;
    
    toc.forEach(item => {
        if (item.level > currentLevel) {
            html += '<ul>'.repeat(item.level - currentLevel);
        } else if (item.level < currentLevel) {
            html += '</ul>'.repeat(currentLevel - item.level);
        }
        
        html += `<li><a href="#${item.id}">${item.text}</a></li>`;
        currentLevel = item.level;
    });
    
    html += '</ul></nav>';
    return html;
}

function highlightCode(code, language) {
    if (typeof Prism !== 'undefined') {
        return Prism.highlight(code, Prism.languages[language] || Prism.languages.javascript, language);
    }
    return code;
}

window.MarkdownParser = {
    parse: parseMarkdown,
    render: renderMarkdownElement,
    fetch: fetchMarkdownFile,
    createCard: createFileCard,
    formatDate: formatDate,
    download: downloadFile,
    extractFrontmatter: extractFrontmatter,
    generateToc: generateToc,
    renderToc: renderToc,
    highlightCode: highlightCode
};
