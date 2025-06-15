import React from 'react';
import { motion } from 'framer-motion';

const PageLayout = ({ children, title, subtitle }) => {
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
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const gradientVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"      variants={containerVariants}
      className="min-h-screen relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* Animated background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 -z-20" />
      
      {/* Animated gradient overlays */}      <motion.div
        variants={gradientVariants}
        className="fixed inset-0 -z-10"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Radial gradients */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-radial from-primary-600/20 via-transparent to-transparent opacity-30" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-radial from-secondary-600/20 via-transparent to-transparent opacity-30" />
        
        {/* Moving gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-secondary-900/30 to-primary-900/30 blur-3xl animate-gradient-x">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/30 via-secondary-900/30 to-primary-900/30 blur-3xl" />        </div>
      </motion.div>
      <motion.div
        variants={gradientVariants}
        className="fixed inset-0 -z-10"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-secondary-900/30 via-primary-900/30 to-secondary-900/30 blur-3xl" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 -z-10" />

      {/* Content */}
      <div className="relative pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {(title || subtitle) && (
            <motion.div
              variants={itemVariants}
              className="relative text-center mb-16 perspective-1000"
            >
              {/* Decorative elements */}
              <motion.div
                animate={{
                  y: [-20, 20],
                  rotateX: [0, 10],
                  rotateY: [-10, 10],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="absolute -top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  y: [20, -20],
                  rotateX: [10, 0],
                  rotateY: [10, -10],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="absolute -top-10 right-1/4 w-24 h-24 bg-gradient-to-bl from-secondary-500/20 to-primary-500/20 rounded-full blur-xl"
              />

              {/* Title with 3D effect */}
              {title && (
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, rotateX: 5 }}
                  className="transform transition-all duration-300"
                >
                  <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold">
                    <span className="relative inline-block">
                      <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 blur-2xl opacity-30" />
                      <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                        {title}
                      </span>
                    </span>
                  </h1>
                </motion.div>
              )}

              {/* Subtitle with glass effect */}
              {subtitle && (
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="mt-6 relative"
                >
                  <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-xl -z-10" />
                  <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto p-4">
                    {subtitle}
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Main content */}
          <motion.div
            variants={itemVariants}
            className="relative z-10"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageLayout;
