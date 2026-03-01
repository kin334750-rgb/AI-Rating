class ForceGraph {
    constructor(container) {
        this.container = container;
        this.width = container.clientWidth;
        this.height = container.clientHeight;
        this.nodes = [];
        this.links = [];
        this.selectedNode = null;
        this.hoveredNode = null;
        this.isDragging = false;
        this.draggedNode = null;
        
        this.colors = {
            'topic': '#ff6b6b',
            'expert': '#4ecdc4',
            'tool': '#45b7d1',
            'process': '#96ceb4',
            'conclusion': '#ffeaa7',
            'literature': '#a29bfe'
        };
        
        this.init();
    }

    init() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x1a1a2e);
        
        this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 0.1, 1000);
        this.camera.position.set(0, 0, 100);
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);
        
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 20;
        this.controls.maxDistance = 300;
        this.controls.enablePan = true;
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        this.scene.add(ambientLight);
        
        const pointLight = new THREE.PointLight(0xffffff, 0.5);
        pointLight.position.set(50, 50, 50);
        this.scene.add(pointLight);
        
        this.raycaster = new THREE.Raycaster();
        this.raycaster.params.Points.threshold = 5;
        this.mouse = new THREE.Vector2();
        this.mouseNDC = new THREE.Vector2();
        
        this.setupEventListeners();
        this.createStarfield();
        this.animate();
    }

    createStarfield() {
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 2000;
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        
        for (let i = 0; i < starCount * i + 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 600;
            positions[i + 1] = (Math.random() - 0.5) * 600;
            positions[i + 2] = (Math.random() - 0.5) * 600;
            
            const color = new THREE.Color();
            color.setHSL(Math.random() * 0.2 + 0.5, 0.8, 0.8);
            colors[i] = color.r;
            colors[i + 1] = color.g;
            colors[i + 2] = color.b;
        }
        
        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const starMaterial = new THREE.PointsMaterial({
            size: 0.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.6
        });
        
        this.stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(this.stars);
    }

    setupEventListeners() {
        this.container.addEventListener('mousedown', (e) => this.onMouseDown(e));
        this.container.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.container.addEventListener('mouseup', (e) => this.onMouseUp(e));
        this.container.addEventListener('click', (e) => this.onClick(e));
        window.addEventListener('resize', () => this.onResize());
        
        const searchInput = document.getElementById('search-input');
        const typeFilter = document.getElementById('type-filter');
        
        if (searchInput) searchInput.addEventListener('input', (e) => this.filterNodes(e.target.value));
        if (typeFilter) typeFilter.addEventListener('change', (e) => this.filterByType(e.target.value));
        
        const resetBtn = document.getElementById('reset-view');
        if (resetBtn) resetBtn.addEventListener('click', () => this.resetView());
    }

    loadData(data) {
        this.clearGraph();
        
        const nodeSizeMap = { 'topic': 3, 'expert': 2.5, 'tool': 2, 'process': 1.8, 'conclusion': 1.5, 'literature': 1.2 };
        
        data.nodes.forEach((nodeData, index) => {
            const size = nodeSizeMap[nodeData.type] || 1.5;
            const geometry = new THREE.SphereGeometry(size, 32, 32);
            const color = this.colors[nodeData.type] || 0xcccccc;
            
            const material = new THREE.MeshPhongMaterial({
                color: color,
                shininess: 80,
                emissive: color,
                emissiveIntensity: 0.15
            });
            
            const mesh = new THREE.Mesh(geometry, material);
            
            const radius = 30 + Math.random() * 20;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            
            mesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
            mesh.position.y = radius * Math.sin(phi) * Math.sin(theta);
            mesh.position.z = radius * Math.cos(phi);
            
            mesh.userData = { ...nodeData, originalColor: color };
            
            const spriteMaterial = new THREE.SpriteMaterial({
                map: this.createTextTexture(nodeData.name),
                transparent: true
            });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.position.copy(mesh.position);
            sprite.position.y += size + 1;
            sprite.scale.set(8, 4, 1);
            mesh.userData.sprite = sprite;
            
            this.scene.add(mesh);
            this.scene.add(sprite);
            
            this.nodes.push({
                mesh: mesh,
                sprite: sprite,
                data: nodeData,
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.1,
                    (Math.random() - 0.5) * 0.1,
                    (Math.random() - 0.5) * 0.1
                ),
                fixed: false,
                originalPosition: mesh.position.clone()
            });
        });
        
        const nodeMap = {};
        this.nodes.forEach(n => nodeMap[n.data.id] = n);
        
        data.links.forEach(linkData => {
            const sourceNode = nodeMap[linkData.source];
            const targetNode = nodeMap[linkData.target];
            
            if (sourceNode && targetNode) {
                const points = [sourceNode.mesh.position.clone(), targetNode.mesh.position.clone()];
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const material = new THREE.LineBasicMaterial({
                    color: 0x4a90d9,
                    transparent: true,
                    opacity: 0.3
                });
                const line = new THREE.Line(geometry, material);
                this.scene.add(line);
                
                this.links.push({
                    line: line,
                    source: sourceNode,
                    target: targetNode
                });
            }
        });
        
        this.startForceLayout();
    }

    createTextTexture(text) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 256;
        canvas.height = 128;
        
        context.fillStyle = 'rgba(0,0,0,0)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        context.font = 'bold 24px -apple-system, BlinkMacSystemFont, sans-serif';
        context.fillStyle = '#ffffff';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        
        const maxWidth = 240;
        let fontSize = 24;
        do {
            context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, sans-serif`;
            fontSize--;
        } while (context.measureText(text).width > maxWidth && fontSize > 12);
        
        context.fillText(text, canvas.width / 2, canvas.height / 2);
        
        const texture = new THREE.CanvasTexture(canvas);
        return texture;
    }

    clearGraph() {
        this.nodes.forEach(node => {
            this.scene.remove(node.mesh);
            if (node.sprite) this.scene.remove(node.sprite);
        });
        this.links.forEach(link => this.scene.remove(link.line));
        this.nodes = [];
        this.links = [];
    }

    startForceLayout() {
        const center = new THREE.Vector3(0, 0, 0);
        const repulsion = 150;
        const attraction = 0.02;
        const damping = 0.95;
        
        const runSimulation = () => {
            this.nodes.forEach(node => {
                if (node.fixed) return;
                
                const force = new THREE.Vector3(0, 0, 0);
                
                this.nodes.forEach(other => {
                    if (node === other) return;
                    const diff = new THREE.Vector3().subVectors(node.mesh.position, other.mesh.position);
                    const dist = diff.length();
                    if (dist < 0.1) return;
                    
                    const repulsionForce = repulsion / (dist * dist);
                    diff.normalize().multiplyScalar(repulsionForce);
                    force.add(diff);
                });
                
                const toCenter = new THREE.Vector3().subVectors(center, node.mesh.position);
                force.add(toCenter.multiplyScalar(attraction));
                
                this.links.forEach(link => {
                    if (link.source === node) {
                        const diff = new THREE.Vector3().subVectors(link.target.mesh.position, node.mesh.position);
                        force.add(diff.multiplyScalar(attraction * 2));
                    } else if (link.target === node) {
                        const diff = new THREE.Vector3().subVectors(link.source.mesh.position, node.mesh.position);
                        force.add(diff.multiplyScalar(attraction * 2));
                    }
                });
                
                node.velocity.add(force.multiplyScalar(0.01));
                node.velocity.multiplyScalar(damping);
                node.mesh.position.add(node.velocity);
                
                if (node.sprite) {
                    node.sprite.position.copy(node.mesh.position);
                    node.sprite.position.y += node.mesh.geometry.parameters.radius + 1;
                }
            });
            
            this.updateLinks();
            
            if (!this.simulationStopped) {
                requestAnimationFrame(runSimulation);
            }
        };
        
        this.simulationStopped = false;
        runSimulation();
    }

    updateLinks() {
        this.links.forEach(link => {
            const positions = link.line.geometry.attributes.position.array;
            positions[0] = link.source.mesh.position.x;
            positions[1] = link.source.mesh.position.y;
            positions[2] = link.source.mesh.position.z;
            positions[3] = link.target.mesh.position.x;
            positions[4] = link.target.mesh.position.y;
            positions[5] = link.target.mesh.position.z;
            link.line.geometry.attributes.position.needsUpdate = true;
        });
    }

    onMouseDown(event) {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        this.raycaster.setFromCamera(this.mouse, camera = this.camera, this.camera);
        
        const meshes = this.nodes.map(n => n.mesh);
        const intersects = this.raycaster.intersectObjects(meshes);
        
        if (intersects.length > 0) {
            this.isDragging = true;
            this.draggedNode = this.nodes.find(n => n.mesh === intersects[0].object);
            if (this.draggedNode) {
                this.draggedNode.fixed = true;
                this.controls.enabled = false;
            }
        }
    }

    onMouseMove(event) {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        this.raycaster.setFromCamera(this.mouse, this.camera);
        
        const meshes = this.nodes.map(n => n.mesh);
        const intersects = this.raycaster.intersectObjects(meshes);
        
        if (intersects.length > 0) {
            this.container.style.cursor = 'pointer';
            if (!this.isDragging) {
                const hovered = this.nodes.find(n => n.mesh === intersects[0].object);
                if (hovered && hovered !== this.hoveredNode) {
                    this.highlightNode(hovered, true);
                    this.hoveredNode = hovered;
                }
            }
        } else {
            this.container.style.cursor = 'grab';
            if (this.hoveredNode) {
                this.highlightNode(this.hoveredNode, false);
                this.hoveredNode = null;
            }
        }
        
        if (this.isDragging && this.draggedNode) {
            const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
            vector.unproject(this.camera);
            const dir = vector.sub(this.camera.position).normalize();
            const distance = -this.camera.position.z / dir.z;
            const pos = this.camera.position.clone().add(dir.multiplyScalar(distance));
            
            this.draggedNode.mesh.position.copy(pos);
            this.draggedNode.sprite.position.copy(pos);
            this.draggedNode.sprite.position.y += this.draggedNode.mesh.geometry.parameters.radius + 1;
            this.draggedNode.originalPosition.copy(pos);
            this.updateLinks();
        }
    }

    onMouseUp(event) {
        if (this.draggedNode) {
            this.draggedNode.fixed = false;
            this.draggedNode = null;
        }
        this.isDragging = false;
        this.controls.enabled = true;
    }

    onClick(event) {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        this.raycaster.setFromCamera(this.mouse, this.camera);
        
        const meshes = this.nodes.map(n => n.mesh);
        const intersects = this.raycaster.intersectObjects(meshes);
        
        if (intersects.length > 0) {
            const clickedNode = this.nodes.find(n => n.mesh === intersects[0].object);
            this.selectNode(clickedNode);
        } else {
            this.deselectNode();
        }
    }

    highlightNode(node, highlight) {
        if (!node) return;
        
        if (highlight) {
            node.mesh.scale.set(1.5, 1.5, 1.5);
            node.mesh.material.emissiveIntensity = 0.5;
            if (node.sprite) node.sprite.visible = true;
        } else {
            node.mesh.scale.set(1, 1, 1);
            node.mesh.material.emissiveIntensity = 0.15;
            if (node.sprite && node !== this.selectedNode) node.sprite.visible = false;
        }
    }

    selectNode(node) {
        if (this.selectedNode) {
            this.highlightNode(this.selectedNode, false);
        }
        
        this.selectedNode = node;
        this.highlightNode(node, true);
        
        if (node.sprite) node.sprite.visible = true;
        
        this.showNodeInfo(node.data);
        this.highlightConnectedNodes(node);
    }

    deselectNode() {
        if (this.selectedNode) {
            this.highlightNode(this.selectedNode, false);
            this.selectedNode = null;
        }
        this.hideNodeInfo();
        this.resetNodeStyles();
    }

    highlightConnectedNodes(node) {
        this.resetNodeStyles();
        
        const connectedIds = new Set();
        connectedIds.add(node.data.id);
        
        this.links.forEach(link => {
            if (link.source === node) {
                connectedIds.add(link.target.data.id);
                link.line.material.opacity = 0.8;
                link.line.material.color.setHex(0xffffff);
            } else if (link.target === node) {
                connectedIds.add(link.source.data.id);
                link.line.material.opacity = 0.8;
                link.line.material.color.setHex(0xffffff);
            }
        });
        
        this.nodes.forEach(n => {
            if (!connectedIds.has(n.data.id)) {
                n.mesh.material.opacity = 0.2;
                n.mesh.material.transparent = true;
                if (n.sprite) n.sprite.visible = false;
            }
        });
    }

    resetNodeStyles() {
        this.nodes.forEach(n => {
            n.mesh.material.opacity = 1;
            n.mesh.material.transparent = false;
            if (n.sprite && n !== this.selectedNode && n !== this.hoveredNode) {
                n.sprite.visible = false;
            }
        });
        
        this.links.forEach(link => {
            link.line.material.opacity = 0.3;
            link.line.material.color.setHex(0x4a90d9);
        });
    }

    showNodeInfo(nodeData) {
        const panel = document.getElementById('node-info');
        const details = document.getElementById('node-details');
        
        if (!panel || !details) return;
        
        const typeNames = {
            'topic': 'AI评测热点',
            'expert': '评测专家',
            'tool': '评测工具',
            'process': '评测流程',
            'conclusion': '评测结论',
            'literature': '学术文献'
        };
        
        let content = `
            <div class="node-detail-item">
                <span class="node-type-tag node-type-${nodeData.type}">${typeNames[nodeData.type]}</span>
            </div>
            <div class="node-detail-item">
                <div class="node-detail-label">名称</div>
                <div class="node-detail-value">${nodeData.name}</div>
            </div>
        `;
        
        if (nodeData.description) {
            content += `
                <div class="node-detail-item">
                    <div class="node-detail-label">描述</div>
                    <div class="node-detail-value">${nodeData.description}</div>
                </div>
            `;
        }
        
        if (nodeData.expertise) {
            content += `
                <div class="node-detail-item">
                    <div class="node-detail-label">专业领域</div>
                    <div class="node-detail-value">${Array.isArray(nodeData.expertise) ? nodeData.expertise.join(', ') : nodeData.expertise}</div>
                </div>
            `;
        }
        
        if (nodeData.features) {
            content += `
                <div class="node-detail-item">
                    <div class="node-detail-label">主要特性</div>
                    <div class="node-detail-value">${Array.isArray(nodeData.features) ? nodeData.features.join(', ') : nodeData.features}</div>
                </div>
            `;
        }
        
        if (nodeData.accuracy) {
            content += `
                <div class="node-detail-item">
                    <div class="node-detail-label">准确率</div>
                    <div class="node-detail-value">${nodeData.accuracy}</div>
                </div>
            `;
        }
        
        details.innerHTML = content;
        panel.classList.add('active');
    }

    hideNodeInfo() {
        const panel = document.getElementById('node-info');
        if (panel) panel.classList.remove('active');
    }

    filterNodes(searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        
        this.nodes.forEach(node => {
            const matches = !searchTerm || 
                node.data.name.toLowerCase().includes(searchTerm) ||
                (node.data.description && node.data.description.toLowerCase().includes(searchTerm));
            
            node.mesh.visible = matches;
            if (node.sprite) node.sprite.visible = matches;
        });
        
        this.links.forEach(link => {
            link.line.visible = link.source.mesh.visible && link.target.mesh.visible;
        });
    }

    filterByType(type) {
        this.nodes.forEach(node => {
            const matches = !type || node.data.type === type;
            node.mesh.visible = matches;
            if (node.sprite) node.sprite.visible = matches;
        });
        
        this.links.forEach(link => {
            link.line.visible = link.source.mesh.visible && link.target.mesh.visible;
        });
    }

    resetView() {
        this.camera.position.set(0, 0, 100);
        this.camera.lookAt(0, 0, 0);
        this.controls.reset();
        this.deselectNode();
    }

    onResize() {
        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;
        
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        this.controls.update();
        
        if (this.stars) {
            this.stars.rotation.y += 0.0002;
            this.stars.rotation.x += 0.0001;
        }
        
        this.renderer.render(this.scene, this.camera);
    }

    stopSimulation() {
        this.simulationStopped = true;
    }

    dispose() {
        this.stopSimulation();
        this.clearGraph();
        this.renderer.dispose();
        this.container.removeChild(this.renderer.domElement);
    }
}

let graph = null;

function init3DGraph() {
    const container = document.getElementById('graph-container');
    if (!container) return;
    
    graph = new ForceGraph(container);
    
    loadGraphData().then(data => {
        graph.loadData(data);
    });
}

async function loadGraphData() {
    try {
        const response = await fetch('assets/data/3d-graph-data.json');
        return await response.json();
    } catch (error) {
        console.warn('加载图谱数据失败，使用默认数据');
        return getDefaultGraphData();
    }
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

document.addEventListener('DOMContentLoaded', init3DGraph);
