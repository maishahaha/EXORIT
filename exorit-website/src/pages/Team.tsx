import { motion } from 'framer-motion'
import Button from '../components/Button'

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    facebook?: string;
    linkedin: string;
    github: string;
  };
}

// Team member data
const teamMembers: TeamMember[] = [
  {
    name: "Animesh Bhattacharjee",
    role: "Software Engineer",
    image: "/team/24141102_Animesh Bhattacharjee_Photo.jpg",
    bio: "Experienced software engineer passionate about creating innovative solutions.",
    socials: {
      facebook: "https://www.facebook.com/animesh.bhattacharjee.6096",
      linkedin: "https://www.linkedin.com/in/animesh-bhattacharjee-jhalok/",
      github: "https://github.com/Animesh6096"
    }
  },
  {
    name: "Golam Tawhid Fahad",
    role: "Full Stack Developer",
    image: "/team/Golam_Tawhid.jpg",
    bio: "Full stack developer with a knack for building scalable web applications.",
    socials: {
      linkedin: "https://www.linkedin.com/in/g-t-fahad/",
      github: "https://github.com/Golam-Tawhid"
    }
  },
  {
    name: "Maisha Iffat Chowdhury",
    role: "Software Engineer and UI/UX Designer",
    image: "/team/maisha.jpg",
    bio: "Creative software engineer and UI/UX designer with a passion for user-centered design.",
    socials: {
      linkedin: "https://www.linkedin.com/in/maisha-iffat-chowdhury",
      github: "https://github.com/maishahaha"
    }
  }
];

const TeamPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h1>
            <div className="h-1 w-24 bg-primary mb-8"></div>
            <p className="text-xl text-gray-200">
              Meet the talented individuals behind EXORIT's success. 
              Our diverse team brings together expertise from various fields 
              to deliver exceptional solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              Leadership Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Our leadership team brings decades of combined experience in software development,
              design, and business management to guide EXORIT towards continued excellence and innovation.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden group relative hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.socials.facebook && (
                      <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                        </svg>
                      </a>
                    )}
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-900">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">{member.role}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Our Company Culture</h2>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At EXORIT, we believe that great products come from great teams. We foster a culture of 
                collaboration, innovation, and continuous learning that empowers our team members to do 
                their best work and grow professionally.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We value diversity of thought and background, knowing that different perspectives 
                lead to more creative solutions. Our work environment balances autonomy with accountability, 
                giving team members the freedom to explore ideas while maintaining high standards of quality.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Collaborative and supportive environment</p>
                </div>
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Remote-friendly with flexible work options</p>
                </div>
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Continuous learning and professional development</p>
                </div>
              </div>
              <Button to="/careers" variant="secondary">
                Join Our Team
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                  alt="EXORIT team collaboration" 
                  className="rounded-lg h-48 md:h-64 w-full object-cover shadow-md transform hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                  alt="EXORIT office" 
                  className="rounded-lg h-48 md:h-64 w-full object-cover shadow-md transform hover:scale-105 transition-transform duration-300 mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="EXORIT team event" 
                  className="rounded-lg h-48 md:h-64 w-full object-cover shadow-md transform hover:scale-105 transition-transform duration-300 -mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="EXORIT workspace" 
                  className="rounded-lg h-48 md:h-64 w-full object-cover shadow-md transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Join Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-10"
            >
              We're always looking for talented individuals who are passionate about technology and innovation.
              Check out our current openings or drop us your resume for future opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                to="/careers" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                View Open Positions
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamPage