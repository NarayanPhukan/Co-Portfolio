'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Technical <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Skills</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
              className="group p-8 rounded-xl bg-gradient-to-br from-secondary/50 to-primary/50 border border-accent/20 hover:border-accent/50 transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {skill.name}
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
              >
                {skill.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    variants={tagVariants}
                    className="px-3 py-1 text-sm bg-accent/20 text-accent rounded-full group-hover:bg-accent/30 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 bg-gradient-to-r from-accent/5 to-accent-light/5 rounded-xl border border-accent/20"
        >
          <h3 className="text-2xl font-bold mb-6">Proficiency Highlights</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Frontend', value: '95%' },
              { label: 'Backend', value: '90%' },
              { label: 'Database Design', value: '85%' },
              { label: 'DevOps', value: '80%' },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-gray-300">{skill.label}</span>
                  <span className="text-accent font-bold text-lg">{skill.value}</span>
                </div>
                <div className="w-full bg-secondary/60 h-3 rounded-full overflow-hidden border border-accent/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent via-accent-light to-accent shadow-lg shadow-accent/50"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.value }}
                    transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
