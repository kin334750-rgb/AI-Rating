// Data
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
        { name: 'ARC-AGI-2', score: '52.9%', rank: 1, desc: '抽象推理基准', link: '#' },
        { name: 'AIME 2025', score: '100%', rank: 1, desc: '数学竞赛基准', link: '#' },
        { name: 'MMLU', score: '92%', rank: 1, desc: '多任务语言理解', link: '#' }
    ],
    'opus4.6': [
        { name: 'SWE-bench Pro', score: '80.9%', rank: 1, desc: '代码修复基准', link: '#' },
        { name: 'HumanEval', score: '92%', rank: 1, desc: '代码生成基准', link: '#' }
    ],
    'gemini3pro': [
        { name: '12项基准', score: '第一', rank: 1, desc: '综合评测12项第一', link: '#' },
        { name: '编程成本', score: '<50%', rank: 1, desc: '性价比最优', link: '#' }
    ],
    'kimi2.5': [
        { name: 'GPQA', score: '87.6%', rank: 1, desc: '科学研究基准第一', link: '#' },
        { name: 'AIME 2025', score: '87.6%', rank: 2, desc: '数学竞赛基准', link: '#' }
    ],
    'deepseekv3': [
        { name: 'API价格', score: '$0.27/M', rank: 1, desc: '行业最低API价格', link: '#' },
        { name: '开源协议', score: 'MIT', rank: 1, desc: '完全开源可商用', link: '#' }
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

// Global variables
let scene, camera, renderer, controls;
let nodeMeshes = [], edgeLines = [];
let raycaster, mouse;
let labels = [];
let nodes = [], links = [];
let time = 0;

function getCompanyColor(companyId) {
    const company = graphData.nodes.find(n => n.id === companyId);
    return company ? new THREE.Color(company.color) : new THREE.Color(0x666666);
}

function getCompanyName(companyId) {
    const company = graphData.nodes.find(n => n.id === companyId);
    return company ? company.name : '';
}

function init() {
    const container = document.getElementById('3d-graph');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);
    
    // Camera
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera = new THREE.PerspectiveCamera(60, width / height, 1, 2000);
    camera.position.z = 350;
    
    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 100;
    controls.maxDistance = 800;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    
    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);
    
    const point1 = new THREE.PointLight(0x00ff88, 0.8, 500);
    point1.position.set(150, 150, 150);
    scene.add(point1);
    
    const point2 = new THREE.PointLight(0x00d4ff, 0.6, 500);
    point2.position.set(-150, -100, 100);
    scene.add(point2);
    
    // Initialize nodes with positions
    initNodes();
    
    // Create 3D objects
    createMeshes();
    
    // Raycaster
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    // Events
    window.addEventListener('resize', onResize);
    renderer.domElement.addEventListener('click', onClick);
    
    // Animation
    animate();
    
    // Sidebar
    initSidebar();
    initControls();
}

function initNodes() {
    const companies = graphData.nodes.filter(n => n.group === 'company');
    
    graphData.nodes.forEach((node, index) => {
        const isCompany = node.group === 'company';
        
        if (isCompany) {
            const idx = companies.indexOf(node);
            const angle = (idx / companies.length) * Math.PI * 2;
            node.x = Math.cos(angle) * 130;
            node.y = Math.sin(angle) * 80;
            node.z = 0;
        } else {
            const parent = graphData.nodes.find(n => n.id === node.parent);
            if (parent) {
                const siblings = graphData.nodes.filter(n => n.parent === node.parent);
                const idx = siblings.indexOf(node);
                const angle = (idx / siblings.length) * Math.PI * 2;
                node.x = parent.x + Math.cos(angle) * 45;
                node.y = parent.y + Math.sin(angle) * 45;
                node.z = (Math.random() - 0.5) * 20;
            }
        }
        
        node.vx = 0;
        node.vy = 0;
        node.vz = 0;
    });
    
    nodes = graphData.nodes.map(n => ({ ...n }));
    links = graphData.links.map(l => ({ 
        source: nodes.find(n => n.id === l.source),
        target: nodes.find(n => n.id === l.target)
    }));
}

function createMeshes() {
    // Create node meshes
    nodes.forEach((node, i) => {
        const isCompany = node.group === 'company';
        const radius = isCompany ? 18 : 10 + (node.score || 70) / 15;
        
        const geometry = new THREE.SphereGeometry(radius, 32, 32);
        const color = isCompany ? new THREE.Color(node.color) : getCompanyColor(node.parent);
        
        const material = new THREE.MeshPhongMaterial({
            color: color,
            emissive: color,
            emissiveIntensity: 0.2,
            shininess: 100
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(node.x || 0, node.y || 0, node.z || 0);
        mesh.userData = { node: node, index: i };
        
        scene.add(mesh);
        nodeMeshes.push(mesh);
        
        // Label
        const label = createLabel(node.name);
        label.position.set(node.x || 0, (node.y || 0) + radius + 10, node.z || 0);
        scene.add(label);
        labels.push(label);
    });
    
    // Create edges
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.3
    });
    
    links.forEach(link => {
        const geometry = new THREE.BufferGeometry();
        geometry.setFromPoints([
            new THREE.Vector3(link.source.x || 0, link.source.y || 0, link.source.z || 0),
            new THREE.Vector3(link.target.x || 0, link.target.y || 0, link.target.z || 0)
        ]);
        
        const line = new THREE.Line(geometry, lineMaterial);
        scene.add(line);
        edgeLines.push({ line: line, source: link.source, target: link.target });
    });
}

// Simple force simulation
function updateForces() {
    const alpha = 0.02;
    
    // Link forces
    links.forEach(link => {
        const dx = link.target.x - link.source.x;
        const dy = link.target.y - link.source.y;
        const dz = link.target.z - link.source.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
        const diff = (dist - 60) / dist;
        
        link.source.vx += dx * diff * alpha * 0.5;
        link.source.vy += dy * diff * alpha * 0.5;
        link.source.vz += dz * diff * alpha * 0.5;
        link.target.vx -= dx * diff * alpha * 0.5;
        link.target.vy -= dy * diff * alpha * 0.5;
        link.target.vz -= dz * diff * alpha * 0.5;
    });
    
    // Repulsion forces
    nodes.forEach((node1, i) => {
        nodes.forEach((node2, j) => {
            if (i >= j) return;
            
            const dx = node1.x - node2.x;
            const dy = node1.y - node2.y;
            const dz = node1.z - node2.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
            
            if (dist < 80) {
                const force = (80 - dist) / dist * alpha * 2;
                node1.vx += dx * force;
                node1.vy += dy * force;
                node1.vz += dz * force;
                node2.vx -= dx * force;
                node2.vy -= dy * force;
                node2.vz -= dz * force;
            }
        });
    });
    
    // Center force
    nodes.forEach(node => {
        node.vx -= node.x * alpha * 0.01;
        node.vy -= node.y * alpha * 0.01;
        node.vz -= node.z * alpha * 0.005;
        
        // Velocity decay
        node.vx *= 0.9;
        node.vy *= 0.9;
        node.vz *= 0.9;
        
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;
    });
    
    // Update meshes
    nodes.forEach((node, i) => {
        if (nodeMeshes[i]) {
            nodeMeshes[i].position.set(node.x, node.y, node.z);
            
            if (labels[i]) {
                labels[i].position.set(node.x, node.y + 25, node.z);
            }
        }
    });
    
    // Update edges
    edgeLines.forEach(edge => {
        const positions = edge.line.geometry.attributes.position.array;
        positions[0] = edge.source.x;
        positions[1] = edge.source.y;
        positions[2] = edge.source.z;
        positions[3] = edge.target.x;
        positions[4] = edge.target.y;
        positions[5] = edge.target.z;
        edge.line.geometry.attributes.position.needsUpdate = true;
    });
}

function createLabel(text) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 64;
    
    ctx.font = 'bold 22px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, 128, 40);
    
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(50, 12.5, 1);
    return sprite;
}

function onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

function onClick(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(nodeMeshes);
    
    if (intersects.length > 0) {
        const node = intersects[0].object.userData.node;
        showModelPopup(node);
    }
}

function showModelPopup(node) {
    const popup = document.getElementById('node-popup');
    if (!popup) return;
    
    const benchmarks = benchmarkData[node.id] || [
        { name: 'MMLU', score: (node.score || 80) + '%', rank: 3, desc: '多任务语言理解', link: '#' }
    ];
    
    document.getElementById('popup-model-name').textContent = node.name;
    document.getElementById('popup-company').textContent = node.group === 'company' ? 'AI公司' : getCompanyName(node.parent);
    document.getElementById('popup-score').textContent = node.score || '--';
    document.getElementById('popup-icon').textContent = node.name.charAt(0);
    
    document.getElementById('benchmark-list').innerHTML = benchmarks.map(b => `
        <div class="benchmark-item">
            <div class="benchmark-header">
                <span class="benchmark-name">${b.name}</span>
                <span class="benchmark-score">${b.score}</span>
            </div>
            <div class="benchmark-desc">${b.desc}</div>
            <div class="benchmark-meta">
                <span>🔥 热度排名 #${b.rank}</span>
                <a href="${b.link}" target="_blank">查看详情 →</a>
            </div>
        </div>
    `).join('');
    
    popup.classList.add('active');
}

function animate() {
    requestAnimationFrame(animate);
    
    // Update physics
    updateForces();
    
    controls.update();
    renderer.render(scene, camera);
}

function initSidebar() {
    const toggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    
    toggle?.addEventListener('click', () => {
        toggle.classList.toggle('active');
        sidebar?.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.panel-item').forEach(p => p.classList.remove('active'));
            item.classList.add('active');
            document.getElementById('panel-' + item.dataset.panel)?.classList.add('active');
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
    
    document.getElementById('trend-chart').innerHTML = '<p>📈 趋势图表展示区<br><br><span style="color: var(--text-muted);">GPT系列评分稳定上升</span></p>';
}

function initControls() {
    document.getElementById('zoom-in')?.addEventListener('click', () => camera.position.multiplyScalar(0.8));
    document.getElementById('zoom-out')?.addEventListener('click', () => camera.position.multiplyScalar(1.2));
    document.getElementById('reset-view')?.addEventListener('click', () => { camera.position.set(0, 0, 350); controls.reset(); });
    document.getElementById('popup-close')?.addEventListener('click', () => document.getElementById('node-popup')?.classList.remove('active'));
    document.getElementById('node-popup')?.addEventListener('click', (e) => { 
        if (e.target.id === 'node-popup') document.getElementById('node-popup')?.classList.remove('active'); 
    });
}

window.addEventListener('load', init);
