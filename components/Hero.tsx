'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { portfolioData } from '@/data/portfolio';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-light/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-accent text-sm sm:text-base font-semibold tracking-widest uppercase">Hey, welcome! 👋</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 leading-tight tracking-tighter"
        >
          I&apos;m{' '}
          <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
            {portfolioData.name}
          </span>
        </motion.h1>

        {/* Unique Subtitle */}
        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-6 font-light leading-relaxed max-w-3xl mx-auto">
          {portfolioData.subtitle}
        </motion.h2>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {portfolioData.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-accent to-accent-light rounded-lg font-semibold text-white hover:shadow-xl hover:shadow-accent/60 transition-all duration-300 transform hover:scale-105 hover:translate-y-[-4px]"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-accent cursor-pointer">
            <FaArrowDown size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
