export interface ResourceMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
  level: '入门' | '进阶' | '系统'
  sources: number
}

export const resourcePosts: ResourceMeta[] = [
  {
    slug: 'llm-app-roadmap',
    title: '大模型应用开发学习路线（RAG / Agent / MCP）',
    date: '2026-06-10',
    excerpt:
      '从 Prompt 工程到 RAG、Agent 与 MCP 的进阶路线，汇总 Hugging Face、LangChain 官方文档与 DeepLearning.AI 等权威来源的精选教程。',
    tags: ['LLM', 'RAG', 'Agent', 'MCP'],
    readingTime: '约 7 分钟',
    level: '系统',
    sources: 8,
  },
  {
    slug: 'deep-learning-foundations',
    title: '深度学习基础与框架：PyTorch 入门到实战',
    date: '2026-05-28',
    excerpt:
      '以 PyTorch 官方教程与斯坦福 CS231n 为核心，梳理从张量、反向传播到 CNN / Transformer 的系统化学习路径。',
    tags: ['PyTorch', 'CNN', 'Transformer', 'CS231n'],
    readingTime: '约 8 分钟',
    level: '系统',
    sources: 7,
  },
  {
    slug: 'ros2-embodied-learning',
    title: '机器人学与具身智能：ROS2 / MoveIt2 权威学习资料',
    date: '2026-04-12',
    excerpt:
      '面向具身智能方向，整理 ROS2 文档、MoveIt2 规划框架与机器人学基础课程，帮助从仿真环境走进真实硬件。',
    tags: ['ROS2', 'MoveIt2', '具身智能', '仿真'],
    readingTime: '约 6 分钟',
    level: '进阶',
    sources: 6,
  },
  {
    slug: 'cv-instance-segmentation',
    title: '计算机视觉与实例分割：从原理到 Ultralytics YOLOE',
    date: '2026-03-02',
    excerpt:
      '汇总目标检测与实例分割的经典资料、Ultralytics 官方文档与开放词汇分割的前沿论文，建立完整的视觉感知知识树。',
    tags: ['计算机视觉', '实例分割', 'YOLOE', '开放词汇'],
    readingTime: '约 7 分钟',
    level: '进阶',
    sources: 7,
  },
]
