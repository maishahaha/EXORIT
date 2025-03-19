import { motion } from 'framer-motion'
import Button from '../components/Button'

const AboutPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 py-32 md:py-40 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                About EXORIT
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100px" }}
                transition={{ duration: 1 }}
                className="h-1 bg-primary mb-8"
              ></motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-gray-200"
              >
                Building the future of digital experiences through innovative software solutions.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2015, EXORIT started as a small team of passionate developers with a shared vision: 
                to make cutting-edge technology accessible to businesses of all sizes. What began as a boutique 
                development shop has grown into a comprehensive software company serving clients worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the years, we've expanded our team and expertise, building a track record of successful 
                projects across various industries including finance, healthcare, education, and e-commerce. 
                Our solutions have helped startups launch innovative products and established businesses 
                modernize their digital infrastructure.
              </p>
              <p className="text-lg text-gray-700">
                Today, EXORIT continues to push the boundaries of what's possible in software development, 
                combining technical excellence with creative thinking to craft solutions that address 
                real-world challenges.
              </p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="EXORIT team in discussion" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Vision, Mission & Core Values
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-primary mx-auto mb-8"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-50 p-3 inline-flex rounded-full mb-6">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be at the forefront of technological innovation, creating software solutions that empower 
                businesses to reach their full potential in the digital era.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-50 p-3 inline-flex rounded-full mb-6">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver innovative, high-quality software solutions that solve complex challenges, drive growth, 
                and create meaningful value for our clients and their customers.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-50 p-3 inline-flex rounded-full mb-6">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-700">
                Excellence, integrity, innovation, collaboration, and client-centricity guide everything we do at EXORIT, 
                shaping how we approach our work and build relationships.
              </p>
            </motion.div>
          </div>

          {/* Core Values Detail */}
          <div className="max-w-4xl mx-auto">
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-center mb-12"
            >
              Core Values That Drive Us
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  value: "Excellence",
                  description: "We strive for excellence in everything we do, setting high standards and constantly improving our work."
                },
                {
                  value: "Integrity",
                  description: "We act with honesty and transparency, building trust with our clients and within our team."
                },
                {
                  value: "Innovation",
                  description: "We embrace creative thinking and stay at the cutting edge of technology to deliver forward-thinking solutions."
                },
                {
                  value: "Collaboration",
                  description: "We believe that the best results come from teamwork, open communication, and diverse perspectives."
                },
                {
                  value: "Client-centricity",
                  description: "We put our clients' needs first, focusing on building solutions that create real value for their businesses."
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.value}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.value}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Join Us in Building the Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-300 mb-10"
            >
              Whether you're looking to work with us or join our team, we'd love to hear from you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button to="/contact" size="lg">Contact Us</Button>
              <Button to="/careers" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                View Careers
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage