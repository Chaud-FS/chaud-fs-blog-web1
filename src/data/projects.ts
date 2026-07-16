export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  tags: string[]
  github?: string
  featured: boolean
  category: '大模型应用' | '计算机视觉' | '具身智能' | '其他'
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 'enterprise-ai-assistant',
    name: 'Enterprise AI Assistant',
    tagline: '基于 RAG 的企业级智能问答助手',
    description:
      '支持上传 PDF / Word 文档，自动切片、向量化并入库，结合大模型进行多轮对话、历史记录与流式输出，为内部知识检索提供低延迟、可溯源的答案。',
    tags: ['RAG', 'LangChain', 'FastAPI', '向量数据库', '流式输出'],
    github: 'https://github.com/Chaud-FS/Enterprise-AI-Assistant',
    featured: true,
    category: '大模型应用',
    highlights: ['文档自动切片与向量化', '多轮对话 + 历史记录', '流式生成输出'],
  },
  {
    id: 'ovis-platform',
    name: 'Open-Vocabulary Instance Segmentation Platform',
    tagline: '基于 YOLOE-26 的实时开放词汇实例分割平台',
    description:
      '基于 Ultralytics YOLOE-26 的实时开放词汇实例分割平台，支持通过文本提示词零样本检测与分割任意类别物体，无需重新训练。提供命令行与 PyQt5 图形界面两种使用方式，支持中英文标签与实时性能监控。',
    tags: ['YOLOE', '实例分割', 'PyQt5', '开放词汇', '实时推理'],
    github: 'https://github.com/Chaud-FS/Open-Vocabulary-Instance-Segmentation-Platform',
    featured: true,
    category: '计算机视觉',
    highlights: ['文本提示零样本分割', '命令行 + GUI 双形态', '中英文标签与性能监控'],
  },
  {
    id: 'workspacesync-agent',
    name: 'WorkspaceSync AI Agent',
    tagline: '面向办公场景的自然语言多工具调度助手',
    description:
      '支持自然语言驱动的多工具调度：读取 Excel、生成日报、总结 PDF、联网搜索、查询天气、计算器、执行 Python 代码、操作数据库，并可通过 MCP (Model Context Protocol) 扩展更多能力。',
    tags: ['Agent', 'MCP', '工具调用', '多模态', '自动化'],
    github: 'https://github.com/Chaud-FS/WorkspaceSync-AI-Agent',
    featured: true,
    category: '大模型应用',
    highlights: ['自然语言多工具编排', 'MCP 可扩展协议', 'Excel / PDF / 数据库打通'],
  },
  {
    id: 'ros2-nexus',
    name: 'ROS2 Nexus Embodied Assistant',
    tagline: '仿真环境中的端到端具身智能机器人系统',
    description:
      '完全在仿真环境中运行的具身智能系统，以 6 自由度机械臂为核心，整合 Gazebo 物理仿真、MoveIt2 运动规划、Qwen-VL 视觉感知、STT/TTS 语音交互，并以 LLM 作为决策大脑统一上下文、输出结构化任务计划。',
    tags: ['ROS2', 'MoveIt2', 'Gazebo', 'Qwen-VL', 'LLM 决策'],
    github: 'https://github.com/Chaud-FS/ROS2-Nexus-Embodied-Assistant',
    featured: true,
    category: '具身智能',
    highlights: ['感知—决策—执行闭环', '6-DOF 机械臂 IK 规划', 'nexus_orchestrator 多模态编排'],
  },
  {
    id: 'embodied-micro',
    name: '具身智能机器人系统（微专业核心项目）',
    tagline: 'ROS2 仿真 + 具身大模型自主决策',
    description:
      '基于 ROS2 框架搭建仿真环境，集成具身大模型实现机器人多模态感知与自主决策，验证「视觉—语言—动作」协同的可行性。',
    tags: ['ROS2', '具身智能', '多模态', '自主决策'],
    featured: false,
    category: '具身智能',
    highlights: ['仿真环境搭建', '多模态感知', '自主决策'],
  },
  {
    id: 'smart-home',
    name: '智能家居系统',
    tagline: '环境感知 · 设备控制 · 人机交互',
    description:
      '设计并实现多功能智能家居系统，涵盖环境感知、设备控制、人机交互等模块，完成从传感采集到联动控制的完整链路。',
    tags: ['IoT', '嵌入式', '人机交互'],
    featured: false,
    category: '其他',
    highlights: ['环境感知模块', '设备联动控制', '交互界面'],
  },
  {
    id: 'smart-car',
    name: '智能小车综合开发',
    tagline: '硬件电路 → 控制算法全套软硬件',
    description:
      '从硬件电路设计到控制算法开发，完成智能小车的全套软硬件系统，覆盖驱动、传感与自主导航。',
    tags: ['嵌入式', '控制算法', '硬件'],
    featured: false,
    category: '其他',
    highlights: ['硬件电路设计', '控制算法', '自主导航'],
  },
  {
    id: 'dl-practice',
    name: '深度学习模型实践系列',
    tagline: 'CNN 分类 · 知识图谱推理',
    description:
      '基于 Conformer、ResNet 等典型 CNN 架构的图像分类模型训练与优化；基于 Neo4j 构建知识图谱数据库，实现产生式推理方法。',
    tags: ['ResNet', 'Conformer', 'Neo4j', '知识图谱'],
    featured: false,
    category: '计算机视觉',
    highlights: ['图像分类训练', '知识图谱构建', '产生式推理'],
  },
]
