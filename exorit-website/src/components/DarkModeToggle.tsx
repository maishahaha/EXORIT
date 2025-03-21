import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className = '' }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className={`relative w-10 h-5 rounded-full flex items-center 
      transition-colors duration-300 ease-in-out mr-2
      focus:outline-none bg-gray-300 dark:bg-blue-900
      border-none shadow-none hover:border-none ${className}`}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle dark mode"
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      style={{ minWidth: '40px' }}
    >
      <motion.div 
        className="absolute w-4 h-4 rounded-full flex items-center justify-center
        transition-transform duration-300 ease-in-out
        bg-white dark:bg-blue-400"
        animate={{ 
          x: darkMode ? 22 : 2,
          rotate: darkMode ? 360 : 0,
          scale: darkMode ? [1, 1.1, 1] : [1, 0.9, 1],
          backgroundColor: darkMode ? "#93C5FD" : "#FFFFFF"
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          rotate: { duration: 0.7 },
          scale: { duration: 0.3 }
        }}
      >
        <motion.div
          animate={{
            scale: darkMode ? [1, 0.8, 1] : [1, 1.2, 1],
            rotate: darkMode ? [-45, 0] : [0, 45],
          }}
          transition={{ duration: 0.5 }}
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
