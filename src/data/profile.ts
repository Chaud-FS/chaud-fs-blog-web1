export const profile = {
  name: 'Chaud.',
  nameEn: 'Chaud',
  avatar: '/avatar.jpg',
  role: 'AI 系统工程师',
  roleEn: 'AI Systems Engineer',
  tagline:
    '用大模型、计算机视觉与具身智能，把研究原型推进到可用的工程系统。',
  email: 'chaud@qq.com',
  phone: '159••••1430',
  wechat: 'Chaud_WX',
  github: 'https://github.com/Chaud-FS',
  summary:
    '本科就读于哈尔滨信息工程学院人工智能专业（GPA 3.8/4.0，专业前 5%），研究方向为数据智能，辅修智能硬件与具身智能系统。熟练掌握 PyTorch / TensorFlow 等深度学习框架，具备目标检测、实例分割与视觉识别经验；熟悉 LLM 应用开发（RAG / Agent / LangChain / MCP）；在 ROS2 + MoveIt2 具身智能仿真系统中有完整的「感知—决策—执行」链路实践。',
}

export const education = {
  school: '哈尔滨信息工程学院',
  college: '电子工程学院',
  major: '人工智能',
  degree: '学士',
  period: '2023.09 – 2027.07',
  gpa: '3.8 / 4.0',
  rank: '专业前 5%',
  thesis: '《基于 YOLOE-26 的实时开放词汇实例分割研究》',
  minor: '智能硬件与具身智能系统',
  courses: [
    '图像处理',
    '自然语言处理',
    '语音信号处理',
    '神经网络与深度学习',
    '机器人技术基础',
    'ROS 系统基础',
    '数据结构与算法',
    '模式识别与机器学习',
    '知识表示与推理',
    '数字信号处理',
    '智能识别与感知技术',
    '最优化原理与方法',
  ],
}

export const skills: { group: string; items: string[] }[] = [
  {
    group: '编程语言',
    items: ['Python', 'C / C++', 'SQL', 'Shell'],
  },
  {
    group: 'AI 算法 / 框架',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'CNN', 'Transformer', 'ResNet', 'Conformer'],
  },
  {
    group: '视觉与感知',
    items: ['目标检测', '实例分割', '开放词汇分割', '视觉识别', '多模态感知'],
  },
  {
    group: '大模型应用',
    items: ['Prompt Engineering', 'RAG', 'Agent', 'LangChain', 'LangGraph', 'MCP', 'LoRA / QLoRA'],
  },
  {
    group: '机器人与具身智能',
    items: ['ROS2', 'Gazebo', 'MoveIt2', '逆运动学 (IK)', '轨迹规划', 'STT / TTS'],
  },
  {
    group: '工程与部署',
    items: ['Linux', 'Git', 'Docker', 'FastAPI', 'MySQL', 'Redis', '模型量化', '边缘部署'],
  },
]

export const honors = [
  '黑龙江省三好学生',
  '达摩院 · 人工智能训练师认证',
  'IITC 工信人才专业知识测评（人工智能应用技术）',
  '华为 HarmonyOS 应用开发者认证',
  '校三好学生 / 优秀学生干部 / 优秀共青团员 / 学习之星',
]

export const competitions = [
  { name: '中国机器人大赛暨 RoboCup 世界杯中国赛', award: '国家二等奖', year: '2025' },
  { name: '中国机器人大赛暨 RoboCup 世界杯中国赛', award: '国家三等奖', year: '2026' },
  { name: '第七届国际青年人工智能大赛 · 全地形运载机器人', award: '二等奖', year: '—' },
  { name: '第七届国际青年人工智能大赛 · 机器人单人舞蹈', award: '三等奖', year: '—' },
  { name: '全国大学生创新创业能力大赛', award: '一等奖', year: '—' },
]
