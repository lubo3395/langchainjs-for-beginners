<img src=“docs/images/LangChainjs.png” alt=“LangChain4j” width=“800”/>

# LangChain.js初学者

[![GitHub 许可]（https://img.shields.io/github/license/microsoft/langchainjs-for-beginners.svg）]（https://github.com/microsoft/langchainjs-for-beginners/blob/main/LICENSE）
[![GitHub贡献者]（https://img.shields.io/github/contributors/microsoft/langchainjs-for-beginners.svg）]（https://github.com/microsoft/langchainjs-for-beginners/graphs/contributors/）
[![GitHub问题]（https://img.shields.io/github/issues/microsoft/langchainjs-for-beginners.svg）]（https://github.com/microsoft/langchainjs-for-beginners/issues/）
[![GitHub 拉取请求]（https://img.shields.io/github/issues-pr/microsoft/langchainjs-for-beginners.svg]（https://github.com/microsoft/langchainjs-for-beginners/pulls/）
[![欢迎个人最佳]（https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square）]（http://makeapullrequest.com）

## 🚀 欢迎！

欢迎来到《初学者之LangChain.js》，这是一本关于如何用LangChain.js和TypeScript构建AI驱动应用的实践指南。

构建人工智能应用很像烹饪一顿美食。你可以自己收集所有食材，从头制作每一款酱料，还能制作自己的工具。或者，你可以在设备齐全、备有优质食材和可靠食谱的厨房工作。**LangChain.js那个设备齐全的AI开发厨房。**

### 你将学到和建立的东西

本课程将带你从零开始构建强大的人工智能应用：

- ** 🤖 对话式AI** - 构建具备流式响应和可定制行为的上下文感知聊天机器人
- ** 🔍 语义搜索** - 创建理解含义而非关键词的搜索系统
- ** 🛠️ 函数调用与工具** - 赋予人工智能使用工具和提取结构化数据的能力
- ** 🚀 自主代理** - 构建能够自主推理、决策和选择工具的代理
- ** 🌐 MCP集成** - 利用模型上下文协议标准将AI连接到外部服务
- ** 🎯 代理性RAG** - 构建智能问答系统，由代理决定何时搜索你的知识库

**到最后**你会对LangChain.js有扎实的理解，知道如何构建可部署的真实AI应用！

> ** 🎯 教学方法：** 本课程采用以代理为先的进阶。你会先了解工具，然后是代理，再结合文档检索来构建代理型RAG系统。这与现代生产型人工智能系统的构建方式相呼应。

> [!提示]
> **AI开发新手？** 请先了解我们的配套课程[**生成式AI与JavaScript**]（https://github.com/microsoft/generative-ai-with-javascript），学习AI基础知识！

---

## 📚 目录

本课程包含**9章**（设置+8章），每章都在前一章基础上建立起来，从零开始教你LangChain.js。每章都包含概念解释、代码示例和动手挑战。

|# |章节 |描述 |关键概念 |
|---|---------|-------------|--------------|
|0 |[赛道设置]（./00-course-setup/README.md） |搭建你的开发环境（本地或云端） |Node.js，GitHub Models/Azure AI，Codespaces，environment variables |
|1 |[LangChain.js简介]（./01-introduction/README.md） |理解框架与核心概念 |LangChain 基础，首次调用 LLM |
|2 |[聊天模型与基础互动]（./02-chat-models/README.md） |聊天模式、消息与对话 |消息类型、流式传输、错误处理、温度 |
|3 |[提示、消息和结构化输出]（./03-prompts-messages-outputs/README.md） |处理提示符、消息数组和类型安全输出 |消息、模板、结构化输出、Zod 模式 |
|4 |[函数调用与工具]（./04-function-calling-tools/README.md） |通过函数调用和工具扩展AI能力 |Zod schemas，工具绑定，类型安全 |
|5 |[与特工入门]（./05-agents/README.md） |构建能够推理和选择工具的自主智能体 |ReAct 模式，代理循环，createAgent（）， 中间件 |
|6 |[模型上下文协议（MCP）]（./06-mcp/README.md） |使用 MCP 标准 |MCP 服务器、HTTP/stdio 传输、工具集成、多服务器模式 |
|7 |[文档、嵌入与语义搜索]（./07-documents-embeddings-semantic-search/README.md） |加载文档、创建嵌入和构建语义搜索 |文档加载、分块、向量嵌入、相似性搜索 |
|8 |[构建代理RAG系统]（./08-agentic-rag-systems/README.md） |构建RAG系统，智能体智能决定何时搜索文档 |代理性RAG（代理决定何时搜索）、检索工具、智能问答 |

每章内容包括：
- 📖 **概念解释**，并结合现实世界的类比
- 💻 **代码示例** 你可以立即运行
- 🎯 **动手挑战**以测试你的理解力
- 🔑 **强化学习的关键要点**

我们计划随着时间推移，增加更多主题。敬请关注最新动态！

---

## 📋 先修条件

在开始本课程之前，你应具备以下条件：

- **JavaScript/TypeScript 基础** - 变量、函数、对象、异步/等待
- **Node.js （LTS）** 和 npm - 包管理和 CLI 工具
- **基础生成式AI概念** - 对大型语言模型、提示符、标记的基本理解，这些内容在我们的[JavaScript生成式人工智能]（https://github.com/microsoft/generative-ai-with-javascript）课程中涵盖

### 所需工具

- [Node.js（LTS）]（https://nodejs.org/）
- 代码编辑器（[VS Code 推荐]（https://code.visualstudio.com/））
- 终端/命令行
- [Git]（https://git-scm.com/）

### AI提供者账户

你需要访问AI提供商。我们推荐：

- ✅ **GitHub模型** - 免费供学习和实验使用
- ✅ **Microsoft Foundry** - 用于生产部署

---

## 📖 课程资源及额外样本

- **[词汇表]（./GLOSSARY.md）** - 课程中使用的所有术语的全面定义
- **[LangChain.js文档]（https://docs.langchain.com/oss/javascript/langchain/overview）** - 官方LangChain.js文档，深入探讨
- **[带有MCP工具的AI代理示例]（https://github.com/microsoft/ai-agents-for-beginners-sample）** - 学习如何构建一个完整的汉堡点餐系统，配备无服务器API、网页界面和MCP服务器，使AI代理能够浏览菜单、下单并跟踪订单状态。
- **[使用 LangChain.js 与 RAG 的无服务器 AI 聊天]（https://github.com/Azure-Samples/serverless-chat-langchainjs）** - 利用 LangChain.js 和 Azure 构建无服务器 AI 聊天体验，采用检索增强生成技术。
- **[使用 MCP 工具的 AI 代理使用 LangChain.js]（https://github.com/Azure-Samples/mcp-agent-langchainjs）** - 构建能够通过运行在 Azure Functions 上的模型上下文协议（MCP）与现实世界 API 交互的 AI 代理。
- **[AI 旅行社代理示例]（https://github.com/Azure-Samples/azure-ai-travel-agents）** - 学习如何协调多个 AI 代理，利用运行于 Azure 容器应用上的 Azure AI 服务创建旅行规划应用。

---

## 附加资源

### 朗链

[![初学者用LangChain4j]（https://img.shields.io/badge/LangChain4j%20for%20Beginners-22C55E?style=for-the-badge&&labelColor=E5E7EB&color=0553D6）]（https://aka.ms/langchain4j-for-beginners）

### Azure / Edge / MCP / 代理
[![初学者AZD]（https://img.shields.io/badge/AZD%20for%20Beginners-0078D4?style=for-the-badge&labelColor=E5E7EB&color=0078D4）]（https://github.com/microsoft/AZD-for-beginners?WT.mc_id=academic-105485-koreyst）
[!【初学者 Edge AI】（https://img.shields.io/badge/Edge%20AI%20for%20Beginners-00B8E4?style=for-the-badge&labelColor=E5E7EB&color=00B8E4）]（https://github.com/microsoft/edgeai-for-beginners?WT.mc_id=academic-105485-koreyst）
[![初学者MCP]（https://img.shields.io/badge/MCP%20for%20Beginners-009688?style=for-the-badge&labelColor=E5E7EB&color=009688）]（https://github.com/microsoft/mcp-for-beginners?WT.mc_id=academic-105485-koreyst）
[![初学者AI代理]（https://img.shields.io/badge/AI%20Agents%20for%20Beginners-00C49A?style=for-the-badge&labelColor=E5E7EB&color=00C49A）]（https://github.com/microsoft/ai-agents-for-beginners?WT.mc_id=academic-105485-koreyst）

---
 
### 生成式人工智能系列
[![初学生成式人工智能 - JavaScript]（https://img.shields.io/badge/Generative%20AI%20（JavaScript）-E879F9？style=for-the-badge&labelColor=E5E7EB&color=E879F9）]（https://github.com/microsoft/generative-ai-with-javascript?WT.mc_id=academic-105485-koreyst）
[![初学者生成式人工智能 - .NET]（https://img.shields.io/badge/Generative%20AI%20（.NET）-9333EA？style=for-the-badge&labelColor=E5E7EB&color=9333EA）]（https://github.com/microsoft/Generative-AI-for-beginners-dotnet?WT.mc_id=academic-105485-koreyst）
[![初学者生成式人工智能 - Java]（https://img.shields.io/badge/Generative%20AI%20（Java）-C084FC？style=for-the-badge&labelColor=E5E7EB&color=C084FC）]（https://github.com/microsoft/generative-ai-for-beginners-java?WT.mc_id=academic-105485-koreyst）
[![初学者生成式人工智能]（https://img.shields.io/badge/Generative%20AI%20for%20Beginners-8B5CF6?style=for-the-badge&labelColor=E5E7EB&color=8B5CF6）]（https://github.com/microsoft/generative-ai-for-beginners?WT.mc_id=academic-105485-koreyst）

---
 
### 核心学习
[![初学者机器学习]（https://img.shields.io/badge/ML%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=22C55E）]（https://aka.ms/ml-beginners?WT.mc_id=academic-105485-koreyst）
[!【初学者数据科学】（https://img.shields.io/badge/Data%20Science%20for%20Beginners-84CC16?style=for-the-badge&labelColor=E5E7EB&color=84CC16）]（https://aka.ms/datascience-beginners?WT.mc_id=academic-105485-koreyst）
[![初学者AI]（https://img.shields.io/badge/AI%20for%20Beginners-A3E635?style=for-the-badge&labelColor=E5E7EB&color=A3E635）]（https://aka.ms/ai-beginners?WT.mc_id=academic-105485-koreyst）
[!【初学者网络安全】（https://img.shields.io/badge/Cybersecurity%20for%20Beginners-F97316?style=for-the-badge&labelColor=E5E7EB&color=F97316）]（https://github.com/microsoft/Security-101?WT.mc_id=academic-96948-sayoung）
[![初学者网页开发]（https://img.shields.io/badge/Web%20Dev%20for%20Beginners-EC4899?style=for-the-badge&labelColor=E5E7EB&color=EC4899）]（https://aka.ms/webdev-beginners?WT.mc_id=academic-105485-koreyst）
[![物联网初学者]（https://img.shields.io/badge/IoT%20for%20Beginners-14B8A6?style=for-the-badge&labelColor=E5E7EB&color=14B8A6）]（https://aka.ms/iot-beginners?WT.mc_id=academic-105485-koreyst）
[![初学者XR开发]（https://img.shields.io/badge/XR%20Development%20for%20Beginners-38BDF8?style=for-the-badge&labelColor=E5E7EB&color=38BDF8）]（https://github.com/microsoft/xr-development-for-beginners?WT.mc_id=academic-105485-koreyst）

---
 
### 副驾驶系列
[![人工智能配对编程副驾驶]（https://img.shields.io/badge/Copilot%20for%20AI%20Paired%20Programming-FACC15?style=for-the-badge&labelColor=E5E7EB&color=FACC15）]（https://aka.ms/GitHubCopilotAI?WT.mc_id=academic-105485-koreyst）
[![C#/.NET 副驾驶]（https://img.shields.io/badge/Copilot%20for%20C%23/.NET-FBBF24?style=for-the-badge&labelColor=E5E7EB&color=FBBF24）]（https://github.com/microsoft/mastering-github-copilot-for-dotnet-csharp-developers?WT.mc_id=academic-105485-koreyst）
[!【副驾驶冒险】（https://img.shields.io/badge/Copilot%20Adventure-FDE68A?style=for-the-badge&labelColor=E5E7EB&color=FDE68A]（https://github.com/microsoft/CopilotAdventures?WT.mc_id=academic-105485-koreyst）


---

## 寻求帮助

如果你遇到卡住或对构建AI应用有任何疑问，欢迎加入：

[![Microsoft Foundry Discord]（https://img.shields.io/badge/Discord-Microsoft_Foundry_Community_Discord-blue?style=for-the-badge&logo=discord&color=5865f2&logoColor=fff）]（https://aka.ms/foundry/discord）

如果你在建造过程中有产品反馈或错误，请前往：

[![Microsoft Foundry 开发者论坛]（https://img.shields.io/badge/GitHub-Microsoft_Foundry_Developer_Forum-blue?style=for-the-badge&logo=github&color=000000&logoColor=fff）]（https://aka.ms/foundry/forum）

---

## 贡献

本项目欢迎贡献和建议。 大多数贡献都要求你同意一份贡献者许可协议（CLA），声明你有权并且确实授权我们使用你的贡献。详情请访问<https://cla.opensource.microsoft.com>。

当你提交拉取请求时，CLA机器人会自动判断你是否需要提供CLA并适当装饰PR（例如，状态检查、评论）。只需按照机器人提供的说明操作即可。你只需在所有仓库中使用我们的CLA完成一次操作。

该项目已采纳了[Microsoft开源行为准则]（https://opensource.microsoft.com/codeofconduct/）。欲了解更多信息，请参阅[行为准则常见问题]（https://opensource.microsoft.com/codeofconduct/faq/）或联系[opencode@microsoft.com]（mailto:opencode@microsoft.com）如有额外问题或意见。

## 商标

本项目可能包含项目、产品或服务的商标或标志。授权使用Microsoft商标或标志须遵守[Microsoft商标与品牌指南]（https://www.microsoft.com/legal/intellectualproperty/trademarks/usage/general）。在本项目的修改版本中使用Microsoft商标或标志不得引起混淆或暗示Microsoft赞助。任何使用第三方商标或标志均受该第三方政策约束。

