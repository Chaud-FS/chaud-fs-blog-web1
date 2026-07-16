## 这条路线适合谁

已会 Python，想系统入门**大模型应用开发**（RAG / Agent / MCP），但不想被碎片化教程带偏。下面是由浅入深、且全部指向官方文档与权威课程的学习路径。

## 阶段一：Prompt 工程打底（约 1 周）

先把「怎么和大模型说话」练好：系统提示、少样本（few-shot）、思维链（CoT）、结构化输出。

- 在模型官方 Playground 反复试，记录哪些表述更稳定；
- 读系统化的 Prompt 指南，建立「指令设计」方法论；
- 练习：把一段模糊需求改写成带角色 / 约束 / 输出格式的系统提示。

> 把官方指南读一遍，比看十篇二手博客更有用。

## 阶段二：RAG 检索增强（约 2 周）

理解「检索 + 生成」闭环：切片、Embedding、向量库、重排、溯源。直接跟 LangChain 官方教程搭一个最小可用问答系统，再换成自己的文档。

练习：用 RAG 做一个「个人笔记问答」，重点调切片大小与重叠。

## 阶段三：Agent 与编排（约 2 周）

从「一次问答」走向「多步自主任务」。学 Agent 的规划-执行-反思循环，用 **LangGraph** 把流程画成可控状态图，理解如何加人工确认节点。

## 阶段四：用 MCP 做工具扩展（约 1 周）

工具变多时，用 MCP 把能力标准化为可插拔服务。读协议规范即可上手，重点理解 Tools / Resources / Prompts 三种原语。

练习：把阶段三里的一个工具改写成独立 MCP Server。

## 常见误区

- 一上来就追新框架，忽略官方文档；
- 低估切片与重排对 RAG 质量的影响；
- 让 Agent 一次调用太多工具，上下文爆炸。

## 权威信息源（均来自官方 / 权威机构）

1. **LangChain 官方文档** — https://python.langchain.com/docs/introduction/
2. **LangGraph 文档** — https://langchain-ai.github.io/langgraph/
3. **Model Context Protocol** — https://modelcontextprotocol.io/
4. **Hugging Face 课程** — https://huggingface.co/learn
5. **DeepLearning.AI 短课程** — https://www.deeplearning.ai/
6. **OpenAI Cookbook** — https://cookbook.openai.com/
7. **Anthropic 提示工程指南** — https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
8. **LlamaIndex 文档（RAG 专精）** — https://docs.llamaindex.ai/