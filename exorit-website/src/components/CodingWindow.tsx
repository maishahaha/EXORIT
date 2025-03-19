import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const CodingWindow = () => {
  const [text, setText] = useState('');
  const { darkMode } = useTheme();
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
      animate={{ 
        opacity: 1, 
        x: 0
      }}
      transition={{ 
        duration: 0.8, 
        delay: 0.5
      }}
      className={`hidden lg:block ${darkMode ? 'bg-[#1e2a38]' : 'bg-[#2b3a4d]'} rounded-2xl w-[480px] backdrop-blur-lg bg-opacity-20 border ${darkMode ? 'border-gray-700' : 'border-gray-600'} transform perspective-[1000px] hover:rotate-y-2 hover:-rotate-x-2 transition-all duration-300 shadow-[rgba(0,_0,_0,_0.4)_5px_5px_20px_0px,_rgba(0,_0,_0,_0.3)_-5px_-5px_20px_0px] hover:shadow-[rgba(0,_0,_0,_0.5)_8px_8px_24px_0px,_rgba(0,_0,_0,_0.4)_-8px_-8px_24px_0px] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/10 before:to-transparent before:rounded-2xl`}
    >
      {/* Window Header */}
      <div className={`flex items-center px-4 py-2 border-b ${darkMode ? 'border-gray-700 bg-[#1e2a38]' : 'border-gray-600 bg-[#2b3a4d]'} bg-opacity-20 rounded-t-2xl transform preserve-3d`}>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="mx-auto text-gray-400 text-sm font-mono">exoritApp.ts</div>
      </div>
      
      {/* Code Content */}
      <div className={`p-6 font-mono text-[13px] ${darkMode ? 'bg-[#1e2a38]' : 'bg-[#2b3a4d]'} bg-opacity-20 rounded-b-2xl`}>
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