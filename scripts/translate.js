import fs from 'fs';
import path from 'path';
import https from 'https';

const AZURE_KEY = process.env.AZURE_TRANSLATOR_KEY;
const AZURE_ENDPOINT = process.env.AZURE_TRANSLATOR_ENDPOINT;
const AZURE_REGION = process.env.AZURE_TRANSLATOR_REGION;

// 本地字典作为备选（如果 API 失败）
const localTranslationMap = {
  'Welcome': '欢迎',
  'Introduction': '介绍',
  'Course Setup': '课程设置',
  'LangChain': 'LangChain',
  'Chat Models': '聊天模型',
};

async function translateWithAzure(text) {
  console.log('正在调用 Azure 翻译...');
  console.log('端点:', AZURE_ENDPOINT);
  console.log('区域:', AZURE_REGION);
  return new Promise((resolve, reject) => {
    if (!AZURE_KEY || !AZURE_ENDPOINT) {
      console.warn('⚠️ 未找到 Azure 凭据，使用本地字典');
      resolve(text);
      return;
    }

    try {
      const body = JSON.stringify([{ Text: text }]);
      
      const options = {
        hostname: new URL(AZURE_ENDPOINT).hostname,
        path: '/translate?api-version=3.0&from=en&to=zh-Hans',
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': AZURE_KEY,
          'Ocp-Apim-Subscription-Region': AZURE_REGION,
          'Content-Type': 'application/json'
        }
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            console.log('Azure 原始响应:', data);
            const result = JSON.parse(data);
            if (result[0] && result[0].translations && result[0].translations[0]) {
              resolve(result[0].translations[0].text);
            } else {
              resolve(text);
            }
          } catch (err) {
            console.error('解析 Azure 响应失败:', err.message);
            resolve(text);
          }
        });
      });

      req.on('error', (err) => {
        console.error('Azure API 错误:', err.message);
        // resolve(text);
        reject(err); // 不要 resolve
      });

      req.write(body);
      req.end();
    } catch (err) {
      console.error('调用 Azure 时发生错误:', err.message);
      resolve(text);
    }
  });
}

function translateWithLocalDict(text) {
  let result = text;
  for (const [eng, chs] of Object.entries(localTranslationMap)) {
    const regex = new RegExp('\\b' + eng + '\\b', 'g');
    result = result.replace(regex, chs);
  }
  return result;
}

async function translateMarkdown(content) {
  let result = content;
  
  // 保护代码块
  const codeBlockRegex = /\`\`\`[\s\S]*?\`\`\`/g;
  const codeBlocks = [];
  result = result.replace(codeBlockRegex, (match) => {
    codeBlocks.push(match);
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  // 保护内联代码
  const inlineCodeRegex = /\`[^\`]+\`/g;
  const inlineCodes = [];
  result = result.replace(inlineCodeRegex, (match) => {
    inlineCodes.push(match);
    return `__INLINE_CODE_${inlineCodes.length - 1}__`;
  });

  // 分段翻译（每段限制长度以避免 API 超时）
  const paragraphs = result.split('\n\n');
  const translatedParagraphs = [];

  for (const para of paragraphs) {
    if (para.trim().length === 0) {
      translatedParagraphs.push(para);
      continue;
    }

    // 尝试使用 Azure API，如果失败则使用本地字典
    let translated = para;
    if (AZURE_KEY) {
      try {
        translated = await translateWithAzure(para);
      } catch (err) {
        console.warn('Azure 翻译失败，使用本地字典:', err.message);
        translated = translateWithLocalDict(para);
      }
    } else {
      translated = translateWithLocalDict(para);
    }

    translatedParagraphs.push(translated);
  }

  result = translatedParagraphs.join('\n\n');

  // 恢复代码块
  result = result.replace(/__CODE_BLOCK_(\d+)__/g, (match, index) => {
    return codeBlocks[parseInt(index)];
  });

  // 恢复内联代码
  result = result.replace(/__INLINE_CODE_(\d+)__/g, (match, index) => {
    return inlineCodes[parseInt(index)];
  });

  return result;
}

async function processDir(dir) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        await processDir(fullPath);
      } else if (file.endsWith('.md') && !file.endsWith('.zh-CN.md')) {
        try {
          console.log('正在处理:', fullPath);
          const content = fs.readFileSync(fullPath, 'utf8');
          const translated = await translateMarkdown(content);
          const outPath = fullPath.replace('.md', '.zh-CN.md');
          fs.writeFileSync(outPath, translated, 'utf8');
          console.log('✅ 已翻译:', outPath);
        } catch (err) {
          console.error('处理文件时出错', fullPath, err.message);
        }
      }
    }
  } catch (err) {
    console.error('遍历目录时出错', dir, err.message);
  }
}

console.log('🚀 开始使用 Azure 翻译 API 进行翻译...');
console.log('Azure 端点状态:', AZURE_ENDPOINT ? '✅ 已配置' : '❌ 未配置');

// 测试模式：仅翻译根目录 README.md
const testFile = './README.md';
if (fs.existsSync(testFile)) {
  console.log('正在处理:', testFile);
  const content = fs.readFileSync(testFile, 'utf8');
  const translated = await translateMarkdown(content);
  const outPath = testFile.replace(/\.md$/, '.zh-CN.md');
  fs.writeFileSync(outPath, translated, 'utf8');
  console.log('✅ 已翻译:', outPath);
} else {
  console.warn('⚠️ 未找到 README.md');
}

console.log('✅ 翻译完成！');
