'use client';

import { motion } from 'framer-motion';
import { stats } from '@/data/portfolio';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          About <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - About Text */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-6">Full Stack Developer & Tech Enthusiast</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I&apos;m a passionate Full Stack Developer with 4+ years of experience in building scalable web applications using the MERN stack. 
              My journey in tech started with a curiosity about how things work, which evolved into a professional career building high-impact products.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I specialize in creating responsive, user-friendly interfaces with React and Next.js, coupled with robust backend solutions using Node.js and MongoDB. 
              I&apos;m particularly interested in performance optimization, system design, and mentoring junior developers.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical blogs and speaking engagements.
            </p>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                className="bg-gradient-to-br from-secondary/80 to-primary/50 p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 group cursor-pointer"
              >
                <motion.p
                  className="text-4xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-400 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-accent-light/10 rounded-lg border border-accent/20"
        >
          <h4 className="text-2xl font-bold mb-6">Current Focus</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h5 className="text-accent font-semibold mb-2">🎯 Architecture</h5>
              <p className="text-gray-400">Designing scalable system architectures and microservices</p>
            </div>
            <div>
              <h5 className="text-accent font-semibold mb-2">⚡ Performance</h5>
              <p className="text-gray-400">Optimizing applications for speed and efficiency</p>
            </div>
            <div>
              <h5 className="text-accent font-semibold mb-2">🚀 Innovation</h5>
              <p className="text-gray-400">Exploring new technologies and best practices</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
