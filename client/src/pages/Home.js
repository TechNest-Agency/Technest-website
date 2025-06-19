import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import {
  ArrowRightIcon,
  CodeBracketIcon,
  UserGroupIcon,
  TrophyIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  BeakerIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
  ];

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://plus.unsplash.com/premium_photo-1683141240629-2fa67d924190",
      description: "Modern e-commerce solution with headless"
    },
    {
      title: "Finance Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      description: "User-friendly financial analytics platform"
    },
    {
      title: "Healthcare App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      description: "Patient management system for clinics"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      quote: "TechNest transformed our digital presence. Their innovative solutions helped us achieve a 200% growth in user engagement."
    },
    {
      name: "Michael Chen",
      role: "CTO at InnovateTech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      quote: "The team's expertise in modern web technologies and AI integration is remarkable. They delivered beyond our expectations."
    },
    {
      name: "Emma Williams",
      role: "Product Manager at StartupX",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      quote: "Working with CraftNest was a game-changer. Their attention to detail and innovative approach set them apart."
    }
  ];

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to transform your business processes",
      icon: CpuChipIcon,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Cloud Integration",
      description: "Seamlessly integrate and scale your applications with modern cloud infrastructure",
      icon: CloudArrowUpIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions designed specifically for your business needs",
      icon: CodeBracketIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Innovation Lab",
      description: "Access to our innovation lab for emerging technology experiments",
      icon: BeakerIcon,
      color: "from-orange-500 to-amber-500"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction", icon: TrophyIcon },
    { number: "24/7", label: "Support Available", icon: UserGroupIcon },
    { number: "100+", label: "Projects Delivered", icon: SparklesIcon }
  ];
// Stats data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-5" />
      {isLoading ? (
        <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
          />
        </div>
      ) : (
        <>
          {/* Hero Section with 3D Effects */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
          >
            {/* 3D Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-full h-full">

                <motion.div
                  animate={{
                    rotateZ: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl transform rotate-45" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 rounded-full blur-3xl transform -rotate-45" />
                </motion.div>
              </div>
              {/* Floating 3D Elements */}
              <motion.div
                animate={{
                  y: [-20, 20],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 right-[10%] w-32 h-32 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-xl backdrop-blur-3xl transform rotate-12"
              />
              <motion.div
                animate={{
                  y: [20, -20],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="absolute bottom-1/4 left-[10%] w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full backdrop-blur-3xl"
              />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 relative"
              >
                <SparklesIcon className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-8 text-orange-500 animate-pulse" />
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500">
                    Transform Your
                  </span>
                  <br />
                  <motion.span 
                    className="mt-4 inline-block perspective-1000"
                    whileHover={{ scale: 1.05, rotateX: 10 }}
                  >
                    <Typewriter
                      options={{
                        strings: ['Digital Journey', 'Business Growth', 'Ideas to Reality'],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500"
                      }}
                    />
                  </motion.span>
                </h1>

                <motion.p 
                  variants={itemVariants}
                  className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm"
                >
                  We create cutting-edge digital solutions that help businesses thrive in the modern world. 
                  Experience innovation that drives success.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                  <Link
                    to="/contact"
                    className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 rounded-full text-lg font-semibold overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <span className="relative flex items-center">
                      Get Started
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link
                    to="/portfolio"
                    className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full text-lg font-semibold overflow-hidden transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">View Our Work</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Tech Stack with 3D Effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-10 left-0 right-0 overflow-hidden pointer-events-none perspective-1000"
            >
              <motion.div 
                animate={{ 
                  x: [-1000, 1000],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-8"
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotateX: 10 }}
                    className="flex items-center bg-white/5 backdrop-blur-md rounded-xl px-6 py-3 border border-white/10 shadow-xl"
                  >
                    <img src={tech.logo} alt={tech.name} className="w-8 h-8 mr-3" />
                    <span className="text-white/80 text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Stats Section with 3D Cards */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="py-24 px-4 sm:px-6 lg:px-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-purple-500/5 to-blue-500/5" />
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 5
                    }}
                    className="relative group perspective"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 transform transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      <stat.icon className="h-12 w-12 text-orange-400 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 mb-2">
                        {stat.number}
                      </h3>
                      <p className="text-gray-300 font-medium">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Services Section with 3D Cards */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-purple-900/20 to-blue-900/20 pointer-events-none" />
            
            {/* Animated Background Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-30 pointer-events-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl transform rotate-45" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 rounded-full blur-3xl transform -rotate-45" />
            </motion.div>

            <div className="max-w-7xl mx-auto relative">
              <motion.div
                variants={itemVariants}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 mb-6">
                  Our Services
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Empowering your digital journey with cutting-edge solutions
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  className="group relative perspective"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <CloudArrowUpIcon className="h-12 w-12 text-orange-400 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold text-white mb-4">Cloud Solutions</h3>
                    <p className="text-gray-300">Scale your infrastructure with our cutting-edge cloud solutions and seamless deployment strategies.</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  className="group relative perspective"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <CpuChipIcon className="h-12 w-12 text-purple-400 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold text-white mb-4">AI & Machine Learning</h3>
                    <p className="text-gray-300">Harness the power of artificial intelligence to transform your business processes and decision-making.</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  className="group relative perspective"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <BeakerIcon className="h-12 w-12 text-blue-400 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold text-white mb-4">R&D Services</h3>
                    <p className="text-gray-300">Push the boundaries of innovation with our research and development expertise.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Featured Projects */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="py-24 px-4 sm:px-6 lg:px-8 relative"
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                variants={itemVariants}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
                  Featured Projects
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Discover our latest work and innovative solutions
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-colors duration-300">
                      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-medium mb-4">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center">
                          Learn More
                          <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>          {/* Newsletter Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          >
            {/* Animated background elements */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl transform rotate-45" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl transform -rotate-45" />
            </motion.div>

            <div className="max-w-4xl mx-auto relative">
              <motion.div
                variants={itemVariants}
                className="relative bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl" />
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                    Stay Updated
                  </h2>
                  <p className="text-gray-300 text-center mb-8">
                    Subscribe to our newsletter for the latest tech insights and updates.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-6 py-4 bg-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/15 transition-all duration-300"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold transform transition hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-gray-400 text-sm text-center mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </>
      )}
    </div>
  );
};

export default Home;
