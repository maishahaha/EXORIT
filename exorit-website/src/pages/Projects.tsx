import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../components/Button'

// Project data
const projectsData = [
  {
    id: 1,
    title: 'FinSecure Banking Platform',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'FinTech'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'A secure, modern banking platform with advanced fraud detection and seamless user experience.',
    client: 'FinSecure Inc.',
    year: '2023',
    link: '#'
  },
  {
    id: 2,
    title: 'MediTrack Health App',
    category: 'Mobile App',
    tags: ['React Native', 'Firebase', 'Healthcare'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Mobile application helping patients track medications, appointments, and health metrics.',
    client: 'MediCare Solutions',
    year: '2022',
    link: '#'
  },
  {
    id: 3,
    title: 'EcoMarket E-commerce Platform',
    category: 'Web Development',
    tags: ['Next.js', 'MongoDB', 'E-commerce'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Sustainable products marketplace with carbon footprint tracking and eco-friendly shipping options.',
    client: 'EcoMarket Global',
    year: '2022',
    link: '#'
  },
  {
    id: 4,
    title: 'LearnQuest Educational Platform',
    category: 'SaaS',
    tags: ['Vue.js', 'Python', 'EdTech'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    description: 'Interactive learning platform with personalized curriculum and real-time progress tracking.',
    client: 'LearnQuest Education',
    year: '2023',
    link: '#'
  },
  {
    id: 5,
    title: 'TravelBuddy Mobile App',
    category: 'Mobile App',
    tags: ['Flutter', 'Google Maps API', 'Travel'],
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Travel companion app with AI-powered itinerary planning and local experiences discovery.',
    client: 'TravelTech Solutions',
    year: '2021',
    link: '#'
  },
  {
    id: 6,
    title: 'SmartFactory Automation System',
    category: 'AI/ML',
    tags: ['Python', 'TensorFlow', 'IoT'],
    image: 'https://images.unsplash.com/photo-1586374579358-9d19d632b6d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Factory automation system with predictive maintenance and real-time production analytics.',
    client: 'Industrial Innovations Co.',
    year: '2022',
    link: '#'
  },
  {
    id: 7,
    title: 'CryptoWallet Dashboard',
    category: 'Web Development',
    tags: ['React', 'Blockchain', 'FinTech'],
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    description: 'Secure cryptocurrency wallet and trading dashboard with real-time market data.',
    client: 'BlockChain Ventures',
    year: '2023',
    link: '#'
  },
  {
    id: 8,
    title: 'FitTrack Fitness App',
    category: 'Mobile App',
    tags: ['Swift', 'HealthKit', 'Fitness'],
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Personal fitness tracking app with custom workout plans and nutrition guidance.',
    client: 'FitLife Technologies',
    year: '2021',
    link: '#'
  },
  {
    id: 9,
    title: 'DataSense Analytics Platform',
    category: 'SaaS',
    tags: ['Angular', 'Python', 'Data Science'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Business intelligence platform with interactive data visualization and predictive analytics.',
    client: 'DataSense Solutions',
    year: '2022',
    link: '#'
  }
]

const ProjectsPage = () => {
  const categories = ['All', 'Web Development', 'Mobile App', 'SaaS', 'AI/ML']
  const [activeFilter, setActiveFilter] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [selectedProject, setSelectedProject] = useState<null | typeof projectsData[0]>(null)
  
  // Filter projects by category
  const handleFilterClick = (category: string) => {
    setActiveFilter(category)
    
    if (category === 'All') {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === category))
    }
  }
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h1>
            <div className="h-1 w-24 bg-primary mb-8"></div>
            <p className="text-xl text-gray-200">
              Showcasing our innovative solutions across various industries.
              From web and mobile applications to AI-powered systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleFilterClick(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div
                  layout
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 10 }}
                  onClick={() => setSelectedProject(project)}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs bg-primary/80 text-white px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-white/90 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{project.category}</span>
                      <span className="text-sm font-medium text-gray-900">{project.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl text-gray-600">No projects found in this category.</h3>
              <Button 
                onClick={() => handleFilterClick('All')} 
                variant="secondary" 
                className="mt-4"
              >
                Show All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-72 md:h-96">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/70 text-white flex items-center justify-center"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{selectedProject.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Client</h4>
                    <p className="text-gray-900">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Year</h4>
                    <p className="text-gray-900">{selectedProject.year}</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button href={selectedProject.link}>
                    View Project
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Ready to Build Something Amazing?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 mb-10"
            >
              Let's turn your vision into reality with our experienced team and cutting-edge technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button to="/contact" size="lg">
                Start Your Project
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsPage