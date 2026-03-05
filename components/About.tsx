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
            <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full mb-6">
              <span className="text-accent text-sm font-semibold">About Me</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Building for the Web</h3>
            <p className="text-gray-400 mb-4 leading-relaxed text-lg">
              I&apos;m a full-stack developer who loves solving problems through code. What started as curiosity about web development has turned into a 4+ year journey of building products that users love.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed text-lg">
              I specialize in creating fast, responsive interfaces with React and Next.js, backed by robust Node.js backends. But more importantly, I focus on understanding user needs and translating them into elegant solutions.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              When I&apos;m not coding, I&apos;m learning new technologies, contributing to open-source, or writing about web development. I believe in continuous growth and sharing knowledge with the community.
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
