import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const NotFoundPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center container mx-auto px-4 py-16">
        <div className="max-w-lg w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-extrabold text-primary">404</h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>
            
            <div className="space-y-4">
              <Button to="/" variant="primary" size="lg" className="w-full sm:w-auto">
                Go to Homepage
              </Button>
              
              <div className="flex items-center justify-center mt-6">
                <Link to="/contact" className="text-primary hover:text-primary-dark font-medium transition-colors">
                  Contact Support
                </Link>
                <span className="mx-3 text-gray-400">•</span>
                <Link to="/projects" className="text-primary hover:text-primary-dark font-medium transition-colors">
                  View Our Projects
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="absolute inset-0 z-[-1] flex items-center justify-center pointer-events-none"
          >
            <svg className="h-full max-h-96" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM20.25 5.507v11.561L5.853 2.671c.15-.043.306-.075.467-.094a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93zM3.75 21V9.317l14.5 14.693c-.146.045-.298.08-.455.099a49.282 49.282 0 01-11.36 0c-1.497-.174-2.57-1.46-2.57-2.93z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage