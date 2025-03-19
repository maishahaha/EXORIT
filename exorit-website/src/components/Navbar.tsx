import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Handle navigation click - combines navigation with scroll to top
  const handleNavClick = () => {
    scrollToTop()
    setIsOpen(false) // Close mobile menu if open
  }

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={handleNavClick} className="flex items-center">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold text-primary dark:text-white"
              >
                EXORIT
              </motion.span>
            </Link>
          </div>
          
          {/* Desktop Navigation - keeping it centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex flex-1 justify-center">
                <ul className="flex space-x-8">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'About', path: '/about' },
                    { name: 'Projects', path: '/projects' },
                    { name: 'Team', path: '/team' },
                    { name: 'Careers', path: '/careers' },
                    { name: 'Contact', path: '/contact' }
                  ].map((item) => (
                    <li key={item.name}>
                      <NavLink 
                        to={item.path}
                        onClick={handleNavClick}
                        className={({ isActive }) => 
                          `text-base font-medium transition-all duration-300 ${
                            isActive 
                              ? 'text-primary border-b-2 border-primary pb-1' 
                              : scrolled 
                                ? 'text-gray-700 dark:text-white hover:text-primary hover:border-b-2 hover:border-primary hover:pb-1'
                                : 'text-white hover:text-primary hover:border-b-2 hover:border-primary hover:pb-1'
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Dark Mode Toggle - separate from navigation */}
          <div className="hidden md:flex items-center justify-end space-x-4">
            <DarkModeToggle className="relative z-10" />
          </div>
          
          {/* Mobile menu button and toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-white hover:text-primary focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg w-full"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Team', path: '/team' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-primary bg-gray-50 dark:bg-gray-800'
                        : 'text-gray-700 dark:text-white hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar