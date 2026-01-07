import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image?: string;
}

export const Projects: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Pomodoro Timer',
      description: 'A minimalist Pomodoro Timer Chrome Extension (MV3) that runs reliably in the background using service workers, with notifications, stats, and a modern glassmorphism UI.',
      tags: ['HTML5', 'JavaScript', 'CSS', 'Chrome Extensions API', 'Service Workers'],
      github: 'https://github.com/dominhduy09/pomodoro-extension',
      demo: 'https://chromewebstore.google.com/detail/pfbdgdohllcpdkfccmekclkpfgfnaghj?utm_source=item-share-cb',
      image: '/images/projects/pomodoro-timer.png',
    },
    {
      id: 2,
      title: 'Advanced Cookie Manager',
      description: 'Advanced Cookie Manager is a modern Manifest V3 Chrome extension that enables developers and power users to securely inspect, edit, and manage browser cookies, with support for encrypted import/export and password protection.',
      tags: ['HTML5', 'JavaScript', 'CSS', 'SHA-256', 'Chrome Extensions API'],
      github: 'https://github.com/dominhduy09/advanced-cookie-manager',
      demo: 'https://chromewebstore.google.com/?hl=en&authuser=0',
      image: '/images/projects/advanced-cookie-manager.png',
    },
    {
      id: 3,
      title: 'UVita',
      description: 'UVita is a real-time UV monitoring application that integrates sensor-enabled phone cases with a mobile app to provide accurate UV index data, raise awareness of UV exposure risks, and promote informed sun protection decisions.',
      tags: ['HTML5', 'JavaScript', 'CSS', 'C++', 'Arduino', 'IoT'],
      github: 'https://github.com/Phong12HexDockwork/UVita/tree/main',
      demo: 'https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/pho-broth/?tab=project',
      image: '/images/projects/uvita.png',
    },
    {
      id: 4,
      title: 'GymFi Fitness Blockchain',
      description: 'GymFi is a blockchain-enabled fitness platform that transforms verified workout achievements into digital rewards, promoting healthier lifestyles through transparent and secure data recording.',
      tags: ['Solana', 'GameFi', 'Defi', 'React', 'Java'],
      github: 'https://github.com/dominhduy09/GymFi-Rewarding-Fitness-with-Blockchain',
      demo: 'https://www.canva.com/design/DAGHW0m0PWk/RibjeoYg7wpJIByhzi1tmA/edit',
      image: '/images/projects/gymfi.png',
    },
    {
      id: 5,
      title: 'EXOFOREST',
      description: 'ExoForest is a machine learning–based system that classifies exoplanet candidates from NASA Kepler, K2, and TESS data using a Random Forest model, providing accurate predictions and an interactive web platform for real-time analysis and exploration.',
      tags: ['Python', 'FastAPI', 'Pandas', 'NumPy', 'Scikit-Learn', 'Machine Learning'],
      github: 'https://github.com/hieupt810/nasa_exoplanets_classification',
      demo: 'https://www.spaceappschallenge.org/2025/find-a-team/v-blazers/?tab=project',
      image: '/images/projects/exoforest.png',
    },
    {
      id: 6,
      title: 'Portfolio v2',
      description: 'A modern portfolio built with React, TypeScript, and Tailwind, featuring dark mode, animated hero, project cards, and optimized Lighthouse scores.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/dominhduy09/portfolio',
      demo: 'https://dmd-portfolio.vercel.app',
      image: '/images/projects/portfolio.png',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ translateY: -8 }}
                className="group"
              >
                <div className="h-full rounded-lg overflow-hidden bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 shadow-sm hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300">
                  {/* Project Image / Placeholder */}
                  <div className="relative w-full h-48 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} cover`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                        }}
                      />
                    ) : null}

                    {!project.image && (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                        <div className="text-center px-4">
                          <div className="text-4xl mb-2">💻</div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{project.title}</p>
                        </div>
                      </div>
                    )}

                    {/* Gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 font-medium transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>

                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                          aria-label={`View ${project.title} demo`}
                        >
                          <ExternalLink size={16} />
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/dominhduy09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 text-gray-900 dark:text-white font-semibold transition-colors"
            >
              <Github size={20} />
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
