// AI Models Data - Complete dataset
const graphData = {
    nodes: [
        // Companies (center nodes)
        { id: 'openai', name: 'OpenAI', group: 'company', color: '#00d4ff', desc: '领先的人工智能研究实验室' },
        { id: 'anthropic', name: 'Anthropic', group: 'company', color: '#a855f7', desc: '专注于AI安全和可解释性' },
        { id: 'google', name: 'Google DeepMind', group: 'company', color: '#00ff88', desc: 'Google旗下AI研究团队' },
        { id: 'moonshot', name: 'Moonshot AI', group: 'company', color: '#ff6b35', desc: '月之暗面AI初创公司' },
        { id: 'deepseek', name: 'DeepSeek', group: 'company', color: '#ff3d8a', desc: '深度求索AI实验室' },
        { id: 'alibaba', name: '阿里云', group: 'company', color: '#fbbf24', desc: '阿里巴巴AI部门' },
        { id: 'zhipu', name: '智谱AI', group: 'company', color: '#3b82f6', desc: '清华大学技术成果转化' },
        { id: 'baidu', name: '百度', group: 'company', color: '#22c55e', desc: '百度AI部门' },
        { id: 'xai', name: 'xAI', group: 'company', color: '#f97316', desc: '马斯克AI公司' },
        { id: 'meta', name: 'Meta AI', group: 'company', color: '#8b5cf6', desc: 'Meta AI研究团队' },
        
        // OpenAI Models
        { id: 'gpt5.2', name: 'GPT-5.2 Codex', group: 'model', parent: 'openai', score: 97, desc: '最新旗舰模型，代码能力最强' },
        { id: 'gpt5', name: 'GPT-5 Pro', group: 'model', parent: 'openai', score: 95, desc: 'GPT-5专业版' },
        { id: 'o1pro', name: 'o1 Pro', group: 'model', parent: 'openai', score: 93, desc: '推理增强模型' },
        { id: 'o1', name: 'o1', group: 'model', parent: 'openai', score: 91, desc: '推理模型' },
        { id: 'gpt4o', name: 'GPT-4o', group: 'model', parent: 'openai', score: 88, desc: '多模态旗舰' },
        
        // Anthropic Models
        { id: 'opus4.6', name: 'Claude Opus 4.6', group: 'model', parent: 'anthropic', score: 95, desc: '最强大的Claude模型' },
        { id: 'sonnet4.6', name: 'Claude Sonnet 4.6', group: 'model', parent: 'anthropic', score: 89, desc: '平衡性能与速度' },
        { id: 'haiku4', name: 'Claude Haiku 4', group: 'model', parent: 'anthropic', score: 82, desc: '快速响应模型' },
        
        // Google Models
        { id: 'gemini3pro', name: 'Gemini 3.1 Pro', group: 'model', parent: 'google', score: 93, desc: 'Google最新旗舰' },
        { id: 'gemini2.5', name: 'Gemini 2.5 Pro', group: 'model', parent: 'google', score: 90, desc: '强推理能力' },
        { id: 'gemini2', name: 'Gemini 2.0 Ultra', group: 'model', parent: 'google', score: 87, desc: '多模态能力强大' },
        
        // Moonshot Models
        { id: 'kimi2.5', name: 'Kimi K2.5', group: 'model', parent: 'moonshot', score: 91, desc: '国产推理模型' },
        { id: 'kimi2', name: 'Kimi K2', group: 'model', parent: 'moonshot', score: 85, desc: '长上下文处理' },
        { id: 'kimi1.5', name: 'Kimi K1.5', group: 'model', parent: 'moonshot', score: 80, desc: 'Kimi系列早期版本' },
        
        // DeepSeek Models
        { id: 'deepseekv3', name: 'DeepSeek V3.2', group: 'model', parent: 'deepseek', score: 87, desc: '开源最强模型' },
        { id: 'deepr1', name: 'DeepSeek R1', group: 'model', parent: 'deepseek', score: 86, desc: '推理能力突出' },
        { id: 'deepseekcoder', name: 'DeepSeek Coder', group: 'model', parent: 'deepseek', score: 83, desc: '代码专用模型' },
        
        // Alibaba Models
        { id: 'qwen3.5', name: 'Qwen3.5', group: 'model', parent: 'alibaba', score: 85, desc: '阿里旗舰模型' },
        { id: 'qwen2.5', name: 'Qwen2.5', group: 'model', parent: 'alibaba', score: 80, desc: '开源系列' },
        { id: 'qwencoder', name: 'Qwen-Coder', group: 'model', parent: 'alibaba', score: 78, desc: '代码模型' },
        
        // Zhipu Models
        { id: 'glm5', name: 'GLM-5', group: 'model', parent: 'zhipu', score: 82, desc: '智谱最新旗舰' },
        { id: 'glm4', name: 'GLM-4', group: 'model', parent: 'zhipu', score: 76, desc: '早期版本' },
        
        // Baidu Models
        { id: 'wenxin4', name: '文心一言4.0', group: 'model', parent: 'baidu', score: 78, desc: '百度旗舰' },
        { id: 'wenxin3.5', name: '文心一言3.5', group: 'model', parent: 'baidu', score: 72, desc: '性价比高' },
        
        // xAI Models
        { id: 'grok4', name: 'Grok 4', group: 'model', parent: 'xai', score: 80, desc: '最新Grok模型' },
        { id: 'grok3', name: 'Grok 3', group: 'model', parent: 'xai', score: 75, desc: '早期版本' },
        
        // Meta Models
        { id: 'llama4', name: 'Llama 4', group: 'model', parent: 'meta', score: 84, desc: 'Meta最新开源' },
        { id: 'llama3.1', name: 'Llama 3.1', group: 'model', parent: 'meta', score: 79, desc: '开源大模型' }
    ],
    links: []
};

// Generate links from parent relationships
graphData.nodes.filter(n => n.group === 'model').forEach(model => {
    graphData.links.push({ source: model.id, target: model.parent });
});

// Benchmark data for each model
const benchmarkData = {
    'gpt5.2': [
        { name: 'ARC-AGI-2', score: '52.9%', rank: 1, category: '推理', desc: '抽象推理基准测试', link: 'https://arcprize.org/leaderboard' },
        { name: 'AIME 2025', score: '100%', rank: 1, category: '数学', desc: '数学竞赛基准', link: 'https://huggingface.co/datasets/AI-MO/aimo-validation' },
        { name: 'MMLU Pro', score: '94.2%', rank: 1, category: '知识', desc: '大规模多任务语言理解', link: 'https://huggingface.co/datasets/TigerResearch/test' },
        { name: 'SWE-bench', score: '85.3%', rank: 1, category: '编程', desc: '软件工程基准', link: 'https://www.swebench.com/' },
        { name: 'HumanEval', score: '95%', rank: 1, category: '编程', desc: '代码生成测试', link: 'https://github.com/openai/human-eval' }
    ],
    'opus4.6': [
        { name: 'SWE-bench Pro', score: '80.9%', rank: 1, category: '编程', desc: '软件工程专业评测', link: 'https://www.swebench.com/' },
        { name: 'HumanEval', score: '92%', rank: 2, category: '编程', desc: '代码生成测试', link: 'https://github.com/openai/human-eval' },
        { name: 'MMLU', score: '88.5%', rank: 2, category: '知识', desc: '多任务语言理解', link: 'https://huggingface.co/datasets/TigerResearch/test' }
    ],
    'gemini3pro': [
        { name: 'MMMU', score: '75.2%', rank: 1, category: '多模态', desc: '多模态理解基准', link: 'https://mmmu-benchmark.github.io/' },
        { name: 'MMLU', score: '87.3%', rank: 2, category: '知识', desc: '大规模多任务测试', link: 'https://huggingface.co/datasets/TigerResearch/test' },
        { name: 'GPQA', score: '74.1%', rank: 1, category: '科学', desc: '科学研究基准', link: 'https://github.com/google-deepmind/gpqa' }
    ],
    'kimi2.5': [
        { name: 'GPQA', score: '87.6%', rank: 1, category: '科学', desc: '科学研究基准第一', link: 'https://github.com/google-deepmind/gpqa' },
        { name: 'AIME 2025', score: '87.6%', rank: 2, category: '数学', desc: '数学竞赛基准', link: 'https://huggingface.co/datasets/AI-MO/aimo-validation' },
        { name: 'MATH', score: '92.3%', rank: 1, category: '数学', desc: '数学推理基准', link: 'https://github.com/hendrycks/math' }
    ],
    'deepseekv3': [
        { name: 'MMLU', score: '88.5%', rank: 3, category: '知识', desc: '开源模型最高分', link: 'https://huggingface.co/datasets/TigerResearch/test' },
        { name: 'HumanEval', score: '85%', rank: 3, category: '编程', desc: '代码生成测试', link: 'https://github.com/openai/human-eval' },
        { name: 'API价格', score: '$0.27/M', rank: 1, category: '性价比', desc: '行业最低API价格', link: 'https://deepseek.com/pricing' }
    ],
    'deepr1': [
        { name: 'AIME 2025', score: '86.7%', rank: 3, category: '数学', desc: '推理能力评测', link: 'https://huggingface.co/datasets/AI-MO/aimo-validation' },
        { name: 'MATH', score: '90.8%', rank: 2, category: '数学', desc: '数学推理基准', link: 'https://github.com/hendrycks/math' }
    ],
    'qwen3.5': [
        { name: 'MMLU', score: '82.3%', rank: 5, category: '知识', desc: '中文开源最强', link: 'https://huggingface.co/datasets/TigerResearch/test' },
        { name: 'CMMLU', score: '91.2%', rank: 1, category: '知识', desc: '中文多任务测试', link: 'https://github.com/FlagAI-Open/FlagEval' }
    ],
    'glm5': [
        { name: 'CMMLU', score: '88.7%', rank: 2, category: '知识', desc: '中文理解基准', link: 'https://github.com/FlagAI-Open/FlagEval' },
        { name: 'MMLU', score: '79.5%', rank: 8, category: '知识', desc: '多任务语言理解', link: 'https://huggingface.co/datasets/TigerResearch/test' }
    ]
};

// Sidebar data
const sidebarData = {
    experts: [
        { name: '李开复', title: '创新工场CEO', desc: 'AI领域知名专家，曾任Google中国区总裁，深度关注AI评测发展', avatar: '👤', links: [{ type: 'twitter', url: 'https://twitter.com/kaifulee' }, { type: 'web', url: 'https://www.chuangplus.com/' }] },
        { name: '图灵的猫', title: 'B站科技UP主', desc: '专注于AI模型深度评测，拥有数十万科技爱好者关注，发布大量AI模型实测视频', avatar: '🐱', links: [{ type: 'bilibili', url: 'https://space.bilibili.com/203145865' }, { type: 'zhihu', url: 'https://www.zhihu.com/peopleTUringDeMao' }] },
        { name: 'Jim Fan', title: 'NVIDIA AI Scientist', desc: '英伟达AI科学家，知名AI评测博主，经常发布AI模型对比评测视频', avatar: '🔬', links: [{ type: 'twitter', url: 'https://twitter.com/DrJimFan' }, { type: 'youtube', url: 'https://www.youtube.com/@JimFan' }] },
        { name: 'Andrej Karpathy', title: 'AI Researcher', desc: 'OpenAI创始成员，AI教育家，创办Neural Networks迷你对课程', avatar: '🧠', links: [{ type: 'twitter', url: 'https://twitter.com/karpathy' }, { type: 'web', url: 'https://karpathy.ai/' }] },
        { name: 'Yann LeCun', title: 'Meta AI Chief', desc: '图灵奖得主，深度学习先驱，Meta AI首席科学家', avatar: '🏆', links: [{ type: 'twitter', url: 'https://twitter.com/ylecun' }, { type: 'web', url: 'https://yann.lecun.com/' }] },
        { name: 'Sam Altman', title: 'OpenAI CEO', desc: 'OpenAI首席执行官，AI领域最具影响力人物之一', avatar: '🚀', links: [{ type: 'twitter', url: 'https://twitter.com/sama' }, { type: 'web', url: 'https://openai.com/' }] },
        { name: 'Dario Amodei', title: 'Anthropic CEO', desc: 'Anthropic联合创始人兼CEO，专注于AI安全研究', avatar: '💜', links: [{ type: 'twitter', url: 'https://twitter.com/dario_amodei' }, { type: 'web', url: 'https://www.anthropic.com/' }] },
        { name: '周鸿祎', title: '360创始人', desc: '360集团创始人，AI领域知名投资人，经常发布AI评测观点', avatar: '👓', links: [{ type: 'weibo', url: 'https://weibo.com/zhouhongyi' }, { type: 'web', url: 'https://www.360.cn/' }] },
        { name: 'Milo', title: 'OpenRouter CTO', desc: 'OpenRouter首席技术官，AI模型评测平台负责人', avatar: '🖥️', links: [{ type: 'twitter', url: 'https://twitter.com/milooprog' }, { type: 'web', url: 'https://openrouter.ai/' }] },
        { name: '极客公园', title: '科技媒体', desc: '知名科技媒体，持续产出AI深度评测报道', avatar: '📱', links: [{ type: 'web', url: 'https://www.geekpark.net/' }, { type: 'weixin', url: 'https://mp.weixin.qq.com/s/geekpark' }] }
    ],
    tools: [
        { 
            name: 'OpenCompass', 
            desc: '上海人工智能实验室开源的大模型评测平台，支持多种评测基准',
            category: '综合评测',
            methods: ['出题测试', '自动评分', '人工复核'],
            link: 'https://opencompass.org.cn/'
        },
        { 
            name: 'EvalScope', 
            desc: '阿里魔搭社区开源的模型评测工具，支持多维度评测',
            category: '综合评测',
            methods: ['基准测试', '性能评估', '成本分析'],
            link: 'https://github.com/modelscope/evalscope'
        },
        { 
            name: 'FlagEval', 
            desc: '智源研究院开源的大模型评测体系，中文评测权威平台',
            category: '中文评测',
            methods: ['CMMLU', 'C-Eval', '知识测试'],
            link: 'https://flageval.bmmlabs.com/'
        },
        { 
            name: 'SWE-bench', 
            desc: '软件工程能力基准，测试模型解决真实编程问题的能力',
            category: '编程能力',
            methods: ['Bug修复', '功能实现', '代码重构'],
            link: 'https://www.swebench.com/'
        },
        { 
            name: 'MMLU', 
            desc: '大规模多任务语言理解测试，涵盖57个学科领域',
            category: '知识能力',
            methods: ['选择题测试', '知识问答', '推理测试'],
            link: 'https://huggingface.co/datasets/TigerResearch/test'
        },
        { 
            name: 'ARC-AGI', 
            desc: '抽象推理基准，测试AI的通用推理能力',
            category: '推理能力',
            methods: ['模式识别', '逻辑推理', '抽象思维'],
            link: 'https://arcprize.org/'
        }
    ],
    reports: [
        { 
            title: 'GPT-5.2深度评测报告', 
            date: '2026-03-01', 
            desc: '推理能力登顶ARC-AGI-2，AIME 2025满分通过，综合评分97分', 
            company: 'OpenAI', 
            views: 12500,
            content: 'GPT-5.2作为OpenAI最新旗舰模型，在多项基准测试中取得突破性进展。ARC-AGI-2抽象推理基准达到52.9%创下新纪录，AIME 2025数学竞赛基准满分通过。编程能力方面，SWEBench达85.3%，HumanEval达95%。多模态理解能力显著提升，MMMU基准达78.2%。',
            benchmarks: [
                { name: 'ARC-AGI-2', score: '52.9%', rank: 1, desc: '抽象推理基准' },
                { name: 'AIME 2025', score: '100%', rank: 1, desc: '数学竞赛' },
                { name: 'SWE-bench', score: '85.3%', rank: 1, desc: '软件工程' },
                { name: 'HumanEval', score: '95%', rank: 1, desc: '代码生成' },
                { name: 'MMLU Pro', score: '94.2%', rank: 1, desc: '多任务理解' }
            ]
        },
        { 
            title: 'Claude 4.6编程实测', 
            date: '2026-02-28', 
            desc: 'SWE-bench达80.9%，编程能力最强，综合评分95分', 
            company: 'Anthropic', 
            views: 9800,
            content: 'Claude Opus 4.6延续了Anthropic在编程能力上的优势，SWEBench Pro评测达到80.9%创下了编程基准的新高。代码理解、bug修复、功能实现等能力全面提升。同时在长上下文处理和对话一致性方面表现优异。',
            benchmarks: [
                { name: 'SWE-bench Pro', score: '80.9%', rank: 1, desc: '软件工程专业评测' },
                { name: 'HumanEval', score: '92%', rank: 2, desc: '代码生成测试' },
                { name: 'MMLU', score: '88.5%', rank: 2, desc: '多任务理解' }
            ]
        },
        { 
            title: 'Kimi K2.5国产之光', 
            date: '2026-02-25', 
            desc: 'GPQA科学评测全球第一，AIME数学第二，综合评分91分', 
            company: 'Moonshot', 
            views: 8500,
            content: '月之暗面的Kimi K2.5在多项国际基准测试中表现亮眼，GPQA科学研究基准达到87.6%位列第一，AIME数学竞赛达87.6%排名第二。MATH数学推理基准达92.3%。长上下文处理能力继续保持领先，支持200万token上下文。',
            benchmarks: [
                { name: 'GPQA', score: '87.6%', rank: 1, desc: '科学研究基准' },
                { name: 'AIME 2025', score: '87.6%', rank: 2, desc: '数学竞赛' },
                { name: 'MATH', score: '92.3%', rank: 1, desc: '数学推理' }
            ]
        },
        { 
            title: 'DeepSeek V3.2开源评测', 
            date: '2026-02-20', 
            desc: '开源模型首次超越闭源，性价比之王，综合评分87分', 
            company: 'DeepSeek', 
            views: 12000,
            content: 'DeepSeek V3.2作为开源模型，首次在多项基准测试中超越闭源模型。API价格仅为$0.27/M，是行业最低。MIT开源协议允许商用。在MMLU达88.5%，HumanEval达85%，是当前最强开源模型。',
            benchmarks: [
                { name: 'MMLU', score: '88.5%', rank: 3, desc: '多任务理解' },
                { name: 'HumanEval', score: '85%', rank: 3, desc: '代码生成' },
                { name: 'API价格', score: '$0.27/M', rank: 1, desc: '性价比最优' }
            ]
        },
        { 
            title: 'Gemini 3.1多模态评测', 
            date: '2026-02-18', 
            desc: 'MMMU多模态理解基准全球第一，综合评分93分', 
            company: 'Google', 
            views: 7600,
            content: 'Gemini 3.1 Pro在多模态领域继续保持领先优势，MMMU多模态理解基准达75.2%位列第一。GPQA科学研究基准达74.1%同样排名第一。视频理解和分析图像能力显著提升。',
            benchmarks: [
                { name: 'MMMU', score: '75.2%', rank: 1, desc: '多模态理解' },
                { name: 'MMLU', score: '87.3%', rank: 2, desc: '多任务理解' },
                { name: 'GPQA', score: '74.1%', rank: 1, desc: '科学研究' }
            ]
        },
        { 
            title: 'Qwen3.5中文能力评测', 
            date: '2026-02-15', 
            desc: 'CMMLU中文评测领先，国产模型新高度，综合评分85分', 
            company: 'Alibaba', 
            views: 6200,
            content: '阿里Qwen3.5在中文评测方面表现突出，CMMLU达91.2%位列第一。MMLU达82.3%。作为开源模型，Qwen3.5支持商用，在中文AI应用生态中占据重要地位。',
            benchmarks: [
                { name: 'CMMLU', score: '91.2%', rank: 1, desc: '中文多任务' },
                { name: 'MMLU', score: '82.3%', rank: 5, desc: '多任务理解' }
            ]
        }
    ],
    trends: {
        months: ['2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03'],
        data: {
            'GPT-5': [85, 88, 91, 93, 94, 97],
            'Claude 4': [82, 85, 88, 91, 93, 95],
            'Gemini 3': [78, 80, 83, 86, 89, 93],
            'Kimi K2': [70, 75, 78, 82, 85, 91],
            'DeepSeek V3': [75, 78, 80, 82, 85, 87]
        }
    }
};

// Global variables
let scene, camera, renderer, controls;
let nodeMeshes = [], edgeLines = [], particleSystem;
let raycaster, mouse;
let labels = [];
let nodes = [], links = [];
let time = 0;
let hoveredNode = null;

// Company colors
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
    
    if (typeof THREE === 'undefined') {
        container.innerHTML = '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#ff3d8a;">Three.js 加载失败，请刷新页面重试</div>';
        return;
    }
    
    if (typeof THREE.OrbitControls === 'undefined') {
        container.innerHTML = '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#ff3d8a;">OrbitControls 加载失败，请刷新页面重试</div>';
        return;
    }
    
    container.innerHTML = '';
    
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050508);
    scene.fog = new THREE.FogExp2(0x050508, 0.0008);
    
    // Camera
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera = new THREE.PerspectiveCamera(55, width / height, 1, 3000);
    camera.position.z = 450;
    
    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);
    
    // Controls - Like x.mitbunny.ai
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 100;
    controls.maxDistance = 900;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
    controls.enablePan = true;
    controls.rotateSpeed = 0.8;
    controls.zoomSpeed = 1.2;
    
    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);
    
    const point1 = new THREE.PointLight(0x00ff88, 1.5, 800);
    point1.position.set(200, 200, 200);
    scene.add(point1);
    
    const point2 = new THREE.PointLight(0x00d4ff, 1.2, 800);
    point2.position.set(-200, -150, 150);
    scene.add(point2);
    
    const point3 = new THREE.PointLight(0xa855f7, 0.8, 600);
    point3.position.set(0, -200, -100);
    scene.add(point3);
    
    // Create particle background
    createParticleBackground();
    
    // Initialize nodes with spherical cluster layout
    initSphericalNodes();
    
    // Create 3D objects
    createMeshes();
    
    // Raycaster for interaction
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    // Events
    window.addEventListener('resize', onResize);
    renderer.domElement.addEventListener('click', onClick);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    
    // Mobile touch support
    let touchStartTime = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    
    renderer.domElement.addEventListener('touchstart', (e) => {
        touchStartTime = Date.now();
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    renderer.domElement.addEventListener('touchend', (e) => {
        const touchDuration = Date.now() - touchStartTime;
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const moveDistance = Math.sqrt(
            Math.pow(touchEndX - touchStartX, 2) + 
            Math.pow(touchEndY - touchStartY, 2)
        );
        
        // If tap is short and didn't move much, treat as click
        if (touchDuration < 300 && moveDistance < 10) {
            // Simulate click at touch position
            const rect = renderer.domElement.getBoundingClientRect();
            const x = ((touchEndX - rect.left) / rect.width) * 2 - 1;
            const y = -((touchEndY - rect.top) / rect.height) * 2 + 1;
            
            mouse.x = x;
            mouse.y = y;
            
            raycaster.setFromCamera(mouse, camera);
            const meshes = nodeMeshes.map(n => n.mesh).filter(m => m);
            const intersects = raycaster.intersectObjects(meshes);
            
            if (intersects.length > 0) {
                const node = intersects[0].object.userData.node;
                showModelPopup(node);
            }
        }
    }, { passive: true });
    
    // Animation
    animate();
    
    // Sidebar
    initSidebar();
    initControls();
}

// Spherical cluster layout like x.mitbunny.ai
function initSphericalNodes() {
    const companies = graphData.nodes.filter(n => n.group === 'company');
    const companyCount = companies.length;
    
    // Position companies on a sphere surface
    companies.forEach((company, idx) => {
        // Golden angle for even distribution on sphere
        const phi = Math.acos(-1 + (2 * idx) / companyCount);
        const theta = Math.sqrt(companyCount * Math.PI) * phi;
        
        const radius = 150;
        company.x = radius * Math.sin(phi) * Math.cos(theta);
        company.y = radius * Math.sin(phi) * Math.sin(theta);
        company.z = radius * Math.cos(phi);
        
        company.vx = 0;
        company.vy = 0;
        company.vz = 0;
    });
    
    // Position models in clusters around their parent company
    graphData.nodes.filter(n => n.group === 'model').forEach(model => {
        const parent = graphData.nodes.find(n => n.id === model.parent);
        if (parent) {
            const siblings = graphData.nodes.filter(n => n.parent === model.parent);
            const idx = siblings.indexOf(model);
            const angle1 = (idx / siblings.length) * Math.PI * 2;
            const angle2 = Math.random() * Math.PI * 0.5;
            
            const radius = 35 + Math.random() * 15;
            model.x = parent.x + Math.cos(angle1) * Math.sin(angle2) * radius;
            model.y = parent.y + Math.sin(angle1) * Math.sin(angle2) * radius;
            model.z = parent.z + Math.cos(angle2) * radius;
            
            model.vx = 0;
            model.vy = 0;
            model.vz = 0;
        }
    });
    
    nodes = graphData.nodes.map(n => ({ ...n }));
    links = graphData.links.map(l => ({ 
        source: nodes.find(n => n.id === l.source),
        target: nodes.find(n => n.id === l.target)
    }));
}

function createParticleBackground() {
    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const color1 = new THREE.Color(0x00ff88);
    const color2 = new THREE.Color(0x00d4ff);
    const color3 = new THREE.Color(0xa855f7);
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const radius = 500 + Math.random() * 500;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi);
        
        const colorChoice = Math.random();
        let color;
        if (colorChoice < 0.33) color = color1;
        else if (colorChoice < 0.66) color = color2;
        else color = color3;
        
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true
    });
    
    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);
}

function createMeshes() {
    // Create node meshes
    nodes.forEach((node, i) => {
        const isCompany = node.group === 'company';
        const radius = isCompany ? 22 : 12 + (node.score || 70) / 20;
        
        // Glow effect
        const glowGeometry = new THREE.SphereGeometry(radius * 1.4, 32, 32);
        const glowMaterial = new THREE.ShaderMaterial({
            uniforms: {
                glowColor: { value: isCompany ? new THREE.Color(node.color) : getCompanyColor(node.parent) },
                viewVector: { value: camera.position }
            },
            vertexShader: `
                uniform vec3 viewVector;
                varying float intensity;
                void main() {
                    vec3 vNormal = normalize(normalMatrix * normal);
                    vec3 vNormel = normalize(normalMatrix * viewVector);
                    intensity = pow(0.7 - dot(vNormal, vNormel), 2.0);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 glowColor;
                varying float intensity;
                void main() {
                    vec3 glow = glowColor * intensity;
                    gl_FragColor = vec4(glow, intensity * 0.6);
                }
            `,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            transparent: true
        });
        
        const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
        glowMesh.position.set(node.x || 0, node.y || 0, node.z || 0);
        scene.add(glowMesh);
        nodeMeshes.push({ mesh: null, glow: glowMesh, node: node });
        
        // Main sphere
        const geometry = new THREE.SphereGeometry(radius, 32, 32);
        const color = isCompany ? new THREE.Color(node.color) : getCompanyColor(node.parent);
        
        const material = new THREE.MeshPhongMaterial({
            color: color,
            emissive: color,
            emissiveIntensity: 0.3,
            shininess: 120,
            specular: 0xffffff,
            specularIntensity: 0.3
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(node.x || 0, node.y || 0, node.z || 0);
        mesh.userData = { node: node, index: i };
        
        scene.add(mesh);
        nodeMeshes[i].mesh = mesh;
        
        // Label with company/model type indicator
        const label = createLabel(node.name, isCompany);
        label.position.set(node.x || 0, (node.y || 0) + radius + 12, node.z || 0);
        scene.add(label);
        labels.push(label);
    });
    
    // Create edges with gradient
    links.forEach(link => {
        const points = [
            new THREE.Vector3(link.source.x || 0, link.source.y || 0, link.source.z || 0),
            new THREE.Vector3(link.target.x || 0, link.target.y || 0, link.target.z || 0)
        ];
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
            color: link.source.color || 0x00ff88,
            transparent: true,
            opacity: 0.25,
            linewidth: 1
        });
        
        const line = new THREE.Line(geometry, material);
        scene.add(line);
        edgeLines.push({ line: line, source: link.source, target: link.target });
    });
}

function createLabel(text, isCompany) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = isCompany ? 512 : 320;
    canvas.height = 64;
    
    ctx.font = isCompany ? 'bold 26px Outfit, sans-serif' : '18px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.roundRect ? ctx.roundRect(0, 0, canvas.width, canvas.height, 8) : ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    
    // Text
    ctx.fillStyle = isCompany ? '#ffffff' : '#e0e0e0';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    
    const material = new THREE.SpriteMaterial({ 
        map: texture, 
        transparent: true, 
        depthTest: false,
        opacity: 0.9
    });
    
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(isCompany ? 80 : 50, isCompany ? 10 : 6.5, 1);
    return sprite;
}

// Force simulation
function updateForces() {
    const alpha = 0.015;
    
    // Link forces
    links.forEach(link => {
        const dx = link.target.x - link.source.x;
        const dy = link.target.y - link.source.y;
        const dz = link.target.z - link.source.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
        const targetDist = link.source.group === 'company' ? 50 : 40;
        const diff = (dist - targetDist) / dist;
        
        link.source.vx += dx * diff * alpha * 0.8;
        link.source.vy += dy * diff * alpha * 0.8;
        link.source.vz += dz * diff * alpha * 0.8;
        link.target.vx -= dx * diff * alpha * 0.8;
        link.target.vy -= dy * diff * alpha * 0.8;
        link.target.vz -= dz * diff * alpha * 0.8;
    });
    
    // Repulsion forces
    nodes.forEach((node1, i) => {
        nodes.forEach((node2, j) => {
            if (i >= j) return;
            
            const dx = node1.x - node2.x;
            const dy = node1.y - node2.y;
            const dz = node1.z - node2.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
            
            if (dist < 60) {
                const force = (60 - dist) / dist * alpha * 2.5;
                node1.vx += dx * force;
                node1.vy += dy * force;
                node1.vz += dz * force;
                node2.vx -= dx * force;
                node2.vy -= dy * force;
                node2.vz -= dz * force;
            }
        });
    });
    
    // Center force - keep on sphere
    const targetRadius = 150;
    nodes.forEach(node => {
        const distFromCenter = Math.sqrt(node.x * node.x + node.y * node.y + node.z * node.z);
        
        if (node.group === 'company') {
            const force = (distFromCenter - targetRadius) * alpha * 0.02;
            node.vx += (node.x / distFromCenter) * force;
            node.vy += (node.y / distFromCenter) * force;
            node.vz += (node.z / distFromCenter) * force;
        }
        
        // Velocity decay
        node.vx *= 0.92;
        node.vy *= 0.92;
        node.vz *= 0.92;
        
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;
    });
    
    // Update meshes
    nodes.forEach((node, i) => {
        if (nodeMeshes[i]) {
            nodeMeshes[i].mesh.position.set(node.x, node.y, node.z);
            nodeMeshes[i].glow.position.set(node.x, node.y, node.z);
            
            const radius = node.group === 'company' ? 22 : 12 + (node.score || 70) / 20;
            if (labels[i]) {
                labels[i].position.set(node.x, node.y + radius + 15, node.z);
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
    
    // Rotate particles slowly
    if (particleSystem) {
        particleSystem.rotation.y += 0.0002;
        particleSystem.rotation.x += 0.0001;
    }
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
    const meshes = nodeMeshes.map(n => n.mesh).filter(m => m);
    const intersects = raycaster.intersectObjects(meshes);
    
    if (intersects.length > 0) {
        const node = intersects[0].object.userData.node;
        showModelPopup(node);
    }
}

function onMouseMove(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const meshes = nodeMeshes.map(n => n.mesh).filter(m => m);
    const intersects = raycaster.intersectObjects(meshes);
    
    if (intersects.length > 0) {
        const node = intersects[0].object.userData.node;
        if (hoveredNode !== node) {
            hoveredNode = node;
            document.body.style.cursor = 'pointer';
            // Highlight effect
            const idx = intersects[0].object.userData.index;
            if (nodeMeshes[idx] && nodeMeshes[idx].mesh) {
                nodeMeshes[idx].mesh.scale.setScalar(1.15);
            }
        }
    } else {
        if (hoveredNode) {
            // Reset scale
            const idx = nodes.findIndex(n => n.id === hoveredNode.id);
            if (nodeMeshes[idx] && nodeMeshes[idx].mesh) {
                nodeMeshes[idx].mesh.scale.setScalar(1);
            }
        }
        hoveredNode = null;
        document.body.style.cursor = 'default';
    }
}

function showModelPopup(node) {
    const popup = document.getElementById('node-popup');
    if (!popup) return;
    
    const benchmarks = benchmarkData[node.id] || [
        { name: 'MMLU', score: (node.score || 80) + '%', rank: Math.floor(Math.random() * 5) + 1, category: '知识', desc: '多任务语言理解基准', link: '#' },
        { name: 'HumanEval', score: Math.floor(70 + Math.random() * 25) + '%', rank: Math.floor(Math.random() * 5) + 1, category: '编程', desc: '代码生成测试', link: '#' }
    ];
    
    // Sort by rank
    benchmarks.sort((a, b) => a.rank - b.rank);
    
    const isCompany = node.group === 'company';
    
    document.getElementById('popup-model-name').textContent = node.name;
    document.getElementById('popup-company').textContent = isCompany ? node.desc : getCompanyName(node.parent);
    document.getElementById('popup-score').textContent = node.score || '--';
    document.getElementById('popup-icon').textContent = node.name.charAt(0).toUpperCase();
    
    // Set icon color based on company
    const color = isCompany ? node.color : getCompanyColor(node.parent).getHexString();
    document.getElementById('popup-icon').style.background = `linear-gradient(135deg, #${color}, #${color}88)`;
    
    document.getElementById('benchmark-list').innerHTML = benchmarks.map(b => `
        <div class="benchmark-item">
            <div class="benchmark-header">
                <span class="benchmark-name">
                    <span class="benchmark-category">${b.category}</span>
                    ${b.name}
                </span>
                <span class="benchmark-score">${b.score}</span>
            </div>
            <div class="benchmark-desc">${b.desc}</div>
            <div class="benchmark-meta">
                <span class="rank-badge">🏆 热度排名 #${b.rank}</span>
                <a href="${b.link}" target="_blank" class="benchmark-link">查看详情 →</a>
            </div>
        </div>
    `).join('');
    
    // Add description for company nodes
    if (isCompany) {
        document.getElementById('benchmark-list').innerHTML = `
            <div class="company-models">
                <h4>旗下模型</h4>
                <div class="model-list">
                    ${nodes.filter(n => n.parent === node.id).map(m => `
                        <div class="model-chip">
                            <span class="model-name">${m.name}</span>
                            <span class="model-score">${m.score}分</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` + document.getElementById('benchmark-list').innerHTML;
    }
    
    popup.classList.add('active');
    
    // Stop auto rotation when popup is open
    controls.autoRotate = false;
}

function animate() {
    requestAnimationFrame(animate);
    
    // Update physics
    updateForces();
    
    // Update controls
    controls.update();
    
    // Render
    renderer.render(scene, camera);
    
    // Update time for animations
    time += 0.01;
}

function initSidebar() {
    const toggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    
    toggle?.addEventListener('click', () => {
        toggle.classList.toggle('active');
        sidebar?.classList.toggle('active');
    });
    
    // Nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.panel-item').forEach(p => p.classList.remove('active'));
            item.classList.add('active');
            document.getElementById('panel-' + item.dataset.panel)?.classList.add('active');
        });
    });
    
    // Experts
    document.getElementById('expert-list').innerHTML = sidebarData.experts.map(e => {
        const linksHTML = e.links ? e.links.map(l => {
            const icons = { twitter: '𝕏', bilibili: '📺', web: '🌐', youtube: '▶️', weibo: '📱', weixin: '💬', zhihu: '📝' };
            return `<a href="${l.url}" target="_blank" class="expert-link" title="${l.type}">${icons[l.type] || '🔗'}</a>`;
        }).join('') : '';
        
        return `<div class="expert-card">
            <div class="expert-avatar">${e.avatar}</div>
            <div class="expert-info">
                <h4>${e.name}</h4>
                <p class="expert-title">${e.title}</p>
                <p class="expert-desc">${e.desc}</p>
                ${linksHTML ? `<div class="expert-links">${linksHTML}</div>` : ''}
            </div>
        </div>`;
    }).join('');
    
    // Tools
    document.getElementById('tool-list').innerHTML = sidebarData.tools.map(t => 
        `<div class="tool-card">
            <div class="tool-header">
                <h4>${t.name}</h4>
                <span class="tool-category">${t.category}</span>
            </div>
            <p class="tool-desc">${t.desc}</p>
            <div class="tool-methods">
                ${t.methods.map(m => `<span class="method-tag">${m}</span>`).join('')}
            </div>
            <a href="${t.link}" target="_blank" class="tool-link">访问官网 →</a>
        </div>`
    ).join('');
    
    // Reports - Clickable
    document.getElementById('report-list').innerHTML = sidebarData.reports.map((r, idx) => 
        `<div class="report-card" onclick="showReportPopup(${idx})">
            <div class="report-header">
                <h4>${r.title}</h4>
                <span class="report-company">${r.company}</span>
            </div>
            <p class="report-desc">${r.desc}</p>
            <div class="report-footer">
                <span class="report-date">📅 ${r.date}</span>
                <span class="report-views">👁️ ${r.views}</span>
            </div>
        </div>`
    ).join('');
    
    // Make showReportPopup global
    window.showReportPopup = function(idx) {
        const report = sidebarData.reports[idx];
        if (!report) return;
        
        let popup = document.getElementById('report-popup');
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'report-popup';
            popup.className = 'report-popup';
            popup.innerHTML = `
                <button class="popup-close" onclick="closeReportPopup()">×</button>
                <div class="report-popup-content"></div>
            `;
            document.body.appendChild(popup);
            
            popup.addEventListener('click', (e) => {
                if (e.target === popup) closeReportPopup();
            });
        }
        
        const benchmarksHTML = report.benchmarks ? report.benchmarks.map(b => `
            <div class="benchmark-row">
                <span class="benchmark-name">${b.name}</span>
                <span class="benchmark-score">${b.score}</span>
                <span class="benchmark-rank">#${b.rank}</span>
                <span class="benchmark-desc">${b.desc}</span>
            </div>
        `).join('') : '';
        
        popup.querySelector('.report-popup-content').innerHTML = `
            <div class="report-popup-header">
                <div class="report-popup-icon">${report.company.charAt(0)}</div>
                <div class="report-popup-title">
                    <h2>${report.title}</h2>
                    <span class="report-popup-company">${report.company}</span>
                </div>
                <div class="report-popup-stats">
                    <span class="stat-views">👁️ ${report.views}</span>
                    <span class="stat-date">📅 ${report.date}</span>
                </div>
            </div>
            <div class="report-popup-body">
                <h3>评测概述</h3>
                <p class="report-content">${report.content}</p>
                <h3>详细评测数据</h3>
                <div class="benchmark-table">
                    ${benchmarksHTML}
                </div>
            </div>
        `;
        
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    window.closeReportPopup = function() {
        const popup = document.getElementById('report-popup');
        if (popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
    
    // Trends - Simple chart visualization
    const trendData = sidebarData.trends;
    let trendHTML = `
        <div class="trend-chart-container">
            <div class="trend-legend">
                ${Object.keys(trendData.data).map((model, i) => {
                    const colors = ['#00d4ff', '#a855f7', '#00ff88', '#ff6b35', '#ff3d8a'];
                    return `<span style="color: ${colors[i]}">● ${model}</span>`;
                }).join(' ')}
            </div>
            <div class="trend-canvas">
                ${trendData.months.map((month, mi) => `
                    <div class="trend-month">
                        <div class="month-label">${month}</div>
                        ${Object.entries(trendData.data).map(([model, values], i) => {
                            const colors = ['#00d4ff', '#a855f7', '#00ff88', '#ff6b35', '#ff3d8a'];
                            const height = (values[mi] / 100) * 100;
                            return `<div class="trend-bar" style="height: ${height}%; background: ${colors[i]};"></div>`;
                        }).join('')}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.getElementById('trend-chart').innerHTML = trendHTML;
}

function initControls() {
    document.getElementById('zoom-in')?.addEventListener('click', () => {
        camera.position.multiplyScalar(0.8);
        if (camera.position.z < 100) camera.position.setLength(100);
    });
    
    document.getElementById('zoom-out')?.addEventListener('click', () => {
        camera.position.multiplyScalar(1.2);
        if (camera.position.z > 900) camera.position.setLength(900);
    });
    
    document.getElementById('reset-view')?.addEventListener('click', () => {
        camera.position.set(0, 0, 450);
        controls.reset();
        controls.autoRotate = true;
    });
    
    document.getElementById('popup-close')?.addEventListener('click', () => {
        document.getElementById('node-popup')?.classList.remove('active');
        controls.autoRotate = true;
    });
    
    document.getElementById('node-popup')?.addEventListener('click', (e) => { 
        if (e.target.id === 'node-popup') {
            document.getElementById('node-popup')?.classList.remove('active');
            controls.autoRotate = true;
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
