import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CodingWindow = () => {
  const [text, setText] = useState('');
  const codeSnippet = `// EXORIT Web Solutions
class ExoritApp {
  constructor() {
    this.stack = {
      frontend: 'React & Tailwind',
      backend: 'Node.js & Express',
      database: 'MongoDB'
    };
  }

  deploy() {
    console.log('🚀 Deploying EXORIT Web App...');
    return 'Success';
  }
}

const app = new ExoritApp();
app.deploy();`;

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= codeSnippet.length) {
        setText(formatCode(codeSnippet.slice(0, currentIndex)));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  const formatCode = (code: string): string => {
    return code.replace(/(\/\/ .+)/g, '<span style="color: #6A9955">$1</span>') // Comments (Green)
      .replace(/\b(class|const|return|constructor)\b/g, '<span style="color: #C586C0">$1</span>') // Keywords (Pink)
      .replace(/('[^']*'|"[^"]*")/g, '<span style="color: #CE9178">$1</span>') // Strings (Orange)
      .replace(/(console)\./g, '<span style="color: #DCDCAA">$1</span>') // Console (Yellow)
      .replace(/\b(this|new)\b/g, '<span style="color: #569CD6">$1</span>') // Objects & Instances (Blue)
      .replace(/\b(deploy)\b/g, '<span style="color: #DCDCAA">$1</span>') // Function Names (Yellow)
      .replace(/([{}[\]().,;])/g, '<span style="color: #D4D4D4">$1</span>'); // Symbols (Gray)
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="hidden lg:block bg-[#1e1e1e] rounded-lg shadow-2xl w-[480px] backdrop-blur-sm bg-opacity-90 border border-gray-700"
    >
      {/* Window Header */}
      <div className="flex items-center px-4 py-2 border-b border-gray-700 bg-[#252526]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="mx-auto text-gray-400 text-sm font-mono">exoritApp.ts</div>
      </div>
      
      {/* Code Content */}
      <div className="p-6 font-mono text-[13px] bg-[#1e1e1e]">
        <pre className="overflow-x-hidden text-gray-300" style={{ textAlign: 'left' }}>
          <code dangerouslySetInnerHTML={{ __html: text }} className="block" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 0.7 }}
            className="inline-block w-[2px] h-[14px] bg-gray-400 ml-[1px] -mb-[2px]"
          ></motion.span>
        </pre>
      </div>
    </motion.div>
  );
};

export default CodingWindow;