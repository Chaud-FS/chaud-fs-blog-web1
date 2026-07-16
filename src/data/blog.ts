export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
  category: string
  author: string
}

export const blogPosts: PostMeta[] = [
  {
    slug: 'rag-enterprise-qa',
    title: '从零搭建企业级 RAG 问答助手：切片、向量化与流式输出',
    date: '2026-06-18',
    excerpt:
      '以 Enterprise AI Assistant 为例，拆解检索增强生成在工程落地的关键决策：文档切片策略、向量库选型、多轮对话上下文与流式输出的实现细节。',
    tags: ['RAG', 'LangChain', 'FastAPI', '向量检索'],
    readingTime: '约 9 分钟',
    category: '大模型应用',
    author: 'Chaud.',
  },
  {
    slug: 'yoloe-open-vocabulary',
    title: 'YOLOE 开放词汇实例分割：用文本提示零样本分割任意物体',
    date: '2026-05-22',
    excerpt:
      '解析 YOLOE-26 的开放词汇能力如何用文本提示词直接检测并分割未见类别，以及我在平台化落地时关于中英标签、实时性能监控的工程实践。',
    tags: ['YOLOE', '实例分割', '开放词汇', '实时推理'],
    readingTime: '约 11 分钟',
    category: '计算机视觉',
    author: 'Chaud.',
  },
  {
    slug: 'mcp-agent-tooling',
    title: '用 MCP 给 AI Agent 做「即插即用」的工具扩展',
    date: '2026-04-30',
    excerpt:
      'WorkspaceSync AI Agent 如何借助 Model Context Protocol 把 Excel、PDF、数据库、联网搜索等能力模块化，让 Agent 的工具调用像插拔外设一样简单。',
    tags: ['Agent', 'MCP', '工具调用', '自动化'],
    readingTime: '约 8 分钟',
    category: '大模型应用',
    author: 'Chaud.',
  },
  {
    slug: 'ros2-embodied-pipeline',
    title: 'ROS2 + MoveIt2 具身智能链路：让机械臂「看懂、想明、动手」',
    date: '2026-03-15',
    excerpt:
      '记录 ROS2 Nexus 项目中，如何把 Gazebo 仿真、Qwen-VL 视觉、LLM 决策与 MoveIt2 运动规划串成一条端到端可运行的具身智能链路。',
    tags: ['ROS2', 'MoveIt2', '具身智能', 'LLM 决策'],
    readingTime: '约 13 分钟',
    category: '具身智能',
    author: 'Chaud.',
  },
]
