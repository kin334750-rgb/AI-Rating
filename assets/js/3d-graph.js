let scene, camera, renderer, controls;
let nodes = [], edges = [];
let raycaster, mouse;
let selectedNode = null;
let animationId;

const graphData = {
    nodes: [
        { id: 'openai', name: 'OpenAI', group: 'company', color: '#00d4ff' },
        { id: 'gpt5.2', name: 'GPT-5.2 Codex', group: 'model', parent: 'openai', score: 97 },
        { id: 'gpt5', name: 'GPT-5', group: 'model', parent: 'openai', score: 95 },
        { id: 'o1', name: 'o1 Pro', group: 'model', parent: 'openai', score: 93 },
        
        { id: 'anthropic', name: 'Anthropic', group: 'company', color: '#a855f7' },
        { id: 'opus4.6', name: 'Claude Opus 4.6', group: 'model', parent: 'anthropic', score: 95 },
        { id: 'sonnet4.6', name: 'Claude Sonnet 4.6', group: 'model', parent: 'anthropic', score: 89 },
        
        { id: 'google', name: 'Google', group: 'company', color: '#00ff88' },
        { id: 'gemini3pro', name: 'Gemini 3.1 Pro', group: 'model', parent: 'google', score: 93 },
        { id: 'gemini2.5', name: 'Gemini 2.5 Pro', group: 'model', parent: 'google', score: 90 },
        
        { id: 'moonshot', name: 'Moonshot AI', group: 'company', color: '#ff6b35' },
        { id: 'kimi2.5', name: 'Kimi K2.5', group: 'model', parent: 'moonshot', score: 91 },
        { id: 'kimi2', name: 'Kimi K2', group: 'model', parent: 'moonshot', score: 85 },
        
        { id: 'deepseek', name: 'DeepSeek', group: 'company', color: '#ff3d8a' },
        { id: 'deepseekv3', name: 'DeepSeek V3.2', group: 'model', parent: 'deepseek', score: 87 },
        { id: 'deepr1', name: 'DeepSeek R1', group: 'model', parent: 'deepseek', score: 86 },
        
        { id: 'alibaba', name: '阿里云', group: 'company', color: '#fbbf24' },
        { id: 'qwen3.5', name: 'Qwen3.5', group: 'model', parent: 'alibaba', score: 85 },
        { id: 'qwen2.5', name: 'Qwen2.5', group: 'model', parent: 'alibaba', score: 80 },
        
        { id: 'zhipu', name: '智谱AI', group: 'company', color: '#3b82f6' },
        { id: 'glm5', name: 'GLM-5', group: 'model', parent: 'zhipu', score: 82 },
        
        { id: 'baidu', name: '百度', group: 'company', color: '#22c55e' },
        { id: 'wenxin4', name: '文心一言4.0', group: 'model', parent: 'baidu', score: 78 },
        
        { id: 'xai', name: 'xAI', group: 'company', color: '#f97316' },
        { id: 'grok4', name: 'Grok 4', group: 'model', parent: 'xai', score: 80 }
    ],
    links: [
        { source: 'gpt5.2', target: 'openai' }, { source: 'gpt5', target: 'openai' }, { source: 'o1', target: 'openai' },
        { source: 'opus4.6', target: 'anthropic' }, { source: 'sonnet4.6', target: 'anthropic' },
        { source: 'gemini3pro', target: 'google' }, { source: 'gemini2.5', target: 'google' },
        { source: 'kimi2.5', target: 'moonshot' }, { source: 'kimi2', target: 'moonshot' },
        { source: 'deepseekv3', target: 'deepseek' }, { source: 'deepr1', target: 'deepseek' },
        { source: 'qwen3.5', target: 'alibaba' }, { source: 'qwen2.5', target: 'alibaba' },
        { source: 'glm5', target: 'zhipu' }, { source: 'wenxin4', target: 'baidu' }, { source: 'grok4', target: 'xai' }
    ]
};

const benchmarkData = {
    'gpt5.2': [
        { name: 'ARC-AGI-2', score: '52.9%', rank: 1, desc: '抽象推理基准' },
        { name: 'AIME 2025', score: '100%', rank: 1, desc: '数学竞赛基准' },
        { name: 'MMLU', score: '92%', rank: 1, desc: '多任务语言理解' }
    ],
    'opus4.6': [
        { name: 'SWE-bench Pro', score: '80.9%', rank: 1, desc: '代码修复基准' },
        { name: 'HumanEval', score: '92%', rank: 1, desc: '代码生成基准' }
    ],
    'gemini3pro': [
        { name: '12项基准', score: '第一', rank: 1, desc: '综合评测' },
        { name: '编程成本', score: '<50%', rank: 1, desc: '性价比最优' }
    ],
    'kimi2.5': [
        { name: 'GPQA', score: '87.6%', rank: 1, desc: '科学研究基准' },
        { name: 'AIME 2025', score: '87.6%', rank: 2, desc: '数学竞赛基准' }
    ],
    'deepseekv3': [
        { name: 'API价格', score: '$0.27/M', rank: 1, desc: '行业最低' },
        { name: '开源协议', score: 'MIT', rank: 1, desc: '完全开源' }
    ]
};

const sidebarData = {
    experts: [
        { name: '李开复', title: '创新工场CEO', desc: 'AI领域知名专家' },
        { name: '图灵的猫', title: 'B站科技UP主', desc: 'AI模型深度评测' }
    ],
    tools: [
        { name: 'OpenCompass', desc: '上海人工智能实验室开源' },
        { name: 'EvalScope', desc: '阿里魔搭社区开源' },
        { name: 'FlagEval', desc: '智源研究院评测' }
    ],
    reports: [
        { title: 'GPT-5.2深度评测', date: '2026-03-01', desc: '推理能力登顶' },
        { title: 'Claude 4.6编程实测', date: '2026-02-28', desc: 'SWE-bench达80.9%' }
    ]
};

function getCompanyColor(companyId) {
    const company = graphData.nodes.find(n => n.id === companyId);
    return company ? new THREE.Color(company.color) : new THREE.Color(0x666666);
}

function getCompanyName(companyId) {
    const company = graphData.nodes.find(n => n.id === companyId);
    return company ? company.name : '';
}

function initGraph() {
    const container = document.getElementById('3d-graph');
    if (!container) return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);
    
    camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    camera.position.z = 400;
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 100;
    controls.maxDistance = 800;
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x00ff88, 1, 1000);
    pointLight.position.set(200, 200, 200);
    scene.add(pointLight);
    
    initNodes();
    initEdges();
    initLabels();
    
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    window.addEventListener('resize', onWindowResize);
    container.addEventListener('click', onMouseClick);
    
    animate();
    
    initSidebar();
    initControls();
}

function initNodes() {
    const companyGroups = {};
    
    graphData.nodes.forEach((node, index) => {
        if (node.group === 'company') {
            const angle = (index / 8) * Math.PI * 2;
            const radius = 150;
            node.x = Math.cos(angle) * radius;
            node.y = Math.sin(angle) * radius * 0.6;
            node.z = 0;
            companyGroups[node.id] = { x: node.x, y: node.y, z: node.z };
        }
    });
    
    graphData.nodes.forEach(node => {
        if (node.group === 'model') {
            const parent = companyGroups[node.parent];
            if (parent) {
                const siblings = graphData.nodes.filter(n => n.parent === node.parent);
                const idx = siblings.indexOf(node);
                const angle = (idx / siblings.length) * Math.PI * 2;
                const radius = 50 + Math.random() * 20;
                node.x = parent.x + Math.cos(angle) * radius;
                node.y = parent.y + Math.sin(angle) * radius;
                node.z = (Math.random() - 0.5) * 30;
            }
        }
        
        const geometry = new THREE.SphereGeometry(
            node.group === 'company' ? 15 : 8 + (node.score || 70) / 20, 
            32, 32
        );
        const color = node.group === 'company' ? new THREE.Color(node.color) : getCompanyColor(node.parent);
        const material = new THREE.MeshPhongMaterial({ 
            color: color,
            emissive: color,
            emissiveIntensity: 0.2,
            shininess: 100
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(node.x || 0, node.y || 0, node.z || 0);
        mesh.userData = { node: node };
        
        scene.add(mesh);
        nodes.push(mesh);
    });
}

function initEdges() {
    const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x00ff88, 
        transparent: true, 
        opacity: 0.3 
    });
    
    graphData.links.forEach(link => {
        const sourceNode = graphData.nodes.find(n => n.id === link.source);
        const targetNode = graphData.nodes.find(n => n.id === link.target);
        
        if (sourceNode && targetNode) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(sourceNode.x || 0, sourceNode.y || 0, sourceNode.z || 0),
                new THREE.Vector3(targetNode.x || 0, targetNode.y || 0, targetNode.z || 0)
            ]);
            const line = new THREE.Line(geometry, lineMaterial);
            scene.add(line);
        }
    });
}

function initLabels() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 64;
    
    graphData.nodes.forEach(node => {
        context.clearRect(0, 0, 256, 64);
        context.fillStyle = 'white';
        context.font = 'bold 24px Outfit, sans-serif';
        context.textAlign = 'center';
        context.fillText(node.name, 128, 40);
        
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(40, 10, 1);
        sprite.position.set(node.x || 0, (node.y || 0) + 20, node.z || 0);
        scene.add(sprite);
    });
}

function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

function onMouseClick(event) {
    const container = document.getElementById('3d-graph');
    const rect = container.getBoundingClientRect();
    
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(nodes);
    
    if (intersects.length > 0) {
        const node = intersects[0].object.userData.node;
        showModelPopup(node);
    }
}

function showModelPopup(node) {
    const popup = document.getElementById('node-popup');
    if (!popup) return;
    
    const benchmarks = benchmarkData[node.id] || [
        { name: 'MMLU', score: (node.score || 80) + '%', rank: 3, desc: '多任务语言理解' }
    ];
    
    document.getElementById('popup-model-name').textContent = node.name;
    document.getElementById('popup-company').textContent = getCompanyName(node.parent);
    document.getElementById('popup-score').textContent = node.score || '--';
    document.getElementById('popup-icon').textContent = node.name.charAt(0);
    
    document.getElementById('benchmark-list').innerHTML = benchmarks.map(b => `
        <div class="benchmark-item">
            <div class="benchmark-header">
                <span class="benchmark-name">${b.name}</span>
                <span class="benchmark-score">${b.score}</span>
            </div>
            <div class="benchmark-desc">${b.desc}</div>
            <div class="benchmark-meta"><span>热度排名 #${b.rank}</span></div>
        </div>
    `).join('');
    
    popup.classList.add('active');
}

function animate() {
    animationId = requestAnimationFrame(animate);
    controls.update();
    
    const time = Date.now() * 0.001;
    nodes.forEach((node, i) => {
        if (graphData.nodes[i] && graphData.nodes[i].group === 'company') {
            node.rotation.y = time * 0.2;
        }
    });
    
    renderer.render(scene, camera);
}

function initSidebar() {
    const toggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            sidebar.classList.toggle('active');
        });
    }
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.panel-item').forEach(p => p.classList.remove('active'));
            item.classList.add('active');
            document.getElementById('panel-' + item.dataset.panel).classList.add('active');
        });
    });
    
    document.getElementById('expert-list').innerHTML = sidebarData.experts.map(e => 
        `<div class="expert-card"><h4>${e.name}</h4><p><strong>${e.title}</strong></p><p>${e.desc}</p></div>`
    ).join('');
    
    document.getElementById('tool-list').innerHTML = sidebarData.tools.map(t => 
        `<div class="tool-card"><h4>${t.name}</h4><p>${t.desc}</p></div>`
    ).join('');
    
    document.getElementById('report-list').innerHTML = sidebarData.reports.map(r => 
        `<div class="report-card"><h4>${r.title}</h4><p>${r.desc}</p><div class="report-date">${r.date}</div></div>`
    ).join('');
    
    document.getElementById('trend-chart').innerHTML = '<p>📈 趋势图表展示区<br><br><span style="color: var(--text-muted);">近期GPT系列评分稳定上升</span></p>';
}

function initControls() {
    document.getElementById('zoom-in')?.addEventListener('click', () => {
        camera.position.multiplyScalar(0.8);
    });
    
    document.getElementById('zoom-out')?.addEventListener('click', () => {
        camera.position.multiplyScalar(1.2);
    });
    
    document.getElementById('reset-view')?.addEventListener('click', () => {
        camera.position.set(0, 0, 400);
        controls.reset();
    });
    
    document.getElementById('popup-close')?.addEventListener('click', () => {
        document.getElementById('node-popup').classList.remove('active');
    });
    
    document.getElementById('node-popup')?.addEventListener('click', (e) => {
        if (e.target.id === 'node-popup') {
            document.getElementById('node-popup').classList.remove('active');
        }
    });
}
