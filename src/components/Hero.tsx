import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Slideshow } from './Slideshow';

interface HeroProps {
  onViewV2?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewV2 }) => {
  // Slideshow images - you can replace these with your own images
  const slideshowImages = [
    '/images/slideshow/slide-1.png',
    '/images/slideshow/slide-2.png',
    '/images/slideshow/slide-3.png',
    '/images/slideshow/slide-4.png',
    '/images/slideshow/slide-5.png',
    '/images/slideshow/slide-6.png',
    '/images/slideshow/slide-7.png',
    '/images/slideshow/slide-8.png',
    '/images/slideshow/slide-9.png',
    '/images/slideshow/slide-10.png',
  ];

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
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <Slideshow images={slideshowImages} interval={6000} />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium">
              Welcome to my portfolio!
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Minh Duy Do</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-medium"
          >
            Computer Science Student currently looking for Internship Opportunities
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I design and build modern, high-performance web applications, with a strong interest in AI, system design, and scalable software engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            {onViewV2 && (
              <motion.button
                onClick={onViewV2}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 border border-indigo-500 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 cursor-pointer font-display"
              >
                Enter V2 Lab 🔬
              </motion.button>
            )}

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10 hover:shadow-blue-600/25 cursor-pointer font-display"
            >
              View My Projects
            </motion.a>
          </motion.div>

          {/* Secondary links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center items-center mb-12 text-sm font-medium"
          >
            <a
              href="/cv/Minh_Duy_Do_Resume.pdf"
              download
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download size={16} />
              Download CV
            </a>
            <span className="text-gray-300 dark:text-gray-700 select-none">•</span>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://github.com/dominhduy09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/duy-do-minh-0b37501a9/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:dominhduy09@gmail.com"
              whileHover={{ y: -3 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-20 flex justify-center"
        >
          <div className="text-gray-400 dark:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
