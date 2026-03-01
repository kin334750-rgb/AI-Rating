const feedData = [
    { id: 1, source: 'bilibili', title: '从夯到拉，锐评2026全球通用AI助手排名', author: '软件侠何二', likes: 680, views: '36.0万', time: '2026-01-08' },
    { id: 2, source: 'github', title: 'DeepSeek-V3-0324 发布，MIT许可证', author: 'deepseek-ai', stars: '89.5K', time: '2026-03-01' },
    { id: 3, source: 'twitter', title: 'Sam Altman: GPT-5将在下周发布', author: '@sama', likes: '12.5K', retweets: '3.2K', time: '2026-03-01' },
    { id: 4, source: 'bilibili', title: '全球六大顶级AI免费使用教程', author: '月映万川_Boo', likes: 920, views: '38.5万', time: '2026-01-10' },
    { id: 5, source: 'github', title: 'Qwen3-235B 发布，阿里开源最强模型', author: 'Qwen', stars: '26.8K', time: '2026-02-28' },
    { id: 6, source: 'zhihu', title: '2026年AI大模型评测：GPT-5.2 vs Claude 4.6', author: '图灵AI评测', likes: 2340, comments: 567, time: '2026-02-25' },
    { id: 7, source: 'twitter', title: 'Anthropic发布Claude 4.6，编程能力突破80%', author: '@dario_amodei', likes: '8.7K', retweets: '1.9K', time: '2026-02-28' },
    { id: 8, source: 'bilibili', title: 'Kimi K2.5 vs DeepSeek V3.2 中国开源模型对比', author: 'AI实验室', likes: 450, views: '5.2万', time: '2026-02-26' }
];

const rankingData = [
    { name: 'GPT-5.2 Codex', company: 'OpenAI', score: 97 },
    { name: 'Claude Opus 4.6', company: 'Anthropic', score: 95 },
    { name: 'Gemini 3.1 Pro', company: 'Google', score: 93 },
    { name: 'Kimi K2.5', company: 'Moonshot AI', score: 91 },
    { name: 'Claude Sonnet 4.6', company: 'Anthropic', score: 89 },
    { name: 'DeepSeek V3.2', company: '深度求索', score: 87 },
    { name: 'Qwen3.5', company: '阿里云', score: 85 },
    { name: 'GLM-5', company: '智谱AI', score: 82 },
    { name: 'Grok 4', company: 'xAI', score: 80 },
    { name: '文心一言4.0', company: '百度', score: 78 }
];

let currentSource = 'all';

function init() {
    renderFeed();
    renderRanking();
    setupEventListeners();
    startAutoRefresh();
}

function renderFeed() {
    const container = document.getElementById('feed-content');
    let filteredData = currentSource === 'all' ? feedData : feedData.filter(item => item.source === currentSource);
    
    container.innerHTML = filteredData.map(item => `
        <div class="feed-item ${item.id <= 3 ? 'new' : ''}">
            <div class="feed-header">
                <div class="feed-source">
                    <span class="source-icon ${item.source}">${getSourceIcon(item.source)}</span>
                    <span>${getSourceName(item.source)}</span>
                </div>
                <span class="feed-time">${item.time}</span>
            </div>
            <div class="feed-title">${item.title}</div>
            <div class="feed-meta">
                ${item.author ? `<span>👤 ${item.author}</span>` : ''}
                ${item.views ? `<span>👁 ${item.views}</span>` : ''}
                ${item.likes ? `<span>❤ ${item.likes}</span>` : ''}
                ${item.stars ? `<span>⭐ ${item.stars}</span>` : ''}
            </div>
        </div>
    `).join('');
}

function renderRanking() {
    const container = document.getElementById('ranking-list');
    container.innerHTML = rankingData.map((item, index) => `
        <div class="ranking-item ${index < 3 ? 'top-3' : ''}">
            <div class="ranking-rank">${index + 1}</div>
            <div class="ranking-info">
                <div class="ranking-name">${item.name}</div>
                <div class="ranking-company">${item.company}</div>
            </div>
            <div class="ranking-score">
                <div class="score-bar"><div class="score-fill" style="width: ${item.score}%"></div></div>
                <span class="score-value">${item.score}</span>
            </div>
        </div>
    `).join('');
    
    updateLastUpdateTime();
}

function setupEventListeners() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSource = btn.dataset.source;
            renderFeed();
        });
    });
}

function startAutoRefresh() {
    setInterval(updateLastUpdateTime, 60000);
}

function updateLastUpdateTime() {
    const now = new Date();
    const el = document.getElementById('last-update');
    if (el) el.textContent = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
}

function getSourceIcon(source) {
    return { bilibili: 'B', github: 'GH', twitter: 'X', zhihu: '知', arxiv: 'ar' }[source] || '•';
}

function getSourceName(source) {
    return { bilibili: 'B站', github: 'GitHub', twitter: 'X', zhihu: '知乎', arxiv: 'arXiv' }[source] || source;
}

document.addEventListener('DOMContentLoaded', init);
