## Agent 的瓶颈：工具越多越难管

当 Agent 要读 Excel、总结 PDF、查数据库、联网搜索、跑代码……工具一多，硬编码的 `if/else` 调度会迅速失控：**接入成本高、能力无法复用、跨项目重复造轮子**。

**MCP（Model Context Protocol）** 的答案是：把「工具」标准化成**可插拔服务**。Agent 通过统一协议发现并调用工具，就像给电脑插 USB 外设。

## MCP 的三个原语

一个 MCP Server 暴露：

- **Tools**：可被模型调用的函数（如「读 Excel 某列」）；
- **Resources**：可读取的上下文（如一份文档内容）；
- **Prompts**：预置提示模板。

Agent 作为 MCP Client 启动时连接这些 Server，运行时按需调用。**新增能力 = 启动一个新的 Server，无需改 Agent 代码。**

```python
# 用 FastMCP 声明一个工具（节选）
from mcp.server.fastmcp import FastMCP
mcp = FastMCP("excel-tools")

@mcp.tool()
def read_excel(path: str, sheet: str, range: str) -> list:
    """读取 Excel 指定工作表与范围，返回二维数组。"""
    ...
mcp.run()
```

## WorkspaceSync 里的拆分

在 **WorkspaceSync AI Agent** 中，我把能力拆成互相独立的工具模块：

- **文件类**：读 Excel、总结 PDF；
- **网络类**：联网搜索、查天气；
- **计算类**：计算器、执行 Python；
- **数据类**：操作数据库。

每个模块是一个独立 MCP Server。用户说「读这份销售表，生成今日日报并列出异常」，规划器会自主串联：读表 → 汇总 → 生成文本。

## 规划器与降级

- 用 **ReAct / 函数调用**循环：模型先「想」下一步调用哪个工具，拿到结果再「看」是否足够，直到能回答。
- **上下文压缩**：多轮工具结果做摘要，避免 prompt 膨胀。
- **失败降级**：某工具超时或报错时，让模型换一种方式或明确告知用户，而不是直接崩溃。

> 一句话：MCP 让 Agent 从「写死的脚本」走向「可扩展的操作系统」。

## 安全注意

能执行 Python / 操作数据库的工具必须加**沙箱与权限边界**：限制可访问路径、禁用危险系统调用、数据库只给只读账号。否则「自动化」会变成「失控」。

## 小结

LLM 负责「想」，MCP 负责「做」。把工具标准化为协议，是让 Agent 真正可工程化、可扩展的关键一步。