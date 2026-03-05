'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/portfolio';
import { FiCheck } from 'react-icons/fi';

const Experience = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Professional <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Experience</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group p-8 rounded-xl bg-gradient-to-r from-secondary/50 to-primary/50 border border-accent/20 hover:border-accent/50 transition-all duration-300"
            >
              {/* Timeline Badge */}
              <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-accent to-accent-light rounded-full border-4 border-primary flex items-center justify-center animate-pulse-glow">
                <div className="w-3 h-3 bg-primary rounded-full" />
              </div>

              {/* Timeline Line */}
              {index !== experience.length - 1 && (
                <div className="absolute -left-2 top-16 w-0.5 h-24 bg-gradient-to-b from-accent to-transparent" />
              )}

              <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                {/* Left Column */}
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {job.position}
                  </h3>
                  <a
                    href="#"
                    className="text-accent-light hover:text-accent transition-colors mb-2 font-semibold"
                  >
                    {job.company}
                  </a>
                  <p className="text-gray-400 mb-4">{job.duration}</p>
                  <p className="text-gray-400 leading-relaxed">{job.description}</p>
                </div>

                {/* Right Column - Achievements */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-accent">Key Achievements</h4>
                  <div className="space-y-3">
                    {job.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                        className="flex gap-3 items-start"
                      >
                        <FiCheck className="text-accent mt-1 flex-shrink-0" size={20} />
                        <p className="text-gray-300">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-accent/5 to-accent-light/5 border border-accent/20"
        >
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg font-semibold text-accent mb-2">Bachelor of Technology</p>
              <p className="text-gray-400 mb-1">Computer Science</p>
              <p className="text-gray-400 mb-2">Institute of Technology | 2019</p>
              <p className="text-accent-light">CGPA: 8.2/10</p>
            </div>
            <div>
              <p className="text-gray-400">
                Completed comprehensive coursework in data structures, algorithms, databases, and software engineering. 
                Actively participated in coding competitions and academic projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
