const fs = require('fs');
const path = require('path');

// LangChain 专业术语词典
const translationMap = {
  // 核心概念
  'LangChain': 'LangChain',
  'LangChain.js': 'LangChain.js',
  'Chat Models': '聊天模型',
  'Large Language Models': '大型语言模型',
  'LLM': 'LLM',
  'Prompts': '提示词',
  'Prompt Templates': '提示词模板',
  'Tools': '工具',
  'Function Calling': '函数调用',
  'Agents': '代理',
  'Autonomous Agents': '自主代理',
  'ReAct pattern': 'ReAct 模式',
  'Memory': '记忆',
  'Embeddings': '嵌入',
  'Semantic Search': '语义搜索',
  'Retrieval-Augmented Generation': '检索增强生成',
  'RAG': 'RAG',
  'Agentic RAG': '代理式 RAG',
  'Model Context Protocol': '模型上下文协议',
  'MCP': 'MCP',
  
  // 课程相关
  'Welcome': '欢迎',
  'Introduction': '介绍',
  'Course Setup': '课程设置',
  'Prerequisites': '前置条件',
  'Learning Objectives': '学习目标',
  'Hands-On': '实践',
  'Key Takeaways': '关键要点',
  'Assignment': '作业',
  'Challenge': '挑战',
  'Code Example': '代码示例',
  
  // GitHub 相关
  'Pull Request': 'Pull Request',
  'Repository': '仓库',
  'Branch': '分支',
  'Commit': '提交',
  'Fork': 'Fork',
  'Issue': '问题',
  'GitHub Actions': 'GitHub Actions',
  
  // 技术概念
  'TypeScript': 'TypeScript',
  'JavaScript': 'JavaScript',
  'Node.js': 'Node.js',
  'API': 'API',
  'REST API': 'REST API',
  'HTTP': 'HTTP',
  'JSON': 'JSON',
  'async/await': 'async/await',
  'Promise': 'Promise',
  'Environment Variables': '环境变量',
  'API Key': 'API 密钥',
  'Token': '令牌',
  
  // 提供商相关
  'GitHub Models': 'GitHub Models',
  'OpenAI': 'OpenAI',
  'Azure': 'Azure',
  'Microsoft Foundry': 'Microsoft Foundry',
  'Anthropic': 'Anthropic',
  'Claude': 'Claude',
  'GPT': 'GPT',
  'gpt-5': 'gpt-5',
  'gpt-5-mini': 'gpt-5-mini',
  
  // 其他常用词
  'Framework': '框架',
  'Library': '库',
  'Package': '包',
  'Module': '模块',
  'Component': '组件',
  'Feature': '功能',
  'Example': '示例',
  'Documentation': '文档',
  'Guide': '指南',
  'Tutorial': '教程',
  'Configuration': '配置',
  'Setup': '设置',
  'Installation': '安装',
  'Dependency': '依赖',
  'Build': '构建',
  'Deploy': '部署',
  'Production': '生产',
  'Testing': '测试',
  'Debug': '调试',
  'Error': '错误',
  'Exception': '异常',
  'Warning': '警告',
  'Success': '成功',
  'Failure': '失败',
  'Performance': '性能',
  'Optimization': '优化',
  'Security': '安全',
  'Scalability': '可扩展性',
  'Reliability': '可靠性',
};

function translateMarkdown(content) {
  let translated = content;
  
  // 分离代码块，避免翻译代码
  const codeBlockRegex = /```[\s\S]*?```/g;
  const codeBlocks = content.match(codeBlockRegex) || [];
  let codeBlockIndex = 0;
  
  // 临时替换代码块
  translated = translated.replace(codeBlockRegex, `__CODE_BLOCK_${codeBlockIndex++}__`);
  
  // 进行翻译
  for (const [eng, chs] of Object.entries(translationMap)) {
    const regex = new RegExp(`\\b${eng}\\b`, 'g');
    translated = translated.replace(regex, chs);
  }
  
  // 恢复代码块
  codeBlockIndex = 0;
  translated = translated.replace(/__CODE_BLOCK_\d+__/g, () => codeBlocks[codeBlockIndex++]);
  
  return translated;
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      if (!entry.name.startsWith('.') && entry.name !== 'node_modules') {
        processDirectory(fullPath);
      }
    } else if (entry.name.endsWith('.md') && !entry.name.endsWith('.zh-CN.md')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const translated = translateMarkdown(content);
      const outputPath = fullPath.replace('.md', '.zh-CN.md');
      
      fs.writeFileSync(outputPath, translated);
      console.log(`✅ Translated: ${outputPath}`);
    }
  }
}

console.log('🚀 Starting automatic translation to Chinese...\n');
processDirectory('.');
console.log('\n✅ Translation complete! Check the .zh-CN.md files.');
