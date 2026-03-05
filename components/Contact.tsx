'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { portfolioData } from '@/data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      label: 'Email',
      value: portfolioData.email,
      link: `mailto:${portfolioData.email}`,
    },
    {
      icon: <FiPhone size={24} />,
      label: 'Phone',
      value: portfolioData.phone,
      link: `tel:${portfolioData.phone}`,
    },
    {
      icon: <FiMapPin size={24} />,
      label: 'Location',
      value: portfolioData.location,
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: <FiGithub size={24} />, url: portfolioData.github, label: 'GitHub' },
    { icon: <FiLinkedin size={24} />, url: portfolioData.linkedin, label: 'LinkedIn' },
    { icon: <FiTwitter size={24} />, url: portfolioData.twitter, label: 'Twitter' },
  ];

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or ready to start a project? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={info.link}
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg bg-gradient-to-br from-secondary/50 to-primary/50 border border-accent/20 hover:border-accent/50 transition-all duration-300 text-center group"
            >
              <div className="inline-block p-4 bg-accent/20 rounded-lg mb-4 group-hover:bg-accent/30 transition-colors">
                <div className="text-accent group-hover:text-accent-light transition-colors">
                  {info.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{info.label}</h3>
              <p className="text-gray-400 hover:text-accent transition-colors">{info.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form and Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-accent/20 rounded-lg focus:border-accent focus:shadow-lg focus:shadow-accent/30 outline-none transition-all text-white hover:border-accent/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-accent/20 rounded-lg focus:border-accent focus:shadow-lg focus:shadow-accent/30 outline-none transition-all text-white hover:border-accent/40"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-accent/20 rounded-lg focus:border-accent focus:shadow-lg focus:shadow-accent/30 outline-none transition-all text-white hover:border-accent/40"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/50 border border-accent/20 rounded-lg focus:border-accent focus:shadow-lg focus:shadow-accent/30 outline-none transition-all text-white resize-none hover:border-accent/40"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-accent to-accent-light rounded-lg font-semibold text-white hover:shadow-xl hover:shadow-accent/60 transition-all duration-300"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links and Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I&apos;m always interested in hearing about new projects and exciting opportunities. Whether you want to discuss a potential 
                collaboration or just say hello, feel free to get in touch!
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' }}
                    className="p-4 bg-gradient-to-br from-secondary/50 to-primary/50 border border-accent/20 hover:border-accent/50 rounded-lg text-accent hover:text-accent-light transition-all duration-300"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gradient-to-br from-accent/10 to-accent-light/10 border border-accent/20 p-6 rounded-lg">
              <h4 className="font-bold mb-4">Quick Facts</h4>
              <ul className="space-y-3 text-gray-400">
                <li>⚡ Fast response time</li>
                <li>💼 Available for projects</li>
                <li>🌍 Open to remote work</li>
                <li>🚀 Passionate about innovation</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
