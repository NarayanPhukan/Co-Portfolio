'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { testimonials } from '@/data/portfolio';

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            What People <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-gray-400 text-lg">Testimonials from clients and colleagues I&apos;ve worked with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)' }}
              className="p-8 rounded-xl bg-gradient-to-br from-secondary/50 to-primary/50 border border-accent/20 hover:border-accent/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 italic leading-relaxed">&quot;{testimonial.text}&quot;</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-accent/10 to-accent-light/10 border border-accent/20 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I&apos;m always open to interesting projects and collaboration opportunities. Whether you have a question or want to discuss 
            a potential project, feel free to reach out.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent to-accent-light rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
